import { buildMetadata } from '../../../lib/metadata';
import About from '../_content/about';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(lang, 'about');
}

export default async function AboutPage({ params }) {
  const { lang } = await params;
  return <About lang={lang} />;
}
