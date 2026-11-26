"""Tests for docx-to-post.py, on small Word files built in a temporary folder.

    python -m unittest discover -s scripts/blog -p "test_*.py"

Standard library only. Each test writes a three-language Word file with one
thing changed, runs the real script on it, and reads back either the article it
wrote or the message it stopped with.
"""
import importlib.util
import json
import subprocess
import sys
import tempfile
import unittest
import zipfile
from pathlib import Path
from xml.sax.saxutils import escape

SCRIPT = Path(__file__).with_name('docx-to-post.py')
NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
T = '<w:t xml:space="preserve">'

STYLES = (
    f'<?xml version="1.0" encoding="UTF-8"?><w:styles xmlns:w="{NS}">'
    '<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/></w:style>'
    '<w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/></w:style>'
    '<w:style w:type="paragraph" w:styleId="Heading3"><w:name w:val="heading 3"/></w:style>'
    '<w:style w:type="paragraph" w:styleId="ListNumber"><w:name w:val="List Number"/>'
    '<w:pPr><w:numPr><w:numId w:val="2"/></w:numPr></w:pPr></w:style>'
    '<w:style w:type="character" w:styleId="Strong"><w:name w:val="Strong"/><w:rPr><w:b/><w:bCs/></w:rPr></w:style>'
    '</w:styles>'
)
# List 1 is bullets; list 2 is numbers, with bullets on its second level.
NUMBERING = (
    f'<?xml version="1.0" encoding="UTF-8"?><w:numbering xmlns:w="{NS}">'
    '<w:abstractNum w:abstractNumId="0"><w:lvl w:ilvl="0"><w:numFmt w:val="bullet"/></w:lvl></w:abstractNum>'
    '<w:abstractNum w:abstractNumId="1"><w:lvl w:ilvl="0"><w:numFmt w:val="decimal"/></w:lvl>'
    '<w:lvl w:ilvl="1"><w:numFmt w:val="bullet"/></w:lvl></w:abstractNum>'
    '<w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num>'
    '<w:num w:numId="2"><w:abstractNumId w:val="1"/></w:num>'
    '</w:numbering>'
)

ORDER = [('English', 'en'), ('Arabic', 'ar'), ('Kurdish', 'ku')]
# The second sentence opens with a capital on purpose: that is how the script
# tells the end of a sentence from an abbreviation such as "approx.".
INTRO = '{w} is the first sentence of the intro paragraph. Then the second one.'


def run(text, b=False, i=False, props=''):
    props += ('<w:b/><w:bCs/>' if b else '') + ('<w:i/><w:iCs/>' if i else '')
    return '<w:r>' + (f'<w:rPr>{props}</w:rPr>' if props else '') + T + escape(text) + '</w:t></w:r>'


def para(*runs, style=None, num=None, level=0):
    ppr = f'<w:pStyle w:val="{style}"/>' if style else ''
    if num is not None:
        ppr += f'<w:numPr><w:ilvl w:val="{level}"/><w:numId w:val="{num}"/></w:numPr>'
    return '<w:p>' + (f'<w:pPr>{ppr}</w:pPr>' if ppr else '') + ''.join(runs) + '</w:p>'


