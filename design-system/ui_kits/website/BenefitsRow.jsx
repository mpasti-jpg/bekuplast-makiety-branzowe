/* global React */
// BenefitsRow — the gray "CO ZYSKASZ" section with 3 white feature cards.
// Recreated from Figma Frame537 (the 789px tall light-gray section).

const BenefitsRow = ({
  eyebrow = "CO ZYSKASZ",
  title = "Korzyści dla branży motoryzacyjnej i automotive",
  benefits = [
    {
      iconColor: "var(--bp-green-500)",
      iconBg: "var(--bp-green-200)",
      title: "Porządek i jeszcze więcej cennego miejsca do magazynowania podzespołów",
    },
    {
      iconColor: "var(--bp-green-500)",
      iconBg: "var(--bp-green-200)",
      title: "Skuteczna ochrona części i komponentów przed uszkodzeniem",
    },
    {
      iconColor: "var(--bp-green-500)",
      iconBg: "var(--bp-green-200)",
      title: "Ograniczenie wydatków i lepsze wykorzystanie posiadanych zasobów",
    },
  ],
}) => {
  return (
    <section style={{
      position: "relative",
      background: "var(--bp-ink-25)",
      padding: "120px 80px",
      overflow: "hidden",
    }}>
      {/* signature squares — top left, inverted from figma */}
      <div
        style={{
          position: "absolute", left: 0, top: 0,
          width: 439, height: 176,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
        }}
      >
        <div style={{ background: "white" }} />
        <div style={{ background: "var(--bp-ink-700)" }} />
        <div style={{ background: "transparent" }} />
        <div style={{ background: "var(--bp-green-500)" }} />
        <div style={{ background: "var(--bp-green-200)" }} />
        <div style={{ background: "transparent" }} />
        <div style={{ background: "var(--bp-ink-700)" }} />
        <div style={{ background: "white" }} />
      </div>

      <div style={{ position: "relative", maxWidth: 1352, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center", marginBottom: 64 }}>
          <span style={{
            padding: "8px 12px",
            border: "1px solid var(--bp-ink-300)",
            borderRadius: 4,
            font: '700 12px/1 "Inter", sans-serif',
            letterSpacing: "0.1em",
            color: "var(--bp-ink-500)",
            display: "inline-flex", alignItems: "center", gap: 14,
          }}>
            {eyebrow}
            <span style={{ width: 2, height: 2, background: "var(--bp-ink-500)" }} />
          </span>
          <h2 style={{
            font: '700 44px/53px "Manrope", sans-serif',
            letterSpacing: "-0.02em",
            color: "var(--bp-ink-700)",
            margin: 0,
            textAlign: "center",
            maxWidth: 720,
            textWrap: "pretty",
          }}>{title}</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
        }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              style={{
                background: "white",
                border: "1px solid var(--bp-ink-100)",
                borderRight: i === benefits.length - 1 ? "1px solid var(--bp-ink-100)" : "none",
                padding: "64px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 32,
                alignItems: "center",
                textAlign: "center",
                minHeight: 324,
                justifyContent: "center",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <div style={{ width: 72, height: 72, position: "relative" }}>
                {/* Cash-shield iconography from figma — green shield with light-green coin */}
                <svg viewBox="0 0 72 72" style={{ position: "absolute", inset: 0 }}>
                  <rect x="2.25" y="20.25" width="67.5" height="47.25" rx="2" fill={b.iconColor} />
                  <rect x="15.75" y="4.5" width="49.5" height="27" rx="2" fill={b.iconBg} />
                  <circle cx="36" cy="44" r="10" fill="white" />
                  <text x="36" y="48" textAnchor="middle" fontFamily="Manrope" fontWeight="700" fontSize="13" fill={b.iconColor}>€</text>
                </svg>
              </div>
              <p style={{
                font: '700 18px/28px "Manrope", sans-serif',
                letterSpacing: "-0.01em",
                color: "var(--bp-ink-800)",
                margin: 0,
                whiteSpace: "pre-line",
                maxWidth: 260,
              }}>{b.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.BenefitsRow = BenefitsRow;
