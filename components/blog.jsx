import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';
import { CtaButton, Eyebrow, Media, Reveal } from './sections';

// The blog's building blocks, in the same spirit as components/sections.jsx:
// the files in app/[lang]/_content/ say what goes on the page, these say how
// it looks. Nothing here knows about a particular article.

// A title link on a cream ground. The hover is a gold underline rather than
// gold text: gold letters on cream are too faint to read at heading size.
const TITLE_LINK = 'decoration-gold decoration-2 underline-offset-[.22em] hover:underline';

// ---------------------------------------------------------------------------
// Article body
// ---------------------------------------------------------------------------

// One reading column. Arabic and Kurdish get more leading than Latin for the
// same reason the headings do (see DESIGN.md): Somar and Ping run taller.
export function ArticleBody({ children }) {
  return (
    <Reveal as="article" className="mx-auto max-w-measure text-[1.05rem] leading-[1.75] rtl:leading-[1.95]">
      {children}
    </Reveal>
  );
}

export function ArticleHeading({ children }) {
  return <h2 className="mt-12 mb-4 text-[clamp(1.35rem,2.3vw,1.75rem)]">{children}</h2>;
}

export function ArticleText({ children }) {
  return <p className="mb-5">{children}</p>;
}

// A list item may open with a bold lead-in ("Protocol:"), carried in the
// article data as `lead` so it stays bold in every language.
function ItemText({ item }) {
  if (!item.lead) return item.text;
  return (
    <>
      <strong className="font-bold">{item.lead}</strong> {item.text}
    </>
  );
}

// role="list" is deliberate: Tailwind's reset removes the bullets, and Safari
// stops announcing a list as a list once they are gone.
export function ArticleList({ items }) {
  return (
    <ul role="list" className="mb-6 flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative ps-6 before:absolute before:start-0 before:top-[.66em] before:size-[7px] before:rounded-sm before:bg-gold before:content-[''] rtl:before:top-[.8em]"
        >
          <ItemText item={item} />
        </li>
      ))}
    </ul>
  );
}

// A sequence that has to be done in order: the same navy-and-gold numeral the
// "How We Work" cards use, so a step reads as a step anywhere on the site.
//
// The numeral is real text, not hidden from screen readers: with the browser's
// own list numbers switched off by the reset, it is the only place the step
// number exists, and some screen readers read nothing else for it.
export function ArticleSteps({ items }) {
  return (
    <ol role="list" className="mb-6 flex flex-col gap-4">
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[auto_1fr] items-start gap-4">
          <span
            className={/* unslop-ignore: pill numeral badge is documented, see DESIGN.md */ "flex size-9 items-center justify-center rounded-full bg-navy text-[.95rem] leading-none font-black text-gold"}
          >
            {i + 1}
          </span>
          <span className="pt-0.5">
            <ItemText item={item} />
          </span>
        </li>
      ))}
    </ol>
  );
}

// The downloadable PDF that goes with an article. The cover is decorative —
// the title beside it says the same thing — so it has an empty alt.
export function GuideCard({ guide, eyebrow, meta, downloadLabel }) {
  return (
    <aside className="my-9 flex flex-col gap-6 rounded-card border border-lavender p-5 min-[520px]:flex-row min-[520px]:items-center sm:p-6">
      <img
        src={guide.cover}
        alt=""
        width="480"
        height="601"
        loading="lazy"
        className="h-auto w-32 shrink-0 rounded-sm border border-lavender sm:w-40"
      />
      <div className="min-w-0">
        <Eyebrow>{eyebrow}</Eyebrow>
        {/* A paragraph, not a heading: the card sits above the first section,
            and an <h3> there would break the article's heading order. */}
        <p className="mb-1.5 text-card-title leading-snug font-black rtl:leading-[1.6]">{guide.title}</p>
        <p className="mb-4 text-[.9rem]">{meta}</p>
        <CtaButton href={guide.file} variant="gold" download>
          {downloadLabel}
        </CtaButton>
      </div>
    </aside>
  );
}

// The sources and disclaimer that close an article: set apart by a rule and a
// smaller size, so it reads as a note rather than as one more paragraph.
export function ArticleSources({ children }) {
  return (
    <p className="mt-12 mb-0 border-t border-lavender pt-6 text-[.88rem] leading-[1.7] text-muted-foreground rtl:leading-[1.9]">
      {children}
    </p>
  );
}

export function BackLink({ href, children }) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2 font-bold ${TITLE_LINK}`}>
      <ArrowLeftIcon className="size-4 rtl:-scale-x-100" />
      {children}
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Lists of articles
// ---------------------------------------------------------------------------

// The button under an article's title. Every row's button says the same thing
// on screen, so the article's title is added for screen readers only; in a
// list of links they are then told apart instead of reading "Read the
// Article" once per post.
function ReadButton({ href, label, title }) {
  return (
    <CtaButton href={href} variant="outlineNavy" arrow>
      <span>
        {label}
        <span className="sr-only">: {title}</span>
      </span>
    </CtaButton>
  );
}

// One article on the blog page: photo beside title, summary and a button. The
// photo is not a link, so the article is linked twice (title and button), not
// three times.
export function PostRow({ href, cover, dateLabel, title, summary, readLabel }) {
  return (
    <Reveal as="article" className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
      <Media src={cover.src} alt="" position={cover.position} />
      <div>
        <Eyebrow>{dateLabel}</Eyebrow>
        <h2 className="mb-3 text-[clamp(1.45rem,2.5vw,2rem)]">
          <Link href={href} className={TITLE_LINK}>
            {title}
          </Link>
        </h2>
        <p className="mb-6 max-w-[64ch] text-[1.05rem]">{summary}</p>
        <ReadButton href={href} label={readLabel} title={title} />
      </div>
    </Reveal>
  );
}

// The newest article, as a single band on the home page. No photo: the home
// page already shows the solar plant twice, and a third would crowd it.
export function LatestPost({ href, eyebrow, title, summary, readLabel }) {
  return (
    <Reveal
      as="div"
      className="flex flex-col gap-7 rounded-panel border border-lavender p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
    >
      <div className="min-w-0">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mb-3 text-[clamp(1.35rem,2.3vw,1.85rem)]">
          <Link href={href} className={TITLE_LINK}>
            {title}
          </Link>
        </h2>
        <p className="mb-0 max-w-[64ch]">{summary}</p>
      </div>
      <div className="shrink-0">
        <ReadButton href={href} label={readLabel} title={title} />
      </div>
    </Reveal>
  );
}