def convert(extra=lambda w: [], order=ORDER, phone=lambda w: '+964 771 706 5000', intro=INTRO,
            byline='Co · Team · {w} 2026', recipe=None):
    """Build a Word file, run the script on it, return (the article or None, what the script said)."""
    body = ''
    for marker, w in order:
        body += ''.join([
            para(run(marker, i=True)),
            para(run(f'{w} title'), style='Heading1'),
            para(run(byline.replace('{w}', w), i=True)),
            para(run(intro.replace('{w}', w))),
            para(run(f'1. {w} section'), style='Heading2'),
            para(run(f'{w} body.')),
            *extra(w),
            para(run(f'{w} closing line', b=True)),
            para(run(f'Email: t@example.com · Phone: {phone(w)}')),
            para(run(f'Sources: {w}', i=True)),
        ])
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        docx = tmp / 'article.docx'
        with zipfile.ZipFile(docx, 'w') as z:
            z.writestr('word/document.xml',
                       f'<?xml version="1.0" encoding="UTF-8"?><w:document xmlns:w="{NS}"><w:body>{body}'
                       '<w:sectPr/></w:body></w:document>')
            z.writestr('word/styles.xml', STYLES)
            z.writestr('word/numbering.xml', NUMBERING)
        settings = {'slug': 'test-post', 'date': '2026-11-27', 'languages': ['en', 'ar', 'ku'],
                    'cover': {'src': '/x.jpg'}}
        settings.update(recipe or {})
        recipe_path = tmp / 'test-post.recipe.json'
        recipe_path.write_text(json.dumps(settings), encoding='utf-8')
        done = subprocess.run([sys.executable, '-I', '-X', 'utf8', str(SCRIPT), str(docx), str(recipe_path)],
                              capture_output=True, text=True, encoding='utf-8')
        said = (done.stderr + done.stdout).strip()
        out = tmp / 'test-post.mjs'
        if done.returncode != 0 or not out.exists():
            return None, said
        text = out.read_text(encoding='utf-8')
        start = text.index('const post = ') + len('const post = ')
        return json.loads(text[start:text.rindex(';\n\nexport default post;')]), said


def load_script():
    spec = importlib.util.spec_from_file_location('docx_to_post', SCRIPT)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


