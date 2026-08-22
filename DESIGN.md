# Bright Volition — Design System

North star: **"Registered & Reliable"** — a flat, restrained, credibility-first B2B industrial site. No drop shadows, no gradients beyond the navy overlay on hero photos, no more than one accent color doing work at a time (gold). Every design decision should read as "established engineering firm," not "startup" or "agency portfolio."

## Color — One Accent Rule
Four colors total, declared as Tailwind theme tokens in the `@theme` block of
`app/globals.css` and used by name (`bg-navy`, `text-gold`, `border-lavender`):

| Token | Utility | Hex | Role |
|---|---|---|---|
| `--color-navy` | `*-navy` | `#201747` | Primary text, headings, dark section backgrounds, buttons |
| `--color-cream` | `*-cream` | `#F6F2F4` | Page background, text-on-navy |
| `--color-lavender` | `*-lavender` | `#B4B5DF` | Secondary text-on-navy, borders, muted fills (table zebra stripes, tag backgrounds) |
| `--color-gold` | `*-gold` | `#F1B434` | The single accent — eyebrow labels, checkmarks, numbered badges, hover states, CTA buttons. Never used for body text or large fills. |

The shadcn semantic variables in `:root` (`--primary`, `--border`, `--ring`, …)
are pointed at these same four colors, so a primitive pulled from the shadcn
registry lands on brand without being rewritten.

Rule: gold is the only "pop" color on the site. If a new component needs to draw attention, reach for gold — not a new color. Navy and lavender are structural (backgrounds/text), not accents.

**Known deliberate deviation**: the official brand style sheet also lists teal + coral, but Mustafa dropped both in his 2026-07-24 redesign pass in favor of this flatter 4-color system. This is intentional — do not reintroduce them.

## Typography — One Font Family Per Script
- English: **Gotham** (self-hosted woff2, weights 400/500/700/900)
- Arabic: **UniSIRWAN Somar** (self-hosted woff2, weights 400/500/700/900)
- Kurdish Sorani: **UniSIRWAN Ping** (self-hosted woff2, weights 400/500/700/900)

One family is active per document, selected by the `dir`/`lang` attributes the
layout sets from the route: `[dir="rtl"]` gets Somar, and `[lang="ckb"]` wins
over it for Kurdish. Never mixed within a single language's content.

Script-specific type tuning (documented so it isn't "fixed" back to the Latin default by accident):
- Latin (Gotham) headings: `line-height:1.15`, `letter-spacing:-.01em` — tight, standard Latin headline tracking
- Arabic/Kurdish (Somar/Ping) headings: `line-height:1.55`, `letter-spacing:0` — looser leading, neutral tracking, because both scripts run taller and more connected than Latin and collide under Latin-tuned settings

## Spacing & Shape
- Container max-width: `1200px`
- Section padding: `88px` (default), `64px` (tight), `56px` (small) — collapses to `64px` under 640px viewport
- Radius scale: `8px` (sm — tags, small elements), `14px` (default — cards), `26px` (lg — CTA bands, split-media images)
- Grid gap: `28px` default

## Components — Flat by Default
- **No box-shadow.** Cards use a 1px lavender border for definition; hover is a small lift plus a border-color change to gold. There are deliberately no shadow tokens in `@theme` so reaching for one takes a conscious edit. The two exceptions are the mobile nav panel, which genuinely floats over the page, and the timeline node's `shadow-[0_0_0_2px]` ring — a ring, not a drop shadow.
- Buttons: fully rounded (`border-radius:100px`), gold-fill or outline variants only
- `.eyebrow`: small gold uppercase label with a 3px gold rule, used as a section kicker — always gold, regardless of background (has explicit overrides for `.bg-navy`, `.grad-navy`, `.cta-band`, `.hero` contexts — see "Context-scoped color overrides" below)

## Navy-on-navy text (was a recurring bug — now structural)
Invisible navy-on-navy text recurred twice on the pre-Next site, because colour
was set by direct rules on class names and every dark container needed its own
override. The component system replaces that with an explicit choice at the
call site:

- `<Eyebrow tone="light">` — gold label, for any navy ground
- `<Checklist tone="light">` — cream items, for any navy ground
- `<Section tone="navy">` — sets `text-lavender` and forces all four heading
  levels to cream for everything inside it
- `<CtaBand>` and `<PageHero>` are navy by definition and already pass
  `tone="light"` to what they render

**When placing `Eyebrow` or `Checklist` on a dark ground, pass `tone="light"`.**
That is now the whole rule — there is no cascade to audit, but there is also
nothing that will catch a missed `tone`, so it stays a review checklist item.

## RTL / Language handling
- Each language is its own URL and its own document: `/en/…`, `/ar/…`, `/ku/…`,
  rendered from `app/[lang]/_content/<page>.<lang>.jsx`. The pre-Next site put
  all three languages in every page and toggled them with a CSS class, which
  meant only English was ever indexed — do not reintroduce that pattern
- `dir="rtl"` applies to both Arabic and Kurdish; use Tailwind's logical
  utilities (`ps-`/`pe-`, `ms-`/`me-`, `start-`/`end-`, `border-s`/`border-e`)
  rather than physical `left`/`right` so RTL flips correctly — and the `rtl:`
  variant for anything that has to be mirrored outright, like the arrow glyph
  inside a button
- `.ltr-fixed` utility exists for content that must stay LTR even in an RTL context (numbers, URLs, etc.)

## What "polish" means on this project
Given the audience (industrial B2B procurement, not consumer/portfolio viewers), polish priorities in order:
1. No broken/invisible text (contrast, RTL layout breaks)
2. Consistency of the 4-color system and one-accent rule across every page/component
3. Real content parity with the company profile PDF / live site — no placeholder or invented claims
4. Visual restraint — resist adding shadows, extra colors, or decorative flourishes not already in the system

## Where things live (post-Next.js migration, 2026-08-19)
| Concern | File |
|---|---|
| Colour, type, motion tokens; base element styles | `app/globals.css` |
| Section/card/list/table vocabulary | `components/sections.jsx` |
| Header, Footer, BackToTop | `components/*.jsx` |
| shadcn primitives (button, card, input, label, textarea, sheet) | `components/ui/` |
| Nav labels, footer text, contact details, page titles | `lib/site-data.js` |
| Page content, one file per page per language | `app/[lang]/_content/` |
| Deployment, URLs, Cloudflare rules | `DEPLOY.md` |

The motion layer (the datum-line grammar: a rule is struck, content registers
to it) is shared verbatim with the Ellin Company site, as are `Reveal.jsx`,
`MotionRoot.jsx`, and the shadcn primitives. Brand tokens are what differ.
Everything is gated on `html[data-motion="on"]`, which is only set when JS runs
**and** the visitor has not asked for reduced motion — so no-JS, failed
hydration, and reduced-motion all resolve to the fully rendered page.
