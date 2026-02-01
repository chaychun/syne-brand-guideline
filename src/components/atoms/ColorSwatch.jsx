import { useState } from "react";
import { COLORS, FONTS } from "../../theme";

export function ColorSwatch({ color, name, hex }) {
  const [copied, setCopied] = useState(false);

  return (
    <div
      onClick={() => {
        navigator.clipboard?.writeText(hex || color);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      style={{ cursor: "pointer", textAlign: "center" }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 12,
          backgroundColor: color,
          border: "1px solid rgba(0,0,0,0.06)",
          transition: "transform 0.15s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.06)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      />
      {name && (
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 9,
            color: COLORS.neutral[500],
            marginTop: 4,
          }}
        >
          {name}
        </div>
      )}
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 9,
          color: copied ? COLORS.primary[500] : COLORS.neutral[400],
        }}
      >
        {copied ? "copied!" : hex || color}
      </div>
    </div>
  );
}
