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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
          <div
            className="h-[140px] rounded-t-xl sm:h-[200px]"
            style={{ background: GRADIENTS.sunset }}
          />
          <div className="h-14 rounded-b-xl sm:h-20" style={{ background: GRADIENTS.sunsetH }} />
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {SUNSET_COLORS.map((c) => (
            <div
              key={c}
              className="size-6 rounded-lg border border-gray-500/15 sm:size-8"
              style={{ background: c }}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
