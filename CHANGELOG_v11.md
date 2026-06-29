# Changelog v11 — korekta językowa i dopięcie faktów (29.06.2026)

Korekta wykonana na bazie **v10** (po reworku layoutu, fact-checku v9 i półpauzie). Cel: wysoka poprawność językowa PL bez baboli (zwłaszcza nagłówki/lidy/krótkie teksty), dopięcie pozostałych błędów merytorycznych PPWR, anty-AI — bez ruszania layoutu/CSS/SEO/SKU.

## Jak porównać „przed/po"
- Wersja sprzed tej korekty (v10): branch **`v10-przed-korekta-jezyk`**.
- Wersja po korekcie: working tree na `main` (to, co pójdzie na Pages po pushu).
- Diff: `git diff v10-przed-korekta-jezyk -- 'makieta_*.html'` (275 zmian / 275 usunięć; gotowy patch: `KOREKTA_v11_diff.patch`).
- Zweryfikowana baza faktów PPWR: **`PPWR_fakty_referencja_PL.md`** (EUR-Lex OJ EN/PL, art. po artykule).

**Zakres:** tylko widoczna treść. Nietknięte: CSS, struktura/klasy v10, JS, meta-banner (dev), proto-nav, sekcja „Przykładowe wdrożenia", formularz, kody/serie SKU. Struktura każdego pliku identyczna jak w `v10-przed-korekta-jezyk` (bilans tagów, sekcje, karty, SKU bez zmian). Frazy SEO zachowane 10/10.

