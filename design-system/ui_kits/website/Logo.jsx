/* global React */
// Logo — recreated from Figma node 0:108 wordmark + globe with checkmark
// The Figma logo ships as empty geometry; this is rebuilt from spec.

const BekuplastLogo = ({ size = 48, variant = "light" }) => {
  // variant: "light" (default — gray globe + green check on white)
  //          "dark"  (light-gray globe + light-green check on dark bg)
  //          "mono"  (all white on green / dark bg)
  const wordmarkColor =
    variant === "mono" || variant === "dark" ? "#ffffff" : "#434343";
  const globeStroke =
    variant === "mono" ? "#ffffff" :
    variant === "dark" ? "#dedede" :
    "#9a9a9a";
  const checkColor =
    variant === "mono" ? "#ffffff" :
    variant === "dark" ? "#b0d583" :
    "#65b32e";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: size * 0.18,
        font: `700 ${size}px/1 "Manrope", system-ui, sans-serif`,
        letterSpacing: "-0.025em",
        color: wordmarkColor,
        userSelect: "none",
      }}
    >
      bekuplast
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        style={{ alignSelf: "center" }}
      >
        <circle cx="32" cy="32" r="28" stroke={globeStroke} strokeWidth="2.2" />
        <ellipse cx="32" cy="32" rx="12" ry="28" stroke={globeStroke} strokeWidth="2.2" />
        <line x1="4" y1="32" x2="60" y2="32" stroke={globeStroke} strokeWidth="2.2" />
        <line x1="8" y1="20" x2="56" y2="20" stroke={globeStroke} strokeWidth="2.2" />
        <line x1="8" y1="44" x2="56" y2="44" stroke={globeStroke} strokeWidth="2.2" />
        <path
          d="M20 32 L28 40 L46 22"
          stroke={checkColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
};

window.BekuplastLogo = BekuplastLogo;
