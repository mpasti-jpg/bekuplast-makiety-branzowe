/* global React */
// PageIntro — the section directly below the hero on industry pages.
// 740 px photograph on the left, body copy + bullet list on the right.
// Recreated from Figma Frame537 (first child section, 822px tall).

const Bullet = ({ children }) => (
  <li style={{
    display: "flex", gap: 12, alignItems: "flex-start",
    font: '400 17px/26px "Manrope", sans-serif',
    color: "var(--bp-ink-700)",
    listStyle: "none",
  }}>
    <span
      aria-hidden
      style={{
        flex: "none",
        width: 16, height: 16, marginTop: 5,
        display: "grid", placeItems: "center",
        background: "var(--bp-green-500)",
        borderRadius: 999,
      }}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
    </span>
    <span>{children}</span>
  </li>
);

const PageIntro = ({
  image = "../../assets/img-automotive-hero.png",
  title = "Opakowania dla przemysłu motoryzacyjnego\ni automotive",
  lede = "Postaw na niezawodne skrzynie plastikowe do magazynowania oraz pojemniki automotive, dzięki którym usprawnisz procesy składowania, załadunku oraz transportu części samochodowych.",
  bullets = [
    "bardzo stabilne, dzięki ukośnym wzmocnieniom",
    "dostosowane do obsługi automatycznej",
    "ergonomiczne uchwyty dostosowane do obsługi manualnej",
    "stabilne układanie w stos",
  ],
}) => {
  return (
    <section style={{
      padding: "136px 80px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 74,
      alignItems: "center",
    }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "740 / 550",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 4,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 540 }}>
        <h2 style={{
          font: '700 44px/53px "Manrope", sans-serif',
          letterSpacing: "-0.02em",
          color: "var(--bp-ink-700)",
          margin: 0,
          whiteSpace: "pre-line",
          textWrap: "pretty",
        }}>{title}</h2>
        <p style={{
          font: '400 18px/28px "Manrope", sans-serif',
          letterSpacing: "-0.01em",
          color: "var(--bp-ink-500)",
          margin: 0,
        }}>{lede}</p>
        <ul style={{
          display: "flex", flexDirection: "column", gap: 12,
          padding: 0, margin: 0,
        }}>
          {bullets.map((b, i) => <Bullet key={i}>{b}</Bullet>)}
        </ul>
      </div>
    </section>
  );
};

window.PageIntro = PageIntro;
