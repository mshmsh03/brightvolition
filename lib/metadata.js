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
