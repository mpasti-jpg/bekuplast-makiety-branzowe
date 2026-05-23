# bekuplast Design System

> A design system for **bekuplast** — a 43-year-old German manufacturer of industrial plastic crates, totes, and reusable containers serving the automotive, logistics, food, pharma, retail and agriculture sectors in 51 countries.

This document is the source of truth for visual decisions across the bekuplast Polish-market site (bekuplast.pl), product catalogue, technical documentation, and any prototypes / mocks built for the brand.

---

## Sources

| Source | What it is | Path |
|---|---|---|
| Figma file | "Przemysł motoryzacyjny" (Automotive Industry) page — the live Polish-market landing, header (`Desktop / Menu`), and `footer` symbols. The Figma node id for the page is `0:206`; menu `0:108`; footer `0:26`. | mounted virtual filesystem `/Page-1/` (read-only) |
| Existing design system draft | `uploads/Design System v2.html` — a thoroughly-built single-file system the user already drafted. Most foundations in this README are extracted from it. | `Design System.html` (copied to project root) |
| Brand reference | bekuplast.pl (live site), bekuplast.com | external |

The brand identity is German-original; the working language for this project is Polish (`lang="pl"`), so all copy examples are in Polish. The system works the same in any language — text just gets longer in DE/EN.

---

## What bekuplast is

- A manufacturer of **reusable plastic crates and totes** for B2B logistics — not retail packaging. Products are bought by warehouse, plant, and OEM ops teams in quantities of pallets, not units.
- Core product lines: `EURO-NORM basicline`, `basicline plus`, `ERGline`, `silverline`, `contecline`, `ESD`, `KLT / VDA`, `bakeline`. KLT/VDA is the automotive standard.
- Verticals (top-level nav: *Branże*):  Automotive · Pharma & cosmetics · Beverages · Retail & e-commerce · Industrial production · Agriculture & logistics · Food processing & intralogistics.
- Site IA: `Produkty` · `Branże` · `Serwis` · `Aktualności` · `Firma` · `Kontakt z nami` — with utility nav (search, list of offers, comparison, "Zapytaj AI" sparkle button, PL language pill).
- Headline numbers used by the brand: **196 mln € obrotu (2023)**, **51 krajów**, **7 500+ klientów B2B**, **100% recyklingowalne tworzywa**, **43 lata produkcji**.

---

## Index — files in this design system

| File | Purpose |
|---|---|
| `README.md` | This file. Brand overview, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Agent-skill manifest. Read this when invoked as a skill. |
| `colors_and_type.css` | All design tokens as CSS variables + helper classes. Import this in any HTML/JSX file. |
| `Design System.html` | The full hand-rendered visual reference. Open this in a browser to see every component in context. |
| `assets/` | Logos, hero photography, signature SVGs lifted from Figma. |
| `preview/` | Small HTML cards that populate the Design System review tab. One concept per card. |
| `ui_kits/website/` | High-fidelity recreation of the bekuplast.pl marketing site as composable JSX components. Open `index.html`. |

---

## Content Fundamentals

bekuplast writes the way it builds crates: **plain, structural, no fluff**. The tone is German-industrial-translated-to-Polish — practical, slightly formal, never breathless.

### Voice in one sentence

> *"Solidne, wielokrotnego użytku skrzynki — dla logistyki, magazynowania i przemysłu w 51 krajach."*

Concrete nouns. Pluralised "we" is implied; the company speaks as the company.

### Casing & punctuation

- Brand name is always lowercase: **bekuplast** — never "BEKUPLAST", never "Bekuplast". The Figma menu, the footer wordmark, and the title tag all use lowercase.
- Headlines use **sentence case**, not title case. `"Korzyści dla branży motoryzacyjnej i automotive"` — only the first word and proper nouns are capitalised.
- Technical labels and eyebrows (the green Inter Bold UPPERCASE bits) are the *only* uppercase in the system. Examples from the live site: `BRANŻE`, `CO ZYSKASZ`. Tracking +0.1em.
- Polish typography rules apply: en-dashes for ranges, proper diacritics (`ł ę ą ó ż ź ć ń ś`), nbsp before single-letter prepositions (`i`, `z`, `w`, `o`).

