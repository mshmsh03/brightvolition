'use client';

import { useEffect, useState } from 'react';
import { ArrowUpIcon } from 'lucide-react';

// Appears once the visitor is far enough down that scrolling back is a chore.
// Rendered from the layout so it survives client-side navigation, and hidden
// with opacity + pointer-events rather than being unmounted, so it fades
// rather than popping into place.
export default function BackToTop({ label }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      setShow(window.scrollY > 500);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label={label}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      onClick={() =>
        window.scrollTo({
          top: 0,
          // Honour the same preference the rest of the motion layer honours.
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        })
      }
      className={`fixed bottom-6 end-6 z-150 flex size-12 items-center justify-center rounded-full bg-navy text-gold transition-opacity duration-250 ${
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <ArrowUpIcon className="size-4.5" strokeWidth={2.4} />
    </button>
  );
}
