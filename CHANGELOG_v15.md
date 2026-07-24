# CHANGELOG v15 – finalne poprawki z recenzji Moniki Sojki (24.07.2026)

## Źródło i zakres

Naniesienie **wszystkich 28 poprawek** z finalnej recenzji klientki (10 plików
„MS Strona NN – … (v14).docx" z 24.07.2026, katalog `word_v14_MS_2026-07-24/`)
na 10 makiet HTML. Pełna analiza było→jest: **`RECENZJA_MS_2026-07-24.md`**
(28 pozycji: 22 przeredagowania + 6 usunięć). Wg zapowiedzi klientki to
**wersja ostateczna** treści PL.

Baseline recenzji: `word_v14/*.docx` w stanie z 20.07.2026 14:21 (working tree
po commicie `ade0e0d` – pliki przegenerowane nowszym generatorem `tools/`).

## Co się zmieniło (skrót; szczegóły w RECENZJA_MS_2026-07-24.md)

- **#01 Motoryzacja (3):** pooling „producenci oraz operatorzy logistyczni",
  „Odbiorcy OEM zazwyczaj wymagają…", FAQ ESD bez „35 V".
- **#02 Przetwórstwo żywności (2):** PFAS fast-food precyzyjniej („zawierające"),
  HACCP jako system + audyty **BRCGS** i IFS (bez „twardego wymogu").
- **#03 Napoje (3):** ROP „wzmacnia ekonomiczne znaczenie…", karta RFID
  „do zastosowania RFID lub innych cyfrowych nośników danych", FAQ EPAL/ISPM-15
  bez parametrów normy (56°C/fumigacja) + formuła „oznakowanie IPPC".
- **#04 Farmacja (1):** FAQ „nadają się do zastosowań w branży kosmetycznej".
- **#05 Intralogistyka (2):** pick-by-light/RFID uproszczone, ESD bez „35 V".
- **#06 Logistyka 3PL (2):** wniosek ISPM-15 w nowej formule, FAQ „systemy
  magazynowe" zamiast „WMS".
- **#07 Rolnictwo (4):** „Wiele sieci wykorzystuje standard EURO…",
  **usunięty kafelek „Indywidualne realizacje"**, PFAS „Część…", FAQ ISPM-15
  w nowej formule.
- **#08 Produkcja przemysłowa (3):** art. 29 ust. 2 „tego samego przedsiębiorstwa
  lub przedsiębiorstw powiązanych" (bez „partnerskich") w Kluczowych wnioskach,
  ISPM-15 nowa formuła, **usunięty kafelek „Indywidualne"**.
- **#09 Handel FMCG (2):** ROP „w zależności od modelu biznesowego…" (bez tezy
  o podwójnym koszcie), art. 29 ust. 6 „sieci odgrywają kluczową rolę…".
- **#10 E-commerce (6):** „Rozbudowana sieć automatów… stwarza korzystne warunki"
  (bez „przewagi nad DACH"), **usunięte kafelki „Skrzynki pod automaty paczkowe"
  i „Indywidualne pod paczkomat"**, akapit celów reuse z podstawą wyłączenia
  **art. 29 ust. 4 lit. d** (bez „Propozycji bekuplast: trzy pilotaże"),
  **usunięte FAQ o skrzynce do skrytki automatu (pytanie + odpowiedź)**.

Ponadto: banery wersji podbite v14→v15 (10 plików); placeholder miniatury karty
RFID (#03) zsynchronizowany z nową nazwą.

## Świadome odstępstwa od plików MS (3, edytorskie)

1. **#09** – dodana kropka na końcu akapitu ROP (w Wordzie MS jej brakowało).
2. **#10** – dywiz „-" z pliku MS zamieniony na półpauzę „–" (standard typograficzny projektu).
3. **#03 karta RFID** – treść MS to jedno zdanie; w karcie dwupolowej podzielona:
   nazwa „Skrzynki przygotowane do zastosowania RFID lub innych cyfrowych nośników
   danych" + opis „zgodnych z wymaganiami PPWR".

## Flagi (do ewentualnego potwierdzenia z klientką; NIE naniesione)

- **#08 „partnerskich" w 4 dalszych miejscach:** klientka usunęła „przedsiębiorstw
  partnerskich" tylko w Kluczowych wnioskach; 4 pozostałe wystąpienia w treści
  (sekcja PPWR, porównanie, 2×FAQ) zostawiła bez zmian – zostawione wiernie.
- **#10 karta „Skrzynki pod automaty paczkowe – clever move box + palety
  plastikowe…"** (sekcja wyzwania 02): NIE została usunięta w recenzji (usunięte
  tylko kafelki serii i FAQ) – zostaje.
- **#08 kafelek „ERGline"** (`<h5>ERGline</h5>`, data-render już „ALC tradeline"):
  wg WERYFIKACJA_ZRODEL_2026-07-06 seria „ERGline" nie istnieje w ofercie;
  klientka nie poprawiła – zostawione wiernie.
- **#03 `<title>`** wciąż niezsynchronizowany z H1 (znany drobiazg z v14).

## Weryfikacja

1. Regeneracja Wordów łańcuchem `tools/` (extract → build) → `word_v15/*.docx`
   (10 plików „… (v15).docx"); `verify_docx.py` na parze HTML v15 ↔ Word v15:
   **„wszystkie dokumenty poprawne"**.
2. Diff ekstraktów akapitowych Word v15 vs Wordy MS: **13 różnic = wyłącznie
   artefakty** (10× nagłówek dokumentu „v15"/„v14" + 3 świadome odstępstwa wyżej).
   Zero nieprzeniesionych treści.
3. Parser HTML (BeautifulSoup): tagi zbilansowane 10/10; liczby kafelków/FAQ
   zgodne z usunięciami (#07: 5 kafelków, #08: 7, #10: 6 kafelków i 6 FAQ).

## Pliki

- `makieta_01..10_*.html` – 28 poprawek + banery v15
- `word_v15/` – 10 finalnych Wordów v15 (wygenerowane, nie edytować ręcznie)
- `word_v14/` – bez zmian (stan wysłany do recenzji 20.07)
- `word_v14_MS_2026-07-24/` – oryginalne pliki klientki (źródło prawdy rundy)
- `RECENZJA_MS_2026-07-24.md` – pełny wykaz było→jest
