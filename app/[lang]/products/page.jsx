import { buildMetadata } from '../../../lib/metadata';
import ProductsEn from '../_content/products.en';
import ProductsAr from '../_content/products.ar';
import ProductsKu from '../_content/products.ku';

const CONTENT = { en: ProductsEn, ar: ProductsAr, ku: ProductsKu };

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(lang, 'products');
}

export default async function ProductsPage({ params }) {
  const { lang } = await params;
  const Content = CONTENT[lang];
  return <Content />;
}
