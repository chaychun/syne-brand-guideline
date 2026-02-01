import { useState } from "react";
import { FONTS, GRADIENTS_DARK, GRADIENTS, useTheme } from "./theme";
import {
  HeroSection,
  DesignPrinciplesSection,
  TypographySection,
  ColorSection,
  GradientSection,
  GlassCardSection,
  ComponentsSection,
  SpacingSection,
  LogoSection,
  IconsSection,
  MobileUISection,
  FooterSection,
} from "./sections";

export default function SyneBrandGuide() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isDark = theme === "dark";
  const t = useTheme(isDark);
  const g = isDark ? GRADIENTS_DARK : GRADIENTS;

  const sectionProps = { t, isDark, g };

  return (
    <div
      className={`min-h-screen ${isDark ? "dark" : ""}`}
      style={{
        background: t.bg,
        color: t.fg,
        fontFamily: FONTS.body,
      }}
    >
      <HeroSection {...sectionProps} setTheme={setTheme} />

      <div className="mx-auto max-w-[960px] px-5 pb-30 pt-10 sm:px-8 md:px-12 md:pt-16">
        {/* 1. Design Principles */}
        <DesignPrinciplesSection {...sectionProps} />

        {/* 2. Typography */}
        <TypographySection {...sectionProps} />

        {/* 3. Colors */}
        <ColorSection {...sectionProps} />

        {/* 4. Gradients, Glass, Components, Spacing */}
        <GradientSection {...sectionProps} />
        <GlassCardSection {...sectionProps} />
        <ComponentsSection {...sectionProps} />
        <SpacingSection {...sectionProps} />

        {/* 5. Logo */}
        <LogoSection {...sectionProps} />

        {/* 6. Icons */}
        <IconsSection {...sectionProps} />

        {/* 7. Mobile UI */}
        <MobileUISection {...sectionProps} />

        <FooterSection {...sectionProps} />
      </div>
    </div>
  );
}
