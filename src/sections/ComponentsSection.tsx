import { COLORS } from "../theme";
import { Section } from "../components";
import type { SectionProps } from "./types";

export function ComponentsSection({ t, isDark }: SectionProps) {
  return (
    <>
      {/* Buttons */}
      <Section title="Buttons" subtitle="Pill-shaped. Three variants." t={t}>
        <div className="flex flex-wrap items-center gap-3">
          <button
            className="text-body-sm cursor-pointer rounded-full border-none px-7 py-3 font-heading font-medium text-white"
            style={{ background: COLORS.primary[500] }}
          >
            Primary action
          </button>
          <button
            className="text-body-sm cursor-pointer rounded-full px-7 py-3 font-heading font-medium"
            style={{
              color: t.fg,
              background: t.surface,
              border: `1px solid ${t.border}`,
            }}
          >
            Secondary
          </button>
          <button
            className="text-body-sm cursor-pointer rounded-full border-none bg-transparent px-7 py-3 font-heading font-medium"
            style={{ color: t.accent }}
          >
            Tertiary
          </button>
          <button
            className="cursor-pointer rounded-full border-none px-4 py-2 font-heading text-[13px] font-medium"
            style={{ color: t.fgSecondary, background: t.inputBg }}
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
              className="text-caption rounded-full px-3.5 py-1.5"
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
            className="text-h3 box-border w-full rounded-[14px] px-[18px] py-3.5 font-normal outline-none"
            style={{
              color: t.fg,
              background: t.inputBg,
              border: `1px solid ${t.border}`,
            }}
          />
          <div
            className="text-h3 rounded-[14px] px-[17px] py-[13px] font-normal"
            style={{
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
    </>
  );
}
