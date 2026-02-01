import { COLORS, FONTS } from "../../theme";

export function GradientCard({ gradient, name, height = 120 }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "100%",
          height,
          borderRadius: 16,
          background: gradient,
          border: "1px solid rgba(0,0,0,0.04)",
        }}
      />
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          color: COLORS.neutral[500],
          marginTop: 8,
        }}
      >
        {name}
      </div>
    </div>
  );
}
