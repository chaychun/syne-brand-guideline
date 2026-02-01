import type { SectionProps } from "./types";

export function FooterSection({ t }: SectionProps) {
  return (
    <div className="pt-10 text-center" style={{ borderTop: `1px solid ${t.border}` }}>
      <div className="text-display-alt">Syne</div>
      <div
        className="text-overline mt-2 normal-case tracking-normal"
        style={{ color: t.fgTertiary }}
      >
        Brand Identity v2.0 · February 2026
      </div>
    </div>
  );
}
