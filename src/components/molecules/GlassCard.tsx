import type { CSSProperties, ReactNode } from "react";
import type { Theme } from "../../theme";

interface GlassCardProps {
  t: Theme;
  children: ReactNode;
  style?: CSSProperties;
}

export function GlassCard({ t, children, style }: GlassCardProps) {
  return (
    <div
      className="overflow-hidden rounded-xl shadow-lg"
      style={{
        border: `1px solid ${t.glassBorder}`,
        ...style,
      }}
    >
      <div
        className="h-1.5 backdrop-blur-[20px]"
        style={{
          background: t.glassEdge,
          WebkitBackdropFilter: "blur(20px)",
        }}
      />
      <div
        className="p-5 backdrop-blur-[40px] backdrop-saturate-150"
        style={{
          background: t.glassBg,
          WebkitBackdropFilter: "blur(40px) saturate(1.5)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
