# Bright Volition — Company Website

## What this is
A 6-page marketing/lead-gen website for Bright Volition, a registered KRG (Kurdistan Regional Government) engineering company in Sulaymaniyah, Iraq, founded 2022. They provide Electrical, Instrumentation, and Mechanical (EIM) engineering services plus industrial product supply (representing brands like Siemens, Schneider, ABB, Honeywell, Emerson, Yokogawa, Ashcroft).

Pages: Home, About, Services, Products, Projects, Contact.

## Audience
B2B, not consumer. Visitors are procurement leads, industrial/construction project managers, and potential partners evaluating Bright Volition as an EIM contractor or product supplier — mostly regional (Kurdistan Region / Iraq), reading in Arabic, Kurdish Sorani, or English. Decisions here are relationship- and credibility-driven: "is this a registered, capable, trustworthy engineering firm," not "is this website delightful."

## Evidence of capability shown on the site
- Real client logos (ENKA, Qaiwan Group, FOX, Taurus, Sinoma/CNBM, Wataniya) and represented supplier brands, both sourced from the company's actual profile PDF
- Founding story, milestones timeline (2023 incorporation → 2024 KRG registration → 2025 diversification), mission statement — all fact-checked against the company profile PDF, nothing invented
- Downloadable full company profile PDF
- Trilingual content (EN/AR/CKB) with no duplicated markup — single source per string, `lang` attribute toggling — since the real audience genuinely splits across all three languages, not as a decorative feature

## Design intent
Mustafa (site owner/builder) deliberately simplified the palette down to four colors — navy, cream, lavender, gold — dropping the original teal/coral accents for a flatter, more minimal, no-drop-shadow look. This was an intentional design decision, not an oversight: don't "fix" it by reintroducing dropped colors or shadows.

Real brand typography: Gotham (English), UniSIRWAN Somar (Arabic), UniSIRWAN Ping (Kurdish Sorani) — self-hosted woff2, per-script `@font-face` + `html.lang-ar`/`html.lang-ckb` CSS variable overrides. Non-Latin scripts intentionally get looser line-height (1.55 vs 1.15) and neutral tracking (0 vs -.01em) since Somar/Ping run taller and more connected than Latin Gotham — this is a correction, not a rule violation.

## Non-goals
- Not a portfolio/demo site — every claim on it must be traceable to the client's real company profile PDF or live production site (brightvolition.com)
- Not meant to look playful or experimental — audience is industrial/engineering B2B, tone should stay credible and restrained
- Language toggle, mobile nav, and reveal-on-scroll are the only interactive/JS behaviors — no other animation is expected or wanted
