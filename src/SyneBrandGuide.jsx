import { useState } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────
const COLORS = {
  primary: {
    50: "#FFF7F0",
    100: "#FFEDD9",
    200: "#FFD8B0",
    300: "#FFC087",
    400: "#FFA55E",
    500: "#F28C3E",
    600: "#E07020",
    700: "#B85A18",
    800: "#8F4513",
    900: "#6B3410",
  },
  secondary: {
    50: "#F5F3F7",
    100: "#EBE7F0",
    200: "#D5CFE1",
    300: "#BAB0CE",
    400: "#9E91BA",
    500: "#8273A6",
    600: "#6B5C8E",
    700: "#554972",
    800: "#403757",
    900: "#2D263D",
  },
  neutral: {
    0: "#FFFFFF",
    50: "#FAF9F7",
    100: "#F3F1EE",
    200: "#E8E5E0",
    300: "#D4D0C9",
    400: "#B5B0A7",
    500: "#918B80",
    600: "#6E695F",
    700: "#4D4940",
    800: "#33302A",
    900: "#1C1A17",
    950: "#0F0E0C",
  },
  accent: {
    peach: "#F5C4A1",
    coral: "#E8836B",
    lavender: "#C4B8D9",
    sage: "#A8B8A0",
    cream: "#F5EFDA",
  },
};

const GRADIENTS = {
  warmGlow:
    "radial-gradient(ellipse at 50% 50%, #FFA55E 0%, #F5C4A1 35%, #D5CFE1 70%, #EBE7F0 100%)",
  sunrise: "linear-gradient(135deg, #F5C4A1 0%, #FFA55E 30%, #E8836B 60%, #C4B8D9 100%)",
  mist: "linear-gradient(180deg, #FAF9F7 0%, #F3F1EE 30%, #FFEDD9 60%, #EBE7F0 100%)",
  ember: "radial-gradient(circle at 30% 70%, #F28C3E 0%, #E8836B 40%, #C4B8D9 80%, #F5F3F7 100%)",
  dusk: "linear-gradient(135deg, #EBE7F0 0%, #F5C4A1 40%, #FFA55E 70%, #BAB0CE 100%)",
  subtle: "linear-gradient(180deg, #FAF9F7 0%, #FFF7F0 50%, #F5F3F7 100%)",
  sunset:
    "linear-gradient(180deg, #0F0E0C 0%, #1C1A17 8%, #33302A 16%, #4D4940 24%, #6B3410 32%, #8F4513 40%, #B85A18 48%, #E07020 54%, #F28C3E 60%, #FFA55E 66%, #FFC087 72%, #FFD8B0 78%, #FFEDD9 84%, #F3F1EE 92%, #FFFFFF 100%)",
  sunsetH:
    "linear-gradient(90deg, #0F0E0C 0%, #1C1A17 8%, #4D4940 18%, #8F4513 30%, #E07020 42%, #F28C3E 52%, #FFC087 64%, #FFD8B0 76%, #F3F1EE 88%, #FFFFFF 100%)",
};

const FONTS = {
  display: "'Syne', sans-serif",
  heading: "'General Sans', sans-serif",
  body: "'DM Sans', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

function useTheme(isDark) {
  return {
    bg: isDark ? COLORS.neutral[950] : COLORS.neutral[50],
    surface: isDark ? COLORS.neutral[900] : COLORS.neutral[0],
    surfaceRaised: isDark ? COLORS.neutral[800] : COLORS.neutral[0],
    fg: isDark ? COLORS.neutral[100] : COLORS.neutral[900],
    fgSecondary: isDark ? COLORS.neutral[400] : COLORS.neutral[500],
    fgTertiary: isDark ? COLORS.neutral[500] : COLORS.neutral[400],
    border: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
    borderSubtle: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
    accent: isDark ? COLORS.primary[400] : COLORS.primary[500],
    accentSubtle: isDark ? "rgba(242,140,62,0.12)" : COLORS.primary[50],
    accentText: isDark ? COLORS.primary[300] : COLORS.primary[600],
    glassBg: isDark ? "rgba(15,14,12,0.85)" : "rgba(255,255,255,0.88)",
    glassEdge: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.5)",
    glassBorder: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
    inputBg: isDark ? COLORS.neutral[800] : COLORS.neutral[100],
    tagBg: isDark ? "rgba(255,255,255,0.06)" : COLORS.neutral[100],
  };
}

