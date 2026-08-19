import { buildMetadata } from '../../../lib/metadata';
import Products from '../_content/products';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(lang, 'products');
}

export default async function ProductsPage({ params }) {
  const { lang } = await params;
  return <Products lang={lang} />;
}
