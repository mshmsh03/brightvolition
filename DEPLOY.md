# Deploying brightvolition.com

The site is a **Next.js app exported to static HTML** and served by **GitHub
Pages**, with **Cloudflare** in front of it for DNS and redirects.

```
source (this repo, main)
   │  GitHub Actions: npm ci && npm run build   →  out/
   ▼
GitHub Pages  ──  Cloudflare (DNS + redirect rules)  ──  brightvolition.com
```

## How the build works

`npm run build` runs `next build` and then `scripts/postbuild.mjs`. Because
`next.config.js` sets `output: 'export'`, the build writes a complete static
site to `out/` — no Node server runs in production.

`trailingSlash: true` is what decides the shape of the output: every route
becomes a directory with an `index.html` inside it (`out/en/about/index.html`),
which is the only form GitHub Pages will serve without rewrite rules.

Files that have to be in the published output live in `public/`, which the
export copies verbatim:

| File | Why it is there |
| --- | --- |
| `CNAME` | Inert. Kept only so a switch back to branch-based publishing would still carry the domain — it is **not** what binds `brightvolition.com` today. See [The custom domain](#the-custom-domain). |
| `.nojekyll` | Without it, GitHub Pages runs Jekyll, and Jekyll ignores every directory starting with `_` — including `_next`. The site would load with no CSS or JS. |
| `index.html`, `about.html`, … | Redirect stubs for the pre-Next URLs (see below). |
| `robots.txt`, `sitemap.xml` | Regenerate with `node scripts/make-stubs.cjs public` if the page list changes. |

`scripts/postbuild.mjs` then replaces `out/404.html`. Next writes its own
unstyled 404 there from the framework's not-found route, and a file in
`public/` cannot win that race — the export copies `public/` first and writes
route output over the top.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds, checks that the expected
files actually exist in `out/`, and publishes. A pull request runs the build but
does not deploy.

The one-time GitHub setting: **Settings → Pages → Build and deployment →
Source: GitHub Actions**. If it is still set to "Deploy from a branch", the
workflow will run green and nothing will change on the live site.

After publishing, the workflow loads `/`, `/en/`, `/ar/` and `/ku/` on the real
domain and fails on anything other than a 200. Building the right files and
serving them at the right address are separate things (see below), and without
that step a site that is completely unreachable still finishes green.

## The custom domain

**`brightvolition.com` is bound in Settings → Pages, not by any file in this
repo.** Under branch-based publishing a `CNAME` file at the published root is
what sets the domain; under GitHub Actions publishing that stops being true, and
the setting is the only thing that counts.

This already caused one outage. The migration to Next.js moved `CNAME` from the
repo root into `public/` and switched publishing to Actions in the same change.
The file survived, so the build's `Verify export` check for `out/CNAME` passed —
but nothing read it any more, the domain came unbound, and every URL returned
GitHub's "Site not found" while the workflow reported success. The artifact was
correct the whole time; `mshmsh03.github.io/brightvolition/en/` served it
normally throughout. Re-entering the domain in Settings fixed it with no rebuild.

So there are now two `CNAME` files, and **neither one binds the domain**:

| Path | Where it came from | Effect |
| --- | --- | --- |
| `CNAME` | Committed automatically by GitHub when the domain was set in Settings | None while publishing via Actions. Not copied into `out/`. |
| `public/CNAME` | Ours, copied to `out/CNAME` by the export | None. Served as a plain file at `/CNAME`. |

Neither is safe to treat as the source of truth. If the domain ever drops off
again — the symptom is "Site not found · GitHub Pages" on every URL, including
`/` — re-enter it under **Settings → Pages → Custom domain**. Nothing needs to
be rebuilt or pushed.

## URLs

Every page lives under a language segment:

```
/en/  /en/about/  /en/services/  /en/products/  /en/projects/  /en/contact/
/ar/  …   /ku/  …
```

`/` and the six old flat URLs (`/about.html`, `/services.html`, …) are served by
redirect stubs in `public/`. Each one carries `<link rel="canonical">` to the
English page, `noindex,follow`, a `<meta http-equiv="refresh">`, and a script
that reads the **`bv-lang`** key the pre-Next site wrote to `localStorage` — so
a returning visitor who had chosen Kurdish still lands on Kurdish rather than
being reset to English by the move to per-language URLs.

Those stubs are a client-side hop, not a 301. **Cloudflare is where the real
redirects belong.** Under *Rules → Redirect Rules*, add a static rule per old
path (status 301, preserve query string):

| From | To |
| --- | --- |
| `/` | `/en/` |
| `/index.html` | `/en/` |
| `/about.html` | `/en/about/` |
| `/services.html` | `/en/services/` |
| `/products.html` | `/en/products/` |
| `/projects.html` | `/en/projects/` |
| `/contact.html` | `/en/contact/` |

Leave the stubs in place anyway — they are the fallback if a rule is ever
removed, and they are what makes `mshmsh03.github.io/brightvolition/` behave.

### Cloudflare notes

- Keep the GitHub Pages DNS records: four `A` records for the apex
  (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) and a `CNAME` for
  `www` → `mshmsh03.github.io`.
- Proxy status can stay **Proxied** (orange cloud). If HTTPS ever errors after
  switching, set SSL/TLS mode to **Full** — *Flexible* makes GitHub Pages
  redirect-loop.
- Cloudflare caches HTML. After a deploy that changes a page, purge the cache
  (or purge just that URL) if the old version is still being served.

## Running it locally

```bash
npm install
npm run dev          # http://localhost:3000/en/
```

`next dev` serves the app normally — redirect stubs in `public/` are not
exercised, so `/` will 404 in dev. To check the real published artefact:

```bash
npm run build
npx serve out -l 4321   # http://localhost:4321/
```

## Changing content

Content lives in `app/[lang]/_content/<page>.<lang>.jsx` — one file per page per
language. Chrome (nav labels, footer, contact block, page titles and
descriptions) lives in `lib/site-data.js`.

Editing a page means editing three files. The Arabic and Kurdish ones were
generated from the English during the migration, but they are ordinary source
files now: edit them directly.
