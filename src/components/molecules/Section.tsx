import type { ReactNode } from "react";
import type { Theme } from "../../theme";

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  t: Theme;
}

export function Section({ title, subtitle, children, t }: SectionProps) {
  return (
    <div className="mb-16">
      <div className="mb-7">
        <h2
          className="m-0 mb-1 font-heading text-[22px] font-semibold tracking-tight"
          style={{ color: t.fg }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="m-0 font-body text-sm" style={{ color: t.fgSecondary }}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