class Converts(unittest.TestCase):
    def test_a_plain_article(self):
        post, said = convert(extra=lambda w: [
            para(run('Lead:', b=True), run(f' {w} item'), num=1),
            para(run(f'{w} plain item'), num=1),
            para(run('First.', b=True), run(f' {w} step'), num=2),
        ])
        self.assertIsNotNone(post, said)
        self.assertEqual(post['slug'], 'test-post')
        self.assertEqual(post['contact'], {'email': 't@example.com', 'phones': ['+964 771 706 5000']})
        self.assertEqual(post['ar'], {
            'title': 'ar title',
            'byline': 'Co · Team · ar 2026',
            'dateLabel': 'ar 2026',
            'summary': 'ar is the first sentence of the intro paragraph.',
            'blocks': [
                {'type': 'p', 'text': 'ar is the first sentence of the intro paragraph. Then the second one.'},
                {'type': 'h2', 'text': '1. ar section'},
                {'type': 'p', 'text': 'ar body.'},
                {'type': 'ul', 'items': [{'lead': 'Lead:', 'text': 'ar item'}, {'text': 'ar plain item'}]},
                {'type': 'ol', 'items': [{'lead': 'First.', 'text': 'ar step'}]},
            ],
            'cta': 'ar closing line',
            'sources': 'Sources: ar',
        })
        # the report names which section went to which language
        self.assertIn('ku  section "Kurdish"', said)

    def test_inserts_go_to_the_end_of_their_section(self):
        post, said = convert(recipe={'inserts': [
            {'endOfSection': 0, 'block': {'type': 'link', 'page': 'projects'}},
            {'endOfSection': 1, 'block': {'type': 'link', 'page': 'projects'}},
        ]})
        self.assertIsNotNone(post, said)
        self.assertEqual([b['type'] for b in post['en']['blocks']], ['p', 'link', 'h2', 'p', 'link'])

    def test_updated_is_carried_over_from_the_recipe(self):
        post, said = convert(recipe={'updated': '2026-12-05'})
        self.assertIsNotNone(post, said)
        self.assertEqual(post['updated'], '2026-12-05')

    def test_a_non_breaking_hyphen_stays_a_hyphen(self):
        post, said = convert(extra=lambda w: [
            '<w:p><w:r>' + T + f'{w} IEC 60870</w:t><w:noBreakHyphen/><w:t>5</w:t><w:noBreakHyphen/><w:t>101.</w:t></w:r></w:p>',
        ])
        self.assertIsNotNone(post, said)
        self.assertEqual(post['en']['blocks'][3], {'type': 'p', 'text': 'en IEC 60870-5-101.'})

    def test_a_list_made_with_a_list_style_is_still_a_list(self):
        post, said = convert(extra=lambda w: [
            para(run(f'{w} step one'), style='ListNumber'),
            para(run(f'{w} step two'), style='ListNumber'),
        ])
        self.assertIsNotNone(post, said)
        self.assertEqual(post['en']['blocks'][3],
                         {'type': 'ol', 'items': [{'text': 'en step one'}, {'text': 'en step two'}]})

    def test_numbering_switched_off_is_a_plain_paragraph(self):
        post, said = convert(extra=lambda w: [para(run(f'{w} not a list item.'), num=0)])
        self.assertIsNotNone(post, said)
        self.assertEqual(post['en']['blocks'][3], {'type': 'p', 'text': 'en not a list item.'})

    def test_bold_switched_off_is_not_a_lead_in(self):
        post, said = convert(extra=lambda w: [
            para(run('NotBold:', props='<w:b w:val="off"/>'), run(f' {w} rest'), num=1),
        ])
        self.assertIsNotNone(post, said)
        self.assertEqual(post['en']['blocks'][3], {'type': 'ul', 'items': [{'text': 'NotBold: en rest'}]})

    def test_bold_from_a_character_style_is_a_lead_in(self):
        post, said = convert(extra=lambda w: [
            para(run('Lead:', props='<w:rStyle w:val="Strong"/>'), run(f' {w} rest'), num=1),
        ])
        self.assertIsNotNone(post, said)
        self.assertEqual(post['en']['blocks'][3], {'type': 'ul', 'items': [{'lead': 'Lead:', 'text': 'en rest'}]})

    def test_phones_written_the_local_way_in_other_languages(self):
        post, said = convert(phone=lambda w: '+964 771 706 5000' if w == 'en' else '0771 706 5000')
        self.assertIsNotNone(post, said)
        self.assertEqual(post['contact']['phones'], ['+964 771 706 5000'])

    def test_the_summary_does_not_stop_at_an_abbreviation(self):
        post, said = convert(intro='{w} plants of approx. 5 MW, e.g. a small one, need a study. Second sentence.')
        self.assertIsNotNone(post, said)
        self.assertEqual(post['en']['summary'], 'en plants of approx. 5 MW, e.g. a small one, need a study.')

    def test_the_summary_can_end_in_a_question_mark(self):
        post, said = convert(intro='{w} asks how much solar the grid can really take? The answer is here.')
        self.assertIsNotNone(post, said)
        self.assertEqual(post['ku']['summary'], 'ku asks how much solar the grid can really take?')

    def test_summary_and_date_label_can_come_from_the_recipe(self):
        summary = 'A summary written by hand, long enough to be worth showing.'
        post, said = convert(intro='{w} short. More.', byline='Co | Team | {w} 2026', recipe={
            'summary': {'en': summary, 'ar': summary, 'ku': summary},
            'dateLabel': {'en': 'November 2026', 'ar': 'November 2026', 'ku': 'November 2026'},
        })
        self.assertIsNotNone(post, said)
        self.assertEqual(post['ar']['summary'], summary)
        self.assertEqual(post['ar']['dateLabel'], 'November 2026')


