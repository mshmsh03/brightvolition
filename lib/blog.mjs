// The blog's posts and the few rules around them. No React and no import of
// lib/site-data.js in here, so `npm test` can load this file straight into
// Node and check every post before a build ever runs.
//
// Adding a post: put its file in content/blog/, import it below and add it to
// the list. README.md ("Blog") has the full steps, and a test fails if a file
// in content/blog/ is left out of the list.
import solarGridConnection from '../content/blog/solar-grid-connection.mjs';

// Newest first; two posts from the same day fall back to slug order so the
// list never reshuffles between builds.
export function sortPosts(posts) {
  return [...posts].sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return a.slug.localeCompare(b.slug);
  });
}

const POSTS = sortPosts([solarGridConnection]);

export function getPosts() {
  return POSTS;
}

export function getPost(slug) {
  return POSTS.find((post) => post.slug === slug);
}

// Every file a post needs from public/, so a test can prove they are there.
export function publicFiles(post, langs) {
  const files = [post.cover.src];
  for (const lang of langs) {
    const guide = post[lang]?.guide;
    if (guide) files.push(guide.file, guide.cover);
  }
  return files;
}

// The size shown beside a download, e.g. "850 KB" or "1.6 MB". The converter
// in scripts/blog/ writes the same label with the same rounding, and a test
// compares the two against the real file.
export function fileSizeLabel(bytes) {
  if (bytes < 100 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(Math.floor((bytes / (1024 * 1024)) * 10 + 0.5) / 10).toFixed(1)} MB`;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

const BLOCK_TYPES = ['p', 'h2', 'ul', 'ol', 'guide', 'link'];
const REQUIRED_TEXT = ['title', 'byline', 'dateLabel', 'summary', 'cta'];
// Present in every language or in none.
const OPTIONAL_PARTS = ['guide', 'sources'];
// The pages an article may point to with a `link` block. Each one needs a
// button label in all three languages: `linkTo` in
// app/[lang]/_content/blog.strings.js.
const LINK_PAGES = ['projects'];

// How each language should look, to catch two translations that have swapped
// places or one that was never translated. Kurdish Sorani and Arabic share a
// script; these five letters exist only in Kurdish (ە ێ ۆ ڕ ڵ).
const KURDISH_ONLY = /[ەێۆڕڵ]/;
const SCRIPT = {
  en: { script: 'latin', name: 'English' },
  ar: { script: 'arabic', name: 'Arabic', kurdish: false },
  ku: { script: 'arabic', name: 'Kurdish', kurdish: true },
};

const isText = (value) => typeof value === 'string' && value.trim() !== '';

function isRealDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

// A one-line picture of an article's structure, compared across languages to
// catch a translation that lost a heading, a paragraph, a list item or a bold
// lead-in.
function shape(blocks) {
  return blocks
    .map((block) => {
      if (block.type === 'ul' || block.type === 'ol') {
        const items = block.items ?? [];
        const leads = items.filter((item) => 'lead' in item).length;
        return `${block.type}:${items.length}${leads ? `+${leads}lead` : ''}`;
      }
      if (block.type === 'link') return `link:${block.page}`;
      return block.type;
    })
    .join(' ');
}

// Everything a reader would read in one language, as one string.
function allText(body) {
  const parts = [body.title, body.summary, body.cta, body.sources];
  for (const block of body.blocks ?? []) {
    parts.push(block.text);
    for (const item of block.items ?? []) parts.push(item.lead, item.text);
  }
  return parts.filter((part) => typeof part === 'string').join(' ');
}

function checkLanguage(lang, body, problems) {
  const rule = SCRIPT[lang];
  if (!rule) return;
  const text = allText(body);
  const latin = (text.match(/[A-Za-z]/g) ?? []).length;
  const arabic = (text.match(/[؀-ۿ]/g) ?? []).length;

  if (rule.script === 'latin') {
    if (arabic > latin) {
      problems.push(`${lang}: most of its letters are Arabic script, so this does not look like ${rule.name}`);
    }
    return;
  }
  if (latin > arabic) {
    problems.push(`${lang}: most of its letters are Latin, so this does not look like ${rule.name}`);
    return;
  }
  const hasKurdish = KURDISH_ONLY.test(text);
  if (rule.kurdish && !hasKurdish) {
    problems.push(`${lang}: has none of the Kurdish-only letters, so this looks like the Arabic text`);
  }
  if (!rule.kurdish && hasKurdish) {
    problems.push(`${lang}: has Kurdish-only letters, so this looks like the Kurdish text`);
  }
}

function checkBlocks(lang, body, problems) {
  body.blocks.forEach((block, index) => {
    const at = `${lang}: block ${index + 1}`;
    if (!BLOCK_TYPES.includes(block.type)) {
      problems.push(`${at} has unknown type "${block.type}"`);
      return;
    }
    if ((block.type === 'p' || block.type === 'h2') && !isText(block.text)) {
      problems.push(`${at} (${block.type}) has no text`);
    }
    if (block.type === 'ul' || block.type === 'ol') {
      if (!Array.isArray(block.items) || block.items.length === 0) {
        problems.push(`${at} (${block.type}) has no items`);
      } else {
        block.items.forEach((item, i) => {
          if (!isText(item.text)) problems.push(`${at} (${block.type}) item ${i + 1} has no text`);
          if ('lead' in item && !isText(item.lead)) problems.push(`${at} (${block.type}) item ${i + 1} has an empty lead`);
        });
      }
    }
    if (block.type === 'link' && !LINK_PAGES.includes(block.page)) {
      problems.push(`${at} (link) points to "${block.page}"; a post can link to: ${LINK_PAGES.join(', ')}`);
    }
  });

  const guideBlocks = body.blocks.filter((block) => block.type === 'guide').length;
  if (guideBlocks > 1) problems.push(`${lang}: has ${guideBlocks} guide blocks; a post shows its guide once`);
  if (guideBlocks > 0 && !body.guide) problems.push(`${lang}: has a guide block but no guide`);
  if (guideBlocks === 0 && body.guide) problems.push(`${lang}: has a guide but no guide block to show it`);
}

function checkGuide(lang, guide, problems) {
  if (!isText(guide.file) || !guide.file.startsWith('/') || !guide.file.endsWith('.pdf')) {
    problems.push(`${lang}: guide.file must be a .pdf path starting with /`);
  }
  if (!isText(guide.cover) || !guide.cover.startsWith('/')) {
    problems.push(`${lang}: guide.cover must be a path starting with /`);
  }
  if (!isText(guide.title)) problems.push(`${lang}: guide.title is empty`);
  if (!Number.isInteger(guide.pages) || guide.pages < 1) {
    problems.push(`${lang}: guide.pages must be a whole number above 0`);
  }
  if (!/^([1-9]\d* KB|\d+\.\d MB)$/.test(guide.size ?? '') || guide.size === '0.0 MB') {
    problems.push(`${lang}: guide.size "${guide.size}" should look like "850 KB" or "1.6 MB"`);
  }
}

function checkContact(contact, problems) {
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(contact.email ?? '')) {
    problems.push(`contact.email: "${contact.email}" is not an email address`);
  }
  // The closing band of an article lists these, so an empty list would leave
  // a blank line where the numbers belong.
  if (!Array.isArray(contact.phones) || contact.phones.length === 0) {
    problems.push('contact.phones: at least one phone number is needed');
    return;
  }
  for (const phone of contact.phones) {
    if (!/^\+\d[\d ]{6,}$/.test(phone)) problems.push(`contact.phones: "${phone}" must be in +964 form`);
  }
}

// Returns a list of plain-English problems; an empty list means the post is
// complete. `npm test` runs this over every post, so a half-translated or
// mistyped post fails in CI instead of reaching the live site.
export function checkPost(post, langs) {
  const problems = [];

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(post.slug ?? '')) {
    problems.push(`slug: "${post.slug}" must be lowercase letters, digits and single hyphens`);
  }
  const dated = isRealDate(post.date);
  if (!dated) problems.push(`date: "${post.date}" is not a real YYYY-MM-DD date`);
  // `updated` is optional. It goes out as the article's modified date and as
  // the sitemap's lastmod, so it gets the same scrutiny as `date`.
  if (post.updated !== undefined) {
    if (!isRealDate(post.updated)) {
      problems.push(`updated: "${post.updated}" is not a real YYYY-MM-DD date`);
    } else if (dated && post.updated < post.date) {
      problems.push(`updated: "${post.updated}" is earlier than date "${post.date}"`);
    }
  }
  if (!isText(post.cover?.src) || !post.cover.src.startsWith('/')) {
    problems.push('cover.src must be a path starting with /');
  }
  if (post.contact) checkContact(post.contact, problems);

  const first = langs.find((lang) => post[lang]);
  for (const lang of langs) {
    const body = post[lang];
    if (!body) {
      problems.push(`${lang}: missing`);
      continue;
    }

    for (const field of REQUIRED_TEXT) {
      if (!isText(body[field])) problems.push(`${lang}: ${field} is empty`);
    }
    // Catches a recipe copied from the last article with its date left in.
    if (dated && isText(body.dateLabel) && !body.dateLabel.includes(post.date.slice(0, 4))) {
      problems.push(`${lang}: dateLabel "${body.dateLabel}" does not mention ${post.date.slice(0, 4)}, the year in date`);
    }

    if (!Array.isArray(body.blocks) || body.blocks.length === 0) {
      problems.push(`${lang}: blocks is empty`);
    } else {
      checkBlocks(lang, body, problems);
      const expected = shape(post[first].blocks ?? []);
      const actual = shape(body.blocks);
      if (lang !== first && actual !== expected) {
        problems.push(`${lang}: blocks differ from ${first} (${actual}, expected ${expected})`);
      }
    }

    for (const part of OPTIONAL_PARTS) {
      const here = Boolean(body[part]);
      const there = Boolean(post[first][part]);
      if (there && !here) problems.push(`${lang}: ${part} is missing but ${first} has one`);
      if (here && !there) problems.push(`${lang}: has ${part} but ${first} has none`);
    }
    if (body.guide) checkGuide(lang, body.guide, problems);
    if (body.sources !== undefined && !isText(body.sources)) problems.push(`${lang}: sources is empty`);

    checkLanguage(lang, body, problems);
  }

  return problems;
}
