import { useState } from "react";
import { COLORS, GRADIENTS, SUNSET_COLORS, FONTS, useTheme } from "./theme";
import {
  ColorSwatch,
  GradientCard,
  Section,
  GlassCard,
  GlassContainer,
  GlassSection,
  OpaqueSection,
  PhoneFrame,
} from "./components";

export default function SyneBrandGuide() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isDark = theme === "dark";
  const t = useTheme(isDark);

  return (
    <div
      className="min-h-screen transition-colors duration-400"
      style={{
        background: t.bg,
        color: t.fg,
        fontFamily: FONTS.body,
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
      <div className="relative mx-auto max-w-[960px] overflow-hidden px-12 pb-16 pt-20">
        <div
          className="pointer-events-none absolute -right-[120px] -top-[120px] size-[500px] rounded-full blur-[80px]"
          style={{
            background: GRADIENTS.warmGlow,
            opacity: isDark ? 0.12 : 0.35,
          }}
        />
        <div className="relative">
          <div className="mb-12 flex items-center justify-between">
            <div
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: FONTS.display }}
            >
              Syne
            </div>
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="cursor-pointer rounded-full border bg-transparent px-3.5 py-1.5 font-mono text-[11px]"
              style={{
                color: t.fgSecondary,
                borderColor: t.border,
              }}
            >
              {isDark ? "☀ Light" : "● Dark"}
            </button>
          </div>
          <h1
            className="m-0 mb-4 text-[56px] font-semibold leading-[1.05] tracking-tight"
            style={{ fontFamily: FONTS.display }}
          >
            Brand
            <br />
            Identity
          </h1>
          <p
            className="m-0 max-w-[400px] text-base leading-relaxed"
            style={{ color: t.fgSecondary }}
          >
            Visual system for Syne — a spatial knowledge tool where connections are primary, content
            is secondary.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[960px] px-12 pb-30">
        {/* Typography */}
        <Section
          title="Typography"
          subtitle="Syne for display. General Sans for headings. DM Sans for body. JetBrains Mono for code."
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
                        : item.font === "General Sans"
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

        {/* Colors */}
        <Section title="Color — Primary" subtitle="Warm orange. The signature." t={t}>
          <div className="flex flex-wrap gap-2.5">
            {Object.entries(COLORS.primary).map(([k, v]) => (
              <ColorSwatch key={k} color={v} name={k} hex={v} />
            ))}
          </div>
        </Section>

        <Section title="Color — Secondary" subtitle="Cool lavender. The counterbalance." t={t}>
          <div className="flex flex-wrap gap-2.5">
            {Object.entries(COLORS.secondary).map(([k, v]) => (
              <ColorSwatch key={k} color={v} name={k} hex={v} />
            ))}
          </div>
        </Section>

        <Section title="Color — Neutral" subtitle="Warm grays. Never blue-tinted." t={t}>
          <div className="flex flex-wrap gap-2.5">
            {Object.entries(COLORS.neutral).map(([k, v]) => (
              <ColorSwatch key={k} color={v} name={k} hex={v} />
            ))}
          </div>
        </Section>

        <Section title="Color — Accents" t={t}>
          <div className="flex flex-wrap gap-3">
            {Object.entries(COLORS.accent).map(([k, v]) => (
              <ColorSwatch key={k} color={v} name={k} hex={v} />
            ))}
          </div>
        </Section>

        {/* Gradients */}
        <Section title="Gradients" subtitle="Warm center, cool edges." t={t}>
          <div className="grid grid-cols-3 gap-4">
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
          <div className="overflow-hidden rounded-xl">
            <div className="h-[200px] rounded-t-xl" style={{ background: GRADIENTS.sunset }} />
            <div className="h-20 rounded-b-xl" style={{ background: GRADIENTS.sunsetH }} />
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            {SUNSET_COLORS.map((c) => (
              <div
                key={c}
                className="size-8 rounded-lg border border-gray-500/15"
                style={{ background: c }}
              />
            ))}
          </div>
        </Section>

        {/* Glass Card */}
        <Section
          title="Glass Card"
          subtitle="Glass edge on all sides with opaque body. Best on gradient backgrounds."
          t={t}
        >
          <div className="grid grid-cols-2 gap-6">
            <div
              className="flex items-center justify-center rounded-2xl p-8"
              style={{ background: GRADIENTS.dusk }}
            >
              <GlassCard t={t} style={{ width: "100%", maxWidth: 260 }}>
                <div
                  className="mb-1.5 text-[15px] font-semibold"
                  style={{ fontFamily: FONTS.heading, color: t.fg }}
                >
                  Design principles
                </div>
                <div className="mb-3 text-[13px] leading-relaxed" style={{ color: t.fgSecondary }}>
                  Notes on spatial thinking and connection-first design.
                </div>
                <div className="flex gap-1.5">
                  {["Design", "Core"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                      style={{
                        color: COLORS.primary[600],
                        background: "rgba(242,140,62,0.1)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
            <div
              className="flex items-center justify-center rounded-2xl p-8"
              style={{ background: GRADIENTS.ember }}
            >
              <GlassCard t={t} style={{ width: "100%", maxWidth: 260 }}>
                <div
                  className="mb-1.5 text-[15px] font-semibold"
                  style={{ fontFamily: FONTS.heading, color: t.fg }}
                >
                  Meeting with team
                </div>
                <div className="mb-3 text-[13px] leading-relaxed" style={{ color: t.fgSecondary }}>
                  Discuss new card creation flow and capture UX.
                </div>
                <div className="text-[11px]" style={{ color: t.fgTertiary }}>
                  Today · 3:00 PM
                </div>
              </GlassCard>
            </div>
          </div>
        </Section>

        {/* Glass Card Composable */}
        <Section
          title="Glass Card Composable"
          subtitle="Compose GlassContainer with GlassSection and OpaqueSection in any order."
          t={t}
        >
          <div className="grid grid-cols-2 gap-6">
            <div
              className="flex items-center justify-center rounded-2xl p-8"
              style={{ background: GRADIENTS.mist }}
            >
              <GlassContainer t={t} style={{ width: "100%", maxWidth: 280 }}>
                <GlassSection>
                  <div className="space-y-2">
                    <div
                      className="h-2.5 w-24 rounded-full"
                      style={{ background: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)" }}
                    />
                    <div
                      className="h-2.5 w-40 rounded-full"
                      style={{ background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)" }}
                    />
                  </div>
                </GlassSection>
                <OpaqueSection t={t}>
                  <div
                    className="mb-3 text-[15px] font-semibold"
                    style={{ fontFamily: FONTS.heading, color: t.fg }}
                  >
                    Building your app
                  </div>
                  {["Setting up auth", "Database schema", "Email notifications"].map((step, i) => (
                    <div key={step} className="mb-2 flex items-center gap-2.5">
                      <div
                        className="flex size-5 items-center justify-center rounded-full text-[10px]"
                        style={{
                          background: i < 2 ? "rgba(76,175,80,0.12)" : t.tagBg,
                          color: i < 2 ? "#4CAF50" : t.fgTertiary,
                        }}
                      >
                        {i < 2 ? "✓" : "○"}
                      </div>
                      <span
                        className="text-[13px]"
                        style={{ color: i < 2 ? t.fgSecondary : t.fgTertiary }}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </OpaqueSection>
              </GlassContainer>
            </div>
            <div
              className="flex items-center justify-center rounded-2xl p-8"
              style={{ background: GRADIENTS.dusk }}
            >
              <GlassContainer t={t} style={{ width: "100%", maxWidth: 280 }}>
                <GlassSection>
                  <div className="space-y-2">
                    <div
                      className="h-2.5 w-32 rounded-full"
                      style={{ background: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)" }}
                    />
                    <div
                      className="h-2.5 w-48 rounded-full"
                      style={{ background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)" }}
                    />
                  </div>
                </GlassSection>
                <OpaqueSection t={t}>
                  <div className="text-[15px]" style={{ color: t.fgTertiary }}>
                    What would you change?
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div
                      className="flex size-8 items-center justify-center rounded-lg text-sm"
                      style={{ border: `1px solid ${t.border}`, color: t.fgTertiary }}
                    >
                      +
                    </div>
                    <div
                      className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px]"
                      style={{ border: `1px solid ${t.border}`, color: t.fgSecondary }}
                    >
                      <span style={{ color: COLORS.primary[500] }}>✎</span> Add styling
                    </div>
                    <div
                      className="ml-auto flex size-8 items-center justify-center rounded-lg text-sm text-white"
                      style={{ background: COLORS.primary[500] }}
                    >
                      ↑
                    </div>
                  </div>
                </OpaqueSection>
                <GlassSection className="py-3">
                  <div
                    className="text-center text-[11px]"
                    style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)" }}
                  >
                    Footer on glass
                  </div>
                </GlassSection>
              </GlassContainer>
            </div>
          </div>
        </Section>

        {/* Buttons */}
        <Section title="Buttons" subtitle="Pill-shaped. Three variants." t={t}>
          <div className="flex flex-wrap items-center gap-3">
            <button
              className="cursor-pointer rounded-full border-none px-7 py-3 text-sm font-medium text-white"
              style={{ fontFamily: FONTS.heading, background: COLORS.primary[500] }}
            >
              Primary action
            </button>
            <button
              className="cursor-pointer rounded-full px-7 py-3 text-sm font-medium"
              style={{
                fontFamily: FONTS.heading,
                color: t.fg,
                background: t.surface,
                border: `1px solid ${t.border}`,
              }}
            >
              Secondary
            </button>
            <button
              className="cursor-pointer rounded-full border-none bg-transparent px-7 py-3 text-sm font-medium"
              style={{ fontFamily: FONTS.heading, color: t.accent }}
            >
              Tertiary
            </button>
            <button
              className="cursor-pointer rounded-full border-none px-4 py-2 text-[13px] font-medium"
              style={{ fontFamily: FONTS.heading, color: t.fgSecondary, background: t.inputBg }}
            >
              Small
            </button>
          </div>
        </Section>

        {/* Tags */}
        <Section title="Tags & Connections" t={t}>
          <div className="flex flex-wrap gap-2">
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
                className="rounded-full px-3.5 py-1.5 text-xs font-medium"
                style={{
                  color: tag.color,
                  background: tag.bg,
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
          <div className="flex max-w-[400px] flex-col gap-4">
            <input
              type="text"
              placeholder="Search cards..."
              readOnly
              className="box-border w-full rounded-[14px] px-[18px] py-3.5 text-[15px] outline-none"
              style={{
                fontFamily: FONTS.body,
                color: t.fg,
                background: t.inputBg,
                border: `1px solid ${t.border}`,
              }}
            />
            <div
              className="rounded-[14px] px-[17px] py-[13px] text-[15px]"
              style={{
                fontFamily: FONTS.body,
                color: t.fg,
                background: t.inputBg,
                border: `2px solid ${COLORS.primary[300]}`,
                boxShadow: `0 0 0 4px ${isDark ? "rgba(242,140,62,0.1)" : COLORS.primary[50]}`,
              }}
            >
              <span style={{ color: t.fgSecondary }}>Focused state</span>
            </div>
          </div>
        </Section>

        {/* Spacing & Radius */}
        <Section title="Spacing & Radius" subtitle="Base 4px. Generous rounding." t={t}>
          <div className="flex flex-wrap gap-8">
            <div>
              <div
                className="mb-3 font-mono text-[10px] uppercase tracking-wide"
                style={{ color: t.fgTertiary }}
              >
                Spacing
              </div>
              <div className="flex items-end gap-1.5">
                {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64].map((s) => (
                  <div key={s} className="text-center">
                    <div
                      className="w-6 rounded opacity-60"
                      style={{ height: s, background: COLORS.primary[400] }}
                    />
                    <div className="mt-0.5 font-mono text-[8px]" style={{ color: t.fgTertiary }}>
                      {s}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div
                className="mb-3 font-mono text-[10px] uppercase tracking-wide"
                style={{ color: t.fgTertiary }}
              >
                Radius
              </div>
              <div className="flex items-center gap-3">
                {[
                  { r: 8, l: "sm" },
                  { r: 12, l: "md" },
                  { r: 16, l: "lg" },
                  { r: 20, l: "xl" },
                  { r: 99, l: "full" },
                ].map((item) => (
                  <div key={item.l} className="text-center">
                    <div
                      className="size-12"
                      style={{
                        borderRadius: item.r,
                        border: `2px solid ${COLORS.primary[300]}`,
                        background: isDark ? "rgba(242,140,62,0.05)" : "rgba(242,140,62,0.03)",
                      }}
                    />
                    <div className="mt-1 font-mono text-[9px]" style={{ color: t.fgTertiary }}>
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
          <div className="grid grid-cols-2 gap-3">
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
                className="flex items-center gap-3 rounded-md px-3.5 py-2.5"
                style={{ background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)" }}
              >
                <div
                  className="size-8 shrink-0 rounded-lg"
                  style={{
                    background: isDark ? item.d : item.l,
                    border: `1px solid ${t.border}`,
                  }}
                />
                <div>
                  <div className="font-mono text-[11px]" style={{ color: t.fg }}>
                    {item.token}
                  </div>
                  <div className="font-mono text-[10px]" style={{ color: t.fgTertiary }}>
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
          <div className="flex gap-6 overflow-x-auto py-2 pb-6">
            {/* Library */}
            <PhoneFrame t={t} bg={t.bg}>
              <div className="px-5 pb-5 pt-8">
                <div
                  className="mb-0.5 text-2xl font-semibold tracking-tight"
                  style={{ fontFamily: FONTS.heading, color: t.fg }}
                >
                  Library
                </div>
                <div className="mb-4 text-[13px]" style={{ color: t.fgSecondary }}>
                  47 cards · 3 spaces
                </div>
                <div
                  className="mb-5 flex items-center gap-2 rounded-[14px] px-4 py-3"
                  style={{ background: t.inputBg }}
                >
                  <span className="text-sm opacity-40">🔍</span>
                  <span className="text-sm" style={{ color: t.fgTertiary }}>
                    Search cards...
                  </span>
                </div>
                <div className="mb-4 flex gap-1.5">
                  {["All", "Notes", "Links", "Images"].map((f, i) => (
                    <span
                      key={f}
                      className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium"
                      style={{
                        color: i === 0 ? "#FFF" : t.fgSecondary,
                        background: i === 0 ? t.accent : t.tagBg,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2.5">
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
                      className="rounded-[14px] p-3.5"
                      style={{ background: card.bg, border: `1px solid ${t.borderSubtle}` }}
                    >
                      <div
                        className="mb-0.5 text-[13px] font-medium"
                        style={{ fontFamily: FONTS.heading, color: t.fg }}
                      >
                        {card.title}
                      </div>
                      <div className="text-[11px]" style={{ color: t.fgTertiary }}>
                        {card.meta}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="mt-4 flex justify-around px-5 pb-8 pt-3"
                style={{ borderTop: `1px solid ${t.borderSubtle}` }}
              >
                {["Library", "Search", "Capture"].map((tab, i) => (
                  <div key={tab} className="text-center">
                    <div
                      className="mx-auto mb-1 size-5 rounded-md"
                      style={{ background: i === 0 ? t.accent : t.tagBg }}
                    />
                    <div
                      className="text-[10px] font-medium"
                      style={{ color: i === 0 ? t.accent : t.fgTertiary }}
                    >
                      {tab}
                    </div>
                  </div>
                ))}
              </div>
            </PhoneFrame>

            {/* Card Detail */}
            <PhoneFrame t={t} bg={t.bg}>
              <div className="px-5 pb-5 pt-8">
                <div className="mb-5 flex justify-between">
                  <span className="text-sm" style={{ color: t.accent }}>
                    ← Back
                  </span>
                  <span className="text-sm" style={{ color: t.fgTertiary }}>
                    ···
                  </span>
                </div>
                <div
                  className="mb-1 text-[22px] font-semibold tracking-tight"
                  style={{ fontFamily: FONTS.heading, color: t.fg }}
                >
                  Design principles
                </div>
                <div className="mb-4 text-xs" style={{ color: t.fgTertiary }}>
                  Note · Created Jan 28 · 5 connections
                </div>
                <div className="mb-5 text-[15px] leading-relaxed" style={{ color: t.fgSecondary }}>
                  The core insight: connections are primary, content is secondary. A card is an
                  anchor point in a network of relationships.
                </div>
                <div
                  className="mb-2.5 font-mono text-[10px] uppercase tracking-wide"
                  style={{ color: t.fgTertiary }}
                >
                  Pinned
                </div>
                {[
                  { title: "Syne product spec", type: "Document" },
                  { title: "Design space", type: "Space" },
                ].map((conn) => (
                  <div
                    key={conn.title}
                    className="mb-2 flex items-center justify-between rounded-md px-3.5 py-3"
                    style={{ background: t.inputBg }}
                  >
                    <div>
                      <div
                        className="text-sm font-medium"
                        style={{ fontFamily: FONTS.heading, color: t.fg }}
                      >
                        {conn.title}
                      </div>
                      <div className="text-[11px]" style={{ color: t.fgTertiary }}>
                        {conn.type}
                      </div>
                    </div>
                    <div className="text-xs" style={{ color: t.fgTertiary }}>
                      →
                    </div>
                  </div>
                ))}
                <div
                  className="mb-2.5 mt-5 font-mono text-[10px] uppercase tracking-wide"
                  style={{ color: t.fgTertiary }}
                >
                  Connections
                </div>
                {["UX research notes", "Card interaction sketch", "Meeting Jan 25"].map((c) => (
                  <div
                    key={c}
                    className="py-2.5 text-sm"
                    style={{ borderBottom: `1px solid ${t.borderSubtle}`, color: t.fg }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            </PhoneFrame>

            {/* Quick Capture */}
            <PhoneFrame t={t} bg={GRADIENTS.mist}>
              <div className="flex min-h-[440px] flex-col px-5 pb-5 pt-8">
                <div className="flex flex-1 flex-col items-center justify-center">
                  <div
                    className="mb-8 size-[180px] rounded-full blur-[20px]"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(242,140,62,0.2) 0%, rgba(196,184,217,0.1) 60%, transparent 100%)",
                    }}
                  />
                  <div
                    className="-mt-20 mb-2 text-center text-[22px] font-semibold tracking-tight"
                    style={{ fontFamily: FONTS.heading, color: t.fg }}
                  >
                    What's on your mind?
                  </div>
                  <div className="text-center text-sm" style={{ color: t.fgSecondary }}>
                    Capture a note, link, or image
                  </div>
                </div>
                <GlassCard t={t} style={{ marginTop: "auto" }}>
                  <div className="min-h-[44px] text-[15px]" style={{ color: t.fgTertiary }}>
                    Start typing...
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex gap-2">
                      {["📷", "🔗", "#"].map((icon) => (
                        <div
                          key={icon}
                          className="flex size-8 items-center justify-center rounded-[10px] text-sm"
                          style={{ background: t.tagBg }}
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                    <div
                      className="flex size-9 items-center justify-center rounded-[10px] text-base font-bold text-white"
                      style={{ background: COLORS.primary[500] }}
                    >
                      ↑
                    </div>
                  </div>
                </GlassCard>
              </div>
            </PhoneFrame>

            {/* Space View */}
            <PhoneFrame t={t} bg={t.bg}>
              <div className="px-5 pb-5 pt-8">
                <div className="mb-5 flex justify-between">
                  <span className="text-sm" style={{ color: t.accent }}>
                    ← Library
                  </span>
                  <span className="text-sm" style={{ color: t.fgTertiary }}>
                    ···
                  </span>
                </div>
                <div
                  className="mb-4 rounded-lg p-5"
                  style={{
                    background: isDark ? "rgba(242,140,62,0.06)" : COLORS.primary[50],
                    border: `1px solid ${isDark ? "rgba(242,140,62,0.12)" : COLORS.primary[100]}`,
                  }}
                >
                  <div
                    className="mb-1 text-xl font-semibold"
                    style={{ fontFamily: FONTS.heading, color: t.fg }}
                  >
                    Design
                  </div>
                  <div className="text-[13px]" style={{ color: t.fgSecondary }}>
                    Space · 8 cards · Static
                  </div>
                </div>
                <div
                  className="mb-4 flex w-fit gap-1 rounded-[10px] p-0.5"
                  style={{ background: t.inputBg }}
                >
                  {["Grid", "List"].map((m, i) => (
                    <span
                      key={m}
                      className="rounded-lg px-3.5 py-1.5 text-xs font-medium"
                      style={{
                        color: i === 0 ? t.fg : t.fgTertiary,
                        background: i === 0 ? t.surface : "transparent",
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
                    className="flex items-center justify-between py-3.5"
                    style={{ borderBottom: `1px solid ${t.borderSubtle}` }}
                  >
                    <div>
                      <div
                        className="text-sm font-medium"
                        style={{ fontFamily: FONTS.heading, color: t.fg }}
                      >
                        {c}
                      </div>
                      <div className="text-[11px]" style={{ color: t.fgTertiary }}>
                        Note · 3 connections
                      </div>
                    </div>
                    <div className="text-xs" style={{ color: t.fgTertiary }}>
                      →
                    </div>
                  </div>
                ))}
              </div>
            </PhoneFrame>

            {/* Safari Extension */}
            <PhoneFrame t={t} bg="#E8E5E0">
              <div className="px-5 pb-5 pt-8">
                <div
                  className="mb-2 rounded-[14px] p-4 opacity-50"
                  style={{ background: t.surface }}
                >
                  <div
                    className="mb-1 text-base font-semibold"
                    style={{ fontFamily: FONTS.heading, color: t.fg }}
                  >
                    Best new movies 2025
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-20 w-[60px] rounded-lg"
                        style={{ background: t.inputBg }}
                      />
                    ))}
                  </div>
                </div>
                <div
                  className="mb-3 flex items-center gap-2 rounded-md px-3.5 py-2.5 opacity-60"
                  style={{ background: t.surface, border: `1px solid ${t.border}` }}
                >
                  <span className="text-xs">◁ ▷</span>
                  <span className="flex-1 text-center text-[13px]" style={{ color: t.fgSecondary }}>
                    movies.example.com
                  </span>
                </div>
                <GlassCard t={t} style={{ marginTop: 20 }}>
                  <div className="mb-4 text-center">
                    <div
                      className="mx-auto mb-3 size-12 rounded-[14px]"
                      style={{ background: GRADIENTS.warmGlow }}
                    />
                    <div
                      className="text-base font-semibold"
                      style={{ fontFamily: FONTS.heading, color: t.fg }}
                    >
                      Save to Syne
                    </div>
                  </div>
                  <div
                    className="mb-3 rounded-md p-3.5"
                    style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)" }}
                  >
                    <div
                      className="mb-0.5 text-[13px] font-medium"
                      style={{ fontFamily: FONTS.heading, color: t.fg }}
                    >
                      Best New Movies of 2025
                    </div>
                    <div className="text-[11px]" style={{ color: t.fgTertiary }}>
                      movies.example.com
                    </div>
                  </div>
                  <div
                    className="mb-2 font-mono text-[10px] uppercase tracking-wide"
                    style={{ color: t.fgTertiary }}
                  >
                    Add to space
                  </div>
                  <div className="mb-4 flex gap-1.5">
                    {["Entertainment", "Research"].map((s) => (
                      <span
                        key={s}
                        className="rounded-full px-3 py-1.5 text-[11px] font-medium"
                        style={{
                          color: s === "Entertainment" ? "#FFF" : t.fgSecondary,
                          background: s === "Entertainment" ? t.accent : t.tagBg,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <button
                    className="w-full cursor-pointer rounded-[14px] border-none py-3.5 text-sm font-medium text-white"
                    style={{ fontFamily: FONTS.heading, background: COLORS.primary[500] }}
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
          <div className="grid grid-cols-2 gap-4">
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
                className="rounded-lg p-6"
                style={{ background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)" }}
              >
                <div
                  className="mb-2 text-[15px] font-semibold"
                  style={{ fontFamily: FONTS.heading, color: t.fg }}
                >
                  {p.title}
                </div>
                <div className="text-[13px] leading-relaxed" style={{ color: t.fgSecondary }}>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <div className="pt-10 text-center" style={{ borderTop: `1px solid ${t.border}` }}>
          <div
            className="text-[32px] font-semibold tracking-tight"
            style={{ fontFamily: FONTS.display }}
          >
            Syne
          </div>
          <div className="mt-2 font-mono text-[10px]" style={{ color: t.fgTertiary }}>
            Brand Identity v2.0 · February 2026
          </div>
        </div>
      </div>
    </div>
  );
}
