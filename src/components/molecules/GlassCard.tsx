import type { CSSProperties, ReactNode } from "react";
import type { Theme } from "../../theme";

interface GlassContainerProps {
  t: Theme;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

/** Glass container with glass edge on all sides. Compose with GlassSection and OpaqueSection. */
export function GlassContainer({ t, children, style, className = "" }: GlassContainerProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl p-1.5 backdrop-blur-[20px] ${className}`}
      style={{
        background: t.glassEdge,
        border: `1px solid ${t.glassBorder}`,
        boxShadow: t.glassShadow,
        WebkitBackdropFilter: "blur(20px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface GlassSectionProps {
  children: ReactNode;
  className?: string;
}

/** Content section on glass background (transparent, sits on glass edge) */
export function GlassSection({ children, className = "" }: GlassSectionProps) {
  return <div className={`px-5 py-4 ${className}`}>{children}</div>;
}

interface OpaqueSectionProps {
  t: Theme;
  children: ReactNode;
  className?: string;
}

/** Opaque card section inside glass container */
export function OpaqueSection({ t, children, className = "" }: OpaqueSectionProps) {
  return (
    <div
      className={`rounded-xl p-5 ${className}`}
      style={{
        background: t.cardBg,
      }}
    >
      {children}
    </div>
  );
}

interface GlassCardProps {
  t: Theme;
  children: ReactNode;
  style?: CSSProperties;
}

/** Convenience component: glass container with opaque card inside */
export function GlassCard({ t, children, style }: GlassCardProps) {
  return (
    <GlassContainer t={t} style={style}>
      <OpaqueSection t={t}>{children}</OpaqueSection>
    </GlassContainer>
  );
}
