# Bright Volition — Company Website

Marketing site for **Bright Volition**, a registered KRG (Kurdistan Regional
Government) engineering company in Sulaymaniyah, Iraq, providing Electrical,
Instrumentation & Mechanical (EIM) engineering services and industrial
product supply.

**Live:** https://brightvolition.com

## Stack

- [Next.js](https://nextjs.org) (App Router), exported as static HTML — no
  Node server runs in production
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn](https://ui.shadcn.com)
  primitives
- Hosted on GitHub Pages, DNS/redirects via Cloudflare

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # next build, then postbuild — writes the static site to out/
npm run start    # next start, on :3000
npm run lint     # eslint .
```

## Languages

Every page is built once and rendered for three languages — English,
Arabic, and Kurdish Sorani (`ckb`) — each on its own route (`/en/`, `/ar/`,
`/ku/`) with proper `dir`/`lang` and hreflang tags, not toggled client-side.
See [`DESIGN.md`](./DESIGN.md#rtl--language-handling) for how RTL and
per-script typography are handled.

## Project structure

| Path | What's there |
| --- | --- |
| `app/[lang]/_content/` | Page content, one file per page + a matching `.strings.js` per language |
| `components/sections.jsx` | The shared section/card/list vocabulary the content files are built from |
| `components/ui/` | shadcn primitives |
| `lib/site-data.js` | Nav labels, footer text, contact details — the site's chrome |
| `app/globals.css` | Colour, type, spacing, and motion tokens |

## Docs

- [`PRODUCT.md`](./PRODUCT.md) — what this site is, who it's for, and what's deliberately out of scope
- [`DESIGN.md`](./DESIGN.md) — the design system: colour, type, spacing, and the "why" behind each rule
- [`DEPLOY.md`](./DEPLOY.md) — how the build works and how a deploy actually reaches brightvolition.com

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds and publishes
automatically — see [`DEPLOY.md`](./DEPLOY.md) for the full pipeline.
