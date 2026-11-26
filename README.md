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
npm run start    # serves the built out/ folder (run npm run build first)
npm run lint     # eslint .
npm test         # node --test: the quote form's logic and every blog article
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
| `content/blog/` | Blog articles, one file per article with all three languages in it |
| `lib/blog.mjs` | The list of articles and the checks `npm test` runs on them |
| `components/sections.jsx` | The shared section/card/list vocabulary the content files are built from |
| `components/blog.jsx` | The same, for the blog: article text, steps, the PDF guide card |
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

## Blog

Articles live in `content/blog/`, one file per article with all three
languages inside it, and are listed in `lib/blog.mjs`. The blog page
(`/en/blog/`), the article pages, the teaser on the home page and the sitemap
are all built from that list, so those never need updating by hand.

To add an article the company has sent as a Word file:

1. Copy any PDF guide into `public/assets/docs/blog/` and its cover picture
   into `public/assets/img/blog/`.
2. Write `content/blog/<slug>.recipe.json` (copy the existing one and change
   the date). It holds everything that is not article text: the slug, the
   date, the cover photo, the guide's files and titles, and where the guide
   card and page links go.
3. Run the converter. It copies the text out of the Word file, so the Arabic
   and Kurdish are never retyped:

   ```bash
   python scripts/blog/docx-to-post.py "<article>.docx" content/blog/<slug>.recipe.json
   ```

   The Word file has to follow the layout described at the top of that
   script. It needs Python 3 and nothing else. It stops with a message if the
   file has something it cannot carry over (a table, a picture, a link, a
   footnote, tracked changes). When it finishes it prints which section went
   to which language and the summary it picked for each: read those lines.
4. Import the new `content/blog/<slug>.mjs` in `lib/blog.mjs` and add it to
   the list there.
5. Run `npm test`. It fails if one language is missing a heading, paragraph
   or list item the others have, if Arabic and Kurdish have ended up in each
   other's place, if a file the article points to is not in `public/`, or if
   step 4 was forgotten.

An article can point to another page of the site with a button (the first one
points to Projects). Each page it may point to needs a button label in all
three languages: `linkTo` in `app/[lang]/_content/blog.strings.js`, and the
page's name in `LINK_PAGES` in `lib/blog.mjs`.

The converter has tests of its own, which the deploy also runs:

```bash
python -m unittest discover -s scripts/blog -p "test_*.py"
```

The slug is the same in every language (`/en/blog/<slug>/`,
`/ar/blog/<slug>/`, `/ku/blog/<slug>/`), which is what lets the language
switcher stay on the article. Do not change a slug once it is live: the old
address would stop working.

The blog's own labels ("Read the Article", "Download the Guide") are in
`app/[lang]/_content/blog.strings.js`.

Why a blog section (decided 2026-11-27). The other options were one
stand-alone guide page, or only offering the PDFs for download. The company
sends these as blog articles and more are expected, and article text on a
page of its own is what a search engine can find in each language. Embedding
the LinkedIn post itself was ruled out: an embed shows one language, loads
LinkedIn's scripts for every visitor, and its text does not count as this
site's content.

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
