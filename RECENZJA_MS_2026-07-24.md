# Recenzja Moniki Sojki – finalne poprawki treści v14 (24.07.2026)

## Kontekst

- **Źródło:** 10 plików Word „MS Strona NN – … (v14).docx" dostarczonych 24.07.2026 (folder `Downloads/MS 24.07.2026`, przeniesiony w całości do `word_v14_MS_2026-07-24/`). Nazwy plików miały uszkodzone kodowanie znaków (mojibake z rozpakowania ZIP, np. „ÔÇô" zamiast „–") – znormalizowane do wzorca `MS Strona NN – Tytuł (v14).docx`; zawartość nietknięta.
- **Baseline recenzji:** pliki `word_v14/*.docx` w stanie z **20.07.2026 14:21** (working tree, wygenerowane po commicie `ade0e0d` – commit zawiera starszą wersję generatora; Monika pracowała na wersji z dysku, co potwierdza zgodność dat `dcterms:created` 2026-07-20T12:21Z).
- **Metadane:** `dc:creator: crear agency`, `cp:lastModifiedBy: Monika Sojka`, modyfikacje 24.07.2026 07:38–08:25 UTC.
- **Forma poprawek:** bez trybu rejestracji zmian (0 × `w:ins`/`w:del`), bez komentarzy – poprawki naniesione wprost w tekście. Wykryte porównaniem tekstu akapit-po-akapicie (ekstrakcja `word/document.xml`, diff słowny; po odfiltrowaniu kosmetyki stylów Worda PL: `Heading1→Nagwek1`, `ListParagraph→Akapitzlist` itd.).
- **Status treści:** wg zapowiedzi – **wersja ostateczna** do wdrożenia.

## Skala poprawek

**28 zmienionych akapitów na 10 stronach** (na ~1080 akapitów łącznie – ok. 2,6%): **22 przeredagowane + 6 usuniętych w całości**. Zero dodanych sekcji, zero zmian w liczbach porządkowych/strukturze stron.

| Strona | Zmiany | Charakter |
|---|---|---|
| 01 Motoryzacja | 3 | pooling OEM+operatorzy, zmiękczenie „każdy odbiorca", ESD bez „35 V" |
| 02 Przetwórstwo żywności | 2 | PFAS fast-food precyzyjniej, HACCP jako system + BRC→BRCGS |
| 03 Napoje | 3 | ROP „ekonomiczne znaczenie", RFID→„lub inne cyfrowe nośniki", ISPM-15 uproszczone |
| 04 Farmacja i kosmetyki | 1 | FAQ: „dopuszczone do kontaktu z kosmetykami"→„nadają się do zastosowań" |
| 05 Intralogistyka | 2 | pick-by-light/RFID uproszczone, ESD bez „35 V" |
| 06 Logistyka 3PL | 2 | ISPM-15 uproszczone, FAQ „WMS"→„systemy magazynowe" |
| 07 Rolnictwo | 4 | „sieci wymagają"→„wykorzystują standard", **usunięte „Indywidualne realizacje"**, PFAS „Wiele"→„Część", ISPM-15 |
| 08 Produkcja przemysłowa | 3 | art. 29 ust. 2 bez „partnerskich", ISPM-15, **usunięte „Indywidualne – Pod aplikację"** |
| 09 Handel FMCG | 2 | „podwójny koszt ROP" mocno zmiękczony, art. 29 ust. 6 bez „odpowiada za" |
| 10 E-commerce | 6 | „przewaga nad DACH" zmiękczona, **usunięte 2 produkty paczkomatowe + FAQ (Q+A) + pilotaże**, art. 29 ust. 4 lit. d |

## Wzorce tematyczne (czego dotyczą poprawki)

