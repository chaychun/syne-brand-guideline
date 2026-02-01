import { Logo } from "../components";
import { Icon } from "../theme";
import type { SectionProps } from "./types";

interface HeroSectionProps extends SectionProps {
  setTheme: (theme: "light" | "dark") => void;
}

export function HeroSection({ t, isDark, setTheme }: HeroSectionProps) {
  return (
    <>
      {/* Fixed header bar */}
      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="relative h-[26px] w-[90px]">
          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{ opacity: isDark ? 1 : 0, color: "#FFFBF7" }}
          >
            <Logo width={90} />
          </div>
          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{ opacity: isDark ? 0 : 1, color: "#1E1C1A" }}
          >
            <Logo width={90} />
          </div>
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[11px] shadow-lg backdrop-blur-xl transition-colors"
          style={{
            color: isDark ? "#1E1C1A" : "#FFFBF7",
            background: isDark ? "rgba(255,255,255,0.9)" : "rgba(30,28,26,0.9)",
          }}
        >
          <span className="relative size-[14px]">
            <span
              className="absolute inset-0 transition-opacity duration-400"
              style={{ opacity: isDark ? 1 : 0 }}
            >
              <Icon name="sun" size={14} />
            </span>
            <span
              className="absolute inset-0 transition-opacity duration-400"
              style={{ opacity: isDark ? 0 : 1 }}
            >
              <Icon name="moon" size={14} />
            </span>
          </span>
          <span className="relative w-[30px]">
            <span
              className="absolute inset-0 transition-opacity duration-400"
              style={{ opacity: isDark ? 1 : 0 }}
            >
              Light
            </span>
            <span className="transition-opacity duration-400" style={{ opacity: isDark ? 0 : 1 }}>
              Dark
            </span>
          </span>
        </button>
      </div>

      {/* HERO */}
      <div className="relative overflow-hidden">
        {/* Background color blobs layer */}
        <div className="absolute inset-0" style={{ background: isDark ? "#0F0E0C" : "#FAF9F7" }}>
          {/* Primary warm blob - top right */}
          <div
            className="pointer-events-none absolute -right-[60px] -top-[40px] size-[380px] rounded-full blur-[80px]"
            style={{
              background: isDark ? "#E07020" : "#FFA55E",
              opacity: isDark ? 0.6 : 0.65,
            }}
          />
          {/* Secondary teal blob - bottom left */}
          <div
            className="pointer-events-none absolute -bottom-[80px] -left-[60px] size-[320px] rounded-full blur-[80px]"
            style={{
              background: isDark ? "#5E9499" : "#7FB0B4",
              opacity: isDark ? 0.5 : 0.55,
            }}
          />
          {/* Lavender blob - top left */}
          <div
            className="pointer-events-none absolute -left-[40px] top-[10%] size-[280px] rounded-full blur-[90px]"
            style={{
              background: isDark ? "#8273A6" : "#9E91BA",
              opacity: isDark ? 0.45 : 0.5,
            }}
          />
          {/* Coral accent - center right */}
          <div
            className="pointer-events-none absolute right-[10%] top-[40%] size-[250px] rounded-full blur-[70px]"
            style={{
              background: isDark ? "#E8836B" : "#E8836B",
              opacity: isDark ? 0.45 : 0.5,
            }}
          />
          {/* Sage green blob - bottom center */}
          <div
            className="pointer-events-none absolute bottom-[-60px] left-[30%] size-[300px] rounded-full blur-[90px]"
            style={{
              background: isDark ? "#6A9760" : "#8BB282",
              opacity: isDark ? 0.4 : 0.45,
            }}
          />
          {/* Peach blob - top center */}
          <div
            className="pointer-events-none absolute -top-[30px] left-[40%] size-[220px] rounded-full blur-[70px]"
            style={{
              background: isDark ? "#F5C4A1" : "#F5C4A1",
              opacity: isDark ? 0.4 : 0.55,
            }}
          />
          {/* Deep purple blob - bottom right */}
          <div
            className="pointer-events-none absolute -bottom-[40px] right-[20%] size-[260px] rounded-full blur-[85px]"
            style={{
              background: isDark ? "#554972" : "#BAB0CE",
              opacity: isDark ? 0.5 : 0.5,
            }}
          />
          {/* Small bright orange accent - mid left */}
          <div
            className="pointer-events-none absolute left-[15%] top-[60%] size-[180px] rounded-full blur-[60px]"
            style={{
              background: isDark ? "#F28C3E" : "#F28C3E",
              opacity: isDark ? 0.5 : 0.5,
            }}
          />
        </div>

        {/* Glass panel with backdrop blur */}
        <div
          className="relative"
          style={{
            background: isDark ? "rgba(15, 14, 12, 0.6)" : "rgba(250, 249, 247, 0.7)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
            boxShadow: isDark
              ? "inset 0 -1px 0 rgba(255,255,255,0.04)"
              : "inset 0 -1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <div className="relative mx-auto max-w-[960px] px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32 md:px-12 md:pb-20 md:pt-40">
            <h1 className="relative m-0 mb-4 font-display text-[36px] font-semibold leading-[1.05] tracking-tight sm:text-[44px] md:text-[56px]">
              <span
                className="transition-opacity duration-400"
                style={{ opacity: isDark ? 1 : 0, color: "#F3F1EE" }}
              >
                Brand
                <br />
                Identity
              </span>
              <span
                className="absolute inset-0 transition-opacity duration-400"
                style={{ opacity: isDark ? 0 : 1, color: "#33302A" }}
              >
                Brand
                <br />
                Identity
              </span>
            </h1>
            <p
              className="text-body m-0 max-w-[400px] leading-relaxed"
              style={{ color: t.fgSecondary }}
            >
              Visual system for Syne — a spatial knowledge tool where connections are primary,
              content is secondary.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
