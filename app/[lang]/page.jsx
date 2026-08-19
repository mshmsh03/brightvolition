import { buildMetadata, BASE, OG_IMAGE, pageUrl } from '../../lib/metadata';
import { SITE, PAGE_META, EMAIL, PHONE_HREF } from '../../lib/site-data';
import Home from './_content/index';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(lang, 'index');
}

function jsonLd(lang) {
  const t = SITE[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bright Volition',
    url: pageUrl(lang, 'index'),
    logo: `${BASE}/assets/img/logo/logo-navy.png`,
    image: OG_IMAGE,
    description: PAGE_META[lang].index.description,
    foundingDate: '2022',
    email: EMAIL,
    telephone: PHONE_HREF.replace('tel:', ''),
    sameAs: ['https://www.linkedin.com/company/bright-volition/'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mardin Street, Opposite Dilan City',
      addressLocality: 'Sulaymaniyah',
      postalCode: '46001',
      addressCountry: 'IQ',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Iraq',
    },
    inLanguage: t.hreflang,
  };
}

export default async function HomePage({ params }) {
  const { lang } = await params;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }}
      />
      <Home lang={lang} />
    </>
  );
}
