import { Fragment } from 'react';
import Link from 'next/link';
import { STRINGS } from './blog.strings';
import { EMAIL, PHONE_DISPLAY, pagePath } from '../../../lib/site-data';
import { CtaBand, CtaButton, PageHero, Section } from '../../../components/sections';
import {
  ArticleBody,
  ArticleHeading,
  ArticleList,
  ArticleSources,
  ArticleSteps,
  ArticleText,
  BackLink,
  GuideCard,
} from '../../../components/blog';

// One article. The markup is shared by every article and every language; the
// words come from the article's file in content/blog/.

function Block({ block, lang, body, t }) {
  switch (block.type) {
    case 'p':
      return <ArticleText>{block.text}</ArticleText>;
    case 'h2':
      return <ArticleHeading>{block.text}</ArticleHeading>;
    case 'ul':
      return <ArticleList items={block.items} />;
    case 'ol':
      return <ArticleSteps items={block.items} />;
    case 'guide':
      return (
        <GuideCard
          guide={body.guide}
          eyebrow={t.guideEyebrow}
          meta={
            <>
              {t.guidePages(body.guide.pages)} · <span className="ltr-fixed">{body.guide.size}</span>
            </>
          }
          downloadLabel={t.downloadGuide}
        />
      );
    case 'link': {
      // Each page an article may link to needs its own button label, in all
      // three languages. Failing the build beats shipping a blank button.
      const label = t.linkTo[block.page];
      if (!label) throw new Error(`blog: no button label for a link to "${block.page}" (add it to linkTo in blog.strings.js)`);
      return (
        <div className="mb-2">
          <CtaButton href={pagePath(lang, block.page)} variant="outlineNavy" arrow>
            {label}
          </CtaButton>
        </div>
      );
    }
    default:
      throw new Error(`blog: no way to show a "${block.type}" block (see Block in blog-post.jsx)`);
  }
}

export default function BlogPost({ lang, post }) {
  const t = STRINGS[lang];
  const body = post[lang];
  const blogHref = pagePath(lang, 'blog');
  // An article can name the team to reach about it; without one, the closing
  // band falls back to the company's main address and number.
  const contact = post.contact ?? { email: EMAIL, phones: [PHONE_DISPLAY] };

  return (
    <>
      <PageHero
        image={post.cover.src}
        homeHref={pagePath(lang, 'index')}
        homeLabel={t.home}
        crumb={
          <Link href={blogHref} className="transition-colors hover:text-gold">
            {t.blog}
          </Link>
        }
        title={body.title}
        titleSize="article"
        lede={body.byline}
      />

      <Section>
        <ArticleBody>
          {body.blocks.map((block, i) => (
            <Block key={i} block={block} lang={lang} body={body} t={t} />
          ))}
          {body.sources ? <ArticleSources>{body.sources}</ArticleSources> : null}
          <div className="mt-10">
            <BackLink href={blogHref}>{t.allArticles}</BackLink>
          </div>
        </ArticleBody>
      </Section>

      <Section className="pt-0 md:pt-0">
        <CtaBand
          title={body.cta}
          text={contact.phones.map((phone, i) => (
            <Fragment key={phone}>
              {i > 0 ? ' · ' : null}
              {/* .ltr-fixed keeps the digits in order inside Arabic and Kurdish. */}
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="ltr-fixed transition-colors hover:text-gold">
                {phone}
              </a>
            </Fragment>
          ))}
        >
          <CtaButton href={pagePath(lang, 'contact')} variant="gold" arrow>
            {t.contactUs}
          </CtaButton>
          <CtaButton href={`mailto:${contact.email}`} variant="outline">
            {contact.email}
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
