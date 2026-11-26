import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LANGS } from './langs.mjs';
import { checkPost, fileSizeLabel, getPost, getPosts, publicFiles, sortPosts } from './blog.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');

// A word of real text per language, so the "is this the right language?"
// check has something true to look at.
const WORDS = { en: 'text', ar: 'نص عربي', ku: 'دەقی کوردی' };

// A small, complete post in the shape content/blog/*.mjs files use.
function fixture() {
  const body = (lang) => {
    const word = WORDS[lang];
    return {
      title: word,
      byline: word,
      dateLabel: `${word} 2026`,
      summary: word,
      blocks: [
        { type: 'p', text: word },
        { type: 'guide' },
        { type: 'h2', text: `1. ${word}` },
        { type: 'ul', items: [{ lead: 'A:', text: word }, { text: word }] },
        { type: 'ol', items: [{ lead: 'B.', text: word }] },
        { type: 'link', page: 'projects' },
      ],
      cta: word,
      sources: word,
      guide: {
        file: `/assets/docs/blog/guide-${lang}.pdf`,
        cover: `/assets/img/blog/guide-${lang}.jpg`,
        title: word,
        pages: 7,
        size: '1.7 MB',
      },
    };
  };
  return {
    slug: 'a-good-post',
    date: '2026-11-27',
    cover: { src: '/assets/img/photos/solar-panels.jpg' },
    contact: { email: 'technical@brightvolition.com', phones: ['+964 771 706 5000'] },
    en: body('en'),
    ar: body('ar'),
    ku: body('ku'),
  };
}

const SHAPE = 'p guide h2 ul:2+1lead ol:1+1lead link:projects';

test('sortPosts puts the newest post first and breaks ties by slug', () => {
  const posts = [
    { slug: 'b', date: '2026-01-10' },
    { slug: 'c', date: '2026-11-27' },
    { slug: 'a', date: '2026-01-10' },
  ];
  assert.deepEqual(
    sortPosts(posts).map((p) => p.slug),
    ['c', 'a', 'b'],
  );
  assert.equal(posts[0].slug, 'b', 'the input array is left alone');
});

test('fileSizeLabel writes small files in KB and the rest in MB', () => {
  assert.equal(fileSizeLabel(1024), '1 KB');
  assert.equal(fileSizeLabel(51200), '50 KB');
  assert.equal(fileSizeLabel(102399), '100 KB');
  assert.equal(fileSizeLabel(102400), '0.1 MB');
  assert.equal(fileSizeLabel(262144), '0.3 MB');
  assert.equal(fileSizeLabel(1697612), '1.6 MB');
  assert.equal(fileSizeLabel(1815792), '1.7 MB');
});

test('checkPost accepts a complete post', () => {
  assert.deepEqual(checkPost(fixture(), LANGS), []);
});

test('checkPost accepts a post with no guide and no sources in any language', () => {
  const post = fixture();
  for (const lang of LANGS) {
    delete post[lang].guide;
    delete post[lang].sources;
    post[lang].blocks = post[lang].blocks.filter((b) => b.type !== 'guide');
  }
  assert.deepEqual(checkPost(post, LANGS), []);
});

test('checkPost reports a missing language', () => {
  const post = fixture();
  delete post.ku;
  assert.deepEqual(checkPost(post, LANGS), ['ku: missing']);
});

test('checkPost reports a bad slug and a bad date', () => {
  const post = fixture();
  post.slug = 'Bad Slug';
  post.date = '2026-13-40';
  assert.deepEqual(checkPost(post, LANGS), [
    'slug: "Bad Slug" must be lowercase letters, digits and single hyphens',
    'date: "2026-13-40" is not a real YYYY-MM-DD date',
  ]);
});

test('checkPost reports an "updated" date that is not real or is before the post', () => {
  const post = fixture();
  post.updated = 'next week';
  assert.deepEqual(checkPost(post, LANGS), ['updated: "next week" is not a real YYYY-MM-DD date']);
  post.updated = '2020-01-01';
  assert.deepEqual(checkPost(post, LANGS), ['updated: "2020-01-01" is earlier than date "2026-11-27"']);
  post.updated = '2026-12-05';
  assert.deepEqual(checkPost(post, LANGS), []);
});

test('checkPost reports an empty required text', () => {
  const post = fixture();
  post.ar.title = '  ';
  delete post.ku.cta;
  assert.deepEqual(checkPost(post, LANGS), ['ar: title is empty', 'ku: cta is empty']);
});

test('checkPost reports a date label from a different year than the date', () => {
  const post = fixture();
  post.ar.dateLabel = `${WORDS.ar} 2025`;
  assert.deepEqual(checkPost(post, LANGS), [
    `ar: dateLabel "${WORDS.ar} 2025" does not mention 2026, the year in date`,
  ]);
});

