# tools/ – generator dokumentów Word z makiet HTML

Dokumenty Word dla klientki (recenzja treści) powstają **wyłącznie** z makiet HTML,
przez ten generator. Nie edytuj plików `.docx` ręcznie – przy kolejnej regeneracji
zmiany zostaną nadpisane. Popraw treść w `makieta_NN_*.html` i uruchom generator.

## Uruchomienie

```bash
export NODE_PATH=$(npm root -g)      # moduł docx jest zainstalowany globalnie
python3 tools/extract_content.py     # HTML  -> tools/content.json
node    tools/build_docx.js          # JSON  -> word_v14/*.docx
python3 tools/verify_docx.py         # kontrola jakości (kod wyjścia 1 = błąd)
```

Paczka do wysyłki:

```bash
cd word_v14 && rm -f "10 stron branzowych.zip" && zip -X -q "10 stron branzowych.zip" *.docx -x ".*"
```

## Co trafia do dokumentu

**Treść redakcyjna:** nagłówki, akapity, „Kluczowe wnioski", wyzwania, produkty,
artykuły PPWR, cytat, następne kroki, case studies, sekcja powiązana, FAQ, kontakt.

**Pomijany interfejs strony:** nawigacja i pasek górny, okruszki, selektor prototypu,
podpowiedzi „przewiń", strzałki karuzeli `‹ ›`, placeholdery zdjęć i wideo
(`[foto wdrożenia]`, „Ilustracja / foto produktów"), pola formularza (`[pole: ...]`),
powtarzalne odnośniki („Zobacz serię →", „zobacz produkt →", „Zobacz więcej").

Teksty przycisków CTA są zachowane, ale zebrane w jeden drobny wiersz
(`Przycisk: …`), żeby odróżnić je od treści właściwej.

## Historia błędu (v14, zgłoszenie z 20.07.2026)

W dokumentach z 17.07.2026 pogrubiony **lead zdania** z sekcji „Kluczowe wnioski"
(`<li><b>Teza.</b> rozwinięcie…</li>`) był przenoszony na **koniec** punktu i tracił
pogrubienie. Punkty zaczynały się wtedy od `–` lub od środka zdania, co klientka
zgłosiła jako „ucięte początki zdań".

`extract_content.py` zachowuje kolejność i pogrubienie przez model runów
(`[{t, b}]`), a `verify_docx.py` sprawdza dla każdego punktu, że pierwszy run jest
pogrubiony i dokładnie odpowiada zawartości `<b>` z HTML. Test obejmuje wszystkie
45 punktów w 10 makietach.

## Kontrola jakości

`verify_docx.py` sprawdza:

1. pogrubiony lead na początku każdego punktu „Kluczowych wniosków" (zgodność z HTML),
2. brak elementów interfejsu w tekście,
3. kompletność treści (akapity wyzwań, FAQ, artykuły PPWR, case studies, nagłówki),
4. typografię – półpauza „–", nigdy pauza „—".
