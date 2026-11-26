"""Turn the Word file the company sends for a blog post into the post's content file.

    python scripts/blog/docx-to-post.py "<article>.docx" content/blog/<slug>.recipe.json

Writes content/blog/<slug>.mjs next to the recipe. The text is copied out of the
Word file by this script and never retyped, so the Arabic and Kurdish reach the
site exactly as they were written. Standard library only: nothing to install.

What the Word file has to look like (one block per language, in the order the
recipe's "languages" list gives):

    English                     a short all-italic line naming the language
    Title of the article        Heading 1
    Company · Team · Month      all-italic byline; the last part is the date
    Intro paragraph(s)
    1. A section                Heading 2
    Paragraphs and lists        a list item may open with a bold lead-in
    A closing line              all bold: becomes the call-to-action heading
    Email: ... · Phone: ...     the line with an @: becomes the contact details
    Sources: ...                all italic, last: the sources note (optional)

Everything about the post that is not article text lives in the recipe: slug,
date, cover photo, the PDF guide, and where the guide card and page links go.
"""
import json
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
PUBLIC = Path(__file__).resolve().parents[2] / 'public'


def fail(message):
    sys.exit(f'docx-to-post: {message}')


def norm(text):
    """Collapse runs of whitespace, so a comparison ignores how runs were split."""
    return ' '.join(text.split())


def on(rpr, tag):
    """True if a run property such as bold is switched on.

    Right-to-left text carries its own flag (bCs, iCs) beside the Latin one, so
    either counts.
    """
    if rpr is None:
        return False
    for name in (tag, tag + 'Cs'):
        el = rpr.find(W + name)
        if el is not None and el.get(W + 'val') not in ('0', 'false'):
            return True
    return False


def read_paragraphs(docx_path):
    """Every non-empty paragraph as {style, list, runs: [(bold, italic, text)], text}."""
    with zipfile.ZipFile(docx_path) as z:
        names = z.namelist()
        document = ET.fromstring(z.read('word/document.xml'))
        styles = ET.fromstring(z.read('word/styles.xml')) if 'word/styles.xml' in names else None
        numbering = ET.fromstring(z.read('word/numbering.xml')) if 'word/numbering.xml' in names else None

    style_names = {}
    if styles is not None:
        for style in styles.findall(W + 'style'):
            name = style.find(W + 'name')
            if name is not None:
                style_names[style.get(W + 'styleId')] = name.get(W + 'val')

    # numId -> 'bullet' or 'ordered'
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
    for p in document.find(W + 'body').findall(W + 'p'):
        for unsupported in ('drawing', 'pict', 'object', 'footnoteReference'):
            if p.find(f'.//{W}{unsupported}') is not None:
                fail(f'the Word file has a <{unsupported}> this script does not carry over')

        ppr = p.find(W + 'pPr')
        style_id = None
        num_id = None
        if ppr is not None:
            pstyle = ppr.find(W + 'pStyle')
            if pstyle is not None:
                style_id = pstyle.get(W + 'val')
            numpr = ppr.find(W + 'numPr')
            if numpr is not None and numpr.find(W + 'numId') is not None:
                num_id = numpr.find(W + 'numId').get(W + 'val')

        runs = []
        for r in p.iter(W + 'r'):
            text = ''
            for child in r:
                if child.tag == W + 't':
                    text += child.text or ''
                elif child.tag == W + 'tab':
                    text += ' '
                elif child.tag in (W + 'br', W + 'cr'):
                    text += ' '
            if text:
                rpr = r.find(W + 'rPr')
                runs.append((on(rpr, 'b'), on(rpr, 'i'), text))

        text = norm(''.join(t for _, _, t in runs))
        if not text:
            continue
        paragraphs.append({
            # Word stores its built-in names in lowercase ("heading 1"), whatever
            # the ribbon shows, so compare in lowercase throughout.
            'style': style_names.get(style_id, style_id or 'Normal').lower(),
            'list': list_kinds.get(num_id, 'bullet') if num_id else None,
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
    for n, lang in enumerate(langs):
        end = starts[n + 1] if n + 1 < len(starts) else len(paragraphs)
        sections[lang] = paragraphs[starts[n] + 1:end]
    return sections


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
    end = text.find('. ')
    return text if end == -1 else text[:end + 1]


def build_language(lang, paragraphs):
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
    i = 0
    while i < len(body):
        p = body[i]
        if p['list']:
            kind = 'ol' if p['list'] == 'ordered' else 'ul'
            items = []
            num_id = p['num_id']
            while i < len(body) and body[i]['list'] and body[i]['num_id'] == num_id:
                items.append(list_item(body[i]))
                i += 1
            blocks.append({'type': kind, 'items': items})
            continue
        if p['style'] == 'heading 2':
            blocks.append({'type': 'h2', 'text': p['text']})
        elif p['style'] == 'heading 1':
            fail(f'{lang}: a second Heading 1 inside one language')
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

    result = {
        'title': title,
        'byline': byline,
        'dateLabel': byline.split(' · ')[-1].strip(),
        'summary': first_sentence(blocks[0]['text']),
        'blocks': blocks,
        'cta': cta,
    }
    if sources:
        result['sources'] = sources
    return result, contact_line


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
    parts = []
    for b in blocks:
        if b['type'] in ('ul', 'ol'):
            parts.append(f'{b["type"]}:{len(b["items"])}')
        else:
            parts.append(b['type'])
    return ' '.join(parts)


def file_size(public_path):
    size = (PUBLIC / public_path.lstrip('/')).stat().st_size
    return f'{size / (1024 * 1024):.1f} MB'


def main():
    if len(sys.argv) != 3:
        fail('usage: docx-to-post.py <article.docx> <recipe.json>')
    docx_path, recipe_path = Path(sys.argv[1]), Path(sys.argv[2])
    recipe = json.loads(recipe_path.read_text(encoding='utf-8'))
    langs = recipe['languages']

    sections = split_languages(read_paragraphs(docx_path), langs)

    post = {'slug': recipe['slug'], 'date': recipe['date'], 'cover': recipe['cover']}
    contact_lines = {}
    bodies = {}
    for lang in langs:
        bodies[lang], contact_lines[lang] = build_language(lang, sections[lang])

    # Contact details come from whichever language wrote the numbers in full
    # international form; the others are checked to name the same address.
    emails = {re.search(r'[\w.+-]+@[\w.-]+\.\w+', line).group(0) for line in contact_lines.values() if line}
    if len(emails) > 1:
        fail(f'the languages give different email addresses: {sorted(emails)}')
    phones = []
    for line in contact_lines.values():
        found = [norm(m) for m in re.findall(r'\+\d[\d ]{6,}\d', line or '')]
        if found:
            phones = found
            break
    if emails:
        post['contact'] = {'email': emails.pop(), 'phones': phones}

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
                'size': file_size(guide[lang]['file']),
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
    words = {lang: sum(len(b.get('text', '').split()) for b in post[lang]['blocks']) for lang in langs}
    print(f'wrote {out_path} ({first_shape}); paragraph words per language: {words}')


if __name__ == '__main__':
    main()
