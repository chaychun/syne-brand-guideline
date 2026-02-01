import { Icon } from "../theme";
import type { SectionProps } from "./types";

interface HeroSectionProps extends SectionProps {
  setTheme: (theme: "light" | "dark") => void;
}

export function HeroSection({ t, isDark, g, setTheme }: HeroSectionProps) {
  return (
    <>
      {/* Floating theme toggle */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="fixed right-6 top-6 z-50 flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[11px] shadow-lg backdrop-blur-xl transition-colors"
        style={{
          color: isDark ? "#1E1C1A" : "#FFFBF7",
          background: isDark ? "rgba(255,255,255,0.9)" : "rgba(30,28,26,0.9)",
        }}
      >
        <Icon name={isDark ? "sun" : "moon"} size={14} />
        {isDark ? "Light" : "Dark"}
      </button>

      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap"
        rel="stylesheet"
      />

      {/* HERO */}
      <div className="relative mx-auto max-w-[960px] overflow-hidden px-12 pb-16 pt-20">
        <div
          className="pointer-events-none absolute -right-[120px] -top-[120px] size-[500px] rounded-full blur-[80px]"
          style={{
            background: g.warmGlow,
            opacity: isDark ? 0.4 : 0.35,
          }}
        />
        <div className="relative">
          <div className="mb-12">
            <div className="font-display text-lg font-semibold tracking-tight">Syne</div>
          </div>
          <h1 className="m-0 mb-4 font-display text-[56px] font-semibold leading-[1.05] tracking-tight">
            Brand
            <br />
            Identity
          </h1>
          <p
            className="text-body m-0 max-w-[400px] leading-relaxed"
            style={{ color: t.fgSecondary }}
          >
            Visual system for Syne — a spatial knowledge tool where connections are primary, content
            is secondary.
          </p>
        </div>
      </div>
    </>
  );
}
