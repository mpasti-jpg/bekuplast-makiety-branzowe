/* global React */
// AskAIPanel — overlay invoked from the header "Zapytaj AI" button.
// Floating right-side drawer with a green sparkle header. Mock-only.

const AskAIPanel = ({ open, onClose, askedQuery = null }) => {
  const [q, setQ] = React.useState(askedQuery || "");
  const [history, setHistory] = React.useState([]);

  if (!open) return null;

  const ask = (text) => {
    if (!text) return;
    const reply = {
      q: text,
      a: "Dla branży motoryzacyjnej polecamy serię EURO-NORM KLT/VDA z wzmocnieniami ukośnymi — dostępne w rozmiarach 400×300×147 oraz 600×400×220. W magazynie centralnym mamy obecnie 3 240 sztuk. Chcesz, żebym przygotował wycenę dla 500 sztuk?",
    };
    setHistory(h => [...h, reply]);
    setQ("");
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(29,29,29,0.5)",
        display: "flex", justifyContent: "flex-end",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: 480, height: "100%",
          background: "white",
          display: "flex", flexDirection: "column",
          boxShadow: "var(--shadow-xl)",
          animation: "slideIn .25s var(--ease-out)",
        }}
      >
        <div style={{
          padding: "24px 28px",
          borderBottom: "1px solid var(--bp-ink-100)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              width: 36, height: 36, borderRadius: 4,
              background: "var(--bp-green-500)",
              display: "grid", placeItems: "center",
              color: "white",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 14.39 8.25 20 9.27l-4 3.9.94 5.49L12 16.27l-4.95 2.39L8 13.17l-4-3.9 5.61-1.02z"/></svg>
            </span>
            <div>
              <div style={{ font: '700 18px/1 "Manrope", sans-serif', color: "var(--bp-ink-700)", letterSpacing: "-0.01em" }}>Zapytaj AI</div>
              <div style={{ font: '400 13px/1.4 "Manrope", sans-serif', color: "var(--bp-ink-500)", marginTop: 4 }}>Asystent doboru pojemników</div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--bp-ink-500)", padding: 6 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: 28, display: "flex", flexDirection: "column", gap: 20 }}>
          {history.length === 0 ? (
            <>
              <p style={{ font: '400 15px/24px "Manrope", sans-serif', color: "var(--bp-ink-500)", margin: 0 }}>
                Opisz, czego potrzebujesz — wymiary, branża, ilość — a polecę najlepszy model i sprawdzę dostępność w magazynie.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ font: '600 11px/1 "Inter", sans-serif', letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--bp-ink-500)" }}>Sugerowane pytania</span>
                {[
                  "Jakie pojemniki KLT polecasz dla części silnika?",
                  "Potrzebuję 500 pojemników EURO do magazynu — co masz w cenniku?",
                  "Który model jest najlżejszy dla ergonomii ręcznego załadunku?",
                ].map(s => (
                  <button
                    key={s}
                    onClick={() => ask(s)}
                    style={{
                      textAlign: "left",
                      padding: "12px 14px",
                      border: "1px solid var(--bp-ink-200)",
                      background: "white",
                      borderRadius: 4,
                      cursor: "pointer",
                      font: '400 14px/20px "Manrope", sans-serif',
                      color: "var(--bp-ink-700)",
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "var(--bp-green-500)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "var(--bp-ink-200)"}
                  >{s}</button>
                ))}
              </div>
            </>
          ) : (
            history.map((h, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{
                  alignSelf: "flex-end",
                  background: "var(--bp-ink-25)",
                  padding: "10px 14px",
                  borderRadius: 8,
                  maxWidth: "85%",
                  font: '400 14px/20px "Manrope", sans-serif',
                  color: "var(--bp-ink-700)",
                }}>{h.q}</div>
                <div style={{
                  background: "var(--bp-green-50)",
                  padding: "12px 14px",
                  borderRadius: 8,
                  font: '400 14px/22px "Manrope", sans-serif',
                  color: "var(--bp-ink-700)",
                }}>{h.a}</div>
              </div>
            ))
          )}
        </div>

        <form
          onSubmit={e => { e.preventDefault(); ask(q); }}
          style={{
            padding: 20,
            borderTop: "1px solid var(--bp-ink-100)",
            display: "flex", gap: 8,
          }}
        >
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Napisz, czego potrzebujesz..."
            style={{
              flex: 1,
              height: 44,
              padding: "0 14px",
              border: "1px solid var(--bp-ink-200)",
              borderRadius: 4,
              font: '400 14px/1 "Manrope", sans-serif',
              color: "var(--bp-ink-700)",
              outline: "none",
            }}
          />
          <button
            type="submit"
            className="bp-btn bp-btn-primary bp-btn-md"
            style={{ height: 44, padding: "0 18px" }}
          >Zapytaj</button>
        </form>
      </div>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

window.AskAIPanel = AskAIPanel;
