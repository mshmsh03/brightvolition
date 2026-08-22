import { buildMetadata, breadcrumbJsonLd } from '../../../lib/metadata';
import Projects from '../_content/projects';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(lang, 'projects');
}

export default async function ProjectsPage({ params }) {
  const { lang } = await params;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(lang, 'projects')) }}
      />
      <Projects lang={lang} />
    </>
  );
}
