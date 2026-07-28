# Bright Volition — Design System

North star: **"Registered & Reliable"** — a flat, restrained, credibility-first B2B industrial site. No drop shadows, no gradients beyond the navy overlay on hero photos, no more than one accent color doing work at a time (gold). Every design decision should read as "established engineering firm," not "startup" or "agency portfolio."

## Color — One Accent Rule
Four colors total, all defined as CSS custom properties in `:root`:

| Token | Hex | Role |
|---|---|---|
| `--navy` | `#201747` | Primary text, headings, dark section backgrounds, buttons |
| `--cream` | `#F6F2F4` | Page background, text-on-navy |
| `--lavender` | `#B4B5DF` | Secondary text-on-navy, borders, muted fills (table zebra stripes, tag backgrounds) |
| `--gold` | `#F1B434` | The single accent — eyebrow labels, checkmarks, numbered badges, hover states, CTA buttons. Never used for body text or large fills. |

Rule: gold is the only "pop" color on the site. If a new component needs to draw attention, reach for gold — not a new color. Navy and lavender are structural (backgrounds/text), not accents.

**Known deliberate deviation**: the official brand style sheet also lists teal + coral, but Mustafa dropped both in his 2026-07-24 redesign pass in favor of this flatter 4-color system. This is intentional — do not reintroduce them.

## Typography — One Font Family Per Script
- English: **Gotham** (self-hosted woff2, weights 400/500/700/900)
- Arabic: **UniSIRWAN Somar** (self-hosted woff2, weights 400/500/700/900)
- Kurdish Sorani: **UniSIRWAN Ping** (self-hosted woff2, weights 400/500/700/900)

Only one `--font-body`/`--font-head` pair is active at a time, switched via `html.lang-ar`/`html.lang-ckb` class scoping — never mixed within a single language's content.

Script-specific type tuning (documented so it isn't "fixed" back to the Latin default by accident):
- Latin (Gotham) headings: `line-height:1.15`, `letter-spacing:-.01em` — tight, standard Latin headline tracking
- Arabic/Kurdish (Somar/Ping) headings: `line-height:1.55`, `letter-spacing:0` — looser leading, neutral tracking, because both scripts run taller and more connected than Latin and collide under Latin-tuned settings

## Spacing & Shape
- Container max-width: `1200px`
- Section padding: `88px` (default), `64px` (tight), `56px` (small) — collapses to `64px` under 640px viewport
- Radius scale: `8px` (sm — tags, small elements), `14px` (default — cards), `26px` (lg — CTA bands, split-media images)
- Grid gap: `28px` default

## Components — Flat by Default
- **No box-shadow anywhere in the stylesheet.** Cards use a 1px `--lavender` border instead of shadow for definition; hover state is a `translateY(-6px)` lift + border color change to gold, not a shadow.
- Buttons: fully rounded (`border-radius:100px`), gold-fill or outline variants only
- `.eyebrow`: small gold uppercase label with a 3px gold rule, used as a section kicker — always gold, regardless of background (has explicit overrides for `.bg-navy`, `.grad-navy`, `.cta-band`, `.hero` contexts — see "Context-scoped color overrides" below)

## Context-scoped color overrides (important — a recurring bug source)
Because text color is set with **direct rules on specific classes** (e.g. `.eyebrow{color:var(--navy)}`) rather than pure inheritance, a component's color does not automatically follow when it's placed inside a navy-background container. Every navy-context container that can contain an `.eyebrow`, heading, paragraph, or `.checklist` must have its own explicit override:

```css
.bg-navy .eyebrow{color:var(--gold);}
.grad-navy .eyebrow{color:var(--gold);}
.cta-band .eyebrow{color:var(--gold);}
.hero .eyebrow{color:var(--gold);}
```

**When adding a new navy-background component or reusing `.eyebrow`/heading/`.checklist` inside one, always check it against every navy container class it might land in.** This exact bug (invisible navy-on-navy text) has recurred twice already on this project — treat it as a standing checklist item, not a one-off fix.

## RTL / Language handling
- `[lang="en"]`/`[lang="ar"]`/`[lang="ckb"]` spans exist side-by-side in the same markup; visibility toggled by `html.lang-ar`/`html.lang-ckb` classes — never duplicate a component's HTML per language
- `dir="rtl"` applies to both Arabic and Kurdish; use logical properties (`padding-inline-start`, `inset-inline-start`, etc.) rather than physical `left`/`right` so RTL flips correctly — this is already the pattern in the stylesheet, keep it consistent in any new CSS
- `.ltr-fixed` utility exists for content that must stay LTR even in an RTL context (numbers, URLs, etc.)

## What "polish" means on this project
Given the audience (industrial B2B procurement, not consumer/portfolio viewers), polish priorities in order:
1. No broken/invisible text (contrast, RTL layout breaks)
2. Consistency of the 4-color system and one-accent rule across every page/component
3. Real content parity with the company profile PDF / live site — no placeholder or invented claims
4. Visual restraint — resist adding shadows, extra colors, or decorative flourishes not already in the system
