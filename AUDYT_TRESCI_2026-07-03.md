# Audyt treści 10 stron branżowych bekuplast – 3.07.2026

Zakres: merytoryka (zgodność z bazą faktów PPWR + aktualność regulacyjna na 3.07.2026), logika i spójność (wewnątrz stron i między stronami), poprawność językowa PL, styl i ton marki.
Metoda: 5 niezależnych recenzentów par stron + audyt spójności międzystronicowej + research regulacyjny (EUR-Lex, KE, gov.pl/RCL, prasa branżowa) + lint mechaniczny i weryfikacja każdego znaleziska grepem w HTML.
Baza: working tree = `main` @ `e794189` (= live GitHub Pages). Baza faktów: `PPWR_fakty_referencja_PL.md`.

## Werdykty

| # | Strona | Werdykt | Najcięższe znalezisko |
|---|--------|---------|----------------------|
| 01 | Motoryzacja | DROBNE | „klisze" (2×), sprzeczność lata 80./90. |
| 02 | Przetwórstwo żywności | PROBLEMY | adresat „pośrednio" (2×), cel napojowy dla rozlewni |
| 03 | Napoje (pillar) | DROBNE | straszak „wezwanie w 2027 r." |
| 04 | Farmacja i kosmetyki | PROBLEMY | „i grupowe" pod 40/70, „całość opakowań kosmetyków", sterylne≠sterylizowalne |
| 05 | Intralogistyka | PROBLEMY | karta PFAS (3 błędy), samosprzeczne FAQ, 100 vs 100 tys. cykli |
| 06 | Logistyka 3PL | DROBNE | Skandynawia (ISPM-15), 2 zdania bez łącznika |
| 07 | Rolnictwo | PROBLEMY | rekcja w TL;DR, Skandynawia, karta „Poza zakresem" |
| 08 | Produkcja | PROBLEMY | wyciek „Strona zbiorcza…" w TL;DR, AutoStore przy paletach |
| 09 | Handel / FMCG | PROBLEMY | karta „Art. 7" (3 błędy), wyciek „w naszej kampanii" |
| 10 | E-commerce | PROBLEMY | nielogiczny wywód „karton wraca pusty", „4 lata przewagi" |

Rdzeń regulacyjny kampanii (cele 40/70 i 10/40 z „celem aspiracyjnym", art. 24, ust. 13, daty 11.02.2025/12.08.2026, kaucja 1.10.2025, adresat, zero „2 mln EUR") jest **spójny na 10/10 stronach** – poprawki v11 się utrzymały. Znaleziska dotyczą pojedynczych kart/zdań i warstwy językowej.

---

## A. WZORCE SYSTEMOWE (wiele stron naraz)

