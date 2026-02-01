import { Logo, Logomark, Section } from "../components";
import { GRADIENTS } from "../theme";
import type { SectionProps } from "./types";

export function LogoSection({ t, isDark, g }: SectionProps) {
  return (
    <>
      {/* Logo Usage */}
      <Section
        title="Logo"
        subtitle="The Syne wordmark combines the logomark with custom typography. Use consistently across all touchpoints."
        t={t}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Light background */}
          <div
            className="flex h-[120px] items-center justify-center rounded-xl border sm:h-[140px]"
            style={{
              background: "#FAF9F7",
              borderColor: "rgba(0,0,0,0.08)",
            }}
          >
            <Logo width={120} className="text-[#1E1C1A]" />
          </div>

          {/* Dark background */}
          <div
            className="flex h-[120px] items-center justify-center rounded-xl sm:h-[140px]"
            style={{ background: "#1E1C1A" }}
          >
            <Logo width={120} className="text-[#FAF9F7]" />
          </div>

          {/* Gradient background - warm */}
          <div
            className="flex h-[120px] items-center justify-center rounded-xl sm:h-[140px]"
            style={{ background: g.sunrise }}
          >
            <Logo width={120} className="text-[#1E1C1A]" />
          </div>

          {/* Gradient background - sunset */}
          <div
            className="flex h-[120px] items-center justify-center rounded-xl sm:h-[140px]"
            style={{ background: GRADIENTS.sunset }}
          >
            <Logo width={120} className="text-[#FAF9F7]" />
          </div>
        </div>

        {/* Usage notes */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            className="rounded-lg p-4"
            style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)" }}
          >
            <div className="mb-1 font-mono text-[11px] font-medium uppercase tracking-wider opacity-50">
              Clear Space
            </div>
            <p className="m-0 text-sm leading-relaxed" style={{ color: t.fgSecondary }}>
              Maintain padding equal to the height of the "S" around the logo.
            </p>
          </div>
          <div
            className="rounded-lg p-4"
            style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)" }}
          >
            <div className="mb-1 font-mono text-[11px] font-medium uppercase tracking-wider opacity-50">
              Minimum Size
            </div>
            <p className="m-0 text-sm leading-relaxed" style={{ color: t.fgSecondary }}>
              Print: 20mm wide. Digital: 80px wide for legibility.
            </p>
          </div>
          <div
            className="rounded-lg p-4"
            style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)" }}
          >
            <div className="mb-1 font-mono text-[11px] font-medium uppercase tracking-wider opacity-50">
              Color Modes
            </div>
            <p className="m-0 text-sm leading-relaxed" style={{ color: t.fgSecondary }}>
              Use dark on light backgrounds, light on dark. Never use brand colors on the logo.
            </p>
          </div>
        </div>
      </Section>

      {/* Logomark */}
      <Section
        title="Logomark"
        subtitle="The standalone mark for compact spaces, favicons, and app icons. Features an open loop design representing connection and flow."
        t={t}
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* Light background */}
          <div
            className="flex h-[100px] items-center justify-center rounded-xl border sm:h-[120px]"
            style={{
              background: "#FAF9F7",
              borderColor: "rgba(0,0,0,0.08)",
            }}
          >
            <Logomark width={48} className="text-[#1E1C1A]" />
          </div>

          {/* Dark background */}
          <div
            className="flex h-[100px] items-center justify-center rounded-xl sm:h-[120px]"
            style={{ background: "#1E1C1A" }}
          >
            <Logomark width={48} className="text-[#FAF9F7]" />
          </div>

          {/* Primary color background */}
          <div
            className="flex h-[100px] items-center justify-center rounded-xl sm:h-[120px]"
            style={{ background: "#F28C3E" }}
          >
            <Logomark width={48} className="text-[#1E1C1A]" />
          </div>

          {/* Teal background */}
          <div
            className="flex h-[100px] items-center justify-center rounded-xl sm:h-[120px]"
            style={{ background: "#5E9499" }}
          >
            <Logomark width={48} className="text-[#FAF9F7]" />
          </div>
        </div>

        {/* Logomark vs Logo comparison */}
        <div className="mt-6">
          <div
            className="mb-2 font-mono text-[11px] font-medium uppercase tracking-wider"
            style={{ color: t.fgSecondary }}
          >
            Design Difference
          </div>
          <div
            className="flex flex-col gap-6 rounded-xl p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6"
            style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)" }}
          >
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <div className="flex flex-col items-center gap-3">
                <Logomark width={56} style={{ color: t.fg }} />
                <span className="font-mono text-[10px] uppercase tracking-wider opacity-50">
                  Logomark
                </span>
              </div>
              <div className="h-16 w-px" style={{ background: t.border }} />
              <div className="flex flex-col items-center gap-3">
                <Logo width={140} style={{ color: t.fg }} />
                <span className="font-mono text-[10px] uppercase tracking-wider opacity-50">
                  Full Logo
                </span>
              </div>
            </div>
            <div className="hidden h-16 w-px sm:block" style={{ background: t.border }} />
            <div className="flex-1 text-sm leading-relaxed" style={{ color: t.fgSecondary }}>
              The logomark features an{" "}
              <strong style={{ color: t.fg }}>open loop at the bottom right</strong>, representing
              continuous connection and flow. The full logo closes this loop, creating a complete
              wordmark that emphasizes stability and identity.
            </div>
          </div>
        </div>

        {/* Size examples */}
        <div className="mt-6">
          <div
            className="mb-2 font-mono text-[11px] font-medium uppercase tracking-wider"
            style={{ color: t.fgSecondary }}
          >
            Common Sizes
          </div>
          <div className="flex flex-wrap items-end gap-4 sm:gap-6">
            {[16, 24, 32, 48, 64].map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <div
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: size + 16,
                    height: size + 16,
                    background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                  }}
                >
                  <Logomark width={size} style={{ color: t.fg }} />
                </div>
                <span className="font-mono text-[10px] opacity-50">{size}px</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
