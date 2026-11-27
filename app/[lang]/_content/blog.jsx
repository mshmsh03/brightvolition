import { STRINGS } from './blog.strings';
import { STRINGS as HOME } from './index.strings';
import { EMAIL, pagePath } from '../../../lib/site-data';
import { getPosts } from '../../../lib/blog.mjs';
import { postPath } from '../../../lib/paths.mjs';
import { CtaBand, CtaButton, PageHero, Section } from '../../../components/sections';
import { PostRow } from '../../../components/blog';

// The list of articles, newest first. Nothing here names an article: adding
// one to lib/blog.mjs is enough for it to appear.
export default function Blog({ lang }) {
  const t = STRINGS[lang];
  // The closing band is the home page's, word for word, so the two cannot
  // drift into saying different things.
  const home = HOME[lang];

  return (
    <>
      <PageHero
        image="/assets/img/photos/substation.jpg"
        homeHref={pagePath(lang, 'index')}
        homeLabel={t.home}
        crumb={t.blog}
        title={t.blog}
        lede={t.blogLede}
      />

      <Section>
        <div className="flex flex-col gap-16 md:gap-20">
          {getPosts().map((post) => (
            <PostRow
              key={post.slug}
              href={postPath(lang, post.slug)}
              cover={post.cover}
              dateLabel={post[lang].dateLabel}
              title={post[lang].title}
              summary={post[lang].summary}
              readLabel={t.readArticle}
            />
          ))}
        </div>
      </Section>

      <Section>
        <CtaBand
          title={home.letSBuildSomethingReliable}
          text={home.reachOutWithYourInquiries}
        >
          <CtaButton href={pagePath(lang, 'contact')} variant="gold" arrow>
            {home.contactUs}
          </CtaButton>
          <CtaButton href={`mailto:${EMAIL}`} variant="outline">
            {EMAIL}
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
