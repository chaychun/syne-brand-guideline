import type { ReactNode } from "react";
import type { Theme } from "../../theme";

interface PhoneFrameProps {
  children: ReactNode;
  bg?: string;
  t: Theme;
}

export function PhoneFrame({ children, bg, t }: PhoneFrameProps) {
  return (
    <div
      className="relative min-h-[560px] w-[280px] shrink-0 overflow-hidden rounded-3xl shadow-xl"
      style={{
        background: bg || t.bg,
        border: `3px solid ${t.fg}`,
      }}
    >
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-2.5 z-10 h-7 w-[100px] -translate-x-1/2 rounded-xl bg-black" />

      {/* Status bar */}
      <div className="relative z-[5] flex items-center justify-between px-6 pt-3.5">
        <span className="font-body text-[13px] font-semibold" style={{ color: t.fg }}>
          9:41
        </span>
        <span className="font-body text-[11px] opacity-60" style={{ color: t.fg }}>
          ● ●● ▮
        </span>
      </div>

      {/* Content */}
      <div className="relative pt-5">{children}</div>

      {/* Home indicator */}
      <div
        className="absolute bottom-2 left-1/2 h-1 w-[120px] -translate-x-1/2 rounded-sm opacity-20"
        style={{ background: t.fg }}
      />
    </div>
  );
}
