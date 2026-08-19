import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from './ui/button';
import Reveal from './Reveal';

// Presentational building blocks shared by every page. Each one replaces a
// class from the pre-Next hand-written stylesheet (.eyebrow, .section,
// .card, .num-card, .timeline, .steps, .spec-list, .cta-band, .logo-strip, …),
// so the markup in app/[lang]/_content/* is content and nothing else.

// ---------------------------------------------------------------------------
// Structure
// ---------------------------------------------------------------------------

const SECTION_PADDING = {
  default: 'py-16 md:py-22',
  tight: 'py-16',
  sm: 'py-14',
};

export function Section({ id, tone = 'cream', size = 'default', className = '', children }) {
  // `cream` is the page's own background — the pre-Next site used .bg-cream to
  // mark a section as "a different block" even though the colour matched, and
  // that is preserved here rather than silently redesigned. `navy` is the real
  // inversion: dark ground, cream headings, lavender body text.
  const tones = {
    cream: 'bg-cream',
    navy: 'bg-navy text-lavender [&_h1]:text-cream [&_h2]:text-cream [&_h3]:text-cream [&_h4]:text-cream',
  };
  return (
    <section id={id} className={`${tones[tone]} ${SECTION_PADDING[size]} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Eyebrow({ tone = 'navy', className = '', style, children }) {
  // The rule is always gold — it is the brand mark being struck before the
  // label registers against it, which is what the m-eyebrow motion animates.
  const color = tone === 'light' ? 'text-gold' : 'text-navy';
  return (
    <div
      style={style}
      className={`mb-3.5 inline-flex items-center gap-2 text-[.78rem] font-bold tracking-[.14em] uppercase before:block before:h-[3px] before:w-[22px] before:rounded-sm before:bg-gold before:content-[''] rtl:tracking-normal ${color} ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHead({ eyebrow, tone, title, align = 'center', className = '', children }) {
  const centered = align === 'center';
  return (
    <Reveal as="div" className={`mb-12 max-w-measure ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2 className="mb-2 text-[clamp(1.7rem,3.2vw,2.5rem)]">{title}</h2>
      {children ? <Lede className={centered ? 'mx-auto' : ''}>{children}</Lede> : null}
    </Reveal>
  );
}

export function Lede({ className = '', style, children }) {
  return (
    <p style={style} className={`max-w-[64ch] text-[1.15rem] ${className}`}>
      {children}
    </p>
  );
}

// A responsive card//block grid. `stagger` makes the whole grid arrive as one
// cascading list rather than as N independent reveals firing at whatever
// moment each item happened to cross the fold.
const GRID_COLS = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
  5: 'sm:grid-cols-2 lg:grid-cols-5',
};

export function Grid({ cols = 3, className = '', children }) {
  return (
    <Reveal as="div" stagger className={`grid grid-cols-1 gap-7 ${GRID_COLS[cols]} ${className}`}>
      {children}
    </Reveal>
  );
}

export function Split({ className = '', children }) {
  return (
    <Reveal as="div" className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14 ${className}`}>
      {children}
    </Reveal>
  );
}

// The photograph half of a Split. Fixed 4/3 so a row of them keeps its
// baseline no matter how tall the prose beside it runs.
export function Media({ src, alt, position, className = '' }) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden rounded-panel border border-lavender ${className}`}>
      <img src={src} alt={alt} className="size-full object-cover" style={position ? { objectPosition: position } : undefined} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Heroes
// ---------------------------------------------------------------------------

// The photograph is its own layer so it can settle without dragging the text
// with it, and so the navy scrim is never scaled off its own edges.
function HeroBackdrop({ image }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <img src={image} alt="" className="m-settle size-full object-cover" />
      <div className="absolute inset-0 bg-navy opacity-[.82]" />
    </div>
  );
}

export function Hero({ image, wide = false, children }) {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-18 text-cream md:pt-32 md:pb-25">
      <HeroBackdrop image={image} />
      <div className="wrap">
        <div className={wide ? 'max-w-[900px]' : 'max-w-measure'}>{children}</div>
      </div>
    </section>
  );
}

// Every subpage opens with this, and it runs the same entrance as the home
// hero at a shorter scale: the photograph settles, then the crumb, title, and
// lede register to it. Because it animates on mount and the router swaps only
// the page body, this cascade *is* the page transition — arriving somewhere
// new looks like that place being set out, not like a document reload.
export function PageHero({
  image,
  homeHref,
  homeLabel,
  crumb,
  eyebrow,
  tag,
  title,
  lede,
  wide = true,
  className = '',
  children,
}) {
  return (
    <section
      className={`relative isolate overflow-hidden pt-32 pb-15 text-cream md:pt-37 md:pb-22 ${className}`}
    >
      <HeroBackdrop image={image} />
      <div className="wrap">
        <div className={wide ? 'max-w-[900px]' : 'max-w-measure'}>
          <div
            className="m-register mb-4 text-[.85rem] font-medium text-lavender"
            style={{ '--m-delay': '90ms', '--m-dur': '520ms' }}
          >
            <Link href={homeHref} className="transition-colors hover:text-gold">
              {homeLabel}
            </Link>{' '}
            / {crumb}
          </div>
          {tag ? (
            <div className="m-register mb-4" style={{ '--m-delay': '130ms', '--m-dur': '520ms' }}>
              <Tag tone="gold">{tag}</Tag>
            </div>
          ) : null}
          {eyebrow ? (
            <Eyebrow tone="light" className="m-eyebrow m-register" style={{ '--m-delay': '130ms' }}>
              {eyebrow}
            </Eyebrow>
          ) : null}
          <h1 className="m-wipe text-[clamp(2.1rem,4.4vw,3.6rem)] text-cream" style={{ '--m-delay': '190ms' }}>
            {title}
          </h1>
          {lede ? (
            <Lede className="m-register text-lavender" style={{ '--m-delay': '380ms' }}>
              {lede}
            </Lede>
          ) : null}
          {children ? (
            <div className="m-register mt-8 flex flex-wrap gap-3.5" style={{ '--m-delay': '460ms' }}>
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

// The row of headline figures under the home hero and beside the featured
// project. Gold numerals, lavender captions.
export function Stats({ className = '', children }) {
  return <div className={`flex flex-wrap gap-9 ${className}`}>{children}</div>;
}

export function Stat({ value, children }) {
  return (
    <div>
      <strong className="block text-[1.9rem] leading-tight font-black text-gold">{value}</strong>
      <span className="text-[.85rem] text-lavender">{children}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Cards
// ---------------------------------------------------------------------------

// The icon plate: lavender by default, and it stays lavender on the dark card
// too, because a navy plate on a navy card would disappear.
function CardIcon({ icon: Icon }) {
  return (
    <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-lavender text-navy">
      <Icon className="size-6.5" strokeWidth={1.7} />
    </div>
  );
}

export function Card({ icon, title, tone = 'light', className = '', children }) {
  const dark = tone === 'dark';
  return (
    <div
      className={`h-full rounded-card p-8 transition-[transform,border-color] duration-250 hover:-translate-y-1.5 ${
        dark
          ? 'border-none bg-navy text-lavender [&_h3]:text-cream'
          : 'border border-lavender bg-cream hover:border-gold'
      } ${className}`}
    >
      {icon ? <CardIcon icon={icon} /> : null}
      {title ? <h3 className="mb-2.5 text-card-title">{title}</h3> : null}
      {children}
    </div>
  );
}

// The numbered card from the "How We Work" grid: the numeral sits on the card's
// top edge, half outside it, so the row reads as a sequence rather than a set.
export function NumCard({ num, title, className = '', children }) {
  return (
    <div
      className={`relative h-full rounded-card border border-lavender bg-cream p-8 pt-11 transition-[transform,border-color] duration-250 hover:-translate-y-1.5 hover:border-gold ${className}`}
    >
      <span className="absolute -top-4.5 start-7 flex size-11 items-center justify-center rounded-full bg-navy font-black text-gold">
        {num}
      </span>
      <h3 className="mb-2.5 text-card-title">{title}</h3>
      {children}
    </div>
  );
}

export function CardText({ className = '', children }) {
  return <p className={`mb-0 text-[.95rem] ${className}`}>{children}</p>;
}

// The gold-square bullet list used inside cards.
export function CardList({ columns = false, className = '', children }) {
  return (
    <ul
      className={`mt-3.5 ${columns ? 'gap-6 sm:columns-2' : ''} ${className}`}
    >
      {children}
    </ul>
  );
}

export function CardListItem({ children }) {
  return (
    <li className="relative mb-2 ps-5 text-[.92rem] before:absolute before:top-[.55em] before:size-[7px] before:rounded-sm before:bg-gold before:start-0 before:content-['']">
      {children}
    </li>
  );
}

// ---------------------------------------------------------------------------
// Lists
// ---------------------------------------------------------------------------

// The gold ✓ list. `tone="light"` is for the navy sections, where the text
// needs to be cream rather than navy.
export function Checklist({ tone = 'navy', className = '', children }) {
  return <ul className={`${tone === 'light' ? 'text-cream' : 'text-navy'} ${className}`}>{children}</ul>;
}

export function ChecklistItem({ children }) {
  return (
    <li className="relative mb-3.5 ps-8 text-[.98rem] font-medium">
      <span
        aria-hidden="true"
        className="absolute -top-px flex size-5.5 items-center justify-center rounded-[7px] bg-gold start-0 text-[.75rem] font-black text-navy"
      >
        ✓
      </span>
      {children}
    </li>
  );
}

// ---------------------------------------------------------------------------
// Sequences
// ---------------------------------------------------------------------------

// The dashed-connector process row from the troubleshooting section.
export function Steps({ className = '', children }) {
  return (
    <Reveal as="div" stagger className={`flex flex-wrap ${className}`}>
      {children}
    </Reveal>
  );
}

export function Step({ num, title, children }) {
  return (
    <div className="relative flex-1 basis-50 px-5 [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:top-6.5 [&:not(:last-child)]:after:-end-2.5 [&:not(:last-child)]:after:hidden [&:not(:last-child)]:after:w-2/5 [&:not(:last-child)]:after:border-t-2 [&:not(:last-child)]:after:border-dashed [&:not(:last-child)]:after:border-lavender [&:not(:last-child)]:after:content-[''] md:[&:not(:last-child)]:after:block">
      <div className="mb-4 flex size-13 items-center justify-center rounded-full bg-navy text-[1.1rem] font-black text-gold">
        {num}
      </div>
      <h3 className="mb-2 text-card-title">{title}</h3>
      {children}
    </div>
  );
}

// The three-column milestone rail on the About page. The spine is a single
// rule struck across the row, with each item's gold node registering to it.
export function Timeline({ className = '', children }) {
  return (
    <Reveal
      as="div"
      stagger
      className={`relative grid grid-cols-1 gap-7 md:grid-cols-3 md:before:absolute md:before:inset-x-[8%] md:before:top-5 md:before:h-0.5 md:before:bg-lavender md:before:content-[''] ${className}`}
    >
      {children}
    </Reveal>
  );
}

export function TimelineItem({ title, children }) {
  return (
    <div className="relative pt-11">
      <span
        aria-hidden="true"
        className="absolute top-2.5 size-5 rounded-full border-4 border-cream bg-gold start-0 shadow-[0_0_0_2px_var(--color-navy)]"
      />
      <h4 className="mb-2.5 text-[1.05rem] font-bold">{title}</h4>
      <ul>{children}</ul>
    </div>
  );
}

export function TimelineEntry({ children }) {
  return (
    <li className="relative mb-2.5 ps-4.5 text-[.94rem] before:absolute before:start-0 before:content-['—']">
      {children}
    </li>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

// The project fact sheet. Two columns on desktop, one on mobile, with the
// zebra banding recomputed for each so the stripes never double up.
export function SpecList({ items }) {
  return (
    <Reveal
      as="dl"
      className="grid grid-cols-1 overflow-hidden rounded-card border border-lavender [&>div:nth-child(even)]:bg-lavender sm:grid-cols-2 sm:[&>div:nth-child(even)]:bg-transparent sm:[&>div:nth-child(4n-1)]:bg-lavender sm:[&>div:nth-child(4n)]:bg-lavender"
    >
      {items.map((item) => (
        <div key={item.label} className="border-b border-lavender px-5.5 py-4.5">
          <dt className="mb-1 text-[.75rem] font-bold tracking-eyebrow uppercase">{item.label}</dt>
          <dd className="m-0 font-bold">{item.value}</dd>
        </div>
      ))}
    </Reveal>
  );
}

// Wide technical tables scroll inside their own frame rather than pushing the
// page sideways — several of these are far wider than a phone.
export function DataTable({ headers, rows }) {
  return (
    <Reveal as="div" className="overflow-x-auto rounded-card border border-lavender">
      <table className="w-full min-w-160 border-collapse bg-cream">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="bg-navy px-5 py-4 text-start text-[.88rem] font-bold tracking-[.02em] text-cream"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="even:bg-lavender">
              {row.map((cell, j) => (
                <td key={j} className="border-t border-lavender px-5 py-4 align-top text-[.92rem]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}

export function Tag({ tone = 'lavender', className = '', children }) {
  const tones = {
    lavender: 'bg-lavender text-navy',
    gold: 'bg-gold text-navy',
    navy: 'bg-navy text-cream',
    outline: 'border-[1.5px] border-lavender text-navy',
  };
  return (
    <span className={`inline-block rounded-full px-3.5 py-1.5 text-[.78rem] font-bold ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Products page
// ---------------------------------------------------------------------------

export function ProductNav({ children }) {
  return <nav className="mb-2 flex flex-wrap justify-center gap-3">{children}</nav>;
}

export function ProductNavLink({ href, children }) {
  return (
    <a
      href={href}
      className="rounded-full border-[1.5px] border-lavender px-5 py-2.5 text-[.88rem] font-bold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-cream"
    >
      {children}
    </a>
  );
}

// The banner that opens each of the three product families. The plate colour
// is what distinguishes them — navy, gold, lavender — so the three sections
// are told apart at a glance while scrolling.
export function PillarHead({ icon: Icon, tone = 'navy', eyebrow, title }) {
  const tones = {
    navy: 'bg-navy text-cream',
    gold: 'bg-gold text-navy',
    lavender: 'bg-lavender text-navy',
  };
  return (
    <Reveal as="div" className="mb-9 flex items-center gap-4.5">
      <div className={`flex size-16 shrink-0 items-center justify-center rounded-[18px] ${tones[tone]}`}>
        <Icon className="size-7.5" strokeWidth={1.8} />
      </div>
      <div>
        <Eyebrow className="mb-0.5">{eyebrow}</Eyebrow>
        <h2 className="m-0 text-[clamp(1.7rem,3.2vw,2.5rem)]">{title}</h2>
      </div>
    </Reveal>
  );
}

// One product line: a gold square, a name, and what it covers. Deliberately a
// rule-separated block rather than a card — there are 30-odd of these and a
// wall of bordered boxes would read as noise.
export function ProductBlock({ title, children }) {
  return (
    <div className="border-t border-lavender py-5.5 first:border-t-0 first:pt-0">
      <h4 className="mb-2 flex items-center gap-2.5 text-base font-bold before:size-2 before:shrink-0 before:rounded-sm before:bg-gold before:content-['']">
        {title}
      </h4>
      <p className="mb-0 text-[.93rem]">{children}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Logos, CTA
// ---------------------------------------------------------------------------

// Greyscale until hovered, so a wall of competing brand colours does not
// out-shout the page it sits on.
export function LogoStrip({ logos, large = false }) {
  return (
    <Reveal as="div" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-5">
      {logos.map((logo) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
          className={`object-contain px-2.5 py-1.5 opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0 ${
            large ? 'h-21 w-40 sm:h-28 sm:w-57.5' : 'h-18 w-40 sm:h-24 sm:w-52.5'
          }`}
        />
      ))}
    </Reveal>
  );
}

export function CtaBand({ eyebrow, title, text, align = 'center', className = '', children }) {
  const centered = align === 'center';
  return (
    <Reveal
      as="div"
      className={`rounded-panel bg-navy px-6 py-9 text-cream sm:px-12 sm:py-14 ${centered ? 'text-center' : ''} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow tone="light" className={centered ? 'justify-center' : ''}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className={`text-cream ${text || children ? 'mb-3' : 'mb-0'}`}>{title}</h2>
      {text ? (
        <p className={`mb-7 max-w-[560px] text-lavender ${centered ? 'mx-auto' : ''}`}>{text}</p>
      ) : null}
      {children ? (
        <div className={`flex flex-wrap gap-3.5 ${centered ? 'justify-center' : ''}`}>{children}</div>
      ) : null}
    </Reveal>
  );
}

export function CtaButton({ href, variant = 'gold', download = false, arrow = false, children }) {
  // A download or an out-of-app target is a plain anchor: next/link's client
  // router has nothing to do for either, and for the PDF it would swallow the
  // download attribute.
  const external = download || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http');
  return (
    <Button asChild variant={variant}>
      {external ? (
        <a href={href} {...(download ? { download: true } : {})}>
          {children}
          {arrow ? <ArrowRightIcon /> : null}
        </a>
      ) : (
        <Link href={href}>
          {children}
          {arrow ? <ArrowRightIcon /> : null}
        </Link>
      )}
    </Button>
  );
}

// ---------------------------------------------------------------------------
// Contact page
// ---------------------------------------------------------------------------

export function ContactCard({ className = '', children }) {
  return <div className={`rounded-card border border-lavender bg-cream p-7 sm:p-9 ${className}`}>{children}</div>;
}

// One line of the contact block: an icon plate, a small uppercase label, and
// the value. Rule-separated rather than boxed — there are seven of these and a
// card each would bury the information under its own chrome.
export function ContactItem({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-4 border-t border-lavender py-4 first:border-t-0 first:pt-0">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-lavender text-navy">
        <Icon className="size-5" strokeWidth={1.8} />
      </div>
      <div className="min-w-0">
        <h4 className="mb-1 text-[.85rem] font-bold tracking-[.06em] uppercase">{label}</h4>
        <div className="text-base font-bold [&_a]:transition-colors [&_a:hover]:text-gold">{children}</div>
      </div>
    </div>
  );
}

export function SocialRow({ children }) {
  return <div className="mt-6.5 flex gap-2.5">{children}</div>;
}

export function SocialButton({ href, label, external = false, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className="flex size-9.5 items-center justify-center rounded-full border-[1.5px] border-lavender text-navy transition-colors hover:border-gold hover:bg-gold"
    >
      {children}
    </a>
  );
}

export function MapFrame({ src, title }) {
  return (
    <Reveal as="div" className="overflow-hidden rounded-panel border border-lavender">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-85 w-full border-0"
      />
    </Reveal>
  );
}

export { ArrowRightIcon, Button, Reveal };
