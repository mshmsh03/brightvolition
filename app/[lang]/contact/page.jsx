import { buildMetadata, breadcrumbJsonLd } from '../../../lib/metadata';
import Contact from '../_content/contact';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(lang, 'contact');
}

export default async function ContactPage({ params }) {
  const { lang } = await params;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(lang, 'contact')) }}
      />
      <Contact lang={lang} />
    </>
  );
}
