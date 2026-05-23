/* global React, BekuplastLogo */
// Header — top utility row + primary nav, recreated from Figma node 0:108
// Sticky white bar, 1px bottom border. ~158px tall total.

const Icon = {
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  clipboard: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>,
  compare: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  sparkle: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 14.39 8.25 20 9.27l-4 3.9.94 5.49L12 16.27l-4.95 2.39L8 13.17l-4-3.9 5.61-1.02z"/></svg>,
  chev: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>,
};

const utilityStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  font: '500 14px/1 "Manrope", sans-serif',
  letterSpacing: "-0.01em",
  color: "#434343",
  cursor: "pointer",
};
const utilityIconStyle = { width: 16, height: 16, color: "#a8a8a8" };

const Header = ({ activeNav = "Branże", onNav, onLanguage, onAskAI }) => {
  const nav = ["Produkty", "Branże", "Serwis", "Aktualności", "Firma", "Kontakt z nami"];
  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "var(--bp-white)",
        borderBottom: "1px solid var(--bp-ink-100)",
        padding: "24px 80px 20px",
        display: "flex", flexDirection: "column", gap: 24,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" onClick={e => { e.preventDefault(); onNav?.("home"); }}>
          <BekuplastLogo size={40} />
        </a>
        <div style={{ display: "flex", gap: 48, alignItems: "center" }}>
          <span style={utilityStyle}><span style={utilityIconStyle}>{Icon.search}</span>Wyszukiwarka</span>
          <span style={utilityStyle}><span style={utilityIconStyle}>{Icon.clipboard}</span>Lista ofert</span>
          <span style={utilityStyle}><span style={utilityIconStyle}>{Icon.compare}</span>Porównanie</span>
          <button className="bp-btn-ai" onClick={() => onAskAI?.()}>
            {Icon.sparkle}
            Zapytaj AI
          </button>
          <button
            onClick={() => onLanguage?.()}
            style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "white", border: "1px solid var(--bp-ink-100)",
              cursor: "pointer", display: "grid", placeItems: "center",
              font: '700 13px/1 "Inter", sans-serif',
              letterSpacing: "-0.01em", color: "#717171",
            }}
          >
            PL
          </button>
        </div>
      </div>
      <nav style={{ display: "flex", gap: 24 }}>
        {nav.map(item => {
          const isActive = item === activeNav;
          return (
            <a
              key={item}
              href="#"
              onClick={e => { e.preventDefault(); onNav?.(item); }}
              style={{
                font: '600 15px/1 "Manrope", sans-serif',
                letterSpacing: "-0.01em",
                padding: "12px 0",
                color: isActive ? "var(--bp-green-600)" : "var(--bp-ink-700)",
                borderBottom: isActive ? "2px solid var(--bp-green-500)" : "2px solid transparent",
                transition: "color .15s, border-color .15s",
              }}
            >
              {item}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

window.Header = Header;
