#!/usr/bin/env python3
"""
Kontrola jakości wygenerowanych dokumentów Word.

Sprawdza:
 1. czy w „Kluczowych wnioskach" pogrubiony lead stoi NA POCZĄTKU punktu
    i dokładnie odpowiada <b>...</b> z HTML (regresja z v14),
 2. czy z dokumentu zniknęły elementy interfejsu (przewiń, strzałki, placeholdery),
 3. czy nie zgubiono treści redakcyjnej (akapity, FAQ, produkty, case studies),
 4. czy nie wprowadzono pauzy „—" (obowiązuje półpauza „–").
"""

import glob
import os
import re
import sys
import zipfile

from bs4 import BeautifulSoup

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

# frazy jednoznacznie interfejsowe – szukane jako podciąg
BANNED = [
    "przewiń", "‹", "›", "[foto", "[pole:", "Ilustracja / foto",
    "▶ Wideo", "Wyszukiwarka", "Lista ofert", "Zapytaj AI",
    "Strona główna", "zobacz produkt", "Zobacz serię",
    "Zobacz więcej", "Makiety branżowe",
]
# słowa kolidujące z treścią redakcyjną („prototypem", „Aktualności")
# – sprawdzane jako CAŁY akapit, nie podciąg
BANNED_EXACT = ["PROTOTYP", "Produkty Branże Serwis Aktualności Firma Kontakt z nami"]


def docx_paragraphs(path):
    """[(tekst, [(tekst_runu, czy_pogrubiony), ...]), ...]"""
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml").decode("utf-8")
    out = []
    for p in re.findall(r"<w:p[ >].*?</w:p>", xml, re.S):
        runs = []
        for r in re.findall(r"<w:r>(?:(?!</w:r>).)*</w:r>", p, re.S):
            rpr = re.search(r"<w:rPr>.*?</w:rPr>", r, re.S)
            bold = bool(rpr and re.search(r"<w:b/>|<w:b ", rpr.group(0)))
            t = "".join(re.findall(r"<w:t[^>]*>(.*?)</w:t>", r, re.S))
            if t:
                runs.append((t, bold))
        if runs:
            out.append(("".join(t for t, _ in runs), runs))
    return out


def unescape(s):
    return (s.replace("&amp;", "&").replace("&lt;", "<")
             .replace("&gt;", ">").replace("&quot;", '"').replace("&#39;", "'"))


def norm(s):
    return re.sub(r"\s+", " ", unescape(s)).strip()


html_files = sorted(glob.glob(os.path.join(ROOT, "makieta_*.html")))
docx_files = sorted(
    f for f in glob.glob(os.path.join(ROOT, "word_v14", "*.docx"))
    if not os.path.basename(f).startswith("~$")  # pliki blokady Worda
)

if len(html_files) != len(docx_files):
    sys.exit(f"BŁĄD: {len(html_files)} makiet HTML vs {len(docx_files)} dokumentów Word")

fails = 0
for hf, df in zip(html_files, docx_files):
    name = os.path.basename(df)
    soup = BeautifulSoup(open(hf, encoding="utf-8").read(), "lxml")
    paras = docx_paragraphs(df)
    all_text = norm(" ".join(t for t, _ in paras))
    problems = []

    # --- 1. Kluczowe wnioski: pogrubiony lead na początku --------------------
    for li in soup.select("section.tldr ul li"):
        b = li.find("b")
        if not b:
            continue
        # separator "" – get_text(" ") wstawiłby spację przed „, do których"
        lead = norm(b.get_text(""))
        full = norm(li.get_text(""))
        match = None
        for text, runs in paras:
            if norm(text) == full:
                match = runs
                break
        if not match:
            problems.append(f"BRAK punktu w Word: „{lead[:60]}…”")
            continue
        first_text, first_bold = match[0]
        if not first_bold:
            problems.append(f"lead NIE jest pogrubiony: „{lead[:60]}…”")
        elif norm(first_text) != lead:
            problems.append(f"lead nie na początku: Word=„{norm(first_text)[:50]}…” vs HTML=„{lead[:50]}…”")

    # --- 2. elementy interfejsu ---------------------------------------------
    for bad in BANNED:
        if bad.lower() in all_text.lower():
            problems.append(f"pozostał element interfejsu: „{bad}”")
    para_set = {norm(t) for t, _ in paras}
    for bad in BANNED_EXACT:
        if bad in para_set:
            problems.append(f"pozostał element interfejsu: „{bad}”")

    # --- 3. kompletność treści redakcyjnej ----------------------------------
    expected = []
    expected += [norm(p.get_text(" ")) for p in soup.select(".challenge-card > p")]
    expected += [norm(d.select_one("p").get_text(" ")) for d in soup.select("details")]
    expected += [norm(a.get_text(" ")) for a in soup.select(".article-card p")]
    expected += [norm(c.get_text(" ")) for c in soup.select(".case-desc")]
    expected += [norm(h.get_text(" ")) for h in soup.select(".challenge-card h4, .ps-item h5, section.tldr h2")]
    for exp in expected:
        if len(exp) > 25 and exp not in all_text:
            problems.append(f"zgubiona treść: „{exp[:70]}…”")

    # --- 4. typografia: brak pauzy „—" --------------------------------------
    if "—" in all_text:
        problems.append("użyto pauzy „—” zamiast półpauzy „–”")

    status = "OK  " if not problems else "BŁĄD"
    print(f"[{status}] {name}  ({len(paras)} akapitów)")
    for p in problems[:6]:
        print(f"        · {p}")
    fails += len(problems)

print()
print("WYNIK: wszystkie dokumenty poprawne" if not fails else f"WYNIK: {fails} problemów")
sys.exit(1 if fails else 0)
