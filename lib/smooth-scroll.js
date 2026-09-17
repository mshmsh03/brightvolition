// Shared handle on the single Lenis instance SmoothScroll owns, so anything
// that needs to move the page (BackToTop, nav anchors) can ride the same
// eased scroll instead of fighting it with a competing native animation.
// Null whenever motion is off — prefers-reduced-motion, pre-hydration, or
// hydration failed — and callers are expected to fall back to a plain jump.
let instance = null;

export function setLenis(lenis) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}