class Refuses(unittest.TestCase):
    """Each of these used to produce an article with something missing, and exit 0."""

    def refused(self, expected, **kwargs):
        post, said = convert(**kwargs)
        self.assertIsNone(post, f'the script wrote an article instead of stopping:\n{said}')
        self.assertIn(expected, said)

    def test_a_table(self):
        self.refused('a table', extra=lambda w: [
            f'<w:tbl><w:tr><w:tc><w:p><w:r><w:t>{w} cell 25 MW</w:t></w:r></w:p></w:tc></w:tr></w:tbl>',
            para(run(f'{w} after the table.')),
        ])

    def test_a_content_control(self):
        self.refused('a content control', extra=lambda w: [
            f'<w:sdt><w:sdtContent><w:p><w:r><w:t>{w} inside</w:t></w:r></w:p></w:sdtContent></w:sdt>',
        ])

    def test_superscript(self):
        self.refused('superscript or subscript', extra=lambda w: [
            para(run(f'{w} 10'), run('6', props='<w:vertAlign w:val="superscript"/>'), run(' ohm.')),
        ])

    def test_an_inserted_symbol(self):
        self.refused('Insert > Symbol', extra=lambda w: [
            '<w:p><w:r>' + T + f'{w} see </w:t><w:sym w:font="Wingdings" w:char="F0E0"/><w:t> next.</w:t></w:r></w:p>',
        ])

    def test_an_endnote(self):
        self.refused('an endnote', extra=lambda w: [
            f'<w:p><w:r><w:t>{w} claim</w:t></w:r><w:r><w:endnoteReference w:id="1"/></w:r></w:p>',
        ])

    def test_a_link(self):
        self.refused('a link', extra=lambda w: [
            f'<w:p><w:hyperlink w:anchor="x"><w:r><w:t>{w} linked text</w:t></w:r></w:hyperlink></w:p>',
        ])

    def test_tracked_changes(self):
        self.refused('Accept or reject every tracked change', extra=lambda w: [
            f'<w:p><w:moveFrom w:id="1" w:author="a"><w:r><w:t>{w} moved. </w:t></w:r></w:moveFrom>'
            f'<w:r><w:t>{w} stays.</w:t></w:r></w:p>',
        ])

    def test_a_numbered_list_split_by_a_paragraph(self):
        self.refused('carries on', extra=lambda w: [
            para(run(f'{w} step one'), num=2),
            para(run(f'{w} a note between the steps.')),
            para(run(f'{w} step two'), num=2),
        ])

    def test_a_heading_numbered_by_word(self):
        self.refused('gets its number from Word', extra=lambda w: [
            para(run(f'{w} numbered heading'), style='Heading2', num=2),
            para(run(f'{w} under it.')),
        ])

    def test_a_list_inside_a_list(self):
        self.refused('a list inside a list', extra=lambda w: [
            para(run(f'{w} step one'), num=2),
            para(run(f'{w} sub-point'), num=2, level=1),
        ])

    def test_a_third_level_heading(self):
        self.refused('only Heading 1', extra=lambda w: [para(run(f'{w} deeper'), style='Heading3')])

    def test_phones_in_local_form_everywhere(self):
        self.refused('full international form', phone=lambda w: '0771 706 5000')

    def test_a_phone_number_that_differs_in_one_language(self):
        self.refused('phone numbers differ between languages',
                     phone=lambda w: '+964 771 706 5000' if w != 'ku' else '0771 706 5001')

    def test_a_summary_too_short_to_use(self):
        self.refused('"summary"', intro='{w} short. More.')

    def test_a_byline_with_no_middle_dot(self):
        self.refused('"dateLabel"', byline='Co | Team | {w} 2026')

    def test_a_language_missing_from_the_file(self):
        self.refused('found 2 language sections', order=ORDER[:2])

    def test_a_translation_missing_a_paragraph(self):
        self.refused('ar is not built like en',
                     extra=lambda w: [] if w == 'ar' else [para(run(f'{w} one more paragraph.'))])


class Helpers(unittest.TestCase):
    def test_size_label_matches_the_site(self):
        # The same table as the fileSizeLabel test in lib/blog.test.mjs.
        size_label = load_script().size_label
        self.assertEqual([size_label(n) for n in (1024, 51200, 102399, 102400, 262144, 1697612, 1815792)],
                         ['1 KB', '50 KB', '100 KB', '0.1 MB', '0.3 MB', '1.6 MB', '1.7 MB'])


if __name__ == '__main__':
    unittest.main()
