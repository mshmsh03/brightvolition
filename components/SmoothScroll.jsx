'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenis } from '../lib/smooth-scroll';

// Wheel and trackpad scrolling get Lenis's eased inertia instead of the
// browser's native per-tick jump. Off entirely under prefers-reduced-motion,
// matching every other motion effect on the site (see MotionRoot) — Lenis's
// own reduced-motion handling only softens programmatic jumps, not wheel
// input, so this checks the media query itself rather than trusting that.
//
// Anchor clicks are re-routed through the same Lenis instance rather than
// left to the browser: letting both the native jump and Lenis's animation
// target the same scroll produces a visible snap-then-settle. Reading the
// target through Lenis's scrollTo means it still honours the site's
// `scroll-padding-top` (the sticky header clearance) automatically.
export default function SmoothScroll() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lenis;

    const onAnchorClick = (event) => {
      // A modifier key or a non-primary button means the visitor wants the
      // browser's own handling (new tab, new window) — never intercept that.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[href^="#"]');
      if (!link || link.hash.length < 2) return;
      const targetEl = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (!targetEl) return;
      event.preventDefault();
      lenis.scrollTo(targetEl, {
        onComplete: () => {
          // Native anchor jumps move keyboard/screen-reader focus to the
          // target; replicate that so this doesn't regress for those visitors.
          targetEl.setAttribute('tabindex', '-1');
          targetEl.focus({ preventScroll: true });
        },
      });
    };

    const start = () => {
      lenis = new Lenis({ autoRaf: true });
      setLenis(lenis);
      document.addEventListener('click', onAnchorClick);
    };

    const stop = () => {
      document.removeEventListener('click', onAnchorClick);
      lenis?.destroy();
      lenis = undefined;
      setLenis(null);
    };

    if (!mq.matches) start();

    const sync = () => (mq.matches ? stop() : start());
    mq.addEventListener('change', sync);

    return () => {
      mq.removeEventListener('change', sync);
      stop();
    };
  }, []);

  return null;
}
