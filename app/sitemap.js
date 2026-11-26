import { LANGS, PAGES, SITE } from '../lib/site-data';
import { pageUrl, postUrl } from '../lib/metadata';
import { getPosts } from '../lib/blog.mjs';

// Built into out/sitemap.xml on every build, from the same lists the pages are
// built from — so a new article is in the sitemap the moment it is on the
// site. (It used to be a hand-generated file in public/, which every new page
// would have left out of date.)
//
// A static export only writes a route handler to disk if it is marked static.
export const dynamic = 'force-static';

// Every language version of a URL, keyed by the tag search engines expect:
// Kurdish Sorani routes at /ku/ but is announced as `ckb`.
function alternates(urlFor) {
  const languages = {};
  for (const lang of LANGS) languages[SITE[lang].hreflang] = urlFor(lang);
  languages['x-default'] = urlFor('en');
  return { languages };
}

export default function sitemap() {
  const entries = [];

  for (const lang of LANGS) {
    for (const page of PAGES) {
      entries.push({
        url: pageUrl(lang, page),
        alternates: alternates((l) => pageUrl(l, page)),
        changeFrequency: 'monthly',
        priority: page === 'index' ? 1 : 0.8,
      });
    }
  }

  // Only articles carry a date: it is the one place the site knows when
  // something last changed, and a made-up date is worse than none.
  for (const post of getPosts()) {
    for (const lang of LANGS) {
      entries.push({
        url: postUrl(lang, post.slug),
        lastModified: post.updated ?? post.date,
        alternates: alternates((l) => postUrl(l, post.slug)),
        changeFrequency: 'yearly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
