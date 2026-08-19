import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

// core-web-vitals is the Next preset plus its stricter performance rules; the
// base preset alone leaves things like unkeyed lists and hook misuse unflagged.
const config = [
  { ignores: ['.next/**', 'out/**', 'public/**'] },
  ...nextCoreWebVitals,
  {
    rules: {
      // ESLint's default only reports unused *variables*, so an unused import
      // slips through. `args: none` keeps the noise off component props that
      // exist to satisfy a signature; the pattern exempts a deliberate `_name`.
      'no-unused-vars': [
        'warn',
        { args: 'none', varsIgnorePattern: '^_', ignoreRestSiblings: true },
      ],

      // next/image is a server feature and cannot run on GitHub Pages, which
      // is why next.config.js sets `output: 'export'` and unoptimized images.
      // Plain <img> is the deliberate choice site-wide, so this rule only
      // produces noise here — see the images note in next.config.js.
      '@next/next/no-img-element': 'off',
    },
  },
];

export default config;
