"""Turn the Word file the company sends for a blog post into the post's content file.

    python scripts/blog/docx-to-post.py "<article>.docx" content/blog/<slug>.recipe.json

Writes content/blog/<slug>.mjs next to the recipe. The text is copied out of the
Word file by this script and never retyped, so the Arabic and Kurdish reach the
site exactly as they were written. Standard library only: nothing to install.

What the Word file has to look like (one block per language, in the order the
recipe's "languages" list gives):

    English                     a short all-italic line naming the language
    Title of the article        Heading 1
    Company · Team · Month      all-italic byline; the part after the last " · " is the date
    Intro paragraph(s)
    1. A section                Heading 2, with its number typed, not automatic
    Paragraphs and lists        a list item may open with a bold lead-in
    A closing line              all bold: becomes the call-to-action heading
    Email: ... · Phone: ...     the line with an @: becomes the contact details
    Sources: ...                all italic, last: the sources note (optional)

Everything about the post that is not article text lives in the recipe:

    slug, date, languages, cover        required
    updated                             optional: the day the article last changed
    guide                               optional: per language file, cover, title, pages
    inserts                             optional: where the guide card and page links go
    summary, dateLabel                  optional, per language: use them when the
                                        script's own pick (printed at the end) is wrong

The script stops, rather than guess, at anything it cannot carry over faithfully:
tables, pictures, links, footnotes, tracked changes, superscripts, nested lists,
automatically numbered headings. An article that silently lost a table would
pass every other check, because all three languages would lose it alike.
"""
import json
import math
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
PUBLIC = Path(__file__).resolve().parents[2] / 'public'

# What may sit inside a paragraph or a run without carrying any text of its own.
PARAGRAPH_SKIP = {'pPr', 'bookmarkStart', 'bookmarkEnd', 'proofErr', 'commentRangeStart', 'commentRangeEnd',
                  'permStart', 'permEnd'}
RUN_SKIP = {'rPr', 'lastRenderedPageBreak', 'softHyphen', 'commentReference', 'annotationRef'}
RUN_SPACE = {'tab', 'br', 'cr'}

TRACKED = {'ins', 'del', 'moveFrom', 'moveTo'}
# Plain names for the things this script refuses, so the message says what to
# look for in Word rather than quoting an XML tag alone.
NAMES = {
    'tbl': 'a table',
    'sdt': 'a content control (a form field or locked block)',
    'hyperlink': 'a link',
    'footnoteReference': 'a footnote',
    'endnoteReference': 'an endnote',
    'drawing': 'a picture or shape',
    'pict': 'a picture or shape',
    'object': 'an embedded object',
    'sym': 'a character added with Insert > Symbol',
    'fldSimple': 'a field (page number, date, cross-reference)',
    'fldChar': 'a field (page number, date, cross-reference)',
    'instrText': 'a field (page number, date, cross-reference)',
    'smartTag': 'a smart tag',
    'ins': 'a tracked change',
    'del': 'a tracked change',
    'moveFrom': 'a tracked change',
    'moveTo': 'a tracked change',
}


def fail(message):
    sys.exit(f'docx-to-post: {message}')


def refuse(tag, near):
    what = NAMES.get(tag, f'something this script does not know (<w:{tag}>)')
    advice = ('Accept or reject every tracked change in Word, then run this again.' if tag in TRACKED
              else 'Take it out of the Word file, or add support for it to this script.')
    fail(f'the Word file has {what} near "{near[:50]}", which would be lost on the way to the site. {advice}')


def local(el):
    return el.tag.rsplit('}', 1)[-1]


def norm(text):
    """Collapse runs of whitespace, so a comparison ignores how runs were split."""
    return ' '.join(text.split())


def flag(rpr, tag):
    """Whether a run switches a property such as bold on (True) or off (False), or says nothing (None).

    Right-to-left text carries its own flag (bCs, iCs) beside the Latin one, so
    either being on counts.
    """
    if rpr is None:
        return None
    seen = None
    for name in (tag, tag + 'Cs'):
        el = rpr.find(W + name)
        if el is None:
            continue
        if el.get(W + 'val') not in ('0', 'false', 'off'):
            return True
        seen = False
    return seen