1. **Usunięcie oferty „pod paczkomat" i „indywidualnych realizacji" (6 usuniętych akapitów: #07, #08, #10).** Z #10 zniknęły: produkt „Skrzynki pod automaty paczkowe – formaty S/M/L", produkt „Indywidualne pod paczkomat", całe FAQ „Czy można zrobić skrzynkę dopasowaną do skrytki automatu paczkowego?" (pytanie + odpowiedź „Tak – projektujemy…") oraz propozycja „trzech pilotaży 2026" (clever move box / skrzynka do automatu / totes DC). Z #07 „Indywidualne realizacje – Pod konkretne owoce", z #08 „Indywidualne – Pod aplikację". Wniosek: **nie deklarujemy projektów na zamówienie ani produktów pod automaty paczkowe** – analogia do G15 (nie obiecywać usług spoza oferty).
2. **ESD bez „35 V" (#01 FAQ, #05).** „chroni podzespoły przed wyładowaniami o napięciu do 35 V" → „zapewnia (trwałe/kontrolowane) rozpraszanie ładunków elektrostatycznych zgodnie z wymaganiami dla zastosowań ESD". Ostatnia niepotwierdzona liczba techniczna wypada z treści (spójne z [[feedback-no-unsourced-numbers]] – wcześniej „do 35 V" traktowaliśmy jako dopuszczalne, klientka zdecydowała inaczej).
3. **ISPM-15 ujednolicone na 4 stronach (#03, #06, #07, #08).** Usunięte parametry normy („rdzeń drewna min. 56°C przez 30 minut", „fumigacja bromkiem metylu") i „certyfikacja każdej palety"; nowa jednolita formuła: palety **„z tworzywa"** (nie „plastikowe Euro/HDPE") „nie podlegają wymaganiom ISPM-15, dzięki czemu nie wymagają obróbki fitosanitarnej ani **oznakowania IPPC** stosowanego dla palet drewnianych". W #03 obróbka drewna opisana miękko: „w praktyce najczęściej realizuje się poprzez obróbkę termiczną (HT)".
4. **Precyzja prawna PPWR.** #08: krąg z art. 29 ust. 2 zawężony do „tego samego przedsiębiorstwa lub przedsiębiorstw powiązanych" (wypada „partnerskich" – zgodnie z G4). #10: pudła tekturowe jednorazowe – wskazana konkretna podstawa wyłączenia „**art. 29 ust. 4 lit. d** – nie są wliczane do tych celów" (zamiast ogólnego „pozostają poza celami" + wzmianki o art. 24). #09: art. 29 ust. 6 – zamiast „sieć jako dystrybutor końcowy **odpowiada** za infrastrukturę zwrotu butelek" jest „sieci odgrywają kluczową rolę w organizacji systemów zwrotu … zgodnie z PPWR oraz przepisami krajowymi". #02: PFAS – „opakowania **zawierające** PFAS … nie będą spełniały wymagań" (nie „często zawierają"); #07: „**Część** papierowych tacek" (nie „Wiele"); usunięte dydaktyczne dopiski „PFAS to nie pestycydy".
5. **Zmiękczenie kategoryczności twierdzeń rynkowych** (duch G2). #01: „Każdy odbiorca wymaga" → „Odbiorcy OEM **zazwyczaj** wymagają"; pooling prowadzą „producenci **oraz operatorzy logistyczni**" (nie tylko OEM); #07: „Sieci handlowe **wymagają** konkretnych wymiarów" → „**Wiele sieci wykorzystuje** standard EURO"; #10: „Gotowa sieć automatów **daje Polsce przewagę nad DACH**" → „Rozbudowana sieć … **stwarza korzystne warunki**"; #09: teza o „podwójnym koszcie ROP (sprzedawca+dystrybutor)" → „w zależności od modelu biznesowego **część kosztów ROP może dotyczyć** opakowań produktów i logistycznych".
6. **Systemy i certyfikacje opisywane poprawnie.** #02: „Konstrukcja zgodna z HACCP to twardy wymóg audytowy sieci i certyfikacji (BRC/IFS)" → „Konstrukcja **ułatwiająca spełnienie wymagań higienicznych w systemach HACCP** oraz podczas audytów **BRCGS** i IFS" (HACCP = system, nie norma; aktualna nazwa standardu BRCGS); usunięte „bez deformacji". #04: pojemniki „**nadają się** do zastosowań w branży kosmetycznej" (nie „są dopuszczone do kontaktu z kosmetykami"). #06: kompatybilność „z systemami **magazynowymi**" (nie „WMS") klientów. #05: pick-by-light bez „miejsca na czujniki" – „pojemniki umożliwiające odpowiednie znakowanie oraz integrację z systemami WMS". #03: skrzynki „przygotowane **do zastosowania RFID lub innych cyfrowych nośników danych** zgodnych z wymaganiami PPWR".

## Pełny wykaz zmian (było → jest)

Konwencja: `[-usunięte-]` `{+dodane+}`.

### Strona 01 – Motoryzacja i automotive
1. Kluczowe wnioski: „Producenci samochodów [-prowadzą własne-]{+oraz operatorzy logistyczni wykorzystują+} systemy poolingu opakowań zwrotnych (RTP), do których [-dopasowują-]{+dostosowują+} się dostawcy tier 2/3."
2. Wyzwanie 01: „[-Każdy odbiorca wymaga-]{+Odbiorcy OEM zazwyczaj wymagają+} precyzyjnych wymiarów zgodnych z VDA 4500 [-i-]{+oraz+} znakowania zgodnego [-ze swoim systemem magazynowym.-]{+z własnymi standardami logistycznymi.+}"
3. FAQ ESD: „… stale rozprasza ładunki elektrostatyczne [-(materiał PP-ESD chroni podzespoły przed wyładowaniami o napięciu do 35 V).-]{+(PP-ESD zapewnia kontrolowane rozpraszanie ładunków elektrostatycznych zgodnie z wymaganiami dla zastosowań ESD).+}"

### Strona 02 – Przetwórstwo żywności
4. PFAS: „Papierowe opakowania typu fast food [-często zawierają-]{+zawierające+} PFAS [-i-] od 12 sierpnia 2026 r. nie [-spełnią wymogów-]{+będą spełniały wymagań+} PPWR."
5. HACCP: „Konstrukcja [-zgodna z HACCP to w praktyce twardy wymóg audytowy sieci i certyfikacji (BRC/IFS)-]{+ułatwiająca spełnienie wymagań higienicznych w systemach HACCP oraz podczas audytów BRCGS i IFS+} – gładkie ściany, brak miejsc gromadzenia zanieczyszczeń oraz odporność na mycie w wysokiej temperaturze[-bez deformacji-]."

### Strona 03 – Napoje
6. ROP: „Rozszerzona odpowiedzialność producenta [-zwiększa-]{+wzmacnia ekonomiczne+} znaczenie projektowania opakowań pod kątem [-ich wielokrotnego wykorzystania i recyklingu-]{+recyklingu i wielokrotnego wykorzystania+}."
7. RFID: „Skrzynki przygotowane [-pod RFID – cyfrowy nośnik danych zgodnie-]{+do zastosowania RFID lub innych cyfrowych nośników danych zgodnych+} z wymaganiami PPWR."
8. ISPM-15 (FAQ EPAL): „Palety drewniane w eksporcie poza UE podlegają [-normie fitosanitarnej-]{+wymaganiom normy+} ISPM-15, [-która wymaga obróbki termicznej (rdzeń drewna min. 56°C przez 30 minut) albo fumigacji bromkiem metylu – to nie jest impregnacja PFAS.-]{+które w praktyce najczęściej realizuje się poprzez obróbkę termiczną (HT).+} … Palety z tworzywa (HDPE) nie podlegają [-ISPM-15 – odpada powracający koszt obróbki i certyfikacji każdej palety.-]{+wymaganiom ISPM-15, dzięki czemu nie wymagają obróbki fitosanitarnej ani oznakowania IPPC stosowanego dla palet drewnianych.+}"

### Strona 04 – Farmacja i kosmetyki
9. FAQ: „Czy pojemniki bekuplast [-są dopuszczone do kontaktu z kosmetykami?-]{+nadają się do zastosowań w branży kosmetycznej?+}"

### Strona 05 – Intralogistyka i magazyn
10. Pick-by-light: „[-Magazyn z systemem pick-by-light wymaga pojemników z miejscem na czujniki, znacznikami RFID i znakowaniem zgodnym z WMS.-]{+Magazyny wykorzystujące systemy pick-by-light lub RFID wymagają pojemników umożliwiających odpowiednie znakowanie oraz integrację z systemami WMS.+}"
11. ESD: „… (materiał PP-ESD [-chroni przed wyładowaniami o napięciu 35 V).-]{+zapewnia trwałe rozpraszanie ładunków elektrostatycznych zgodnie z wymaganiami dla zastosowań ESD).+}"

