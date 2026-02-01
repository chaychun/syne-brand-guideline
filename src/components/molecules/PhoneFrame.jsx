import { FONTS } from "../../theme";

export function PhoneFrame({ children, bg, t }) {
  return (
    <div
      style={{
        width: 280,
        minHeight: 560,
        borderRadius: 40,
        background: bg || t.bg,
        overflow: "hidden",
        border: `3px solid ${t.fg}`,
        boxShadow: "0 24px 80px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.1)",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Dynamic Island */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          width: 100,
          height: 28,
          borderRadius: 20,
          background: "#000",
          zIndex: 10,
        }}
      />
      {/* Status bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 24px 0",
          position: "relative",
          zIndex: 5,
        }}
      >
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: 13,
            fontWeight: 600,
            color: t.fg,
          }}
        >
          9:41
        </span>
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: 11,
            color: t.fg,
            opacity: 0.6,
          }}
        >
          ● ●● ▮
        </span>
      </div>
      {/* Content */}
      <div style={{ padding: "20px 0 0", position: "relative" }}>{children}</div>
      {/* Home indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 120,
          height: 4,
          borderRadius: 2,
          background: t.fg,
          opacity: 0.2,
        }}
      />
    </div>
  );
}
