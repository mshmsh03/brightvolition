'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { LANGS, PAGES, SITE, pagePath } from '../lib/site-data';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';

// The header lives in the layout rather than in each page, so client-side
// navigation leaves it mounted: no re-paint and no scroll state lost. That
// means it reads the active page from the URL instead of taking it as a prop.
//
// Routes are /<lang>/ and /<lang>/<page>/ — see pagePath() in lib/site-data.js
// and the trailingSlash note in next.config.js.
function pageFromPathname(pathname) {
  const match = /^\/[a-z]{2}\/([a-z]+)\/?$/.exec(pathname);
  return match && PAGES.includes(match[1]) ? match[1] : 'index';
}

export default function Header({ lang }) {
  const t = SITE[lang];
  const pathname = usePathname();
  const page = pageFromPathname(pathname);
  const [open, setOpen] = useState(false);

  // The language switcher points at the *same* page in the other language.
  // The pre-Next site toggled a CSS class and wrote localStorage instead, so
  // all three languages shared one URL and only English was ever indexed.
  const langLinks = LANGS.map((l) => ({
    lang: l,
    href: pagePath(l, page),
    label: SITE[l].langName,
    active: l === lang,
  }));

  return (
    <header className="sticky top-0 z-200 border-b border-lavender bg-cream supports-[backdrop-filter]:backdrop-blur-[10px]">
      <div className="wrap flex h-23 items-center justify-between gap-3 sm:h-26 md:h-28">
        {/* The mark is taller than the bar on purpose — it is the one element
            allowed to break the header's line, which is what makes the bar
            read as a rule the logo sits on rather than a box it sits in. */}
        <Link href={pagePath(lang, 'index')} className="flex items-center">
          <img
            src="/assets/img/logo/logo-navy.png"
            alt={t.brandAlt}
            className="h-28 w-auto sm:h-32.5 md:h-37.5"
          />
        </Link>

        {/* Desktop nav */}
        {/* gap-1 + px-3 rather than gap-1.5 + px-4, and whitespace-nowrap on
            the links. The three go together and none of them works alone.

            Kurdish "پەیوەندیمان پێوە بکە" is three words where English has one,
            so it wrapped to two lines and stood taller than its siblings.
            nowrap fixes that but widens the nav by 52px, and the row has no
            slack: every item here has the default flex-shrink: 1, so the extra
            width is taken out of the logo — which is a square image and simply
            renders narrower, i.e. visibly squashed. Unwrapping at px-4 drove it
            to a 0.45 aspect ratio at the lg breakpoint.

            Tightening the pills pays for the extra width instead. Measured on
            the built Kurdish page, this is better than the old spacing at every
            width, not just even: at 1024px the logo goes 0.795 -> 0.838 aspect,
            at 1100px it reaches a true 1.0, and at 1280px+ 0.932 -> 0.983.

            So: keep the nav's natural width at or below ~684px. Widening these
            pills again, or adding a seventh nav item, brings the squash back. */}
        <nav className="hidden items-center gap-1 lg:flex">
          {PAGES.map((p) => {
            const active = p === page;
            return (
              <Link
                key={p}
                href={pagePath(lang, p)}
                aria-current={active ? 'page' : undefined}
                className={`rounded-full px-3 py-2.5 text-[.94rem] font-medium whitespace-nowrap transition-colors ${
                  active ? 'bg-navy text-cream' : 'text-navy hover:bg-navy hover:text-cream'
                }`}
              >
                {t.nav[p]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* items-stretch + leading-none: the Kurdish label renders in Ping,
              whose baseline sits higher than Gotham's, so letting the three
              links size themselves left KU riding above EN and AR. */}
          <div className="flex items-stretch overflow-hidden rounded-full border-[1.5px] border-lavender text-[.75rem] leading-none font-bold sm:text-[.8rem]">
            {/* A plain <a>, not <Link>, so changing language is a full document
                load. Two reasons. The root layout carries <html lang dir> and
                the inline motion script; a soft nav re-renders it on the
                client, and React logs an error for every <script> element it
                creates there. And swapping ltr/rtl under a live React tree
                re-flows every mounted component at once — reloading gives the
                new direction a clean first paint instead. */}
            {langLinks.map((l) => (
              <a
                key={l.lang}
                href={l.href}
                lang={SITE[l.lang].hreflang}
                aria-current={l.active ? 'true' : undefined}
                // font-sans overrides the [lang="ckb"] font rule: the labels are
                // Latin ("EN"/"AR"/"KU"), and letting the Kurdish one render in
                // Ping put it on a visibly different baseline from its siblings.
                className={`flex items-center px-2.5 py-2.5 font-sans transition-colors sm:px-3.5 ${
                  l.active ? 'bg-navy text-cream' : 'text-navy hover:bg-lavender'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <Button asChild variant="outlineNavy" size="sm" className="hidden whitespace-nowrap xl:inline-flex">
            <Link href={pagePath(lang, 'contact')}>{t.headerCta}</Link>
          </Button>

          {/* Mobile nav */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t.burgerLabel} className="lg:hidden">
                <MenuIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={t.dir === 'rtl' ? 'left' : 'right'}
              className="w-4/5 border-none bg-cream text-navy sm:max-w-80"
            >
              <SheetTitle className="sr-only">{t.burgerLabel}</SheetTitle>
              {/* The panel slides in, then its contents register to it. Radix
                  mounts this subtree on open, so the delays run per open. */}
              <nav className="mt-16 flex flex-col px-7">
                {PAGES.map((p, i) => (
                  <Link
                    key={p}
                    href={pagePath(lang, p)}
                    onClick={() => setOpen(false)}
                    aria-current={p === page ? 'page' : undefined}
                    className={`m-register border-b border-lavender py-3.5 text-[1.05rem] font-medium transition-colors ${
                      p === page ? 'text-gold' : 'hover:text-gold'
                    }`}
                    style={{ '--m-delay': `${140 + i * 45}ms`, '--m-dur': '440ms' }}
                  >
                    {t.nav[p]}
                  </Link>
                ))}
                <Button
                  asChild
                  variant="gold"
                  size="sm"
                  className="m-register mt-6 self-start"
                  style={{ '--m-delay': `${140 + PAGES.length * 45}ms`, '--m-dur': '440ms' }}
                >
                  <Link href={pagePath(lang, 'contact')} onClick={() => setOpen(false)}>
                    {t.headerCta}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
