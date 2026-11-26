import { LANGS, SITE, PAGE_META } from './site-data';
import { postPath } from './paths.mjs';

export const BASE = 'https://brightvolition.com';
export const OG_IMAGE = `${BASE}/assets/img/og-image.jpg`;

export function pageUrl(lang, page) {
  return page === 'index' ? `${BASE}/${lang}/` : `${BASE}/${lang}/${page}/`;
}

export function postUrl(lang, slug) {
  return `${BASE}${postPath(lang, slug)}`;
}

// The <head> every route shares. `urlFor` gives the route's address in a given
// language, which is all that differs between a top-level page and an article.
function metadataFor({ lang, title, description, urlFor, image = OG_IMAGE, openGraph }) {
  const t = SITE[lang];
  const canonical = urlFor(lang);

  // hreflang is keyed by the tag search engines expect, not by our route
  // segment — Kurdish Sorani routes at /ku/ but must be announced as `ckb`.
  const languages = {};
  for (const l of LANGS) languages[SITE[l].hreflang] = urlFor(l);
  languages['x-default'] = urlFor('en');

  const otherLocales = LANGS.filter((l) => l !== lang).map((l) => SITE[l].ogLocale);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      siteName: 'Bright Volition',
      title,
      description,
      url: canonical,
      images: [image],
      locale: t.ogLocale,
      alternateLocale: otherLocales,
      ...openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export function buildMetadata(lang, page) {
  const meta = PAGE_META[lang][page];
  return metadataFor({
    lang,
    title: meta.title,
    description: meta.description,
    urlFor: (l) => pageUrl(l, page),
  });
}

// An article's title carries the brand in the reader's language, the same way
// the page titles in PAGE_META do.
export function buildPostMetadata(lang, post) {
  const body = post[lang];
  return metadataFor({
    lang,
    title: `${body.title} | ${SITE[lang].brandAlt}`,
    description: body.summary,
    urlFor: (l) => postUrl(l, post.slug),
    image: `${BASE}${post.cover.src}`,
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
  });
}

// Home / <page name> breadcrumb trail, read by Google to show the breadcrumb
// line under a search result instead of the raw URL. Not used on the home
// page itself — a one-item trail ("Home") has nothing to add there.
export function breadcrumbJsonLd(lang, page) {
  const t = SITE[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t.nav.index,
        item: pageUrl(lang, 'index'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t.nav[page],
        item: pageUrl(lang, page),
      },
    ],
  };
}

// Home / Blog / <article title>.
export function postBreadcrumbJsonLd(lang, post) {
  const trail = breadcrumbJsonLd(lang, 'blog');
  trail.itemListElement.push({
    '@type': 'ListItem',
    position: 3,
    name: post[lang].title,
    item: postUrl(lang, post.slug),
  });
  return trail;
}

// Tells search engines the page is an article: who published it, when, and in
// which language. The company is both author and publisher — the articles are
// signed by the firm, not by a named engineer.
export function postJsonLd(lang, post) {
  const body = post[lang];
  const url = postUrl(lang, post.slug);
  const company = {
    '@type': 'Organization',
    name: 'Bright Volition',
    url: pageUrl(lang, 'index'),
  };
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: body.title,
    description: body.summary,
    inLanguage: SITE[lang].hreflang,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    image: [`${BASE}${post.cover.src}`],
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: company,
    publisher: {
      ...company,
      logo: { '@type': 'ImageObject', url: `${BASE}/assets/img/logo/logo-navy.png` },
    },
  };
}
