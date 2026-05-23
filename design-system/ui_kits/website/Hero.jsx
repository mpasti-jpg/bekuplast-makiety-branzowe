/* global React */
// Hero — recreated from Figma: industry landing hero
// Layout matches "Przemysł motoryzacyjny" landing.
// Eyebrow tag → H1 → lede, with breadcrumb above and signature squares decoration.

const Hero = ({
  breadcrumb = "Producent pojemników plastikowych - Rozwiązania branżowe - Przemysł motoryzacyjny i automotive",
  eyebrow = "BRANŻE",
  title = "Przemysł motoryzacyjny",
  lede = "Nowoczesne rozwiązania dla lepszej mobilności",
  backgroundImage = "../../assets/img-automotive-banner.jpg",
}) => {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/* Breadcrumb */}
      <div
        style={{
          height: 64,
          borderBottom: "1px solid var(--bp-ink-100)",
          padding: "0 80px",
          display: "flex",
          alignItems: "center",
          background: "white",
          position: "relative", zIndex: 2,
        }}
      >
        <span
          style={{
            font: '400 14px/1 "Inter", sans-serif',
            color: "var(--bp-ink-400)",
          }}
        >
          {breadcrumb}
        </span>
      </div>

      {/* Hero body */}
      <div
        style={{
          position: "relative",
          height: 720,
          padding: "96px 80px 0",
          background: `linear-gradient(white 0%, rgba(241,241,241,0.5) 45%, #e5e5e5 100%)`,
        }}
      >
        {/* Background photograph */}
        <div
          style={{
            position: "absolute",
            inset: "0 0 0 267px",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        {/* Soft elliptical light-gray cloud behind headline */}
        <div
          style={{
            position: "absolute",
            left: -108, top: -49,
            width: 920, height: 866,
            zIndex: 1,
          }}
        >
          <svg width="920" height="866" viewBox="0 0 920 866">
            <path d="M 710 2.7 C 559 -5.3 188 6.1 22 12.8 L 0 334.8 C 2 428 8 617 14 629 C 21 642 22 681 22 700 L 22 775 L 72 864 C 83 871 194 855 547 737 C 899 619 938 348 914 227 C 908 155 860 10 710 2.7 Z" fill="#f8f9fa" />
            <path d="M 615 2.6 C 484 -5 163 5.8 19 12.2 L 0 319 C 1 408 7 589 12 600 C 18 612 19 650 19 668 L 19 739 L 62 824 C 72 831 168 815 473 703 C 779 590 813 332 791 216 C 787 148 745 10 615 2.6 Z" fill="#f1f3f4" />
          </svg>
        </div>
        {/* Top white→transparent gradient overlay (header protection) */}
        <div
          style={{
            position: "absolute",
            inset: "0 0 auto 0",
            height: 340,
            background: "linear-gradient(white 0%, rgba(255,255,255,0) 100%)",
            zIndex: 2,
          }}
        />

        {/* Signature squares — left of headline, mirrored from figma right-side placement */}
        <div
          style={{
            position: "absolute", right: 0, bottom: 0,
            width: 439, height: 176,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            zIndex: 1,
          }}
        >
          <div style={{ background: "transparent" }} />
          <div style={{ background: "var(--bp-ink-700)" }} />
          <div style={{ background: "var(--bp-green-500)" }} />
          <div style={{ background: "transparent" }} />
          <div style={{ background: "var(--bp-green-200)" }} />
          <div style={{ background: "white", boxShadow: "inset 0 0 0 1px var(--bp-ink-100)" }} />
          <div style={{ background: "var(--bp-ink-700)" }} />
          <div style={{ background: "white", boxShadow: "inset 0 0 0 1px var(--bp-ink-100)" }} />
        </div>

        {/* Headline stack */}
        <div style={{ position: "relative", zIndex: 3, maxWidth: 720 }}>
          <span
            style={{
              font: '700 12px/1 "Inter", sans-serif',
              letterSpacing: "0.1em",
              color: "var(--bp-green-500)",
              display: "inline-block",
              marginBottom: 32, marginTop: 130,
            }}
          >
            {eyebrow}
          </span>
          <h1
            style={{
              font: '700 68px/77px "Manrope", sans-serif',
              letterSpacing: "-0.02em",
              color: "var(--bp-ink-700)",
              margin: "0 0 32px",
              maxWidth: 700,
              textWrap: "pretty",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              font: '400 18px/28px "Manrope", sans-serif',
              letterSpacing: "-0.01em",
              color: "var(--bp-ink-700)",
              margin: 0,
              maxWidth: 540,
            }}
          >
            {lede}
          </p>
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