test('checkPost reports a translation whose blocks differ from the first language', () => {
  const post = fixture();
  post.ar.blocks.splice(2, 1); // the Arabic lost its heading
  post.ku.blocks[3].items.pop(); // the Kurdish list is one item short
  assert.deepEqual(checkPost(post, LANGS), [
    `ar: blocks differ from en (p guide ul:2+1lead ol:1+1lead link:projects, expected ${SHAPE})`,
    `ku: blocks differ from en (p guide h2 ul:1+1lead ol:1+1lead link:projects, expected ${SHAPE})`,
  ]);
});

test('checkPost reports a translation that lost a bold lead-in', () => {
  const post = fixture();
  delete post.ar.blocks[3].items[0].lead;
  assert.deepEqual(checkPost(post, LANGS), [
    `ar: blocks differ from en (p guide h2 ul:2 ol:1+1lead link:projects, expected ${SHAPE})`,
  ]);
});

test('checkPost reports a broken block', () => {
  const post = fixture();
  for (const lang of LANGS) {
    post[lang].blocks.push({ type: 'p', text: '' }, { type: 'video' }, { type: 'ul', items: [] });
  }
  const problems = checkPost(post, LANGS);
  assert.ok(problems.includes('en: block 7 (p) has no text'), problems.join('\n'));
  assert.ok(problems.includes('en: block 8 has unknown type "video"'), problems.join('\n'));
  assert.ok(problems.includes('en: block 9 (ul) has no items'), problems.join('\n'));
});

test('checkPost reports a link to a page that has no button label', () => {
  const post = fixture();
  for (const lang of LANGS) post[lang].blocks[5].page = 'servces';
  assert.deepEqual(checkPost(post, LANGS), [
    'en: block 6 (link) points to "servces"; a post can link to: projects',
    'ar: block 6 (link) points to "servces"; a post can link to: projects',
    'ku: block 6 (link) points to "servces"; a post can link to: projects',
  ]);
});

test('checkPost reports a second guide block', () => {
  const post = fixture();
  for (const lang of LANGS) post[lang].blocks.push({ type: 'guide' });
  assert.deepEqual(checkPost(post, LANGS), [
    'en: has 2 guide blocks; a post shows its guide once',
    'ar: has 2 guide blocks; a post shows its guide once',
    'ku: has 2 guide blocks; a post shows its guide once',
  ]);
});

test('checkPost reports a guide or sources that only some languages have', () => {
  const post = fixture();
  delete post.ar.guide;
  delete post.ku.sources;
  const problems = checkPost(post, LANGS);
  assert.ok(problems.includes('ar: guide is missing but en has one'), problems.join('\n'));
  assert.ok(problems.includes('ar: has a guide block but no guide'), problems.join('\n'));
  assert.ok(problems.includes('ku: sources is missing but en has one'), problems.join('\n'));
});

test('checkPost reports a guide with a missing field', () => {
  const post = fixture();
  post.en.guide.file = '/assets/docs/blog/guide.docx';
  post.ar.guide.pages = 0;
  delete post.ku.guide.title;
  assert.deepEqual(checkPost(post, LANGS), [
    'en: guide.file must be a .pdf path starting with /',
    'ar: guide.pages must be a whole number above 0',
    'ku: guide.title is empty',
  ]);
});

test('checkPost reports a guide size that is not a real size label', () => {
  const post = fixture();
  post.en.guide.size = '0.0 MB';
  post.ar.guide.size = 'big';
  assert.deepEqual(checkPost(post, LANGS), [
    'en: guide.size "0.0 MB" should look like "850 KB" or "1.6 MB"',
    'ar: guide.size "big" should look like "850 KB" or "1.6 MB"',
  ]);
});

test('checkPost reports bad contact details', () => {
  const post = fixture();
  post.contact = { email: 'not-an-email', phones: ['0771 706 5000'] };
  assert.deepEqual(checkPost(post, LANGS), [
    'contact.email: "not-an-email" is not an email address',
    'contact.phones: "0771 706 5000" must be in +964 form',
  ]);
});

test('checkPost reports contact details with no phone number', () => {
  const post = fixture();
  post.contact = { email: 'technical@brightvolition.com', phones: [] };
  assert.deepEqual(checkPost(post, LANGS), ['contact.phones: at least one phone number is needed']);
  delete post.contact.phones;
  assert.deepEqual(checkPost(post, LANGS), ['contact.phones: at least one phone number is needed']);
});

test('checkPost reports Arabic and Kurdish that have swapped places', () => {
  const post = fixture();
  [post.ar, post.ku] = [post.ku, post.ar];
  // the date labels travel with the bodies, so only the language check fires
  assert.deepEqual(checkPost(post, LANGS), [
    'ar: has Kurdish-only letters, so this looks like the Kurdish text',
    'ku: has none of the Kurdish-only letters, so this looks like the Arabic text',
  ]);
});