def size_label(size):
    """The same label, with the same rounding, as fileSizeLabel() in lib/blog.mjs."""
    if size < 100 * 1024:
        return f'{max(1, math.floor(size / 1024 + 0.5))} KB'
    return f'{math.floor(size / (1024 * 1024) * 10 + 0.5) / 10:.1f} MB'


def read_paragraphs(docx_path):
    """Every non-empty paragraph as {style, list, num_id, runs: [(bold, italic, text)], text}."""
    with zipfile.ZipFile(docx_path) as z:
        names = z.namelist()
        document = ET.fromstring(z.read('word/document.xml'))
        styles = ET.fromstring(z.read('word/styles.xml')) if 'word/styles.xml' in names else None
        numbering = ET.fromstring(z.read('word/numbering.xml')) if 'word/numbering.xml' in names else None

    style_names = {}
    style_lists = {}   # paragraph style -> (numId, level), for lists made with "List Number" and the like
    char_styles = {}   # character style -> (bold, italic), for bold made with "Strong" and the like
    if styles is not None:
        for style in styles.findall(W + 'style'):
            style_id = style.get(W + 'styleId')
            name = style.find(W + 'name')
            if name is not None:
                style_names[style_id] = name.get(W + 'val')
            if style.get(W + 'type') == 'character':
                rpr = style.find(W + 'rPr')
                char_styles[style_id] = (flag(rpr, 'b'), flag(rpr, 'i'))
            numpr = style.find(f'{W}pPr/{W}numPr')
            if numpr is not None and numpr.find(W + 'numId') is not None:
                level = numpr.find(W + 'ilvl')
                style_lists[style_id] = (numpr.find(W + 'numId').get(W + 'val'),
                                         level.get(W + 'val') if level is not None else '0')

    # numId -> 'bullet' or 'ordered', read from the list's first level
    list_kinds = {}
    if numbering is not None:
        abstract = {}
        for a in numbering.findall(W + 'abstractNum'):
            level = a.find(W + 'lvl')
            fmt = level.find(W + 'numFmt').get(W + 'val') if level is not None else 'bullet'
            abstract[a.get(W + 'abstractNumId')] = 'bullet' if fmt == 'bullet' else 'ordered'
        for num in numbering.findall(W + 'num'):
            list_kinds[num.get(W + 'numId')] = abstract.get(num.find(W + 'abstractNumId').get(W + 'val'), 'bullet')

    paragraphs = []
    for block in document.find(W + 'body'):
        kind = local(block)
        if kind in ('sectPr', 'bookmarkStart', 'bookmarkEnd', 'proofErr'):
            continue
        if kind != 'p':
            # A table or content control sits beside the paragraphs, so reading
            # paragraphs alone would skip everything inside it without a word.
            refuse(kind, norm(''.join(block.itertext())))
        p = block
        near = norm(''.join(t.text or '' for t in p.iter(W + 't')))

        ppr = p.find(W + 'pPr')
        style_id = None
        num_id, level = None, '0'
        if ppr is not None:
            pstyle = ppr.find(W + 'pStyle')
            if pstyle is not None:
                style_id = pstyle.get(W + 'val')
            numpr = ppr.find(W + 'numPr')
            if numpr is not None and numpr.find(W + 'numId') is not None:
                num_id = numpr.find(W + 'numId').get(W + 'val')
                if numpr.find(W + 'ilvl') is not None:
                    level = numpr.find(W + 'ilvl').get(W + 'val')
        if num_id is None and style_id in style_lists:
            num_id, level = style_lists[style_id]
        if num_id == '0':
            num_id = None   # Word's way of saying "numbering switched off here"

        # Word stores its built-in names in lowercase ("heading 1"), whatever
        # the ribbon shows, so compare in lowercase throughout.
        style = style_names.get(style_id, style_id or 'Normal').lower()

        runs = []
        for child in p:
            name = local(child)
            if name in PARAGRAPH_SKIP:
                continue
            if name != 'r':
                refuse(name, near)
            rpr = child.find(W + 'rPr')
            if rpr is not None:
                raised = rpr.find(W + 'vertAlign')
                if raised is not None and raised.get(W + 'val') in ('superscript', 'subscript'):
                    fail(f'the Word file has superscript or subscript text near "{near[:50]}", which the site '
                         'would show at normal size ("10 6" for a million). Type the real character instead (m², CO₂).')
            text = ''
            for part in child:
                part_name = local(part)
                if part_name == 't':
                    text += part.text or ''
                elif part_name in RUN_SPACE:
                    text += ' '
                elif part_name == 'noBreakHyphen':
                    text += '-'
                elif part_name not in RUN_SKIP:
                    refuse(part_name, near)
            if not text:
                continue
            style_bold, style_italic = (None, None)
            if rpr is not None and rpr.find(W + 'rStyle') is not None:
                style_bold, style_italic = char_styles.get(rpr.find(W + 'rStyle').get(W + 'val'), (None, None))
            bold, italic = flag(rpr, 'b'), flag(rpr, 'i')
            runs.append((bool(style_bold if bold is None else bold),
                         bool(style_italic if italic is None else italic),
                         text))

        text = norm(''.join(t for _, _, t in runs))
        if not text:
            continue

        list_kind = None
        if num_id is not None:
            if num_id not in list_kinds:
                fail(f'the list item "{text[:50]}" uses a list the Word file does not define')
            if level != '0':
                fail(f'the Word file has a list inside a list at "{text[:50]}". The site shows one level only: '
                     'make it its own list or part of the item above.')
            if style.startswith('heading'):
                fail(f'the heading "{text[:50]}" gets its number from Word, so the number would be lost. '
                     'Switch the automatic numbering off and type the number.')
            list_kind = list_kinds[num_id]

        paragraphs.append({
            'style': style,
            'list': list_kind,
            'num_id': num_id,
            'runs': runs,
            'text': text,
            'all_bold': all(b for b, _, t in runs if t.strip()),
            'all_italic': all(i for _, i, t in runs if t.strip()),
        })
    return paragraphs