function ColorSwatch({ color, name, hex }) {
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
          style={{ fontFamily: FONTS.mono, fontSize: 9, color: COLORS.neutral[500], marginTop: 4 }}
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

function GradientCard({ gradient, name, height = 120 }) {
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
        style={{ fontFamily: FONTS.mono, fontSize: 10, color: COLORS.neutral[500], marginTop: 8 }}
      >
        {name}
      </div>
    </div>
  );
}

function Section({ title, subtitle, children, t }) {
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
          <p style={{ fontFamily: FONTS.body, fontSize: 14, color: t.fgSecondary, margin: 0 }}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

function GlassCard({ t, children, style: extraStyle }) {
  return (
    <div
      style={{
        borderRadius: 20,
        overflow: "hidden",
        border: `1px solid ${t.glassBorder}`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        ...extraStyle,
      }}
    >
      <div
        style={{
          height: 6,
          background: t.glassEdge,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />
      <div
        style={{
          background: t.glassBg,
          backdropFilter: "blur(40px) saturate(1.5)",
          WebkitBackdropFilter: "blur(40px) saturate(1.5)",
          padding: 20,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function PhoneFrame({ children, bg, t }) {
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
        <span style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 600, color: t.fg }}>
          9:41
        </span>
        <span style={{ fontFamily: FONTS.body, fontSize: 11, color: t.fg, opacity: 0.6 }}>
          ● ●● ▮
        </span>
      </div>
      <div style={{ padding: "20px 0 0", position: "relative" }}>{children}</div>
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

export default function SyneBrandGuide() {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";
  const t = useTheme(isDark);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: t.bg,
        color: t.fg,
        fontFamily: FONTS.body,
        transition: "background 0.4s, color 0.4s",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        rel="stylesheet"
      />

      {/* HERO */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "80px 48px 64px",
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: GRADIENTS.warmGlow,
            opacity: isDark ? 0.12 : 0.35,
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 48,
            }}
          >
            <div
              style={{
                fontFamily: FONTS.display,
                fontWeight: 600,
                fontSize: 18,
                letterSpacing: "-0.01em",
              }}
            >
              Syne
            </div>
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              style={{
                fontFamily: FONTS.mono,
                fontSize: 11,
                color: t.fgSecondary,
                background: "none",
                border: `1px solid ${t.border}`,
                padding: "6px 14px",
                borderRadius: 99,
                cursor: "pointer",
              }}
            >
              {isDark ? "☀ Light" : "● Dark"}
            </button>
          </div>
          <h1
            style={{
              fontFamily: FONTS.display,
              fontWeight: 600,
              fontSize: 56,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
              marginBottom: 16,
            }}
          >
            Brand
            <br />
            Identity
          </h1>
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: 16,
              color: t.fgSecondary,
              maxWidth: 400,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Visual system for Syne — a spatial knowledge tool where connections are primary, content
            is secondary.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 48px 120px" }}>
        {/* Typography */}
        <Section
          title="Typography"
          subtitle="Syne for display. General Sans for headings. DM Sans for body. JetBrains Mono for code."
          t={t}
        >
          <div
            style={{
              background: t.surface,
              borderRadius: 20,
              padding: 40,
              border: `1px solid ${t.border}`,
            }}
          >
            {[
              {
                f: FONTS.display,
                w: 600,
                s: 48,
                label: "Display / Syne 600",
                text: "Connections are primary",
              },
              {
                f: FONTS.display,
                w: 500,
                s: 36,
                label: "Display Alt / Syne 500",
                text: "Everything is a view",
              },
              {
                f: FONTS.heading,
                w: 600,
                s: 28,
                label: "H1 / General Sans 600",
                text: "Cards, spaces, and the library",
              },
              {
                f: FONTS.heading,
                w: 500,
                s: 22,
                label: "H2 / General Sans 500",
                text: "Pinned connections surface prominently",
              },
              {
                f: FONTS.heading,
                w: 500,
                s: 17,
                label: "H3 / General Sans 500",
                text: "Every card shows its relationships",
              },
              {
                f: FONTS.body,
                w: 400,
                s: 16,
                label: "Body / DM Sans 400",
                text: "A card is an anchor point in a network of relationships. When you open any card, you're not viewing the card itself — you're viewing everything connected to it.",
              },
              {
                f: FONTS.body,
                w: 500,
                s: 14,
                label: "Body Small / DM Sans 500",
                text: "Created 3 days ago · 12 connections · Design space",
              },
              {
                f: FONTS.mono,
                w: 400,
                s: 13,
                label: "Mono / JetBrains Mono 400",
                text: "card.connections.filter(.explicit)",
              },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: 24 }}>
                <div
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 10,
                    color: t.fgTertiary,
                    marginBottom: 4,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: item.f,
                    fontWeight: item.w,
                    fontSize: item.s,
                    color: i < 5 ? t.fg : t.fgSecondary,
                    lineHeight: item.s > 30 ? 1.15 : 1.5,
                    letterSpacing: item.s > 30 ? "-0.02em" : item.s > 20 ? "-0.01em" : "0",
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Type Scale */}
        <Section title="Type Scale" t={t}>
          <div
            style={{
              background: t.surface,
              borderRadius: 20,
              padding: 32,
              border: `1px solid ${t.border}`,
            }}
          >
            {[
              { s: 48, label: "Display", use: "Hero, splash", font: "Syne", w: 600 },
              { s: 36, label: "Display Alt", use: "Large titles", font: "Syne", w: 500 },
              { s: 28, label: "H1", use: "Page titles", font: "General Sans", w: 600 },
              { s: 22, label: "H2", use: "Section headers", font: "General Sans", w: 500 },
              { s: 17, label: "H3", use: "Card titles", font: "General Sans", w: 500 },
              { s: 16, label: "Body", use: "Note content", font: "DM Sans", w: 400 },
              { s: 14, label: "Body Sm", use: "Metadata", font: "DM Sans", w: 500 },
              { s: 12, label: "Caption", use: "Labels", font: "DM Sans", w: 500 },
              { s: 11, label: "Overline", use: "Tags", font: "JetBrains Mono", w: 400 },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  padding: "12px 0",
                  borderBottom: `1px solid ${t.borderSubtle}`,
                }}
              >
                <div
                  style={{ fontFamily: FONTS.mono, fontSize: 10, color: t.fgTertiary, width: 36 }}
                >
                  {item.s}px
                </div>
                <div
                  style={{
                    fontFamily:
                      item.font === "Syne"
                        ? FONTS.display
                        : item.font === "General Sans"
                          ? FONTS.heading
                          : item.font === "JetBrains Mono"
                            ? FONTS.mono
                            : FONTS.body,
                    fontWeight: item.w,
                    fontSize: item.s,
                    color: t.fg,
                    lineHeight: 1.2,
                    flex: 1,
                    letterSpacing: item.s > 24 ? "-0.02em" : "0",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 10,
                    color: t.fgTertiary,
                    textAlign: "right",
                  }}
                >
                  {item.font} {item.w}
                  <br />
                  {item.use}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Colors */}
        <Section title="Color — Primary" subtitle="Warm orange. The signature." t={t}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {Object.entries(COLORS.primary).map(([k, v]) => (
              <ColorSwatch key={k} color={v} name={k} hex={v} />
            ))}
          </div>
        </Section>

        <Section title="Color — Secondary" subtitle="Cool lavender. The counterbalance." t={t}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {Object.entries(COLORS.secondary).map(([k, v]) => (
              <ColorSwatch key={k} color={v} name={k} hex={v} />
            ))}
          </div>
        </Section>

        <Section title="Color — Neutral" subtitle="Warm grays. Never blue-tinted." t={t}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {Object.entries(COLORS.neutral).map(([k, v]) => (
              <ColorSwatch key={k} color={v} name={k} hex={v} />
            ))}
          </div>
        </Section>

        <Section title="Color — Accents" t={t}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {Object.entries(COLORS.accent).map(([k, v]) => (
              <ColorSwatch key={k} color={v} name={k} hex={v} />
            ))}
          </div>
        </Section>

        {/* Gradients */}
        <Section title="Gradients" subtitle="Warm center, cool edges." t={t}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {Object.entries(GRADIENTS)
              .filter(([k]) => !k.startsWith("sunset"))
              .map(([k, v]) => (
                <GradientCard key={k} gradient={v} name={k} />
              ))}
          </div>
        </Section>

        {/* Sunset */}
        <Section
          title="Sunset Palette"
          subtitle="Black → Orange → White through our primary. For rich backgrounds."
          t={t}
        >
          <div style={{ borderRadius: 20, overflow: "hidden" }}>
            <div
              style={{ height: 200, background: GRADIENTS.sunset, borderRadius: "20px 20px 0 0" }}
            />
            <div
              style={{ height: 80, background: GRADIENTS.sunsetH, borderRadius: "0 0 20px 20px" }}
            />
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 16, justifyContent: "center" }}>
            {[
              "#0F0E0C",
              "#1C1A17",
              "#33302A",
              "#4D4940",
              "#6B3410",
              "#8F4513",
              "#B85A18",
              "#E07020",
              "#F28C3E",
              "#FFA55E",
              "#FFC087",
              "#FFD8B0",
              "#FFEDD9",
              "#F3F1EE",
              "#FFFFFF",
            ].map((c) => (
              <div
                key={c}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: c,
                  border: "1px solid rgba(128,128,128,0.15)",
                }}
              />
            ))}
          </div>
        </Section>

        {/* Glass Card */}
        <Section
          title="Glass Card"
          subtitle="Glass edge strip with opaque body. Best on gradient backgrounds."
          t={t}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div
              style={{
                background: GRADIENTS.dusk,
                borderRadius: 24,
                padding: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GlassCard t={t} style={{ width: "100%", maxWidth: 260 }}>
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontWeight: 600,
                    fontSize: 15,
                    color: t.fg,
                    marginBottom: 6,
                  }}
                >
                  Design principles
                </div>
                <div
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 13,
                    color: t.fgSecondary,
                    lineHeight: 1.5,
                    marginBottom: 12,
                  }}
                >
                  Notes on spatial thinking and connection-first design.
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  {["Design", "Core"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: FONTS.body,
                        fontSize: 11,
                        fontWeight: 500,
                        color: COLORS.primary[600],
                        background: "rgba(242,140,62,0.1)",
                        padding: "3px 10px",
                        borderRadius: 99,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
            <div
              style={{
                background: GRADIENTS.ember,
                borderRadius: 24,
                padding: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GlassCard t={t} style={{ width: "100%", maxWidth: 260 }}>
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontWeight: 600,
                    fontSize: 15,
                    color: t.fg,
                    marginBottom: 6,
                  }}
                >
                  Meeting with team
                </div>
                <div
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 13,
                    color: t.fgSecondary,
                    lineHeight: 1.5,
                    marginBottom: 12,
                  }}
                >
                  Discuss new card creation flow and capture UX.
                </div>
                <div style={{ fontFamily: FONTS.body, fontSize: 11, color: t.fgTertiary }}>
                  Today · 3:00 PM
                </div>
              </GlassCard>
            </div>
          </div>
        </Section>

        {/* Buttons */}
        <Section title="Buttons" subtitle="Pill-shaped. Three variants." t={t}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <button
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 500,
                fontSize: 14,
                color: "#FFF",
                background: COLORS.primary[500],
                border: "none",
                padding: "12px 28px",
                borderRadius: 99,
                cursor: "pointer",
              }}
            >
              Primary action
            </button>
            <button
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 500,
                fontSize: 14,
                color: t.fg,
                background: t.surface,
                border: `1px solid ${t.border}`,
                padding: "12px 28px",
                borderRadius: 99,
                cursor: "pointer",
              }}
            >
              Secondary
            </button>
            <button
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 500,
                fontSize: 14,
                color: t.accent,
                background: "transparent",
                border: "none",
                padding: "12px 28px",
                borderRadius: 99,
                cursor: "pointer",
              }}
            >
              Tertiary
            </button>
            <button
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 500,
                fontSize: 13,
                color: t.fgSecondary,
                background: t.inputBg,
                border: "none",
                padding: "8px 16px",
                borderRadius: 99,
                cursor: "pointer",
              }}
            >
              Small
            </button>
          </div>
        </Section>

        {/* Tags */}
        <Section title="Tags & Connections" t={t}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { label: "Design", bg: t.accentSubtle, color: t.accentText },
              {
                label: "Research",
                bg: isDark ? "rgba(196,184,217,0.12)" : COLORS.secondary[50],
                color: isDark ? COLORS.secondary[300] : COLORS.secondary[600],
              },
              {
                label: "Personal",
                bg: isDark ? "rgba(168,184,160,0.12)" : "#F0F5EE",
                color: isDark ? "#B5C8AD" : "#6B7D63",
              },
              {
                label: "Meeting",
                bg: isDark ? "rgba(245,239,218,0.08)" : COLORS.accent.cream,
                color: isDark ? COLORS.neutral[300] : COLORS.neutral[700],
              },
              { label: "📎 Attached", bg: t.tagBg, color: t.fgSecondary },
              { label: "@Steve", bg: t.accentSubtle, color: t.accentText, border: true },
            ].map((tag) => (
              <span
                key={tag.label}
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 12,
                  fontWeight: 500,
                  color: tag.color,
                  background: tag.bg,
                  padding: "5px 14px",
                  borderRadius: 99,
                  border: tag.border
                    ? `1px solid ${isDark ? "rgba(242,140,62,0.25)" : COLORS.primary[200]}`
                    : "none",
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </Section>

        {/* Inputs */}
        <Section title="Inputs" t={t}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
            <input
              type="text"
              placeholder="Search cards..."
              readOnly
              style={{
                fontFamily: FONTS.body,
                fontSize: 15,
                color: t.fg,
                background: t.inputBg,
                border: `1px solid ${t.border}`,
                padding: "14px 18px",
                borderRadius: 14,
                outline: "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
            <div
              style={{
                fontFamily: FONTS.body,
                fontSize: 15,
                color: t.fg,
                background: t.inputBg,
                border: `2px solid ${COLORS.primary[300]}`,
                padding: "13px 17px",
                borderRadius: 14,
                boxShadow: `0 0 0 4px ${isDark ? "rgba(242,140,62,0.1)" : COLORS.primary[50]}`,
              }}
            >
              <span style={{ color: t.fgSecondary }}>Focused state</span>
            </div>
          </div>
        </Section>

        {/* Spacing & Radius */}
        <Section title="Spacing & Radius" subtitle="Base 4px. Generous rounding." t={t}>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            <div>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 10,
                  color: t.fgTertiary,
                  marginBottom: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Spacing
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
                {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64].map((s) => (
                  <div key={s} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: 24,
                        height: s,
                        borderRadius: 4,
                        background: COLORS.primary[400],
                        opacity: 0.6,
                      }}
                    />
                    <div
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: 8,
                        color: t.fgTertiary,
                        marginTop: 3,
                      }}
                    >
                      {s}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 10,
                  color: t.fgTertiary,
                  marginBottom: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Radius
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                {[
                  { r: 8, l: "sm" },
                  { r: 12, l: "md" },
                  { r: 16, l: "lg" },
                  { r: 20, l: "xl" },
                  { r: 99, l: "full" },
                ].map((item) => (
                  <div key={item.l} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: item.r,
                        border: `2px solid ${COLORS.primary[300]}`,
                        background: isDark ? "rgba(242,140,62,0.05)" : "rgba(242,140,62,0.03)",
                      }}
                    />
                    <div
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: 9,
                        color: t.fgTertiary,
                        marginTop: 4,
                      }}
                    >
                      {item.r}px
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Theme Tokens */}
        <Section title="Theme Tokens" t={t}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { token: "background", l: COLORS.neutral[50], d: COLORS.neutral[950] },
              { token: "surface", l: COLORS.neutral[0], d: COLORS.neutral[900] },
              { token: "surface-raised", l: COLORS.neutral[0], d: COLORS.neutral[800] },
              { token: "text-primary", l: COLORS.neutral[900], d: COLORS.neutral[100] },
              { token: "text-secondary", l: COLORS.neutral[500], d: COLORS.neutral[400] },
              { token: "border", l: "rgba(0,0,0,0.06)", d: "rgba(255,255,255,0.08)" },
              { token: "accent", l: COLORS.primary[500], d: COLORS.primary[400] },
              { token: "accent-subtle", l: COLORS.primary[50], d: "rgba(242,140,62,0.12)" },
            ].map((item) => (
              <div
                key={item.token}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 14px",
                  borderRadius: 12,
                  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    flexShrink: 0,
                    background: isDark ? item.d : item.l,
                    border: `1px solid ${t.border}`,
                  }}
                />
                <div>
                  <div style={{ fontFamily: FONTS.mono, fontSize: 11, color: t.fg }}>
                    {item.token}
                  </div>
                  <div style={{ fontFamily: FONTS.mono, fontSize: 10, color: t.fgTertiary }}>
                    {isDark ? item.d : item.l}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* MOBILE UI */}
        <Section
          title="Mobile UI — Screens"
          subtitle="iPhone mockups showing how the system applies."
          t={t}
        >
          <div style={{ display: "flex", gap: 24, overflowX: "auto", padding: "8px 0 24px" }}>
            {/* Library */}
            <PhoneFrame t={t} bg={t.bg}>
              <div style={{ padding: "32px 20px 20px" }}>
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontWeight: 600,
                    fontSize: 24,
                    color: t.fg,
                    marginBottom: 2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Library
                </div>
                <div
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 13,
                    color: t.fgSecondary,
                    marginBottom: 16,
                  }}
                >
                  47 cards · 3 spaces
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 16px",
                    borderRadius: 14,
                    background: t.inputBg,
                    marginBottom: 20,
                  }}
                >
                  <span style={{ opacity: 0.4, fontSize: 14 }}>🔍</span>
                  <span style={{ fontFamily: FONTS.body, fontSize: 14, color: t.fgTertiary }}>
                    Search cards...
                  </span>
                </div>
                <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                  {["All", "Notes", "Links", "Images"].map((f, i) => (
                    <span
                      key={f}
                      style={{
                        fontFamily: FONTS.body,
                        fontSize: 12,
                        fontWeight: 500,
                        color: i === 0 ? "#FFF" : t.fgSecondary,
                        background: i === 0 ? t.accent : t.tagBg,
                        padding: "6px 14px",
                        borderRadius: 99,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    {
                      title: "Design system",
                      meta: "5 connections",
                      bg: isDark ? "rgba(242,140,62,0.08)" : COLORS.primary[50],
                    },
                    {
                      title: "Brand refs",
                      meta: "Space · 12",
                      bg: isDark ? "rgba(196,184,217,0.08)" : COLORS.secondary[50],
                    },
                    {
                      title: "Meeting notes",
                      meta: "Today",
                      bg: isDark ? "rgba(255,255,255,0.04)" : COLORS.neutral[100],
                    },
                    {
                      title: "Product roadmap",
                      meta: "8 connections",
                      bg: isDark ? "rgba(245,239,218,0.06)" : COLORS.accent.cream,
                    },
                    {
                      title: "Swift patterns",
                      meta: "3 connections",
                      bg: isDark ? "rgba(168,184,160,0.08)" : "#F0F5EE",
                    },
                    {
                      title: "Article: PKM",
                      meta: "Link · 2 conn.",
                      bg: isDark ? "rgba(255,255,255,0.04)" : COLORS.neutral[100],
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      style={{
                        padding: 14,
                        borderRadius: 14,
                        background: card.bg,
                        border: `1px solid ${t.borderSubtle}`,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: FONTS.heading,
                          fontWeight: 500,
                          fontSize: 13,
                          color: t.fg,
                          marginBottom: 3,
                        }}
                      >
                        {card.title}
                      </div>
                      <div style={{ fontFamily: FONTS.body, fontSize: 11, color: t.fgTertiary }}>
                        {card.meta}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "12px 20px 32px",
                  borderTop: `1px solid ${t.borderSubtle}`,
                  marginTop: 16,
                }}
              >
                {["Library", "Search", "Capture"].map((tab, i) => (
                  <div key={tab} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                        background: i === 0 ? t.accent : t.tagBg,
                        margin: "0 auto 4px",
                      }}
                    />
                    <div
                      style={{
                        fontFamily: FONTS.body,
                        fontSize: 10,
                        fontWeight: 500,
                        color: i === 0 ? t.accent : t.fgTertiary,
                      }}
                    >
                      {tab}
                    </div>
                  </div>
                ))}
              </div>
            </PhoneFrame>

            {/* Card Detail */}
            <PhoneFrame t={t} bg={t.bg}>
              <div style={{ padding: "32px 20px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{ fontFamily: FONTS.body, fontSize: 14, color: t.accent }}>
                    ← Back
                  </span>
                  <span style={{ fontFamily: FONTS.body, fontSize: 14, color: t.fgTertiary }}>
                    ···
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontWeight: 600,
                    fontSize: 22,
                    color: t.fg,
                    marginBottom: 4,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Design principles
                </div>
                <div
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 12,
                    color: t.fgTertiary,
                    marginBottom: 16,
                  }}
                >
                  Note · Created Jan 28 · 5 connections
                </div>
                <div
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 15,
                    color: t.fgSecondary,
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  The core insight: connections are primary, content is secondary. A card is an
                  anchor point in a network of relationships.
                </div>
                <div
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 10,
                    color: t.fgTertiary,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 10,
                  }}
                >
                  Pinned
                </div>
                {[
                  { title: "Syne product spec", type: "Document" },
                  { title: "Design space", type: "Space" },
                ].map((conn) => (
                  <div
                    key={conn.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 14px",
                      borderRadius: 12,
                      background: t.inputBg,
                      marginBottom: 8,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: FONTS.heading,
                          fontWeight: 500,
                          fontSize: 14,
                          color: t.fg,
                        }}
                      >
                        {conn.title}
                      </div>
                      <div style={{ fontFamily: FONTS.body, fontSize: 11, color: t.fgTertiary }}>
                        {conn.type}
                      </div>
                    </div>
                    <div style={{ fontSize: 12, color: t.fgTertiary }}>→</div>
                  </div>
                ))}
                <div
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 10,
                    color: t.fgTertiary,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginTop: 20,
                    marginBottom: 10,
                  }}
                >
                  Connections
                </div>
                {["UX research notes", "Card interaction sketch", "Meeting Jan 25"].map((c) => (
                  <div
                    key={c}
                    style={{
                      padding: "10px 0",
                      borderBottom: `1px solid ${t.borderSubtle}`,
                      fontFamily: FONTS.body,
                      fontSize: 14,
                      color: t.fg,
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            </PhoneFrame>

            {/* Quick Capture */}
            <PhoneFrame t={t} bg={GRADIENTS.mist}>
              <div
                style={{
                  padding: "32px 20px 20px",
                  minHeight: 440,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 180,
                      height: 180,
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(242,140,62,0.2) 0%, rgba(196,184,217,0.1) 60%, transparent 100%)",
                      marginBottom: 32,
                      filter: "blur(20px)",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: FONTS.heading,
                      fontWeight: 600,
                      fontSize: 22,
                      color: t.fg,
                      textAlign: "center",
                      marginBottom: 8,
                      marginTop: -80,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    What's on your mind?
                  </div>
                  <div
                    style={{
                      fontFamily: FONTS.body,
                      fontSize: 14,
                      color: t.fgSecondary,
                      textAlign: "center",
                    }}
                  >
                    Capture a note, link, or image
                  </div>
                </div>
                <GlassCard t={t} style={{ marginTop: "auto" }}>
                  <div
                    style={{
                      fontFamily: FONTS.body,
                      fontSize: 15,
                      color: t.fgTertiary,
                      minHeight: 44,
                    }}
                  >
                    Start typing...
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 12,
                    }}
                  >
                    <div style={{ display: "flex", gap: 8 }}>
                      {["📷", "🔗", "#"].map((icon) => (
                        <div
                          key={icon}
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 10,
                            background: t.tagBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                          }}
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: COLORS.primary[500],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFF",
                        fontSize: 16,
                        fontWeight: 700,
                      }}
                    >
                      ↑
                    </div>
                  </div>
                </GlassCard>
              </div>
            </PhoneFrame>

            {/* Space View */}
            <PhoneFrame t={t} bg={t.bg}>
              <div style={{ padding: "32px 20px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{ fontFamily: FONTS.body, fontSize: 14, color: t.accent }}>
                    ← Library
                  </span>
                  <span style={{ fontFamily: FONTS.body, fontSize: 14, color: t.fgTertiary }}>
                    ···
                  </span>
                </div>
                <div
                  style={{
                    padding: 20,
                    borderRadius: 16,
                    marginBottom: 16,
                    background: isDark ? "rgba(242,140,62,0.06)" : COLORS.primary[50],
                    border: `1px solid ${isDark ? "rgba(242,140,62,0.12)" : COLORS.primary[100]}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONTS.heading,
                      fontWeight: 600,
                      fontSize: 20,
                      color: t.fg,
                      marginBottom: 4,
                    }}
                  >
                    Design
                  </div>
                  <div style={{ fontFamily: FONTS.body, fontSize: 13, color: t.fgSecondary }}>
                    Space · 8 cards · Static
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 4,
                    marginBottom: 16,
                    background: t.inputBg,
                    borderRadius: 10,
                    padding: 3,
                    width: "fit-content",
                  }}
                >
                  {["Grid", "List"].map((m, i) => (
                    <span
                      key={m}
                      style={{
                        fontFamily: FONTS.body,
                        fontSize: 12,
                        fontWeight: 500,
                        color: i === 0 ? t.fg : t.fgTertiary,
                        background: i === 0 ? t.surface : "transparent",
                        padding: "5px 14px",
                        borderRadius: 8,
                        boxShadow: i === 0 ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
                {[
                  "Design principles",
                  "UI inspiration board",
                  "Color exploration",
                  "Typography research",
                  "Competitor analysis",
                ].map((c) => (
                  <div
                    key={c}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 0",
                      borderBottom: `1px solid ${t.borderSubtle}`,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: FONTS.heading,
                          fontWeight: 500,
                          fontSize: 14,
                          color: t.fg,
                        }}
                      >
                        {c}
                      </div>
                      <div style={{ fontFamily: FONTS.body, fontSize: 11, color: t.fgTertiary }}>
                        Note · 3 connections
                      </div>
                    </div>
                    <div style={{ fontSize: 12, color: t.fgTertiary }}>→</div>
                  </div>
                ))}
              </div>
            </PhoneFrame>

            {/* Safari Extension */}
            <PhoneFrame t={t} bg="#E8E5E0">
              <div style={{ padding: "32px 20px 20px" }}>
                <div
                  style={{
                    padding: 16,
                    borderRadius: 14,
                    background: t.surface,
                    marginBottom: 8,
                    opacity: 0.5,
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONTS.heading,
                      fontWeight: 600,
                      fontSize: 16,
                      color: t.fg,
                      marginBottom: 4,
                    }}
                  >
                    Best new movies 2025
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        style={{ width: 60, height: 80, borderRadius: 8, background: t.inputBg }}
                      />
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 14px",
                    borderRadius: 12,
                    background: t.surface,
                    border: `1px solid ${t.border}`,
                    marginBottom: 12,
                    opacity: 0.6,
                  }}
                >
                  <span style={{ fontSize: 12 }}>◁ ▷</span>
                  <span
                    style={{
                      fontFamily: FONTS.body,
                      fontSize: 13,
                      color: t.fgSecondary,
                      flex: 1,
                      textAlign: "center",
                    }}
                  >
                    movies.example.com
                  </span>
                </div>
                <GlassCard t={t} style={{ marginTop: 20 }}>
                  <div style={{ textAlign: "center", marginBottom: 16 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        margin: "0 auto 12px",
                        background: GRADIENTS.warmGlow,
                      }}
                    />
                    <div
                      style={{
                        fontFamily: FONTS.heading,
                        fontWeight: 600,
                        fontSize: 16,
                        color: t.fg,
                      }}
                    >
                      Save to Syne
                    </div>
                  </div>
                  <div
                    style={{
                      padding: 14,
                      borderRadius: 12,
                      background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: FONTS.heading,
                        fontWeight: 500,
                        fontSize: 13,
                        color: t.fg,
                        marginBottom: 2,
                      }}
                    >
                      Best New Movies of 2025
                    </div>
                    <div style={{ fontFamily: FONTS.body, fontSize: 11, color: t.fgTertiary }}>
                      movies.example.com
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: FONTS.mono,
                      fontSize: 10,
                      color: t.fgTertiary,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: 8,
                    }}
                  >
                    Add to space
                  </div>
                  <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                    {["Entertainment", "Research"].map((s) => (
                      <span
                        key={s}
                        style={{
                          fontFamily: FONTS.body,
                          fontSize: 11,
                          fontWeight: 500,
                          color: s === "Entertainment" ? "#FFF" : t.fgSecondary,
                          background: s === "Entertainment" ? t.accent : t.tagBg,
                          padding: "5px 12px",
                          borderRadius: 99,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <button
                    style={{
                      width: "100%",
                      fontFamily: FONTS.heading,
                      fontWeight: 500,
                      fontSize: 14,
                      color: "#FFF",
                      background: COLORS.primary[500],
                      border: "none",
                      padding: "14px",
                      borderRadius: 14,
                      cursor: "pointer",
                    }}
                  >
                    Save Card
                  </button>
                </GlassCard>
              </div>
            </PhoneFrame>
          </div>
        </Section>

        {/* Design Principles */}
        <Section title="Design Principles" t={t}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              {
                title: "Warm, not hot",
                desc: "Orange is an accent, not a flood. Warmth comes from the undertone in everything.",
              },
              {
                title: "Soft geometry",
                desc: "Generous radii. No sharp corners user-facing. Everything rounded and approachable.",
              },
              {
                title: "Gradients as atmosphere",
                desc: "Gradients for backgrounds and mood, not buttons or text. Environmental, not decorative.",
              },
              {
                title: "Type hierarchy matters",
                desc: "Syne for display moments. General Sans for clarity. DM Sans for the quiet work of readability.",
              },
              {
                title: "Glass for elevation",
                desc: "Glass-edge cards for overlays and drawers. Opaque body, translucent edge.",
              },
              {
                title: "Connection, visually",
                desc: "The UI always hints at relationships. Tags, mentions, connections make the network visible.",
              },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  padding: 24,
                  borderRadius: 16,
                  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontWeight: 600,
                    fontSize: 15,
                    color: t.fg,
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </div>
                <div
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 13,
                    color: t.fgSecondary,
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <div style={{ textAlign: "center", paddingTop: 40, borderTop: `1px solid ${t.border}` }}>
          <div
            style={{
              fontFamily: FONTS.display,
              fontWeight: 600,
              fontSize: 32,
              letterSpacing: "-0.02em",
            }}
          >
            Syne
          </div>
          <div style={{ fontFamily: FONTS.mono, fontSize: 10, color: t.fgTertiary, marginTop: 8 }}>
            Brand Identity v2.0 · February 2026
          </div>
        </div>
      </div>
    </div>
  );
}
