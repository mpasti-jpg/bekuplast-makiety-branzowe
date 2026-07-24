#!/usr/bin/env node
/**
 * Generator dokumentów Word z modelu treści (tools/content.json).
 *
 * Cel: czysty dokument do recenzji treści przez klienta – bez elementów
 * interfejsu strony (nawigacja, okruszki, „przewiń", strzałki karuzeli,
 * placeholdery zdjęć, pola formularza).
 *
 * Uruchomienie:  node tools/build_docx.js
 * Wynik:         word_v14/Strona NN – Tytuł (v14).docx
 */

const fs = require("fs");
const path = require("path");

const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  BorderStyle, LevelFormat, Footer, PageNumber, TabStopType, convertMillimetersToTwip,
} = require("docx");

// --- paleta bekuplast ------------------------------------------------------
const GREEN = "427718";      // --bp-green-700
const GREEN_MID = "65B32E";  // --bp-green-500
const INK_900 = "1D1D1D";
const INK_800 = "2D2D2D";
const INK_700 = "434343";
const INK_500 = "717171";
const INK_400 = "9A9A9A";
const HAIR = "DEDEDE";

const FONT = "Calibri";
const BODY = 21;   // half-points => 10.5pt

// A4 (11906 tw) minus marginesy 22 mm => szerokość kolumny tekstu
const MARGIN_MM = 22;
const TEXT_WIDTH = 11906 - 2 * convertMillimetersToTwip(MARGIN_MM);

const ROOT = path.dirname(__dirname);
const docs = JSON.parse(fs.readFileSync(path.join(__dirname, "content.json"), "utf8"));
const OUTDIR = path.join(ROOT, "word_v14");

// --- pomocnicze akapity ----------------------------------------------------

const body = (text, opts = {}) =>
  new Paragraph({
    spacing: { after: opts.after ?? 140, line: 264 },
    indent: opts.indent,
    children: [new TextRun({ text, font: FONT, size: BODY, color: opts.color ?? INK_800 })],
  });

/** akapit z runów [{t,b}] – zachowuje pogrubiony lead zdania */
const richBullet = (runs) =>
  new Paragraph({
    numbering: { reference: "bp-bullets", level: 0 },
    spacing: { after: 120, line: 264 },
    children: runs.map((r) =>
      new TextRun({
        text: r.t,
        font: FONT,
        size: BODY,
        bold: r.b,
        color: r.b ? INK_900 : INK_800,
      })
    ),
  });

const plainBullet = (text) =>
  new Paragraph({
    numbering: { reference: "bp-bullets", level: 0 },
    spacing: { after: 100, line: 264 },
    children: [new TextRun({ text, font: FONT, size: BODY, color: INK_800 })],
  });

/** punkt listy: pogrubiona nazwa + opis */
const leadBullet = (lead, rest) =>
  new Paragraph({
    numbering: { reference: "bp-bullets", level: 0 },
    spacing: { after: 120, line: 264 },
    children: [
      new TextRun({ text: lead, font: FONT, size: BODY, bold: true, color: INK_900 }),
      ...(rest ? [new TextRun({ text: ` – ${rest}`, font: FONT, size: BODY, color: INK_800 })] : []),
    ],
  });

/** drobny wiersz pomocniczy (produkt przy wyzwaniu, chipsy case study, przyciski) */
const small = (label, text) =>
  new Paragraph({
    spacing: { after: 160, line: 240 },
    indent: { left: 240 },
    children: [
      ...(label ? [new TextRun({ text: `${label} `, font: FONT, size: 17, color: INK_400, bold: true })] : []),
      new TextRun({ text, font: FONT, size: 17, color: INK_500 }),
    ],
  });

const eyebrow = (text) =>
  new Paragraph({
    spacing: { before: 420, after: 40 },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        font: FONT, size: 15, bold: true, color: GREEN_MID, characterSpacing: 30,
      }),
    ],
  });

const h1 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 120, after: 160 },
    children: [new TextRun({ text, font: FONT, size: 32, bold: true, color: INK_900 })],
  });

