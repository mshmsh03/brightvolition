import { buildMetadata } from '../../../lib/metadata';
import ServicesEn from '../_content/services.en';
import ServicesAr from '../_content/services.ar';
import ServicesKu from '../_content/services.ku';

const CONTENT = { en: ServicesEn, ar: ServicesAr, ku: ServicesKu };

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(lang, 'services');
}

export default async function ServicesPage({ params }) {
  const { lang } = await params;
  const Content = CONTENT[lang];
  return <Content />;
}
