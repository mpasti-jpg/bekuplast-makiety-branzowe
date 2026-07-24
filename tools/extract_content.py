#!/usr/bin/env python3
"""
Ekstrakcja treści redakcyjnej z makiet HTML do modelu JSON (wejście dla build_docx.js).

Zasada: do dokumentu Word trafia WYŁĄCZNIE treść redakcyjna.
Elementy interfejsu (nawigacja, okruszki, podpowiedzi „przewiń", strzałki karuzeli,
placeholdery zdjęć/wideo, pola formularza, selektor prototypu) są pomijane.

Kluczowa poprawka vs. poprzedni generator: w sekcji „Kluczowe wnioski" pogrubiony
lead zdania pozostaje NA POCZĄTKU punktu i zachowuje pogrubienie
(poprzednio był przenoszony na koniec i tracił formatowanie – stąd uwaga
klientki o „uciętych początkach zdań").

Użycie:  python3 tools/extract_content.py            # wszystkie makiety -> tools/content.json
"""

import glob
import json
import os
import re
import sys

from bs4 import BeautifulSoup, NavigableString

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)


def clean(text):
    """Normalizuje białe znaki, zachowuje polskie znaki i półpauzy."""
    if text is None:
        return ""
    return re.sub(r"\s+", " ", text).strip()


def runs(el):
    """Zamienia zawartość elementu na listę runów [{t, b}] zachowując <b>/<strong>.

    Dzięki temu pogrubiony lead zdania zostaje tam, gdzie jest w HTML.
    """
    out = []

    def emit(txt, bold):
        txt = re.sub(r"\s+", " ", txt)
        if not txt:
            return
        if out and out[-1]["b"] == bold:
            out[-1]["t"] += txt
        else:
            out.append({"t": txt, "b": bold})

    def walk(node, bold):
        for child in node.children:
            if isinstance(child, NavigableString):
                emit(str(child), bold)
            elif child.name in ("b", "strong"):
                walk(child, True)
            elif child.name == "br":
                emit(" ", bold)
            else:
                walk(child, bold)

    walk(el, False)
    # przytnij skrajne spacje
    if out:
        out[0]["t"] = out[0]["t"].lstrip()
        out[-1]["t"] = out[-1]["t"].rstrip()
    return [r for r in out if r["t"]]


def txt(el, sel=None):
    if sel:
        el = el.select_one(sel) if el else None
    return clean(el.get_text(" ")) if el else ""


