# Bright Volition — Company Website

Marketing site for **Bright Volition**, a registered KRG (Kurdistan Regional
Government) engineering company in Sulaymaniyah, Iraq, providing Electrical,
Instrumentation & Mechanical (EIM) engineering services and industrial
product supply.

**Live:** https://brightvolition.com

## Stack

- [Next.js](https://nextjs.org) (App Router), exported as static HTML. No
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

Every page is built once and rendered for three languages: English,
Arabic, and Kurdish Sorani (`ckb`). Each has its own route (`/en/`, `/ar/`,
`/ku/`) with proper `dir`/`lang` and hreflang tags, not toggled client-side.
See [`DESIGN.md`](./DESIGN.md#rtl--language-handling) for how RTL and
per-script typography are handled.

## Project structure

| Path | What's there |
| --- | --- |
| `app/[lang]/_content/` | Page content, one file per page + a matching `.strings.js` per language |
| `components/sections.jsx` | The shared section/card/list vocabulary the content files are built from |
| `components/ui/` | shadcn primitives |
| `lib/site-data.js` | The site's chrome: nav labels, footer text, contact details |
| `app/globals.css` | Colour, type, spacing, and motion tokens |

## Docs

- [`PRODUCT.md`](./PRODUCT.md): what this site is, who it's for, and what's deliberately out of scope
- [`DESIGN.md`](./DESIGN.md): the design system, colour, type, spacing, and the "why" behind each rule
- [`DEPLOY.md`](./DEPLOY.md): how the build works and how a deploy actually reaches brightvolition.com

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds and publishes
automatically. See [`DEPLOY.md`](./DEPLOY.md) for the full pipeline.

## Quote form (Contact page)

The form is built to post straight to the company inbox through
[Formspree](https://formspree.io), but that is **switched off for now**:
`QUOTE_FORM_ID` in `lib/site-data.js` is empty, so pressing Send opens the
visitor's own mail app with the details filled in. On a PC with no mail app
set up, that does nothing and the request is lost without a trace.

To switch it on later:

1. Create a free Formspree account with `info@brightvolition.com` and a form
   (free plan: 50 submissions a month, checked 2026-11-23).
2. Put the part after `/f/` of the form's endpoint
   (`https://formspree.io/f/<id>`) into `QUOTE_FORM_ID`. It is public by
   design.
3. `npm test`, push, then send one real test request.

Alternatives considered (2026-11-23):

- **Web3Forms**: a bigger free limit (remembered as 250 a month, not
  confirmed). Needs a small change in `lib/quote-request.mjs` and
  `components/QuoteForm.jsx`: a different endpoint, and an `access_key` field.
- **Cloudflare Worker**: ruled out. Company mail runs on Microsoft 365 (MX
  `brightvolition-com.mail.protection.outlook.com`). Cloudflare's email sending
  needs the domain set up on its email service, which adds its own MX records,
  and it isn't included in the free Workers plan.
