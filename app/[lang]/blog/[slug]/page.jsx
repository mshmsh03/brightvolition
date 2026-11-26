import { notFound } from 'next/navigation';
import { getPost, getPosts } from '../../../../lib/blog.mjs';
import { buildPostMetadata, postBreadcrumbJsonLd, postJsonLd } from '../../../../lib/metadata';
import JsonLd from '../../../../components/JsonLd';
import BlogPost from '../../_content/blog-post';

// One page per article per language. The language half of the route comes
// from the layout's generateStaticParams; this adds the article half.
export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

// A slug that is not in the list 404s instead of being rendered on demand —
// the same reason the layout sets this for [lang]: a static export has to
// know every page before it is built.
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return buildPostMetadata(lang, post);
}

export default async function BlogPostPage({ params }) {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={postJsonLd(lang, post)} />
      <JsonLd data={postBreadcrumbJsonLd(lang, post)} />
      <BlogPost lang={lang} post={post} />
    </>
  );
}