def split_languages(paragraphs, langs):
    """Cut the document at each language marker: an italic line just before a Heading 1."""
    starts = [
        i for i, p in enumerate(paragraphs[:-1])
        if p['all_italic'] and p['style'] == 'normal' and paragraphs[i + 1]['style'] == 'heading 1'
    ]
    if len(starts) != len(langs):
        fail(f'found {len(starts)} language sections but the recipe lists {len(langs)}')
    sections = {}
    markers = {}
    for n, lang in enumerate(langs):
        end = starts[n + 1] if n + 1 < len(starts) else len(paragraphs)
        markers[lang] = paragraphs[starts[n]]['text']
        sections[lang] = paragraphs[starts[n] + 1:end]
    return sections, markers


def list_item(p):
    """A list paragraph as {lead, text}: the lead is the bold opening, if it has one."""
    lead = ''
    rest = ''
    in_lead = True
    for bold, _, text in p['runs']:
        if in_lead and bold:
            lead += text
        else:
            in_lead = False
            rest += text
    lead, rest = norm(lead), norm(rest)
    if lead and rest:
        if norm(f'{lead} {rest}') != p['text']:
            fail(f'could not split a list item cleanly: {p["text"][:60]!r}')
        return {'lead': lead, 'text': rest}
    return {'text': p['text']}


def first_sentence(text):
    """Up to the first full stop or question mark that really ends a sentence.

    "approx. 5 MW" and "e.g. the plant" do not: a digit or a small letter follows.
    """
    for i, ch in enumerate(text):
        if ch not in '.?!؟':
            continue
        if i + 1 == len(text):
            return text
        if text[i + 1] == ' ' and i + 2 < len(text) and not (text[i + 2].islower() or text[i + 2].isdigit()):
            return text[:i + 1]
    return text


