import { FONTS } from "../../theme";

export function Section({ title, subtitle, children, t }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <div style={{ marginBottom: 28 }}>
        <h2
          style={{
            fontFamily: FONTS.heading,
            fontWeight: 600,
            fontSize: 22,
            color: t.fg,
            margin: 0,
            marginBottom: 4,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: 14,
              color: t.fgSecondary,
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