### Strona 06 – Logistyka i transport (3PL)
12. ISPM-15: „Palety [-plastikowe Euro nie wymagają obróbki ISPM-15 – to ważny atut, gdy eksportujesz poza UE i chcesz uniknąć powracającego kosztu obróbki oraz certyfikacji każdej palety drewnianej.-]{+z tworzywa nie podlegają wymaganiom ISPM-15, dzięki czemu nie wymagają obróbki fitosanitarnej ani oznakowania IPPC wymaganego dla palet drewnianych.+}"
13. FAQ: „Czy palety plastikowe są kompatybilne z systemami [-WMS-]{+magazynowymi+} klientów?"

### Strona 07 – Rolnictwo, ogrodnictwo, owoce-warzywa
14. Sieci: „[-Sieci handlowe wymagają konkretnych, znormalizowanych wymiarów skrzynek – najczęściej Euro 400×300 lub 600×400 mm.-]{+Wiele sieci handlowych wykorzystuje standard EURO 400×300 i 600×400 mm, dlatego takie wymiary są powszechnie stosowane w łańcuchach dostaw.+} Flotę trzeba dostosować do tego standardu."
15. **USUNIĘTE** (lista produktów): „Indywidualne realizacje – Pod konkretne owoce".
16. PFAS: „Art. 5 PFAS – [-Wiele-]{+Część+} papierowych tacek i skrzynek na owoce [-ma barierową powłokę fluorową (PFAS) – objętą limitami PPWR dla opakowań do kontaktu z żywnością. PFAS to substancje fluorowane, nie pestycydy.-]{+wykorzystuje barierowe powłoki zawierające PFAS, które od 12 sierpnia 2026 r. będą podlegały ograniczeniom wynikającym z PPWR.+}"
17. FAQ ISPM-15: „Tak – palety [-plastikowe Euro (HDPE) nie podlegają normie ISPM-15. W przeciwieństwie do palet drewnianych nie wymagają obróbki termicznej (HT) ani fumigacji bromkiem metylu i certyfikacji fitosanitarnej przy eksporcie poza UE.-]{+z tworzywa nie podlegają wymaganiom ISPM-15, dlatego nie wymagają obróbki fitosanitarnej ani oznakowania IPPC stosowanego dla palet drewnianych.+} Sadownicy eksportujący… (dalsza część bez zmian)."

