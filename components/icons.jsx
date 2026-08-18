// lucide dropped its brand glyphs, so the LinkedIn mark is kept locally —
// carried over verbatim from the pre-Next markup. It takes the same props as a
// lucide icon (className, strokeWidth) so it can sit in a row beside them
// without special-casing, though it is a filled mark and ignores strokeWidth.
export function LinkedinIcon({ className = '', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12.02H3zM9 8.98h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v6.33h-4v-5.61c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.71H9z" />
    </svg>
  );
}