const h2 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 40, after: 180 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: HAIR, space: 8 } },
    children: [new TextRun({ text, font: FONT, size: 27, bold: true, color: GREEN })],
  });

const h3 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 260, after: 90 },
    children: [new TextRun({ text, font: FONT, size: 23, bold: true, color: INK_900 })],
  });

const quote = (text, cite) => {
  const out = [
    new Paragraph({
      spacing: { before: 160, after: cite ? 60 : 220, line: 264 },
      indent: { left: 340 },
      border: { left: { style: BorderStyle.SINGLE, size: 18, color: GREEN_MID, space: 14 } },
      children: [new TextRun({ text, font: FONT, size: BODY, italics: true, color: INK_700 })],
    }),
  ];
  if (cite) {
    out.push(new Paragraph({
      spacing: { after: 220, line: 240 },
      indent: { left: 340 },
      children: [new TextRun({ text: cite, font: FONT, size: 16, color: INK_400 })],
    }));
  }
  return out;
};

const rule = () =>
  new Paragraph({
    spacing: { before: 120, after: 260 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: HAIR, space: 2 } },
    children: [new TextRun({ text: "", font: FONT, size: 2 })],
  });

// --- budowa jednego dokumentu ---------------------------------------------

function buildChildren(doc) {
  const out = [];
  const push = (x) => (Array.isArray(x) ? out.push(...x) : out.push(x));

  // nagłówek dokumentu
  push(new Paragraph({
    spacing: { after: 60 },
    children: [new TextRun({
      text: `Strona ${doc.page_no} – ${doc.title}`,
      font: FONT, size: 40, bold: true, color: INK_900,
    })],
  }));

  const metaLines = [`Makieta ${doc.version} · ${doc.url}`];
  if (doc.specs["Persona"]) metaLines.push(`Persona: ${doc.specs["Persona"]}`);
  if (doc.specs["Primary keyword"]) {
    // bez wewnętrznych metryk agencyjnych "(vol 200, KD 0, CPC 70 zł)"
    const kw = doc.specs["Primary keyword"].replace(/\s*\((?:vol|KD|CPC)[^)]*\)\s*$/i, "").trim();
    metaLines.push(`Główna fraza: ${kw}`);
  }

  metaLines.forEach((t, i) =>
    push(new Paragraph({
      spacing: { after: i === metaLines.length - 1 ? 140 : 30, line: 240 },
      children: [new TextRun({ text: t, font: FONT, size: 17, color: INK_500 })],
    }))
  );

  push(new Paragraph({
    spacing: { after: 120, line: 240 },
    border: { top: { style: BorderStyle.SINGLE, size: 6, color: HAIR, space: 10 } },
    children: [new TextRun({
      text: "Dokument zawiera treść makiety do recenzji. Komentarze prosimy nanosić bezpośrednio w pliku.",
      font: FONT, size: 17, italics: true, color: INK_500,
    })],
  }));
  push(rule());

  for (const b of doc.blocks) {
    switch (b.type) {
      case "eyebrow":
        if (b.text) push(eyebrow(b.text));
        break;

      case "h1":
        push(h1(b.text));
        break;

      case "h2":
        push(h2(b.text));
        break;

      case "lede":
        push(new Paragraph({
          spacing: { after: 200, line: 276 },
          children: [new TextRun({ text: b.text, font: FONT, size: 23, color: INK_700 })],
        }));
        break;

      case "para":
        push(body(b.text, { after: 180 }));
        break;

      case "cta":
        push(small(b.items.length > 1 ? "Przyciski:" : "Przycisk:", b.items.join("  ·  ")));
        break;

      case "bullets":                       // Kluczowe wnioski – pogrubiony lead na początku
        b.items.forEach((it) => push(richBullet(it.runs)));
        break;

      case "plain_bullets":
        b.items.forEach((t) => push(plainBullet(t)));
        break;

      case "card":
        push(h3(`${b.num}. ${b.title}`));
        push(body(b.text, { after: b.product ? 90 : 180 }));
        if (b.product) push(small("Produkt:", `${b.product.name} – ${b.product.desc}`));
        break;

      case "products":
        b.items.forEach((p) => push(leadBullet(p.name, p.desc)));
        break;

      case "articles":
        b.items.forEach((a) => push(leadBullet(a.tag, a.text)));
        break;

      case "quote":
        push(quote(b.text, b.cite));
        break;

      case "step":
        push(h3(`${b.num}. ${b.title}`));
        push(body(b.text, { after: b.cta ? 90 : 180 }));
        if (b.cta) push(small("Przycisk:", b.cta.replace(/\s*→\s*$/, "")));
        break;

      case "cases":
        b.items.forEach((c) => {
          push(new Paragraph({
            spacing: { before: 180, after: 60 },
            children: [new TextRun({ text: c.name, font: FONT, size: 23, bold: true, color: INK_900 })],
          }));
          push(body(c.desc, { after: c.chips.length ? 60 : 160 }));
          if (c.chips.length) push(small("", c.chips.join("  ·  ")));
        });
        break;

      case "related":
        b.items.forEach((r) => push(leadBullet(r.name, r.desc)));
        break;

      case "faq":
        push(new Paragraph({
          spacing: { before: 240, after: 80 },
          children: [new TextRun({ text: b.q, font: FONT, size: 22, bold: true, color: INK_900 })],
        }));
        push(body(b.a, { after: 150 }));
        break;

      case "form":
        push(h3(b.title));
        push(small("Pola:", b.fields.join("  ·  ")));
        if (b.consent) push(small("Zgoda:", b.consent));
        if (b.submit) push(small("Przycisk:", b.submit));
        break;
    }
  }
  return out;
}

