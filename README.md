# bekuplast — makiety 10 stron branżowych (kampania PPWR)

Prototypy wireframe (lo-fi blueprint) dla 10 podstron `/branzowe/...` na bekuplast.pl, przygotowanych pod kampanię PPWR (Rozporządzenie UE 2025/40, wejście w życie 12 sierpnia 2026 r.).

## 🚀 Live preview

Po włączeniu GitHub Pages (zakładka Settings → Pages → Source: `main` branch, folder `/ (root)`):

- **Index:** `https://<owner>.github.io/<repo>/` — landing z listą 10 stron
- **Per branża:** `https://<owner>.github.io/<repo>/makieta_03_napoje.html` itd.

## 📂 Struktura

```
.
├── index.html                                  # Landing z listą 10 makiet
├── makieta_01_motoryzacja_automotive.html      # Motoryzacja (compliance, KLT/VDA)
├── makieta_02_przetworstwo_zywnosci.html       # Food (pain-point, HACCP+PFAS)
├── makieta_03_napoje.html                       # Napoje (pillar SEO, skrzynka na piwo)
├── makieta_04_farmacja_kosmetyki.html          # Farmacja (compliance, ESD)
├── makieta_05_intralogistyka.html              # Intralogistyka (high SEO)
├── makieta_06_logistyka_3pl.html               # 3PL [NOWA] (Art. 29(3), pooling)
├── makieta_07_rolnictwo_ogrodnictwo.html       # Rolnictwo [REBRAND]
├── makieta_08_produkcja_przemyslowa.html       # Produkcja (closed-loop)
├── makieta_09_handel_fmcg.html                 # FMCG [REBRAND] (pain-point #1)
└── makieta_10_ecommerce_3pl.html               # E-com [NOWA] (pain-point #2)
```

## 🎨 Stack

- Pure HTML + inline CSS (self-contained, no build step)
- Bez framework JS — tylko `<details>` accordion FAQ i `<select>` dropdown nav
- Desktop-only (1240 px max-width) — wireframe, nie responsive design
- Identyczna paleta kolorów dla wszystkich 10 stron:
  - Accent: `#FF6B2C` (bekuplast orange)
  - Tło: `#fdf8f2` (cream)
  - Typografia: Fraunces serif + Manrope sans + JetBrains Mono

## 🧩 Struktura każdej strony

11 sekcji w stałej kolejności:

1. **Proto-nav** (dropdown na górze) — przełączanie między 10 makietami
2. **Sticky header** — logo, nav, telefon, CTA
3. **Hero** (2 kolumny) — lewa: H1 + lead + 2 CTA; prawa: placeholder ilustracji
4. **Breadcrumb** — pasek pod hero, nad sekcją "Kluczowe wnioski"
5. **Kluczowe wnioski** (2 kolumny) — lewa: placeholder animacji; prawa: 4–5 bullet points
6. **Wyzwania** — 3–5 kart numerowanych z "co stosujemy"
7. **Produkty** — kafelki SKU z miniaturkami (7–8 produktów per branża)
8. **PPWR a [branża]** — gradient accent + pigułki artykułów + cytat eksperta + boxed CTA
9. **Case study** — placeholder z briefem do uzupełnienia (po AD3)
10. **Mid CTA / Pooling** (opcjonalnie, gdzie aplikowalne) — Container-as-a-Service
11. **Może Cię też zainteresować** — 2–4 cross-linki do innych branż
12. **FAQ** — 6–8 pytań w accordion (FAQPage schema-ready)
13. **End CTA** — "Rozmowa z inżynierem opakowań"

## 📊 Mapa SEO

| # | Strona | Primary keyword | Vol | Pot. 12m |
|---|---|---|---|---|
| 01 | Motoryzacja | opakowania dla przemysłu motoryzacyjnego | 80 | 400–700/m |
| 02 | Food | opakowania dla branży spożywczej | 100 | 150–300/m |
| 03 | Napoje | **skrzynka na piwo** | **1 300** | **800–1 500/m** |
| 04 | Farmacja | opakowania farmaceutyczne | 60 | 80–150/m |
| 05 | Intralogistyka | intralogistyka | 400 | 500–1 200/m |
| 06 | Logistyka 3PL | logistyka 3PL | 100 | 200–450/m |
| 07 | Rolnictwo | skrzynki plastikowe na warzywa | 250 | 400–800/m |
| 08 | Produkcja | pojemniki transportowe | 400 | 150–300/m |
| 09 | FMCG | opakowania zwrotne dla handlu | 20 | 30–80/m |
| 10 | E-com | opakowania ecommerce | 200 | 150–400/m |

