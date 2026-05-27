# Changelog v6 → v6 (27.05.2026)

Zmiany na 10 makietach stron branżowych. Edycja po:
- Odpowiedziach Czajkowskiego z xlsx 22.05.2026 (10 referencyjnych SKU per branża, ceny, parametry techniczne, redemption rates, stawki ROP)
- Rozmowie telefonicznej Mateusz ↔ Monika z 25.05.2026 (Monika z drogi na targi)
- Decyzjach AD9–AD14 w Notion #11

## Co zostało zmienione w tej iteracji (bezpieczne, niezależne od decyzji Sojka-Czajkowski w czwartek 28.05)

### Strefa A — Repozycjonowanie kalkulatora TCO (AD9)
Wszystkie wzmianki "Oblicz TCO" / "Kalkulator TCO/ROI" / "kalkulator oszczędności" przeformułowane na "Sprawdź koszt PPWR" / "Kalkulator kosztu PPWR".

**NIE zmieniam**: Metryki KPI w opisach case studies typu "redukcja TCO o 38%", "ROI 22 miesiące" — to faktyczne wartości metryk klientów, nie nazwy naszego narzędzia. Pozostają jako konkretne liczby z wdrożeń. Również wzmianki rynkowe typu "presja OEM na redukcję TCO" w #01 — pozostają (to o sytuacji rynkowej, nie o naszym narzędziu).

### Strefa B — SKU referencyjne wybrane przez DH (xlsx 22.05.2026)
W 9 z 10 makiet dodano "Polecany dla [branża]" kartę produktową na początku sekcji "Pojemniki dla [branża]". SKU jest referencyjny dla kalkulatora kosztu PPWR — wybór DH dla obliczeń w branży.

| Makieta | Referencyjny SKU |
|---|---|
| 01 automotive | RL-KLT 6280 |
| 02 food | CFBA 2356 |
| 03 napoje | R1/R2 24 × 0,33 l |
| 04 farmacja | ALC tradeline AL643G |
| 05 intralogistyka | contecline |
| 06 logistyka 3PL | (brak — Czajkowski nie wybierał osobno) |
| 07 rolnictwo | CFBA 2356 (świadomy duplikat z food) |
| 08 produkcja | silverline |
| 09 retail/FMCG | ALC tradeline AL643G (świadomy duplikat z pharma) |
| 10 e-com | Clever Retail Box 4011 |

CSS: dodano `.tile.is-featured` z brand-green border + badge "★ POLECANY" w right-top. Spójność stylistyczna w wszystkich plikach.

### Strefa C — Korekta lead #06 logistyka 3PL
Pooling przestał być jedynym proposition w leadzie. Sformułowanie "Zakup własnej floty lub model Container-as-a-Service" pokazuje obie ścieżki. Sekcja pooling w body NIE TKNIĘTA — czeka na decyzję Sojka-Czajkowski.

## Co NIE zostało zmienione w tej iteracji

### Pooling — sekcje, FAQ, wzmianki (10 makiet)
Czeka na decyzję Sojka-Czajkowski w czwartek 28.05.2026. AD10 z 25.05 (Czajkowski: wyłączamy) jest sprzeczne z AD14 z 27.05 (Monika: pooling to 20–25% obrotu, strategiczny kierunek wzrostu). Po decyzji — osobna iteracja v7.

### Konkretne marki klientów (BMW, Mercedes, Lidl, Biedronka, InPost itd.)
Czeka na walidację legal/MMLC (pytania 5.4 i 5.5 z ankiety 05_Legal_Compliance_v4). Bezpieczniejsze warianty (VDA, POHID, ZIPSEE) gotowe jako fallback.

---

## Per plik — szczegółowy log zmian

### makieta_01_motoryzacja_automotive.html

- B: Dodano CSS .tile.is-featured (★ POLECANY badge)
- B: Wstawiono kartę polecanego SKU "RL-KLT 6280" — wybór DH z xlsx 22.05.2026

### makieta_02_przetworstwo_zywnosci.html

- B: Dodano CSS .tile.is-featured (★ POLECANY badge)
- B: Wstawiono kartę polecanego SKU "CFBA 2356" — wybór DH z xlsx 22.05.2026

### makieta_03_napoje.html

- B: Dodano CSS .tile.is-featured (★ POLECANY badge)
- B: Wstawiono kartę polecanego SKU "R1/R2 24 × 0,33 l" — wybór DH z xlsx 22.05.2026

### makieta_04_farmacja_kosmetyki.html

- B: Dodano CSS .tile.is-featured (★ POLECANY badge)
- B: Wstawiono kartę polecanego SKU "ALC tradeline AL643G" — wybór DH z xlsx 22.05.2026

### makieta_05_intralogistyka.html

- B: Dodano CSS .tile.is-featured (★ POLECANY badge)
- B: Wstawiono kartę polecanego SKU "contecline" — wybór DH z xlsx 22.05.2026

### makieta_06_logistyka_3pl.html

- C: Lead przeformułowany — pooling nie jest już jedynym proposition (dodano "Zakup własnej floty lub")

### makieta_07_rolnictwo_ogrodnictwo.html

- B: Dodano CSS .tile.is-featured (★ POLECANY badge)
- B: Wstawiono kartę polecanego SKU "CFBA 2356" — wybór DH z xlsx 22.05.2026

### makieta_08_produkcja_przemyslowa.html

- B: Dodano CSS .tile.is-featured (★ POLECANY badge)
- B: Wstawiono kartę polecanego SKU "silverline" — wybór DH z xlsx 22.05.2026

### makieta_09_handel_fmcg.html

- B: Dodano CSS .tile.is-featured (★ POLECANY badge)
- B: Wstawiono kartę polecanego SKU "ALC tradeline AL643G" — wybór DH z xlsx 22.05.2026

### makieta_10_ecommerce_3pl.html

- B: Dodano CSS .tile.is-featured (★ POLECANY badge)
- B: Wstawiono kartę polecanego SKU "Clever Retail Box 4011" — wybór DH z xlsx 22.05.2026