def parse(path):
    soup = BeautifulSoup(open(path, encoding="utf-8").read(), "lxml")
    doc = {}

    # --- metryczka z banera roboczego -------------------------------------
    banner = soup.select_one(".meta-banner")
    head = txt(banner, "strong")  # "Makieta v14 – strona #10 – E-commerce, 3PL i fulfillment"
    # wariant strony 03: "Makieta v14 (DS bekuplast canonical) – strona #03 – ..."
    m = re.search(r"Makieta\s+(v\d+)[^–]*–\s*strona\s*#(\d+)\s*–\s*(.+)$", head)
    doc["version"] = m.group(1) if m else ""
    doc["page_no"] = m.group(2).zfill(2) if m else ""
    title = m.group(3).strip() if m else txt(soup, "h1")
    # oznaczenia robocze agencji nie trafiają do dokumentu dla klienta
    title = re.sub(r"\s*\((catch-all|DS[^)]*)\)\s*$", "", title).strip()
    doc["title"] = title
    doc["url"] = txt(banner, "code")

    specs = {}
    for d in banner.select(".specs div") if banner else []:
        label = txt(d, "b").rstrip(":")
        value = clean(d.get_text(" ").replace(txt(d, "b"), "", 1))
        if label:
            specs[label] = value
    doc["specs"] = specs

    blocks = []
    B = blocks.append

    # --- hero --------------------------------------------------------------
    hero = soup.select_one(".hero")
    B({"type": "h1", "text": txt(hero, "h1")})
    B({"type": "lede", "text": txt(hero, ".lede")})
    ctas = [txt(a) for a in hero.select(".cta-row a")] if hero else []
    if ctas:
        B({"type": "cta", "items": ctas})

    # --- TL;DR / Kluczowe wnioski -----------------------------------------
    tldr = soup.select_one("section.tldr")
    if tldr:
        B({"type": "eyebrow", "text": txt(tldr, ".tag")})
        B({"type": "h2", "text": txt(tldr, "h2")})
        items = []
        for li in tldr.select("ul li"):
            items.append({"runs": runs(li)})
        B({"type": "bullets", "items": items})

    # --- Wyzwania ----------------------------------------------------------
    ch_sec = soup.select_one("section.alt-bg .challenge-list")
    if ch_sec:
        sec = ch_sec.find_parent("section")
        B({"type": "eyebrow", "text": txt(sec, ".split-head .tag")})
        B({"type": "h2", "text": txt(sec, ".split-head h2")})
        lead = txt(sec, ".split-lead")
        if lead:
            B({"type": "para", "text": lead})
        for card in ch_sec.select(".challenge-card"):
            item = {
                "type": "card",
                "num": txt(card, ".challenge-num"),
                "title": txt(card, "h4"),
                "text": txt(card, "p"),
            }
            prod = card.select_one(".challenge-product")
            if prod:
                item["product"] = {
                    "name": txt(prod, ".cp-name"),
                    "desc": txt(prod, ".cp-dim"),
                }
            B(item)

    # --- Produkty ----------------------------------------------------------
    ps = soup.select_one(".product-showcase")
    if ps:
        B({"type": "eyebrow", "text": txt(ps, ".tag")})
        B({"type": "h2", "text": txt(ps, "h2")})
        prods = []
        for a in ps.select(".ps-item"):
            prods.append({"name": txt(a, "h5"), "desc": txt(a, ".ps-note")})
        B({"type": "products", "items": prods})

    # --- PPWR / zgodność ---------------------------------------------------
    ppwr = soup.select_one("section.ppwr-section")
    if ppwr:
        B({"type": "eyebrow", "text": txt(ppwr, ".tag")})
        B({"type": "h2", "text": txt(ppwr, ".ppwr-header h2")})
        for p in ppwr.select(".ppwr-header p"):
            B({"type": "para", "text": txt(p)})
        arts = []
        for card in ppwr.select(".article-card"):
            arts.append({"tag": txt(card, ".article-tag"), "text": txt(card, "p")})
        B({"type": "articles", "items": arts})

    # --- Następne kroki ----------------------------------------------------
    act = soup.select_one("section.action-section")
    if act:
        B({"type": "eyebrow", "text": txt(act, ".tag")})
        B({"type": "h2", "text": txt(act, ".action-head h2")})
        q = act.select_one("blockquote")
        if q:
            B({"type": "quote", "text": txt(q), "cite": txt(act, "cite")})
        for step in act.select(".action-step"):
            B({
                "type": "step",
                "num": txt(step, ".as-num"),
                "title": txt(step, "h4"),
                "text": txt(step, ".as-desc"),
                "cta": txt(step, ".as-link"),
            })

    # --- Case studies ------------------------------------------------------
    case = soup.select_one("section.case-section-v10")
    if case:
        B({"type": "eyebrow", "text": txt(case, ".tag")})
        B({"type": "h2", "text": txt(case, "h2")})
        intro = txt(case, ".case-intro")
        if intro:
            B({"type": "para", "text": intro})
        cases = []
        for sl in case.select(".case-slide"):
            chips = [txt(c) for c in sl.select(".case-chip")]
            cases.append({
                "name": txt(sl, ".case-name"),
                "desc": txt(sl, ".case-desc"),
                "chips": chips,
            })
        B({"type": "cases", "items": cases})

    # --- Koszt PPWR --------------------------------------------------------
    koszt = soup.select_one("section.koszt-section")
    if koszt:
        B({"type": "eyebrow", "text": txt(koszt, ".section-eyebrow")})
        B({"type": "h2", "text": txt(koszt, "h2")})
        for p in koszt.select(".koszt-content p"):
            B({"type": "para", "text": txt(p)})
        cta = koszt.select_one(".koszt-content a.btn")
        if cta:
            B({"type": "cta", "items": [txt(cta)]})

    # --- Powiązane ---------------------------------------------------------
    rel = soup.select_one(".related-grid-v10")
    if rel:
        sec = rel.find_parent("section")
        B({"type": "eyebrow", "text": txt(sec, ".tag")})
        B({"type": "h2", "text": txt(sec, "h2")})
        items = []
        for card in rel.select(".related-card"):
            items.append({"name": txt(card, "h5"), "desc": txt(card, "p")})
        B({"type": "related", "items": items})

    # --- FAQ ---------------------------------------------------------------
    faq = soup.select_one("section.faq-split")
    if faq:
        B({"type": "eyebrow", "text": txt(faq, ".split-head .tag")})
        B({"type": "h2", "text": txt(faq, ".split-head h2")})
        for det in faq.select("details"):
            B({
                "type": "faq",
                "q": txt(det, "summary"),
                "a": txt(det, "p"),
            })

    # --- Kontakt -----------------------------------------------------------
    form = soup.select_one("section.form-cta")
    if form:
        B({"type": "eyebrow", "text": txt(form, ".section-eyebrow")})
        B({"type": "h2", "text": txt(form, ".form-cta-content h2")})
        pts = [txt(li) for li in form.select(".form-cta-content ul li")]
        if pts:
            B({"type": "plain_bullets", "items": pts})
        card = form.select_one(".form-card")
        if card:
            B({
                "type": "form",
                "title": txt(card, "h3"),
                "fields": [txt(l) for l in card.select(".form-field label")],
                "consent": txt(card, ".form-consent span"),
                "submit": txt(card, "button"),
            })

    doc["blocks"] = blocks
    return doc


def main():
    files = sorted(glob.glob(os.path.join(ROOT, "makieta_*.html")))
    if not files:
        sys.exit("Nie znaleziono plików makieta_*.html")
    docs = [parse(f) for f in files]
    out = os.path.join(HERE, "content.json")
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(docs, fh, ensure_ascii=False, indent=1)
    print(f"OK: {len(docs)} makiet -> {out}")
    for d in docs:
        types = {}
        for b in d["blocks"]:
            types[b["type"]] = types.get(b["type"], 0) + 1
        print(f"  #{d['page_no']} {d['title'][:38]:40} bloków={len(d['blocks'])}")


if __name__ == "__main__":
    main()
