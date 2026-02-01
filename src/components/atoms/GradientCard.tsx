interface GradientCardProps {
  gradient: string;
  name: string;
  height?: number;
}

export function GradientCard({ gradient, name, height = 120 }: GradientCardProps) {
  return (
    <div className="text-center">
      <div
        className="w-full rounded-lg border border-black/5 dark:border-white/10"
        style={{ height, background: gradient }}
      />
      <div className="mt-2 font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
        {name}
      </div>
    </div>
  );
}
