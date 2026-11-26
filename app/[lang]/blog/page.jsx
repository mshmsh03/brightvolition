import { buildMetadata, breadcrumbJsonLd } from '../../../lib/metadata';
import JsonLd from '../../../components/JsonLd';
import Blog from '../_content/blog';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(lang, 'blog');
}

export default async function BlogPage({ params }) {
  const { lang } = await params;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, 'blog')} />
      <Blog lang={lang} />
    </>
  );
}
