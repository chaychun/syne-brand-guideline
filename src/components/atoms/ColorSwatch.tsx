import { useState } from "react";

interface ColorSwatchProps {
  color: string;
  name?: string;
  hex?: string;
}

export function ColorSwatch({ color, name, hex }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  return (
    <div
      onClick={() => {
        navigator.clipboard?.writeText(hex || color);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="cursor-pointer text-center"
    >
      <div
        className="size-16 rounded-md border border-black/5 transition-transform hover:scale-105"
        style={{ backgroundColor: color }}
      />
      {name && <div className="mt-1 font-mono text-[9px] text-neutral-500">{name}</div>}
      <div className="font-mono text-[9px]" style={{ color: copied ? "#F28C3E" : "#B5B0A7" }}>
        {copied ? "copied!" : hex || color}
      </div>
    </div>
  );
}