test('checkPost reports a translation that is still in English', () => {
  const post = fixture();
  const english = fixture().en;
  post.ar = { ...english, guide: post.ar.guide };
  assert.deepEqual(checkPost(post, LANGS), ['ar: most of its letters are Latin, so this does not look like Arabic']);
});

test('checkPost reports English that is in another script', () => {
  const post = fixture();
  post.en = { ...fixture().ar, guide: post.en.guide };
  assert.deepEqual(checkPost(post, LANGS), [
    'en: most of its letters are Arabic script, so this does not look like English',
  ]);
});

test('publicFiles lists every file a post needs from public/', () => {
  assert.deepEqual(publicFiles(fixture(), LANGS), [
    '/assets/img/photos/solar-panels.jpg',
    '/assets/docs/blog/guide-en.pdf',
    '/assets/img/blog/guide-en.jpg',
    '/assets/docs/blog/guide-ar.pdf',
    '/assets/img/blog/guide-ar.jpg',
    '/assets/docs/blog/guide-ku.pdf',
    '/assets/img/blog/guide-ku.jpg',
  ]);
});

// ---------------------------------------------------------------------------
// The real posts
// ---------------------------------------------------------------------------

test('there is at least one post, newest first', () => {
  const posts = getPosts();
  assert.ok(posts.length >= 1);
  assert.deepEqual(posts, sortPosts(posts));
});

test('every post has a slug of its own', () => {
  const slugs = getPosts().map((p) => p.slug);
  assert.deepEqual(slugs, [...new Set(slugs)]);
});

test('every article file in content/blog/ is registered in lib/blog.mjs', () => {
  // A file that is not in the list is on no page, in no sitemap and in no
  // other test, so nothing else would notice it had been forgotten.
  const files = readdirSync(path.join(ROOT, 'content', 'blog'))
    .filter((name) => name.endsWith('.mjs'))
    .map((name) => name.slice(0, -'.mjs'.length))
    .sort();
  assert.deepEqual(
    getPosts()
      .map((p) => p.slug)
      .sort(),
    files,
  );
});

test('getPost finds a post by slug and returns undefined for an unknown one', () => {
  const first = getPosts()[0];
  assert.equal(getPost(first.slug), first);
  assert.equal(getPost('no-such-post'), undefined);
});

test('every post is complete in every language', () => {
  for (const post of getPosts()) {
    assert.deepEqual(checkPost(post, LANGS), [], `problems in ${post.slug}`);
  }
});

test('every file a post points to exists in public/', () => {
  for (const post of getPosts()) {
    for (const file of publicFiles(post, LANGS)) {
      assert.ok(existsSync(path.join(PUBLIC, file)), `${post.slug}: ${file} is not in public/`);
    }
  }
});

test('every guide shows the real size of its PDF', () => {
  // The label is written into the article file once, so replacing a PDF later
  // would otherwise leave the old size on the page.
  for (const post of getPosts()) {
    for (const lang of LANGS) {
      const guide = post[lang].guide;
      if (!guide) continue;
      const bytes = statSync(path.join(PUBLIC, guide.file)).size;
      assert.equal(guide.size, fileSizeLabel(bytes), `${post.slug} ${lang}: ${guide.file}`);
    }
  }
});

test('the solar grid article carries the text the company supplied', () => {
  const post = getPost('solar-grid-connection');
  assert.equal(
    post.en.title,
    'Connecting a Solar Plant to the National Grid in the Kurdistan Region: What Plant Owners Need to Know',
  );
  assert.equal(post.en.byline, 'Bright Volition · Engineering Services · November 2026');
  assert.equal(post.en.dateLabel, 'November 2026');
  assert.equal(
    post.en.summary,
    'If you are planning a solar power plant in the Kurdistan Region, the grid connection will shape your project as much as the panels and inverters do.',
  );
  assert.equal(post.en.cta, 'Talk to us early, before equipment is contracted.');
  assert.deepEqual(post.contact, {
    email: 'technical@brightvolition.com',
    phones: ['+964 771 706 5000', '+964 750 225 0557'],
  });
  // 122 paragraphs in the Word file: 6 section headings, 4 bullet lists and
  // the 4 connection steps per language.
  for (const lang of LANGS) {
    const types = post[lang].blocks.map((b) => b.type);
    assert.equal(types.filter((t) => t === 'h2').length, 6, lang);
    assert.equal(types.filter((t) => t === 'ul').length, 4, lang);
    assert.equal(types.filter((t) => t === 'ol').length, 1, lang);
    assert.equal(post[lang].blocks.find((b) => b.type === 'ol').items.length, 4, lang);
  }
  assert.deepEqual(post.en.blocks.find((b) => b.type === 'ul').items, [
    { lead: '2025–2028:', text: '25% of peak generation' },
    { lead: '2029–2030:', text: '30% of peak generation' },
  ]);
});
