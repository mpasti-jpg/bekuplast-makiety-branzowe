/* global React */
// IndustryGrid — 6 industry cards in a 3-col grid. Image + tag + H3.
// Used on homepage and the "Branże" overview.

const INDUSTRIES = [
  { tag: "AUTOMOTIVE", title: "Przemysł motoryzacyjny", img: "../../assets/img-automotive-hero.png", text: "Pojemniki ESD i KLT do transportu komponentów i części." },
  { tag: "LOGISTYKA", title: "Logistyka i magazynowanie", img: "../../assets/img-warehouse.jpg", text: "Skrzynki EURO dla magazynów AS/RS i 3PL." },
  { tag: "PRODUKCJA", title: "Produkcja przemysłowa", img: "../../assets/img-factory.jpg", text: "Stabilne pojemniki dla intralogistyki produkcji." },
  { tag: "SPOŻYWCZE", title: "Przetwórstwo żywności", img: "../../assets/img-product-line.jpg", text: "Certyfikowane do kontaktu z żywnością, HACCP." },
  { tag: "TRANSPORT", title: "Transport i dystrybucja", img: "../../assets/img-logistics.jpg", text: "Pojemniki na rynek napojów i FMCG." },
  { tag: "MAGAZYNY", title: "Pooling — obieg zamknięty", img: "../../assets/img-crates-stack.png", text: "Wielokrotnego użytku, w obiegu zwrotnym." },
];

const IndustryCard = ({ tag, title, img, text, onOpen }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "white",
        border: "1px solid var(--bp-ink-100)",
        borderRadius: 4,
        overflow: "hidden",
        cursor: "pointer",
        transform: hover ? "translateY(-2px)" : "none",
        boxShadow: hover ? "var(--shadow-md)" : "none",
        transition: "transform .2s, box-shadow .2s",
        display: "flex", flexDirection: "column",
      }}
    >
      <div style={{
        aspectRatio: "4 / 3",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#efefef",
      }} />
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{
          alignSelf: "flex-start",
          display: "inline-flex", alignItems: "center", gap: 14,
          padding: "6px 12px",
          border: "1px solid var(--bp-ink-200)",
          borderRadius: 4,
          background: "white",
          font: '700 11px/1 "Inter", sans-serif',
          letterSpacing: "1.4px",
          textTransform: "uppercase",
          color: "var(--bp-green-600)",
        }}>
          {tag}
          <span style={{ width: 3, height: 3, background: "var(--bp-green-500)" }} />
        </span>
        <h3 style={{
          font: '700 22px/30px "Manrope", sans-serif',
          letterSpacing: "-0.01em",
          color: "var(--bp-ink-700)",
          margin: 0,
        }}>{title}</h3>
        <p style={{
          font: '400 15px/22px "Manrope", sans-serif',
          color: "var(--bp-ink-500)",
          margin: 0,
        }}>{text}</p>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4,
          font: '700 11px/1 "Inter", sans-serif',
          letterSpacing: "1.4px",
          textTransform: "uppercase",
          color: "var(--bp-green-600)",
        }}>
          Dowiedz się więcej
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </article>
  );
};

const IndustryGrid = ({ industries = INDUSTRIES, onPick, eyebrow = "BRANŻE", title = "Wybierz swoją branżę" }) => {
  return (
    <section style={{ padding: "96px 80px", background: "white" }}>
      <div style={{ maxWidth: 1352, margin: "0 auto" }}>
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <span style={{
            font: '700 12px/1 "Inter", sans-serif',
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--bp-green-500)",
            display: "inline-block",
            marginBottom: 16,
          }}>{eyebrow}</span>
          <h2 style={{
            font: '700 44px/53px "Manrope", sans-serif',
            letterSpacing: "-0.02em",
            color: "var(--bp-ink-700)",
            margin: 0,
            textWrap: "pretty",
          }}>{title}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {industries.map(i => <IndustryCard key={i.title} {...i} onOpen={() => onPick?.(i)} />)}
        </div>
      </div>
    </section>
  );
};

window.IndustryGrid = IndustryGrid;
window.INDUSTRIES = INDUSTRIES;
