---
name: bekuplast-design
description: Use this skill to generate well-branded interfaces and assets for bekuplast, the German manufacturer of industrial plastic crates and reusable containers. Use it for production code, marketing pages, throwaway prototypes, slide decks, technical docs — anything that needs to look and read like bekuplast. Contains essential design guidelines, colors, type, fonts, assets, and a high-fidelity UI kit of the bekuplast.pl website.
user-invocable: true
---

Read the `README.md` file at the root of this skill, and explore the other available files. The README is comprehensive — content tone, voice, color system, typography rules, layout, hover states, iconography conventions, and a quick-start snippet. Read it before producing any output.

Key files to look at, in order:

1. `README.md` — content fundamentals + visual foundations + iconography.
2. `colors_and_type.css` — all tokens as CSS variables, plus `.bp-*` helper classes. Import this rather than hardcoding values.
3. `Design System.html` — opens to a full hand-rendered visual reference for every component, in context, with example copy. Open it in a browser to see how the pieces compose.
4. `preview/` — small concept-per-card HTML files; useful for grabbing isolated specimens.
5. `assets/` — logos, hero photography, signature SVGs.
6. `ui_kits/website/` — JSX components for the bekuplast.pl marketing site (header, footer, hero, industry cards, product cards, etc).

If creating visual artifacts (slides, mocks, throwaway prototypes), **copy the assets you need out** of this skill folder and reference them with relative paths. Always import `colors_and_type.css` — never hardcode colors or fonts. Default to the rules in `README.md`: lowercase brand name, sentence-case headings, UPPERCASE Inter labels with tracking, no emoji, plain industrial-Polish tone, restrained motion, flat cards with hover-shadow only.

If working on production code, you can copy the assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (a product page, slide deck, configurator, email, etc), ask 3–5 sharpening questions (audience, target product line, level of fidelity, language, what they're replacing), and act as an expert designer who outputs HTML artifacts or production code, depending on the need.

A few common-sense reminders specific to bekuplast:

- The brand wordmark is **always lowercase** ("bekuplast"). Never title-case or all-caps it.
- Working language is Polish for bekuplast.pl, German for bekuplast.de, English for international. The same system serves all three.
- The brand sells crates and totes for B2B logistics. Headlines should reference operations (magazyn, transport, intralogistyka), not lifestyle benefits.
- The green `#65b32e` is the only saturated color in the palette. Use it as an accent (button, eyebrow tag, active nav, checkmark inside the logo), never as a full-bleed background except on a final CTA.
- The signature 4-tile chequer (green / dark / light-green / white squares) belongs on dark surfaces — use it in footers and section dividers, not in body content.
- If you don't have a real product photo, copy one from `assets/` (warehouse, factory, automotive, product-line); never SVG-illustrate the crates.
