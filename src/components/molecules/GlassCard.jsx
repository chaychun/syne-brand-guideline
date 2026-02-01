export function GlassCard({ t, children, style: extraStyle }) {
  return (
    <div
      style={{
        borderRadius: 20,
        overflow: "hidden",
        border: `1px solid ${t.glassBorder}`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        ...extraStyle,
      }}
    >
      <div
        style={{
          height: 6,
          background: t.glassEdge,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />
      <div
        style={{
          background: t.glassBg,
          backdropFilter: "blur(40px) saturate(1.5)",
          WebkitBackdropFilter: "blur(40px) saturate(1.5)",
          padding: 20,
        }}
      >
        {children}
      </div>
    </div>
  );
}