## 1. Co naprawiono — fakty (dopięcie po fact-checku v9)
- **#03 napoje — sprzeczność:** „cele reuse 70% do 2030 dla piwa i wody" (Kluczowe wnioski + nagłówek karty) → **10% (2030) / 40% (2040, cel aspiracyjny)**, art. 29 ust. 6. Body było już poprawne — ujednolicono całą stronę.
- **PFAS ↔ palety/pestycydy** (#03, #06, #07) — rozdzielone: ISPM-15 = obróbka termiczna/fumigacja bromkiem metylu (nie PFAS); PFAS = art. 5, tylko opakowania do kontaktu z żywnością; „PFAS to nie pestycydy".
- **„PPWR wejście w życie 12.08.2026"** (#03) → „weszło w życie 11.02.2025, stosowane od 12.08.2026".
- **Adresat celu transportowego** (#03, #09, #10, i in.): „dystrybutorzy odpowiadają" → „podmioty stosujące opakowania transportowe" (sieci/3PL/e-com nimi są; „dystrybutorzy końcowi" tylko dla napojów, art. 29 ust. 6).
- **Fałszywy próg „2 mln EUR"** (#06, #09, #10) — usunięty; realne zwolnienie: mikroprzedsiębiorstwo + ≤1000 kg/rok (art. 29 ust. 13).
- **Cele 2040 (70%/40%/25%)** — wszędzie oznaczone jako „cel aspiracyjny"; cele 2030 = wiążące. Obieg zamknięty B2B „do 100% / 2030" — zostawione (przyjęty fakt), poprawiony tylko anglicyzm.
- **Korekta numeru artykułu:** pusta przestrzeń maks. 50% to **art. 24** (było „art. 7") — #08, #10.
- Ustępy art. 29 doprecyzowane (ust. 1 cel 40/70, ust. 2 wewnątrzfirmowy, ust. 3 B2B krajowy + e-commerce, ust. 4 lit. c/d wyłączenia, ust. 6 napoje, ust. 13 mikro). Art. 43 (redukcja odpadów) i art. 5 (PFAS) bez mitu „farmacja wyłączona do 2035".

## 2. Co naprawiono — język, ton, anty-AI
- **Wyciek żargonu do treści:** w #01 „Kluczowe wnioski" usunięto „Compliance topic, nie pain-point" i „breakage"; w #09 H2 usunięto „pain-point #1".
- **Gramatyka:** „od 1980-tych/1990-tych" → „od lat 80./90. XX w."; „PPWR (stosowany… weszło…)" → poprawny rodzaj „stosowane"; literówki („obrógnka"→„obróbka"); „najwymagający"→„najbardziej wymagający"; powtórzenie „szkło-szkło… przez eliminację szkło-szkło" → raz; „w jakości industrialnej" → „przemysłowej".
- **Kapitalizacja:** śródzdaniowe „Art. 29" → „art. 29" (15 miejsc); wielka litera tylko w badge'ach `.article-tag` i na początku zdania.
- **De-anglicyzacja „z umiarem":** reuse → ponowne użycie; break-even → próg rentowności; transport packaging → opakowania transportowe; single-use → jednorazowe; payback → okres zwrotu; food-grade → do kontaktu z żywnością; HACCP-compliant → zgodny z HACCP; RFID-ready → przygotowane pod RFID; pool-manager → system poolingowy; marketplace platforms → platformy marketplace; pustobieg → pusty przebieg; picking → kompletacja; pharma → farmacja. **Zostawione (branżowe):** PPWR, RTP, KLT, VDA, HDPE, ESD, OEM, 3PL, closed-loop, serie (silverline, contecline, basicline…).
- **Ton:** ujednolicony „Ty/Twój" (było m.in. „Wy/jesteście"); „bekuplast" małą literą; eyebrow „PPWR · COMPLIANCE" → „PPWR · ZGODNOŚĆ"; bez emoji; nagłówki bez dwukropków.

## 3. Per strona (skrót)
| # | Strona | Zmian | Werdykt QA |
|---|---|---|---|
| 01 | Motoryzacja | 14 | PASS |
| 02 | Przetwórstwo żywności | 19 (+lead „dwa→dwa wymogi PPWR + ROP") | PASS_WITH_FIXES → naprawione |
| 03 | Napoje (pillar) | 17 (+sprzeczność 70/2030, PFAS/palety, daty) | PASS |
| 04 | Farmacja i kosmetyki | 14 (+„pharma"→„farmacja", H1 z frazą) | PASS_WITH_FIXES → naprawione |
| 05 | Intralogistyka | 19 | PASS |
| 06 | Logistyka 3PL | 18 (+2 mln EUR, PFAS/ISPM-15) | PASS |
| 07 | Rolnictwo | 13 (+wyłączenie rolne art. 29 ust. 4 lit. c) | PASS |
| 08 | Produkcja | 13 (+art. 7→art. 24) | PASS |
| 09 | Handel / FMCG | 19 (+adresat, 2 mln EUR) | PASS_WITH_FIXES → naprawione |
| 10 | E-commerce, 3PL | 20 (+adresat, 2 mln EUR, art. 7→24) | PASS |

## 4. ⚠️ DO WERYFIKACJI / DECYZJI KLIENTA przed pushem
### A. Marki — walidacja MMLC (cudze znaki towarowe)
OEM (VW/BMW/Mercedes/Toyota/Stellantis + VW C-Box/BMW SuperRack/Mercedes Pool), sieci (Lidl, Biedronka, Dino, Carrefour, Selgros, Auchan, Rossmann, Hebe, Super-Pharm, Żabka, ABC, Lewiatan), 3PL/e-com (Raben, DSV, DHL, Kuehne+Nagel, Schenker, CHEP/IPP/LPR/EPS, Allegro, Amazon, InPost, DPD), systemy AKL/WMS (Mecalux, SSI Schaefer, AutoStore, SAP EWM…). Case w sekcji „Przykładowe wdrożenia" (ROSSMANN/Onninen/Orbico/Auto Partner) — potwierdzić zgody i liczby.
### B. Statystyki bez źródła — potwierdzić danymi bekuplast lub oznaczyć „wg szacunków"
„6× szybszy próg rentowności" (#03), stłuczki 2–4%/60–85% (#03), kwoty inwestycji/ROI/redukcji (#06/#09/#10), trwałości (cykle/lata), „8–12 zł/paleta" (usunięte — przywrócić tylko jako szacunek). Pełna lista w `KOREKTA_v11_REPORT.md` (scratchpad).
### C. Fakty/prawo do potwierdzenia
- Korekta „art. 7 → art. 24" (pusta przestrzeń ≤50%) — potwierdzić.
- Art. 43 (progi −5/−10/−15% vs 2018) — potwierdzić wartości.
- Teza farmacja #04 (PPWR nie zawiera wyłączenia farmaceutycznego) — walidacja prawna MMLC.
- „UC100" (polska ustawa wdrażająca) — numer/status; brak krajowej stawki kar — monitorować.
- System kaucyjny PL 1.10.2025 / DRS od 2029 (art. 50) — monitorować.
### D. Uwagi dla devów
- Dev `meta-banner` (kilka stron) wciąż ma EN żargon („pain-point", „compliance", „F&B", „pharma" w #04 URL-tagu) — strefa dev, **do ukrycia/usunięcia przed produkcją**.
- Martwy CSS `.tile.is-featured` („★ POLECANY") — nie renderuje się (brak `is-featured` w HTML); do sprzątnięcia opcjonalnie.
- Kilka `<title>` 62–72 zn. (cel ≤60): #06, #04, #09 — opcjonalny trim.
- Cytaty ekspertów: brak imiennych (były zmyślone, usunięte) — do czasu decyzji K1 zostają stwierdzenia źródłowane z EUR-Lex.

---

# Changelog v12 — sekcje „Case Studies" i „Kontakt" (29.06.2026)

W tym samym pushu co v11. Zmiana treści dwóch sekcji na **wszystkich 10 stronach** (struktura/CSS bez zmian poza dodaną regułą `.form-consent`).

## Sekcja DOWODY → „Case Studies"
- tag „DOWODY" → „Case Studies" (renderuje się wersalikami przez `.tag { text-transform: uppercase }`)
- H2 „Przykładowe wdrożenia" → „Opakowania wielokrotnego użytku we wdrożeniach bekuplast"
- lead → „Każde wdrożenie to osobna historia naszego Klienta. Indywidualne wymagania, do których dopasowujemy optymalne rozwiązania."
- usunięty przycisk „Zobacz wszystkie wdrożenia bekuplast →" (`p.ref-note`)

## Sekcja ZADAJ PYTANIA → „Kontakt"
- nadtytuł „ZADAJ PYTANIA" → „KONTAKT"; H2 → „Omówmy rozwiązanie dla Twojego procesu"
- lista korzyści: Kontakt do 24 godzin · Rozmawiamy o Twoich konkretnych potrzebach · Bezpłatnie i bez zobowiązań · Możliwość pozyskania próbek produktów
- **formularz** (jednolity na 10 stronach): H3 „Pozostaw dane kontaktowe"; pola Imię i nazwisko / Firma / E-mail / **Telefon** (`type=tel`, placeholder „Numer telefonu", bez „opcjonalnie"); **jeden** checkbox zgody RODO + link „Polityką prywatności" (`href="#"` — placeholder do podpięcia przez dev); przycisk „Proszę o kontakt"
- **USUNIĘTO** pole „Branża" (`<select id="cf-branza">`) — zgodnie z krótszym formularzem; do przywrócenia w razie potrzeby
- dodane do inline `<style>` każdego pliku: reguły `.form-consent` (checkbox 16×16, flex, caption, zielony link)

## Poprawki językowe w treści przekazanej do wdrożenia (zasada zero-babol)
- „Bezpłatnie i bez **niezobowiązań**" → „bez **zobowiązań**" (podwójne przeczenie)
- „o Twoich**,** konkretnych potrzebach" → bez przecinka
- zgoda: „zapoznałem/am się **z z Polityka** prywatności" → „**z Polityką** prywatności"

---
*Korekta: sesja redakcyjna. Baza faktów: `PPWR_fakty_referencja_PL.md`. Poprzednia wersja: branch `v10-przed-korekta-jezyk`. Raport szczegółowy: `KOREKTA_v11_REPORT.md`.*
