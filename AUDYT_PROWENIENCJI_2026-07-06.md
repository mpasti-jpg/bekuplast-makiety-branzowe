# Audyt proweniencji danych – 10 stron branżowych bekuplast

**Data:** 6 lipca 2026 · **Wersja treści:** live na `main` (@ 7b57fb0) · **Zlecenie:** feedback Moniki Sojki – czy liczby, daty, marki i cytaty na stronach mają pokrycie w rzeczywistości.

**Metoda:** 22 niezależnych audytorów (11 × ekstrakcja + 11 × adwersaryjna weryfikacja, wysoki poziom rozumowania). Każda wartość klasyfikowana wobec zweryfikowanej bazy faktów PPWR (EUR-Lex), publicznych norm technicznych i realiów rynkowych. Wyłapano **640 pojedynczych wartości** na 10 stronach + index.

> Ten dokument **nie nanosi poprawek**. Zgodnie z instrukcją: najpierw pełna inwentaryzacja „skąd to jest", potem decyzje i zmiany.

---

## Odpowiedź wprost: skąd pochodzą te dane

Treść stron powstawała w kilku sesjach generatywnych (AI). Po prześwietleniu każdej wartości dzieli się ona na cztery warstwy pochodzenia:

| Warstwa | Ile | Udział | Co to jest |
|---|--:|--:|---|
| ✅ Zweryfikowane zewnętrznie | 153 | 24% | Regulacje PPWR (artykuły, ustępy, daty, progi %) sprawdzone wobec EUR-Lex; prawo PL (kaucja 1.10.2025, status UC100) potwierdzone w źródłach urzędowych. |
| 📐 Norma / standard publiczny | 63 | 10% | Realne, nazwane normy weryfikowalne publicznie: IEC 61340-5-1 (ESD), VDA 4500 (KLT), ISPM-15, paleta EUR, rozp. (UE) nr 10/2011. |
| 🏭 Dane bekuplast do potwierdzenia | 262 | 41% | Twierdzenia, które MOGĄ być prawdziwe, ale potwierdzić może je wyłącznie bekuplast: wymiary i parametry konkretnych produktów/serii, realni klienci i wolumeny wdrożeń, żywotność, zakres oferty. |
| 🔴 Wygenerowane przez AI bez źródła | 162 | 25% | **Sedno obaw Moniki.** Liczby i twierdzenia, których nie da się potwierdzić żadnym źródłem. |

**Najuczciwiej, jak potrafię:** warstwa 🔴 (162 pozycje) to wartości, które **nie pochodzą z żadnego zbioru danych – nie zmierzyliśmy ich, nie mamy na nie źródła**. Powstały jako prawdopodobne, „brzmiące wiarygodnie" ilustracje wygenerowane przez model językowy. To jest **zgadywanie / uprawdopodabnianie, a nie twarde dane.** Tak – w tym sensie są „wymyślone": model przewidział wartość pasującą do kontekstu, nie odczytał jej z rzeczywistości.

