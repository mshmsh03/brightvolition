import { LANGS, SITE, PAGE_META } from './site-data';

export const BASE = 'https://brightvolition.com';
export const OG_IMAGE = `${BASE}/assets/img/og-image.jpg`;

export function pageUrl(lang, page) {
  return page === 'index' ? `${BASE}/${lang}/` : `${BASE}/${lang}/${page}/`;
}

export function buildMetadata(lang, page) {
  const t = SITE[lang];
  const meta = PAGE_META[lang][page];
  const canonical = pageUrl(lang, page);

  // hreflang is keyed by the tag search engines expect, not by our route
  // segment — Kurdish Sorani routes at /ku/ but must be announced as `ckb`.
  const languages = {};
  for (const l of LANGS) languages[SITE[l].hreflang] = pageUrl(l, page);
  languages['x-default'] = pageUrl('en', page);

  const otherLocales = LANGS.filter((l) => l !== lang).map((l) => SITE[l].ogLocale);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      siteName: 'Bright Volition',
      title: meta.title,
      description: meta.description,
      url: canonical,
      images: [OG_IMAGE],
      locale: t.ogLocale,
      alternateLocale: otherLocales,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  };
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
