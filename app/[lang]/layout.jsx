import { notFound } from 'next/navigation';
import { LANGS, SITE } from '../../lib/site-data';
import { BASE } from '../../lib/metadata';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MotionRoot from '../../components/MotionRoot';
import BackToTop from '../../components/BackToTop';
import '../globals.css';

// themeColor belongs to the viewport export, not metadata — Next warns and
// drops it if it is declared alongside the icons below.
export const viewport = {
  themeColor: '#201747',
};

export const metadata = {
  metadataBase: new URL(BASE),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/assets/img/logo/android-chrome-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/assets/img/logo/apple-touch-icon.png',
  },
};

// Arms motion before the first paint, so entrances never show their finished
// state for a frame and then start over. It has to run inline and blocking: a
// deferred script would paint first and cause exactly that flash.
//
// The timer is the failsafe. Every scroll reveal is hidden by CSS while
// data-motion is "on", so if the bundle never runs, MotionRoot never sets
// data-hydrated and motion is switched back off — leaving the page fully
// visible instead of stranding it at opacity 0.
const ARM_MOTION = `(function(){try{var d=document.documentElement;
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
d.dataset.motion='on';
setTimeout(function(){if(d.dataset.hydrated!=='1')d.dataset.motion='off';},3000);
}catch(e){}})();`;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// Any [lang] outside generateStaticParams 404s instead of being rendered.
// It also keeps the static export honest: with `output: 'export'` the build
// has to know the complete route list up front, and this is what says so.
export const dynamicParams = false;

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!LANGS.includes(lang)) notFound();
  const t = SITE[lang];

  return (
    <html lang={t.hreflang} dir={t.dir}>
      <head>
        {/* Raw <script> rather than next/script: `beforeInteractive` leaves the
            tag in the React tree, so any client navigation that re-renders this
            layout — switching locale, which changes [lang] — recreates the
            element. React never executes a script it creates on the client and
            logs a console error for each one. This form is written into the
            initial HTML and left alone afterwards. */}
        <script dangerouslySetInnerHTML={{ __html: ARM_MOTION }} />
      </head>
      <body>
        <MotionRoot />
        {/* Header and footer sit in the layout, not in the pages, so the router
            swaps only the page body between routes. The chrome stays mounted:
            no flash, no re-entrance, no scroll state lost. */}
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
        <BackToTop label={t.backToTop} />
      </body>
    </html>
  );
}