### Strona 08 – Produkcja przemysłowa
18. Art. 29 ust. 2: „Dotyczy to przepływu między [-różnymi-] miejscami działalności tego samego [-podmiotu, przedsiębiorstw powiązanych lub partnerskich.-]{+przedsiębiorstwa lub przedsiębiorstw powiązanych.+}"
19. ISPM-15: „Palety z tworzywa są poza zakresem tej normy – nie wymagają [-takiej-] obróbki {+fitosanitarnej+} ani [-certyfikacji.-]{+oznakowania IPPC wymaganego dla palet drewnianych.+}"
20. **USUNIĘTE** (lista produktów): „Indywidualne – Pod aplikację".

### Strona 09 – Handel detaliczny i FMCG
21. ROP: „[-Sieci ponoszą podwójny koszt: jako sprzedawca (ROP dla puszki, butelki i folii) oraz jako dystrybutor (ROP dla kartonu, folii i palety). Opakowania jednorazowe oznaczają rosnący koszt netto.-]{+W zależności od modelu biznesowego sieci część kosztów ROP może dotyczyć zarówno opakowań produktów, jak i opakowań wykorzystywanych w logistyce.+}"
22. Art. 29 ust. 6: „Cele ponownego użycia opakowań napojowych – [-sieć jako dystrybutor końcowy odpowiada za infrastrukturę zwrotu butelek.-]{+sieci handlowe odgrywają kluczową rolę w organizacji systemów zwrotu opakowań napojowych zgodnie z PPWR oraz przepisami krajowymi.+}"