def build_language(lang, paragraphs, recipe):
    if len(paragraphs) < 4 or paragraphs[0]['style'] != 'heading 1':
        fail(f'{lang}: expected a Heading 1 title first')
    title = paragraphs[0]['text']
    if not paragraphs[1]['all_italic']:
        fail(f'{lang}: expected an all-italic byline under the title')
    byline = paragraphs[1]['text']

    body = paragraphs[2:]
    blocks = []
    cta = None
    contact_line = None
    sources = None
    numbered_lists = set()
    i = 0
    while i < len(body):
        p = body[i]
        if p['list']:
            kind = 'ol' if p['list'] == 'ordered' else 'ul'
            items = []
            num_id = p['num_id']
            if kind == 'ol':
                if num_id in numbered_lists:
                    fail(f'{lang}: the numbered list carries on at "{p["text"][:50]}" after a paragraph in between. '
                         'The site would start it again at 1. Put that paragraph inside the step above it.')
                numbered_lists.add(num_id)
            while i < len(body) and body[i]['list'] and body[i]['num_id'] == num_id:
                items.append(list_item(body[i]))
                i += 1
            blocks.append({'type': kind, 'items': items})
            continue
        if p['style'] == 'heading 2':
            blocks.append({'type': 'h2', 'text': p['text']})
        elif p['style'].startswith('heading'):
            fail(f'{lang}: only Heading 1 (the title) and Heading 2 (sections) are used; "{p["text"][:50]}" is {p["style"]}')
        elif '@' in p['text'] and contact_line is None:
            contact_line = p['text']
        elif p['all_bold'] and cta is None and contact_line is None:
            cta = p['text']
        elif p['all_italic'] and i == len(body) - 1:
            sources = p['text']
        elif cta is not None or contact_line is not None:
            fail(f'{lang}: unexpected text after the closing line: {p["text"][:60]!r}')
        else:
            blocks.append({'type': 'p', 'text': p['text']})
        i += 1

    if not blocks or blocks[0]['type'] != 'p':
        fail(f'{lang}: expected an intro paragraph before the first section')
    if cta is None:
        fail(f'{lang}: no all-bold closing line found')

    summary = recipe.get('summary', {}).get(lang) or first_sentence(blocks[0]['text'])
    if not 40 <= len(summary) <= 300:
        fail(f'{lang}: the summary picked from the intro is {len(summary)} characters ("{summary[:60]}"). '
             'It is the text under the title in search results, so give one of 40 to 300 characters '
             f'in the recipe: "summary": {{"{lang}": "..."}}')

    date_label = recipe.get('dateLabel', {}).get(lang)
    if not date_label:
        parts = byline.split(' · ')
        if len(parts) < 2:
            fail(f'{lang}: the byline "{byline[:60]}" has no " · " to find the date after. '
                 f'Use the middle dot, or give the date in the recipe: "dateLabel": {{"{lang}": "..."}}')
        date_label = parts[-1].strip()

    result = {
        'title': title,
        'byline': byline,
        'dateLabel': date_label,
        'summary': summary,
        'blocks': blocks,
        'cta': cta,
    }
    if sources:
        result['sources'] = sources
    return result, contact_line


def read_contact(contact_lines):
    """The email and the phone numbers from the contact lines, cross-checked between languages."""
    lines = {lang: line for lang, line in contact_lines.items() if line}
    if not lines:
        return None

    emails = {}
    for lang, line in lines.items():
        found = re.findall(r'[\w.+-]+@[\w.-]+\.\w+', line)
        if len(found) != 1:
            fail(f'{lang}: expected one email address on the contact line, found {len(found)}')
        emails[lang] = found[0]
    if len(set(emails.values())) > 1:
        fail(f'the languages give different email addresses: {emails}')

    # A language may write the numbers the local way (0771 ...) as long as one
    # writes them in full. The last nine digits are compared, so a typo in one
    # language's number is caught rather than published.
    phones = []
    tails = {}
    for lang, line in lines.items():
        numbers = [norm(m) for m in re.findall(r'\+?\d[\d ]{7,}\d', line)]
        tails[lang] = sorted(re.sub(r'\D', '', n)[-9:] for n in numbers)
        full = [n for n in numbers if n.startswith('+')]
        if full and not phones:
            phones = full
    if not phones:
        fail('no language gives the phone numbers in full international form (+964 ...), '
             'which is what the site shows and dials')
    if len({tuple(t) for t in tails.values() if t}) > 1:
        fail(f'the phone numbers differ between languages (last nine digits): {tails}')
    return {'email': next(iter(emails.values())), 'phones': phones}


