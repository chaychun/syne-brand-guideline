import { Section } from "../components";
import type { SectionProps } from "./types";

export function DesignPrinciplesSection({ t, isDark }: SectionProps) {
  return (
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
            desc: "Syne for display moments. Satoshi for clarity. DM Sans for the quiet work of readability.",
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
            <div className="text-h3 mb-2" style={{ color: t.fg }}>
              {p.title}
            </div>
            <div className="text-body-sm leading-relaxed" style={{ color: t.fgSecondary }}>
              {p.desc}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
