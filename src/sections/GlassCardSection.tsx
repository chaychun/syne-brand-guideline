import { COLORS, Icon } from "../theme";
import { Section, GlassCard, GlassContainer, GlassSection, OpaqueSection } from "../components";
import type { SectionProps } from "./types";

export function GlassCardSection({ t, isDark, g }: SectionProps) {
  return (
    <>
      {/* Glass Card */}
      <Section
        title="Glass Card"
        subtitle="Glass edge on all sides with opaque body. Best on gradient backgrounds."
        t={t}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div
            className="flex items-center justify-center rounded-2xl p-5 sm:p-8"
            style={{ background: g.dusk }}
          >
            <GlassCard t={t} style={{ width: "100%", maxWidth: 260 }}>
              <div className="text-h3 mb-1.5" style={{ color: t.fg }}>
                Design principles
              </div>
              <div className="text-body-sm mb-3 leading-relaxed" style={{ color: t.fgSecondary }}>
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
            className="flex items-center justify-center rounded-2xl p-5 sm:p-8"
            style={{ background: g.ember }}
          >
            <GlassCard t={t} style={{ width: "100%", maxWidth: 260 }}>
              <div className="text-h3 mb-1.5" style={{ color: t.fg }}>
                Meeting with team
              </div>
              <div className="text-body-sm mb-3 leading-relaxed" style={{ color: t.fgSecondary }}>
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div
            className="flex items-center justify-center rounded-2xl p-5 sm:p-8"
            style={{ background: g.mist }}
          >
            <GlassContainer t={t} style={{ width: "100%", maxWidth: 280 }}>
              <GlassSection>
                <div className="space-y-2">
                  <div
                    className="h-2.5 w-24 rounded-full"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)",
                    }}
                  />
                  <div
                    className="h-2.5 w-40 rounded-full"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                    }}
                  />
                </div>
              </GlassSection>
              <OpaqueSection t={t}>
                <div className="text-h3 mb-3" style={{ color: t.fg }}>
                  Building your app
                </div>
                {["Setting up auth", "Database schema", "Email notifications"].map((step, i) => (
                  <div key={step} className="mb-2 flex items-center gap-2.5">
                    <div
                      className="flex size-5 items-center justify-center rounded-full"
                      style={{
                        background: i < 2 ? "rgba(76,175,80,0.12)" : t.tagBg,
                        color: i < 2 ? "#4CAF50" : t.fgTertiary,
                      }}
                    >
                      <Icon name={i < 2 ? "check" : "loader"} size={12} />
                    </div>
                    <span
                      className="text-body-sm"
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
            className="flex items-center justify-center rounded-2xl p-5 sm:p-8"
            style={{ background: g.dusk }}
          >
            <GlassContainer t={t} style={{ width: "100%", maxWidth: 280 }}>
              <GlassSection>
                <div className="space-y-2">
                  <div
                    className="h-2.5 w-32 rounded-full"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)",
                    }}
                  />
                  <div
                    className="h-2.5 w-48 rounded-full"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                    }}
                  />
                </div>
              </GlassSection>
              <OpaqueSection t={t}>
                <div className="text-h3" style={{ color: t.fgTertiary }}>
                  What would you change?
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div
                    className="flex size-8 items-center justify-center rounded-lg"
                    style={{ border: `1px solid ${t.border}`, color: t.fgTertiary }}
                  >
                    <Icon name="plus" size={16} />
                  </div>
                  <div
                    className="text-caption flex items-center gap-1.5 rounded-lg px-3 py-1.5"
                    style={{ border: `1px solid ${t.border}`, color: t.fgSecondary }}
                  >
                    <Icon name="pencil" size={14} style={{ color: COLORS.primary[500] }} />
                    Add styling
                  </div>
                  <div
                    className="ml-auto flex size-8 items-center justify-center rounded-lg text-white"
                    style={{ background: COLORS.primary[500] }}
                  >
                    <Icon name="arrowUp" size={16} />
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
    </>
  );
}
