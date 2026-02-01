import { COLORS, Icon } from "../theme";
import { Section, GlassCard, GlassContainer, PhoneFrame } from "../components";
import type { SectionProps } from "./types";

interface ScreenShowcaseProps {
  phone: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  reverse?: boolean;
  t: SectionProps["t"];
}

function ScreenShowcase({ phone, title, description, features, reverse, t }: ScreenShowcaseProps) {
  return (
    <div
      className={`flex flex-col items-center gap-6 py-8 sm:gap-8 sm:py-10 md:flex-row md:gap-12 ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <div className="shrink-0">{phone}</div>
      <div className="flex max-w-sm flex-col text-center md:text-left">
        <h3 className="text-h2 mb-2" style={{ color: t.fg }}>
          {title}
        </h3>
        <p className="text-body-sm" style={{ color: t.fgSecondary }}>
          {description}
        </p>
        {features && features.length > 0 && (
          <ul className="mt-3 inline-flex flex-col items-start space-y-1">
            {features.map((feature) => (
              <li
                key={feature}
                className="text-caption flex items-center gap-2"
                style={{ color: t.fgTertiary }}
              >
                <span
                  className="size-1 shrink-0 rounded-full"
                  style={{ background: t.fgTertiary }}
                />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function LibraryPhone({ t, isDark }: { t: SectionProps["t"]; isDark: boolean }) {
  return (
    <PhoneFrame t={t} bg={t.bg}>
      <div className="flex h-full flex-col">
        <div className="flex-1 px-4 pt-6">
          <div className="mb-0.5 text-[22px] font-heading font-semibold" style={{ color: t.fg }}>
            Library
          </div>
          <div className="mb-3 text-[13px]" style={{ color: t.fgSecondary }}>
            47 cards · 3 spaces
          </div>
          <div
            className="mb-4 flex items-center gap-2 rounded-xl px-3 py-2.5"
            style={{ background: t.inputBg }}
          >
            <Icon name="search" size={14} style={{ color: t.fgTertiary, opacity: 0.6 }} />
            <span className="text-[13px]" style={{ color: t.fgTertiary }}>
              Search cards...
            </span>
          </div>
          <div className="mb-3 flex gap-1.5">
            {["All", "Notes", "Links", "Images"].map((f, i) => (
              <span
                key={f}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-medium"
                style={{
                  color: i === 0 ? "#FFF" : t.fgSecondary,
                  background: i === 0 ? t.accent : t.tagBg,
                }}
              >
                {f}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
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
                className="rounded-xl p-3"
                style={{ background: card.bg, border: `1px solid ${t.borderSubtle}` }}
              >
                <div
                  className="mb-0.5 text-[13px] font-heading font-medium"
                  style={{ color: t.fg }}
                >
                  {card.title}
                </div>
                <div className="text-[10px]" style={{ color: t.fgTertiary }}>
                  {card.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex justify-around px-4 pb-7 pt-2"
          style={{ borderTop: `1px solid ${t.borderSubtle}` }}
        >
          {[
            { label: "Library", icon: "book" as const },
            { label: "Search", icon: "search" as const },
            { label: "Capture", icon: "plus" as const },
          ].map((tab, i) => (
            <div key={tab.label} className="text-center">
              <div
                className="mx-auto mb-1 flex size-6 items-center justify-center rounded-md"
                style={{ background: i === 0 ? t.accent : "transparent" }}
              >
                <Icon
                  name={tab.icon}
                  size={16}
                  style={{ color: i === 0 ? "#FFF" : t.fgTertiary }}
                />
              </div>
              <div
                className="text-[9px] font-medium"
                style={{ color: i === 0 ? t.accent : t.fgTertiary }}
              >
                {tab.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function CardDetailPhone({ t }: { t: SectionProps["t"] }) {
  return (
    <PhoneFrame t={t} bg={t.bg}>
      <div className="px-4 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <button
            className="flex cursor-pointer items-center gap-0.5 border-none bg-transparent text-[13px]"
            style={{ color: t.accent }}
          >
            <Icon name="caretLeft" size={14} />
            Back
          </button>
          <button
            className="cursor-pointer border-none bg-transparent"
            style={{ color: t.fgSecondary }}
          >
            <Icon name="dots" size={18} />
          </button>
        </div>
        <div className="mb-1 text-[18px] font-heading font-semibold" style={{ color: t.fg }}>
          Design principles
        </div>
        <div className="mb-3 text-[11px]" style={{ color: t.fgTertiary }}>
          Note · Created Jan 28 · 5 connections
        </div>
        <div className="mb-4 text-[14px] leading-relaxed" style={{ color: t.fgSecondary }}>
          The core insight: connections are primary, content is secondary. A card is an anchor point
          in a network of relationships.
        </div>
        <div
          className="mb-2 text-[10px] font-semibold uppercase tracking-wider"
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
            className="mb-1.5 flex items-center justify-between rounded-lg px-3 py-2.5"
            style={{ background: t.inputBg }}
          >
            <div>
              <div className="text-[13px] font-heading font-medium" style={{ color: t.fg }}>
                {conn.title}
              </div>
              <div className="text-[10px]" style={{ color: t.fgTertiary }}>
                {conn.type}
              </div>
            </div>
            <Icon name="caretRight" size={14} style={{ color: t.fgSecondary }} />
          </div>
        ))}
        <div
          className="mb-2 mt-4 text-[10px] font-semibold uppercase tracking-wider"
          style={{ color: t.fgTertiary }}
        >
          Connections
        </div>
        {["UX research notes", "Card interaction sketch", "Meeting Jan 25"].map((c) => (
          <div
            key={c}
            className="py-2 text-[13px]"
            style={{ borderBottom: `1px solid ${t.borderSubtle}`, color: t.fg }}
          >
            {c}
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}

function QuickCapturePhone({ t, g }: { t: SectionProps["t"]; g: SectionProps["g"] }) {
  return (
    <PhoneFrame t={t} bg={g.mist}>
      <div className="flex h-full flex-col px-4 pb-8 pt-6">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div
            className="mb-6 size-[140px] rounded-full blur-[16px]"
            style={{
              background:
                "radial-gradient(circle, rgba(242,140,62,0.2) 0%, rgba(196,184,217,0.1) 60%, transparent 100%)",
            }}
          />
          <div
            className="-mt-16 mb-1.5 text-center text-[17px] font-heading font-semibold"
            style={{ color: t.fg }}
          >
            What's on your mind?
          </div>
          <div className="text-center text-[13px]" style={{ color: t.fgSecondary }}>
            Capture a note, link, or image
          </div>
        </div>
        <GlassCard t={t} style={{ marginTop: "auto" }}>
          <div className="min-h-[36px] text-[14px]" style={{ color: t.fgTertiary }}>
            Start typing...
          </div>
          <div className="mt-2.5 flex items-center justify-between">
            <div className="flex gap-1.5">
              {[
                { icon: "camera" as const },
                { icon: "link" as const },
                { icon: "hash" as const },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="flex size-7 items-center justify-center rounded-lg"
                  style={{ background: t.tagBg }}
                >
                  <Icon name={item.icon} size={15} style={{ color: t.fgSecondary }} />
                </div>
              ))}
            </div>
            <div
              className="flex size-8 items-center justify-center rounded-lg text-white"
              style={{ background: t.accent }}
            >
              <Icon name="arrowUp" size={16} />
            </div>
          </div>
        </GlassCard>
      </div>
    </PhoneFrame>
  );
}

function SpaceViewPhone({ t, isDark }: { t: SectionProps["t"]; isDark: boolean }) {
  return (
    <PhoneFrame t={t} bg={t.bg}>
      <div className="px-4 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <button
            className="flex cursor-pointer items-center gap-0.5 border-none bg-transparent text-[13px]"
            style={{ color: t.accent }}
          >
            <Icon name="caretLeft" size={14} />
            Library
          </button>
          <button
            className="cursor-pointer border-none bg-transparent"
            style={{ color: t.fgSecondary }}
          >
            <Icon name="dots" size={18} />
          </button>
        </div>
        <div
          className="mb-3 rounded-xl p-4"
          style={{
            background: isDark ? "rgba(242,140,62,0.06)" : COLORS.primary[50],
            border: `1px solid ${isDark ? "rgba(242,140,62,0.12)" : COLORS.primary[100]}`,
          }}
        >
          <div className="mb-0.5 text-[17px] font-heading font-semibold" style={{ color: t.fg }}>
            Design
          </div>
          <div className="text-[12px]" style={{ color: t.fgSecondary }}>
            Space · 8 cards · Static
          </div>
        </div>
        <div className="mb-3 flex w-fit gap-0.5 rounded-lg p-0.5" style={{ background: t.inputBg }}>
          {["Grid", "List"].map((m, i) => (
            <span
              key={m}
              className="rounded-md px-3 py-1 text-[11px] font-medium"
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
            className="flex items-center justify-between py-3"
            style={{ borderBottom: `1px solid ${t.borderSubtle}` }}
          >
            <div>
              <div className="text-[13px] font-heading font-medium" style={{ color: t.fg }}>
                {c}
              </div>
              <div className="text-[10px]" style={{ color: t.fgTertiary }}>
                Note · 3 connections
              </div>
            </div>
            <Icon name="caretRight" size={14} style={{ color: t.fgSecondary }} />
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}

function ShareSheetPhone({
  t,
  g,
  isDark,
}: {
  t: SectionProps["t"];
  g: SectionProps["g"];
  isDark: boolean;
}) {
  return (
    <PhoneFrame t={t} bg={isDark ? "#1C1A17" : "#E8E5E0"}>
      <div className="flex h-full flex-col">
        {/* Blurred website background */}
        <div className="flex-1 px-4 pt-4 opacity-40">
          <div className="rounded-xl p-3" style={{ background: t.surface }}>
            <div className="mb-2 text-[14px] font-semibold" style={{ color: t.fg }}>
              Best movies of 2025
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 w-11 rounded-md" style={{ background: t.inputBg }} />
              ))}
            </div>
          </div>
        </div>
        {/* Share sheet with glass border */}
        <GlassContainer t={t} className="mx-2 mb-8 rounded-[20px]">
          <div className="rounded-[14px] px-4 pb-5 pt-3" style={{ background: t.cardBg }}>
            {/* Handle */}
            <div
              className="mx-auto mb-4 h-1 w-9 rounded-full"
              style={{ background: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)" }}
            />
            {/* App icon + title */}
            <div className="mb-3 flex items-center gap-3">
              <div className="size-10 rounded-xl" style={{ background: g.warmGlow }} />
              <div>
                <div className="text-[15px] font-heading font-semibold" style={{ color: t.fg }}>
                  Save to Syne
                </div>
                <div className="text-[11px]" style={{ color: t.fgTertiary }}>
                  movies.example.com
                </div>
              </div>
            </div>
            {/* Link preview */}
            <div
              className="mb-3 rounded-xl p-3"
              style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)" }}
            >
              <div className="mb-0.5 text-[13px] font-heading font-medium" style={{ color: t.fg }}>
                Best Movies of 2025 — Ranked
              </div>
              <div className="text-[11px]" style={{ color: t.fgTertiary }}>
                The definitive list of must-watch films this year
              </div>
            </div>
            {/* Space selector */}
            <div
              className="mb-3 text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: t.fgTertiary }}
            >
              Add to space
            </div>
            <div className="mb-4 flex items-center gap-1.5">
              {["Entertainment", "Research"].map((s, i) => (
                <span
                  key={s}
                  className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                  style={{
                    color: i === 0 ? "#FFF" : t.fgSecondary,
                    background: i === 0 ? t.accent : t.tagBg,
                  }}
                >
                  {s}
                </span>
              ))}
              <div
                className="flex size-6 items-center justify-center rounded-full"
                style={{ background: t.tagBg }}
              >
                <Icon name="plus" size={14} style={{ color: t.fgSecondary }} />
              </div>
            </div>
            <button
              className="w-full cursor-pointer rounded-xl border-none py-3 text-[14px] font-heading font-semibold text-white"
              style={{ background: t.accent }}
            >
              Save Card
            </button>
          </div>
        </GlassContainer>
      </div>
    </PhoneFrame>
  );
}

export function MobileUISection({ t, isDark, g }: SectionProps) {
  return (
    <Section
      title="Mobile UI — Screens"
      subtitle="iPhone mockups showing how the system applies."
      t={t}
    >
      <div className="space-y-4">
        <ScreenShowcase
          t={t}
          title="Library"
          description="Card grid with 2-column layout. Filter chips use pill shape with active state in accent color."
          features={["12px corner radius on cards", "Subtle tinted backgrounds per type"]}
          phone={<LibraryPhone t={t} isDark={isDark} />}
        />

        <ScreenShowcase
          t={t}
          title="Card Detail"
          description="Hierarchical typography separates title, metadata, and body. Pinned items use elevated surface treatment."
          features={["Section headers in overline style", "List items with subtle dividers"]}
          reverse
          phone={<CardDetailPhone t={t} />}
        />

        <ScreenShowcase
          t={t}
          title="Quick Capture"
          description="Centered layout with ambient gradient. Input card uses glass effect at bottom of viewport."
          features={["Radial gradient for focus", "Icon buttons in muted containers"]}
          phone={<QuickCapturePhone t={t} g={g} />}
        />

        <ScreenShowcase
          t={t}
          title="Spaces"
          description="Space header uses tinted container matching brand primary. Segmented control for view switching."
          features={["Accent border on space card", "Grid/List toggle pattern"]}
          reverse
          phone={<SpaceViewPhone t={t} isDark={isDark} />}
        />

        <ScreenShowcase
          t={t}
          title="Share Extension"
          description="Modal sheet with glass border treatment. Dimmed background shows context behind the action."
          features={["Drag handle indicator", "Full-width primary action"]}
          phone={<ShareSheetPhone t={t} g={g} isDark={isDark} />}
        />
      </div>
    </Section>
  );
}
