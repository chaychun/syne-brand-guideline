import { GRADIENTS, SUNSET_COLORS } from "../theme";
import { Section, GradientCard } from "../components";
import type { SectionProps } from "./types";

export function GradientSection({ t, g }: SectionProps) {
  return (
    <>
      {/* Gradients */}
      <Section
        title="Gradients"
        subtitle="Warm center, cool edges. Adapts to light and dark modes."
        t={t}
      >
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(g)
            .filter(([k]) => !k.startsWith("sunset"))
            .map(([k, v]) => (
              <GradientCard key={k} gradient={v} name={k} t={t} />
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
    </>
  );
}