### Pronouns & address

- B2B audience, formal address: **"Państwo"** in CTAs and forms (`"Postaw na niezawodne skrzynie..."`).
- Internal voice = **"my"** ("nasze pojemniki", "nasze produkty") — confident plural-we.
- Mass-noun framing — "branża motoryzacyjna", "Twój magazyn" — never lifestyle phrasing.

### Vibe / metaphors

- **The pojemnik (container) is the hero.** Every page eventually circles back to crates stacked on a pallet, in a warehouse, on a forklift.
- Emphasis on **continuity**: 43 lat produkcji, materiał wraca do obiegu, pojemniki służą 8 lat.
- Hard numbers preferred over adjectives: "−64% uszkodzeń" beats "drastycznie mniej uszkodzeń".
- No exclamation marks. No emoji. No hyperbole. The product does the talking.

### Specific copy examples (lifted from Figma)

| Where | Polish | Use as template for |
|---|---|---|
| H1 page heading | `Przemysł motoryzacyjny` | Industry pages |
| Subhead | `Nowoczesne rozwiązania dla lepszej mobilności` | Industry tagline |
| Section H2 | `Korzyści dla branży motoryzacyjnej i automotive` | "Benefits" section |
| Eyebrow tag | `BRANŻE` · `CO ZYSKASZ` | Section labels |
| Hero copy | `Postaw na niezawodne skrzynie plastikowe do magazynowania oraz pojemniki automotive, dzięki którym usprawnisz procesy składowania, załadunku oraz transportu części samochodowych.` | One-sentence value props |
| Bullet | `bardzo stabilne, dzięki ukośnym wzmocnieniom` | Product feature bullets — concrete claim + reason |
| Footer CTA | `Masz do nas jakieś pytania? Napisz do nas poprzez formularz kontaktowy.` | Contact callouts |
| Footer column heads | `Seriej pojemników` · `Branże` · `Firma` · `Serwis` | Nav grouping |
| AI feature | `Zapytaj AI` | Branded smart-search/help action |

### Emoji?

**Never.** Not in headings, not in body, not in marketing. The only icon-like glyphs allowed are the bordered-tag's tiny dot suffix (a 3×3 px square after the tag text — see Tags card) and the green ✓ inside the globe logo. Everything else is a Lucide-style 24×24 line SVG (see Iconography).

---

## Visual Foundations

### Color

- **One brand color: `#65b32e` (`--bp-green-500`)**, drawn from PP/HDPE green pigment used in the actual product. Used as accent, primary action, active nav, "this is the AI feature", "this is recyclable". *Never* as a full background except on the final CTA banner.
- **One neutral family**, `Industrial Ink`, used heavily — `ink-700` for headlines, `ink-500` for secondary, `ink-25` (`#f3f3f3`) as section background. The figma file uses these exact values (`rgb(67,67,67)` and `rgb(113,113,113)`).
- **Light-green accent `#b0d583` (`--bp-green-300`)** appears in the green checkmark on dark backgrounds, and as one of the signature-square tiles. It's the only non-500 green that ever appears in the wild.
- Semantic colors live separately — used only for system states (alerts, badges, validation), never decorative.
- See `colors_and_type.css` for the full scale.

### Type

- **Manrope** for everything readable (display, headlines, body, buttons). 400 / 500 / 600 / 700 / 800. The Figma calls SemiBold "SemiBold" but the live site mostly uses 700 (Bold) for headings — Bold is the default for H1/H2/H3.
- **Inter** is reserved for technical labels — eyebrows, tags, SKUs in tables, the `PL` language pill — and is **always** UPPERCASE with 1.2–1.6 px tracking.
- **JetBrains Mono** for in-system tokens (SKU codes, hex values, dimensions in mm). Never in marketing copy.
- Letter-spacing is slightly negative on display/headings (`-0.020em` / `-0.010em`) — this matches the Figma values precisely. Don't let headings sit at default tracking.
- Headings use `text-wrap: pretty` where supported.
- See `preview/type-*.html` for specimens.

