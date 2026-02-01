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
      className="relative flex h-[694px] w-[320px] shrink-0 flex-col overflow-hidden rounded-[44px] shadow-xl"
      style={{
        background: bg || t.bg,
        border: t.isDark ? "3px solid #000" : `3px solid ${t.fg}`,
      }}
    >
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-3 z-10 h-[30px] w-[105px] -translate-x-1/2 rounded-[20px] bg-black" />

      {/* Status bar */}
      <div className="relative z-[5] flex items-center justify-between px-7 pt-4">
        <span className="font-body text-[13px] font-semibold" style={{ color: t.fg }}>
          9:41
        </span>
        <span className="font-body text-[13px] tracking-wide opacity-70" style={{ color: t.fg }}>
          •••
        </span>
      </div>

      {/* Content */}
      <div className="relative flex-1 overflow-y-auto pt-4">{children}</div>

      {/* Home indicator */}
      <div
        className="absolute bottom-2.5 left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full opacity-25"
        style={{ background: t.fg }}
      />
    </div>
  );
}