function makeDoc(doc) {
  return new Document({
    creator: "crear agency",
    title: `Strona ${doc.page_no} – ${doc.title}`,
    description: `Treść makiety branżowej PPWR ${doc.version} do recenzji`,
    numbering: {
      config: [{
        reference: "bp-bullets",
        levels: [{
          level: 0,
          format: LevelFormat.BULLET,
          text: "•",
          alignment: AlignmentType.LEFT,
          style: {
            paragraph: { indent: { left: 340, hanging: 220 } },
            run: { color: GREEN_MID, font: FONT, size: BODY },
          },
        }],
      }],
    },
    styles: {
      default: {
        document: { run: { font: FONT, size: BODY, color: INK_800 } },
      },
    },
    sections: [{
      properties: {
        page: {
          margin: {
            top: convertMillimetersToTwip(MARGIN_MM),
            bottom: convertMillimetersToTwip(20),
            left: convertMillimetersToTwip(MARGIN_MM),
            right: convertMillimetersToTwip(MARGIN_MM),
          },
        },
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            tabStops: [{ type: TabStopType.RIGHT, position: TEXT_WIDTH }],
            border: { top: { style: BorderStyle.SINGLE, size: 4, color: HAIR, space: 8 } },
            children: [
              new TextRun({
                text: `Strona ${doc.page_no} – ${doc.title} · makieta ${doc.version}`,
                font: FONT, size: 15, color: INK_400,
              }),
              new TextRun({ text: "\t", font: FONT, size: 15 }),
              new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 15, color: INK_400 }),
            ],
          })],
        }),
      },
      children: buildChildren(doc),
    }],
  });
}

(async () => {
  fs.mkdirSync(OUTDIR, { recursive: true });
  for (const doc of docs) {
    const name = `Strona ${doc.page_no} – ${doc.title} (${doc.version}).docx`;
    const buf = await Packer.toBuffer(makeDoc(doc));
    fs.writeFileSync(path.join(OUTDIR, name), buf);
    console.log(`  ✓ ${name}  (${(buf.length / 1024).toFixed(1)} kB)`);
  }
  console.log(`\nGotowe: ${docs.length} dokumentów w ${OUTDIR}`);
})();