### Spacing & layout

- **4 pt grid.** Tokens from `--s-1` (4px) to `--s-32` (128px). Section padding-y is 96 px (`--s-24`), gutters are 80 px (`--s-20`) — matches the figma 80px left-right gutter on a 1512 px canvas.
- Content width inside gutters is **1352 px** (`--maxw`).
- Section rhythm: **eyebrow → H1/H2 → lede → content → optional CTA**. The eyebrow is always preceded by 96–136 px of breathing room.

### Backgrounds

- The site is **predominantly white** with periodic light-gray strips (`#f3f3f3`) demarcating sections like "CO ZYSKASZ".
- The footer is dark — `#2d2d2d` (`--bp-ink-800`).
- Hero photography is **wide, slightly desaturated, warm-cool industrial color** — cars on assembly lines, plastic crates stacked in a sunlit warehouse, no people-in-suits.
- Top of the hero has a vertical white→light-gray gradient (`linear-gradient(white 0%, rgba(241,241,241,.5) 45%, #e5e5e5 100%)`), and a soft elliptical light-gray cloud behind the headline for protection.
- The **signature squares** pattern (see Brand card) appears as a 4×2 chequer in the bottom-right of the dark footer and the top-right of section dividers — it's the brand's wordless watermark.

### Imagery

- Warm-cool, slightly desaturated. No heavy color filters. No b&w. No grain.
- Photography is always *of the product or its environment* — warehouses, assembly lines, retail back-of-house, crates stacked on pallets. Not stock-photo people.
- Aspect ratio for industry card thumbnails = **4:3**. Hero images go **full-bleed, slightly off-center** (the Figma hero is 1466 px wide on a 1512 px canvas).
- For unrelated industries, copy a relevant generic photo into `assets/` — never illustrate with SVG, never use AI-stock-people.

### Animation & motion

- **Restrained.** Default ease is `cubic-bezier(.2,.6,.2,1)`, duration 120–280 ms.
- Card hover = `box-shadow` from flat → `--shadow-md` AND `translateY(-2px)`. That's it.
- Buttons = `background-color` darken on hover (green-500 → green-600). No scale, no bounce.
- No fades into view on scroll, no parallax, no looping animations. Industrial site.
- Where motion is needed, it's the **sparkle ✦ icon** next to "Zapytaj AI" that pulses subtly.

### Hover / press states

- **Hover (link / button text):** colour shifts to `--bp-green-600`. Underline only on inline text links inside paragraphs.
- **Hover (card):** subtle shadow + 2 px translateY upward.
- **Press / active (button):** `translateY(1px)` — a tiny "click" displacement.
- **Focus:** 3 px outer outline in `--bp-green-200`, 2 px offset. Always visible for keyboard users.

### Borders, dividers, cards

