/* global React */
// FeatureBanner — full-bleed warehouse photo with a white callout card overlaid on the left.
// Recreated from Figma Frame537 image+card section (1519x792 @ y=3133).

const FeatureBanner = ({
  image = "../../assets/img-warehouse.jpg",
  eyebrow = "ROZWIĄZANIA",
  title = "Pojemniki dostosowane do każdego procesu produkcyjnego.",
  body = "Współpracujemy z największymi producentami w Europie. Pomagamy zaprojektować obieg pojemników w pełni dopasowany do twojego magazynu i linii.",
  ctaLabel = "Zobacz wszystkie rozwiązania",
}) => {
  return (
    <section style={{
      position: "relative",
      width: "100%",
      height: 792,
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div style={{
        position: "absolute",
        left: 80, top: 136,
        width: 570, minHeight: 480,
        background: "white",
        padding: "80px",
        display: "flex", flexDirection: "column", gap: 32,
      }}>
        <span style={{
          font: '700 12px/1 "Inter", sans-serif',
          letterSpacing: "0.1em",
          color: "var(--bp-green-500)",
          textTransform: "uppercase",
        }}>{eyebrow}</span>
        <h3 style={{
          font: '700 36px/44px "Manrope", sans-serif',
          letterSpacing: "-0.02em",
          color: "var(--bp-ink-700)",
          margin: 0,
          textWrap: "pretty",
        }}>{title}</h3>
        <p style={{
          font: '400 18px/28px "Manrope", sans-serif',
          letterSpacing: "-0.01em",
          color: "var(--bp-ink-500)",
          margin: 0,
        }}>{body}</p>
        <button
          className="bp-btn bp-btn-primary bp-btn-md"
          style={{ alignSelf: "flex-start", marginTop: 8 }}
        >
          {ctaLabel}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
};

window.FeatureBanner = FeatureBanner;