**Łączny potencjał 12m: 2 960–6 080 kliknięć/mies.** (vs obecne ~13/mies. na 8 stronach)

## 🔁 Status decyzji projektowych

- ⏳ **AD1** — wybór 2–4 autorów do Person schema (Monika + Mateusz, do 5.06.2026)
- ⏳ **AD3** — case studies klientów (Monika, tydzień 26 / 25–29 maja)
- ⏳ **AD6** — dane sektorowe od DH Czajkowskiego (tydzień 26–27)

## 📝 Następne kroki po akceptacji

1. Review Moniki + DH Czajkowskiego
2. Uzupełnienie case studies + danych SKU + cytatów ekspertów
3. Foto/ilustracje produktów do placeholdera w hero
4. Wideo zapętlone do sekcji "Kluczowe wnioski"
5. Implementacja w TYPO3 (devops bekuplast)
6. 301 redirects: `/rolnictwo-i-logistyka/` → `/rolnictwo-ogrodnictwo/`, `/handel-detaliczny-i-e-commerce/` → `/handel-detaliczny-fmcg/`
7. Request indexing w GSC dla 10 stron jednocześnie
8. Monitoring pozycji w cyklu miesięcznym

## 📚 Dokumentacja

- Notion teamspace: `bekuplast PPWR — Centrum projektu`
- Master copy (treści 10 stron): `STRONY_BRANZOWE_master_v1.docx`
- Master spec systemu: tamże, sekcja 00

## 🎨 Design System

W `/design-system/` znajduje się **kanoniczny bekuplast Design System** (handoff bundle z `claude.ai/design`), który jest single source of truth dla tokenów wizualnych:

- `colors_and_type.css` — paleta brand-green 50..900 + Industrial Ink 25..900 + semantic states, type scale (display-1 72px → caption 12px), spacing 4pt grid, radii (xs 2 / sm 4 / md 8 / lg 12), shadows, motion tokens. Importować w każdym pliku, nie hardcode'ować.
- `README.md` — pełne content & visual foundations: lowercase brand "bekuplast", Państwo address, NO emoji, hard numbers preferowane, Lucide line icons 24×24 1.5px stroke.
- `SKILL.md` — manifest dla Claude jako Agent Skill.
- `Design System.html` — pełny visual reference wszystkich komponentów w kontekście.
- `preview/` — 23 small HTML kart (one concept per card): tokens kolorów, typografia, buttons, tags, cards, header, signature-squares, icons, etc.
- `ui_kits/website/` — JSX components dla bekuplast.pl (Header, Footer, Hero, IndustryGrid, ProductGrid, AskAIPanel, FeatureBanner).
- `assets/` — light icons (cash-shield SVGs) + product photo. Ciężkie photos (factory, logistics, warehouse) zostały w handoff bundle z claude.ai/design.

**Makieta #03 (napoje)** jest pierwszą zaimplementowaną przez ten DS — importuje `design-system/colors_and_type.css` zamiast inline tokens, używa `.bp-*` helper classes, ma signature-squares pattern w end-cta footer. Pozostałe 9 makiet zostaje na poprzedniej palecie do osobnej batch konwersji.

## 📅 Wersje

- **v5 — DS canonical** (23 maja 2026, late) — makieta #03 napoje przeszła na canonical bekuplast DS: import `colors_and_type.css`, helper classes `.bp-*`, signature-squares w footerze, lowercase brand throughout, Państwo address, header per `preview/header.html`.
- **v4 — DS prototype** (23 maja 2026, evening) — full rebrand makiety #03 na zielony (#65b32e) z poprzedniego zipa DS.
- **v3** (23 maja 2026, wieczór) — usunięte nazwy z ilustracji hero, breadcrumb pod hero, H2 "Kluczowe wnioski" w prawej kolumnie + proto-nav dropdown
- **v2** (23 maja 2026) — hero 2-col z ilustracją, skrócone H1/lead, animacja w TL;DR, case study we wszystkich 10 makietach
- **v1** (23 maja 2026, rano) — 10 makiet HTML z prawdziwymi treściami, identyczna paleta (#FF6B2C), tylko desktop

---

*© bekuplast Sp. z o.o. · prototypy: Mateusz Pasternak (crear agency)*
