import { FONTS } from "../theme";
import { Section } from "../components";
import type { SectionProps } from "./types";

export function TypographySection({ t }: SectionProps) {
  return (
    <>
      {/* Typography */}
      <Section
        title="Typography"
        subtitle="Syne for display. Satoshi for headings. DM Sans for body. JetBrains Mono for code."
        t={t}
      >
        <div
          className="rounded-xl p-10"
          style={{ background: t.surface, border: `1px solid ${t.border}` }}
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
              w: 500,
              s: 28,
              label: "H1 / Satoshi 500",
              text: "Cards, spaces, and the library",
            },
            {
              f: FONTS.heading,
              w: 500,
              s: 22,
              label: "H2 / Satoshi 500",
              text: "Pinned connections surface prominently",
            },
            {
              f: FONTS.heading,
              w: 500,
              s: 17,
              label: "H3 / Satoshi 500",
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
              w: 400,
              s: 14,
              label: "Body Small / DM Sans 400",
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
            <div key={i} className="mb-6">
              <div
                className="mb-1 font-mono text-[10px] uppercase tracking-wide"
                style={{ color: t.fgTertiary }}
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
          className="rounded-xl p-8"
          style={{ background: t.surface, border: `1px solid ${t.border}` }}
        >
          {[
            { s: 48, label: "Display", use: "Hero, splash", font: "Syne", w: 600 },
            { s: 36, label: "Display Alt", use: "Large titles", font: "Syne", w: 500 },
            { s: 28, label: "H1", use: "Page titles", font: "Satoshi", w: 500 },
            { s: 22, label: "H2", use: "Section headers", font: "Satoshi", w: 500 },
            { s: 17, label: "H3", use: "Card titles", font: "Satoshi", w: 500 },
            { s: 16, label: "Body", use: "Note content", font: "DM Sans", w: 400 },
            { s: 14, label: "Body Sm", use: "Metadata", font: "DM Sans", w: 400 },
            { s: 12, label: "Caption", use: "Labels", font: "DM Sans", w: 500 },
            { s: 11, label: "Overline", use: "Tags", font: "JetBrains Mono", w: 400 },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-baseline gap-4 py-3"
              style={{ borderBottom: `1px solid ${t.borderSubtle}` }}
            >
              <div className="w-9 font-mono text-[10px]" style={{ color: t.fgTertiary }}>
                {item.s}px
              </div>
              <div
                className="flex-1 leading-tight"
                style={{
                  fontFamily:
                    item.font === "Syne"
                      ? FONTS.display
                      : item.font === "Satoshi"
                        ? FONTS.heading
                        : item.font === "JetBrains Mono"
                          ? FONTS.mono
                          : FONTS.body,
                  fontWeight: item.w,
                  fontSize: item.s,
                  color: t.fg,
                  letterSpacing: item.s > 24 ? "-0.02em" : "0",
                }}
              >
                {item.label}
              </div>
              <div className="text-right font-mono text-[10px]" style={{ color: t.fgTertiary }}>
                {item.font} {item.w}
                <br />
                {item.use}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
