import { buildMetadata, breadcrumbJsonLd } from '../../../lib/metadata';
import Services from '../_content/services';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(lang, 'services');
}

export default async function ServicesPage({ params }) {
  const { lang } = await params;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(lang, 'services')) }}
      />
      <Services lang={lang} />
    </>
  );
}
