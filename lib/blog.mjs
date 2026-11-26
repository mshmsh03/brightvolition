// The blog's posts and the few rules around them. No React and no import of
// lib/site-data.js in here, so `npm test` can load this file straight into
// Node and check every post before a build ever runs.
//
// Adding a post: put its file in content/blog/, import it below and add it to
// the list. README.md ("Blog") has the full steps.
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

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

const BLOCK_TYPES = ['p', 'h2', 'ul', 'ol', 'guide', 'link'];
const REQUIRED_TEXT = ['title', 'byline', 'dateLabel', 'summary', 'cta'];
// Present in every language or in none.
const OPTIONAL_PARTS = ['guide', 'sources'];

const isText = (value) => typeof value === 'string' && value.trim() !== '';

function isRealDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

// A one-line picture of an article's structure, compared across languages to
// catch a translation that lost a heading, a paragraph or a list item.
function shape(blocks) {
  return blocks
    .map((block) => {
      if (block.type === 'ul' || block.type === 'ol') return `${block.type}:${block.items?.length ?? 0}`;
      if (block.type === 'link') return `link:${block.page}`;
      return block.type;
    })
    .join(' ');
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
    if (block.type === 'link' && !isText(block.page)) problems.push(`${at} (link) has no page`);
  });

  const hasGuideBlock = body.blocks.some((block) => block.type === 'guide');
  if (hasGuideBlock && !body.guide) problems.push(`${lang}: has a guide block but no guide`);
  if (!hasGuideBlock && body.guide) problems.push(`${lang}: has a guide but no guide block to show it`);
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
  if (!isText(guide.size)) problems.push(`${lang}: guide.size is empty`);
}

// Returns a list of plain-English problems; an empty list means the post is
// complete. `npm test` runs this over every post, so a half-translated or
// mistyped post fails in CI instead of reaching the live site.
export function checkPost(post, langs) {
  const problems = [];

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(post.slug ?? '')) {
    problems.push(`slug: "${post.slug}" must be lowercase letters, digits and single hyphens`);
  }
  if (!isRealDate(post.date)) problems.push(`date: "${post.date}" is not a real YYYY-MM-DD date`);
  if (!isText(post.cover?.src) || !post.cover.src.startsWith('/')) {
    problems.push('cover.src must be a path starting with /');
  }
  if (post.contact) {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(post.contact.email ?? '')) {
      problems.push(`contact.email: "${post.contact.email}" is not an email address`);
    }
    for (const phone of post.contact.phones ?? []) {
      if (!/^\+\d[\d ]{6,}$/.test(phone)) problems.push(`contact.phones: "${phone}" must be in +964 form`);
    }
  }

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
    if ('sources' in body && body.sources !== undefined && !isText(body.sources)) {
      problems.push(`${lang}: sources is empty`);
    }
  }

  return problems;
}
