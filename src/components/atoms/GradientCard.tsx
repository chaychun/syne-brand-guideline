import type { Theme } from "../../theme";

interface GradientCardProps {
  gradient: string;
  name: string;
  t: Theme;
  height?: number;
}

export function GradientCard({ gradient, name, t, height = 120 }: GradientCardProps) {
  return (
    <div className="text-center">
      <div
        className="overflow-hidden rounded-2xl p-1.5 backdrop-blur-[20px]"
        style={{
          background: t.glassEdge,
          border: `1px solid ${t.glassBorder}`,
          boxShadow: t.glassShadow,
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="w-full rounded-xl" style={{ height, background: gradient }} />
      </div>
      <div className="mt-2 font-mono text-[10px]" style={{ color: t.fgTertiary }}>
        {name}
      </div>
    </div>
  );
}
