/* global React, BekuplastLogo */
// Footer — dark, multi-column, with signature squares in top-right corner.
// Recreated from Figma node 0:26 (footer SYMBOL, 1513×1038).

const FOOTER_LINKS = {
  series: ["EURO-NORM basicline", "EURO-NORM basicline plus", "EURO-NORM ERGline", "EURO-NORM silverline", "EURO-NORM contecline", "EURO-NORM ESD", "EURO-NORM KLT/VDA", "EURO-NORM bakeline"],
  industries: ["Przemysł motoryzacyjny", "Farmaceutyczna i kosmetyczna", "Sprzedaż i transport napojów", "Handel detaliczny i e-commerce", "Produkcja przemysłowa", "Rolnictwo i logistyka", "Przetwórstwo żywności"],
  company: ["O nas", "Rozwój", "Produkcja", "Jakość", "Historia", "Pooling"],
  service: ["Dostępne kolory produktów", "Wymiary pojemników", "Do pobrania", "Ankieta dla klientów"],
  legal: ["Polityka prywatności", "Ogólne warunki handlowe", "Ustawienia plików cookie"],
};

const FooterColumn = ({ title, links }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <h4 style={{
      font: '700 22px/33px "Manrope", sans-serif',
      letterSpacing: "-0.01em",
      color: "white",
      margin: 0,
    }}>{title}</h4>
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {links.map(l => (
        <a key={l} href="#" style={{
          font: '400 15px/22px "Manrope", sans-serif',
          color: "rgba(255,255,255,.7)",
          transition: "color .15s",
          whiteSpace: "pre-line",
        }} onMouseEnter={e => e.currentTarget.style.color = "var(--bp-green-300)"}
           onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.7)"}>{l}</a>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer style={{
    position: "relative",
    background: "var(--bp-ink-800)",
    color: "white",
    padding: "88px 80px 32px",
    overflow: "hidden",
  }}>
    {/* Signature squares in top-right — figma positions */}
    <div style={{
      position: "absolute",
      top: 0, right: 0,
      width: 348, height: 264,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
    }}>
      <div /><div /><div /><div style={{ background: "var(--bp-green-200)" }} />
      <div /><div /><div style={{ background: "var(--bp-green-500)" }} /><div style={{ background: "white" }} />
      <div /><div /><div style={{ background: "var(--bp-ink-700)" }} /><div style={{ background: "var(--bp-ink-700)" }} />
    </div>

    <div style={{ position: "relative", maxWidth: 1352, margin: "0 auto", display: "flex", flexDirection: "column", gap: 64 }}>
      {/* Top — logo + contact */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <BekuplastLogo size={40} variant="mono" />
        <div style={{ display: "flex", gap: 60 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ font: '400 16px/26px "Manrope", sans-serif', letterSpacing: "-0.01em", color: "rgba(255,255,255,.6)" }}>Telefon kontaktowy</span>
            <span style={{ font: '700 32px/40px "Manrope", sans-serif', letterSpacing: "-0.02em", color: "white" }}>+48 32 224-3520</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ font: '400 16px/26px "Manrope", sans-serif', letterSpacing: "-0.01em", color: "rgba(255,255,255,.6)" }}>Adres e-mail</span>
            <span style={{ font: '700 32px/40px "Manrope", sans-serif', letterSpacing: "-0.02em", color: "white" }}>info@bekuplast.pl</span>
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(255,255,255,.08)" }} />

      {/* Contact CTA + 4-col link grid */}
      <div style={{ display: "grid", gridTemplateColumns: "276px 1fr", gap: 100 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
          <p style={{
            font: '500 18px/28px "Manrope", sans-serif',
            letterSpacing: "-0.02em",
            color: "white",
            margin: 0,
          }}>Masz do nas jakieś pytania? Napisz do nas poprzez formularz kontaktowy.</p>
          <button className="bp-btn bp-btn-primary bp-btn-md" style={{ borderRadius: 8, alignSelf: "flex-start" }}>
            Kontakt z nami
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          <FooterColumn title="Serie pojemników" links={FOOTER_LINKS.series} />
          <FooterColumn title="Branże" links={FOOTER_LINKS.industries} />
          <FooterColumn title="Firma" links={FOOTER_LINKS.company} />
          <FooterColumn title="Serwis" links={FOOTER_LINKS.service} />
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(255,255,255,.08)" }} />

      {/* Bottom row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 8 }}>
        <span style={{ font: '400 13px/1 "Manrope", sans-serif', color: "rgba(255,255,255,.5)" }}>© bekuplast sp. z o.o. 2026 — Wszelkie prawa zastrzeżone.</span>
        <div style={{ display: "flex", gap: 40 }}>
          {FOOTER_LINKS.legal.map(l => (
            <a key={l} href="#" style={{ font: '400 13px/1 "Manrope", sans-serif', color: "rgba(255,255,255,.5)" }}>{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
