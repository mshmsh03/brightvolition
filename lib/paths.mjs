// Path rules that the header needs in the browser. Kept apart from lib/blog.mjs
// on purpose: that file imports every article, and the header is on every
// page, so importing it there would ship the whole blog to each visitor.

// Slugs are the same in every language, so an article's three versions differ
// only in the first path segment. The trailing slash matters for the same
// reason it does in pagePath(): see `trailingSlash` in next.config.js.
export function postPath(lang, slug) {
  return `/${lang}/blog/${slug}/`;
}

// The same page in another language, for the header's language switcher.
// Works for nested routes (an article) as well as the top-level pages.
export function localizePath(pathname, lang) {
  const match = /^\/[a-z]{2}(\/.*)?$/.exec(pathname ?? '');
  if (!match) return `/${lang}/`;
  const rest = (match[1] ?? '').replace(/\/+$/, '');
  return `/${lang}${rest}/`;
}

// Which menu item a path sits under: /en/blog/some-post/ belongs to `blog`.
export function sectionFromPath(pathname, pages) {
  const match = /^\/[a-z]{2}\/([a-z-]+)(\/|$)/.exec(pathname ?? '');
  return match && pages.includes(match[1]) ? match[1] : 'index';
}