Twoje przykłady należą dokładnie do tej warstwy (wszystkie ze strony #07 Rolnictwo):

- „**Sadownik z 50+ ha używa 8 000–25 000 skrzynek w cyklu**" → 🔴 wygenerowane; brak jakiegokolwiek źródła.
- „**Zwrot z inwestycji 18–28 miesięcy dla sadu 25+ ha**" → 🔴 wygenerowane.
- „**Drewniane skrzynki sadownicze niskiej jakości wytrzymują zwykle 2–4 lata**" → 🔴 wygenerowane; dodatkowo twierdzenie o cudzym (nie-bekuplast) produkcie.
- „**Skrzynki bekuplast EURO są kompatybilne z systemami dystrybucyjnymi Lidl, Biedronka, Carrefour – eliminacja przeładunku**" → 🔴 wygenerowane; **ryzykowne twierdzenie o osobach trzecich** (sugeruje potwierdzoną relację / kompatybilność techniczną z sieciami). Rekomendacja: **usunąć**.

**Co dalej z 162 pozycjami 🔴 (rozkład rekomendacji audytu):**
- **34 → USUNĄĆ** – twierdzenia o osobach trzecich (kompatybilność z systemami sieci/OEM, nazwy „VW C-Box / BMW SuperRack", skutki u klientów) oraz nazwy niemożliwe do potwierdzenia.
- **49 → OZNACZYĆ JAKO SZACUNEK** – liczby możliwe do utrzymania wyłącznie z jawnym „wg szacunków bekuplast", o ile bekuplast potwierdzi rząd wielkości.
- **72 → ZMIĘKCZYĆ** – usunąć fałszywą precyzję (superlatywy, krotności „X×", konkretne widełki bez pokrycia).
- **6 → zostawić** – nieszkodliwy copy interfejsu (np. „Oblicz koszt PPWR w 2 min").

Strony z największą liczbą pozycji 🔴: **#09 Handel/FMCG (27)**, **#01 Motoryzacja (22)**, **#10 E-commerce (22)**, **#05 Intralogistyka (18)**, **#03 Napoje (15)**, **#07 Rolnictwo (14)**.

## Ważne zastrzeżenie do „✅ zweryfikowanych"

„✅" oznacza „sprawdzone przez nas wobec EUR-Lex / źródeł urzędowych", a **nie opinię prawną**. Historia tego projektu pokazała, że część „pewnych" faktów była początkowo BŁĘDNA – m.in. „art. 7" zamiast „art. 24", pomylone ustępy art. 29, zmyślony próg „2 mln EUR", sprzeczność „70% do 2030 dla piwa" – i wymagała korekty w kolejnych rewizjach. To potwierdza obawę Moniki: nawet brzmiące pewnie fakty regulacyjne trzeba było weryfikować u źródła. Finalną walidację prawną PPWR przed publikacją produkcyjną powinna potwierdzić kancelaria (MMLC).

## Jak czytać tabele

- Kolumna **Prow.**: ✅ zewn. zweryfikowane · 📐 norma publiczna · 🏭 dane bekuplast do potwierdzenia · 🔴 wygenerowane przez AI bez źródła.
- Kolumna **Rekom.**: `ZOSTAW` · `POTWIERDZ_BEKUPLAST` · `OZNACZ_SZACUNEK` · `ZMIEKCZ` · `USUN`.
- W sekcjach per strona pozycje 🔴 są na górze (najpilniejsze). Na końcu dokumentu – **załącznik zbiorczy wszystkich 162 pozycji 🔴** z uzasadnieniem i rekomendacją.

## Rekomendowany proces (po Twojej decyzji)

1. **🏭 (262)** – najliczniejsza warstwa: bekuplast dostarcza realne dane (wymiary/serie/parametry, lista klientów i wolumeny wdrożeń, żywotność) albo pozycję zmiękczamy/usuwamy. Przy klientach i markach – zgody + walidacja znaków towarowych (MMLC).
2. **🔴 (162)** – decyzja per pozycja wg rekomendacji: 34 usunąć, 49 oznaczyć jako szacunek, 72 zmiękczyć, 6 zostawić.
3. **✅ / 📐 (216)** – zostają; finalna walidacja prawna PPWR przed produkcją.

Po Twojej decyzji (np. „usuń wszystkie USUN, zmiękcz ZMIĘKCZ, przy OZNACZ_SZACUNEK czekamy na dane bekuplast") przygotuję konkretne zmiany na stronach – z podglądem i diffem przed publikacją.

---

## Podsumowanie ilościowe

| Strona | Σ | 🔴 AI bez źródła | 🏭 bekuplast | 📐 norma | ✅ zewn. |
|---|--:|--:|--:|--:|--:|
| #01 Motoryzacja i automotive | 60 | 22 | 23 | 8 | 7 |
| #02 Przetwórstwo żywności | 70 | 9 | 33 | 10 | 18 |
| #03 Napoje (pillar) | 65 | 15 | 28 | 4 | 18 |
| #04 Farmacja i kosmetyki | 52 | 8 | 22 | 5 | 17 |
| #05 Intralogistyka i magazyn | 65 | 18 | 25 | 9 | 13 |
| #06 Logistyka i transport (3PL) | 55 | 9 | 25 | 7 | 14 |
| #07 Rolnictwo i ogrodnictwo | 56 | 14 | 21 | 7 | 14 |
| #08 Produkcja przemysłowa | 55 | 12 | 25 | 4 | 14 |
| #09 Handel detaliczny i FMCG | 68 | 27 | 21 | 3 | 17 |
| #10 E-commerce i fulfillment | 59 | 22 | 20 | 1 | 16 |
| #IDX index (hub deweloperski) | 35 | 6 | 19 | 5 | 5 |
| **RAZEM** | **640** | **162** | **262** | **63** | **153** |

---

## Strona #01 – Motoryzacja i automotive

Pozycji: 60 · 🔴 22 · 🏭 23 · 📐 8 · ✅ 7

| # | Wartość / fragment | Sekcja | Prow. | Źródło / podstawa | Rekom. |
|---|---|---|:--:|---|---|
| 1 | **najlepiej przygotowana** – Branża najlepiej przygotowana na PPWR w Polsce | H1 lede / TL;DR (L1196, L… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 2 | **od końca lat 80. XX w.** – OEM-y w regionie DACH (VW, BMW, Mercedes) działają w obiegu zamkniętym (closed-… | Kluczowe wnioski (L1223) | 🔴 | brak – wygenerowane przez AI; datowanie działania osób trze… | OZNACZ_SZACUNEK |
| 3 | **wszystkie OEM-y** – wszystkie OEM-y wymagają tego standardu | Kluczowe wnioski / FAQ (L… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 4 | **VW C-Box, BMW SuperRack, Mercedes Pool** – Pooling OEM (VW C-Box, BMW SuperRack, Mercedes Pool) to wewnętrzny system dystr… | Kluczowe wnioski (L1223) | 🔴 | brak – wygenerowane przez AI; nazwy własnych systemów pooli… | USUN |
| 5 | **tier 2/3** – Dostawcy tier 2/3 muszą się do niego dopasować | Kluczowe wnioski (L1223) | 🔴 | brak – ogólne twierdzenie o łańcuchu dostaw bez źródła | ZMIEKCZ |
| 6 | **integracja z WMS OEM** – Branża potrzebuje doskonalenia operacyjnego – ograniczenia uszkodzeń, optymaliz… | Kluczowe wnioski (L1223) | 🔴 | brak – twierdzenie o integracji z systemem WMS osoby trzeci… | ZMIEKCZ |
| 7 | **odrzucenie przez OEM** – Pojemnik niezgodny ze standardem zostaje odrzucony przez OEM | Wyzwanie 01 (L1241) | 🔴 | brak – twierdzenie o zachowaniu/procedurze osoby trzeciej (… | ZMIEKCZ |
| 8 | **kilka tysięcy komponentów; lata 90.** – Współczesny samochód ma kilka tysięcy komponentów elektronicznych – wielokrotni… | Wyzwanie 02 (L1250) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 9 | **VW / BMW / Mercedes** – Projektowane pod systemy poolingowe VW / BMW / Mercedes | Produkty – Indywidualne p… | 🔴 | brak – twierdzenie o projektowaniu pod nazwane systemy pool… | ZMIEKCZ |
| 10 | **1988 r.** – VDA zdefiniowała standaryzowany, poolowalny system pojemników KLT już w 1988 r. | Sekcja PPWR (L1296) | 🔴 | brak – data 1988 nie potwierdzona w bazie faktów ani public… | OZNACZ_SZACUNEK |
| 11 | **najlepiej przygotowany sektor** – Polska branża automotive ... jest najlepiej przygotowanym sektorem na PPWR | Sekcja PPWR (L1296) | 🔴 | brak – wygenerowane przez AI, superlatyw bez metryki | ZMIEKCZ |
| 12 | **kod QR od 2028 r.** – Oznakowanie opakowań nośnikiem danych (kod QR) wymagane przez PPWR od 2028 r. | Karta PPWR Etykiety / FAQ… | 🔴 | brak – art. 12 / obowiązek QR 2028 NIE występuje w dostarcz… | OZNACZ_SZACUNEK |
| 13 | **najbardziej zaawansowany sektor** – Sektor motoryzacyjny należy do najbardziej zaawansowanych w stosowaniu opakowań… | blockquote (L1318) | 🔴 | brak – twierdzenie ujęte w blockquote z podpisem EUR-Lex, c… | ZMIEKCZ |
| 14 | **kilka minut** – Sprawdź gotowość dostawcy tier 1/2/3 w kilka minut | Następne kroki – audyt (L… | 🔴 | brak – deklaracja UX narzędzia | ZOSTAW |
| 15 | **2 min** – Oblicz koszt PPWR w 2 min. | Sekcja koszt (L1400) | 🔴 | brak – deklaracja UX kalkulatora | ZOSTAW |
| 16 | **CO₂** – kalkulator pokaże próg rentowności i strukturę emisji CO₂ | Sekcja koszt (L1400) | 🔴 | brak – deklaracja funkcji kalkulatora | ZOSTAW |
| 17 | **wszystkie OEM-y wymagają** – Wszystkie OEM-y (VW, BMW, Mercedes, Toyota, Stellantis) wymagają tego standardu… | FAQ (L1444) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 18 | **VW C-Box, BMW SuperRack, Mercedes Pool** – Czy macie pojemniki kompatybilne z VW C-Box, BMW SuperRack, Mercedes Pool? | FAQ (L1445) | 🔴 | brak – nazwy systemów niemożliwe do publicznego potwierdzen… | USUN |
| 19 | **konfiguracja pod pooling OEM; pool-ID** – Możliwa jest indywidualna konfiguracja pod konkretne systemy poolingowe OEM (zn… | FAQ (L1445, L1449) | 🔴 | brak – twierdzenie o dopasowaniu do systemów poolingowych o… | ZMIEKCZ |
| 20 | **ECU, sensory, infotainment, EV** – Stosowane do podzespołów ECU, sensorów, modułów infotainment, bateryjnych kompo… | FAQ (L1446) | 🔴 | brak – ogólne zastosowania, ilustracyjne | ZOSTAW |
| 21 | **od końca lat 80.; art. 29** – działa w obiegu zamkniętym (closed-loop) RTP od końca lat 80. XX w., spełniając… | FAQ (L1447) | 🔴 | brak – datowanie „od końca lat 80." bez źródła (twierdzenie… | OZNACZ_SZACUNEK |
| 22 | **2026–2028; QR od 2028 r.** – Wyzwanie na lata 2026–2028 ... oznakowanie opakowań nośnikiem danych (kod QR), … | FAQ (L1447) | 🔴 | brak – obowiązek QR 2028 / art. 12 NIE występuje w dostarcz… | OZNACZ_SZACUNEK |
| 23 | **vol 80** – Primary keyword: opakowania dla przemysłu motoryzacyjnego (vol 80) | [DEV] banner (L1148) | 🏭 | wewnętrzne dane SEO kampanii (strefa DEV, nieprodukcyjna) | POTWIERDZ_BEKUPLAST |
| 24 | **400–700/m** – Potencjał 12m: 400–700/m | [DEV] banner (L1149) | 🏭 | wewnętrzna prognoza SEO kampanii (strefa DEV) | POTWIERDZ_BEKUPLAST |
| 25 | **6 fraz TOP 5 GSC** – najmocniejsza obecna strona (6 fraz TOP 5 GSC) | [DEV] banner (L1142) | 🏭 | Google Search Console kampanii (strefa DEV) | POTWIERDZ_BEKUPLAST |
| 26 | **10 stron** – Makiety branżowe (10) | [DEV] proto-nav (L1155) | 🏭 | zakres kampanii (strefa DEV) | ZOSTAW |
| 27 | **dziesiąte części mm** – tolerancje rzędu dziesiątych części milimetra | Wyzwanie 01 (L1241) | 🏭 | tylko bekuplast może potwierdzić parametr produktu | POTWIERDZ_BEKUPLAST |
| 28 | **RL-KLT 6280** – VDA-RL-KLT 6280 | Wyzwanie 01 / produkty (L… | 🏭 | tylko bekuplast może potwierdzić numer artykułu | POTWIERDZ_BEKUPLAST |
| 29 | **silverline, contecline** – silverline / contecline ... AKL · shuttle · miniload | Wyzwanie 03 / produkty (L… | 🏭 | tylko bekuplast może potwierdzić nazwy serii | POTWIERDZ_BEKUPLAST |
| 30 | **integracja z AKL/shuttle** – Stała presja OEM na redukcję kosztów i integrację z AKL/shuttle w zakładach tie… | Wyzwanie 03 (L1259) | 🏭 | tylko bekuplast może potwierdzić kompatybilność produktu z … | POTWIERDZ_BEKUPLAST |
| 31 | **±0,3 mm** – silverline ... tolerancje wymiarowe ±0,3 mm | Produkty (L1283) | 🏭 | tylko bekuplast może potwierdzić tolerancję serii | POTWIERDZ_BEKUPLAST |
| 32 | **contecline – wysokie obciążenia** – contecline ... Magazyny automatyczne i wysokie obciążenia | Produkty (L1284) | 🏭 | tylko bekuplast może potwierdzić właściwości serii contecli… | POTWIERDZ_BEKUPLAST |
| 33 | **skrzyniopalety** – Skrzyniopalety ... Komponenty wielkogabarytowe | Produkty (L1285) | 🏭 | tylko bekuplast może potwierdzić zakres oferty skrzyniopalet | POTWIERDZ_BEKUPLAST |
| 34 | **RFID** – pojemniki przygotowane pod RFID ułatwiają integrację | Karta PPWR Etykiety (L130… | 🏭 | tylko bekuplast może potwierdzić przygotowanie produktu pod… | POTWIERDZ_BEKUPLAST |
| 35 | **Rossmann, 2025, 160 000 pojemników** – ROSSMANN ... Intralogistyka sieci drogerii (DE) ... 2025 · 160 000 pojemników | Case Studies (L1354-1356) | 🏭 | tylko bekuplast może potwierdzić case study i wolumen | POTWIERDZ_BEKUPLAST |
| 36 | **Orbico, 2023, 46 000 pojemników** – Orbico ... Dystrybucja beauty i FMCG (PL) ... 2023 · 46 000 pojemników | Case Studies (L1362-1364) | 🏭 | tylko bekuplast może potwierdzić case study i wolumen | POTWIERDZ_BEKUPLAST |
| 37 | **Onninen, 2019, 40 000 pojemników, contecline** – Onninen ... Dystrybucja materiałów budowlanych (PL) – pojemniki contecline ... … | Case Studies (L1370-1372) | 🏭 | tylko bekuplast może potwierdzić case study i wolumen | POTWIERDZ_BEKUPLAST |
| 38 | **Auto Partner SA, 2022, 27 000 pojemników** – Auto Partner SA ... Dystrybucja części samochodowych (PL) ... 2022 · 27 000 poj… | Case Studies (L1378-1380) | 🏭 | tylko bekuplast może potwierdzić case study i wolumen | POTWIERDZ_BEKUPLAST |
| 39 | **silverline / contecline – AKL/shuttle** – Pojemniki silverline / contecline dla AKL i shuttle w zakładach tier-1 | Powiązane – Intralogistyk… | 🏭 | tylko bekuplast może potwierdzić serie i ich zastosowanie | POTWIERDZ_BEKUPLAST |
| 40 | **VDA-RL-KLT, VDA-R-KLT, pokrywy** – pełna gama VDA-RL-KLT i VDA-R-KLT oraz pokrywy podtrzymujące w standardzie VDA … | FAQ (L1445) | 🏭 | tylko bekuplast może potwierdzić zakres gamy produktów | POTWIERDZ_BEKUPLAST |
| 41 | **10⁴–10⁹ Ω** – pojemniki EURO-NORM ESD (rezystancja powierzchniowa 10⁴–10⁹ Ω) zgodne z IEC 613… | FAQ (L1446) | 🏭 | tylko bekuplast może potwierdzić rezystancję produktu (nazw… | POTWIERDZ_BEKUPLAST |
| 42 | **100+ cykli; 8–12 lat** – 100+ cykli rotacji w typowym poolingu OEM (8–12 lat eksploatacji) | FAQ (L1448) | 🏭 | tylko bekuplast może potwierdzić żywotność produktu (standa… | POTWIERDZ_BEKUPLAST |
| 43 | **corocznie** – Pojemniki VDA wymagają corocznego mycia i kontroli wymiarowej | FAQ (L1448) | 🏭 | tylko bekuplast może potwierdzić reżim serwisowy | POTWIERDZ_BEKUPLAST |
| 44 | **500–1 000 szt.; 8–12 tygodni** – Minimum produkcji to 500–1 000 sztuk, a czas projektu z prototypem wynosi 8–12 … | FAQ (L1449) | 🏭 | tylko bekuplast może potwierdzić MOQ i czas projektu | POTWIERDZ_BEKUPLAST |
| 45 | **24 godziny** – Kontakt do 24 godzin | Kontakt (L1460) | 🏭 | deklaracja obsługi bekuplast (z briefu) | POTWIERDZ_BEKUPLAST |
| 46 | **VDA 4500; tier 1/2/3** – Pojemniki KLT i skrzynki VDA 4500 dla dostawców tier 1/2/3 do OEM | meta description / lede | 📐 | VDA 4500 (KLT) – realny standard zrzeszenia VDA; nie występ… | ZOSTAW |
| 47 | **VW, Stellantis, BMW, Mercedes, Toyota** – do OEM-ów (VW, Stellantis, BMW, Mercedes, Toyota) | H1 lede (L1196) | 📐 | powszechnie znane koncerny OEM jako grupa docelowa (fakt og… | ZOSTAW |
| 48 | **297×198, 396×297, 594×396 mm** – moduły podstawy 297×198, 396×297 i 594×396 mm | Kluczowe wnioski / FAQ (L… | 📐 | VDA 4500 – wymiary modułów KLT; nazwa normy realna, konkret… | ZOSTAW |
| 49 | **396×297 mm** – VDA 4500 · 396×297 mm | Wyzwanie 01 karta produkt… | 📐 | VDA 4500 – wymiar modułu KLT; nazwa normy realna, wymiar sp… | ZOSTAW |
| 50 | **IEC 61340-5-1** – Pojemnik EURO-NORM ESD ... IEC 61340-5-1 | Wyzwanie 02 / produkty / … | 📐 | IEC 61340-5-1 (norma ESD) – realna, publiczna nazwa normy; … | ZOSTAW |
| 51 | **ISPM-15** – Palety Euro ... Plastikowe – nie wymagają obróbki ISPM-15 (eksport) | Produkty (L1286) | 📐 | ISPM-15 (IPPC) – zakres ograniczony do drewna; potwierdzone… | ZOSTAW |
| 52 | **paleta EUR/Euro; 594×396 mm** – 594×396 mm (moduł VDA) | Produkty – Palety Euro (L… | 📐 | paleta EUR 1200×800 – powszechny standard; moduł VDA – nazw… | ZOSTAW |
| 53 | **VDA 4500 / KLT** – VDA 4500 to niemiecki standard zrzeszenia przemysłu motoryzacyjnego definiujący… | FAQ (L1444) | 📐 | VDA 4500 – realny, publicznie znany standard VDA; nie wystę… | ZOSTAW |
| 54 | **art. 29 ust. 2; od 2030** – Od 2030 r. opakowania transportowe w obiegu między zakładami tej samej firmy mu… | Karta PPWR (L1304) | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 2 (baza faktów A1) | ZOSTAW |
| 55 | **40% (2030) / 70% (2040)** – Co najmniej 40% ponownego użycia opakowań transportowych do 2030 r. (cel wiążąc… | Karta PPWR Art. 29 ust. 1… | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 1 (baza faktów A2) | ZOSTAW |
| 56 | **podmioty stosujące opakowania transportowe** – obowiązek spoczywa na podmiotach stosujących opakowania transportowe | Karta PPWR Art. 29 ust. 1… | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 1 (baza faktów C2) | ZOSTAW |
| 57 | **art. 5 PFAS; 12 sierpnia 2026 r.** – Ograniczenie PFAS w opakowaniach mających kontakt z żywnością – stosowane od 12… | Karta PPWR (L1306) | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 5; data stosowania art. 71… | ZOSTAW |
| 58 | **40% (2030) / 70% (2040)** – co najmniej 40% do 2030 r. (cel wiążący) i 70% do 2040 r. (cel aspiracyjny) | blockquote (L1318) | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 1 (baza faktów A2) | ZMIEKCZ |
| 59 | **rozp. (UE) 2025/40, art. 29** – na podstawie rozporządzenia (UE) 2025/40 (PPWR), art. 29 – EUR-Lex | cite blockquote (L1318) | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 | ZOSTAW |
| 60 | **art. 29 ust. 2** – Obieg zamknięty między zakładami (art. 29 ust. 2 PPWR) | Powiązane – Produkcja prz… | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 2 (baza faktów A1) | ZOSTAW |


## Strona #02 – Przetwórstwo żywności

Pozycji: 70 · 🔴 9 · 🏭 33 · 📐 10 · ✅ 18

| # | Wartość / fragment | Sekcja | Prow. | Źródło / podstawa | Rekom. |
|---|---|---|:--:|---|---|
| 1 | **m.in. sieci handlowych (jako adresat)** – dotyczy podmiotów stosujących te opakowania, m.in. sieci handlowych | Kluczowe wnioski | 🔴 | brak – baza faktów C2 wprost ostrzega: adresat to 'podmioty… | ZMIEKCZ |
| 2 | **PL odstaje od DACH** – Piekarnie i mleczarnie w Polsce wyraźnie odstają od zakładów z regionu DACH | Kluczowe wnioski | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | USUN |
| 3 | **Lidl, Biedronka** – Jako producent dostarczający do sieci (np. Lidl, Biedronka) odczujesz to podwój… | Wyzwanie 03 | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne; twierdzenie… | USUN |
| 4 | **sieci wymagają wielokrotnego użytku (już dziś)** – sieci już dziś wymagają od dostawców opakowań wielokrotnego użytku | Wyzwanie 03 | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | USUN |
| 5 | **IV kwartał** – Skrzynki na pieczywo – sezonowy szczyt w IV kwartale | Wyzwanie 04 | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 6 | **4× wyższy** – notują w grudniu (Boże Narodzenie, Sylwester) szczyt nawet 4× wyższy niż średni… | Wyzwanie 04 | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 7 | **sieci przenoszą wymagania na dostawców** – a sieci dodatkowo przenoszą te wymagania na dostawców | Karta artykułu ust. 1 | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne; twierdzenie… | USUN |
| 8 | **pełna kompatybilność z systemami dystrybucyjnymi** – pełna kompatybilność z systemami dystrybucyjnymi | FAQ – mleczarnie | 🔴 | brak – twierdzenie o kompatybilności produktu z (nienazwany… | ZMIEKCZ |
| 9 | **recykling w 100%** – Tworzywo HDPE ... nadaje się do recyklingu w 100% | FAQ – papier/drewno | 🔴 | brak – 'w 100%' nieweryfikowalne; baza dopuszcza tylko jako… | ZMIEKCZ |
| 10 | **HDPE bez PFAS (lede)** – HDPE bez PFAS | lede (H1) | 🏭 | tylko bekuplast może potwierdzić skład materiałowy własnych… | POTWIERDZ_BEKUPLAST |
| 11 | **HDPE bekuplast bez PFAS** – Plastikowe pojemniki HDPE bekuplast nigdy nie zawierały PFAS | Kluczowe wnioski | 🏭 | tylko bekuplast może potwierdzić skład materiałowy własnych… | POTWIERDZ_BEKUPLAST |
| 12 | **90°C** – mycie w 90°C bez deformacji | Kluczowe wnioski | 🏭 | tylko bekuplast może potwierdzić odporność temperaturową pr… | POTWIERDZ_BEKUPLAST |
| 13 | **bakeline** – bakeline to nasza flagowa seria dla piekarni | Kluczowe wnioski | 🏭 | tylko bekuplast może potwierdzić nazwę i pozycjonowanie wła… | POTWIERDZ_BEKUPLAST |
| 14 | **serie EURO-NORM** – Dla mięsa i nabiału mamy osobne serie EURO-NORM | Kluczowe wnioski | 🏭 | tylko bekuplast może potwierdzić zakres oferty; EURO-NORM t… | POTWIERDZ_BEKUPLAST |
| 15 | **CFBA 2356** – CFBA 2356 | Wyzwanie 01 / karta produ… | 🏭 | tylko bekuplast może potwierdzić symbol produktu | POTWIERDZ_BEKUPLAST |
| 16 | **HDPE pierwotny, bez PFAS** – HDPE pierwotny · bez PFAS | Wyzwanie 01 / karta produ… | 🏭 | tylko bekuplast może potwierdzić skład materiałowy | POTWIERDZ_BEKUPLAST |
| 17 | **90°C** – HACCP – gładkie ściany, brak zacieków, mycie w 90°C | Wyzwanie 02 | 🏭 | tylko bekuplast może potwierdzić parametr mycia; niespójne … | POTWIERDZ_BEKUPLAST |
| 18 | **90°C** – gładkie ściany · mycie 90°C | Wyzwanie 02 / karta produ… | 🏭 | tylko bekuplast może potwierdzić parametr | POTWIERDZ_BEKUPLAST |
| 19 | **10-letnia gwarancja dostępności** – bakeline ... 10-letnia gwarancja dostępności | Wyzwanie 04 / karta produ… | 🏭 | tylko bekuplast może potwierdzić warunki gwarancji | POTWIERDZ_BEKUPLAST |
| 20 | **bakeline** – bakeline, mięso i nabiał – nasze flagowe serie | Produkty (H2) | 🏭 | tylko bekuplast może potwierdzić nazwę serii | POTWIERDZ_BEKUPLAST |
| 21 | **CFBA 2356 – składany, FCM** – Składany pojemnik do kontaktu z żywnością dla piekarni, mleczarni i zakładów mi… | Produkty / kafelek | 🏭 | tylko bekuplast może potwierdzić spec produktu | POTWIERDZ_BEKUPLAST |
| 22 | **basicline** – basicline ... Mleczarnie, nabiał | Produkty / kafelek | 🏭 | tylko bekuplast może potwierdzić nazwę serii | POTWIERDZ_BEKUPLAST |
| 23 | **basicline plus** – basicline plus ... Duże objętości | Produkty / kafelek | 🏭 | tylko bekuplast może potwierdzić nazwę serii | POTWIERDZ_BEKUPLAST |
| 24 | **próg rentowności (kalkulator)** – sprawdź próg rentowności | Następne kroki 02 / Koszt | 🏭 | tylko bekuplast może potwierdzić działanie własnego kalkula… | POTWIERDZ_BEKUPLAST |
| 25 | **Rossmann, 2025, 160 000** – ROSSMANN ... Intralogistyka sieci drogerii (DE) ... 2025 160 000 pojemników | Case Studies | 🏭 | tylko bekuplast może potwierdzić case study i wolumen | POTWIERDZ_BEKUPLAST |
| 26 | **Orbico, 2023, 46 000** – Orbico ... Dystrybucja beauty i FMCG (PL) ... 2023 46 000 pojemników | Case Studies | 🏭 | tylko bekuplast może potwierdzić case study i wolumen | POTWIERDZ_BEKUPLAST |
| 27 | **Onninen, contecline, 2019, 40 000** – Onninen ... Dystrybucja materiałów budowlanych (PL) – pojemniki contecline ... … | Case Studies | 🏭 | tylko bekuplast może potwierdzić case study, serię i wolumen | POTWIERDZ_BEKUPLAST |
| 28 | **Auto Partner SA, 2022, 27 000** – Auto Partner SA ... Dystrybucja części samochodowych (PL) ... 2022 27 000 pojem… | Case Studies | 🏭 | tylko bekuplast może potwierdzić case study i wolumen | POTWIERDZ_BEKUPLAST |
| 29 | **próg rentowności, emisja CO₂** – kalkulator pokaże próg rentowności i strukturę emisji CO₂ | Koszt PPWR | 🏭 | tylko bekuplast może potwierdzić funkcje kalkulatora | POTWIERDZ_BEKUPLAST |
| 30 | **rozp. (UE) nr 10/2011 (wszystkie serie)** – wszystkie serie przeznaczone dla branży spożywczej mają dopuszczenie wg rozporz… | FAQ – dopuszczenie | 🏭 | norma 10/2011 realna (D4), ale 'wszystkie serie mają dopusz… | POTWIERDZ_BEKUPLAST |
| 31 | **certyfikat + testy migracji** – zapewniamy certyfikat materiałowy HDPE pierwotnego oraz testy migracji zgodne z… | FAQ – dopuszczenie | 🏭 | tylko bekuplast może potwierdzić posiadanie certyfikatów i … | POTWIERDZ_BEKUPLAST |
| 32 | **HDPE bez PFAS, art. 5, 12.08.2026** – pierwotny polietylen HDPE bez dodatków per- i polifluoroalkilowych. Ograniczeni… | FAQ – PFAS | 🏭 | art. 5/data ZEWN_ZWERYFIKOWANE (D1/C3); skład produktu 'bez… | POTWIERDZ_BEKUPLAST |
| 33 | **do 95°C** – Pojemniki bakeline są odporne na mycie w temperaturze do 95°C, bez deformacji a… | FAQ – temperatury | 🏭 | tylko bekuplast może potwierdzić; niespójne z 90°C w Kluczo… | POTWIERDZ_BEKUPLAST |
| 34 | **laser / hot-stamp / in-mould** – znakowanie laserowe, termiczne (hot-stamp) lub w formie (in-mould, najtrwalsze) | FAQ – znakowanie | 🏭 | tylko bekuplast może potwierdzić metody znakowania; 'najtrw… | POTWIERDZ_BEKUPLAST |
| 35 | **system poolingowy** – numer w systemie poolingowym na potrzeby dystrybucji | FAQ – znakowanie | 🏭 | tylko bekuplast może potwierdzić obsługę poolingu | POTWIERDZ_BEKUPLAST |
| 36 | **basicline + skrzynki przegrodowe** – pojemniki basicline + skrzynki przegrodowe dla butelek szklanych | FAQ – mleczarnie | 🏭 | tylko bekuplast może potwierdzić ofertę i nazwy serii | POTWIERDZ_BEKUPLAST |
| 37 | **8–12 lat** – jego żywotność to 8–12 lat | FAQ – papier/drewno | 🏭 | tylko bekuplast może potwierdzić żywotność własnego produkt… | POTWIERDZ_BEKUPLAST |
| 38 | **50 szt. / 500 szt.** – Minimum zamówienia to 50 sztuk dla pozycji katalogowych i od 500 sztuk dla wyko… | FAQ – warunki dostawy | 🏭 | tylko bekuplast może potwierdzić warunki zamówień (MOQ) | POTWIERDZ_BEKUPLAST |
| 39 | **2–4 tyg. / 8–12 tyg.** – Czas realizacji wynosi 2–4 tygodnie dla produktów standardowych i 8–12 tygodni … | FAQ – warunki dostawy | 🏭 | tylko bekuplast może potwierdzić czasy realizacji | POTWIERDZ_BEKUPLAST |
| 40 | **3–5 dni roboczych** – Dostawa na terenie całej Polski zajmuje 3–5 dni roboczych | FAQ – warunki dostawy | 🏭 | tylko bekuplast może potwierdzić czas dostawy | POTWIERDZ_BEKUPLAST |
| 41 | **24 godzin** – Kontakt do 24 godzin | Kontakt | 🏭 | tylko bekuplast może potwierdzić SLA kontaktu | POTWIERDZ_BEKUPLAST |
| 42 | **próbki produktów** – Możliwość pozyskania próbek produktów | Kontakt | 🏭 | tylko bekuplast może potwierdzić ofertę próbek | POTWIERDZ_BEKUPLAST |
| 43 | **rozp. (UE) nr 10/2011** – dopuszczenie wg rozporządzenia (UE) nr 10/2011 | lede (H1) | 📐 | rozp. Komisji (UE) nr 10/2011 (baza faktów D4) | ZOSTAW |
| 44 | **HACCP** – konstrukcja zgodna z HACCP | lede (H1) | 📐 | HACCP – powszechnie znany system bezpieczeństwa żywności | ZOSTAW |
| 45 | **papier fast food zawiera PFAS (jakościowo)** – Papierowe opakowania typu fast food często zawierają PFAS i od 12 sierpnia 2026… | Kluczowe wnioski | 📐 | badanie CHEM Trust/EEB 2021 – wariant bez liczby (baza fakt… | ZOSTAW |
| 46 | **BRC/IFS** – twardy wymóg audytowy sieci i certyfikacji (BRC/IFS) | Kluczowe wnioski | 📐 | BRC / IFS – realne standardy certyfikacji bezpieczeństwa ży… | ZOSTAW |
| 47 | **znaczna część (bez liczby)** – znaczna część jednorazowych opakowań papierowych typu fast food jest celowo pok… | Wyzwanie 01 | 📐 | badanie CHEM Trust/EEB 2021 – wariant bez liczby (baza fakt… | ZOSTAW |
| 48 | **zakres opakowań FCM** – pudełek na frytki, tacek i kubków na napoje gorące | Wyzwanie 01 | 📐 | baza faktów D1/D5 – przykładowe opakowania FCM objęte ogran… | ZOSTAW |
| 49 | **400×300, 600×400 mm** – Pojemniki EURO-NORM ... EURO 400×300 · 600×400 | Wyzwanie 03 / karta produ… | 📐 | EURO-NORM – standardowe wymiary modularne palety EUR (600×4… | ZOSTAW |
| 50 | **ROP** – rozszerzona odpowiedzialność producenta (ROP) | Sekcja PPWR (lead) | 📐 | ROP – powszechnie znany mechanizm rozszerzonej odpowiedzial… | ZOSTAW |
| 51 | **system kaucyjny, ROP, PPWR** – Kategoria spożywcza z najtwardszymi regulacjami – system kaucyjny, ROP oraz PPWR | Powiązane / Napoje | 📐 | system kaucyjny PL (1.10.2025) / ROP / PPWR – realne akty | ZOSTAW |
| 52 | **ISPM-15** – Skrzynki i palety drewniane wymagają przy eksporcie poza UE obróbki fitosanitar… | FAQ – papier/drewno | 📐 | ISPM-15 (IPPC) – norma fitosanitarna dla drewna (baza faktó… | ZOSTAW |
| 53 | **12.08.2026** – Ograniczenie PFAS od 12.08.2026 i PPWR | meta.description | ✅ | EUR-Lex rozp. (UE) 2025/40 art. 71 – stosowanie od 12.08.20… | ZOSTAW |
| 54 | **12 sierpnia 2026 r.** – przepisy stosuje się od 12 sierpnia 2026 r. | Kluczowe wnioski | ✅ | EUR-Lex 2025/40 art. 71 (baza faktów C3) | ZOSTAW |
| 55 | **art. 5 PPWR** – ograniczenie PFAS w opakowaniach do kontaktu z żywnością (art. 5 PPWR) | Kluczowe wnioski | ✅ | EUR-Lex 2025/40 art. 5 ust. 5–6 (baza faktów D1/D5) | ZOSTAW |
| 56 | **40% w 2030 r., art. 29 ust. 1** – cel ponownego użycia opakowań transportowych: 40% w 2030 r. (art. 29 ust. 1 PPW… | Kluczowe wnioski | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 – 40% (2030) (baza faktów A2) | ZOSTAW |
| 57 | **art. 5 PPWR** – Ograniczenie PFAS w opakowaniach do żywności (art. 5 PPWR) | Wyzwanie 01 | ✅ | EUR-Lex 2025/40 art. 5 (baza faktów D1/D5) | ZOSTAW |
| 58 | **12 sierpnia 2026 r.** – Od 12 sierpnia 2026 r. PPWR ogranicza zawartość PFAS w opakowaniach do kontaktu… | Wyzwanie 01 | ✅ | EUR-Lex 2025/40 art. 5/art. 71 (baza faktów C3/D1) | ZOSTAW |
| 59 | **40%, art. 29 ust. 1** – 40% ponownego użycia opakowań transportowych (art. 29 ust. 1) | Wyzwanie 03 | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (baza faktów A2) | ZOSTAW |
| 60 | **40% w 2030 r. + 'w tym sieci handlowych'** – Cel 40% w 2030 r. dotyczy podmiotów stosujących opakowania transportowe – w tym… | Wyzwanie 03 | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 – cel/rok (baza faktów A2); … | ZOSTAW |
| 61 | **art. 5, 12.08.2026** – ograniczenie PFAS w opakowaniach do kontaktu z żywnością (art. 5, od 12 sierpni… | Sekcja PPWR (H2/lead) | ✅ | EUR-Lex 2025/40 art. 5 / art. 71 (baza faktów D1/C3) | ZOSTAW |
| 62 | **art. 29, od 2030 r.** – cele ponownego użycia opakowań transportowych (art. 29, cele od 2030 r.) | Sekcja PPWR (lead) | ✅ | EUR-Lex 2025/40 art. 29 (baza faktów A) | ZOSTAW |
| 63 | **art. 5 PFAS – zakres FCM** – Dotyczy m.in. papieru tłuszczoodpornego, powłok barierowych, pudełek na frytki … | Karta artykułu (carousel) | ✅ | EUR-Lex 2025/40 art. 5 (baza faktów D1/D5) | ZOSTAW |
| 64 | **40% do 2030 r., art. 29 ust. 1 + 'm.in. sieci handlowych'** – Cel 40% ponownego użycia opakowań transportowych do 2030 r. dotyczy podmiotów s… | Karta artykułu (carousel) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 – cel/rok/ustęp (baza faktów… | ZOSTAW |
| 65 | **10% do 2030 r., art. 29 ust. 6** – Cele ponownego użycia opakowań na napoje (10% do 2030 r.) | Karta artykułu (carousel) | ✅ | EUR-Lex 2025/40 art. 29 ust. 6 (baza faktów A5) | ZOSTAW |
| 66 | **dystrybutorzy końcowi** – dotyczą dystrybutorów końcowych | Karta artykułu ust. 6 | ✅ | EUR-Lex 2025/40 art. 29 ust. 6 (baza faktów A5/C2) | ZOSTAW |
| 67 | **art. 29 ust. 7 – wyłączenie mleka** – Mleko i przetwory mleczne są z tego celu wyłączone (art. 29 ust. 7) | Karta artykułu ust. 6 | ✅ | EUR-Lex 2025/40 art. 29 ust. 7 (baza faktów – mapa ustępów,… | ZOSTAW |
| 68 | **12 sierpnia 2026 r.** – Ograniczenie PFAS ... stosuje się od 12 sierpnia 2026 r. i obejmuje m.in. papie… | blockquote (Następne krok… | ✅ | EUR-Lex 2025/40 art. 5 (baza faktów D1/D5) | ZOSTAW |
| 69 | **2025/40, art. 5, EUR-Lex** – na podstawie rozporządzenia (UE) 2025/40 (PPWR), art. 5 – EUR-Lex | cite blockquote | ✅ | EUR-Lex rozp. (UE) 2025/40, CELEX:32025R0040 | ZOSTAW |
| 70 | **art. 29 PPWR** – Sieci handlowe są Twoim odbiorcą – art. 29 PPWR wymusi na nich ponowne użycie o… | Powiązane / Handel detali… | ✅ | EUR-Lex 2025/40 art. 29 (baza faktów A) | ZOSTAW |


## Strona #03 – Napoje (pillar)

Pozycji: 65 · 🔴 15 · 🏭 28 · 📐 4 · ✅ 18

| # | Wartość / fragment | Sekcja | Prow. | Źródło / podstawa | Rekom. |
|---|---|---|:--:|---|---|
| 1 | **60–85%** – Redukcja stłuczek o 60–85%. | meta description (L3) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 2 | **szybszy próg rentowności vs karton** – To znacznie szybszy próg rentowności niż jednorazowy karton. | Kluczowe wnioski (L37) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | ZMIEKCZ |
| 3 | **większość (nabiał/soki PL jednorazowe)** – Większość transportu nabiału i soków w Polsce to opakowania jednorazowe. | Kluczowe wnioski (L38) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 4 | **2027–2028** – inwestycja czeka w latach 2027–2028. | Kluczowe wnioski (L38) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 5 | **system Mehrweg / 2026–2027** – Polskie browary regionalne są wyraźnie spóźnione wobec niemieckiego systemu Meh… | Kluczowe wnioski (L39) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | ZMIEKCZ |
| 6 | **2–4% obrotu** – Stłuczki butelek = realne koszty 2–4% obrotu | Wyzwanie 01 nagłówek (L45) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 7 | **8–12 lat** – Skrzynki zwrotne = inwestycja amortyzowana przez 8–12 lat. | Wyzwanie 03 tekst (L60) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (o ile bekup… | OZNACZ_SZACUNEK |
| 8 | **rosnący koszt netto (karton jednorazowy)** – Kartony jednorazowe = rosnący koszt netto. | Wyzwanie 03 tekst (L60) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | ZMIEKCZ |
| 9 | **18–24 mies.** – Próg rentowności 18–24 mies. | karta produktu wyzwanie 0… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 10 | **od 2028 r.** – Oznakowanie (kod QR) od 2028 r. | karta produktu wyzwanie 0… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne; brak w bazi… | USUN |
| 11 | **pilotaż RTP 2026 / cele 2030** – Sieć, która nie ruszy z pilotażem RTP w 2026 r., zostanie z bardzo krótkim okne… | Wyzwanie 05 tekst (L74) | 🔴 | brak – data 2030 z bazy faktów, ale 'pilotaż w 2026' to int… | ZMIEKCZ |
| 12 | **art. 50; od 2029 r.; ≤3 l; 90%** – Art. 50 – System kaucyjny w UE – od 2029 r. obowiązek kaucji na jednorazowe but… | karta PPWR Art. 50 (L121) | 🔴 | brak w bazie faktów – addendum obejmuje wyłącznie art. 5, 2… | OZNACZ_SZACUNEK |
| 13 | **2025/40; art. 29 i 50; EUR-Lex** – na podstawie rozporządzenia (UE) 2025/40 (PPWR), art. 29 i 50 – EUR-Lex | cite blockquote (L126) | 🔴 | art. 29 potwierdzony w bazie faktów; art. 50 NIE weryfikowa… | OZNACZ_SZACUNEK |
| 14 | **Lidl, Biedronka, Dino** – Sieci sklepowe (Lidl, Biedronka, Dino) są Twoim najważniejszym odbiorcą. System… | Powiązane – Handel detali… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | USUN |
| 15 | **Raben, Rohlig Suus** – Operatorzy logistyczni (Raben, Rohlig Suus) obsługujący transport międzymagazyn… | Powiązane – Logistyka 3PL… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | USUN |
| 16 | **vol 1 300, KD 0** – skrzynka na piwo, vol 1 300, KD 0 | meta-banner [DEV] (L4) | 🏭 | dane SEO wewnętrzne bekuplast/agencji (volume słowa kluczow… | POTWIERDZ_BEKUPLAST |
| 17 | **800–1 500 / mies.** – Potencjał 12m 800–1 500 / mies. | [DEV] blok prototypowy (L… | 🏭 | prognoza ruchu SEO agencji/bekuplast (blok [DEV]) | POTWIERDZ_BEKUPLAST |
| 18 | **100+ cykli rotacji** – 100+ cykli rotacji, kompatybilne z systemem kaucyjnym (od 1 października 2025 r… | hero lede (L28) | 🏭 | tylko bekuplast może potwierdzić (trwałość produktu HDPE) | POTWIERDZ_BEKUPLAST |
| 19 | **100+ cykli rotacji** – Skrzynka na piwo wytrzymuje 100+ cykli rotacji. | Kluczowe wnioski (L37) | 🏭 | tylko bekuplast może potwierdzić (trwałość produktu) | POTWIERDZ_BEKUPLAST |
| 20 | **R1/R2 24 × 0,33 l** – [R1/R2 24×0,33l] | karta produktu wyzwanie 0… | 🏭 | tylko bekuplast może potwierdzić (spec serii) | POTWIERDZ_BEKUPLAST |
| 21 | **eliminacja kontaktu szkło–szkło** – Eliminacja kontaktu szkło–szkło | karta produktu wyzwanie 0… | 🏭 | tylko bekuplast może potwierdzić (funkcja produktu, bez lic… | POTWIERDZ_BEKUPLAST |
| 22 | **laser / hot-stamp / in-mould** – laser / hot-stamp / in-mould | karta produktu wyzwanie 0… | 🏭 | tylko bekuplast może potwierdzić (metody znakowania oferty) | POTWIERDZ_BEKUPLAST |
| 23 | **24 × 0,33 l** – R1/R2 24 × 0,33 l – Skrzynka przegrodowa pod butelki 0,33 l (24 sztuki) | Produkty (L82–83) | 🏭 | tylko bekuplast może potwierdzić | POTWIERDZ_BEKUPLAST |
| 24 | **20 × 0,5 l** – Z1 – piwo – 20 × 0,5 l | Produkty (L85–86) | 🏭 | tylko bekuplast może potwierdzić | POTWIERDZ_BEKUPLAST |
| 25 | **24 × 0,5 l** – W2 – piwo – 24 × 0,5 l | Produkty (L88–89) | 🏭 | tylko bekuplast może potwierdzić | POTWIERDZ_BEKUPLAST |
| 26 | **12 × 0,33 l** – Z2 – piwo – 12 × 0,33 l (rzemieślnicze) | Produkty (L91–92) | 🏭 | tylko bekuplast może potwierdzić | POTWIERDZ_BEKUPLAST |
| 27 | **6 × 1,5 l PET** – Model A – woda – 6 × 1,5 l PET | Produkty (L94–95) | 🏭 | tylko bekuplast może potwierdzić | POTWIERDZ_BEKUPLAST |
| 28 | **9 × 1 l szkło** – Model O – soki – 9 × 1 l szkło | Produkty (L97–98) | 🏭 | tylko bekuplast może potwierdzić | POTWIERDZ_BEKUPLAST |
| 29 | **12 × 0,7 l szkło** – Model D1 – wina – 12 × 0,7 l szkło | Produkty (L100–101) | 🏭 | tylko bekuplast może potwierdzić | POTWIERDZ_BEKUPLAST |
| 30 | **Skrzyniopalety** – Skrzyniopalety – Magazyn browaru | Produkty (L106–107) | 🏭 | tylko bekuplast może potwierdzić (zakres oferty) | POTWIERDZ_BEKUPLAST |
| 31 | **Rossmann, 2025, 160 000 pojemników** – ROSSMANN – Intralogistyka sieci drogerii (DE)... 2025 160 000 pojemników | Case Study (L144–146) | 🏭 | tylko bekuplast może potwierdzić (case study wdrożenia) | POTWIERDZ_BEKUPLAST |
| 32 | **Orbico, 2023, 46 000 pojemników** – Orbico – Dystrybucja beauty i FMCG (PL)... 2023 46 000 pojemników | Case Study (L148–150) | 🏭 | tylko bekuplast może potwierdzić (case study) | POTWIERDZ_BEKUPLAST |
| 33 | **Onninen, 2019, 40 000 pojemników, contecline** – Onninen – Dystrybucja materiałów budowlanych (PL) – pojemniki contecline... 201… | Case Study (L152–154) | 🏭 | tylko bekuplast może potwierdzić (case study + seria contec… | POTWIERDZ_BEKUPLAST |
| 34 | **Auto Partner SA, 2022, 27 000 pojemników** – Auto Partner SA – Dystrybucja części samochodowych (PL)... 2022 27 000 pojemnik… | Case Study (L156–158) | 🏭 | tylko bekuplast może potwierdzić (case study) | POTWIERDZ_BEKUPLAST |
| 35 | **kalkulator: próg rentowności + CO₂ (hl/rok)** – Wpisz skalę produkcji (hl/rok) i porównaj koszt opakowań jednorazowych ze skrzy… | Koszt PPWR (L163) | 🏭 | tylko bekuplast może potwierdzić (funkcjonalność narzędzia) | POTWIERDZ_BEKUPLAST |
| 36 | **eliminacja kontaktu szkło–szkło** – Skrzynka przegrodowa ma indywidualne komory dla każdej butelki... Eliminuje kon… | FAQ (L181) | 🏭 | tylko bekuplast może potwierdzić (funkcja produktu, bez lic… | POTWIERDZ_BEKUPLAST |
| 37 | **ponad 100 cykli / 8–12 lat** – Skrzynki HDPE klasy przemysłowej wytrzymują ponad 100 pełnych cykli rotacji. W … | FAQ (L183) | 🏭 | tylko bekuplast może potwierdzić (trwałość produktu); '8–12… | OZNACZ_SZACUNEK |
| 38 | **500 sztuk / 8–12 tygodni** – Minimum produkcji to zwykle 500 sztuk, czas realizacji 8–12 tygodni. | FAQ (L187) | 🏭 | tylko bekuplast może potwierdzić (warunki produkcji) | POTWIERDZ_BEKUPLAST |
| 39 | **3 metody znakowania; EAN/QR/RFID** – Oferujemy 3 metody znakowania trwałego: laserowe... hot-stamp... in-mould... Mo… | FAQ (L189) | 🏭 | tylko bekuplast może potwierdzić (zakres usług znakowania) | POTWIERDZ_BEKUPLAST |
| 40 | **kalkulator: próg rentowności + redukcja CO₂** – otrzymujesz orientacyjny próg rentowności, redukcję CO₂ oraz polecane produkty. | FAQ (L191) | 🏭 | tylko bekuplast może potwierdzić (funkcjonalność kalkulator… | POTWIERDZ_BEKUPLAST |
| 41 | **50 / 500+ szt; 2–4 tyg / 8–12 tyg; 3–5 dni** – Minimum: 50 sztuk dla standardów, 500+ dla indywidualnych numerów artykułów. Cz… | FAQ warunki współpracy (L… | 🏭 | tylko bekuplast może potwierdzić (warunki handlowe) | POTWIERDZ_BEKUPLAST |
| 42 | **24 godziny** – Kontakt do 24 godzin | Kontakt (L198) | 🏭 | tylko bekuplast może potwierdzić (deklaracja obsługi) | POTWIERDZ_BEKUPLAST |
| 43 | **próbki produktów** – Możliwość pozyskania próbek produktów | Kontakt (L201) | 🏭 | tylko bekuplast może potwierdzić (oferta próbek) | POTWIERDZ_BEKUPLAST |
| 44 | **Palety Euro / ISPM-15** – Palety Euro – Bez obróbki ISPM-15 | Produkty (L103–104) | 📐 | ISPM-15 (IPPC) – zakres tylko drewno lite; palety z tworzyw… | ZOSTAW |
| 45 | **HACCP** – Mleczarnie i piekarnie korzystają z podobnych systemów zgodnych z HACCP. | Powiązane – Przetwórstwo … | 📐 | HACCP (system analizy zagrożeń) – powszechnie znany, public… | ZOSTAW |
| 46 | **ISPM-15; 56°C; 30 minut; bromek metylu** – Palety drewniane w eksporcie poza UE podlegają normie fitosanitarnej ISPM-15, k… | FAQ (L193) | 📐 | ISPM-15 (IPPC) – HT rdzeń min. 56°C/30 min lub fumigacja br… | ZOSTAW |
| 47 | **palety HDPE poza ISPM-15** – Palety z tworzywa (HDPE) nie podlegają ISPM-15 – odpada powracający koszt obrób… | FAQ (L193) | 📐 | ISPM-15 (IPPC) – zakres tylko drewno lite; tworzywa wyłączo… | ZOSTAW |
| 48 | **1 października 2025 r.** – kompatybilne z systemem kaucyjnym (od 1 października 2025 r.) | hero lede (L28) | ✅ | gov.pl / ustawa o systemie kaucyjnym PL – start 1.10.2025 | ZOSTAW |
| 49 | **od 2030 r.** – celami ponownego użycia PPWR od 2030 r. | hero lede (L28) | ✅ | rozp. (UE) 2025/40 art. 29 (cele wiążące od 1.01.2030) – ba… | ZOSTAW |
| 50 | **11 lutego 2025 r. / 12 sierpnia 2026 r.** – kaucja konsumencka (od 1 października 2025 r.), nowy system ROP i PPWR (weszło … | Kluczowe wnioski (L35) | ✅ | rozp. (UE) 2025/40 art. 71 (baza faktów C3) + gov.pl kaucja… | ZOSTAW |
| 51 | **10% (2030), 40% (2040)** – PPWR dodaje cele ponownego użycia opakowań napojowych – 10% (2030) i 40% (2040,… | Kluczowe wnioski (L36) | ✅ | rozp. (UE) 2025/40 art. 29 ust. 6 (baza faktów A5) | ZOSTAW |
| 52 | **art. 29 ust. 7** – Napoje mleczne są wyłączone z celu napojowego (art. 29 ust. 7) | Kluczowe wnioski (L38) | ✅ | rozp. (UE) 2025/40 art. 29 ust. 7 (baza faktów: wyłączenia … | ZOSTAW |
| 53 | **art. 29 ust. 1** – skrzynki transportowe mleczarni i tak podlegają celowi transportowemu (art. 29 … | Kluczowe wnioski (L38) | ✅ | rozp. (UE) 2025/40 art. 29 ust. 1 (baza faktów A2/C2 – cel … | ZOSTAW |
| 54 | **1 października 2025 r.** – Kaucja konsumencka (od 1 października 2025 r.) – ryzyko operacyjne | Wyzwanie 02 nagłówek (L52) | ✅ | gov.pl – polski system kaucyjny od 1.10.2025 | ZOSTAW |
| 55 | **10% (2030), 40% (2040)** – PPWR – cele ponownego użycia napojów 10% (2030) i 40% (2040, cel aspiracyjny) | Wyzwanie 04 nagłówek (L66) | ✅ | rozp. (UE) 2025/40 art. 29 ust. 6 (baza faktów A5) | ZOSTAW |
| 56 | **art. 29 ust. 6; 10%/40%; wyłączenia mleko/wino/spirytusowe** – Art. 29 ust. 6 PPWR: cele ponownego użycia opakowań napojowych – 10% w 2030 r. … | Wyzwanie 04 tekst (L67) | ✅ | rozp. (UE) 2025/40 art. 29 ust. 6 i ust. 7 (baza faktów A5 … | ZOSTAW |
| 57 | **art. 29 ust. 2; od 2030 r.** – Art. 29 ust. 2 PPWR: od 2030 r. opakowania transportowe w obiegu wewnątrz firmy… | Wyzwanie 05 tekst (L74) | ✅ | rozp. (UE) 2025/40 art. 29 ust. 2 (baza faktów A1) | ZOSTAW |
| 58 | **2025/40; 11.02.2025; 12.08.2026; 1.10.2025** – kaucją konsumencką (od 1 października 2025 r.), ROP za napoje... oraz PPWR (roz… | Sekcja PPWR intro (L111) | ✅ | rozp. (UE) 2025/40 art. 71 (baza faktów C3) + gov.pl kaucja… | ZOSTAW |
| 59 | **art. 29 ust. 6; 10%/40%** – Art. 29 ust. 6 – ...10% w 2030 r. (wiążący) i 40% w 2040 r. (cel aspiracyjny). … | karta PPWR Art. 29 ust. 6… | ✅ | rozp. (UE) 2025/40 art. 29 ust. 6 i ust. 7 (baza faktów A5 … | ZOSTAW |
| 60 | **art. 29 ust. 2; od 2030 r.** – Art. 29 ust. 2 – Opakowania transportowe w obiegu wewnątrz firmy... od 2030 r. … | karta PPWR Art. 29 ust. 2… | ✅ | rozp. (UE) 2025/40 art. 29 ust. 2 (baza faktów A1) | ZOSTAW |
| 61 | **art. 29 ust. 1; 40%/70%** – Art. 29 ust. 1 – ...co najmniej 40% wielokrotnego użytku w 2030 r. (wiążący) i … | karta PPWR Art. 29 ust. 1… | ✅ | rozp. (UE) 2025/40 art. 29 ust. 1 (baza faktów A2) | ZOSTAW |
| 62 | **1.10.2025; 10%/40%** – polski system kaucyjny (od 1 października 2025 r.), nowy system ROP wprowadzany… | blockquote (L125) | ✅ | rozp. (UE) 2025/40 art. 29 ust. 6 (baza faktów A5) + gov.pl… | ZOSTAW |
| 63 | **12.08.2026; art. 29 ust. 6/2; art. 50; 2029** – PPWR stosuje się od 12 sierpnia 2026 r. ...art. 29 ust. 6... art. 29 ust. 2... … | FAQ (L185) | ✅ | rozp. (UE) 2025/40 art. 71 + art. 29 ust. 2/6 (baza faktów … | ZMIEKCZ |
| 64 | **art. 5 PPWR; 12.08.2026; PFAS** – ograniczenie PFAS z art. 5 PPWR (od 12 sierpnia 2026 r.) dotyczy wyłącznie opak… | FAQ (L193) | ✅ | rozp. (UE) 2025/40 art. 5 ust. 5–6 (baza faktów D1/D5 – PFA… | ZOSTAW |
| 65 | **PPWR nie zakazuje EPAL** – PPWR nie zakazuje palet EPAL. To dwa odrębne tematy. | FAQ (L193) | ✅ | rozp. (UE) 2025/40 – brak zakazu palet drewnianych EPAL; ba… | ZOSTAW |


## Strona #04 – Farmacja i kosmetyki

Pozycji: 52 · 🔴 8 · 🏭 22 · 📐 5 · ✅ 17

| # | Wartość / fragment | Sekcja | Prow. | Źródło / podstawa | Rekom. |
|---|---|---|:--:|---|---|
| 1 | **art. 29 PPWR; „wyłączenie opakowań bezpośrednich leków, bez…** – Opakowania bezpośrednie leków i wyrobów medycznych są wyłączone z celów ponowne… | Kluczowe wnioski – wniose… | 🔴 | brak – PPWR_fakty B1/B3: brak wyłączenia farmaceutycznego w… | ZMIEKCZ |
| 2 | **med-tech „szybko rośnie"** – Sektor med-tech (diagnostyka, urządzenia monitorujące, sensory) szybko rośnie. | Wyzwanie 02 (L1251) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (brak liczby… | ZMIEKCZ |
| 3 | **ESD/med-tech „rośnie" (nagłówek wniosku 5)** – ESD rośnie razem z med-techem. | Kluczowe wnioski – wniose… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 4 | **„wyłączenie opakowań bezpośrednich leków" (Wyzwanie 03)** – Opakowania bezpośrednie leków są wyłączone z celów ponownego użycia ze względów… | Wyzwanie 03 (L1260) | 🔴 | brak – PPWR_fakty B1/B3: brak wyłączenia farmaceutycznego w… | ZMIEKCZ |
| 5 | **wyłączenie opakowań bezpośrednich leków/wyrobów medycznych,…** – wyłącza z celów ponownego użycia opakowania bezpośrednie produktów leczniczych … | sekcja PPWR (L1296) | 🔴 | brak – PPWR_fakty B1/B3: „pharmaceutical" = 0 wystąpień; ar… | ZMIEKCZ |
| 6 | **wyłączenie opakowań bezpośrednich, bezterminowo (karta)** – Opakowania bezpośrednie leków i wyrobów medycznych – wyłączone z celów ponowneg… | karta PPWR – Wyłączenie o… | 🔴 | brak – PPWR_fakty B1/B3: brak wyłączenia farmaceutycznego w… | ZMIEKCZ |
| 7 | **blockquote – „wyłączenie opakowań bezpośrednich"** – Cele ponownego użycia nie obejmują opakowań bezpośrednich leków i wyrobów medyc… | blockquote (L1318) | 🔴 | brak – PPWR_fakty B1/B3 (brak wyłączenia farmacji); parafra… | ZMIEKCZ |
| 8 | **„wyłączenie opakowań bezpośrednich leków" (FAQ)** – Tak – w zakresie opakowań transportowych i dystrybucyjnych. Wyłączone z celów p… | FAQ – Czy farmacja jest o… | 🔴 | brak – PPWR_fakty B1/B3: brak wyłączenia farmaceutycznego w… | ZMIEKCZ |
| 9 | **ESD; sterylizowalne (title)** – Opakowania farmaceutyczne i kosmetyczne – ESD, sterylizowalne \| bekuplast | title (L5) | 🏭 | tylko bekuplast może potwierdzić posiadanie oferty ESD i st… | POTWIERDZ_BEKUPLAST |
| 10 | **ESD EURO-NORM** – pojemniki ESD EURO-NORM dla podzespołów urządzeń medycznych | lede (L1197) | 🏭 | tylko bekuplast może potwierdzić serię ESD w wymiarze EURO-… | POTWIERDZ_BEKUPLAST |
| 11 | **produkcja ESD bekuplast wg IEC 61340-5-1** – bekuplast produkuje pojemniki ESD wg IEC 61340-5-1 | Kluczowe wnioski – wniose… | 🏭 | tylko bekuplast może potwierdzić zgodność swoich pojemników… | POTWIERDZ_BEKUPLAST |
| 12 | **pierwotny HDPE; opcja PP** – Pojemniki z pierwotnego HDPE do kontaktu z żywnością, z opcją PP do sterylizacj… | Wyzwanie 01 (L1242) | 🏭 | tylko bekuplast może potwierdzić materiał (pierwotny HDPE) … | POTWIERDZ_BEKUPLAST |
| 13 | **121°C / 134°C; (UE) nr 10/2011 (kafelek produktu)** – Pojemniki sterylizowalne · Autoklaw 121°C / 134°C · rozp. (UE) nr 10/2011 | kafelek produktu – Pojemn… | 🏭 | tylko bekuplast może potwierdzić istnienie kafelka/serii st… | POTWIERDZ_BEKUPLAST |
| 14 | **EURO-NORM ESD; IEC 61340-5-1 (kafelek)** – Pojemnik EURO-NORM ESD · IEC 61340-5-1 | kafelek produktu – Pojemn… | 🏭 | tylko bekuplast może potwierdzić istnienie kafelka/serii EU… | POTWIERDZ_BEKUPLAST |
| 15 | **ALC tradeline AL643G** – ALC tradeline AL643G · Obieg zwrotny farmacji i drogerii | Wyzwanie 03 / kafelek pro… | 🏭 | tylko bekuplast może potwierdzić istnienie serii ALC tradel… | POTWIERDZ_BEKUPLAST |
| 16 | **ALC tradeline AL643G (siatka produktów)** – ALC tradeline AL643G · ALC tradeline dla obiegu zwrotnego farmacji i drogerii | siatka produktów (L1275/L… | 🏭 | tylko bekuplast może potwierdzić serię ALC tradeline i arty… | POTWIERDZ_BEKUPLAST |
| 17 | **EURO-NORM ESD; IEC 61340-5-1 (siatka)** – EURO-NORM ESD · IEC 61340-5-1 dla med-tech | siatka produktów (L1282) | 🏭 | tylko bekuplast może potwierdzić serię EURO-NORM ESD wg IEC… | POTWIERDZ_BEKUPLAST |
| 18 | **basicline** – basicline · Uniwersalne dla kosmetyków | siatka produktów (L1284) | 🏭 | tylko bekuplast może potwierdzić serię basicline i jej zast… | POTWIERDZ_BEKUPLAST |
| 19 | **lightline** – lightline · Lekka kompletacja | siatka produktów (L1285) | 🏭 | tylko bekuplast może potwierdzić serię lightline | POTWIERDZ_BEKUPLAST |
| 20 | **Rossmann; 2025; 160 000 pojemników** – ROSSMANN – Intralogistyka sieci drogerii (DE) … 2025 · 160 000 pojemników | Case Studies (L1354–L1356) | 🏭 | tylko bekuplast może potwierdzić wdrożenie, rok i wolumen (… | POTWIERDZ_BEKUPLAST |
| 21 | **Orbico; 2023; 46 000 pojemników** – Orbico – Dystrybucja beauty i FMCG (PL) … 2023 · 46 000 pojemników | Case Studies (L1362–L1364) | 🏭 | tylko bekuplast może potwierdzić wdrożenie, rok i wolumen | POTWIERDZ_BEKUPLAST |
| 22 | **Onninen; contecline; 2019; 40 000 pojemników** – Onninen – Dystrybucja materiałów budowlanych (PL) – pojemniki contecline. 2019 … | Case Studies (L1370–L1372) | 🏭 | tylko bekuplast może potwierdzić wdrożenie, serię conteclin… | POTWIERDZ_BEKUPLAST |
| 23 | **Auto Partner SA; 2022; 27 000 pojemników** – Auto Partner SA – Dystrybucja części samochodowych (PL) … 2022 · 27 000 pojemni… | Case Studies (L1378–L1380) | 🏭 | tylko bekuplast może potwierdzić wdrożenie, rok i wolumen | POTWIERDZ_BEKUPLAST |
| 24 | **próg rentowności; struktura emisji CO₂** – kalkulator pokaże próg rentowności i strukturę emisji CO₂. | Koszt PPWR (L1400) | 🏭 | funkcja kalkulatora bekuplast – brak liczby, obietnica narz… | ZOSTAW |
| 25 | **ESD dla podzespołów elektronicznych w urządzeniach medyczny…** – Pojemniki ESD dla podzespołów elektronicznych w urządzeniach medycznych. | Powiązane – Produkcja prz… | 🏭 | tylko bekuplast może potwierdzić ofertę ESD dla tego zastos… | POTWIERDZ_BEKUPLAST |
| 26 | **rezystancja powierzchniowa 10⁴–10⁹ Ω** – Pojemniki ESD (Electrostatic Discharge) mają rezystancję powierzchniową 10⁴–10⁹… | FAQ – ESD (L1438) | 🏭 | tylko bekuplast może potwierdzić zakres rezystancji swoich … | POTWIERDZ_BEKUPLAST |
| 27 | **PP; 121°C/134°C; (UE) nr 10/2011; 8–12 tygodni** – w wersji specjalnej PP do sterylizacji w autoklawie 121°C / 134°C. Dopuszczenie… | FAQ – pojemniki sterylizo… | 🏭 | tylko bekuplast może potwierdzić wersję PP oraz czas projek… | OZNACZ_SZACUNEK |
| 28 | **HDPE bekuplast bez PFAS** – pojemniki HDPE bekuplast nigdy nie zawierały PFAS. | FAQ – PFAS (L1440) | 🏭 | tylko bekuplast może potwierdzić skład swoich pojemników HD… | POTWIERDZ_BEKUPLAST |
| 29 | **pierwotny HDPE; certyfikat (UE) nr 10/2011** – pierwotny HDPE z certyfikatem wg rozporządzenia (UE) nr 10/2011 … Ten sam mater… | FAQ – kontakt z kosmetyka… | 🏭 | rozp. (UE) nr 10/2011 realne (PPWR_fakty D4), ale posiadani… | POTWIERDZ_BEKUPLAST |
| 30 | **24 godziny** – Kontakt do 24 godzin | Kontakt (L1453) | 🏭 | deklaracja SLA kontaktu bekuplast (tekst z briefu) | ZOSTAW |
| 31 | **IEC 61340-5-1 (nazwa normy)** – bekuplast produkuje pojemniki ESD wg IEC 61340-5-1 dla podzespołów urządzeń med… | Kluczowe wnioski – wniose… | 📐 | IEC 61340-5-1 (norma ESD – nazwa realna, publiczna) | ZOSTAW |
| 32 | **autoklaw 121°C / 134°C** – Produkcja farmaceutyczna wymaga pojemników sterylizowalnych (autoklaw 121°C / 1… | Wyzwanie 01 (L1242) | 📐 | standardowe temperatury cyklu autoklawu 121°C/134°C (powsze… | ZOSTAW |
| 33 | **IEC 61340-5-1** – Wymagania ESD są identyczne jak w elektronice (IEC 61340-5-1). | Wyzwanie 02 (L1251) | 📐 | IEC 61340-5-1 (norma ESD – nazwa realna) | ZOSTAW |
| 34 | **HACCP; PFAS** – HACCP + materiały do kontaktu z żywnością + PFAS – wspólne wyzwania regulacyjne. | Powiązane – Przetwórstwo … | 📐 | HACCP (system realny); PFAS (art. 5 PPWR – PPWR_fakty D5) | ZOSTAW |
| 35 | **IEC 61340-5-1; moduły IoT** – W farmacji stosowane dla urządzeń medycznych, sensorów diagnostycznych, modułów… | FAQ – ESD (L1438) | 📐 | IEC 61340-5-1 (norma realna) | ZOSTAW |
| 36 | **2035 (mit wyłączenia farmacji – obalenie)** – Co PPWR naprawdę obejmuje w farmacji – bez mitu wyłączenia 2035. | meta description (L6) | ✅ | PPWR_fakty B1/B3: „pharmaceutical" = 0 wystąpień; 2035 = ty… | ZOSTAW |
| 37 | **pharma + kosmetyki w zakresie PPWR (opakowania transportowe)** – compliance – opakowania transportowe pharma + kosmetyki w zakresie PPWR | meta-banner [DEV] (L1143) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (opakowania transportowe obj… | ZOSTAW |
| 38 | **40% w 2030 r., 70% w 2040 r.** – Kosmetyka kontraktowa i dystrybucja kosmetyków do handlu to cele ponownego użyc… | Kluczowe wnioski – wniose… | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (40% wiążący 2030 / dążenie … | ZOSTAW |
| 39 | **2035; −10% względem 2018 r.; art. 43** – Rok 2035 to nie wyłączenie farmacji. To unijny próg redukcji odpadów opakowanio… | Kluczowe wnioski – wniose… | ✅ | PPWR_fakty B1/B3 (2035 = kamień milowy redukcji, nie wyłącz… | ZOSTAW |
| 40 | **art. 29 ust. 2; od 2030 r.** – Firmy z dwiema lub więcej lokalizacjami (zakładami, magazynami) muszą używać op… | Kluczowe wnioski – wniose… | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (wewnątrzfirmowe, od 1.01.20… | ZOSTAW |
| 41 | **rozp. (UE) nr 10/2011** – z dopuszczeniem do kontaktu z żywnością wg rozporządzenia (UE) nr 10/2011 | Wyzwanie 01 (L1242) | ✅ | PPWR_fakty D4: rozp. Komisji (UE) nr 10/2011 (tworzywa do k… | ZOSTAW |
| 42 | **art. 29 ust. 1; 40% 2030 / 70% 2040** – opakowania transportowe w logistyce farmaceutycznej oraz dystrybucji kosmetyków… | Wyzwanie 03 (L1260) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (40% wiążący / 70% niewiążąc… | ZOSTAW |
| 43 | **art. 29 ust. 5; 10% 2030 / 25% 2040** – opakowania zbiorcze mają osobny cel 10% w 2030 r. i 25% w 2040 r. (cel aspiracy… | Wyzwanie 03 (L1260) | ✅ | EUR-Lex 2025/40 art. 29 ust. 5 (PPWR_fakty A4) | ZOSTAW |
| 44 | **2025/40; 11.02.2025; 12.08.2026** – PPWR (rozporządzenie (UE) 2025/40 – weszło w życie 11 lutego 2025 r., stosuje s… | sekcja PPWR (L1296) | ✅ | EUR-Lex 2025/40 art. 71; PPWR_fakty C3 (obie daty poprawne) | ZOSTAW |
| 45 | **2035; −10% względem 2018 r.; art. 43** – Data 2035 w PPWR to nie wyłączenie farmacji, lecz unijny próg redukcji odpadów … | sekcja PPWR (L1296) | ✅ | PPWR_fakty B1/B3 (2035 = redukcja odpadów, nie wyłączenie);… | ZOSTAW |
| 46 | **art. 29 ust. 2; art. 29 ust. 1; 40%/70%; od 2030** – Opakowania transportowe w obiegu wewnątrz firmy (między zakładami tego samego p… | karta PPWR – Art. 29 (L13… | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 i ust. 2; PPWR_fakty A1/A2 (… | ZOSTAW |
| 47 | **−5% (2030), −10% (2035), −15% (2040); art. 43** – Próg redukcji odpadów opakowaniowych na mieszkańca względem 2018 r.: −5% (2030)… | karta PPWR – Art. 43 (L13… | ✅ | EUR-Lex 2025/40 art. 43 (siatka progów redukcji odpadów opa… | ZOSTAW |
| 48 | **art. 29; opakowania transportowe kosmetyków** – Kosmetyka kontraktowa i dystrybucja kosmetyków do handlu – pełne cele ponownego… | karta PPWR – Kosmetyki (L… | ✅ | EUR-Lex 2025/40 art. 29 ust. 1; poprawka wobec wcześniejsze… | ZOSTAW |
| 49 | **cite: 2025/40, art. 29 i 43 – EUR-Lex** – na podstawie rozporządzenia (UE) 2025/40 (PPWR), art. 29 i 43 – EUR-Lex | podpis blockquote (L1318) | ✅ | EUR-Lex 2025/40; art. 29 i 43 to realne przepisy; wzorzec „… | ZOSTAW |
| 50 | **art. 5 PPWR; 12.08.2026; PFAS tylko kontakt z żywnością** – Ograniczenie PFAS (art. 5 PPWR, od 12 sierpnia 2026 r.) dotyczy opakowań przezn… | FAQ – PFAS (L1440) | ✅ | PPWR_fakty D1/D5: art. 5 ust. 5–6 ogranicza PFAS w opakowan… | ZOSTAW |
| 51 | **art. 29 ust. 2; art. 29 ust. 1; 40%/70%; 2030** – Opakowania transportowe w obiegu wewnątrz firmy (art. 29 ust. 2 – wielokrotnego… | FAQ – inwestować w RTP (L… | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 i 2; PPWR_fakty A1/A2 | ZOSTAW |
| 52 | **adresat = podmiot stosujący opakowania transportowe** – Obowiązek dotyczy podmiotu stosującego opakowania transportowe – także wtedy, g… | FAQ – inwestować w RTP (L… | ✅ | EUR-Lex 2025/40 art. 29 ust. 1; PPWR_fakty C2 (adresat = po… | ZOSTAW |


## Strona #05 – Intralogistyka i magazyn

Pozycji: 65 · 🔴 18 · 🏭 25 · 📐 9 · ✅ 13

| # | Wartość / fragment | Sekcja | Prow. | Źródło / podstawa | Rekom. |
|---|---|---|:--:|---|---|
| 1 | **ponad 100 tys. operacji rocznie** – w systemie wykonującym ponad 100 tys. operacji rocznie | Kluczowe wnioski (L1224) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 2 | **skrzynki standardowe nie nadają się do AKL** – Standardowe skrzynki transportowe się nie nadają. | Kluczowe wnioski (L1224) | 🔴 | brak – twierdzenie o nieprzydatności cudzych/standardowych … | ZMIEKCZ |
| 3 | **od 2026 r.** – OEM-y i sieci handlowe wymuszają opakowania wielokrotnego użytku (RTP) w łańcuc… | Kluczowe wnioski (L1224) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | ZMIEKCZ |
| 4 | **Amazon Sosnowiec, Allegro Adamów, InPost Pruszków** – Polskie magazyny e-commerce (Amazon Sosnowiec, Allegro Adamów, InPost Pruszków)… | Kluczowe wnioski (L1224) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (konkretne l… | USUN |
| 5 | **6–8 jednostek** – Sztaplowanie 6–8 jednostek to standard dla pojemników intralogistycznych. | Kluczowe wnioski (L1224) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 6 | **4–6 cykli na minutę** – Magazyn automatyczny pracuje z prędkością 4–6 cykli na minutę. | Wyzwanie 01 (L1242) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 7 | **2–4 tys. zł/godz.** – Pojemnik nieodpowiedniego wymiaru blokuje system – przestój 2–4 tys. zł/godz. | Wyzwanie 01 (L1242) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 8 | **6–8 jednostek** – Pojemniki intralogistyczne muszą wytrzymać sztaplowanie 6–8 jednostek + dynamic… | Wyzwanie 02 (L1251) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 9 | **3–4 jednostek** – Standardowe skrzynki HDPE wytrzymują sztaplowanie 3–4 jednostek. | Wyzwanie 02 (L1251) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (parametr ko… | ZMIEKCZ |
| 10 | **Amazon, sieci AGD, dystrybutorzy IT** – Magazyny elektroniki (Amazon, sieci AGD, dystrybutorzy IT) wymagają pojemników … | Wyzwanie 04 (L1269) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | ZMIEKCZ |
| 11 | **3–4 razy** – Sezonowe szczyty (Black Friday, święta) – 3–4 razy większe zapotrzebowanie | Wyzwanie 05 nagłówek (L12… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 12 | **3–4-krotnie w ciągu 6–8 tygodni** – zapotrzebowanie operatora e-commerce na flotę rośnie 3–4-krotnie w ciągu 6–8 ty… | Wyzwanie 05 (L1278) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 13 | **Mecalux, Daifuku** – Indywidualne pod AKL Mecalux/Daifuku | Sekcja produkty kafelek I… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (kompatybiln… | USUN |
| 14 | **presja OEM/sieci wymusza RTP** – presja OEM-ów i sieci handlowych | Karta PPWR nagłówek (L131… | 🔴 | brak – jakościowe twierdzenie o zachowaniu osób trzecich, n… | ZMIEKCZ |
| 15 | **18–24 miesiące** – Sieć handlowa (art. 29) wymusza opakowania wielokrotnego użytku u dostawców... … | Karta PPWR Efekt domina (… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 16 | **±0,3 mm / ±2–4 mm / 6–8 / 3–4 / >100 cykli** – Pojemnik intralogistyczny ma tolerancje wymiarowe ±0,3 mm (zamiast ±2–4 mm), sz… | FAQ – różnica (L1462) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (porównania … | OZNACZ_SZACUNEK |
| 17 | **Mecalux MIA, Daifuku Compact System, Murata Cyberstation, S…** – projektujemy pojemniki silverline w wymiarach kompatybilnych z głównymi systema… | FAQ – kompatybilność AKL … | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (kompatybiln… | USUN |
| 18 | **SAP EWM, Manhattan Active WM, Körber WMS, Blue Yonder WMS** – Współpracowaliśmy z SAP EWM, Manhattan Active WM, Körber WMS i Blue Yonder WMS. | FAQ – WMS (L1466) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | USUN |
| 19 | **100+ cykli** – Trwałość 100+ cykli pod automatyzację magazynu | meta description | 🏭 | tylko bekuplast może potwierdzić (żywotność własnych pojemn… | POTWIERDZ_BEKUPLAST |
| 20 | **±0,3 mm** – Tolerancje ±0,3 mm. Pojemniki pracujące w 400+ polskich magazynach. | H1 lede (L1197) | 🏭 | tylko bekuplast może potwierdzić (tolerancja własnego produ… | POTWIERDZ_BEKUPLAST |
| 21 | **400+ polskich magazynów** – Pojemniki pracujące w 400+ polskich magazynach. | H1 lede (L1197) | 🏭 | tylko bekuplast może potwierdzić (liczba wdrożeń) | POTWIERDZ_BEKUPLAST |
| 22 | **silverline, contecline, ESD** – silverline, contecline i ESD dla magazynów AKL, shuttle i miniload | H1 lede (L1197) | 🏭 | tylko bekuplast może potwierdzić (nazwy serii) | POTWIERDZ_BEKUPLAST |
| 23 | **±0,3 mm** – AKL i shuttle wymagają tolerancji wymiarowych ±0,3 mm – większa odchyłka oznacz… | Kluczowe wnioski (L1224) | 🏭 | tylko bekuplast może potwierdzić / brak nazwanej normy publ… | POTWIERDZ_BEKUPLAST |
| 24 | **silverline – wzmocnione narożniki, podwójna podstawa** – Nasze pojemniki silverline mają wzmocnione narożniki i podwójną podstawę. | Kluczowe wnioski (L1224) | 🏭 | tylko bekuplast może potwierdzić (konstrukcja produktu) | POTWIERDZ_BEKUPLAST |
| 25 | **±0,3 mm** – silverline AKL / shuttle · ±0,3 mm | Karta produktu Wyzwanie 0… | 🏭 | tylko bekuplast może potwierdzić | POTWIERDZ_BEKUPLAST |
| 26 | **stat. 280 kg · dyn. 110 kg** – silverline / contecline stat. 280 kg · dyn. 110 kg | Karta produktu Wyzwanie 0… | 🏭 | tylko bekuplast może potwierdzić (nośność produktu) | POTWIERDZ_BEKUPLAST |
| 27 | **RFID, pick-by-light, WMS** – Magazyn z systemem pick-by-light wymaga pojemników z otworami pod czujniki, zna… | Wyzwanie 03 (L1260) | 🏭 | tylko bekuplast może potwierdzić (funkcje produktu) | POTWIERDZ_BEKUPLAST |
| 28 | **UHF Gen2** – silverline przygotowane pod RFID pick-by-light · UHF Gen2 | Karta produktu Wyzwanie 0… | 🏭 | tylko bekuplast może potwierdzić (standard RFID UHF Gen2 wb… | POTWIERDZ_BEKUPLAST |
| 29 | **contecline (AKL, shuttle, miniload)** – contecline Magazyny AKL, shuttle, miniload | Sekcja produkty kafelek c… | 🏭 | tylko bekuplast może potwierdzić (nazwa serii i zastosowani… | POTWIERDZ_BEKUPLAST |
| 30 | **±0,3 mm** – silverline AKL/shuttle ±0,3 mm | Sekcja produkty kafelek s… | 🏭 | tylko bekuplast może potwierdzić | POTWIERDZ_BEKUPLAST |
| 31 | **Palety Euro kompatybilne z AKL** – Palety Euro Kompatybilne z AKL | Sekcja produkty kafelek P… | 🏭 | tylko bekuplast może potwierdzić (kompatybilność własnej pa… | POTWIERDZ_BEKUPLAST |
| 32 | **nazwy serii bekuplast** – contecline, silverline, ESD, lightline, basicline plus, Clever move box, Palety… | Sekcja produkty (L1299-L1… | 🏭 | tylko bekuplast może potwierdzić (nazwy serii i zakres ofer… | POTWIERDZ_BEKUPLAST |
| 33 | **Rossmann, DE, 2025, 160 000 pojemników** – ROSSMANN Intralogistyka sieci drogerii (DE) ... 2025 160 000 pojemników | Case study (L1372-L1374) | 🏭 | tylko bekuplast może potwierdzić (case study, wolumen) | POTWIERDZ_BEKUPLAST |
| 34 | **Orbico, PL, 2023, 46 000 pojemników** – Orbico Dystrybucja beauty i FMCG (PL) ... 2023 46 000 pojemników | Case study (L1380-L1382) | 🏭 | tylko bekuplast może potwierdzić (case study, wolumen) | POTWIERDZ_BEKUPLAST |
| 35 | **Onninen, PL, 2019, 40 000 pojemników contecline** – Onninen Dystrybucja materiałów budowlanych (PL) – pojemniki contecline ... 2019… | Case study (L1388-L1390) | 🏭 | tylko bekuplast może potwierdzić (case study, seria i wolum… | POTWIERDZ_BEKUPLAST |
| 36 | **Auto Partner SA, PL, 2022, 27 000 pojemników** – Auto Partner SA Dystrybucja części samochodowych (PL) ... 2022 27 000 pojemników | Case study (L1396-L1398) | 🏭 | tylko bekuplast może potwierdzić (case study, wolumen) | POTWIERDZ_BEKUPLAST |
| 37 | **struktura emisji CO₂ (funkcja kalkulatora)** – kalkulator pokaże próg rentowności i strukturę emisji CO₂ dla magazynu | KOSZT PPWR (L1417) | 🏭 | funkcja narzędzia bekuplast – do potwierdzenia | POTWIERDZ_BEKUPLAST |
| 38 | **10⁴–10⁹ Ω** – Pojemniki ESD mają rezystancję powierzchniową 10⁴–10⁹ Ω | FAQ – ESD (L1465) | 🏭 | tylko bekuplast może potwierdzić (rezystancja własnego prod… | POTWIERDZ_BEKUPLAST |
| 39 | **500–1 000 szt.; 8–12 tygodni** – minimum produkcji 500–1 000 sztuk dla indywidualnego numeru artykułu, czas proj… | FAQ – wymiary indywidualn… | 🏭 | tylko bekuplast może potwierdzić (MOQ i lead time prototypu) | POTWIERDZ_BEKUPLAST |
| 40 | **do 24 godzin** – Kontakt do 24 godzin | Formularz kontakt (L1478) | 🏭 | tylko bekuplast może potwierdzić (deklaracja poziomu obsług… | POTWIERDZ_BEKUPLAST |
| 41 | **próbki produktów** – Możliwość pozyskania próbek produktów | Formularz kontakt (L1481) | 🏭 | deklaracja handlowa bekuplast – do potwierdzenia | POTWIERDZ_BEKUPLAST |
| 42 | **vol 400, KD 0** – [DEV] Primary keyword: intralogistyka (vol 400, KD 0) | meta DEV banner (L1149) | 🏭 | dane SEO agencji (crear) – wewnętrzne, nie do publikacji | USUN |
| 43 | **500–1 200/m; pozycja 58; TOP 5–10** – [DEV] Potencjał 12m: 500–1 200/m ... quick win z pozycji 58 → TOP 5–10 | meta DEV banner (L1143/L1… | 🏭 | dane SEO agencji (crear) – wewnętrzne, nie do publikacji | USUN |
| 44 | **HDPE gromadzi ładunki elektrostatyczne** – Standardowy HDPE gromadzi ładunki elektrostatyczne, co grozi uszkodzeniem kompo… | Wyzwanie 04 (L1269) | 📐 | powszechnie znany fakt materiałowy (tworzywa izolacyjne kum… | ZOSTAW |
| 45 | **IEC 61340-5-1** – Pojemnik EURO-NORM ESD IEC 61340-5-1 | Karta produktu Wyzwanie 0… | 📐 | IEC 61340-5-1 (realna norma ESD) | ZOSTAW |
| 46 | **EURO-NORM** – EURO-NORM | Karta produktu Wyzwanie 0… | 📐 | EURO-NORM / raster euro 600×400 mm – powszechnie znany stan… | ZOSTAW |
| 47 | **IEC 61340-5-1** – ESD IEC 61340-5-1 | Sekcja produkty kafelek E… | 📐 | IEC 61340-5-1 | ZOSTAW |
| 48 | **transport B2B między zakładami (3PL)** – Transport B2B między zakładami, operatorzy logistyczni. | Powiązane – Logistyka i t… | 📐 | opis branżowy 3PL – ogólny, bez liczb ani cytatu przepisu | ZOSTAW |
| 49 | **AKL, AGV, AMR, WMS, WCS** – Obejmuje sprzęt (regały, AKL, AGV, AMR, przenośniki), oprogramowanie (WMS, WCS)… | FAQ – definicja (L1461) | 📐 | powszechnie znane skróty branżowe (definicje ogólne intralo… | ZOSTAW |
| 50 | **IEC 61340-5-1** – Zgodność z IEC 61340-5-1. | FAQ – ESD (L1465) | 📐 | IEC 61340-5-1 (realna norma ESD) | ZOSTAW |
| 51 | **AGD, IT, automotive, farmacja** – Stosowane w magazynach AGD, IT, automotive, farmacji. | FAQ – ESD (L1465) | 📐 | ogólny opis branż stosujących ESD – bez nazwanych firm ani … | ZOSTAW |
| 52 | **AKL, shuttle** – Intralogistyka – pojemniki, AKL, shuttle, magazyn \| bekuplast | meta title (L5) | 📐 | powszechne skróty branżowe (AKL, shuttle) | ZOSTAW |
| 53 | **art. 29 ust. 2** – obowiązek obiegu zamkniętego wewnątrz firmy (art. 29 ust. 2) | Karta PPWR nagłówek (L131… | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (obieg wewnątrzfirmowy; baza… | ZOSTAW |
| 54 | **art. 5** – ograniczenie PFAS w opakowaniach do kontaktu z żywnością (art. 5) | Karta PPWR nagłówek (L131… | ✅ | EUR-Lex 2025/40 art. 5 (PFAS; baza faktów D5) | ZOSTAW |
| 55 | **art. 29 ust. 2 / od 2030 r.** – muszą być wielokrotnego użytku – w praktyce pełny ponowny użytek od 2030 r. | Karta PPWR Art. 29 ust. 2… | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (od 1.01.2030, bez %); baza … | ZOSTAW |
| 56 | **firma z >1 zakładem/magazynem** – Obowiązek obejmuje co do zasady każdą firmę z więcej niż jednym zakładem lub ma… | Karta PPWR Art. 29 ust. 2… | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (między różnymi miejscami dz… | ZOSTAW |
| 57 | **12 sierpnia 2026 r.** – Ograniczenie PFAS dotyczy opakowań mających kontakt z żywnością (od 12 sierpnia… | Karta PPWR Art. 5 PFAS (L… | ✅ | EUR-Lex 2025/40 art. 5 / art. 71 (stosowanie od 12.08.2026)… | ZOSTAW |
| 58 | **wyłączenie palet/folii z PFAS** – palet i folii transportowych przepis nie dotyczy | Karta PPWR Art. 5 PFAS (L… | ✅ | EUR-Lex 2025/40 art. 5 (PFAS dot. kontaktu z żywnością, nie… | ZOSTAW |
| 59 | **od 2030 r.** – opakowania transportowe w obiegu między zakładami tej samej firmy muszą być wie… | Blockquote NASTĘPNE KROKI… | ✅ | EUR-Lex 2025/40 art. 29 ust. 2; baza A1 | ZOSTAW |
| 60 | **rozp. (UE) 2025/40, art. 29 ust. 2** – na podstawie rozporządzenia (UE) 2025/40 (PPWR), art. 29 ust. 2 – EUR-Lex | Podpis blockquote cite (L… | ✅ | EUR-Lex CELEX:32025R0040, art. 29 ust. 2 | ZOSTAW |
| 61 | **art. 29 PPWR** – Obieg zamknięty wewnątrz zakładu produkcyjnego (art. 29 PPWR). | Powiązane – Produkcja prz… | ✅ | EUR-Lex 2025/40 art. 29 (obieg wewnątrzfirmowy = ust. 2) | ZOSTAW |
| 62 | **art. 29 PPWR** – Magazyny typu fulfillment center (art. 29 PPWR). | Powiązane – E-commerce (L… | ✅ | EUR-Lex 2025/40 art. 29 (e-commerce objęty wprost – ust. 1 … | ZOSTAW |
| 63 | **40% i 70%, art. 29 ust. 1** – Cele procentowe (40% i 70%) z art. 29 ust. 1 dotyczą opakowań transportowych w … | FAQ – czy objęta PPWR (L1… | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (40% wiążący 2030 / 70% niew… | ZMIEKCZ |
| 64 | **art. 29 ust. 2, od 2030 r.** – reguluje jednak wprost art. 29 ust. 2 – od 2030 r. takie opakowania muszą być w… | FAQ – czy objęta PPWR (L1… | ✅ | EUR-Lex 2025/40 art. 29 ust. 2; baza A1 | ZOSTAW |
| 65 | **art. 29 ust. 2 (firmy powiązane)** – Transport między zakładami tej samej firmy lub firm powiązanych reguluje jednak… | FAQ – czy objęta PPWR (L1… | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (podmiot powiązany/partnersk… | ZOSTAW |


## Strona #06 – Logistyka i transport (3PL)

Pozycji: 55 · 🔴 9 · 🏭 25 · 📐 7 · ✅ 14

| # | Wartość / fragment | Sekcja | Prow. | Źródło / podstawa | Rekom. |
|---|---|---|:--:|---|---|
| 1 | **EPAL; skrzynie jednorazowe; folia stretch** – Polska branża 3PL używa dziś głównie palet EPAL, skrzyń jednorazowych i folii s… | Kluczowe wnioski (L35) | 🔴 | brak – wygenerowane przez AI, twierdzenie o strukturze rynk… | ZMIEKCZ |
| 2 | **2026–2030; 200+ osób; 15–40 mln zł** – Transformacja 2026–2030 to dla operatora zatrudniającego 200+ osób inwestycja r… | Kluczowe wnioski (L35) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | USUN |
| 3 | **CHEP; IPP; EPAL** – Kompatybilne z CHEP / IPP / EPAL | Wyzwanie 01, karta produk… | 🔴 | brak – twierdzenie o kompatybilności produktu bekuplast z s… | USUN |
| 4 | **60–75% wykorzystania ładowności** – Według szacunków branżowych operator 3PL pracuje przy 60–75% wykorzystania łado… | Wyzwanie 02 (L52) | 🔴 | brak – wygenerowane przez AI, „szacunki branżowe" bez cytow… | OZNACZ_SZACUNEK |
| 5 | **kompatybilność z systemami poolingowymi** – Pod wymiary i cykl systemów poolingowych | Wyzwanie 04, karta produk… | 🔴 | brak – twierdzenie o dopasowaniu produktu bekuplast do wymi… | ZMIEKCZ |
| 6 | **Raben, Rohlig, DSV, DHL Supply Chain, Geodis, Kuehne+Nagel,…** – Art. 29 PPWR dotyczy podmiotów stosujących opakowania transportowe – a tymi są … | Sekcja PPWR (L97) | 🔴 | brak – twierdzenie regulacyjne o objęciu nazwanych osób trz… | USUN |
| 7 | **Allegro; InPost; Amazon Logistics** – Operatorzy fulfillmentu e-commerce (Allegro, InPost, Amazon Logistics) z osobną… | Powiązane – E-commerce (L… | 🔴 | brak – nazwane osoby trzecie jako przykłady operatorów fulf… | USUN |
| 8 | **sieci handlowe = główny klient** – Sieci handlowe są Twoim głównym klientem; ich standardy to Twoje standardy | Powiązane – Handel (L162) | 🔴 | brak – twierdzenie rynkowe bez źródła | ZMIEKCZ |
| 9 | **1200×800/1200×1000/800×600; SAP EWM, Manhattan Active WM, K…** – palety plastikowe Euro w wymiarach 1200×800 / 1200×1000 / 800×600 są zgodne z g… | FAQ – WMS (L175) | 🔴 | brak – twierdzenie o zgodności produktu z pięcioma nazwanym… | USUN |
| 10 | **vol 100; CPC 80 zł** – Primary keyword: logistyka 3PL (vol 100, CPC 80 zł) | DEV banner (L7) | 🏭 | dane SEO agencji – wewnętrzne, blok DEV nie do publikacji | ZOSTAW |
| 11 | **200–450/m; 12m** – Potencjał 12m: 200–450/m | DEV banner (L8) | 🏭 | prognoza SEO agencji – wewnętrzna (blok DEV) | ZOSTAW |
| 12 | **10 stron** – Makiety branżowe (10) | DEV nav (L9) | 🏭 | zakres kampanii – wewnętrzny (blok DEV) | ZOSTAW |
| 13 | **CHEP, IPP, LPR jako klienci** – Operatorzy poolingu (CHEP, IPP, LPR) to klienci bekuplast – produkujemy trwałe … | Kluczowe wnioski (L36) | 🏭 | tylko bekuplast może potwierdzić relację handlową z CHEP/IP… | POTWIERDZ_BEKUPLAST |
| 14 | **segment owoce/warzywa/napoje/temperatura** – Skrzyniopalety do transportu owoców, warzyw i napojów obsługują specjalistyczne… | Kluczowe wnioski (L38) | 🏭 | tylko bekuplast może potwierdzić zastosowania własnych skrz… | POTWIERDZ_BEKUPLAST |
| 15 | **kompatybilność z systemami klientów** – Każde z tych wyzwań logistyki 3PL rozwiązujemy paletami i pojemnikami zwrotnymi… | Cztery wyzwania (L41) | 🏭 | tylko bekuplast może potwierdzić kompatybilność swoich prod… | POTWIERDZ_BEKUPLAST |
| 16 | **redukcja objętości do 84%** – Składane skrzynki (clever move box) redukują objętość po zwrocie do 84% | Wyzwanie 02 (L52) | 🏭 | tylko bekuplast może potwierdzić (na L81 sama strona oznacz… | POTWIERDZ_BEKUPLAST |
| 17 | **84%** – Redukcja objętości do 84% | Wyzwanie 02, karta produk… | 🏭 | tylko bekuplast może potwierdzić parametr produktu clever m… | POTWIERDZ_BEKUPLAST |
| 18 | **CHEP, IPP, LPR, EPS jako klienci** – Operatorzy poolingu (CHEP, IPP, LPR, EPS) to klienci bekuplast, a nie konkurenci | Wyzwanie 04 (L66) | 🏭 | tylko bekuplast może potwierdzić relacje handlowe (tu dodat… | POTWIERDZ_BEKUPLAST |
| 19 | **4 jednostki** – Sztaplowanie 4 jednostek | Produkty – Skrzyniopalety… | 🏭 | tylko bekuplast może potwierdzić parametr sztaplowania prod… | POTWIERDZ_BEKUPLAST |
| 20 | **84% (dane bekuplast)** – Clever move box … Redukcja objętości do 84% (dane bekuplast) | Produkty – Clever move bo… | 🏭 | oznaczone wprost jako „dane bekuplast" – do potwierdzenia | POTWIERDZ_BEKUPLAST |
| 21 | **basicline; basicline plus; ALC tradeline** – basicline … basicline plus … ALC tradeline (Zintegrowana pokrywa) | Produkty – nazwy serii (L… | 🏭 | nazwy własnych serii bekuplast – tylko bekuplast potwierdza… | POTWIERDZ_BEKUPLAST |
| 22 | **kilka minut** – Sprawdź gotowość 3PL w kilka minut. | Następne kroki 01 (L119) | 🏭 | deklaracja UX narzędzia audytu – bekuplast/agencja | ZOSTAW |
| 23 | **Rossmann; DE; 2025; 160 000 pojemników** – ROSSMANN … Intralogistyka sieci drogerii (DE) – pojemniki obiegowe w magazynie … | Case study Rossmann (L134… | 🏭 | tylko bekuplast może potwierdzić wdrożenie i wolumen 160 000 | POTWIERDZ_BEKUPLAST |
| 24 | **Orbico; PL; 2023; 46 000 pojemników** – Orbico … Dystrybucja beauty i FMCG (PL) … 2023 · 46 000 pojemników | Case study Orbico (L138-1… | 🏭 | tylko bekuplast może potwierdzić wdrożenie i wolumen 46 000 | POTWIERDZ_BEKUPLAST |
| 25 | **Onninen; PL; contecline; 2019; 40 000 pojemników** – Onninen … Dystrybucja materiałów budowlanych (PL) – pojemniki contecline … 2019… | Case study Onninen (L142-… | 🏭 | tylko bekuplast może potwierdzić wdrożenie, serię conteclin… | POTWIERDZ_BEKUPLAST |
| 26 | **Auto Partner SA; PL; 2022; 27 000 pojemników** – Auto Partner SA … Dystrybucja części samochodowych (PL) … 2022 · 27 000 pojemni… | Case study Auto Partner (… | 🏭 | tylko bekuplast może potwierdzić wdrożenie i wolumen 27 000 | POTWIERDZ_BEKUPLAST |
| 27 | **próg rentowności; emisja CO₂** – kalkulator pokaże próg rentowności i strukturę emisji CO₂ | Koszt PPWR (L153) | 🏭 | funkcja narzędzia kalkulatora – bekuplast/agencja | ZOSTAW |
| 28 | **2 min** – Oblicz koszt PPWR w 2 min. | Koszt PPWR (L154) | 🏭 | deklaracja UX narzędzia – bekuplast/agencja | ZOSTAW |
| 29 | **CHEP, IPP, LPR, EPS jako klienci** – bekuplast produkuje pojemniki zwrotne, które zasilają systemy poolingowe operat… | FAQ – pooling (L173) | 🏭 | tylko bekuplast może potwierdzić relacje handlowe | POTWIERDZ_BEKUPLAST |
| 30 | **basicline/basicline plus; wentylacja; HDPE** – pojemniki basicline i basicline plus z opcją wentylacji nadają się do transport… | FAQ – temperatura (L179) | 🏭 | tylko bekuplast może potwierdzić opcję wentylacji i przydat… | POTWIERDZ_BEKUPLAST |
| 31 | **1–2 klientów; 12–16 tygodni** – Wybieramy 1–2 klientów … Wdrażamy palety plastikowe Euro oraz pojemniki basicli… | FAQ – pilotaż (L181) | 🏭 | tylko bekuplast może potwierdzić własny proces pilotażowy i… | POTWIERDZ_BEKUPLAST |
| 32 | **500–1000 sztuk; 8–12 tygodni** – Minimum produkcji 500–1000 sztuk, czas projekt + prototyp 8–12 tygodni | FAQ – konfiguracja (L183) | 🏭 | tylko bekuplast może potwierdzić MOQ i czas projekt+prototyp | POTWIERDZ_BEKUPLAST |
| 33 | **24 godziny** – Kontakt do 24 godzin | Kontakt (L186) | 🏭 | tylko bekuplast może potwierdzić deklarowany SLA kontaktu | POTWIERDZ_BEKUPLAST |
| 34 | **próbki produktów** – Możliwość pozyskania próbek produktów | Kontakt (L189) | 🏭 | deklaracja oferty bekuplast – tylko firma może potwierdzić | POTWIERDZ_BEKUPLAST |
| 35 | **palety z tworzywa poza ISPM-15** – Palety plastikowe Euro nie wymagają obróbki ISPM-15 | Kluczowe wnioski (L37) | 📐 | ISPM-15 (IPPC nr 15) – zakres = drewno, tworzywo wyłączone;… | ZOSTAW |
| 36 | **EPAL; ISPM-15** – Palety drewniane EPAL i obróbka ISPM-15 przy eksporcie | Wyzwanie 03 (L58) | 📐 | ISPM-15 (IPPC nr 15) – norma realna; EPAL to realny standar… | ZOSTAW |
| 37 | **56°C; 30 minut; bromek metylu** – poddać je obróbce termicznej (HT, rdzeń drewna min. 56°C przez 30 minut) lub fu… | Wyzwanie 03 (L59) | 📐 | ISPM-15 (IPPC) – HT rdzeń min. 56°C/30 min lub fumigacja br… | ZOSTAW |
| 38 | **palety z tworzywa poza ISPM-15** – Palety z tworzywa są z tego wymogu wyłączone i nie wymagają certyfikacji fitosa… | Wyzwanie 03 (L59) | 📐 | ISPM-15 zakres = drewno; baza faktów D3(a) | ZOSTAW |
| 39 | **Bez wymogu ISPM-15** – Palety plastikowe Euro … Bez wymogu ISPM-15 | Wyzwanie 03, karta produk… | 📐 | ISPM-15 zakres = drewno; baza faktów D3(a) | ZOSTAW |
| 40 | **palety z tworzywa poza ISPM-15** – Palety z tworzywa ułatwiają eksport – są wyłączone z normy ISPM-15, więc nie wy… | Karta PPWR Eksport poza U… | 📐 | ISPM-15 (IPPC) zakres = drewno; baza faktów D3(a) | ZOSTAW |
| 41 | **ISPM-15; Wielka Brytania/USA/Chiny/Bliski Wschód** – palety z tworzywa są wyłączone z normy ISPM-15. Eksportując do Wielkiej Brytani… | FAQ – eksport (L177) | 📐 | ISPM-15 (IPPC) zakres = drewno; baza faktów D3(a) | ZOSTAW |
| 42 | **art. 29; 40%; 2030** – Art. 29 PPWR – 40% opakowań transportowych wielokrotnego użytku do 2030 r. | meta.description (L3) | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 1 – baza faktów A2 | ZOSTAW |
| 43 | **art. 29; 40%; 2030** – Art. 29 PPWR – 40% opakowań transportowych wielokrotnego użytku do 2030 r. | lede H1 (L27) | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 1 – baza faktów A2 | ZOSTAW |
| 44 | **40%/2030 wiążący; 70%/2040 aspiracyjny** – musisz zapewnić 40% opakowań wielokrotnego użytku do 2030 r. (cel wiążący) i dą… | Kluczowe wnioski (L34) | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 1 – baza faktów A2 | ZOSTAW |
| 45 | **art. 29; 40%; 2030** – Art. 29 PPWR – wiążący cel 40% ponownego użycia do 2030 r. | Wyzwanie 01 (L44) | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 1 – baza faktów A2 | ZOSTAW |
| 46 | **40%/2030; 70%/2040** – cel 40% opakowań wielokrotnego użytku do 2030 r. (cel wiążący) i dążenie do 70%… | Wyzwanie 01 (L45) | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 1 – baza faktów A2 | ZOSTAW |
| 47 | **1000 kg; art. 29 ust. 13** – Z obowiązków wyłączone są mikroprzedsiębiorstwa, które udostępniają nie więcej … | Wyzwanie 01 (L45) | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 13 – baza faktów B4 | ZOSTAW |
| 48 | **40%/2030; 70%/2040; art. 29 ust. 1** – 40% opakowań transportowych wielokrotnego użytku do 2030 r. (cel wiążący) i dąż… | Karta PPWR Art. 29 ust. 1… | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 1 – baza faktów A2 | ZOSTAW |
| 49 | **art. 29; podmiot stosujący** – Cele ponownego użycia dotyczą Cię bezpośrednio jako podmiotu stosującego opakow… | Karta PPWR Art. 29 (L103) | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 1 (adresat: podmio… | ZOSTAW |
| 50 | **12.08.2026; PFAS; art. 5** – Od 12.08.2026 PPWR ogranicza PFAS w opakowaniach mających kontakt z żywnością –… | Karta PPWR Art. 5 PFAS (L… | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 5 ust. 5–6; data stosowani… | ZOSTAW |
| 51 | **UC100; kary nieprzesądzone** – Projekt polskiej ustawy wdrażającej PPWR (UC100, w toku prac legislacyjnych). W… | Karta PPWR UC100 PL (L107) | ✅ | RCL – projekt UC100; art. 68 PPWR (kary ustalą państwa do 1… | ZOSTAW |
| 52 | **kaucja konsumencka; producent/sieci** – Opakowania jednostkowe – odpowiada producent, nie 3PL. Kaucja konsumencka – po … | Karta PPWR Poza zakresem … | ✅ | system kaucyjny PL od 1.10.2025 (obowiązek producenta/wprow… | ZOSTAW |
| 53 | **40%/2030; 70%/2040** – Operatorzy logistyczni są objęci celami ponownego użycia opakowań transportowyc… | blockquote NASTĘPNE KROKI… | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 1 – baza faktów A2 | ZOSTAW |
| 54 | **rozp. (UE) 2025/40; art. 29; EUR-Lex** – na podstawie rozporządzenia (UE) 2025/40 (PPWR), art. 29 – EUR-Lex | cite blockquote (L116) | ✅ | EUR-Lex CELEX:32025R0040, art. 29 – baza faktów | ZOSTAW |
| 55 | **40%/70%; 1000 kg; art. 29 ust. 13; UC100** – 40% do 2030 r. (cel wiążący) i dążenie do 70% do 2040 r. (cel aspiracyjny) … mi… | FAQ – Czy 3PL objęty PPWR… | ✅ | EUR-Lex rozp. (UE) 2025/40, art. 29 ust. 1 i ust. 13; art. … | ZOSTAW |


## Strona #07 – Rolnictwo i ogrodnictwo

Pozycji: 56 · 🔴 14 · 🏭 21 · 📐 7 · ✅ 14

| # | Wartość / fragment | Sekcja | Prow. | Źródło / podstawa | Rekom. |
|---|---|---|:--:|---|---|
| 1 | **od 2020 r.** – Konsolidacja wokół plastikowych RTP (opakowań zwrotnych) trwa od 2020 r. | Kluczowe wnioski | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 2 | **50+ ha; 8 000–25 000 skrzynek** – Sadownik z 50+ ha używa 8 000–25 000 skrzynek w cyklu | Kluczowe wnioski | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 3 | **kompatybilność + eliminacja przeładunku u Lidl/Biedronka/Ca…** – Skrzynki bekuplast EURO są kompatybilne z systemami dystrybucyjnymi Lidl, Biedr… | Kluczowe wnioski | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | USUN |
| 4 | **4–6×; 6–10 tygodni** – Sezonowość – flota skrzynek rośnie 4–6× w 6–10 tygodni | Wyzwanie 01 | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 5 | **50 ha; 18 000 skrzynek; 9 miesięcy; 3 000–5 000 skrzynek** – Sadownik z 50 ha jabłoni używa 18 000 skrzynek w szczycie zbiorów (sierpień–paź… | Wyzwanie 01 | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 6 | **2–6°C** – Truskawki, maliny, sałata i ogórki wymagają transportu chłodzonego (2–6°C). | Wyzwanie 02 | 🔴 | brak nazwanej normy – konkretny zakres temperatur bez źródł… | OZNACZ_SZACUNEK |
| 7 | **2–6°C** – Otwory wentylacyjne · 2–6°C | Wyzwanie 02 (kafelek EURO… | 🔴 | brak – zakres temperatur jako cecha kafelka bez nazwanej no… | OZNACZ_SZACUNEK |
| 8 | **Lidl/Biedronka/Carrefour; Euro 400×300 / 600×400** – Lidl, Biedronka, Carrefour wymagają konkretnych wymiarów skrzynek – Euro 400×30… | Wyzwanie 03 | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (wymagania o… | ZMIEKCZ |
| 9 | **400×300; 600×400; 5 sieci PL** – 400×300 · 600×400 · 5 sieci PL | Wyzwanie 03 (kafelek) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne („5 sieci PL… | ZMIEKCZ |
| 10 | **drewno 2–4 lata; HDPE 10–15 lat** – Drewniane skrzynki sadownicze niskiej jakości wytrzymują zwykle 2–4 lata. HDPE:… | Wyzwanie 04 | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (trwałość cu… | OZNACZ_SZACUNEK |
| 11 | **ROI 18–28 miesięcy; 25+ ha** – Zwrot z inwestycji: 18–28 miesięcy dla sadu 25+ ha. | Wyzwanie 04 | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 12 | **art. 29 ust. 1 vs ust. 2 – obieg wewnątrz jednej lokalizacj…** – Skrzynki używane wyłącznie w obrębie jednego miejsca działalności (...) nie lic… | Karta PPWR: Poza zakresem | 🔴 | brak potwierdzenia w bazie – carve-out „obieg w obrębie jed… | ZMIEKCZ |
| 13 | **400×300 / 600×400; „standardach wymaganych przez sieci"** – produkujemy skrzynki w wymiarach Euro 400×300 i 600×400 w standardach najczęści… | FAQ (Lidl/Biedronka/Carre… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (wymogi osób… | ZMIEKCZ |
| 14 | **drewno 2–4 lata; tektura 1 cykl** – Dla porównania: drewniane skrzynki sadownicze niskiej jakości 2–4 lata, tekturo… | FAQ (ile cykli HDPE) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (trwałość cu… | OZNACZ_SZACUNEK |
| 15 | **ponad 200 gospodarstw** – Pracują w ponad 200 polskich gospodarstwach. | Lede (H1) | 🏭 | tylko bekuplast może potwierdzić – liczba wdrożeń („200+ go… | POTWIERDZ_BEKUPLAST |
| 16 | **cztery wyzwania** – Cztery wyzwania sadowników, gospodarstw warzywnych i hurtowni | Wyzwania (H2) | 🏭 | struktura redakcyjna strony | ZOSTAW |
| 17 | **sztaplowanie 8 jednostek** – HDPE · sztaplowanie 8 jednostek | Wyzwanie 04 (kafelek CFBA… | 🏭 | tylko bekuplast może potwierdzić – spec produktu CFBA 2356 | POTWIERDZ_BEKUPLAST |
| 18 | **CFBA 2356** – CFBA 2356 | Produkty / kafelki | 🏭 | tylko bekuplast może potwierdzić – oznaczenie produktu | POTWIERDZ_BEKUPLAST |
| 19 | **skrzyniopalety** – Skrzyniopalety · Hurt jabłka, ziemniaki | Produkty | 🏭 | tylko bekuplast może potwierdzić – zakres oferty | POTWIERDZ_BEKUPLAST |
| 20 | **8–10 kg** – Skrzynki na truskawki · 8–10 kg, perforowane | Produkty | 🏭 | tylko bekuplast może potwierdzić – pojemność produktu | POTWIERDZ_BEKUPLAST |
| 21 | **300–400 kg** – Skrzyniopalety na jabłka · 300–400 kg hurt | Produkty | 🏭 | tylko bekuplast może potwierdzić – udźwig/pojemność produktu | POTWIERDZ_BEKUPLAST |
| 22 | **Rossmann; DE; 2025; 160 000 pojemników** – ROSSMANN – Intralogistyka sieci drogerii (DE) (...) 2025 · 160 000 pojemników | Case Studies | 🏭 | tylko bekuplast może potwierdzić – case study (Rossmann 160… | POTWIERDZ_BEKUPLAST |
| 23 | **Orbico; PL; 2023; 46 000 pojemników** – Orbico – Dystrybucja beauty i FMCG (PL) (...) 2023 · 46 000 pojemników | Case Studies | 🏭 | tylko bekuplast może potwierdzić – case study (Orbico 46 00… | POTWIERDZ_BEKUPLAST |
| 24 | **Onninen; PL; 2019; 40 000 pojemników; contecline** – Onninen – Dystrybucja materiałów budowlanych (PL) – pojemniki contecline. 2019 … | Case Studies | 🏭 | tylko bekuplast może potwierdzić – case study + seria conte… | POTWIERDZ_BEKUPLAST |
| 25 | **Auto Partner SA; PL; 2022; 27 000 pojemników** – Auto Partner SA – Dystrybucja części samochodowych (PL) (...) 2022 · 27 000 poj… | Case Studies | 🏭 | tylko bekuplast może potwierdzić – case study (Auto Partner… | POTWIERDZ_BEKUPLAST |
| 26 | **400×300×120 mm; 8–10 kg; sztaplowanie 6 jednostek** – Skrzynki ogrodnicze EURO 400×300×120 mm z perforowanym dnem (...) Pojemność 8–1… | FAQ (truskawki) | 🏭 | tylko bekuplast może potwierdzić – spec produktu | POTWIERDZ_BEKUPLAST |
| 27 | **600×400×180–280 mm; 1200×800×800 mm; 300–400 kg; 600×400×13…** – skrzynki ogrodnicze EURO 600×400×180–280 mm, pełnościenne (...) skrzyniopalety … | FAQ (jabłka) | 🏭 | tylko bekuplast może potwierdzić – spec produktów (podstawa… | POTWIERDZ_BEKUPLAST |
| 28 | **10–15 lat; 100+ cykli** – 10–15 lat intensywnej eksploatacji (sezonowa), 100+ cykli rotacji dla skrzynek … | FAQ (ile cykli HDPE) | 🏭 | tylko bekuplast może potwierdzić – żywotność produktu („100… | POTWIERDZ_BEKUPLAST |
| 29 | **do 24 godzin** – Kontakt do 24 godzin | Kontakt | 🏭 | tylko bekuplast może potwierdzić – deklaracja SLA (tekst z … | POTWIERDZ_BEKUPLAST |
| 30 | **title/meta – skrzynki plastikowe na warzywa i owoce** – Skrzynki plastikowe na warzywa i owoce – rolnictwo \| bekuplast | meta (title/description) | 🏭 | treść redakcyjna/SEO strony – zakres oferty | ZOSTAW |
| 31 | **RTP zamiast drewna i tektury** – Opakowania zwrotne (RTP) zamiast drewna i tektury. PPWR i PFAS. | meta description | 🏭 | treść redakcyjna/SEO – pozycjonowanie produktu | ZOSTAW |
| 32 | **301 redirect z /rolnictwo-i-logistyka/** – REBRAND z /rolnictwo-i-logistyka/ · 301 redirect | [DEV] meta-banner | 🏭 | metadane techniczne/redakcyjne strony (nie do publikacji) | ZOSTAW |
| 33 | **vol 250; KD 0** – Primary keyword: skrzynki plastikowe na warzywa (vol 250, KD 0) | [DEV] meta | 🏭 | dane SEO z narzędzia (nie do publikacji na stronie) | ZOSTAW |
| 34 | **400–800/m** – Potencjał 12m: 400–800/m | [DEV] meta | 🏭 | prognoza SEO wewnętrzna (nie do publikacji) | ZOSTAW |
| 35 | **próg rentowności; struktura emisji CO₂** – kalkulator pokaże próg rentowności i strukturę emisji CO₂ dla sadu lub gospodar… | Koszt PPWR (sekcja kalkul… | 🏭 | opis funkcji własnego narzędzia bekuplast | ZOSTAW |
| 36 | **kalendarz zbiorów PL (miesiące)** – truskawki maj–czerwiec, czereśnie czerwiec, jabłka sierpień–październik, kapust… | Kluczowe wnioski | 📐 | powszechnie znany kalendarz agronomiczny PL | ZOSTAW |
| 37 | **Euro 400×300 / 600×400 mm** – wymiarach Euro 400×300 i 600×400 | Wyzwanie 03 / FAQ | 📐 | standard skrzynek Euro (modularność palety EUR 1200×800) | ZOSTAW |
| 38 | **palety Euro bez ISPM-15** – Palety Euro · Bez ISPM-15 (eksport) | Produkty | 📐 | ISPM-15 (IPPC) – zakres tylko drewno; baza faktów D3 | ZOSTAW |
| 39 | **ISPM-15; HT; fumigacja bromkiem metylu** – palety plastikowe Euro (HDPE) nie podlegają normie ISPM-15. W przeciwieństwie d… | FAQ (palety bez ISPM-15) | 📐 | ISPM-15 (IPPC nr 15); baza faktów D1/D3 | ZOSTAW |
| 40 | **Wielka Brytania, Turcja, Bliski Wschód** – Sadownicy eksportujący do Wielkiej Brytanii, Turcji czy na Bliski Wschód unikaj… | FAQ (palety bez ISPM-15) | 📐 | ISPM-15 dotyczy eksportu poza UE – wymienione kraje trzecie… | ZOSTAW |
| 41 | **HACCP** – Przetwórnie owoców i warzyw, soków, mrożonek (HACCP + PPWR). | Powiązane (Przetwórstwo) | 📐 | HACCP – powszechnie znany system bezpieczeństwa żywności | ZOSTAW |
| 42 | **paleta bazowa 1200×800 mm** – skrzyniopalety 1200×800×800 mm | FAQ (jabłka) | 📐 | standard palety EUR 1200×800 mm | ZOSTAW |
| 43 | **art. 29 ust. 1 PPWR** – celami ponownego użycia opakowań transportowych (art. 29 ust. 1 PPWR) | Kluczowe wnioski | ✅ | EUR-Lex 2025/40 art. 29 ust. 1; baza faktów A2/C2 | ZOSTAW |
| 44 | **40% do 2030 (wiążący) / 70% do 2040 (aspiracyjny)** – Cel to 40% do 2030 r. (wiążący) i 70% do 2040 r. (cel aspiracyjny). | Kluczowe wnioski | ✅ | EUR-Lex 2025/40 art. 29 ust. 1; baza faktów A2 | ZOSTAW |
| 45 | **brak wyłączenia rolnictwa pierwotnego; wył. tylko format el…** – PPWR nie ustanawia ogólnego wyłączenia rolnictwa pierwotnego – wyłączone są tyl… | Kluczowe wnioski | ✅ | EUR-Lex 2025/40 art. 29 ust. 4 lit. c); baza faktów B2 | ZOSTAW |
| 46 | **art. 29 ust. 1 PPWR** – Transport produktów rolnych do sieci handlowych jest objęty celami ponownego uż… | Sekcja PPWR (body) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1; baza faktów A2/C2 | ZOSTAW |
| 47 | **art. 5 PFAS – kontakt z żywnością** – Ograniczenie PFAS (art. 5) dotyczy opakowań mających kontakt z żywnością – w ty… | Sekcja PPWR (body) | ✅ | EUR-Lex 2025/40 art. 5; baza faktów D1/D5 | ZOSTAW |
| 48 | **art. 29 ust. 4 lit. c)** – art. 29 ust. 4 lit. c) wyłącza jedynie opakowania w formacie elastycznym w bezp… | Sekcja PPWR (body) | ✅ | EUR-Lex 2025/40 art. 29 ust. 4 lit. c); baza faktów B2 | ZOSTAW |
| 49 | **art. 29 ust. 4 lit. c)** – Wyłączenia od celów ponownego użycia są produktowe (m.in. opakowania elastyczne… | Karta PPWR: Wyłączenia | ✅ | EUR-Lex 2025/40 art. 29 ust. 4; baza faktów B2 | ZOSTAW |
| 50 | **40% do 2030 / 70% do 2040; art. 29 ust. 1** – Transport z sadu lub hurtowni do sieci handlowych jest objęty – 40% ponownego u… | Karta PPWR: Art. 29 ust. 1 | ✅ | EUR-Lex 2025/40 art. 29 ust. 1; baza faktów A2 | ZOSTAW |
| 51 | **art. 29 ust. 2; od 2030; „w praktyce pełny ponowny użytek"** – Transport wewnątrz firmy (hurtownia agro z co najmniej 2 magazynami) – opakowan… | Karta PPWR: Art. 29 ust. 2 | ✅ | EUR-Lex 2025/40 art. 29 ust. 2; baza faktów A1 | ZOSTAW |
| 52 | **12 sierpnia 2026 r.; PFAS ≠ pestycydy** – objętą od 12 sierpnia 2026 r. limitami PPWR dla opakowań do kontaktu z żywności… | Karta PPWR: Art. 5 PFAS | ✅ | EUR-Lex 2025/40 art. 5/71; baza faktów C3/D1 | ZOSTAW |
| 53 | **blockquote – parafraza art. 5 i 29** – Opakowania transportowe, w których produkty rolne trafiają do sieci handlowych,… | Następne kroki (blockquot… | ✅ | EUR-Lex 2025/40 art. 5 i 29; baza faktów | ZOSTAW |
| 54 | **rozp. (UE) 2025/40; art. 5 i 29** – na podstawie rozporządzenia (UE) 2025/40 (PPWR), art. 5 i 29 – EUR-Lex | Następne kroki (cite) | ✅ | EUR-Lex CELEX:32025R0040 | ZOSTAW |
| 55 | **art. 29 ust. 1; 40%/2030; 70%/2040** – Transport produktów rolnych do sieci handlowych jest objęty celami (...) (art. … | FAQ (Czy rolnictwo objęte… | ✅ | EUR-Lex 2025/40 art. 29 ust. 1; baza faktów A2 | ZOSTAW |
| 56 | **art. 29 ust. 4 lit. c); art. 5** – art. 29 ust. 4 lit. c) wyłącza jedynie opakowania elastyczne w bezpośrednim kon… | FAQ (Czy rolnictwo objęte… | ✅ | EUR-Lex 2025/40 art. 29 ust. 4 lit. c) i art. 5; baza faktó… | ZOSTAW |


## Strona #08 – Produkcja przemysłowa

Pozycji: 55 · 🔴 12 · 🏭 25 · 📐 4 · ✅ 14

| # | Wartość / fragment | Sekcja | Prow. | Źródło / podstawa | Rekom. |
|---|---|---|:--:|---|---|
| 1 | **dwa lub więcej zakładów; grupa kapitałowa** – Każda firma z dwoma lub więcej zakładami albo magazynami w jednej grupie kapita… | Kluczowe wnioski (L34) | 🔴 | brak – interpretacja AI; PPWR nie posługuje się pojęciem „g… | ZMIEKCZ |
| 2 | **od dekady; DACH** – Obieg zamknięty wewnątrz firmy to standard od dekady w krajach DACH | Kluczowe wnioski (L35) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 3 | **2026–2028** – Polska nadrabia ten dystans w latach 2026–2028 | Kluczowe wnioski (L35) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 4 | **3 zakłady + 2 DC = 5 lokalizacji** – Producent AGD z 3 zakładami w Polsce i 2 centrami dystrybucyjnymi | Wyzwanie 01 (L45) | 🔴 | brak – jawnie hipotetyczny przykład ilustracyjny wygenerowa… | ZOSTAW |
| 5 | **±0,3 mm** – Pojemniki muszą mieć tolerancje wymiarowe ±0,3 mm | Wyzwanie 02 (L52) | 🔴 | brak – wygenerowane przez AI; sprzeczne z ±2 mm w FAQ tej s… | OZNACZ_SZACUNEK |
| 6 | **art. 24; maks. 50% pustej przestrzeni** – Art. 24 … Ograniczenie nadmiernej pustej przestrzeni w opakowaniu – maksymalnie… | Karta PPWR art. 24 (L112-… | 🔴 | brak w bazie faktów – baza obejmuje art. 5, 26–30, 68, 71; … | OZNACZ_SZACUNEK |
| 7 | **2 lub więcej lokalizacji** – Obowiązek dotyczy co do zasady każdego producenta z dwiema lub więcej lokalizac… | Blockquote (L117) | 🔴 | brak – uogólnienie AI; art. 29 ust. 2 nie stawia progu „2 l… | ZMIEKCZ |
| 8 | **Mecalux, Daifuku, Murata, SSI Schaefer** – produkujemy palety plastikowe Euro w standardach kompatybilnych z głównymi syst… | FAQ pytanie 4 (L178-179) | 🔴 | brak – twierdzenie o kompatybilności produktu z systemami n… | USUN |
| 9 | **Mecalux/Daifuku (nagłówek FAQ)** – Czy palety plastikowe Euro są kompatybilne z systemami AKL Mecalux/Daifuku? | FAQ pytanie 4 nagłówek (L… | 🔴 | brak – nagłówek pytania sugeruje kompatybilność produktu z … | USUN |
| 10 | **±2 mm** – Tolerancje wymiarowe ±2 mm dla wymiaru palety | FAQ pytanie 4 (L179) | 🔴 | brak – wygenerowane przez AI; sprzeczne z ±0,3 mm na tej sa… | OZNACZ_SZACUNEK |
| 11 | **EPAL 5–10 lat** – drewniane palety EPAL wytrzymują ok. 5–10 lat | FAQ pytanie 5 (L181) | 🔴 | brak – wygenerowane przez AI; trwałość produktu konkurencyj… | ZMIEKCZ |
| 12 | **art. 12 PPWR; od sierpnia 2028; kod QR** – oznakowanie opakowań (kod QR) będzie wymagane od sierpnia 2028 r. (art. 12 PPWR) | FAQ pytanie 7 (L185) | 🔴 | brak w bazie faktów – baza obejmuje art. 5, 26–30, 68, 71; … | OZNACZ_SZACUNEK |
| 13 | **lista branż** – AGD, RTV, elektronika konsumencka, meble, chemia ogólna, budownictwo, tekstylia… | Kluczowe wnioski (L36) | 🏭 | tylko bekuplast może potwierdzić zakres obsługiwanych branż | POTWIERDZ_BEKUPLAST |
| 14 | **basicline plus; flagowy** – Pojemniki basicline plus to nasz flagowy produkt do dużych wolumenów | Kluczowe wnioski (L37) | 🏭 | tylko bekuplast może potwierdzić nazwę serii i pozycjonowan… | POTWIERDZ_BEKUPLAST |
| 15 | **bez ISPM-15; 8–12 lat** – Palety plastikowe Euro zastępują drewniane EPAL – bez obróbki ISPM-15, z żywotn… | Kluczowe wnioski (L38) | 🏭 | wyłączenie tworzyw z ISPM-15 = NORMA_PUBLICZNA (baza D3a); … | POTWIERDZ_BEKUPLAST |
| 16 | **basicline / EURO-NORM** – basicline / basicline plus … EURO-NORM · palety plastikowe Euro | Wyzwanie 01 karta produkt… | 🏭 | tylko bekuplast może potwierdzić serie i standard EURO-NORM… | POTWIERDZ_BEKUPLAST |
| 17 | **silverline / contecline; ±0,3 mm** – silverline / contecline … AKL · ±0,3 mm | Wyzwanie 02 karta produkt… | 🏭 | nazwy serii = tylko bekuplast; ±0,3 mm nieweryfikowalne (AI… | POTWIERDZ_BEKUPLAST |
| 18 | **1200×1000 / 1200×800 mm** – Skrzyniopalety plastikowe Euro … 1200×1000 / 1200×800 | Wyzwanie 03 karta produkt… | 🏭 | wymiar 1200×800 to publiczny standard palety EUR; jednak pr… | POTWIERDZ_BEKUPLAST |
| 19 | **bez ISPM-15; 8–12 lat** – Palety plastikowe Euro … bez obróbki ISPM-15 · 8–12 lat | Wyzwanie 04 karta produkt… | 🏭 | żywotność 8–12 lat = tylko bekuplast (nieweryfikowalne); IS… | POTWIERDZ_BEKUPLAST |
| 20 | **silverline** – silverline … Obieg zamknięty między zakładami | Produkty (L74-76) | 🏭 | tylko bekuplast może potwierdzić serię i zastosowanie | POTWIERDZ_BEKUPLAST |
| 21 | **basicline** – basicline … Uniwersalne B2B | Produkty (L77-78) | 🏭 | tylko bekuplast może potwierdzić serię | POTWIERDZ_BEKUPLAST |
| 22 | **basicline plus** – basicline plus … AGD, meble, narzędzia | Produkty (L80-82) | 🏭 | tylko bekuplast może potwierdzić serię | POTWIERDZ_BEKUPLAST |
| 23 | **contecline** – contecline … Magazyny AKL | Produkty (L83-85) | 🏭 | tylko bekuplast może potwierdzić serię | POTWIERDZ_BEKUPLAST |
| 24 | **ESD** – ESD … Elektronika | Produkty (L86-88) | 🏭 | tylko bekuplast może potwierdzić linię ESD (parametry ESD w… | POTWIERDZ_BEKUPLAST |
| 25 | **sztaplowanie ×4** – Skrzyniopalety … Sztaplowanie ×4 | Produkty (L92-94) | 🏭 | tylko bekuplast może potwierdzić krotność sztaplowania prod… | POTWIERDZ_BEKUPLAST |
| 26 | **ERGline** – ERGline … Warsztaty, części | Produkty (L95-97) | 🏭 | tylko bekuplast może potwierdzić serię | POTWIERDZ_BEKUPLAST |
| 27 | **Rossmann; 2025; 160 000** – ROSSMANN … Intralogistyka sieci drogerii (DE) … 2025 · 160 000 pojemników | Case study Rossmann (L136… | 🏭 | tylko bekuplast może potwierdzić wdrożenie u klienta i wolu… | POTWIERDZ_BEKUPLAST |
| 28 | **Orbico; 2023; 46 000** – Orbico … Dystrybucja beauty i FMCG (PL) … 2023 · 46 000 pojemników | Case study Orbico (L140-1… | 🏭 | tylko bekuplast może potwierdzić wdrożenie i wolumen | POTWIERDZ_BEKUPLAST |
| 29 | **Onninen; 2019; 40 000; contecline** – Onninen … Dystrybucja materiałów budowlanych (PL) – pojemniki contecline … 2019… | Case study Onninen (L144-… | 🏭 | tylko bekuplast może potwierdzić wdrożenie, wolumen i serię… | POTWIERDZ_BEKUPLAST |
| 30 | **Auto Partner; 2022; 27 000** – Auto Partner SA … Dystrybucja części samochodowych (PL) … 2022 · 27 000 pojemni… | Case study Auto Partner (… | 🏭 | tylko bekuplast może potwierdzić wdrożenie i wolumen | POTWIERDZ_BEKUPLAST |
| 31 | **próg rentowności; CO₂** – kalkulator pokaże próg rentowności i strukturę emisji CO₂ | Koszt PPWR (L155) | 🏭 | opis funkcjonalności własnego narzędzia bekuplast | ZOSTAW |
| 32 | **basicline plus; silverline** – Pojemniki basicline plus dla średnich i dużych komponentów AGD, silverline dla … | FAQ pytanie 3 (L177) | 🏭 | tylko bekuplast może potwierdzić dobór serii do zastosowań | POTWIERDZ_BEKUPLAST |
| 33 | **8–12 lat; 60–80 cykli/rok** – 8–12 lat eksploatacji w typowym obiegu zamkniętym wewnątrz firmy (60–80 cykli r… | FAQ pytanie 5 (L180-181) | 🏭 | żywotność 8–12 lat = tylko bekuplast; „60–80 cykli rocznie"… | POTWIERDZ_BEKUPLAST |
| 34 | **próg rentowności; okres zwrotu; CO₂** – otrzymujesz wynik kierunkowy: próg rentowności, okres zwrotu i redukcję CO₂ | FAQ pytanie 6 (L183) | 🏭 | opis funkcji kalkulatora bekuplast (wynik jawnie „kierunkow… | ZOSTAW |
| 35 | **laser; in-mould; najtrwalsza** – laser, tłoczenie na gorąco oraz technika in-mould (najtrwalsza) | FAQ pytanie 7 (L185) | 🏭 | tylko bekuplast może potwierdzić techniki znakowania i supe… | POTWIERDZ_BEKUPLAST |
| 36 | **RFID UHF Gen2** – opcjonalnie przygotowujemy miejsce pod tag RFID (UHF Gen2) | FAQ pytanie 7 (L185) | 🏭 | tylko bekuplast może potwierdzić opcję RFID; „UHF Gen2" to … | POTWIERDZ_BEKUPLAST |
| 37 | **24 godziny** – Kontakt do 24 godzin | Kontakt (L188) | 🏭 | deklaracja SLA/czasu reakcji bekuplast | POTWIERDZ_BEKUPLAST |
| 38 | **ISPM-15; HT lub bromek metylu; IPPC** – Palety drewniane w eksporcie poza UE wymagają obróbki fitosanitarnej według nor… | Wyzwanie 04 (L66) | 📐 | ISPM-15 (IPPC): HT rdzeń 56°C/30 min albo fumigacja bromkie… | ZOSTAW |
| 39 | **tworzywo poza ISPM-15** – Palety z tworzywa są poza zakresem tej normy – nie wymagają takiej obróbki ani … | Wyzwanie 04 (L66) | 📐 | ISPM-15 zakres = surowe/lite drewno; tworzywa (HDPE/PP/PE) … | ZOSTAW |
| 40 | **Palety Euro** – Palety Euro … Bez obróbki ISPM-15 | Produkty (L89-91) | 📐 | ISPM-15 zakres = drewno; tworzywa wyłączone (baza D3a) | ZOSTAW |
| 41 | **VDA-KLT; tier-1/2/3** – VDA-KLT, tier-1/2/3, closed-loop OEM | Powiązane – motoryzacja (… | 📐 | VDA-KLT (VDA 4500) realna norma; tier-1/2/3 to standardowa … | ZOSTAW |
| 42 | **art. 29 PPWR; od 2030** – opakowania wielokrotnego użytku od 2030 | meta description (L3) | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (baza faktów A1) – obowiązek… | ZOSTAW |
| 43 | **art. 29 ust. 2** – Obieg zamknięty między zakładami zgodnie z art. 29 ust. 2 PPWR | lede (L27) | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (baza A1, zweryfikowana mapa… | ZOSTAW |
| 44 | **art. 29 ust. 2; od 2030** – Art. 29 ust. 2 PPWR – od 2030 r. opakowania transportowe w obiegu wewnątrz firm… | Kluczowe wnioski (L34) | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (baza A1); data 1.01.2030 po… | ZOSTAW |
| 45 | **powiązane lub partnerskie** – między różnymi miejscami działalności tego samego podmiotu, przedsiębiorstw pow… | Kluczowe wnioski (L34) | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (odwołanie do zalecenia 2003… | ZOSTAW |
| 46 | **od 2030** – pojemniki transportowe krążące między tymi 5 lokalizacjami muszą od 2030 r. być… | Wyzwanie 01 (L45) | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (baza A1) | ZOSTAW |
| 47 | **art. 29 ust. 2; 1.01.2030** – Art. 29 ust. 2 PPWR to najbardziej wymagający przepis dla producentów wielozakł… | Sekcja PPWR (L103) | ✅ | EUR-Lex 2025/40 art. 29 ust. 2; data 1.01.2030 (baza A1) | ZOSTAW |
| 48 | **brak % w przepisie** – W praktyce oznacza to pełny ponowny użytek, choć rozporządzenie nie podaje wpro… | Sekcja PPWR (L103) | ✅ | baza A1 (zasada redakcyjna nr 2: nie cytować „100%"; „w pra… | ZOSTAW |
| 49 | **art. 29 ust. 2; 2030** – Art. 29 ust. 2 … Opakowania transportowe w obiegu wewnątrz firmy muszą być wiel… | Karta PPWR art. 29 ust. 2… | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (baza A1) | ZOSTAW |
| 50 | **art. 29 ust. 1; 40% 2030; 70% 2040** – Art. 29 ust. 1 … co najmniej 40% opakowań wielokrotnego użytku (2030, wiążący);… | Karta PPWR art. 29 ust. 1… | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (baza A2): 40% wiążący 2030,… | ZOSTAW |
| 51 | **art. 5; PFAS; od 12.08.2026** – Art. 5 PFAS … Ogranicza zawartość PFAS w opakowaniach mających kontakt z żywnoś… | Karta PPWR art. 5 (L110-1… | ✅ | EUR-Lex 2025/40 art. 5 ust. 5–6 (baza D1/D5); data stosowan… | ZOSTAW |
| 52 | **blockquote; 2030** – Opakowania transportowe w obiegu między różnymi miejscami działalności tego sam… | Blockquote NASTĘPNE KROKI… | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (baza A1) | ZOSTAW |
| 53 | **2025/40; art. 29 ust. 2** – na podstawie rozporządzenia (UE) 2025/40 (PPWR), art. 29 ust. 2 – EUR-Lex | Podpis blockquote (L118) | ✅ | EUR-Lex CELEX:32025R0040 art. 29 ust. 2 | ZOSTAW |
| 54 | **art. 29 ust. 2; 2030; 2+ lokalizacje** – od 2030 r. opakowania transportowe w obiegu wewnątrz firmy … były opakowaniami … | FAQ pytanie 1 (L172-173) | ✅ | EUR-Lex 2025/40 art. 29 ust. 2 (baza A1) potwierdza rdzeń; … | ZMIEKCZ |
| 55 | **art. 29 ust. 1; 40%** – Może go jednak objąć art. 29 ust. 1 (cel 40% dla podmiotów stosujących opakowan… | FAQ pytanie 2 (L175) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (baza A2); adresat „podmioty… | ZOSTAW |


## Strona #09 – Handel detaliczny i FMCG

Pozycji: 68 · 🔴 27 · 🏭 21 · 📐 3 · ✅ 17

| # | Wartość / fragment | Sekcja | Prow. | Źródło / podstawa | Rekom. |
|---|---|---|:--:|---|---|
| 1 | **Lidl, Biedronka, Dino, Carrefour, Selgros** – dla sieci handlowych (Lidl, Biedronka, Dino, Carrefour, Selgros, drogerie) | lede (L1197) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 2 | **2026–2030** – przejście z opakowań jednorazowych na wielokrotnego użytku to projekt na lata 2… | Kluczowe wnioski (L1224) | 🔴 | brak – rama czasowa projektowa AI; 2030 pokrywa się z celem… | OZNACZ_SZACUNEK |
| 3 | **Lidl, Carrefour, Selgros – pilotaż** – Lidl, Carrefour i Selgros już pilotują. | Kluczowe wnioski (L1224) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | USUN |
| 4 | **2024–2025; 2027; dwa lata** – Sieci, które ruszyły z pilotażem w 2024–2025, mają w 2027 r. dwa lata przewagi … | Kluczowe wnioski (L1224) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | USUN |
| 5 | **200+ sklepów; ROI 24–36 miesięcy** – Dla typowej sieci 200+ sklepów zwrot z inwestycji następuje w 24–36 miesięcy. | Kluczowe wnioski (L1224) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 6 | **300 sklepów; 3–5 mln zł rocznie** – Koszt utylizacji w sieci 300 sklepów sięga 3–5 mln zł rocznie. | Wyzwanie 01 (L1242) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 7 | **redukcja 60–80%** – Obieg zamknięty (…) obniżają koszt odpadów o 60–80%. | Wyzwanie 01 (L1242) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 8 | **300 sklepów; cztery lata; 40%** – Sieć 300 sklepów musi w cztery lata przestawić 40% strumienia transportowego | Wyzwanie 02 (L1251) | 🔴 | brak – '300 sklepów' i 'cztery lata' AI; tylko 40% z art. 2… | ZMIEKCZ |
| 9 | **8–25 mln zł; ROI 24–36 miesięcy** – To inwestycja 8–25 mln zł we flotę i system zwrotów, z okresem zwrotu 24–36 mie… | Wyzwanie 02 (L1251) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 10 | **amortyzacja 8–12 lat** – wielorazowe – inwestycję amortyzowaną w 8–12 lat | Wyzwanie 03 (L1260) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 11 | **od 2028 r.; art. 12 PPWR** – gotowe na oznakowanie opakowań wymagane od 2028 r. (art. 12 PPWR) | Wyzwanie 04 (L1269) | 🔴 | brak w bazie faktów – art. 12 i data 2028 dla znakowania NI… | ZMIEKCZ |
| 12 | **presja central międzynarodowych** – Presja ze strony międzynarodowych central | Wyzwanie 05 nagłówek (L12… | 🔴 | brak – teza narracyjna AI o zachowaniu grup międzynarodowych | ZMIEKCZ |
| 13 | **Lidl Group Climate Action 2030; Carrefour Act for Food** – korporacyjnymi strategiami ponownego użycia (Lidl Group Climate Action 2030, Ca… | Wyzwanie 05 (L1278) | 🔴 | brak – nazwy programów osób trzecich, nieweryfikowalne w na… | USUN |
| 14 | **2026; 2027–2028** – Pilotaż 2026 r., skalowanie 2027–2028. | Wyzwanie 05 (L1278) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 15 | **Lidl, Biedronka, Dino, Carrefour** – Indywidualne pod sieć (…) Lidl/Biedronka/Dino/Carrefour | Wyzwanie 05 karta (L1281) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 16 | **Lidl, Biedronka, Dino, Carrefour** – Indywidualne pod sieć (…) Lidl/Biedronka/Dino/Carrefour | Produkty (L1306) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 17 | **5–10 sklepów; 2026; 2027; 2028–2030** – pilotaż w 5–10 sklepach (2026 r.), pełne wdrożenie w jednej kategorii (2027 r.)… | PPWR sekcja (L1315) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (model wdroż… | OZNACZ_SZACUNEK |
| 18 | **najbardziej dotknięta branża; wszystkie artykuły** – Handel detaliczny i FMCG to najbardziej dotknięta branża (…) dotyczą Cię prakty… | PPWR sekcja (L1315) | 🔴 | brak – ocena/superlatyw redakcyjny AI, nieweryfikowalny ran… | ZMIEKCZ |
| 19 | **8–25 mln zł; 300 sklepów** – Inwestycja 8–25 mln zł dla sieci 300 sklepów. | karta PPWR (L1323) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | OZNACZ_SZACUNEK |
| 20 | **art. 25; zał. V; 1,5 kg** – Art. 25 + zał. V (…) świeżych owoców i warzyw poniżej 1,5 kg oraz porcji serwow… | karta PPWR (L1324) | 🔴 | brak w bazie – art. 25, zał. V i próg 1,5 kg NIE występują … | ZMIEKCZ |
| 21 | **art. 50; od 2029 r.; PL od 1.10.2025** – Art. 50 (…) Harmonizacja kaucji w UE od 2029 r. (w Polsce system działa od 1 pa… | karta PPWR (L1327) | 🔴 | data PL 1.10.2025 = gov.pl (zweryfikowana); ale numer 'art.… | ZMIEKCZ |
| 22 | **Allegro Fulfillment, InPost, Amazon Logistics; art. 29** – Operatorzy e-commerce (Allegro Fulfillment, InPost, Amazon Logistics) to kolejn… | Powiązane (L1434) | 🔴 | brak – nazwy operatorów AI; baza A3 wskazuje, że PPWR NIE w… | ZMIEKCZ |
| 23 | **Raben, Rohlig, DSV** – Operatorzy logistyczni obsługujący transport DC → DC (Raben, Rohlig, DSV). | Powiązane (L1455) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne | ZMIEKCZ |
| 24 | **Lidl, Biedronka, Dino, Carrefour, Selgros, Auchan, Rossmann…** – praktycznie wszystkie sieci ponadlokalne (Lidl, Biedronka, Dino, Carrefour, Sel… | FAQ (L1471) | 🔴 | brak – lista sieci ilustracyjna, twierdzenie o objęciu regu… | ZMIEKCZ |
| 25 | **Żabka, ABC, Lewiatan** – Sieci franczyzowe (Żabka, ABC, Lewiatan) są objęte na poziomie centrali | FAQ (L1472) | 🔴 | brak – twierdzenie o strukturze prawnej osób trzecich, niew… | ZMIEKCZ |
| 26 | **5–10 sklepów; WMS; 12–16 tygodni** – grupę 5–10 sklepów w jednym regionie (…) integrację z WMS. Czas: 12–16 tygodni … | FAQ pilotaż (L1473) | 🔴 | brak – liczba sklepów i czas 12–16 tygodni to model AI; 'in… | OZNACZ_SZACUNEK |
| 27 | **Mehrweg; od lat 90. XX w.** – Opakowania transportowe wielokrotnego użytku (Mehrweg) są standardem niemieckie… | FAQ DACH (L1475) | 🔴 | brak – datowanie 'od lat 90.' i status 'standard' nieweryfi… | ZMIEKCZ |
| 28 | **nazwa marki bekuplast; typy: skrzynki, palety** – Opakowania zwrotne dla handlu i FMCG – skrzynki, palety \| bekuplast | meta title (L5) | 🏭 | tylko bekuplast może potwierdzić zakres oferty | ZOSTAW |
| 29 | **system DC → sklep → zwrot → mycie → DC** – Nie projektujemy pojedynczego SKU – projektujemy system: DC → sklep → zwrot → m… | Kluczowe wnioski (L1224) | 🏭 | opis podejścia/oferty bekuplast | ZOSTAW |
| 30 | **pięć (5)** – Pięć wyzwań handlu detalicznego i FMCG | Wyzwania nagłówek (L1234) | 🏭 | struktura redakcyjna strony | ZOSTAW |
| 31 | **ALC tradeline AL643G** – ALC tradeline AL643G | Wyzwanie 01 karta produkt… | 🏭 | tylko bekuplast może potwierdzić serię/kod | POTWIERDZ_BEKUPLAST |
| 32 | **skrzynki przegrodowe** – Skrzynki przegrodowe | Wyzwanie 02 karta (L1254) | 🏭 | tylko bekuplast może potwierdzić | POTWIERDZ_BEKUPLAST |
| 33 | **basicline; 8–12 lat** – basicline (…) amortyzacja 8–12 lat | Wyzwanie 03 karta (L1263) | 🏭 | seria basicline – tylko bekuplast; okres 8–12 lat = deklaro… | POTWIERDZ_BEKUPLAST |
| 34 | **laser, hot-stamp, RFID** – Skrzynki przegrodowe z trwałym znakowaniem (laser, hot-stamp, przygotowanie pod… | Wyzwanie 04 (L1269) | 🏭 | tylko bekuplast może potwierdzić metody znakowania | POTWIERDZ_BEKUPLAST |
| 35 | **laser, hot-stamp, RFID** – Skrzynki przegrodowe (…) laser · hot-stamp · RFID | Wyzwanie 04 karta (L1272) | 🏭 | tylko bekuplast może potwierdzić metody znakowania | POTWIERDZ_BEKUPLAST |
| 36 | **ALC tradeline AL643G** – ALC tradeline AL643G | Produkty (L1299) | 🏭 | tylko bekuplast może potwierdzić serię/kod | POTWIERDZ_BEKUPLAST |
| 37 | **basicline** – basicline (…) Uniwersalna DC → sklep | Produkty (L1301) | 🏭 | tylko bekuplast może potwierdzić | POTWIERDZ_BEKUPLAST |
| 38 | **lightline** – lightline (…) Przenoszenie ręczne | Produkty (L1302) | 🏭 | tylko bekuplast może potwierdzić | POTWIERDZ_BEKUPLAST |
| 39 | **clever; redukcja objętości 84%** – Składane (clever) (…) Redukcja objętości 84% | Produkty (L1303) | 🏭 | seria clever – bekuplast; 84% = deklarowana specyfikacja sk… | POTWIERDZ_BEKUPLAST |
| 40 | **sztaplowanie 4** – Skrzyniopalety (…) Sztaplowanie 4 | Produkty (L1305) | 🏭 | tylko bekuplast może potwierdzić krotność sztaplowania | POTWIERDZ_BEKUPLAST |
| 41 | **Rossmann; DE; 2025; 160 000 pojemników** – ROSSMANN (…) Intralogistyka sieci drogerii (DE) (…) 2025 · 160 000 pojemników | Case Study (L1374-1376) | 🏭 | tylko bekuplast może potwierdzić case study i wolumen | POTWIERDZ_BEKUPLAST |
| 42 | **Orbico; PL; 2023; 46 000 pojemników** – Orbico (…) Dystrybucja beauty i FMCG (PL) (…) 2023 · 46 000 pojemników | Case Study (L1382-1384) | 🏭 | tylko bekuplast może potwierdzić case study i wolumen | POTWIERDZ_BEKUPLAST |
| 43 | **Onninen; contecline; 2019; 40 000 pojemników** – Onninen (…) pojemniki contecline (…) 2019 · 40 000 pojemników | Case Study (L1390-1392) | 🏭 | tylko bekuplast może potwierdzić (klient + seria contecline… | POTWIERDZ_BEKUPLAST |
| 44 | **Auto Partner SA; PL; 2022; 27 000 pojemników** – Auto Partner SA (…) Dystrybucja części samochodowych (PL) (…) 2022 · 27 000 poj… | Case Study (L1398-1400) | 🏭 | tylko bekuplast może potwierdzić case study i wolumen | POTWIERDZ_BEKUPLAST |
| 45 | **CO₂** – kalkulator pokaże próg rentowności i strukturę emisji CO₂ | Koszt PPWR (L1417) | 🏭 | opis funkcji narzędzia bekuplast | ZOSTAW |
| 46 | **8–12 tygodni** – Czas projektu + prototypu: 8–12 tygodni. | FAQ warzywa (L1474) | 🏭 | tylko bekuplast może potwierdzić czasy projektowe/prototypo… | POTWIERDZ_BEKUPLAST |
| 47 | **DACH; Edeka, Rewe, Aldi, Lidl Group; od dziesięcioleci** – bekuplast obsługuje sieci handlowe w regionie DACH od dziesięcioleci (Edeka, Re… | FAQ DACH (L1475) | 🏭 | tylko bekuplast może potwierdzić klientów DACH | POTWIERDZ_BEKUPLAST |
| 48 | **24 godziny** – Kontakt do 24 godzin | Kontakt (L1486) | 🏭 | deklaracja obsługowa (SLA) bekuplast | POTWIERDZ_BEKUPLAST |
| 49 | **EPAL** – na paletach drewnianych EPAL | Wyzwanie 01 (L1242) | 📐 | EPAL – powszechnie znany, publiczny standard palety | ZOSTAW |
| 50 | **ROP** – ROP za opakowania – rosnący koszt opakowań jednorazowych | Wyzwanie 03 nagłówek (L12… | 📐 | ROP – Rozszerzona Odpowiedzialność Producenta (koncepcja UE… | ZOSTAW |
| 51 | **Palety Euro; ISPM-15** – Palety Euro (…) Bez obróbki ISPM-15 | Produkty (L1304) | 📐 | ISPM-15 (IPPC) – palety z tworzywa poza zakresem normy (baz… | ZOSTAW |
| 52 | **art. 29; 40%; do 2030 r.** – PPWR art. 29 – 40% opakowań wielokrotnego użytku do 2030 r. | lede/H1 (L1197) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (baza A2) | ZOSTAW |
| 53 | **40% do 2030 (wiążący); 70% do 2040 (aspiracyjny)** – Obowiązuje 40% opakowań wielokrotnego użytku do 2030 r. (cel wiążący) i dążenie… | Kluczowe wnioski (L1224) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (baza A2) | ZOSTAW |
| 54 | **art. 29; adresat = podmioty stosujące** – Art. 29 PPWR dotyczy podmiotów stosujących opakowania transportowe | Kluczowe wnioski (L1224) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (baza C2) | ZOSTAW |
| 55 | **art. 29** – PPWR art. 29 – obowiązek po stronie podmiotu stosującego opakowania | Wyzwanie 02 nagłówek (L12… | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (baza C2) | ZOSTAW |
| 56 | **od 1 października 2025 r.** – Kaucja konsumencka (od 1 października 2025 r.) | Wyzwanie 04 nagłówek (L12… | ✅ | gov.pl – polski system kaucyjny od 1.10.2025 | ZOSTAW |
| 57 | **butelki szklane, puszki, PET** – Kaucja na butelki szklane, puszki i PET | Wyzwanie 04 (L1269) | ✅ | gov.pl – zakres polskiego systemu kaucyjnego (szkło, puszki… | ZOSTAW |
| 58 | **art. 29 ust. 1; 40% 2030; 70% 2040** – Art. 29 ust. 1 (…) 40% opakowań transportowych wielokrotnego użytku do 2030 r. … | karta PPWR (L1323) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (baza A2) | ZOSTAW |
| 59 | **art. 5; 12 sierpnia 2026 r.** – Art. 5 PFAS (…) od 12 sierpnia 2026 r. (np. powlekane pudełka na frytki, tacki) | karta PPWR (L1325) | ✅ | EUR-Lex 2025/40 art. 5 ust. 5-6, od 12.08.2026 (baza D1/D5) | ZOSTAW |
| 60 | **PFAS nie dotyczy palet** – To odrębny przepis – nie dotyczy palet ani ich obróbki. | karta PPWR (L1325) | ✅ | EUR-Lex 2025/40 art. 5 (baza D1 – rozdzielenie PFAS/ISPM-15) | ZOSTAW |
| 61 | **art. 29 ust. 6** – Art. 29 ust. 6 (…) Cele ponownego użycia opakowań napojowych | karta PPWR (L1326) | ✅ | EUR-Lex 2025/40 art. 29 ust. 6 (baza A5) | ZOSTAW |
| 62 | **40% 2030 wiążący; 70% 2040 aspiracyjny** – co najmniej 40% do 2030 r. – cel wiążący; dążenie do 70% do 2040 r. – cel aspir… | blockquote (L1338) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (baza A2) | ZOSTAW |
| 63 | **PET, puszki; UE od 2029; PL od 1.10.2025** – obowiązkami systemów kaucyjnych dla jednorazowych butelek PET i puszek (wymóg u… | blockquote (L1338) | ✅ | gov.pl (PL 1.10.2025); data UE 2029 spójna z bazą (12.02.20… | ZOSTAW |
| 64 | **rozp. (UE) 2025/40; art. 29 i 50; EUR-Lex** – na podstawie rozporządzenia (UE) 2025/40 (PPWR), art. 29 i 50 – EUR-Lex | cite blockquote (L1339) | ✅ | EUR-Lex CELEX:32025R0040 (akt zweryfikowany); art. 29 potwi… | ZMIEKCZ |
| 65 | **40% 2030 wiążący; 70% 2040 aspiracyjny** – co najmniej 40% takich opakowań (…) do 2030 r. (cel wiążący), a do 2040 r. (…) … | FAQ art. 29 (L1469) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (baza A2) | ZOSTAW |
| 66 | **UC100; brak stawki** – Kary za niespełnienie celów PPWR określi polska ustawa krajowa (…) (projekt UC1… | FAQ kary (L1470) | ✅ | art. 68 PPWR (kary ustalą państwa do 12.02.2027) + projekt … | ZOSTAW |
| 67 | **1000 kg; art. 29 ust. 13** – mikroprzedsiębiorstwo, które w danym roku udostępniło nie więcej niż 1000 kg op… | FAQ (L1471) | ✅ | EUR-Lex 2025/40 art. 29 ust. 13 (baza B4) | ZOSTAW |
| 68 | **1000 kg; art. 29 ust. 13; brak progu obrotu** – Ze zwolnienia może skorzystać tylko mikroprzedsiębiorstwo udostępniające nie wi… | FAQ (L1472) | ✅ | EUR-Lex 2025/40 art. 29 ust. 13 (baza B4/B5) | ZOSTAW |


## Strona #10 – E-commerce i fulfillment

Pozycji: 59 · 🔴 22 · 🏭 20 · 📐 1 · ✅ 16

| # | Wartość / fragment | Sekcja | Prow. | Źródło / podstawa | Rekom. |
|---|---|---|:--:|---|---|
| 1 | **Allegro Fulfillment, Amazon Logistics, InPost, DPD, DHL** – Allegro Fulfillment, Amazon Logistics, InPost, DPD czy DHL podlegają mu o tyle,… | Kluczowe wnioski (L1224) | 🔴 | brak w tekście prawnym – baza A3 mówi wprost, że kurierzy/f… | ZMIEKCZ |
| 2 | **InPost** – Paczkomaty InPost to naturalna baza dla RTP | Kluczowe wnioski (L1224) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | ZMIEKCZ |
| 3 | **Mehrweg od 2024 r.; Tchibo, Otto, Zalando** – Niemcy budują opakowania wielokrotnego użytku w e-commerce (Mehrweg) od 2024 r.… | Kluczowe wnioski (L1224) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (data 2024 i… | USUN |
| 4 | **Polska vs DACH** – Gotowa sieć paczkomatów daje Polsce przewagę nad regionem DACH | Kluczowe wnioski (L1224) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | ZMIEKCZ |
| 5 | **1 mln paczek/mies.; 12–28 mln zł** – Fulfillment center obsługujące 1 mln paczek miesięcznie inwestuje 12–28 mln zł | Kluczowe wnioski (L1224) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (kwota inwes… | USUN |
| 6 | **30–42 miesiące** – Okres zwrotu: 30–42 miesiące. | Kluczowe wnioski (L1224) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (okres zwrot… | USUN |
| 7 | **5–8 mln szt. kartonów; 12–18 ton folii; 1 mln paczek/mies.** – zużywa się rocznie 5–8 mln szt. kartonów jednorazowych i 12–18 ton folii stretch | Wyzwanie 01 (L1242) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (wolumeny zu… | USUN |
| 8 | **2,8–4,1 mln zł/rok** – Koszt utylizacji: 2,8–4,1 mln zł/rok. | Wyzwanie 01 (L1242) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (kwota koszt… | USUN |
| 9 | **amortyzacja 30–42 mies.** – Skrzynka zwrotna e-commerce + totes · amortyzacja 30–42 mies. | Wyzwanie 01 / karta produ… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (okres amort… | USUN |
| 10 | **8–14%** – Zwroty to 8–14% paczek | Wyzwanie 02 (L1251) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (odsetek zwr… | OZNACZ_SZACUNEK |
| 11 | **Allegro, InPost, DPD, DHL, FedEx; art. 29** – Allegro, InPost, DPD, DHL, FedEx czy kurierzy lokalni podlegają art. 29 o tyle,… | Wyzwanie 03 (L1260) | 🔴 | brak w tekście prawnym – baza A3: rozporządzenie NIE wymien… | ZMIEKCZ |
| 12 | **InPost/Allegro S/M/L** – clever move box + totes + palety plastikowe · InPost/Allegro S/M/L | Wyzwanie 03 / karta produ… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (kompatybiln… | USUN |
| 13 | **18–24% moda; 8–12% elektronika** – współczynnik zwrotów wynosi 18–24% w branży modowej i 8–12% w elektronice | Wyzwanie 04 (L1269) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (odsetki zwr… | OZNACZ_SZACUNEK |
| 14 | **InPost/Allegro S/M/L** – Skrzynki paczkomatowe ... InPost/Allegro S/M/L | Nasze produkty (L1297) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (dopasowanie… | USUN |
| 15 | **2026 r.; 3 pilotaże** – Trzy pilotaże, które warto uruchomić w 2026 r. | PPWR sekcja (L1307) | 🔴 | brak – rekomendacja redakcyjna, nie fakt zewnętrzny | ZOSTAW |
| 16 | **art. 24; 50%; 1.01.2030** – pusta przestrzeń w paczce e-commerce nie będzie mogła przekraczać 50% (od 1 sty… | Karta PPWR – Art. 24 (L13… | 🔴 | brak w bazie faktów – próg 50% i data 1.01.2030 dla art. 24… | OZNACZ_SZACUNEK |
| 17 | **art. 50; 2029** – art. 50 PPWR wymaga go w całej UE od 2029 r. | Karta PPWR – Art. 50 (L13… | 🔴 | brak w bazie faktów – art. 50 i data 2029 dla obowiązkowego… | OZNACZ_SZACUNEK |
| 18 | **sieci handlowe; art. 29; marketplace** – Sieci handlowe to często sprzedawcy na Twoich platformach marketplace. Art. 29 … | Może Cię też zainteresowa… | 🔴 | brak w tekście prawnym – baza A3/C2: adresatem są „podmioty… | ZMIEKCZ |
| 19 | **Raben, Rohlig, DSV** – Operatorzy logistyczni B2B (Raben, Rohlig, DSV) obsługujący transport międzymag… | Może Cię też zainteresowa… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (nazwane fir… | ZMIEKCZ |
| 20 | **Allegro Fulfillment, Amazon Logistics, InPost, DPD, DHL, Fe…** – Dotyczy to m.in. Allegro Fulfillment, Amazon Logistics, InPost (fulfillment i p… | FAQ (L1455) | 🔴 | brak w tekście prawnym – baza A3 mówi wprost, że rozporządz… | ZMIEKCZ |
| 21 | **InPost S/M/L; Allegro One Box** – projektujemy skrzynki pod skrytki paczkomatowe (InPost w rozmiarach S/M/L, auto… | FAQ (L1457) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (dopasowanie… | POTWIERDZ_BEKUPLAST |
| 22 | **5–8 lat** – To 5–8 lat eksploatacji w typowym 3PL e-commerce. | FAQ (L1459) | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (przeliczeni… | OZNACZ_SZACUNEK |
| 23 | **do 84%; clever move box** – Składane skrzynki (clever move box) redukują objętość po zwrocie do 84% | Kluczowe wnioski (L1224) | 🏭 | tylko bekuplast może potwierdzić (parametr redukcji objętoś… | POTWIERDZ_BEKUPLAST |
| 24 | **Clever Retail Box 4011** – Clever Retail Box 4011 | Wyzwanie 01 / karta produ… | 🏭 | tylko bekuplast może potwierdzić (nazwa własna serii/produk… | POTWIERDZ_BEKUPLAST |
| 25 | **do 84%** – składana redukuje objętość do 84% | Wyzwanie 02 (L1251) | 🏭 | tylko bekuplast może potwierdzić (parametr redukcji objętoś… | POTWIERDZ_BEKUPLAST |
| 26 | **do 84%** – Redukcja objętości po złożeniu do 84% (dane bekuplast) | Wyzwanie 02 / karta produ… | 🏭 | deklarowane jako „dane bekuplast" – tylko bekuplast może po… | POTWIERDZ_BEKUPLAST |
| 27 | **znakowanie laserowe; RFID; WMS** – Znakowanie laserowe + przygotowane pod RFID · integracja z WMS | Wyzwanie 04 / karta produ… | 🏭 | tylko bekuplast może potwierdzić (funkcje/przygotowanie pro… | POTWIERDZ_BEKUPLAST |
| 28 | **silverline** – silverline | Nasze produkty (L1292) | 🏭 | tylko bekuplast może potwierdzić (nazwa własnej serii) | POTWIERDZ_BEKUPLAST |
| 29 | **contecline** – contecline | Nasze produkty (L1293) | 🏭 | tylko bekuplast może potwierdzić (nazwa własnej serii) | POTWIERDZ_BEKUPLAST |
| 30 | **lightline** – lightline | Nasze produkty (L1294) | 🏭 | tylko bekuplast może potwierdzić (nazwa własnej serii) | POTWIERDZ_BEKUPLAST |
| 31 | **clever move box; skrzynka do paczkomatu; totes** – clever move box (składana skrzynka na zwroty), skrzynka zwrotna do paczkomatu o… | PPWR sekcja (L1307) | 🏭 | tylko bekuplast może potwierdzić (nazwy/zakres własnych pro… | POTWIERDZ_BEKUPLAST |
| 32 | **Rossmann; 2025; 160 000 pojemników** – ROSSMANN ... 2025 ... 160 000 pojemników | Case Studies (L1365-1367) | 🏭 | tylko bekuplast może potwierdzić (case study klienta i wolu… | POTWIERDZ_BEKUPLAST |
| 33 | **Orbico; 2023; 46 000 pojemników** – Orbico ... 2023 ... 46 000 pojemników | Case Studies (L1373-1375) | 🏭 | tylko bekuplast może potwierdzić (case study klienta i wolu… | POTWIERDZ_BEKUPLAST |
| 34 | **Onninen; contecline; 2019; 40 000 pojemników** – Onninen ... pojemniki contecline. ... 2019 ... 40 000 pojemników | Case Studies (L1381-1383) | 🏭 | tylko bekuplast może potwierdzić (case study klienta, seria… | POTWIERDZ_BEKUPLAST |
| 35 | **Auto Partner SA; 2022; 27 000 pojemników** – Auto Partner SA ... 2022 ... 27 000 pojemników | Case Studies (L1389-1391) | 🏭 | tylko bekuplast może potwierdzić (case study klienta i wolu… | POTWIERDZ_BEKUPLAST |
| 36 | **do 84%** – po zwrocie redukuje objętość do 84% w porównaniu ze skrzynkami sztywnymi | FAQ (L1456) | 🏭 | tylko bekuplast może potwierdzić (parametr redukcji objętoś… | POTWIERDZ_BEKUPLAST |
| 37 | **8–12 tygodni** – Czas projektu i prototypu to 8–12 tygodni. | FAQ (L1457) | 🏭 | tylko bekuplast może potwierdzić (czas realizacji projektu/… | POTWIERDZ_BEKUPLAST |
| 38 | **80–120 cykli; HDPE** – Skrzynki składane z HDPE w jakości przemysłowej wytrzymują 80–120 cykli rotacji | FAQ (L1459) | 🏭 | tylko bekuplast może potwierdzić (liczba cykli własnego pro… | POTWIERDZ_BEKUPLAST |
| 39 | **DACH od dekad; Hermes Fulfillment; DHL Supply Chain (DE)** – bekuplast obsługuje operatorów fulfillmentu w DACH od dekad. Współpracujemy z H… | FAQ (L1460) | 🏭 | tylko bekuplast może potwierdzić (deklarowana własna współp… | POTWIERDZ_BEKUPLAST |
| 40 | **24 godziny** – Kontakt do 24 godzin | Formularz kontaktowy (L14… | 🏭 | tylko bekuplast może potwierdzić (deklarowany czas kontaktu… | POTWIERDZ_BEKUPLAST |
| 41 | **vol 200; KD 0; CPC 70 zł** – opakowania ecommerce (vol 200, KD 0, CPC 70 zł) | DEV meta (L1149) | 🏭 | dane narzędzia SEO (nie publikowane na stronie) – komentarz… | ZOSTAW |
| 42 | **150–400/m; 12m** – Potencjał 12m: 150–400/m | DEV meta (L1150) | 🏭 | wewnętrzny szacunek SEO – komentarz deweloperski [DEV] | ZOSTAW |
| 43 | **art. 24** – art. 24 ogranicza pustą przestrzeń w paczkach | PPWR sekcja (L1307) | 📐 | EUR-Lex 2025/40 art. 24 (minimalizacja opakowań/pustej prze… | ZOSTAW |
| 44 | **art. 29; 40%; 2030** – Art. 29 PPWR – 40% ponownego użycia do 2030 r. | Lede / hero (L1197) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 (cel 40% od 1.01.2030, wiążą… | ZOSTAW |
| 45 | **art. 29 ust. 3** – e-commerce jest objęty wprost (art. 29 ust. 3) | Kluczowe wnioski (L1224) | ✅ | EUR-Lex 2025/40 art. 29 ust. 3 (e-commerce wprost objęty) –… | ZOSTAW |
| 46 | **40%; 2030** – Cel: 40% ponownego użycia do 2030 r. | Kluczowe wnioski (L1224) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 – baza faktów A2 | ZOSTAW |
| 47 | **40%; 2030** – Cel: 40% ponownego użycia opakowań transportowych do 2030 r. | Wyzwanie 03 (L1260) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 – baza faktów A2 | ZOSTAW |
| 48 | **tektura poza celami** – pudła tekturowe pozostają poza celami | PPWR sekcja (L1307) | ✅ | EUR-Lex 2025/40 art. 29 ust. 4 lit. d (wyłączenie pudeł tek… | ZOSTAW |
| 49 | **art. 29 ust. 1; 40%/2030 wiążący; 70%/2040 aspiracyjny** – 40% ponownego użycia w opakowaniach transportowych do 2030 r. (cel wiążący), 70… | Karta PPWR – Art. 29 ust.… | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 – baza faktów A2 (40% wiążąc… | ZOSTAW |
| 50 | **UC100** – Kary określi polska ustawa krajowa (projekt UC100). | Karta PPWR – Art. 29 ust.… | ✅ | baza faktów C1 (PPWR nie określa kar; art. 68 – państwa czł… | ZOSTAW |
| 51 | **art. 29 ust. 6; 10%/2030; 40%/2040 aspiracyjny** – Cele ponownego użycia dla napojów (10% w 2030 r., 40% w 2040 r. jako cel aspira… | Karta PPWR – Art. 29 ust.… | ✅ | EUR-Lex 2025/40 art. 29 ust. 6 – baza faktów A5 (10% wiążąc… | ZOSTAW |
| 52 | **system kaucyjny; 1.10.2025** – E-commerce sprzedający napoje musi uwzględnić system kaucyjny ... w Polsce dzia… | Karta PPWR – Art. 50 (L13… | ✅ | gov.pl – polski system kaucyjny uruchomiony 1.10.2025 (fakt… | ZOSTAW |
| 53 | **40%/2030 wiążący; 70%/2040 aspiracyjny** – co najmniej 40% do 2030 r. (cel wiążący) i 70% do 2040 r. (cel aspiracyjny). | Blockquote / Następne kro… | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 – baza faktów A2 | ZOSTAW |
| 54 | **rozp. (UE) 2025/40; art. 29; EUR-Lex** – na podstawie rozporządzenia (UE) 2025/40 (PPWR), art. 29 – EUR-Lex | Podpis blockquote / cite … | ✅ | EUR-Lex CELEX:32025R0040 art. 29 – baza faktów (źródło pier… | ZOSTAW |
| 55 | **art. 29 ust. 3** – handel elektroniczny jest objęty wprost (art. 29 ust. 3) | FAQ (L1454) | ✅ | EUR-Lex 2025/40 art. 29 ust. 3 – baza faktów A3 | ZOSTAW |
| 56 | **40%/2030 wiążący; 70%/2040 aspiracyjny** – 40% ponownego użycia opakowań transportowych do 2030 r. (cel wiążący) i 70% do … | FAQ (L1454) | ✅ | EUR-Lex 2025/40 art. 29 ust. 1 – baza faktów A2 | ZOSTAW |
| 57 | **1000 kg; art. 29 ust. 13** – zwolnione są mikroprzedsiębiorstwa udostępniające nie więcej niż 1000 kg opakow… | FAQ (L1454) | ✅ | EUR-Lex 2025/40 art. 29 ust. 13 (mikro + 1000 kg, warunki k… | ZOSTAW |
| 58 | **art. 29 ust. 4 lit. d** – Pudła tekturowe są wyłączone z tych obowiązków (art. 29 ust. 4 lit. d) | FAQ (L1454) | ✅ | EUR-Lex 2025/40 art. 29 ust. 4 lit. d – baza faktów A3 | ZOSTAW |
| 59 | **UC100** – Kary za niespełnienie celów PPWR określi polska ustawa krajowa (projekt UC100, … | FAQ (L1458) | ✅ | baza faktów C1 (PPWR nie określa kar; art. 68 – polska usta… | ZOSTAW |


## Strona #IDX – index (hub deweloperski)

Pozycji: 35 · 🔴 6 · 🏭 19 · 📐 5 · ✅ 5

| # | Wartość / fragment | Sekcja | Prow. | Źródło / podstawa | Rekom. |
|---|---|---|:--:|---|---|
| 1 | **„standard OEM-ów od dekad" (RTP closed-loop)** – Obieg zamknięty RTP to standard OEM-ów od dekad. | Karta #01 Motoryzacja (de… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | ZMIEKCZ |
| 2 | **Art. 29(1)** – NOWA mieszany Art. 29(1), pooling | Karta #06 Logistyka 3PL (… | 🔴 | baza faktów A2/C2: etykieta „29(1)" przypisana 3PL jako odr… | ZMIEKCZ |
| 3 | **Art. 29(1) PPWR dla „operatorów 3PL"** – Palety, skrzyniopalety i pojemniki zwrotne dla operatorów 3PL. Art. 29(1) PPWR. | Karta #06 Logistyka 3PL (… | 🔴 | baza faktów A2/A3/C2: art. 29 ust. 1 istnieje, ale adresate… | ZMIEKCZ |
| 4 | **Lidl, Biedronka, Carrefour** – REBRAND pain-point #1 Lidl/Biedronka/Carrefour | Karta #09 Handel FMCG (me… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | USUN |
| 5 | **systemy dystrybucyjne DC → sklep; „Priorytet #1 PPWR"** – Skrzynki przegrodowe, palety, systemy dystrybucyjne DC → sklep. Priorytet #1 PP… | Karta #09 Handel FMCG (de… | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (ocena prior… | ZMIEKCZ |
| 6 | **Allegro, InPost, DPD** – NOWA pain-point #2 Allegro/InPost/DPD | Karta #10 E-commerce/3PL … | 🔴 | brak – wygenerowane przez AI, nieweryfikowalne (twierdzenie… | USUN |
| 7 | **10 stron / 10 podstron** – makiety 10 stron branżowych | TL;DR / tytuł i nagłówek | 🏭 | tylko bekuplast/crear może potwierdzić – zakres projektu | ZOSTAW |
| 8 | **9 makiet (pozostałych)** – dropdown z linkami do pozostałych 9 makiet | Nagłówek (header, opis) | 🏭 | tylko bekuplast/crear może potwierdzić – struktura projektu | ZOSTAW |
| 9 | **maj 2026** – 🔬 PROTOTYPY · kampania PPWR · maj 2026 | Badge nagłówka (label) | 🏭 | tylko bekuplast/crear może potwierdzić – data kampanii/prot… | ZOSTAW |
| 10 | **bekuplast.pl** – Domena bekuplast.pl | Meta-bar | 🏭 | domena klienta – bekuplast | ZOSTAW |
| 11 | **Polska (PL only)** – Rynek Polska (PL only) | Meta-bar | 🏭 | tylko bekuplast/crear może potwierdzić – zakres rynkowy kam… | ZOSTAW |
| 12 | **Prototypy lo-fi** – Status Prototypy lo-fi | Meta-bar | 🏭 | metadana projektu – status prototypów (crear/bekuplast) | ZOSTAW |
| 13 | **Mateusz Pasternak (crear)** – Autor Mateusz Pasternak (crear) | Meta-bar | 🏭 | autor projektu – crear agency | ZOSTAW |
| 14 | **VDA 4500 (KLT) przypisane do pojemników bekuplast** – Pojemniki KLT i VDA 4500 dla tier 1/2/3 dostawców OEM. | Karta #01 Motoryzacja (de… | 🏭 | VDA 4500 to realna norma, ale zgodność KONKRETNYCH pojemnik… | POTWIERDZ_BEKUPLAST |
| 15 | **vol 1 300 (wolumen wyszukiwań)** – skrzynka na piwo · vol 1 300 | Karta #03 Napoje (meta) | 🏭 | tylko bekuplast/crear może potwierdzić – dane SEO (search v… | ZOSTAW |
| 16 | **IEC 61340-5-1; „sterylizowalne"** – Pojemniki ESD wg IEC 61340-5-1, sterylizowalne dla farmacji. | Karta #04 Farmacja i kosm… | 🏭 | IEC 61340-5-1 to realna norma, ale zgodność KONKRETNEGO poj… | POTWIERDZ_BEKUPLAST |
| 17 | **silverline; AKL; tolerancja ±0,3 mm** – silverline, AKL, ±0,3 mm | Karta #05 Intralogistyka … | 🏭 | tylko bekuplast może potwierdzić – nazwa serii silverline o… | POTWIERDZ_BEKUPLAST |
| 18 | **silverline; contecline; AKL; shuttle** – Pojemniki silverline, contecline, ESD dla magazynów AKL i shuttle. Quick win SE… | Karta #05 Intralogistyka … | 🏭 | tylko bekuplast może potwierdzić – nazwy własnych serii sil… | POTWIERDZ_BEKUPLAST |
| 19 | **vol 250 (wolumen wyszukiwań)** – REBRAND mieszany (high SEO) vol 250 | Karta #07 Rolnictwo (meta) | 🏭 | tylko bekuplast/crear może potwierdzić – dane SEO (search v… | ZOSTAW |
| 20 | **pooling sezonowy; skrzynki na warzywa/jabłka/truskawki** – Skrzynki na warzywa, do zbioru jabłek i truskawek. Pooling sezonowy. | Karta #07 Rolnictwo (desc) | 🏭 | tylko bekuplast może potwierdzić – zakres oferty i zastosow… | ZOSTAW |
| 21 | **basicline; silverline; palety Euro** – Pojemniki basicline, silverline, palety Euro dla AGD, elektroniki, mebli, chemi… | Karta #08 Produkcja przem… | 🏭 | nazwy serii bekuplast – tylko bekuplast; „paleta Euro" 1200… | POTWIERDZ_BEKUPLAST |
| 22 | **skrzynki paczkomatowe; totes; kuwety na zwroty** – Składane skrzynki paczkomatowe, totes magazynowe, kuwety na zwroty. | Karta #10 E-commerce/3PL … | 🏭 | tylko bekuplast może potwierdzić – zakres oferty | ZOSTAW |
| 23 | **github.com/{owner}/bekuplast-makiety-branzowe** – Repo: github.com/{owner}/bekuplast-makiety-branzowe | Stopka (footer) | 🏭 | repo projektu – placeholder {owner}, wewnętrzne | ZOSTAW |
| 24 | **HTML + inline CSS; Python; TYPO3** – stack: pure HTML + inline CSS · build: Python · ... status: prototyp pre-implem… | Stopka (footer) | 🏭 | metadane techniczne projektu – wewnętrzne | ZOSTAW |
| 25 | **Notion teamspace „bekuplast PPWR – Centrum projektu”** – Dokumentacja kampanii PPWR: Notion teamspace „bekuplast PPWR – Centrum projektu” | Stopka (footer) | 🏭 | dokumentacja projektu – wewnętrzna (Notion) | ZOSTAW |
| 26 | **KLT / VDA 4500; tier 1/2/3** – compliance KLT/VDA, tier 1/2/3 | Karta #01 Motoryzacja (me… | 📐 | VDA 4500 (KLT – norma zrzeszenia niemieckiego przemysłu mot… | ZOSTAW |
| 27 | **HACCP; PFAS ban** – pain-point HACCP, PFAS ban | Karta #02 Przetwórstwo ży… | 📐 | HACCP (system bezpieczeństwa żywności); „PFAS ban" = PPWR a… | ZOSTAW |
| 28 | **HACCP** – Pojemniki HACCP dla piekarni, mleczarni, mięsa. | Karta #02 Przetwórstwo ży… | 📐 | HACCP (powszechny standard bezpieczeństwa żywności); segmen… | ZOSTAW |
| 29 | **rozp. (UE) nr 10/2011; HDPE bez PFAS** – HDPE bez PFAS, dopuszczenie Reg. (UE) 10/2011. | Karta #02 Przetwórstwo ży… | 📐 | rozporządzenie (UE) nr 10/2011 (kontakt z żywnością); baza … | ZOSTAW |
| 30 | **ESD; sterylizowalne** – compliance ESD, sterylizowalne, transport farmacja + kosmetyki | Karta #04 Farmacja i kosm… | 📐 | IEC 61340-5-1 (ESD) – norma publiczna; „sterylizowalne" = c… | ZOSTAW |
| 31 | **rozporządzenie (UE) 2025/40** – kampania PPWR (rozporządzenie (UE) 2025/40, stosowane od 12 sierpnia 2026 r.) | Nagłówek (header, opis) | ✅ | EUR-Lex CELEX:32025R0040 (PPWR); baza faktów nagłówek + C3 | ZOSTAW |
| 32 | **12 sierpnia 2026 r.** – stosowane od 12 sierpnia 2026 r. | Nagłówek (header, opis) | ✅ | EUR-Lex 2025/40 art. 71; baza faktów C3 | ZOSTAW |
| 33 | **Kaucja 2025 (system kaucyjny)** – Skrzynki przegrodowe dla browarów, mleczarni, rozlewni. Kaucja 2025 + ROP + PPW… | Karta #03 Napoje (desc) | ✅ | gov.pl – polski system kaucyjny (start 1.10.2025); ROP; PPWR | ZOSTAW |
| 34 | **farmacja/kosmetyki w zakresie PPWR** – Opakowania transportowe farmacji i kosmetyków w zakresie PPWR. | Karta #04 Farmacja i kosm… | ✅ | EUR-Lex 2025/40; baza faktów B1/B3 (brak wyłączenia farmace… | ZOSTAW |
| 35 | **Art. 29(2)** – pain-point closed-loop, Art. 29(2) | Karta #08 Produkcja przem… | ✅ | EUR-Lex 2025/40 art. 29 ust. 2; baza faktów A1 (obowiązek w… | ZOSTAW |

---

## 🔴 Załącznik: wszystkie wartości WYGENEROWANE PRZEZ AI (bez źródła) – do decyzji

To są dane, których nie da się potwierdzić żadnym źródłem – powstały jako prawdopodobne ilustracje. Każdą trzeba: zastąpić twardą daną bekuplast, oznaczyć „wg szacunków bekuplast", zmiękczyć albo usunąć.


### #01
- **najlepiej przygotowana** (H1 lede / TL;DR (L1196, L1223)) – „Branża najlepiej przygotowana na PPWR w Polsce" → _Superlatyw rankingowy bez źródła ani metryki, powtórzony wielokrotnie na stronie._ · **ZMIEKCZ**
- **od końca lat 80. XX w.** (Kluczowe wnioski (L1223)) – „OEM-y w regionie DACH (VW, BMW, Mercedes) działają w obiegu zamkniętym (closed-loop) RTP od końca lat 80. XX …" → _Twierdzenie o zachowaniu konkretnych OEM „od końca lat 80." to nieweryfikowalne twierdzenie o osobach trzecich, bez oparcia w bazie faktów ani źródle urzędowym._ · **OZNACZ_SZACUNEK**
- **wszystkie OEM-y** (Kluczowe wnioski / FAQ (L1223…) – „wszystkie OEM-y wymagają tego standardu" → _Absolut „wszystkie OEM-y wymagają" to niepotwierdzalne twierdzenie o wymaganiach osób trzecich._ · **ZMIEKCZ**
- **VW C-Box, BMW SuperRack, Mercedes Pool** (Kluczowe wnioski (L1223)) – „Pooling OEM (VW C-Box, BMW SuperRack, Mercedes Pool) to wewnętrzny system dystrybucji RTP" → _Konkretne nazwy własnych systemów poolingowych OEM to ryzykowne twierdzenie o osobach trzecich._ · **USUN**
- **tier 2/3** (Kluczowe wnioski (L1223)) – „Dostawcy tier 2/3 muszą się do niego dopasować" → _Ogólnikowa teza o łańcuchu dostaw bez oparcia w źródle._ · **ZMIEKCZ**
- **integracja z WMS OEM** (Kluczowe wnioski (L1223)) – „Branża potrzebuje doskonalenia operacyjnego – ograniczenia uszkodzeń, optymalizacji cykli i integracji z WMS …" → _Pominięte w etapie 1; integracja z „WMS OEM" to twierdzenie o kompatybilności z systemem osoby trzeciej, niskiego, lecz realnego ryzyka._ · **ZMIEKCZ**
- **odrzucenie przez OEM** (Wyzwanie 01 (L1241)) – „Pojemnik niezgodny ze standardem zostaje odrzucony przez OEM" → _Pominięte w etapie 1; twierdzenie o skutku (odrzucenie) po stronie OEM to niepotwierdzalne twierdzenie o osobie trzeciej._ · **ZMIEKCZ**
- **kilka tysięcy komponentów; lata 90.** (Wyzwanie 02 (L1250)) – „Współczesny samochód ma kilka tysięcy komponentów elektronicznych – wielokrotnie więcej niż w latach 90." → _Liczba komponentów i porównanie do lat 90. bez źródła._ · **OZNACZ_SZACUNEK**
- **VW / BMW / Mercedes** (Produkty – Indywidualne pod O…) – „Projektowane pod systemy poolingowe VW / BMW / Mercedes" → _Przeklasyfikowane z DANE_BEKUPLAST: mimo braku nazw własnych systemów, wiązanie produktu z poolingiem konkretnych, nazwanych OEM to twierdzenie o kompatybilności z osobą trzecią, nie sama oferta bekuplast._ · **ZMIEKCZ**
- **1988 r.** (Sekcja PPWR (L1296)) – „VDA zdefiniowała standaryzowany, poolowalny system pojemników KLT już w 1988 r." → _Rok powstania standardu VDA 4500 nie ma potwierdzenia w bazie faktów ani dostarczonym źródle urzędowym._ · **OZNACZ_SZACUNEK**
- **najlepiej przygotowany sektor** (Sekcja PPWR (L1296)) – „Polska branża automotive ... jest najlepiej przygotowanym sektorem na PPWR" → _Pominięte w etapie 1 jako osobne wystąpienie; superlatyw rankingowy bez źródła._ · **ZMIEKCZ**
- **kod QR od 2028 r.** (Karta PPWR Etykiety / FAQ (L1…) – „Oznakowanie opakowań nośnikiem danych (kod QR) wymagane przez PPWR od 2028 r." → _Przeklasyfikowane z ZEWN_ZWERYFIKOWANE: dostarczona baza faktów NIE potwierdza art. 12 ani daty QR 2028; nie wolno firmować tej daty powagą zweryfikowanego źródła._ · **OZNACZ_SZACUNEK**
- **najbardziej zaawansowany sektor** (blockquote (L1318)) – „Sektor motoryzacyjny należy do najbardziej zaawansowanych w stosowaniu opakowań zwrotnych" → _Pominięte w etapie 1; superlatyw o sektorze podany wewnątrz cytatu z atrybucją do EUR-Lex, mimo że akt prawny takiej oceny nie zawiera – pozorna powaga źródła._ · **ZMIEKCZ**
- **kilka minut** (Następne kroki – audyt (L1326)) – „Sprawdź gotowość dostawcy tier 1/2/3 w kilka minut" → _Czas trwania audytu to obietnica narzędzia, nie fakt zewnętrzny; niskie ryzyko._ · **ZOSTAW**
- **2 min** (Sekcja koszt (L1400)) – „Oblicz koszt PPWR w 2 min." → _Obietnica czasu użycia kalkulatora, niska waga faktograficzna._ · **ZOSTAW**
- **CO₂** (Sekcja koszt (L1400)) – „kalkulator pokaże próg rentowności i strukturę emisji CO₂" → _Deklaracja wyników kalkulatora; nie jest twardą wartością faktograficzną._ · **ZOSTAW**
- **wszystkie OEM-y wymagają** (FAQ (L1444)) – „Wszystkie OEM-y (VW, BMW, Mercedes, Toyota, Stellantis) wymagają tego standardu od dostawców" → _Absolutne twierdzenie o wymaganiach wszystkich nazwanych OEM bez źródła._ · **ZMIEKCZ**
- **VW C-Box, BMW SuperRack, Mercedes Pool** (FAQ (L1445)) – „Czy macie pojemniki kompatybilne z VW C-Box, BMW SuperRack, Mercedes Pool?" → _Nazwy własnych systemów poolingowych OEM jako twierdzenie o kompatybilności z osobą trzecią._ · **USUN**
- **konfiguracja pod pooling OEM; pool-ID** (FAQ (L1445, L1449)) – „Możliwa jest indywidualna konfiguracja pod konkretne systemy poolingowe OEM (znakowanie, przygotowanie pod RF…" → _Pominięte w etapie 1; oferta „konfiguracji pod systemy poolingowe OEM" i „znakowanie pool-ID" wiąże produkt ze systemem osoby trzeciej – ryzykowniejsze niż sama gama bekuplast._ · **ZMIEKCZ**
- **ECU, sensory, infotainment, EV** (FAQ (L1446)) – „Stosowane do podzespołów ECU, sensorów, modułów infotainment, bateryjnych komponentów EV" → _Lista zastosowań elektroniki samochodowej, ilustracyjna; niska waga._ · **ZOSTAW**
- **od końca lat 80.; art. 29** (FAQ (L1447)) – „działa w obiegu zamkniętym (closed-loop) RTP od końca lat 80. XX w., spełniając wymogi art. 29 PPWR" → _Odwołanie do art. 29 poprawne, ale datowanie działania OEM „od końca lat 80." to nieweryfikowalne twierdzenie o osobach trzecich – to ono decyduje o werdykcie pozycji._ · **OZNACZ_SZACUNEK**
- **2026–2028; QR od 2028 r.** (FAQ (L1447)) – „Wyzwanie na lata 2026–2028 ... oznakowanie opakowań nośnikiem danych (kod QR), wymagane przez PPWR od 2028 r." → _Przeklasyfikowane z ZEWN_ZWERYFIKOWANE: dostarczona baza faktów nie potwierdza daty QR 2028 ani art. 12; nie firmować tej daty powagą zweryfikowanego źródła._ · **OZNACZ_SZACUNEK**

### #02
- **m.in. sieci handlowych (jako adresat)** (Kluczowe wnioski) – „dotyczy podmiotów stosujących te opakowania, m.in. sieci handlowych" → _PRZEKLASYFIKOWANE z ZEWN_ZWERYFIKOWANE: 'podmioty stosujące' jest OK, ale doklejenie 'm.in. sieci handlowych' jako adresata art. 29 ust. 1 jest sprzeczne z C2 – to nie zweryfikowany fakt, lecz ryzykowne uszczegółowienie._ · **ZMIEKCZ**
- **PL odstaje od DACH** (Kluczowe wnioski) – „Piekarnie i mleczarnie w Polsce wyraźnie odstają od zakładów z regionu DACH" → _Porównanie rynkowe PL vs DACH bez żadnego źródła – twierdzenie o stanie rynku._ · **USUN**
- **Lidl, Biedronka** (Wyzwanie 03) – „Jako producent dostarczający do sieci (np. Lidl, Biedronka) odczujesz to podwójnie" → _Twierdzenie o wymaganiach nazwanych sieci wobec dostawców – ryzykowne, nieweryfikowalne twierdzenie o osobie trzeciej._ · **USUN**
- **sieci wymagają wielokrotnego użytku (już dziś)** (Wyzwanie 03) – „sieci już dziś wymagają od dostawców opakowań wielokrotnego użytku" → _Twierdzenie o obecnych praktykach osób trzecich (sieci handlowych) bez źródła – ryzykowne._ · **USUN**
- **IV kwartał** (Wyzwanie 04) – „Skrzynki na pieczywo – sezonowy szczyt w IV kwartale" → _Ogólne twierdzenie sezonowe bez źródła (ilustracyjne, jakościowe)._ · **OZNACZ_SZACUNEK**
- **4× wyższy** (Wyzwanie 04) – „notują w grudniu (Boże Narodzenie, Sylwester) szczyt nawet 4× wyższy niż średnia roczna" → _Konkretna krotność 4× bez żadnego źródła – fałszywa precyzja._ · **ZMIEKCZ**
- **sieci przenoszą wymagania na dostawców** (Karta artykułu ust. 1) – „a sieci dodatkowo przenoszą te wymagania na dostawców" → _POMINIĘTE w etapie 1 – twierdzenie o obecnym zachowaniu sieci handlowych wobec dostawców bez źródła._ · **USUN**
- **pełna kompatybilność z systemami dystrybucyjnymi** (FAQ – mleczarnie) – „pełna kompatybilność z systemami dystrybucyjnymi" → _WYODRĘBNIONE i PRZEKLASYFIKOWANE z DANE_BEKUPLAST: 'pełna kompatybilność z systemami dystrybucyjnymi' to twierdzenie o kompatybilności ze zbiorczym systemem osób trzecich – zgodnie z rubryką klasyfikowane jako NIEPOTWIERDZONE_AI, a 'pełna' to nieobroniona absolutność._ · **ZMIEKCZ**
- **recykling w 100%** (FAQ – papier/drewno) – „Tworzywo HDPE ... nadaje się do recyklingu w 100%" → _HDPE jest recyklowalny (fakt jakościowy z bazy), ale twarda wartość '100%' bez źródła to fałszywa precyzja._ · **ZMIEKCZ**

### #03
- **60–85%** (meta description (L3)) – „Redukcja stłuczek o 60–85%." → _Konkretny zakres redukcji stłuczek bez źródła; nie ma go w bazie faktów ani w żadnej normie._ · **OZNACZ_SZACUNEK**
- **szybszy próg rentowności vs karton** (Kluczowe wnioski (L37)) – „To znacznie szybszy próg rentowności niż jednorazowy karton." → _Twierdzenie porównawcze bez danych; złagodzone (bez liczby), ale nadal nieudokumentowane._ · **ZMIEKCZ**
- **większość (nabiał/soki PL jednorazowe)** (Kluczowe wnioski (L38)) – „Większość transportu nabiału i soków w Polsce to opakowania jednorazowe." → _Twierdzenie rynkowe o strukturze opakowań w PL bez źródła._ · **ZMIEKCZ**
- **2027–2028** (Kluczowe wnioski (L38)) – „inwestycja czeka w latach 2027–2028." → _Konkretne okno inwestycji nie wynika z regulacji (cele wiążące od 1.01.2030) – interpretacja AI._ · **ZMIEKCZ**
- **system Mehrweg / 2026–2027** (Kluczowe wnioski (L39)) – „Polskie browary regionalne są wyraźnie spóźnione wobec niemieckiego systemu Mehrweg, ale tempo adaptacji w la…" → _Porównanie do niemieckiego systemu Mehrweg i prognoza tempa adaptacji bez źródła; ocena wartościująca 'wyraźnie spóźnione' jest ryzykowna._ · **ZMIEKCZ**
- **2–4% obrotu** (Wyzwanie 01 nagłówek (L45)) – „Stłuczki butelek = realne koszty 2–4% obrotu" → _Konkretny % obrotu jako koszt stłuczek bez źródła._ · **OZNACZ_SZACUNEK**
- **8–12 lat** (Wyzwanie 03 tekst (L60)) – „Skrzynki zwrotne = inwestycja amortyzowana przez 8–12 lat." → _Okres amortyzacji 8–12 lat bez źródła; możliwa dana bekuplast, ale nieudokumentowana – do utrzymania tylko jako 'wg szacunków bekuplast'._ · **OZNACZ_SZACUNEK**
- **rosnący koszt netto (karton jednorazowy)** (Wyzwanie 03 tekst (L60)) – „Kartony jednorazowe = rosnący koszt netto." → _POMINIĘTE W ETAPIE 1. Twierdzenie porównawcze o rosnących kosztach kartonu jednorazowego bez danych; jakościowe, ale nieudokumentowane._ · **ZMIEKCZ**
- **18–24 mies.** (karta produktu wyzwanie 03 (L…) – „Próg rentowności 18–24 mies." → _Konkretny okres zwrotu w miesiącach bez źródła._ · **OZNACZ_SZACUNEK**
- **od 2028 r.** (karta produktu wyzwanie 04 (L…) – „Oznakowanie (kod QR) od 2028 r." → _Termin obowiązku znakowania QR od 2028 nie jest w bazie faktów ani nie wynika z żadnego cytowanego przepisu; ryzykowna precyzyjna data regulacyjna._ · **USUN**
- **pilotaż RTP 2026 / cele 2030** (Wyzwanie 05 tekst (L74)) – „Sieć, która nie ruszy z pilotażem RTP w 2026 r., zostanie z bardzo krótkim oknem wdrożenia przed celami na 20…" → _Kotwica 2030 jest twarda (art. 29), ale zdanie o 'pilotażu RTP w 2026' i 'bardzo krótkim oknie' to argumentacja handlowa/prognostyczna bez źródła – nie firmować powagą regulacji._ · **ZMIEKCZ**
- **art. 50; od 2029 r.; ≤3 l; 90%** (karta PPWR Art. 50 (L121)) – „Art. 50 – System kaucyjny w UE – od 2029 r. obowiązek kaucji na jednorazowe butelki PET i puszki metalowe (≤3…" → _PRZEKLASYFIKOWANE z ZEWN_ZWERYFIKOWANE. Etap 1 sam przyznał 'nie ujęto w addendum'. Ani numer art. 50, ani daty/progi nie są w bazie faktów; nie wolno firmować ich powagą normy bez weryfikacji w EUR-Lex._ · **OZNACZ_SZACUNEK**
- **2025/40; art. 29 i 50; EUR-Lex** (cite blockquote (L126)) – „na podstawie rozporządzenia (UE) 2025/40 (PPWR), art. 29 i 50 – EUR-Lex" → _PRZEKLASYFIKOWANE. Podpis powołuje art. 50, którego treść nie jest zweryfikowana w bazie faktów; sam art. 29 jest OK, ale atrybucja art. 50 jako 'EUR-Lex' sugeruje weryfikację, której nie ma._ · **OZNACZ_SZACUNEK**
- **Lidl, Biedronka, Dino** (Powiązane – Handel detaliczny…) – „Sieci sklepowe (Lidl, Biedronka, Dino) są Twoim najważniejszym odbiorcą. Systemy transportowe DC → sklep." → _Nazwanie konkretnych sieci jako 'najważniejszego odbiorcy' czytelnika to twierdzenie o osobach trzecich bez pokrycia; nie jest to wdrożenie bekuplast._ · **USUN**
- **Raben, Rohlig Suus** (Powiązane – Logistyka 3PL (L1…) – „Operatorzy logistyczni (Raben, Rohlig Suus) obsługujący transport międzymagazynowy napojów." → _Nazwani operatorzy 3PL jako obsługujący transport napojów – twierdzenie o osobach trzecich bez pokrycia w danych bekuplast._ · **USUN**

### #04
- **art. 29 PPWR; „wyłączenie opakowań bezpośrednich leków, bezterminowo"** (Kluczowe wnioski – wniosek 1 …) – „Opakowania bezpośrednie leków i wyrobów medycznych są wyłączone z celów ponownego użycia ze względów bezpiecz…" → _PRZEKLASYFIKOWANE z ZEWN_ZWERYFIKOWANE: etap 1 „firmował" powagą art. 29 zdanie, które twierdzi o istnieniu wyłączenia opakowań bezpośrednich leków – baza faktów temu wprost przeczy; potwierdzona jest tylko druga część (transport objęty)._ · **ZMIEKCZ**
- **med-tech „szybko rośnie"** (Wyzwanie 02 (L1251)) – „Sektor med-tech (diagnostyka, urządzenia monitorujące, sensory) szybko rośnie." → _Ogólne twierdzenie o wzroście rynku bez liczby i bez źródła – ilustracja AI._ · **ZMIEKCZ**
- **ESD/med-tech „rośnie" (nagłówek wniosku 5)** (Kluczowe wnioski – wniosek 5 …) – „ESD rośnie razem z med-techem." → _Pominięte w etapie 1; twierdzenie o wzroście rynku bez liczby i źródła – duplikuje tezę z Wyzwania 02, ta sama ilustracja AI._ · **ZMIEKCZ**
- **„wyłączenie opakowań bezpośrednich leków" (Wyzwanie 03)** (Wyzwanie 03 (L1260)) – „Opakowania bezpośrednie leków są wyłączone z celów ponownego użycia ze względów bezpieczeństwa" → _Pominięte w etapie 1; ten sam nieoparty w tekście PPWR motyw wyłączenia opakowań bezpośrednich leków pojawia się także w Wyzwaniu 03 – wymaga zmiękczenia._ · **ZMIEKCZ**
- **wyłączenie opakowań bezpośrednich leków/wyrobów medycznych, bezterminowo** (sekcja PPWR (L1296)) – „wyłącza z celów ponownego użycia opakowania bezpośrednie produktów leczniczych i wyrobów medycznych – ze wzgl…" → _Baza wprost stwierdza brak wyłączenia opakowań farmaceutycznych/medycznych z celów reuse – twierdzenie o „bezterminowym wyłączeniu" nieoparte w tekście PPWR._ · **ZMIEKCZ**
- **wyłączenie opakowań bezpośrednich, bezterminowo (karta)** (karta PPWR – Wyłączenie opako…) – „Opakowania bezpośrednie leków i wyrobów medycznych – wyłączone z celów ponownego użycia ze względów bezpiecze…" → _Twierdzenie o istnieniu wyraźnego wyłączenia opakowań bezpośrednich leków nie ma pokrycia w bazie; ryzyko powielenia mitu w formie dedykowanej karty regulacyjnej._ · **ZMIEKCZ**
- **blockquote – „wyłączenie opakowań bezpośrednich"** (blockquote (L1318)) – „Cele ponownego użycia nie obejmują opakowań bezpośrednich leków i wyrobów medycznych – to wyłączenie podyktow…" → _Cytat powiela twierdzenie o „wyłączeniu bezpośrednich leków", którego baza nie potwierdza; podpis „na podstawie 2025/40" sugeruje fałszywe źródło regulacyjne dla parafrazy._ · **ZMIEKCZ**
- **„wyłączenie opakowań bezpośrednich leków" (FAQ)** (FAQ – Czy farmacja jest objęt…) – „Tak – w zakresie opakowań transportowych i dystrybucyjnych. Wyłączone z celów ponownego użycia są wyłącznie o…" → _Pominięte w etapie 1; kolejne wystąpienie nieopartego w PPWR twierdzenia o wyłączeniu opakowań bezpośrednich leków – w FAQ jako fakt. Część o objęciu opakowań transportowych jest OK._ · **ZMIEKCZ**

### #05
- **ponad 100 tys. operacji rocznie** (Kluczowe wnioski (L1224)) – „w systemie wykonującym ponad 100 tys. operacji rocznie" → _Konkretna liczba operacji rocznie bez źródła, ilustracja AI._ · **OZNACZ_SZACUNEK**
- **skrzynki standardowe nie nadają się do AKL** (Kluczowe wnioski (L1224)) – „Standardowe skrzynki transportowe się nie nadają." → _POZYCJA DODANA w etapie 2: kategoryczne twierdzenie o produktach konkurencyjnych/standardowych bez źródła._ · **ZMIEKCZ**
- **od 2026 r.** (Kluczowe wnioski (L1224)) – „OEM-y i sieci handlowe wymuszają opakowania wielokrotnego użytku (RTP) w łańcuchu dostaw od 2026 r." → _Twierdzenie o presji osób trzecich z konkretną datą 'od 2026', bez źródła; sam PPWR wiąże cele z 2030._ · **ZMIEKCZ**
- **Amazon Sosnowiec, Allegro Adamów, InPost Pruszków** (Kluczowe wnioski (L1224)) – „Polskie magazyny e-commerce (Amazon Sosnowiec, Allegro Adamów, InPost Pruszków) stosują pojemniki bekuplast s…" → _Twierdzenie, że nazwane magazyny osób trzecich stosują bekuplast 'jako standard' – ryzykowne, nie ujęte w bazie klientów/case studies._ · **USUN**
- **6–8 jednostek** (Kluczowe wnioski (L1224)) – „Sztaplowanie 6–8 jednostek to standard dla pojemników intralogistycznych." → _Konkretny zakres sztaplowania jako 'standard' bez źródła zewnętrznego ani normy._ · **OZNACZ_SZACUNEK**
- **4–6 cykli na minutę** (Wyzwanie 01 (L1242)) – „Magazyn automatyczny pracuje z prędkością 4–6 cykli na minutę." → _Konkretna prędkość cykli bez źródła._ · **OZNACZ_SZACUNEK**
- **2–4 tys. zł/godz.** (Wyzwanie 01 (L1242)) – „Pojemnik nieodpowiedniego wymiaru blokuje system – przestój 2–4 tys. zł/godz." → _Kwota kosztu przestoju bez źródła, ilustracja AI._ · **OZNACZ_SZACUNEK**
- **6–8 jednostek** (Wyzwanie 02 (L1251)) – „Pojemniki intralogistyczne muszą wytrzymać sztaplowanie 6–8 jednostek + dynamiczne obciążenia." → _Zakres sztaplowania bez źródła zewnętrznego._ · **OZNACZ_SZACUNEK**
- **3–4 jednostek** (Wyzwanie 02 (L1251)) – „Standardowe skrzynki HDPE wytrzymują sztaplowanie 3–4 jednostek." → _Twierdzenie o wytrzymałości cudzych/standardowych skrzynek bez źródła._ · **ZMIEKCZ**
- **Amazon, sieci AGD, dystrybutorzy IT** (Wyzwanie 04 (L1269)) – „Magazyny elektroniki (Amazon, sieci AGD, dystrybutorzy IT) wymagają pojemników ESD zgodnych z normą." → _Twierdzenie o wymaganiach nazwanej firmy (Amazon) wobec dostawców bez źródła; osoba trzecia._ · **ZMIEKCZ**
- **3–4 razy** (Wyzwanie 05 nagłówek (L1277)) – „Sezonowe szczyty (Black Friday, święta) – 3–4 razy większe zapotrzebowanie" → _Krotność wzrostu zapotrzebowania bez źródła._ · **OZNACZ_SZACUNEK**
- **3–4-krotnie w ciągu 6–8 tygodni** (Wyzwanie 05 (L1278)) – „zapotrzebowanie operatora e-commerce na flotę rośnie 3–4-krotnie w ciągu 6–8 tygodni" → _Krotność i okno czasowe bez źródła._ · **OZNACZ_SZACUNEK**
- **Mecalux, Daifuku** (Sekcja produkty kafelek Indyw…) – „Indywidualne pod AKL Mecalux/Daifuku" → _Twierdzenie o dopasowaniu do systemów nazwanych dostawców AKL (Mecalux/Daifuku) – ryzykowne wobec osób trzecich._ · **USUN**
- **presja OEM/sieci wymusza RTP** (Karta PPWR nagłówek (L1315)) – „presja OEM-ów i sieci handlowych" → _POZYCJA DODANA w etapie 2: jakościowa teza o presji OEM/sieci na dostawców – bez źródła, ale bez fałszywej precyzji._ · **ZMIEKCZ**
- **18–24 miesiące** (Karta PPWR Efekt domina (L132…) – „Sieć handlowa (art. 29) wymusza opakowania wielokrotnego użytku u dostawców... W praktyce w 18–24 miesiące ob…" → _Okno czasowe 'efektu domina' w łańcuchu dostaw z fałszywą precyzją, bez źródła._ · **ZMIEKCZ**
- **±0,3 mm / ±2–4 mm / 6–8 / 3–4 / >100 cykli** (FAQ – różnica (L1462)) – „Pojemnik intralogistyczny ma tolerancje wymiarowe ±0,3 mm (zamiast ±2–4 mm), sztaplowanie 6–8 jednostek (zami…" → _Zbiór porównań (±2–4 mm, 3–4 vs 6–8, >100 cykli) mieszający dane produktu bekuplast z parametrami przypisanymi konkurencji, bez źródła._ · **OZNACZ_SZACUNEK**
- **Mecalux MIA, Daifuku Compact System, Murata Cyberstation, SSI Schaefer SAS, Knapp OSR Shuttle, AutoStore** (FAQ – kompatybilność AKL (L14…) – „projektujemy pojemniki silverline w wymiarach kompatybilnych z głównymi systemami AKL (Mecalux MIA, Daifuku C…" → _Twierdzenie o kompatybilności produktu z nazwanymi systemami OEM; wcześniejszy audyt wskazał błąd (AutoStore używa własnych binów, nie palet)._ · **USUN**
- **SAP EWM, Manhattan Active WM, Körber WMS, Blue Yonder WMS** (FAQ – WMS (L1466)) – „Współpracowaliśmy z SAP EWM, Manhattan Active WM, Körber WMS i Blue Yonder WMS." → _Twierdzenie o współpracy/dopasowaniu z nazwanymi systemami WMS osób trzecich; do usunięcia lub twardego potwierdzenia przez bekuplast._ · **USUN**

### #06
- **EPAL; skrzynie jednorazowe; folia stretch** (Kluczowe wnioski (L35)) – „Polska branża 3PL używa dziś głównie palet EPAL, skrzyń jednorazowych i folii stretch" → _Ogólne twierdzenie o dominujących opakowaniach w PL 3PL bez źródła; jakościowe, więc do zmiękczenia nie usunięcia._ · **ZMIEKCZ**
- **2026–2030; 200+ osób; 15–40 mln zł** (Kluczowe wnioski (L35)) – „Transformacja 2026–2030 to dla operatora zatrudniającego 200+ osób inwestycja rzędu 15–40 mln zł" → _Konkretna kwota inwestycji i próg zatrudnienia bez żadnego źródła ani danych bekuplast – dokładnie typ kwoty inwestycyjnej z rubryki NIEPOTWIERDZONE_AI._ · **USUN**
- **CHEP; IPP; EPAL** (Wyzwanie 01, karta produktu (…) – „Kompatybilne z CHEP / IPP / EPAL" → _Deklaracja kompatybilności palety bekuplast z systemami CHEP/IPP i standardem EPAL to nieudowodnione twierdzenie o osobie trzeciej – ryzykowne._ · **USUN**
- **60–75% wykorzystania ładowności** (Wyzwanie 02 (L52)) – „Według szacunków branżowych operator 3PL pracuje przy 60–75% wykorzystania ładowności w transporcie powrotnym" → _Konkretny zakres % wprost wymieniony w rubryce jako przykład liczby NIEPOTWIERDZONE_AI („60–75% wykorzystania ładowności"); do utrzymania tylko z jawnym „wg szacunków bekuplast"._ · **OZNACZ_SZACUNEK**
- **kompatybilność z systemami poolingowymi** (Wyzwanie 04, karta produktu (…) – „Pod wymiary i cykl systemów poolingowych" → _POZYCJA POMINIĘTA W ETAPIE 1. Deklaracja, że pojemnik bekuplast jest dopasowany „pod wymiary i cykl systemów poolingowych" to twierdzenie o kompatybilności z systemami osób trzecich – ryzykowne bez dowodu._ · **ZMIEKCZ**
- **Raben, Rohlig, DSV, DHL Supply Chain, Geodis, Kuehne+Nagel, ID Logistics, Spedimex, Schenker PL** (Sekcja PPWR (L97)) – „Art. 29 PPWR dotyczy podmiotów stosujących opakowania transportowe – a tymi są operatorzy 3PL (Raben, Rohlig,…" → _Wymienieni imiennie operatorzy (osoby trzecie) jako objęci art. 29 – ryzykowne przypisanie obowiązku prawnego konkretnym firmom, które nie są klientami; baza faktów A3/C2 ostrzega, że adresat to ogólna kategoria „podmioty stosujące"._ · **USUN**
- **Allegro; InPost; Amazon Logistics** (Powiązane – E-commerce (L159)) – „Operatorzy fulfillmentu e-commerce (Allegro, InPost, Amazon Logistics) z osobną specyfiką" → _Wymienieni imiennie operatorzy (osoby trzecie) jako ilustracja; nie klienci – ryzykowne przypisanie, tym bardziej że baza A3 ostrzega, iż „operatorzy fulfillmentu" nie są odrębnym adresatem PPWR._ · **USUN**
- **sieci handlowe = główny klient** (Powiązane – Handel (L162)) – „Sieci handlowe są Twoim głównym klientem; ich standardy to Twoje standardy" → _Ogólnikowe twierdzenie marketingowe o strukturze klientów 3PL; miękkie, bez danych._ · **ZMIEKCZ**
- **1200×800/1200×1000/800×600; SAP EWM, Manhattan Active WM, Körber WMS, Blue Yonder WMS, Mecalux MIA** (FAQ – WMS (L175)) – „palety plastikowe Euro w wymiarach 1200×800 / 1200×1000 / 800×600 są zgodne z głównymi systemami WMS (SAP EWM…" → _Wymiary palet standardowe, ale deklaracja zgodności z pięcioma nazwanymi systemami WMS to nieudowodnione twierdzenie o osobach trzecich – ryzykowne._ · **USUN**

### #07
- **od 2020 r.** (Kluczowe wnioski) – „Konsolidacja wokół plastikowych RTP (opakowań zwrotnych) trwa od 2020 r." → _Data początku „konsolidacji rynku" bez źródła w bazie faktów ani publicznego._ · **ZMIEKCZ**
- **50+ ha; 8 000–25 000 skrzynek** (Kluczowe wnioski) – „Sadownik z 50+ ha używa 8 000–25 000 skrzynek w cyklu" → _Zakres skrzynek per gospodarstwo bez źródła – dokładnie ten wzorzec liczb wymieniony w rubryce jako AI._ · **OZNACZ_SZACUNEK**
- **kompatybilność + eliminacja przeładunku u Lidl/Biedronka/Carrefour** (Kluczowe wnioski) – „Skrzynki bekuplast EURO są kompatybilne z systemami dystrybucyjnymi Lidl, Biedronka, Carrefour – eliminacja p…" → _Kompatybilność z systemami nazwanych sieci + skutek („eliminacja przeładunku") – ryzykowne twierdzenie o osobie trzeciej, wg rubryki USUN._ · **USUN**
- **4–6×; 6–10 tygodni** (Wyzwanie 01) – „Sezonowość – flota skrzynek rośnie 4–6× w 6–10 tygodni" → _Krotność wzrostu floty i okno tygodniowe bez źródła – wzorzec krotności z rubryki AI._ · **OZNACZ_SZACUNEK**
- **50 ha; 18 000 skrzynek; 9 miesięcy; 3 000–5 000 skrzynek** (Wyzwanie 01) – „Sadownik z 50 ha jabłoni używa 18 000 skrzynek w szczycie zbiorów (sierpień–październik). Przez pozostałe 9 m…" → _Konkretne liczby skrzynek per gospodarstwo bez źródła; dodatkowo niespójność (sierpień–październik = 3 mies., a tekst mówi „pozostałe 9 miesięcy", co daje szczyt 3 mies. – spójne, ale liczby skrzynek nadal AI)._ · **OZNACZ_SZACUNEK**
- **2–6°C** (Wyzwanie 02) – „Truskawki, maliny, sałata i ogórki wymagają transportu chłodzonego (2–6°C)." → _To nie jest nazwana norma z konkretną, weryfikowalną wartością – konkretny zakres 2–6°C przypisany produktom to nieudokumentowana liczba operacyjna; degradacja z NORMA_PUBLICZNA._ · **OZNACZ_SZACUNEK**
- **2–6°C** (Wyzwanie 02 (kafelek EURO HDP…) – „Otwory wentylacyjne · 2–6°C" → _Powtórzony zakres 2–6°C jako cecha produktu – bez nazwanej normy to nieudokumentowana wartość, nie „NORMA_PUBLICZNA"._ · **OZNACZ_SZACUNEK**
- **Lidl/Biedronka/Carrefour; Euro 400×300 / 600×400** (Wyzwanie 03) – „Lidl, Biedronka, Carrefour wymagają konkretnych wymiarów skrzynek – Euro 400×300 lub 600×400." → _Przypisanie konkretnych wymogów wymiarowych nazwanym sieciom – nieweryfikowalne o osobie trzeciej (wymiary EURO to norma, ale przypisanie sieciom nie)._ · **ZMIEKCZ**
- **400×300; 600×400; 5 sieci PL** (Wyzwanie 03 (kafelek)) – „400×300 · 600×400 · 5 sieci PL" → _Wymiary EURO to norma, ale „5 sieci PL" to nieweryfikowalne twierdzenie o odbiorcach._ · **ZMIEKCZ**
- **drewno 2–4 lata; HDPE 10–15 lat** (Wyzwanie 04) – „Drewniane skrzynki sadownicze niskiej jakości wytrzymują zwykle 2–4 lata. HDPE: 10–15 lat." → _Trwałość konkurencyjnego drewna „2–4 lata" to dokładny wzorzec z rubryki AI; HDPE 10–15 lat może być daną bekuplast, ale zestawienie z drewnem jest AI._ · **OZNACZ_SZACUNEK**
- **ROI 18–28 miesięcy; 25+ ha** (Wyzwanie 04) – „Zwrot z inwestycji: 18–28 miesięcy dla sadu 25+ ha." → _Okres zwrotu w miesiącach bez modelu/źródła – „18–28 miesięcy" wprost wymieniony w rubryce jako liczba AI._ · **OZNACZ_SZACUNEK**
- **art. 29 ust. 1 vs ust. 2 – obieg wewnątrz jednej lokalizacji nie liczy się do 40%** (Karta PPWR: Poza zakresem) – „Skrzynki używane wyłącznie w obrębie jednego miejsca działalności (...) nie liczą się do celu 40% z art. 29 u…" → _Baza (A1/A2) nie potwierdza wyłączenia obiegu w obrębie jednej lokalizacji z celu 40%; to interpretacja prawna wymagająca walidacji – nie może być firmowana jako zweryfikowana regulacja._ · **ZMIEKCZ**
- **400×300 / 600×400; „standardach wymaganych przez sieci"** (FAQ (Lidl/Biedronka/Carrefour)) – „produkujemy skrzynki w wymiarach Euro 400×300 i 600×400 w standardach najczęściej wymaganych przez sieci hand…" → _„Kompatybilne z Lidlem/Biedronką/Carrefourem" i „wymagane przez sieci" – twierdzenie o wymaganiach nazwanych sieci; wymiary Euro są normą, przypisanie sieciom nie._ · **ZMIEKCZ**
- **drewno 2–4 lata; tektura 1 cykl** (FAQ (ile cykli HDPE)) – „Dla porównania: drewniane skrzynki sadownicze niskiej jakości 2–4 lata, tekturowe 1 cykl." → _Trwałość konkurencyjnych opakowań (drewno „2–4 lata", tektura „1 cykl") to wprost wzorzec z rubryki AI._ · **OZNACZ_SZACUNEK**

### #08
- **dwa lub więcej zakładów; grupa kapitałowa** (Kluczowe wnioski (L34)) – „Każda firma z dwoma lub więcej zakładami albo magazynami w jednej grupie kapitałowej jest objęta" → _„Grupa kapitałowa" i kategoryczne „każda firma z 2+ zakładami" to nadinterpretacja zakresu podmiotowego art. 29 ust. 2_ · **ZMIEKCZ**
- **od dekady; DACH** (Kluczowe wnioski (L35)) – „Obieg zamknięty wewnątrz firmy to standard od dekady w krajach DACH" → _Twierdzenie rynkowe o „dekadzie" w DACH bez jakiegokolwiek źródła_ · **ZMIEKCZ**
- **2026–2028** (Kluczowe wnioski (L35)) – „Polska nadrabia ten dystans w latach 2026–2028" → _Konkretny przedział lat to nieuzasadniona prognoza rynkowa bez źródła_ · **ZMIEKCZ**
- **3 zakłady + 2 DC = 5 lokalizacji** (Wyzwanie 01 (L45)) – „Producent AGD z 3 zakładami w Polsce i 2 centrami dystrybucyjnymi" → _Scenariusz ilustracyjny (nie realne dane); liczby są przykładowe i tak sformułowane, więc nie wprowadzają w błąd_ · **ZOSTAW**
- **±0,3 mm** (Wyzwanie 02 (L52)) – „Pojemniki muszą mieć tolerancje wymiarowe ±0,3 mm" → _Konkretna tolerancja bez źródła i wewnętrznie sprzeczna z ±2 mm na tej samej stronie – fałszywa precyzja_ · **OZNACZ_SZACUNEK**
- **art. 24; maks. 50% pustej przestrzeni** (Karta PPWR art. 24 (L112-113)) – „Art. 24 … Ograniczenie nadmiernej pustej przestrzeni w opakowaniu – maksymalnie 50% objętości" → _Baza faktów nie potwierdza ani przypisania art. 24, ani progu 50% pustej przestrzeni; wymaga weryfikacji wobec tekstu rozporządzenia_ · **OZNACZ_SZACUNEK**
- **2 lub więcej lokalizacji** (Blockquote (L117)) – „Obowiązek dotyczy co do zasady każdego producenta z dwiema lub więcej lokalizacjami" → _Kategoryczne „każdego producenta z 2+ lokalizacjami" upraszcza i rozszerza zakres podmiotowy przepisu_ · **ZMIEKCZ**
- **Mecalux, Daifuku, Murata, SSI Schaefer** (FAQ pytanie 4 (L178-179)) – „produkujemy palety plastikowe Euro w standardach kompatybilnych z głównymi systemami magazynów automatycznych…" → _Twierdzenie o kompatybilności z systemami magazynowymi konkretnych OEM (Mecalux/Daifuku/Murata/SSI Schaefer) to ryzykowne twierdzenie o osobach trzecich; nagłówek pytania (L178) także wymienia Mecalux/Daifuku_ · **USUN**
- **Mecalux/Daifuku (nagłówek FAQ)** (FAQ pytanie 4 nagłówek (L178)) – „Czy palety plastikowe Euro są kompatybilne z systemami AKL Mecalux/Daifuku?" → _Pominięte w etapie 1; sam nagłówek FAQ nazywa systemy osób trzecich i implikuje kompatybilność – to samo ryzyko co odpowiedź, do usunięcia razem z nią_ · **USUN**
- **±2 mm** (FAQ pytanie 4 (L179)) – „Tolerancje wymiarowe ±2 mm dla wymiaru palety" → _Konkretna tolerancja bez źródła i wewnętrznie sprzeczna z ±0,3 mm w kartach produktu – fałszywa precyzja_ · **OZNACZ_SZACUNEK**
- **EPAL 5–10 lat** (FAQ pytanie 5 (L181)) – „drewniane palety EPAL wytrzymują ok. 5–10 lat" → _Trwałość cudzego opakowania (drewniane EPAL) bez źródła – nieuprawnione twierdzenie o osobie trzeciej_ · **ZMIEKCZ**
- **art. 12 PPWR; od sierpnia 2028; kod QR** (FAQ pytanie 7 (L185)) – „oznakowanie opakowań (kod QR) będzie wymagane od sierpnia 2028 r. (art. 12 PPWR)" → _Przypisanie obowiązku znakowania QR do art. 12 i konkretnej daty 08.2028 nie jest potwierdzone w bazie PPWR – wymaga weryfikacji wobec tekstu rozporządzenia_ · **OZNACZ_SZACUNEK**

### #09
- **Lidl, Biedronka, Dino, Carrefour, Selgros** (lede (L1197)) – „dla sieci handlowych (Lidl, Biedronka, Dino, Carrefour, Selgros, drogerie)" → _Nazwane sieci trzecie w lede jako adresaci oferty, bez potwierdzenia współpracy – w widocznym nagłówku sugeruje relację; ryzykowne, ale w formule ogólnej persony da się utrzymać po zmiękczeniu._ · **ZMIEKCZ**
- **2026–2030** (Kluczowe wnioski (L1224)) – „przejście z opakowań jednorazowych na wielokrotnego użytku to projekt na lata 2026–2030" → _Rama 2026–2030 to szacunek redakcyjny; 2030 jest zbieżne z celem regulacyjnym, ale sama rama projektu nie jest faktem._ · **OZNACZ_SZACUNEK**
- **Lidl, Carrefour, Selgros – pilotaż** (Kluczowe wnioski (L1224)) – „Lidl, Carrefour i Selgros już pilotują." → _Kategoryczne twierdzenie o działaniach osób trzecich ('już pilotują') bez źródła – nieobronne, ryzyko reputacyjne/prawne._ · **USUN**
- **2024–2025; 2027; dwa lata** (Kluczowe wnioski (L1224)) – „Sieci, które ruszyły z pilotażem w 2024–2025, mają w 2027 r. dwa lata przewagi operacyjnej." → _Twierdzenie ilościowe o przewadze konkurencyjnej osób trzecich z konkretnymi datami – łączy nieweryfikowalny pilotaż z wyliczoną 'przewagą'; niebroni się._ · **USUN**
- **200+ sklepów; ROI 24–36 miesięcy** (Kluczowe wnioski (L1224)) – „Dla typowej sieci 200+ sklepów zwrot z inwestycji następuje w 24–36 miesięcy." → _Okres zwrotu w miesiącach i próg 200+ sklepów to nieudokumentowany szacunek AI; utrzymanie tylko z jawnym 'wg szacunków bekuplast'._ · **OZNACZ_SZACUNEK**
- **300 sklepów; 3–5 mln zł rocznie** (Wyzwanie 01 (L1242)) – „Koszt utylizacji w sieci 300 sklepów sięga 3–5 mln zł rocznie." → _Kwota kosztu utylizacji bez źródła – typowa ilustracja AI; do utrzymania tylko jako jawny szacunek bekuplast._ · **OZNACZ_SZACUNEK**
- **redukcja 60–80%** (Wyzwanie 01 (L1242)) – „Obieg zamknięty (…) obniżają koszt odpadów o 60–80%." → _Procent redukcji kosztu odpadów bez źródła – klasyczny widełkowy szacunek AI._ · **OZNACZ_SZACUNEK**
- **300 sklepów; cztery lata; 40%** (Wyzwanie 02 (L1251)) – „Sieć 300 sklepów musi w cztery lata przestawić 40% strumienia transportowego" → _40% jest regulacyjne (baza A2), ale '300 sklepów' i horyzont 'cztery lata' to ilustracja AI nadająca fałszywą precyzję; zmiękczyć część ilustracyjną._ · **ZMIEKCZ**
- **8–25 mln zł; ROI 24–36 miesięcy** (Wyzwanie 02 (L1251)) – „To inwestycja 8–25 mln zł we flotę i system zwrotów, z okresem zwrotu 24–36 miesięcy." → _Kwota inwestycji i okres zwrotu bez źródła – klasyczne liczby AI; utrzymanie tylko z jawnym 'wg szacunków bekuplast'._ · **OZNACZ_SZACUNEK**
- **amortyzacja 8–12 lat** (Wyzwanie 03 (L1260)) – „wielorazowe – inwestycję amortyzowaną w 8–12 lat" → _Okres amortyzacji/żywotności 8–12 lat bez potwierdzonych danych; możliwa do utrzymania tylko jako dana bekuplast, tu w tekście ogólnym – szacunek._ · **OZNACZ_SZACUNEK**
- **od 2028 r.; art. 12 PPWR** (Wyzwanie 04 (L1269)) – „gotowe na oznakowanie opakowań wymagane od 2028 r. (art. 12 PPWR)" → _Zweryfikowana baza faktów nie potwierdza ani numeru art. 12, ani daty 2028 dla znakowania; przypisanie konkretnego artykułu i daty bez potwierdzenia to fałszywa precyzja regulacyjna – nie 'firmować' powagą przepisu._ · **ZMIEKCZ**
- **presja central międzynarodowych** (Wyzwanie 05 nagłówek (L1277)) – „Presja ze strony międzynarodowych central" → _POZYCJA POMINIĘTA W ETAPIE 1. Ogólna teza o presji korporacyjnej – bez konkretnej liczby, ale jako twierdzenie o działaniach osób trzecich; jako sam nagłówek tematyczny obronny po zmiękczeniu._ · **ZMIEKCZ**
- **Lidl Group Climate Action 2030; Carrefour Act for Food** (Wyzwanie 05 (L1278)) – „korporacyjnymi strategiami ponownego użycia (Lidl Group Climate Action 2030, Carrefour Act for Food)" → _Konkretne nazwy korporacyjnych strategii nazwanych sieci – twierdzenie o osobach trzecich bez potwierdzenia; ryzyko przypisania cudzych programów. Nieobronne bez źródła._ · **USUN**
- **2026; 2027–2028** (Wyzwanie 05 (L1278)) – „Pilotaż 2026 r., skalowanie 2027–2028." → _Harmonogram wdrożeń to szacunek AI, nie fakt – utrzymanie tylko jako jawny szacunek._ · **OZNACZ_SZACUNEK**
- **Lidl, Biedronka, Dino, Carrefour** (Wyzwanie 05 karta (L1281)) – „Indywidualne pod sieć (…) Lidl/Biedronka/Dino/Carrefour" → _Sugestia gotowych rozwiązań pod konkretne nazwane sieci bez potwierdzenia współpracy – twierdzenie o osobach trzecich; zmiękczyć do kategorii ogólnej._ · **ZMIEKCZ**
- **Lidl, Biedronka, Dino, Carrefour** (Produkty (L1306)) – „Indywidualne pod sieć (…) Lidl/Biedronka/Dino/Carrefour" → _Sugestia dedykowanych produktów pod nazwane sieci bez potwierdzenia współpracy – twierdzenie o osobach trzecich; zmiękczyć do kategorii ogólnej._ · **ZMIEKCZ**
- **5–10 sklepów; 2026; 2027; 2028–2030** (PPWR sekcja (L1315)) – „pilotaż w 5–10 sklepach (2026 r.), pełne wdrożenie w jednej kategorii (2027 r.), ponowne użycie w całej sieci…" → _Etapy i liczby sklepów to model wdrożeniowy AI; horyzont 2030 zbieżny z celem, ale sekwencja i liczby nie są faktem – szacunek._ · **OZNACZ_SZACUNEK**
- **najbardziej dotknięta branża; wszystkie artykuły** (PPWR sekcja (L1315)) – „Handel detaliczny i FMCG to najbardziej dotknięta branża (…) dotyczą Cię praktycznie wszystkie kluczowe artyk…" → _POZYCJA POMINIĘTA W ETAPIE 1. Superlatyw 'najbardziej dotknięta branża' to ocena redakcyjna bez źródła, nie fakt regulacyjny; jako teza marketingowa obronna po zmiękczeniu._ · **ZMIEKCZ**
- **8–25 mln zł; 300 sklepów** (karta PPWR (L1323)) – „Inwestycja 8–25 mln zł dla sieci 300 sklepów." → _Kwota inwestycji dodana do karty regulacyjnej – nieudokumentowany szacunek; sąsiedztwo z twardym przepisem zwiększa ryzyko 'firmowania' liczby powagą normy. Utrzymać tylko jako jawny szacunek._ · **OZNACZ_SZACUNEK**
- **art. 25; zał. V; 1,5 kg** (karta PPWR (L1324)) – „Art. 25 + zał. V (…) świeżych owoców i warzyw poniżej 1,5 kg oraz porcji serwowanych na miejscu" → _Zweryfikowana baza faktów nie potwierdza numeru art. 25, załącznika V ani progu 1,5 kg; przypisanie konkretnego artykułu i twardego progu wagowego bez potwierdzenia to fałszywa precyzja regulacyjna – nie 'firmować' liczby powagą normy._ · **ZMIEKCZ**
- **art. 50; od 2029 r.; PL od 1.10.2025** (karta PPWR (L1327)) – „Art. 50 (…) Harmonizacja kaucji w UE od 2029 r. (w Polsce system działa od 1 października 2025 r.)" → _Sam start PL 1.10.2025 jest twardy, ale przypisanie harmonizacji kaucji UE numerowi art. 50 nie jest zweryfikowane w bazie – baza wiąże datę 12.02.2029 z art. 67 ust. 5, nie z art. 50. Numer artykułu to nieudokumentowane przypisanie AI; zmiękczyć numer, zachować datę PL._ · **ZMIEKCZ**
- **Allegro Fulfillment, InPost, Amazon Logistics; art. 29** (Powiązane (L1434)) – „Operatorzy e-commerce (Allegro Fulfillment, InPost, Amazon Logistics) to kolejny strumień objęty PPWR art. 29." → _Nazwane osoby trzecie z twierdzeniem o objęciu art. 29 – baza A3 wprost prostuje, że kurierzy/operatorzy fulfillmentu/marketplace nie są wymienieni jako odrębni adresaci; twierdzenie o objęciu tych podmiotów jest interpretacją bez potwierdzenia. Zmiękczyć (usunąć imienne nazwy lub przeformułować)._ · **ZMIEKCZ**
- **Raben, Rohlig, DSV** (Powiązane (L1455)) – „Operatorzy logistyczni obsługujący transport DC → DC (Raben, Rohlig, DSV)." → _Nazwane firmy 3PL jako ilustracja bez potwierdzenia związku/współpracy – twierdzenie o osobach trzecich; zmiękczyć do kategorii ogólnej._ · **ZMIEKCZ**
- **Lidl, Biedronka, Dino, Carrefour, Selgros, Auchan, Rossmann, Hebe, Super-Pharm** (FAQ (L1471)) – „praktycznie wszystkie sieci ponadlokalne (Lidl, Biedronka, Dino, Carrefour, Selgros, Auchan, drogerie Rossman…" → _Nazwane sieci jako 'objęte' – twierdzenie o osobach trzecich; zasada ogólna (podmioty stosujące są objęte) jest prawdziwa, ale imienne wskazanie konkretnych sieci nie jest potrzebne i wprowadza ryzyko. Zmiękczyć do kategorii 'sieci ponadlokalne'._ · **ZMIEKCZ**
- **Żabka, ABC, Lewiatan** (FAQ (L1472)) – „Sieci franczyzowe (Żabka, ABC, Lewiatan) są objęte na poziomie centrali" → _Nazwane sieci franczyzowe z twierdzeniem o objęciu 'na poziomie centrali' – interpretacja struktury prawnej osób trzecich bez źródła; zmiękczyć (usunąć imienne nazwy, mówić o franczyzie ogólnie)._ · **ZMIEKCZ**
- **5–10 sklepów; WMS; 12–16 tygodni** (FAQ pilotaż (L1473)) – „grupę 5–10 sklepów w jednym regionie (…) integrację z WMS. Czas: 12–16 tygodni od decyzji do uruchomienia." → _Liczba sklepów i czas wdrożenia to model AI; czas 12–16 tygodni mógłby być daną operacyjną bekuplast, ale połączony z ilustracyjną liczbą sklotów. Utrzymać tylko jako jawny szacunek._ · **OZNACZ_SZACUNEK**
- **Mehrweg; od lat 90. XX w.** (FAQ DACH (L1475)) – „Opakowania transportowe wielokrotnego użytku (Mehrweg) są standardem niemieckiego handlu spożywczego od lat 9…" → _Mehrweg jako pojęcie jest realny, ale twierdzenie o statusie 'standard' i datowaniu 'od lat 90. XX w.' rynku DE to nieweryfikowalna teza rynkowa; zmiękczyć datowanie/kategoryczność._ · **ZMIEKCZ**

### #10
- **Allegro Fulfillment, Amazon Logistics, InPost, DPD, DHL** (Kluczowe wnioski (L1224)) – „Allegro Fulfillment, Amazon Logistics, InPost, DPD czy DHL podlegają mu o tyle, o ile stosują takie opakowania" → _Choć sformułowanie warunkowe („o ile stosują") jest bezpieczne regulacyjnie, wskazanie konkretnych nazwanych firm osób trzecich to dobór AI – rozporządzenie ich nie wymienia; przeklasyfikowuję z ZEWN, bo źródło nie potwierdza tych nazw, tylko ogólną kategorię._ · **ZMIEKCZ**
- **InPost** (Kluczowe wnioski (L1224)) – „Paczkomaty InPost to naturalna baza dla RTP" → _Teza, że paczkomaty InPost są „naturalną bazą" dla obiegu zwrotnego, to interpretacyjne twierdzenie AI o infrastrukturze osoby trzeciej, bez źródła._ · **ZMIEKCZ**
- **Mehrweg od 2024 r.; Tchibo, Otto, Zalando** (Kluczowe wnioski (L1224)) – „Niemcy budują opakowania wielokrotnego użytku w e-commerce (Mehrweg) od 2024 r. (piloty Tchibo, Otto, Zalando)" → _Konkretne twierdzenie o działaniach osób trzecich (Tchibo/Otto/Zalando) i data 2024 nie mają pokrycia w bazie ani w żadnej wskazanej normie/źródle._ · **USUN**
- **Polska vs DACH** (Kluczowe wnioski (L1224)) – „Gotowa sieć paczkomatów daje Polsce przewagę nad regionem DACH" → _Porównanie przewagi Polski nad DACH to niepoparta teza marketingowa AI, w tej samej frazie co usuwane twierdzenie o Mehrweg 2024._ · **ZMIEKCZ**
- **1 mln paczek/mies.; 12–28 mln zł** (Kluczowe wnioski (L1224)) – „Fulfillment center obsługujące 1 mln paczek miesięcznie inwestuje 12–28 mln zł" → _Kwota 12–28 mln zł i skala 1 mln paczek to typowa liczba wygenerowana przez AI bez źródła._ · **USUN**
- **30–42 miesiące** (Kluczowe wnioski (L1224)) – „Okres zwrotu: 30–42 miesiące." → _Okres zwrotu 30–42 mies. nie ma źródła; klasyczna liczba ROI generowana przez AI._ · **USUN**
- **5–8 mln szt. kartonów; 12–18 ton folii; 1 mln paczek/mies.** (Wyzwanie 01 (L1242)) – „zużywa się rocznie 5–8 mln szt. kartonów jednorazowych i 12–18 ton folii stretch" → _Wolumeny kartonów i folii per centrum to szacunki AI bez źródła._ · **USUN**
- **2,8–4,1 mln zł/rok** (Wyzwanie 01 (L1242)) – „Koszt utylizacji: 2,8–4,1 mln zł/rok." → _Kwota kosztu utylizacji bez źródła – wygenerowana przez AI._ · **USUN**
- **amortyzacja 30–42 mies.** (Wyzwanie 01 / karta produktu …) – „Skrzynka zwrotna e-commerce + totes · amortyzacja 30–42 mies." → _Amortyzacja 30–42 mies. to nieudokumentowany szacunek ROI, powielony z sekcji wniosków._ · **USUN**
- **8–14%** (Wyzwanie 02 (L1251)) – „Zwroty to 8–14% paczek" → _Wskaźnik zwrotów 8–14% bez źródła i wewnętrznie sprzeczny z liczbami z wyzwania 04 – do utrzymania tylko jako jawny szacunek._ · **OZNACZ_SZACUNEK**
- **Allegro, InPost, DPD, DHL, FedEx; art. 29** (Wyzwanie 03 (L1260)) – „Allegro, InPost, DPD, DHL, FedEx czy kurierzy lokalni podlegają art. 29 o tyle, o ile stosują opakowania tran…" → _Sformułowanie warunkowe jest bezpieczne, ale imienne wskazanie firm osób trzecich nie ma pokrycia w źródle (art. 29 nie nazywa tych podmiotów) – nie firmować nazw powagą normy._ · **ZMIEKCZ**
- **InPost/Allegro S/M/L** (Wyzwanie 03 / karta produktu …) – „clever move box + totes + palety plastikowe · InPost/Allegro S/M/L" → _Twierdzenie o dopasowaniu do rozmiarów skrytek InPost/Allegro to deklaracja kompatybilności z systemem osoby trzeciej – ryzykowne bez potwierdzenia operatora._ · **USUN**
- **18–24% moda; 8–12% elektronika** (Wyzwanie 04 (L1269)) – „współczynnik zwrotów wynosi 18–24% w branży modowej i 8–12% w elektronice" → _Wskaźniki zwrotów wg branż bez źródła; wartości AI do utrzymania tylko jako jawny szacunek._ · **OZNACZ_SZACUNEK**
- **InPost/Allegro S/M/L** (Nasze produkty (L1297)) – „Skrzynki paczkomatowe ... InPost/Allegro S/M/L" → _Deklaracja dopasowania do rozmiarów skrytek InPost/Allegro – kompatybilność z systemem osoby trzeciej bez potwierdzenia._ · **USUN**
- **2026 r.; 3 pilotaże** (PPWR sekcja (L1307)) – „Trzy pilotaże, które warto uruchomić w 2026 r." → _„2026 r." to sugerowana data działań, nie fakt regulacyjny; nieszkodliwa rekomendacja redakcyjna._ · **ZOSTAW**
- **art. 24; 50%; 1.01.2030** (Karta PPWR – Art. 24 (L1316)) – „pusta przestrzeń w paczce e-commerce nie będzie mogła przekraczać 50% (od 1 stycznia 2030 r.)" → _Baza potwierdza tylko, że art. 24 dotyczy pustej przestrzeni, ale NIE weryfikuje konkretnego progu 50% ani daty 1.01.2030 – konkretna liczba i data bez potwierdzenia to szacunek AI do utrzymania tylko z zastrzeżeniem lub po weryfikacji tekstu art. 24._ · **OZNACZ_SZACUNEK**
- **art. 50; 2029** (Karta PPWR – Art. 50 (L1318)) – „art. 50 PPWR wymaga go w całej UE od 2029 r." → _Baza nie weryfikuje art. 50 ani daty 2029 dla obowiązku systemu kaucyjnego w całej UE; przypisanie konkretnego artykułu i roku bez źródła – do weryfikacji lub oznaczenia jako szacunek._ · **OZNACZ_SZACUNEK**
- **sieci handlowe; art. 29; marketplace** (Może Cię też zainteresować (L…) – „Sieci handlowe to często sprzedawcy na Twoich platformach marketplace. Art. 29 PPWR obejmuje je tak samo jak …" → _DODANE w etapie 2: twierdzenie „obejmuje je tak samo" jest zbyt kategoryczne – obowiązek zależy od stosowania opakowań transportowych, nie od statusu sprzedawcy na marketplace; do zmiękczenia zgodnie z zasadą nadrzędną nr 3._ · **ZMIEKCZ**
- **Raben, Rohlig, DSV** (Może Cię też zainteresować (L…) – „Operatorzy logistyczni B2B (Raben, Rohlig, DSV) obsługujący transport międzymagazynowy." → _Raben/Rohlig/DSV wymienieni jako przykładowi operatorzy – nie oznaczeni jako klienci bekuplast; użycie nazw osób trzecich bez podstawy._ · **ZMIEKCZ**
- **Allegro Fulfillment, Amazon Logistics, InPost, DPD, DHL, FedEx** (FAQ (L1455)) – „Dotyczy to m.in. Allegro Fulfillment, Amazon Logistics, InPost (fulfillment i paczkomaty), DPD, DHL, FedEx or…" → _Ujęcie warunkowe jest bezpieczne i FAQ poprawnie dodaje, że nie są odrębnie wymienieni, ale imienna lista firm osób trzecich pochodzi od AI, nie z aktu – nie firmować powagą normy; zmiękczyć/zredukować liczbę nazw._ · **ZMIEKCZ**
- **InPost S/M/L; Allegro One Box** (FAQ (L1457)) – „projektujemy skrzynki pod skrytki paczkomatowe (InPost w rozmiarach S/M/L, automaty Allegro One Box)" → _Deklaracja projektowania pod konkretne skrytki InPost i automaty Allegro One Box to twierdzenie o kompatybilności z systemem osoby trzeciej; FAQ samo dodaje „wymaga uzgodnienia z operatorem", więc zdolność projektowa jest daną bekuplast, ale wskazanie konkretnych systemów/wymiarów osoby trzeciej wymaga potwierdzenia – utrzymywalne tylko przy zachowaniu zastrzeżenia i po potwierdzeniu bekuplast._ · **POTWIERDZ_BEKUPLAST**
- **5–8 lat** (FAQ (L1459)) – „To 5–8 lat eksploatacji w typowym 3PL e-commerce." → _Przeliczenie na 5–8 lat zależy od nieudokumentowanej intensywności rotacji; szacunek AI do utrzymania tylko jawnie._ · **OZNACZ_SZACUNEK**

### #IDX
- **„standard OEM-ów od dekad" (RTP closed-loop)** (Karta #01 Motoryzacja (desc)) – „Obieg zamknięty RTP to standard OEM-ów od dekad." → _Twierdzenie o praktyce OEM „od dekad" bez źródła; nieweryfikowalna fałszywa precyzja o osobach trzecich._ · **ZMIEKCZ**
- **Art. 29(1)** (Karta #06 Logistyka 3PL (meta)) – „NOWA mieszany Art. 29(1), pooling" → _Numer ustępu 1 sam w sobie odpowiada celowi transportowemu (40%/70%), ale baza faktów A2/C2 wprost ostrzega przed przypisywaniem obowiązku do 3PL/dystrybutorów jako odrębnej kategorii – przypisanie w tej karcie jest błędne co do adresata._ · **ZMIEKCZ**
- **Art. 29(1) PPWR dla „operatorów 3PL"** (Karta #06 Logistyka 3PL (desc)) – „Palety, skrzyniopalety i pojemniki zwrotne dla operatorów 3PL. Art. 29(1) PPWR." → _Sam art. 29 ust. 1 to realny przepis, ale przypisanie go „operatorom 3PL" jako adresatowi jest sprzeczne z bazą faktów A3/C2 – 3PL nie jest odrębnym adresatem. Przeklasyfikowane z ZEWN_ZWERYFIKOWANE na NIEPOTWIERDZONE_AI (błędny adresat)._ · **ZMIEKCZ**
- **Lidl, Biedronka, Carrefour** (Karta #09 Handel FMCG (meta)) – „REBRAND pain-point #1 Lidl/Biedronka/Carrefour" → _Nazwy sieci handlowych przywołane jako grupa docelowa/kontekst; jako twierdzenie o osobach trzecich ryzykowne, jeśli nie są potwierdzonymi klientami bekuplast._ · **USUN**
- **systemy dystrybucyjne DC → sklep; „Priorytet #1 PPWR"** (Karta #09 Handel FMCG (desc)) – „Skrzynki przegrodowe, palety, systemy dystrybucyjne DC → sklep. Priorytet #1 PPWR." → _„Priorytet #1 PPWR" to wewnętrzna ocena rankingowa bez źródła; opis DC → sklep jest ogólny._ · **ZMIEKCZ**
- **Allegro, InPost, DPD** (Karta #10 E-commerce/3PL (met…) – „NOWA pain-point #2 Allegro/InPost/DPD" → _Nazwy operatorów/platform przywołane jako kontekst; jako twierdzenie o osobach trzecich ryzykowne bez potwierdzonej relacji handlowej._ · **USUN**