def apply_inserts(blocks, inserts):
    """Place the recipe's non-text blocks. Section 0 is the intro; section N starts at the Nth heading."""
    for insert in inserts:
        target = insert['endOfSection']
        section = 0
        position = None
        for index, block in enumerate(blocks):
            if block['type'] == 'h2':
                if section == target:
                    position = index
                    break
                section += 1
        if position is None:
            if section != target:
                fail(f'inserts: the article has no section {target}')
            position = len(blocks)
        blocks.insert(position, dict(insert['block']))
    return blocks


def shape(blocks):
    """The article's structure in one line; lib/blog.mjs draws the same picture."""
    parts = []
    for b in blocks:
        if b['type'] in ('ul', 'ol'):
            leads = sum(1 for item in b['items'] if 'lead' in item)
            parts.append(f'{b["type"]}:{len(b["items"])}' + (f'+{leads}lead' if leads else ''))
        else:
            parts.append(b['type'])
    return ' '.join(parts)


def main():
    # The Arabic and Kurdish in the report below would crash a Windows console
    # that is still on a legacy code page.
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    if len(sys.argv) != 3:
        fail('usage: docx-to-post.py <article.docx> <recipe.json>')
    docx_path, recipe_path = Path(sys.argv[1]), Path(sys.argv[2])
    recipe = json.loads(recipe_path.read_text(encoding='utf-8'))
    langs = recipe['languages']

    sections, markers = split_languages(read_paragraphs(docx_path), langs)

    post = {'slug': recipe['slug'], 'date': recipe['date']}
    if 'updated' in recipe:
        post['updated'] = recipe['updated']
    post['cover'] = recipe['cover']

    contact_lines = {}
    bodies = {}
    for lang in langs:
        bodies[lang], contact_lines[lang] = build_language(lang, sections[lang], recipe)

    contact = read_contact(contact_lines)
    if contact:
        post['contact'] = contact

    first_shape = shape(bodies[langs[0]]['blocks'])
    for lang in langs:
        if shape(bodies[lang]['blocks']) != first_shape:
            fail(f'{lang} is not built like {langs[0]}:\n  {shape(bodies[lang]["blocks"])}\n  {first_shape}')
        body = bodies[lang]
        body['blocks'] = apply_inserts(body['blocks'], recipe.get('inserts', []))
        guide = recipe.get('guide')
        if guide:
            body['guide'] = {
                'file': guide[lang]['file'],
                'cover': guide[lang]['cover'],
                'title': guide[lang]['title'],
                'pages': guide[lang]['pages'],
                'size': size_label((PUBLIC / guide[lang]['file'].lstrip('/')).stat().st_size),
            }
        post[lang] = body

    out_path = recipe_path.with_name(f'{recipe["slug"]}.mjs')
    header = (
        f'// Written by scripts/blog/docx-to-post.py from the company\'s Word file\n'
        f'// "{docx_path.name}".\n'
        f'// To change a setting (date, cover, guide files), edit {recipe_path.name} and run the\n'
        f'// script again. A small wording fix can be made here by hand, but it is lost\n'
        f'// the next time the script runs, so fix the Word file too.\n'
    )
    out_path.write_text(
        header + 'const post = ' + json.dumps(post, ensure_ascii=False, indent=2) + ';\n\nexport default post;\n',
        encoding='utf-8',
        newline='\n',
    )

    # Languages are matched to sections by their order in the recipe, and the
    # summary and date are picked by rule, so show what was decided. `npm test`
    # also fails if Arabic and Kurdish have ended up in each other's place.
    print(f'wrote {out_path}')
    print(f'structure: {first_shape}')
    for lang in langs:
        print(f'{lang}  section "{markers[lang]}"  date "{post[lang]["dateLabel"]}"')
        print(f'    summary: {post[lang]["summary"]}')
    print('Check the lines above, then run: npm test')


if __name__ == '__main__':
    main()
