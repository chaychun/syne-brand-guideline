import { COLORS } from "../theme";
import { Section } from "../components";
import type { SectionProps } from "./types";

export function SpacingSection({ t, isDark }: SectionProps) {
  return (
    <>
      {/* Spacing & Radius */}
      <Section title="Spacing & Radius" subtitle="Base 4px. Generous rounding." t={t}>
        <div className="flex flex-wrap gap-8">
          <div>
            <div className="text-overline mb-3" style={{ color: t.fgTertiary }}>
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
            <div className="text-overline mb-3" style={{ color: t.fgTertiary }}>
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
                <div className="text-overline normal-case tracking-normal" style={{ color: t.fg }}>
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
    </>
  );
}