### Strona 10 – E-commerce, 3PL i fulfillment
23. Automaty: „[-Gotowa-]{+Rozbudowana+} sieć automatów paczkowych [-daje-]{+w+} Polsce [-przewagę nad regionem DACH –-]{+stwarza korzystne warunki do rozwoju systemów opakowań wielokrotnego użytku –+} rynki Europy Zachodniej…"
24. **USUNIĘTE** (lista produktów): „Skrzynki pod automaty paczkowe – formaty S/M/L do uzgodnienia z operatorem".
25. **USUNIĘTE** (lista produktów): „Indywidualne pod paczkomat – Pod operatora".
26. Cele reuse/kartony: „…cele ponownego użycia obejmują opakowania [-transportowe (pudła tekturowe pozostają poza celami), a art. 24 ogranicza pustą przestrzeń w paczkach. Propozycja bekuplast: trzy pilotaże, które warto uruchomić w 2026 r., to składana skrzynka na zwroty (clever move box), skrzynka zwrotna do automatu paczkowego oraz totes magazynowe w DC w obiegu zamkniętym między magazynami.-]{+transportowe, natomiast jednorazowe pudła tekturowe objęte wyłączeniem z art. 29 ust. 4 lit. d nie są wliczane do tych celów.+}"
27. **USUNIĘTE** (FAQ, pytanie): „Czy można zrobić skrzynkę dopasowaną do skrytki automatu paczkowego?"
28. **USUNIĘTE** (FAQ, odpowiedź): „Tak – projektujemy skrzynki dopasowane wymiarowo pod skrytki automatów paczkowych. Wymaga to uzgodnienia z operatorem automatu, a czas projektu i prototypu ustalamy indywidualnie."

## Następne kroki (propozycja)

1. Naniesienie 28 poprawek na 10 makiet HTML (`makieta_01..10_*.html`) → **v15** (wraz z podbiciem banerów wersji). Uwaga na miejsca zdublowane HTML↔Word: FAQ i „Kluczowe wnioski" istnieją 1:1; usunięcie FAQ w #10 zmienia liczbę pytań (uwaga na JSON-LD FAQPage, jeśli jest).
2. Sprawdzić, czy usunięcie kafelków produktowych (#07/#08/#10 – po 1–2 pozycje) nie psuje układu siatki produktów w HTML.
3. Po v15: regeneracja Wordów (`tools/`) tylko jeśli potrzebna kolejna runda; wg zapowiedzi klientki to wersja ostateczna.
4. Commit repo (word_v14 przegenerowane 20.07 + `word_v14_MS_2026-07-24/` + ten raport) – do decyzji Mateusza.
5. Handoff do Kuby (TYPO3) po v15 – wg procedury AD46 (nowy tag + wpis AD w Notion #11).

---
*Analiza: porównanie akapitowe `word/document.xml` baseline 20.07 vs MS 24.07; skrypty w scratchpadzie sesji (`ms_analiza/`). Różnice nazw stylów (Word EN→PL) odfiltrowane jako kosmetyka bez wpływu na treść.*
