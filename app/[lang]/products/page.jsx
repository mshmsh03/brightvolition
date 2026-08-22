import { buildMetadata, breadcrumbJsonLd } from '../../../lib/metadata';
import Products from '../_content/products';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(lang, 'products');
}

export default async function ProductsPage({ params }) {
  const { lang } = await params;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(lang, 'products')) }}
      />
      <Products lang={lang} />
    </>
  );
}
