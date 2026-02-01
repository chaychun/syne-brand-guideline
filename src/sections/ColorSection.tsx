import { COLORS } from "../theme";
import { Section, ColorSwatch } from "../components";
import type { SectionProps } from "./types";

export function ColorSection({ t }: SectionProps) {
  return (
    <>
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
    </>
  );
}
