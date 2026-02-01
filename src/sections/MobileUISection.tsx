import { COLORS, Icon } from "../theme";
import { Section, GlassCard, PhoneFrame } from "../components";
import type { SectionProps } from "./types";

export function MobileUISection({ t, isDark, g }: SectionProps) {
  return (
    <Section
      title="Mobile UI — Screens"
      subtitle="iPhone mockups showing how the system applies."
      t={t}
    >
      <div className="flex gap-6 overflow-x-auto py-2 pb-6">
        {/* Library */}
        <PhoneFrame t={t} bg={t.bg}>
          <div className="px-5 pb-5 pt-8">
            <div className="text-h1 mb-0.5" style={{ color: t.fg }}>
              Library
            </div>
            <div className="text-body-sm mb-4" style={{ color: t.fgSecondary }}>
              47 cards · 3 spaces
            </div>
            <div
              className="mb-5 flex items-center gap-2 rounded-[14px] px-4 py-3"
              style={{ background: t.inputBg }}
            >
              <Icon name="search" size={16} style={{ color: t.fgTertiary, opacity: 0.6 }} />
              <span className="text-body-sm" style={{ color: t.fgTertiary }}>
                Search cards...
              </span>
            </div>
            <div className="mb-4 flex gap-1.5">
              {["All", "Notes", "Links", "Images"].map((f, i) => (
                <span
                  key={f}
                  className="text-caption whitespace-nowrap rounded-full px-3.5 py-1.5"
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
                    className="text-body-sm mb-0.5 font-heading font-medium"
                    style={{ color: t.fg }}
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
            {[
              { label: "Library", icon: "book" as const },
              { label: "Search", icon: "search" as const },
              { label: "Capture", icon: "plus" as const },
            ].map((tab, i) => (
              <div key={tab.label} className="text-center">
                <div
                  className="mx-auto mb-1 flex size-7 items-center justify-center rounded-lg"
                  style={{ background: i === 0 ? t.accent : "transparent" }}
                >
                  <Icon
                    name={tab.icon}
                    size={18}
                    style={{ color: i === 0 ? "#FFF" : t.fgTertiary }}
                  />
                </div>
                <div
                  className="text-[10px] font-medium"
                  style={{ color: i === 0 ? t.accent : t.fgTertiary }}
                >
                  {tab.label}
                </div>
              </div>
            ))}
          </div>
        </PhoneFrame>

        {/* Card Detail */}
        <PhoneFrame t={t} bg={t.bg}>
          <div className="px-5 pb-5 pt-8">
            <div className="mb-5 flex items-center justify-between">
              <button
                className="text-body-sm flex cursor-pointer items-center gap-1 border-none bg-transparent"
                style={{ color: t.accent }}
              >
                <Icon name="caretLeft" size={16} />
                Back
              </button>
              <button
                className="cursor-pointer border-none bg-transparent"
                style={{ color: t.fgTertiary }}
              >
                <Icon name="dots" size={20} />
              </button>
            </div>
            <div className="text-h2 mb-1" style={{ color: t.fg }}>
              Design principles
            </div>
            <div className="text-caption mb-4" style={{ color: t.fgTertiary }}>
              Note · Created Jan 28 · 5 connections
            </div>
            <div
              className="text-h3 mb-5 font-normal leading-relaxed"
              style={{ color: t.fgSecondary }}
            >
              The core insight: connections are primary, content is secondary. A card is an anchor
              point in a network of relationships.
            </div>
            <div className="text-overline mb-2.5" style={{ color: t.fgTertiary }}>
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
                  <div className="text-body-sm font-heading font-medium" style={{ color: t.fg }}>
                    {conn.title}
                  </div>
                  <div className="text-[11px]" style={{ color: t.fgTertiary }}>
                    {conn.type}
                  </div>
                </div>
                <Icon name="caretRight" size={16} style={{ color: t.fgTertiary }} />
              </div>
            ))}
            <div className="text-overline mb-2.5 mt-5" style={{ color: t.fgTertiary }}>
              Connections
            </div>
            {["UX research notes", "Card interaction sketch", "Meeting Jan 25"].map((c) => (
              <div
                key={c}
                className="text-body-sm py-2.5"
                style={{ borderBottom: `1px solid ${t.borderSubtle}`, color: t.fg }}
              >
                {c}
              </div>
            ))}
          </div>
        </PhoneFrame>

        {/* Quick Capture */}
        <PhoneFrame t={t} bg={g.mist}>
          <div className="flex min-h-[440px] flex-col px-5 pb-5 pt-8">
            <div className="flex flex-1 flex-col items-center justify-center">
              <div
                className="mb-8 size-[180px] rounded-full blur-[20px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(242,140,62,0.2) 0%, rgba(196,184,217,0.1) 60%, transparent 100%)",
                }}
              />
              <div className="text-h2 -mt-20 mb-2 text-center" style={{ color: t.fg }}>
                What's on your mind?
              </div>
              <div className="text-body-sm text-center" style={{ color: t.fgSecondary }}>
                Capture a note, link, or image
              </div>
            </div>
            <GlassCard t={t} style={{ marginTop: "auto" }}>
              <div className="text-h3 min-h-[44px] font-normal" style={{ color: t.fgTertiary }}>
                Start typing...
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-2">
                  {[
                    { icon: "camera" as const },
                    { icon: "link" as const },
                    { icon: "hash" as const },
                  ].map((item) => (
                    <div
                      key={item.icon}
                      className="flex size-8 items-center justify-center rounded-[10px]"
                      style={{ background: t.tagBg }}
                    >
                      <Icon name={item.icon} size={18} style={{ color: t.fgSecondary }} />
                    </div>
                  ))}
                </div>
                <div
                  className="flex size-9 items-center justify-center rounded-[10px] text-white"
                  style={{ background: COLORS.primary[500] }}
                >
                  <Icon name="arrowUp" size={20} />
                </div>
              </div>
            </GlassCard>
          </div>
        </PhoneFrame>

        {/* Space View */}
        <PhoneFrame t={t} bg={t.bg}>
          <div className="px-5 pb-5 pt-8">
            <div className="mb-5 flex items-center justify-between">
              <button
                className="text-body-sm flex cursor-pointer items-center gap-1 border-none bg-transparent"
                style={{ color: t.accent }}
              >
                <Icon name="caretLeft" size={16} />
                Library
              </button>
              <button
                className="cursor-pointer border-none bg-transparent"
                style={{ color: t.fgTertiary }}
              >
                <Icon name="dots" size={20} />
              </button>
            </div>
            <div
              className="mb-4 rounded-lg p-5"
              style={{
                background: isDark ? "rgba(242,140,62,0.06)" : COLORS.primary[50],
                border: `1px solid ${isDark ? "rgba(242,140,62,0.12)" : COLORS.primary[100]}`,
              }}
            >
              <div className="text-h2 mb-1" style={{ color: t.fg }}>
                Design
              </div>
              <div className="text-body-sm" style={{ color: t.fgSecondary }}>
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
                  className="text-caption rounded-lg px-3.5 py-1.5"
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
                  <div className="text-body-sm font-heading font-medium" style={{ color: t.fg }}>
                    {c}
                  </div>
                  <div className="text-[11px]" style={{ color: t.fgTertiary }}>
                    Note · 3 connections
                  </div>
                </div>
                <Icon name="caretRight" size={16} style={{ color: t.fgTertiary }} />
              </div>
            ))}
          </div>
        </PhoneFrame>

        {/* Safari Extension */}
        <PhoneFrame t={t} bg={isDark ? "#1C1A17" : "#E8E5E0"}>
          <div className="px-5 pb-5 pt-8">
            <div className="mb-2 rounded-[14px] p-4 opacity-50" style={{ background: t.surface }}>
              <div className="text-h3 mb-1" style={{ color: t.fg }}>
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
              <span className="text-caption">◁ ▷</span>
              <span className="text-body-sm flex-1 text-center" style={{ color: t.fgSecondary }}>
                movies.example.com
              </span>
            </div>
            <GlassCard t={t} style={{ marginTop: 20 }}>
              <div className="mb-4 text-center">
                <div
                  className="mx-auto mb-3 size-12 rounded-[14px]"
                  style={{ background: g.warmGlow }}
                />
                <div className="text-h3" style={{ color: t.fg }}>
                  Save to Syne
                </div>
              </div>
              <div
                className="mb-3 rounded-md p-3.5"
                style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)" }}
              >
                <div
                  className="text-body-sm mb-0.5 font-heading font-medium"
                  style={{ color: t.fg }}
                >
                  Best New Movies of 2025
                </div>
                <div className="text-[11px]" style={{ color: t.fgTertiary }}>
                  movies.example.com
                </div>
              </div>
              <div className="text-overline mb-2" style={{ color: t.fgTertiary }}>
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
                className="text-body-sm w-full cursor-pointer rounded-[14px] border-none py-3.5 font-heading font-medium text-white"
                style={{ background: COLORS.primary[500] }}
              >
                Save Card
              </button>
            </GlassCard>
          </div>
        </PhoneFrame>
      </div>
    </Section>
  );
}
