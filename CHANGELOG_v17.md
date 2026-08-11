# CHANGELOG v17 – uwagi SQD Alliance, partia 2 + bramka publikacyjna (11.08.2026)

**Źródło:** komplet uwag Mai Podsiadło poza partią 1 – komentarze w plikach .docx z 06.08.2026, **adnotacje w PDF raportu audytu z 06.08.2026** (6 sztuk, w warstwie annotacji – niewidoczne przy odczycie samego tekstu), uwaga ogólna do art. 29 z maila z 07.08.2026, komentarze do artykułów blogowych z 10.08.2026. Plus wewnętrzna kontrola kompletności i spójności.

**Stan „przed" =** v16 (`a24d8bc`, partia 1 SQDA). **98 zmian punktowych** w 10 makietach.

> Uwaga o wersjonowaniu: pliki Word, które recenzowała Maja, były opisane jako „(v14)", ale wygenerowano je z HTML **v15** (`6ddb981`). Partia 1 uwag (v16) objęła tylko strony #02 i #03 oraz sweep dat – dlatego 33 ze 100 zmian tej rundy dotyczyły akapitów już raz ruszonych i wymagały scalenia, a nie nadpisania.

## Zmiany przekrojowe

- **Warunek systemu ponownego użycia przy art. 29** – sedno uwagi ogólnej Mai: „samo to, że opakowanie będzie wielokrotnego użytku, nie będzie wystarczające". Dopisany wszędzie tam, gdzie opisujemy cele z ust. 1, 2, 3, 5 i 6 (14 miejsc, 6 stron).
- **Art. 29 ust. 2 i 3 nie wymagają obiegu zamkniętego** (komentarz C3 do artykułu 08): system ponownego użycia może działać w obiegu zamkniętym **albo otwartym, także ze zmianą właściciela**. Usunięte zrównanie „obieg zamknięty = treść wymogu" na stronach #01, #03, #05, #08 (14 miejsc). „Obieg zamknięty" jako opis praktyki produktowej pozostaje.
- **Przedsiębiorstwa partnerskie** dopisane obok powiązanych w opisach art. 29 ust. 2 (wcześniej tylko na #08).
- **Cezura 2040** – ujednolicona na „od 1 stycznia 2040 r." (forma z v16 przyjęta jako kanoniczna); 70%, 40% i 25% opisane jako cele **dążenia**, nie twarde progi.
- **Terminologia** – „producent" → **„wytwórca"** przy DoC i art. 5 (adnotacje z PDF); usunięta nieistniejąca w PPWR kategoria „podmiot wprowadzający"; katalog z art. 3 ust. 1 pkt 12 opisany jako **otwarty** („m.in.").
- **Art. 43 i art. 50** – opisane jako cele nałożone na **państwa członkowskie**, nie na firmy (#03, #09, #10).
- **ISPM-15** – „certyfikacja fitosanitarna" → **oznakowanie IPPC** (#06, 3 miejsca).
- **Twierdzenia rynkowe bez źródła** usunięte lub przeformułowane (#08, #09, #10).

## Zmiany per strona (wybór)

- **#02** – nowy lead punktu o PFAS w „Kluczowych wnioskach" (model progowy w konwencji teza + rozwinięcie); limit metali ciężkich dopisany do karty art. 5.
- **#03** – art. 29 ust. 1 przestał być opisywany jako cel „dla relacji B2B" (to cel ogólny); **nowa karta art. 29 ust. 3**; adresat art. 29 ust. 6 = dystrybutorzy końcowi; art. 50 w FAQ jako obowiązek państw; ROP i PPWR jako regulacje odrębne, ale PPWR reguluje też część obowiązków rejestracyjnych i sprawozdawczych ROP.
- **#04** – ostatni nienaprawiony szablon art. 29 ust. 2; art. 29 ust. 5 doprecyzowany (pudła, bez tekturowych; 25% jako cel dążenia); „Deklarację zgodności **wystawiamy**".
- **#05** – lead sekcji PPWR przestał przeczyć własnemu nagłówkowi i FAQ; nagłówek H2 mówi wprost, co zostaje poza zakresem.
- **#06** – „mogą podlegać" → „podlegasz" (5 miejsc); poprawiona składnia punktu o art. 29; „nasi potencjalni klienci".
- **#07** – **nowa karta art. 25 + zał. V** (zakaz jednorazówek dla owoców i warzyw < 1,5 kg); karta art. 5 przepisana na model progowy.
- **#08** – adresatem art. 29 ust. 1 jest podmiot gospodarczy, nie „producent"; karta art. 24 uzupełniona o zakaz zbyt dużych opakowań i regułę wypełniaczy.
- **#09** – obowiązek zwrotu opakowań przeniesiony z art. 29 ust. 6 na **ust. 9**; karta art. 50 z adresatem; termin 12.02.2027 opisany jako termin dla państw.
- **#10** – usunięte nieprawdziwe „rozporządzenie nie wymienia ich z nazwy" (3 miejsca; fulfilment – art. 3 ust. 1 pkt 12, platformy – pkt 70, logistyka – motyw 123, art. 20); **nowe karty art. 29 ust. 3 i art. 5 ust. 5**; usunięty duplikat punktu o automatach paczkowych z niepotwierdzonym porównaniem rynków.

## Porządkowe

- Banery deweloperskie: v16 → **v17** (10 stron).
- Generator Word sparametryzowany zmienną `MAKIETY_VER` (domyślnie `v14`, bez zmiany dotychczasowego zachowania) – `tools/build_docx.js`, `tools/verify_docx.py`.
- Wordy zregenerowane z HTML: **`word_v17/`** (10 plików). `verify_docx.py` – wszystkie dokumenty poprawne.
- Weryfikacja: bilans znaczników HTML czysty w 10 plikach, 13 wzorców błędu daje zero trafień, zero pauz „—".

## Ślad procesu

Poprawki powstały w dwóch przebiegach wieloagentowych: (1) 5 niezależnych soczewek nad kompletem materiałów + adwersaryjna weryfikacja każdego znaleziska + krytyk kompletności → 33 potwierdzone błędy + 10 od krytyka; (2) bramka publikacyjna – 10 korektorów, kontrola regresji i spójności międzystronicowej → 22 poprawki blokujące. Pełny opis: AD58 i AD59 w Notion (#11), podsumowanie redakcyjne w `DO PUBLIKACJI v16/PODSUMOWANIE-POPRAWEK-v16.md` (folder w `~/Downloads/Tresci MAJA - ppwr/`).

**Uwagi do bloga i słowniczka pozostają poza tym wydaniem** – 20 artykułów jest w recenzji u Mai (wysłane 11.08 niezależnie), wracają do sprawdzenia po jej poprawkach.