- Border default = `1px solid var(--bp-ink-100)` (#ececec). Cards use `--bp-ink-100`; inputs use `--bp-ink-200`. Footer uses `1px solid #3c3c3c` for separators on dark.
- **Card style is FLAT by default** — 1 px border, white background, `--r-md` (8 px) radius for surfaces, `--r-sm` (4 px) for products. Shadow appears only on **hover** as an interaction cue.
- Inputs are rectangular-ish (4 px radius), 42–48 px tall, white bg, ink-200 border, ink-700 text.

### Transparency & blur

- Used **sparingly**. The only canonical uses:
  - White → transparent gradient at top of hero (protection for menu)
  - White → transparent fading at the bottom of long-scroll banners
  - The dark hero overlay in marketing sections (linear-gradient `rgba(0,0,0,0)` to `rgba(0,0,0,.55)`)
  - Backdrop-blur on the green tag pill *over* hero imagery in the case-study CTA
- Never use blur for decoration, never blur the main content surface.

### Corner radius rules

- Buttons / inputs / tags = **4 px** (`--r-sm`). Tight, industrial.
- Cards = **8 px** (`--r-md`)
- Hero blocks / promo bands / dark CTA = **12 px** (`--r-lg`)
- Pills (status badges) = **2 px** (`--r-xs`) — corner-shaved squares, not rounded.
- Avatar = full round.
- Decorative squares (signature pattern) = **0 px** — sharp.

### Layout fixed elements

- Sticky top header on scroll (white, 1 px bottom border).
- "Zapytaj AI" CTA stays in the top right.
- No floating chat bubbles, no fixed bottom bars.

---

## Iconography

- **Library: Lucide-style line icons.** 24×24 viewBox, 1.5 px stroke, `stroke-linecap="round"`, `stroke-linejoin="round"`, no fills, no gradients, `currentColor`. The system also picks up icons from the figma using Font Awesome 6 Sharp in a couple of spots (e.g. the small list icon in the menu) — substitute Lucide as a defaulit and **flag** when a FA glyph is asked for.
- **Sizes:** 14 (inline), 16 (button), 20 (nav), **24 (default)**, 32 (feature panel), 40 (hero feature). Stroke stays 1.5 at all sizes — scale up the viewBox-rendered output rather than thickening strokes.
- **Color:** inherits `currentColor`. In nav/body = `--bp-ink-700`. In green accents = `--bp-green-500`. In feature panels on `--bp-ink-25` background = `--bp-green-500` over light-green underlay (see the "Ograniczenie wydatków" feature card in Figma).
- **Brand-specific glyphs:**
  - `crate` / `box` — 3D cube with seam lines (the standard storage-icon look)
  - `global` — meridian + parallel sphere (used inside the logo)
  - `sparkle` — 5-point star (`Zapytaj AI`)
  - `compare-items` — 2-column comparison icon (utility nav)
- **No emoji.** No PNG icons. No icon font. Inline SVG only — paste from `preview/icons.html` or pull from Lucide CDN: `https://unpkg.com/lucide@latest`.
- The figma uses a tiny **2-vector cash-shield illustration** for the "Ograniczenie wydatków" feature card — copied to `assets/icon-cash-shield*.svg` for reuse.

### Substitution flags

- **Font Awesome 6 Sharp** is used in the live site for the "Lista ofert" (clipboard) icon and a couple of others. We've substituted Lucide line icons of the same metaphor. If the brand wants exact parity, swap to FA — add a `<link>` for `https://kit.fontawesome.com/...sharp.css` and use `<i class="fa-sharp fa-light fa-clipboard"></i>`.

---

## Asset Substitution Notes

- **Fonts:** Manrope, Inter, JetBrains Mono are all loaded from Google Fonts (free, libre licenses). **No local font files were provided by the user.** If a self-hosted variant is desired, drop `.woff2` files into `fonts/` and update `colors_and_type.css` to use `@font-face` instead of `@import`. **→ Asking user to confirm web fonts are acceptable; otherwise provide TTF/WOFF files.**
- **Logo SVG:** The Figma file ships the logo as empty `<path>` geometry vectors (binary-only), so we couldn't extract the canonical bekuplast wordmark. We've rebuilt the logo using Manrope Bold lowercase + a hand-drawn globe-with-checkmark per the spec. **→ Asking user to provide the original `.svg` logo if pixel-perfect parity is needed.**

---

## Quick start in a new HTML file

```html
<!doctype html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="path/to/colors_and_type.css">
</head>
<body class="bp-base">
  <span class="bp-eyebrow">BRANŻE</span>
  <h1 class="bp-h1">Przemysł motoryzacyjny</h1>
  <p class="bp-lede">Nowoczesne rozwiązania dla lepszej mobilności.</p>
</body>
</html>
```

---

## License & ownership

bekuplast brand, logo, copy and photography are property of bekuplast sp. z o.o. This design system is built for internal product / prototype work and is not for external redistribution.
