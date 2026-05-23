/* global React */
// ProductGrid — catalog card grid. SKU + name + 3 specs + status badge.

const PRODUCTS = [
  { sku: "4630.B", name: "EURO Box 600×400×320", volume: "60 L", material: "HDPE", weight: "2.1 kg", price: "42,90 zł", status: { kind: "green", label: "W magazynie" } },
  { sku: "8120.G", name: "KLT 400×300×147", volume: "15 L", material: "PP", weight: "0.7 kg", price: "28,50 zł", status: { kind: "warn", label: "Niski stan" } },
  { sku: "5550.F", name: "Składany 800×600", volume: "120 L", material: "HDPE", weight: "4.2 kg", price: "189,00 zł", status: { kind: "info", label: "Na zamówienie" } },
  { sku: "9001.E", name: "EcoBox 45 rPP", volume: "45 L", material: "rPP", weight: "1.9 kg", price: "68,00 zł", status: { kind: "green", label: "Nowość" } },
  { sku: "7715.A", name: "ESD KLT 6422", volume: "38 L", material: "PP-ESD", weight: "1.6 kg", price: "94,00 zł", status: { kind: "green", label: "W magazynie" } },
  { sku: "3210.W", name: "Distribution 43", volume: "22 L", material: "HDPE", weight: "0.9 kg", price: "31,20 zł", status: { kind: "neutral", label: "EURO 400×300" } },
  { sku: "4630.S", name: "Silverline 600×400", volume: "60 L", material: "HDPE", weight: "2.3 kg", price: "54,90 zł", status: { kind: "green", label: "W magazynie" } },
  { sku: "2900.B", name: "Bakeline 600×400", volume: "30 L", material: "PP-HT", weight: "1.4 kg", price: "78,00 zł", status: { kind: "info", label: "Na zamówienie" } },
];

const BADGE_STYLE = {
  green:   { bg: "var(--bp-green-50)",     fg: "var(--bp-green-700)" },
  info:    { bg: "var(--bp-info-bg)",      fg: "var(--bp-info)" },
  warn:    { bg: "var(--bp-warning-bg)",   fg: "var(--bp-warning)" },
  danger:  { bg: "var(--bp-danger-bg)",    fg: "var(--bp-danger)" },
  neutral: { bg: "var(--bp-ink-50)",       fg: "var(--bp-ink-600)" },
};

const Badge = ({ kind, label, withDot = true }) => {
  const s = BADGE_STYLE[kind] || BADGE_STYLE.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "4px 8px",
      borderRadius: 2,
      background: s.bg, color: s.fg,
      font: '600 11px/1.4 "Inter", sans-serif',
      letterSpacing: "0.3px",
    }}>
      {withDot && <span style={{ width: 6, height: 6, borderRadius: 999, background: "currentColor" }} />}
      {label}
    </span>
  );
};

const ProductCard = ({ p, onAdd }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <article
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
      }}
    >
      <div style={{
        aspectRatio: "4 / 3",
        background: "var(--bp-ink-25)",
        display: "grid", placeItems: "center",
        position: "relative", padding: 24,
      }}>
        <span style={{ position: "absolute", top: 12, left: 12 }}>
          <Badge {...p.status} />
        </span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "55%", height: "55%", color: "var(--bp-ink-300)" }}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/>
        </svg>
      </div>
      <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ font: '500 11px/1 "JetBrains Mono", monospace', color: "var(--bp-ink-500)" }}>SKU {p.sku}</div>
        <h4 style={{ font: '700 16px/22px "Manrope", sans-serif', color: "var(--bp-ink-700)", margin: 0, letterSpacing: "-0.01em" }}>{p.name}</h4>
        <div style={{ display: "flex", gap: 10, marginTop: 4, font: '400 12px/1 "Manrope", sans-serif', color: "var(--bp-ink-500)" }}>
          <span>{p.volume}</span><span>·</span><span>{p.material}</span><span>·</span><span>{p.weight}</span>
        </div>
        <div style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ font: '700 18px/1 "Manrope", sans-serif', color: "var(--bp-ink-700)", letterSpacing: "-0.01em" }}>{p.price}</span>
          <button
            onClick={e => { e.stopPropagation(); onAdd?.(p); }}
            style={{
              font: '700 11px/1 "Inter", sans-serif',
              letterSpacing: "1.4px",
              textTransform: "uppercase",
              color: "var(--bp-green-600)",
              background: "none", border: "none", cursor: "pointer",
            }}
          >Do koszyka →</button>
        </div>
      </div>
    </article>
  );
};

const ProductGrid = ({ products = PRODUCTS, eyebrow = "KATALOG", title = "Pojemniki najczęściej zamawiane", onAdd }) => (
  <section style={{ padding: "96px 80px", background: "white" }}>
    <div style={{ maxWidth: 1352, margin: "0 auto" }}>
      <div style={{ marginBottom: 56, maxWidth: 720 }}>
        <span style={{
          font: '700 12px/1 "Inter", sans-serif',
          letterSpacing: "0.1em", textTransform: "uppercase",
          color: "var(--bp-green-500)", display: "inline-block", marginBottom: 16,
        }}>{eyebrow}</span>
        <h2 style={{
          font: '700 44px/53px "Manrope", sans-serif',
          letterSpacing: "-0.02em",
          color: "var(--bp-ink-700)",
          margin: 0, textWrap: "pretty",
        }}>{title}</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
        {products.map(p => <ProductCard key={p.sku} p={p} onAdd={onAdd} />)}
      </div>
    </div>
  </section>
);

window.ProductGrid = ProductGrid;
window.PRODUCTS = PRODUCTS;
window.Badge = Badge;
