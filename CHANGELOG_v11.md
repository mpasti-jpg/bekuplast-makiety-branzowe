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

# Changelog v13 – poprawki po audycie treści (3.07.2026)

Pełny audyt 10 stron (merytoryka vs baza faktów + aktualność regulacyjna na 3.07.2026, spójność, język, ton). Zastosowano pakiety A (twarde błędy i wycieki) i B (spójność, język). 11 plików, ~240 podmian.

## Systemowe (wiele stron)
- **Cytaty przy sekcji „Następne kroki":** podpis `Rozporządzenie (UE) 2025/40…` → `na podstawie rozporządzenia (UE) 2025/40…` (9 stron; #04 już miało poprawnie). Z cytatów usunięte zdania marketingowe (#02 teza o HDPE, #06 zdanie o CHEP/IPP/LPR, #10 zdanie o pojemnikach składanych) – prawnik nie zakwestionuje „cytatu, którego nie ma w akcie".
- **Wyciek szablonu (10/10):** hint „↓ przewiń – wyzwań jest 3–5 zależnie od branży" → „↓ przewiń kolejne wyzwania".
- **„– Art." po półpauzie** → „– art." (5 miejsc: #06, #08 ×3, #10).
- **Nagłówek sekcji KOSZT PPWR (wspólny, 10/10):** „Koszt przejścia na skrzynki wielokrotnego użytku" → „…na opakowania wielokrotnego użytku" (neutralne produktowo – strona 3PL/produkcja/farmacja nie jest o skrzynkach; nagłówek pozostaje STAŁY na wszystkich stronach).
- **Ujednolicenia:** „strukturę CO₂" → „strukturę emisji CO₂" (6 stron); „o 84%" → „do 84%" (#06, #10); „zakaz PFAS" → „ograniczenie PFAS" (#04, #05); „Bez fumigacji …" → „Bez obróbki ISPM-15" (#03, #08 ×3, #09); „HL/rok" → „hl/rok"; „e-com" → „e-commerce" (poza strefą dev); „ROP-napoje/ROP-opakowania" → „ROP za napoje / ROP za opakowania"; „Certyfikacja: IEC 61340-5-1" → „Zgodność z IEC 61340-5-1"; ust. 2: „do 2030 r." → „od 2030 r." (#03, #04, #05); „w praktyce 100% ponownego użycia" → „w praktyce pełny ponowny użytek" (#05, #07 – jak na #01/#03/#08); mieszane cudzysłowy „…" → „…” (#04, index).
- **Formularz (10/10):** koniec zgody „…zasad przetwarzania moich danych osobowych" → „…zasad ich przetwarzania" (usunięte powtórzenie; treść zgody bez zmian merytorycznych).

## Najważniejsze poprawki merytoryczne per strona
- **#01:** „klisze wymiarowe" → „moduły wymiarowe podstawy (…mm)"; sprzeczność „lata 80. vs 90." → jednolicie „od końca lat 80. XX w."; „wszyscy OEM-i / Wszyscy OEM" → „wszystkie OEM-y"; „±0,3 mm jako wymóg VDA" → „tolerancje rzędu dziesiątych części milimetra"; „2 000–4 000 komponentów (200–400 w 1990)" → zmiękczone bez liczb; PFAS dla automotive opisany jako marginalny; drobne (tier 2/3, KLT/VDA, „ponownego użycia").
- **#02:** adresat – producent objęty **bezpośrednio** (2 miejsca; było „pośrednio", sprzeczne z #07); cel napojowy 10% przypisany dystrybutorom końcowym (nie rozlewniom); daty przy dwóch wymogach (PFAS od 12.08.2026, cele art. 29 od 2030); ISPM-15 tylko przy eksporcie poza UE; usunięty mylący nawias o kaucji przy mleku (mleko wyłączone z kaucji); dryline usunięte z zapowiedzi (brak kafla – do przywrócenia po dodaniu kafla); H2 „PPWR i PFAS" → „Ograniczenie PFAS i cele ponownego użycia – podwójne uderzenie PPWR…"; język (HACCP-środki, „fakturowane" ściany → teksturowane, „dedykowane" → „przeznaczone").
- **#03 (pillar):** usunięty straszak „dostanie wezwanie w 2027 r."; nagłówek karty 40% (2040) z dopiskiem „cel aspiracyjny"; „12–18 mies. spóźnione" → zmiękczone; przykłady adresata + browary; FAQ o obowiązkach od 12.08.2026 z poprawnym otwarciem; „(Raben, Rohlig)" → „Rohlig Suus"; szkło–szkło; wino FAQ bez „0,33 l jako niestandard". Fraza „skrzynka na piwo" nietknięta (title/H1/lede/FAQ).
- **#04:** cele zbiorczych rozdzielone od transportowych (40/70 ust. 1 vs 10/25 ust. 5); „całość opakowań kosmetyków" → „opakowania transportowe kosmetyków"; **„sterylne" → „sterylizowalne"** (title, H2, body ×4); rozp. 10/2011 poprawnie jako dopuszczenie do kontaktu z żywnością; karta „Wyłączenie farmacji" → „Wyłączenie opakowań bezpośrednich"; „Zakłady z dwoma lokalizacjami" → „Firmy z dwiema…".
- **#05:** karta PFAS przepisana (ograniczenie, tylko żywność, palet/folii nie dotyczy); FAQ o zakresie PPWR przepisane (usunięta samosprzeczność); trwałość ujednolicona (system: 100 tys. operacji; pojemnik: 100+ cykli rotacji); usunięty zdublowany kafelek contecline; „Indywidualne pod WMS (Mecalux/Daifuku)" → „pod AKL"; „co do zasady każdą firmę" (zwolnienie mikro).
- **#06:** „Skandynawia" usunięta z przykładów eksportu ISPM-15 (kraje UE); dwa zdania z odzyskanym łącznikiem („…transportowe – musisz zapewnić…", „…ISPM-15 – to ważny atut"); „Polskie 3PL używa" → „Polska branża 3PL używa"; skrzyniopalety-orzecznik; 60–75% oznaczone jako szacunek branżowy; „systemy poolingu" → „poolingowe".
- **#07:** rekcja w TL;DR („dotyczy to również Ciebie, sadownika lub hurtowni"); „Skandynawia" → Wielka Brytania/Turcja; karta „Poza zakresem" przepisana (jedno miejsce działalności vs art. 29 ust. 2); sezon „sierpień–październik" (spójnie z „pozostałe 9 miesięcy"); „lub paszą" przy art. 29 ust. 4 lit. c; „m.in." przy wyłączeniach; PFAS jako limity (nie „niedozwolona"); ROI → „zwrot z inwestycji"; widełki chipów zgodne z FAQ (8–10 kg, 300–400 kg); meta description bez zeugmy.
- **#08:** usunięty wyciek „Strona zbiorcza dla branż…" z Kluczowych wniosków; **AutoStore usunięty z listy systemów paletowych**; FAQ „Nie –…" → „Nie w zakresie obiegu wewnętrznego –…"; zdublowany kafelek silverline → contecline (Magazyny AKL); „automatyczna paczka" → „automatyczna stacja pakowania"; „lub partnerskich" przy przedsiębiorstwach powiązanych (TL;DR + cytat); RFID i kod QR rozdzielone (art. 12, od sierpnia 2028); pytanie FAQ zawężone do ust. 2; „magazynami DC" → „centrami dystrybucyjnymi".
- **#09:** karta „Art. 7" → **„Art. 25 + zał. V"** z poprawną treścią (ograniczenia formatów jednorazowych z tworzyw; nie karton, nie „w sklepie"); usunięty wyciek „w naszej kampanii"; zdanie bez orzeczenia w sekcji kaucyjnej naprawione (+ art. 12); pilotaż ujednolicony 5–10 sklepów; FAQ w głosie klienta („Czy pomożecie nam…"); Mehrweg → „standard niemieckiego handlu spożywczego od lat 90."; kaucja UE 2029 z dopiskiem o polskim systemie od 1.10.2025 (karta + cytat); „sieć jako operator" → „jako dystrybutor końcowy"; etykiety kart „Art. 29" → „ust. 1" / „ust. 6"; „w 70%" → „głównie"; „Polskie spółki sieci…" → „Wiele polskich sieci…" (Dino); „Trzy ścieżki" → „Trzy etapy"; „nacisk od sieci-matek" → „Presja ze strony międzynarodowych central"; „wielorazowe" → „wielokrotnego użytku".
- **#10:** przepisany nielogiczny akapit „karton wraca pusty od konsumenta" (argument dotyczy opakowań zwrotnych); „4 lata przewagi" → przewaga infrastruktury paczkomatów; karta art. 24 z datą (od 1.01.2030); karta art. 50 z dopiskiem o polskim systemie od 1.10.2025; usunięty dopisek „także w handlu elektronicznym" przy ust. 6; usunięte „ok. 85% paczek" (niespójne z własnymi liczbami); rozsypane zdanie o fulfillment center naprawione; „w paczkomat" → „do paczkomatu"; FAQ „są objęci" → „są objęte PPWR"; title „fulfillmentu".
- **index:** „wejście w życie 12 sierpnia 2026" → „stosowane od 12 sierpnia 2026" (+ zapis „(UE) 2025/40"); „95% reuse u OEM-ów" → bez nieźródłowanej liczby; „sterylne/pharma" → „sterylizowalne/farmacja"; cudzysłów „…Centrum projektu”.

## Świadomie NIE zmienione (pakiet C – decyzje klienta)
- Nazwy „VW C-Box / BMW SuperRack / Mercedes Pool" (#01) – do walidacji klienta (nie znajdują potwierdzenia w źródłach publicznych).
- „12 × 0,7 l szkło" przy skrzynce na wino (#03) – standard wina to 0,75 l; sprawdzić kartę produktu.
- Statystyki firmowe (400+ magazynów, 200+ gospodarstw po korekcie zapisu, kwoty inwestycji/ROI, cykle) – walidacja klienta.
- Zgoda RODO – warto dodać cel przetwarzania (np. „w celu obsługi zapytania"); do decyzji z prawnikiem.
- Microcopy „Zapytaj eksperta o PPWR w swojej branży." (generyczne na 5 stronach) i dobór case studies pod branżę strony.
- Badge'y prototypowe „PILLAR SEO" (#03) i „REBRAND" (#07, #09) w breadcrumbie oraz chipy klasyfikacyjne na index – strefa prototypowa, ukryć przed produkcją.
- Etykiety/kod QR „od 2028 r.": formalnie poprawne (12.08.2028), ale akt wykonawczy KE się spóźnia – jeśli nie wyjdzie do 12.08.2026, termin może przesunąć się poza 2028; monitorować.

## Nowości regulacyjne (zweryfikowane 3.07.2026, bez konfliktów z treścią)
- Termin stosowania 12.08.2026 utrzymany (KE pisemnie odmówiła odroczenia – komisarz Roswall).
- Decyzja delegowana (UE) 2026/429 (25.02.2026): folie owijające palety i taśmy spinające wyłączone ze 100% wymogu ponownego użycia (art. 29 ust. 2–3) – korzystne dla RTP; do rozważenia wzmianka na #05/#08.
- Wytyczne KE C(2026) 3702 final z 5.06.2026 (Dz.Urz. 10.06.2026) – oficjalne interpretacje PPWR; mocny materiał na aktualizację treści przed 12.08.2026.
- UC100: projekt nadal przed Radą Ministrów (stan 1.07.2026); nowy ROP planowany od 1.01.2027; kary (projekt: do 2 mln zł) nieprzesądzone – strony #06/#09/#10 opisują to poprawnie.
- Nowelizacja ustawy kaucyjnej (luty 2026): zwroty bez paragonu; browary mogą prowadzić własne systemy zbiórki butelek szklanych do końca 2028 r. – potencjalny news na #03.

---
*Korekta: sesja redakcyjna. Baza faktów: `PPWR_fakty_referencja_PL.md`. Poprzednia wersja: branch `v10-przed-korekta-jezyk`. Raport szczegółowy: `KOREKTA_v11_REPORT.md`; raport audytu 3.07.2026: `AUDYT_TRESCI_2026-07-03.md` (w repo).*