1. **[WYSOKA] Pseudocytaty EUR-Lex – 9/10 stron.** Blockquote w sekcji PPWR podpisany `<cite>Rozporządzenie (UE) 2025/40 (PPWR), art. … – EUR-Lex</cite>`, a treść to parafraza redakcyjna, często z wtrąconym zdaniem marketingowym (np. #06: „bekuplast produkuje pojemniki zwrotne kompatybilne z systemami poolingowymi klientów (CHEP, IPP, LPR)"; #10: „Składane pojemniki zwrotne ograniczają objętość…"; #02: teza o HDPE bez PFAS). Wzorzec poprawny ma tylko #04: „na podstawie rozporządzenia…".
   Lokalizacje cite: 01 L1319, 02 L1328, 03 L1230, 05 L1338, 06 L1305, 07 L1330, 08 L1329, 09 L1339, 10 L1330.
   → Poprawka: wszędzie podpis „Na podstawie: rozporządzenie (UE) 2025/40 (PPWR), art. … (EUR-Lex)" + wyniesienie zdań marketingowych poza blockquote.
2. **[WYSOKA] Wyciek szablonu – 10/10 stron.** Widoczny hint „↓ przewiń – wyzwań jest 3–5 zależnie od branży" (sprzeczny z nagłówkami „Cztery/Pięć wyzwań…"). Linie: 01 L1235, 02 L1236, 03 L1127, 04 L1236, 05 L1236, 06 L1211, 07 L1236, 08 L1235, 09 L1236, 10 L1236. → „↓ przewiń kolejne wyzwania".
3. **[WYSOKA] „– Art." wielką literą po półpauzie – 5 miejsc / 3 strony:** 06 L1279 (H2), 08 L1240 (H4), 08 L1305 (H2), 08 L1454 (FAQ), 10 L1306 (H2). Regex v11 nie łapał pozycji po „– ". → „– art.".
4. **[ŚREDNIA] „strukturę CO₂" bez „emisji" – 6 stron:** 01 L1400, 03 L1307, 07 L1407, 08 L1409, 09 L1417, 10 L1410 (pozostałe 4 strony mają poprawnie „strukturę emisji CO₂"). Rekomendacja recenzentów: „bilans emisji CO₂" lub „strukturę emisji CO₂" – jednolicie.
5. **[ŚREDNIA] „o 84%" vs „do 84% (dane bekuplast)":** 06 L1226 i 10 L1224/L1456 „o 84%" vs 06 L1229/L1267, 10 L1254/L1291 „do 84%". → ujednolicić na „do 84%".
6. **[ŚREDNIA] „Zakaz PFAS" vs „ograniczenie PFAS":** „zakaz" na 04 L1440 i 05 L1326; art. 5 to ograniczenie progowe (25/250 ppb, 50 ppm) – reszta stron pisze „ograniczenie". → „Ograniczenie PFAS".
7. **[ŚREDNIA] Badge'y prototypowe poza strefą [DEV]:** 03 L1097 „PILLAR SEO", 07 L1210 i 09 L1210 „REBRAND" (breadcrumb). → ukryć/usunąć przed produkcją (dopisać do listy dla devów w CHANGELOG).
8. **[ŚREDNIA] Slang „e-com" w treści:** 06 L1280, 06 L1383, 09 L1299. → „e-commerce".
9. **[ŚREDNIA] Niespójna trwałość między stronami:** „100+ cykli rotacji" (01 L1448, 03 L1084/L1113, 07 L1455) vs #05: meta „100+ cykli", TL;DR L1224 „100 tys.+ obrotów rocznie", FAQ L1463 „100 tys.+ cykli". → standard kampanii „100+ cykli"; w TL;DR #05 chodzi o operacje magazynu, nie cykle pojemnika – przeredagować.
10. **[ŚREDNIA] Sekcja Kontakt (wspólna, 10/10):** (a) uwaga prawna – zgoda RODO nie wskazuje celu przetwarzania (np. „w celu obsługi zapytania"); (b) powtórzenie „danych osobowych … moich danych osobowych" – można skrócić „…zasad ich przetwarzania"; (c) opcjonalnie „Kontakt do 24 godzin" → „Odpowiedź w ciągu 24 godzin" i „pozyskania próbek" → „otrzymania próbek" (teksty z briefu Mateusza – zmiana wymaga jego zgody).
11. **[NISKA] Microcopy „Zapytaj eksperta o PPWR w swojej branży."** – generyczne na 5 stronach (05, 07, 08, 09, 10), sprofilowane na 4 (02, 03, 04, 06). → sprofilować pozostałe.
12. **[NISKA] Obietnice kalkulatora rozjeżdżają się między sekcją a FAQ:** sekcje „próg rentowności + struktura CO₂"; FAQ #03 dodaje „polecane numery artykułów", FAQ #08 „okres zwrotu". → jedna lista wyników.
13. **[NISKA] Case Studies – dobór:** 4 wdrożenia (drogerie/beauty/budowlanka/automotive) nie pokrywają branż stron 02/07/08 (żywność, agro, produkcja). Komponent globalny – decyzja klienta, czy kuratorować per strona.

## B. ZNALEZISKA PER STRONA (poza systemowymi)

### #01 Motoryzacja – DROBNE
- [WYSOKA][MERYT] L1223 + L1444 „**klisze** 297×198…" / „klisze wymiarowe" – „klisza" nie jest polskim terminem wymiarowym (kalka z Raster/footprint); kompromitujące przed dyrektorem logistyki tier-1. → „moduły wymiarowe podstawy (297×198, 396×297, 594×396 mm)"; w L1223 usunąć trzeci wymiar z „594×396×280" albo opisać osobno jako wysokość.
- [WYSOKA][SPÓJN] L1223 „closed-loop RTP **od lat 80.**" vs L1447 FAQ „**od lat 90.**" – sprzeczność; kotwica L1296 „VDA … już w 1988 r." → „od końca lat 80. XX w." w obu miejscach.
- [WYSOKA][JĘZYK] L1223 „**wszyscy OEM-i** wymagają" → „wszystkie OEM-y wymagają"; L1444 „Wszyscy OEM (VW…) wymagają" → „Wszystkie OEM-y…"; L1296 „do OEM w regionie DACH" → „do OEM-ów…".
- [WYSOKA][SPÓJN] L1399 H2 „Koszt przejścia na **skrzynki**…" – strona jest o pojemnikach KLT/VDA → „na pojemniki wielokrotnego użytku" (analogicznie #06: strona o paletach/pojemnikach dla 3PL, L1366 → „na opakowania wielokrotnego użytku").
- [WYSOKA][JĘZYK] L1446 „komponentów EV (bateryjne)" → „komponentów bateryjnych EV"; „Stosowane dla podzespołów ECU" → „do podzespołów".
- [ŚREDNIA][JĘZYK] L1447 „Tak, ale formalnie spełnia większość wymogów … spełniając art. 29" → „Tak, choć w praktyce spełnia już większość wymogów … spełniając wymogi art. 29".
- [ŚREDNIA][MERYT] L1223/L1445 „VW C-Box, BMW SuperRack, Mercedes Pool" – nazwy systemów niemożliwe do publicznego potwierdzenia → do walidacji klienta albo rodzajowo „systemy poolingowe VW/BMW/Mercedes" (jak L1287).
- [ŚREDNIA][MERYT] L1241 „tolerancje ±0,3 mm" przypisane VDA (w L1283 to cecha produktu) → przenieść atrybucję na produkt lub zmiękczyć.
- [ŚREDNIA][MERYT] L1250 „2 000–4 000 komponentów elektronicznych (wobec 200–400 w 1990 r.)" – nowa liczba bez źródła → zmiękczyć/źródło.
- [ŚREDNIA][MERYT] L1306 „istotne przy foliach barierowych do kontaktu z żywnością" (PFAS w automotive) → uczciwiej „znaczenie marginalne – dotyczy wyłącznie opakowań do kontaktu z żywnością".
- [ŚREDNIA][STYL] L1306 „od 12.08.2026 r." – jedyny liczbowy zapis daty → słownie; „ponownego użytku" L1305 → „ponownego użycia"; zapis „tier" ujednolicić (tier 1, tier 2/3); „KLT-VDA/VDA-KLT/KLT/VDA" → „KLT/VDA"; L1216 placeholder „(mute, autoplay)" → jak #03 bez notki; L1207 separator breadcrumb „›" vs „/" w #03; L1234 „pod najczęstsze wymagania" → „pod kątem najczęstszych wymagań"; L1448 „mycia + kontroli" → „i"; L1326 „gotowość firmy dla tier 1/2/3" → „gotowość dostawcy tier 1/2/3"; L1223 „Polski automotive … w Polsce" – pleonazm.

### #02 Przetwórstwo żywności – PROBLEMY
- [WYSOKA][MERYT] L1260 „odczujesz to **pośrednio**" + L1315 „jesteś objęty **pośrednio**" – producent wysyłający towar w opakowaniach transportowych jest adresatem art. 29 ust. 1 WPROST (tak mówi #07 tej samej personie). → „dotyczy Cię bezpośrednio jako podmiotu stosującego opakowania transportowe; sieci dodatkowo przenoszą wymagania na dostawców".
- [WYSOKA][MERYT] L1316 „cele … napoje (10% do 2030 r.) – dotyczą m.in. **rozlewni soków**" – adresatem ust. 6 są dystrybutorzy końcowi. → „dotyczą dystrybutorów końcowych – rozlewnie odczują je pośrednio…".
- [ŚREDNIA][MERYT] L1306 „od 12 sierpnia 2026 r. dotykają jednocześnie dwa wymogi" – PFAS od 12.08.2026, ale cele art. 29 od 2030 → dopisać daty przy każdym.
- [ŚREDNIA][MERYT] L1327 blockquote: teza marketingowa o HDPE podpisana jako art. 5 EUR-Lex (patrz wzorzec A1).
- [ŚREDNIA][MERYT] L1456 FAQ „skrzynki drewniane wiążą się z obróbką fitosanitarną" – bez zastrzeżenia „przy eksporcie poza UE".
- [ŚREDNIA][MERYT] L1455 „(system kaucyjny od 1 października 2025 r.)" przy butelkach na mleko – mleko jest wyłączone z polskiego systemu kaucyjnego → usunąć nawias/przeredagować (do potwierdzenia z klientem).
- [ŚREDNIA][SPÓJN] TL;DR/H2 zapowiadają serię **dryline** – brak kafla w siatce produktów → dodać kafel albo usunąć z zapowiedzi.
- [ŚREDNIA][SPÓJN] L1305 H2 „PPWR **i** ograniczenie PFAS" sugeruje dwie regulacje – PFAS jest częścią PPWR → np. „Ograniczenie PFAS i cele ponownego użycia – podwójne uderzenie PPWR".
- [ŚREDNIA][JĘZYK] L1235 „wyzwania rozwiązujemy" (kalka) → „na wyzwania odpowiadamy"; L1224/L1451 „dedykowane" → „przeznaczone dla"; L1453 „środki HACCP" → „środki myjące i dezynfekujące stosowane w reżimie HACCP"; L1430 „transport sadu z DC" – nieczytelne, rozwinąć DC; L1251 „fakturowanymi ścianami" → „teksturowanymi"; L1224 „twarda preferencja" → „w praktyce twardy wymóg audytowy"; żywotność 8–12 lat vs 10–15 na #07 – rozróżnić produktowo lub ujednolicić.

### #03 Napoje (pillar) – DROBNE
- [WYSOKA][MERYT] L1169 „Sieć bez pilotażu RTP w latach 2025–2026 **dostanie wezwanie w 2027 r.**" – wymyślona konsekwencja prawna (obowiązki od 2030, kary określi ustawa PL; termin dla państw na przepisy o karach: 12.02.2027). → „Sieć, która nie ruszy z pilotażem RTP w 2026 r., zostanie z bardzo krótkim oknem wdrożenia przed celami na 2030 r."
- [ŚREDNIA][MERYT] L1159 nagłówek karty „10% (2030) i 40% (2040)" – jedyne miejsce bez „(cel aspiracyjny)" przy 2040 → dopisać.
- [ŚREDNIA][MERYT] L1115 „12–18 mies. spóźnione wobec Mehrweg" – liczba bez źródła → zmiękczyć.
- [ŚREDNIA][MERYT] L1197 „Bez fumigacji ISPM-15" – skrót sugeruje ISPM-15=fumigacja → „Bez obróbki ISPM-15" (jak #01); to samo #09 L1304 chip „Bez fumigacji EPAL" → „Bez obróbki ISPM-15".
- [ŚREDNIA][MERYT] L1217 adresat „(m.in. sieci, hurtownie)" – dopisać browary, by browar-czytelnik nie uznał, że cel transportowy go nie dotyczy.
- [ŚREDNIA][MERYT] L1196 „Model D1 – wina … 12 × 0,7 l" – standard wina to 0,75 l → sprawdzić kartę produktu.
- [ŚREDNIA][SPÓJN] L1354 FAQ „butelka niestandardowa (np. piwo rzemieślnicze 0,33 l)" – 0,33 l jest w ofercie standardowej (L1190, L1193) → zmienić przykład (np. 0,75 l / nietypowy kształt).
- [ŚREDNIA][SPÓJN] L1353 pytanie „obowiązki od 12 sierpnia 2026 r." – odpowiedź wymienia tylko cele 2029/2030 → dodać zdanie otwierające o dacie stosowania.
- [ŚREDNIA][JĘZYK] „HL/rok" ×3 (L1243, L1307, L1356) → „hl/rok"; L1150 „(Rozszerzona Odpowiedzialność Producenta)" → małymi; L1115 „skala adaptacji będzie szybsza" → „tempo adaptacji będzie wyższe"; L1125 „wyzwań… które rozwiązujemy" → „na które odpowiadamy"; L1352 „w jakości przemysłowej" → „klasy przemysłowej"; L1355 „kod EAN, QR lub RFID" → „kod EAN, kod QR lub tag RFID"; L1356 „kalkulator dedykowany dla" → „przygotowany dla", „kierunkowy próg" → „orientacyjny"; L1114 „w 2027–2028" → „w latach 2027–2028"; L1136/L1351 „szkło-szkło" → „szkło–szkło" (półpauza); L1207 vs L1229 zapis „(UE) 2025/40" ujednolicić; L1337 „(Raben, Rohlig)" → „Rohlig Suus".

### #04 Farmacja i kosmetyki – PROBLEMY
- [WYSOKA][MERYT] L1260 „opakowania transportowe **i grupowe** … podlegają celom … 40% w 2030 i 70% w 2040" – zbiorcze (PPWR: „zbiorcze", nie „grupowe") mają własny cel 10%/25% (art. 29 ust. 5). → rozdzielić cele albo usunąć „i grupowe".
- [WYSOKA][MERYT] L1437 FAQ „**całość opakowań kosmetyków** podlega celom ponownego użycia" – nadinterpretacja (brak celu reuse dla opakowań handlowych kosmetyków), sprzeczna z własnym TL;DR → „opakowania transportowe kosmetyków".
- [WYSOKA][MERYT] title L5 + L1235/L1260/L1274/L1332/L1400: „**sterylne**" → „**sterylizowalne**" (pojemnik nie jest sterylny, jest sterylizowalny; produktowe opisy na stronie używają poprawnej formy).
- [ŚREDNIA][MERYT] L1242 zestawienie „kontakt z substancjami farmaceutycznymi … Certyfikaty wg (UE) 10/2011" – 10/2011 dotyczy żywności → „dopuszczenie do kontaktu z żywnością (rozp. (UE) nr 10/2011) – standard wykorzystywany także w logistyce farmaceutycznej".
- [ŚREDNIA][MERYT] L1318 blockquote – trzecie zdanie to komentarz bekuplast → skrócić cytat lub cite „komentarz bekuplast na podstawie…".
- [ŚREDNIA][SPÓJN] L1224 „Zakłady z dwoma lub więcej lokalizacjami" – zakład≠firma → „Firmy z dwiema lub więcej lokalizacjami"; ujednolicić z #08 „do 2030" vs „od 2030" → „od 1 stycznia 2030 r.".
- [ŚREDNIA][SPÓJN] L1197 lede obiecuje „kanistry dla chemii kosmetycznej" – brak kafla → dodać albo zmienić lede.
- [ŚREDNIA][SPÓJN] L1305 nagłówek karty „Wyłączenie farmacji" podtrzymuje mit, który strona obala → „Wyłączenie opakowań bezpośrednich".
- [ŚREDNIA][JĘZYK] L1281 „obrotu zwrotnego" → „obiegu zwrotnego"; L1400 „koszt … ze zwrotnymi pojemnikami" → „z kosztem zwrotnych pojemników" / „koszty … i …"; L1245 „Reg. (UE) 10/2011" → „rozp. (UE) nr 10/2011"; L1439 „dla indywidualnego numeru artykułu" → „dla nowego wyrobu"; L1338 równoważnik „O PPWR w farmacji i kosmetyce." → pełne zdanie jak #08.
- Teza 2035: konsekwentna w 100% miejsc (meta, TL;DR, body, karta, blockquote, 2×FAQ) – bez zmian, czeka na walidację MMLC.

### #05 Intralogistyka – PROBLEMY
- [WYSOKA][MERYT] L1326 karta „Art. 5 PFAS": „**Zakaz** PFAS … Magazyny spożywcze **i farmaceutyczne** muszą wymienić folie, taśmy **i częściowo palety**" – 3 błędy (ograniczenie, nie zakaz; tylko żywność; palet/folii transportowych nie dotyczy). Sprzeczne z 4 innymi stronami. → „Ograniczenie PFAS w opakowaniach mających kontakt z żywnością (od 12 sierpnia 2026 r.). Magazyny spożywcze muszą zweryfikować opakowania z bezpośrednim kontaktem z żywnością (np. powlekane tacki i papier). Palet i folii transportowych przepis nie dotyczy – ale audyt opakowań to naturalny moment na przejście na wielorazowe."
- [WYSOKA][MERYT] L1465 FAQ samosprzeczne: „Formalnie nie – art. 29 dotyczy … między firmami. Ale art. 29 ust. 2 wymaga…" – pierwsze zdanie fałszywe → przepisać (cele 40/70 z ust. 1 dot. obrotu; przepływy wewnątrzfirmowe reguluje wprost ust. 2; poza PPWR tylko obieg w obrębie jednego zakładu). Powiązane złagodzenie: L1224 „PPWR formalnie nie obejmuje intralogistyki" i H2 L1315 „formalnie poza zakresem".
- [WYSOKA][SPÓJN] Trwałość: meta „100+ cykli" vs TL;DR L1224 „100 tys.+ obrotów rocznie" vs FAQ L1463 „100 tys.+ cykli"; standard kampanii = „100+ cykli" → FAQ poprawić, TL;DR przeredagować na operacje magazynu.
- [ŚREDNIA][MERYT] L1324/L1337 „obejmuje **każdą** firmę…" – pominięte zwolnienie mikro (ust. 13) → „co do zasady każdą…"; L1325 „W ciągu 18–24 miesięcy obejmie każdy zakład" – prognoza z absolutem → zmiękczyć; L1466 „Certyfikacja: IEC 61340-5-1" → „Zgodność z IEC 61340-5-1"; L1197 „400+ magazynów" – do potwierdzenia przez klienta.
- [ŚREDNIA][SPÓJN] L1299 vs L1301 zdublowany kafelek contecline → scalić/zróżnicować; L1307 „Indywidualne pod WMS – Mecalux/Daifuku" – to dostawcy AKL, nie WMS → „pod AKL" albo przykłady WMS (SAP EWM, Manhattan).
- [ŚREDNIA][JĘZYK] L1292 H2 „Silverline, contecline…" → „silverline" małą literą (branding serii); L1224 „od bekuplast" → „pojemniki bekuplast silverline/contecline"; L1251 „Standardowe HDPE wytrzymuje 3–4." – urwane → „…wytrzymują sztaplowanie 3–4 warstw"; L1277–78 „=" w nagłówku/zdaniu → słownie; L1462 „taśmociągi" → „przenośniki"; „w praktyce 100% ponownego użycia" (L1324/L1337/L1465) → wariant #08 „pełny ponowny użytek (rozporządzenie nie podaje wprost wartości procentowej)" – dotyczy też #07 L1316.
- [NISKA][TON] Body prawie nie używa „Ty/Twój" – najmniej bezpośrednia strona kampanii (obserwacja).

### #06 Logistyka 3PL – DROBNE
- [WYSOKA][MERYT] L1414 FAQ „Eksportując do **Skandynawii**, Wielkiej Brytanii, USA…" – Skandynawia to UE/EOG, ISPM-15 nie dotyczy → „do Wielkiej Brytanii, USA, Chin czy na Bliski Wschód".
- [WYSOKA][JĘZYK] L1199 dwa zdania bez łącznika (ofiary zamiany myślników): „…objęty art. 29 PPWR jako podmiot stosujący opakowania transportowe musisz zapewnić 40%…" → wstawić „–" przed „musisz"; „Palety plastikowe Euro nie wymagają obróbki ISPM-15 to ważny atut…" → „– to ważny atut". Tamże: „Polskie 3PL dziś używa" → „Polska branża 3PL używa dziś"; „Skrzyniopalety … to specjalistyczne segmenty logistyki temperaturowej" → „obsługują specjalistyczne segmenty, m.in. logistykę temperaturową".
- [ŚREDNIA][MERYT] L1235 „musisz mieć palety drewniane spełniające ISPM-15" → „eksportując poza UE na paletach drewnianych, musisz spełnić ISPM-15"; L1226 „60–75% wykorzystania ładowności" – liczba bez źródła → oznaczyć jako szacunek branżowy; L1280 rozważyć pełną formę „podmiotów gospodarczych stosujących…" przy pierwszym użyciu.
- [ŚREDNIA][SPÓJN] L1366 H2 kalkulatora „skrzynki" → „opakowania wielokrotnego użytku" (strona o paletach i pojemnikach dla 3PL).
- [ŚREDNIA][STYL] „systemy poolingowe" vs „systemy poolingu" w obrębie strony → ujednolicić; „1000 kg" vs „500–1 000 sztuk" → „500–1000".

### #07 Rolnictwo i ogrodnictwo – PROBLEMY
- [WYSOKA][JĘZYK] L1224 TL;DR „– Ciebie jako sadownika czy **hurtownię** to dotyczy" – błąd rekcji → „dotyczy to również Ciebie, sadownika lub hurtowni". Tamże: „wybrane kategorie produktów" → „kategorie opakowań".
- [WYSOKA][MERYT] L1456 FAQ „eksportujący do **Skandynawii**, Wielkiej Brytanii…" – jak #06 → „do Wielkiej Brytanii, Turcji czy na Bliski Wschód".
- [WYSOKA][MERYT] L1318 karta „Poza zakresem": „Zbiór z pola i transport sezonowy w obrębie samego gospodarstwa pozostają poza celami transportowymi" – niezweryfikowany carve-out; napięcie z kartą ust. 2 (L1316) → przepisać ostrożnie (poza celami z ust. 1 tylko obieg w obrębie jednej lokalizacji; między lokalizacjami działa ust. 2) + walidacja prawna.
- [WYSOKA][SPÓJN] L1242 „szczyt zbiorów (sierpień–wrzesień). Przez pozostałe **9 miesięcy**…" – 12−2≠9; TL;DR mówi „jabłka sierpień–październik" → zmienić na „(sierpień–październik)".
- [ŚREDNIA][MERYT] Dodać „lub paszą" przy art. 29 ust. 4 lit. c (L1306, L1454); L1314 „wyłączenia są produktowe (…lit. c)" → „m.in." (są też lit. a, b, d); L1317 „powłokę PFAS – niedozwoloną" → „objętą limitami PPWR" (ograniczenie progowe); „w praktyce 100%" L1316 → wariant ostrożny (jak #08).
- [ŚREDNIA][SPÓJN] FAQ vs kafle: truskawki „8–10 kg" vs „8 kg"; skrzyniopalety „300–400 kg" vs „300 kg" → ujednolicić; kalendarz zbiorów pomija lipiec (maliny/borówki/wiśnie) – sugestia redakcyjna; żywotność „10–15 lat" vs 8–12 na innych stronach → glosa „sezonowa eksploatacja".
- [ŚREDNIA][JĘZYK] L1269 „ROI na wymianie: 18–28 miesięcy" → „zwrot z inwestycji w 18–28 miesięcy"; L1251 „= transport chłodzony" → słownie; L1451 „(drenaż soku owoców)" → „(odprowadzanie soku z owoców)"; L1197 „200+ gospodarstwach" → „ponad 200"; meta L6 zeugma „na warzywa, owoce i do ogrodnictwa" + pleonazm „Zwrotne RTP" → przeredagować.

### #08 Produkcja przemysłowa – PROBLEMY
- [WYSOKA][SPÓJN] L1223 TL;DR, bullet „**Strona zbiorcza dla branż bez dedykowanego serwisu** – AGD, RTV…" – wewnętrzna klasyfikacja makiety w treści dla czytelnika → „Rozwiązania dla AGD, RTV, elektroniki, mebli, chemii, budownictwa, tekstyliów, narzędzi i części zamiennych – w jednym miejscu."
- [WYSOKA][MERYT] L1456 FAQ „palety … kompatybilne z głównymi systemami AKL (Mecalux, Daifuku, Murata, SSI Schaefer, **AutoStore**)" – AutoStore nie obsługuje palet; AKL to drobnica w pojemnikach → usunąć AutoStore, pisać „systemy magazynów automatycznych".
- [WYSOKA][SPÓJN] L1454 FAQ: „Nie – art. 29 ust. 2 dotyczy…", a dwa zdania dalej „Może go jednak objąć art. 29 ust. 1" → „Nie w zakresie obiegu wewnętrznego (ust. 2) – ale może podlegać celom z ust. 1…".
- [WYSOKA][SPÓJN] Kafelki: silverline zdublowany (L1289 + L1292), contecline zapowiedziany (L1253, L1381) bez kafelka → drugi silverline zamienić na contecline.
- [WYSOKA][JĘZYK] L1250 „automatyczny magazyn (AKL) + linia produkcyjna + **automatyczna paczka**" → „automatyczna stacja pakowania"; „+" → przecinki.
- [ŚREDNIA][MERYT] Dodać „lub partnerskich" do „przedsiębiorstw powiązanych" (L1306); L1459 rozdzielić RFID i kod QR („miejsce pod tag RFID (UHF Gen2); oznakowanie kodem QR wymagane od sierpnia 2028 r. (art. 12)"); L1453 pytanie FAQ „Co to jest art. 29 i kogo dotyczy?" – odpowiedź tylko o ust. 2 → poszerzyć pytanie/odpowiedź; L1223 kontrast 8–12 lat (plastik) vs 5–10 lat (EPAL, L1457) słaby → przeformułować na cykle/koszty napraw; L1244 chip miesza serie z paletami → rozdzielić.
- [ŚREDNIA][JĘZYK] L1223 „flagowy artykuł dla dużych objętości" → „flagowy produkt przy dużych wolumenach"; L1306 „magazynami DC i centrami dystrybucji" – tautologia → „magazynami i centrami dystrybucji"; L1295 chip „Sztaplowanie 4" → „Sztaplowanie ×4"; „z 2 lub więcej zakładami" vs „z dwiema…" → słownie.

### #09 Handel / FMCG – PROBLEMY
- [WYSOKA][MERYT] L1324 karta „Art. 7": „Zakaz jednostkowych kartoników na produkty fast-food w sklepie oraz ograniczenia dla folii pakującej świeże produkty" – 3 błędy: to art. 25 + załącznik V (art. 7 = recyklat); załącznik V dotyczy **tworzyw sztucznych**, nie kartonu; kontekst gastronomiczny (HoReCa), nie „w sklepie". → etykieta „Art. 25 + zał. V", treść: „Ograniczenia jednorazowych opakowań z tworzyw sztucznych – m.in. dla świeżych owoców i warzyw poniżej 1,5 kg oraz żywności i napojów konsumowanych na miejscu w gastronomii."
- [WYSOKA][SPÓJN] L1224 „Sieci handlowe … są priorytetem #1 PPWR **w naszej kampanii**" – wyciek języka kampanii SEO → „Sieci handlowe należą do branż najmocniej dotkniętych przez PPWR…"; przy okazji „priorytet #1" → „nr 1", „4-letni projekt (2026–2030)" → „projekt na lata 2026–2030".
- [WYSOKA][JĘZYK] L1269 zdanie bez orzeczenia: „Skrzynki przegrodowe z trwałym znakowaniem (laser, hot-stamp, przygotowanie pod RFID) pod oznakowanie opakowań od 2028 r." → „…są gotowe na zharmonizowane oznakowanie opakowań wymagane od 2028 r. (art. 12 PPWR)."
- [WYSOKA][SPÓJN] Pilotaż „5–10 sklepów" (L1315) vs „5–15 sklepów" (L1473) → ujednolicić.
- [WYSOKA][JĘZYK] L1474 pytanie FAQ głosem sprzedawcy „Czy mogę pomóc sieci wybrać…" → „Czy pomożecie nam dobrać…".
- [ŚREDNIA][MERYT] L1475 „System „Mehrweg" … działa od 35 lat" – fałszywa precyzja → „Wielorazowe opakowania transportowe (Mehrweg) są standardem niemieckiego handlu spożywczego od lat 90. XX wieku."; L1327/L1338 „kaucja od 2029" doprecyzować „(wymóg unijny od 2029 r.; w Polsce działa od 1 października 2025 r.)"; L1326 „sieć jako operator" – kolizja z ustawowym „operatorem systemu kaucyjnego" → „jako dystrybutor końcowy"; L1241 „w 70% na opakowaniach jednorazowych" – liczba bez źródła → zmiękczyć; L1278 „Polskie spółki sieci należą do międzynarodowych grup" – fałszywe dla Dino → „Wiele polskich sieci…"; L1323/L1326 dwie karty z tą samą etykietą „Art. 29" → „Art. 29 ust. 1" i „Art. 29 ust. 6"; opcjonalnie do „UC100" dopisać kotwicę „(termin na krajowe przepisy o karach: 12 lutego 2027 r.)".
- [ŚREDNIA][SPÓJN] L1315 „Trzy ścieżki" to w istocie etapy → „Trzy etapy"; L1304 chip „Bez fumigacji EPAL" → „Bez obróbki ISPM-15".
- [ŚREDNIA][JĘZYK] L1277 „nacisk od sieci-matek" → „presja ze strony central"; L1259/L1448 „ROP-opakowania / ROP-napoje" → „ROP za opakowania / kaucja + ROP za napoje"; L1268 dodać „r."; L1448 szyk „najbardziej regulacyjnie wrażliwa" → „najbardziej wrażliwa regulacyjnie"; „wielorazowe" (×3) vs kampanijne „wielokrotnego użytku" → ujednolicić; „folia stretch", „hot-stamp" – ZOSTAWIĆ (standard branżowy; opcjonalnie przy pierwszym użyciu „hot-stamp (tłoczenie na gorąco)").

### #10 E-commerce i fulfillment – PROBLEMY
- [WYSOKA][SPÓJN] L1251 „Karton wraca pusty z konsumenta do DC w 8–14% paczek. Pusty karton zajmuje tę samą objętość co pełny…" – wywód nielogiczny (kartonu jednorazowego nikt nie odsyła; argument dotyczy opakowań zwrotnych) → „Zwroty to 8–14% paczek, a opakowanie zwrotne wraca od konsumenta do DC puste – sztywna skrzynka zajmuje wtedy tyle samo miejsca co pełna. Składane skrzynki redukują objętość po złożeniu do 84%."
- [WYSOKA][MERYT] L1224 „Polska ma **4 lata przewagi** nad regionem DACH na tym kroku – Niemcy budują … (Mehrweg) od 2024 r." – liczba niespójna wewnętrznie → oprzeć przewagę na infrastrukturze paczkomatów, usunąć „4 lata" i kalkę „na tym kroku".
- [ŚREDNIA][MERYT] L1318 karta Art. 50 „(od 2029 r.)" myli polskiego czytelnika → „w Polsce działa od 1 października 2025 r.; art. 50 PPWR wymaga systemów w całej UE od 2029 r."; L1316 karta Art. 24 bez daty → dodać „od 1 stycznia 2030 r."; L1317 dopisek „także w handlu elektronicznym" przy ust. 6 – bez pokrycia w bazie → usunąć/zmiękczyć; L1241 „ok. 85% paczek" vs L1242 (5–8 mln z 12 mln = 42–67%) → uspójnić lub usunąć „85%"; statystyki L1251/L1269 bez źródła → oznaczyć jako szacunki.
- [ŚREDNIA][SPÓJN] L1197 „40% ponownego użycia od 2030 r." vs „do 2030 r." wszędzie indziej → „do 2030 r."; L1234 H2 „Cztery wyzwania, na które PPWR daje cztery odpowiedzi" – odpowiedzi dają opakowania, nie PPWR → „Cztery wyzwania e-commerce – i cztery odpowiedzi opakowań zwrotnych"; L1307 „PPWR zmienia to fundamentalnie" – doprecyzować względem wyłączenia tektury (ust. 4 lit. d + art. 24).
- [ŚREDNIA][JĘZYK] L1242 zdanie rozsypane „…1 mln paczek miesięcznie używa się … + 12–18 ton folii" → „obsługującym 1 mln paczek miesięcznie zużywa się rocznie … i 12–18 ton folii stretch"; L1224 „oddaje skrzynkę w paczkomat" → „do paczkomatu"; L1455 „Czy Allegro, InPost, DPD są objęci?" → „…i DPD są objęte PPWR?"; L1460 zbędny przecinek przed „oraz"; L1460 „z fulfillment 3PL" → „z fulfillmentem 3PL"; title L5 „dla e-commerce i fulfillment" → „i fulfillmentu" (meta description już odmienia).

### index.html (hub deweloperski – łagodnie)
- L102 „wejście w życie 12 sierpnia 2026 r." – konflacja dat (poprawnie: stosowanie); L168/L173 „Art. 29(3)" i L190 „Art. 29(1)" – stare etykiety ustępów (poprawnie: ust. 1 transport, ust. 2 wewnątrzfirmowy); L122 „95% reuse u OEM-ów" – liczba bez źródła i bez pokrycia na stronie #01; L223 cudzysłów „…Centrum projektu" zamykany prostym ".

## C. TYPOGRAFIA (lint mechaniczny)
- Cudzysłowy mieszane „…" (otwarcie polskie, zamknięcie proste): #04 L1318 „pułapką", #09 L1475 „Mehrweg", index L223 – zamienić na „…”. (10 pozostałych wystąpień „endless loop" siedzi w komentarzu JS – niewidoczne.)
- Em dash: 0 w treści widocznej (10/10). „Państwo/Wy": 0. „Bekuplast" wielką: 0. Dwukropki w H1–H3: 0. Emoji: 0.

## D. AKTUALNOŚĆ REGULACYJNA (na 3.07.2026)
Werdykt: **brak konfliktów** z treścią stron; są nowości warte uwzględnienia.
1. **Termin 12.08.2026 utrzymany** – przemysł wnioskował o odroczenie, KE odmówiła (pisemnie, komisarz Roswall). Strony poprawne.
2. **Akt delegowany (UE) 2026/429 (25.02.2026):** folie owijające palety i taśmy spinające wyłączone ze 100% wymogu ponownego użycia z art. 29 ust. 2–3. Strony NIE twierdzą, że folie/taśmy podlegają – brak konfliktu; przy „w praktyce pełny ponowny użytek" można dodać nawias o wyłączeniu folii/taśm (aktualizacja ekspercka, dobra do pokazania świeżości treści).
3. **Wytyczne KE C(2026) 3702 final (5.06.2026, Dz.Urz. 10.06.2026):** oficjalne FAQ/interpretacje PPWR (PFAS, cele reuse, ROP, DRS) – mocny materiał na aktualizację/nowy moduł „Wytyczne KE" przed 12.08.2026.
4. **Art. 12 etykiety:** akt wykonawczy KE (wymagany do 12.08.2026) na 3.07 nieprzyjęty; obowiązek = 12.08.2028 LUB 24 mies. od aktu (późniejszy termin). „Od 2028 r." na stronach formalnie poprawne → rekomendacja „planowo od sierpnia 2028 r." + monitorować.
5. **UC100:** projekt NIE przyjęty nawet przez RM (stan 1.07.2026), ROP przesunięty na 1.01.2027, kary do 2 mln zł tylko w projekcie. Sformułowania na #06/#09/#10 („w toku prac, wysokość nieprzesądzona") – **dokładnie zgodne ze stanem faktycznym**.
6. **Kaucja PL – nowelizacja z lutego 2026:** zwroty bez paragonu; browary mogą prowadzić własne systemy zbiórki butelek szklanych do końca 2028 r. – wartościowy news dla strony #03 (skrzynki na piwo!).

## E. REKOMENDOWANE PAKIETY POPRAWEK
- **Pakiet A – twarde błędy i wycieki (przed kolejną publikacją):** wszystkie [WYSOKA] z sekcji B + wzorce A1–A3 (pseudocytaty, sticky-hint, „– Art.") + cudzysłowy z sekcji C. ~45 zmian.
- **Pakiet B – spójność i język ([ŚREDNIA]):** ujednolicenia (CO₂, 84%, PFAS-ograniczenie, 100+ cykli, e-com, poolingowe, tier, KLT/VDA), poprawki językowe per strona. ~70 zmian.
- **Pakiet C – decyzje klienta / opcjonalne:** RODO (cel przetwarzania), microcopy action-step, dobór case studies per branża, kalendarz zbiorów #07, moduł „Wytyczne KE 5.06.2026", wzmianka o akcie 2026/429, „planowo od sierpnia 2028", walidacje liczb (VW C-Box/BMW SuperRack, ±0,3 mm, 60–75%, 70% DC, 2–4 tys. komponentów, 12–18 mies., 400+ magazynów, Mehrweg).

*Raport: audyt v12→v13, sesja 3.07.2026. Recenzje: 5 agentów par stron + spójność + regulacje; wszystkie cytaty zweryfikowane grepem w źródłach.*
