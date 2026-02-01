import { COLORS } from "./colors";

export interface Theme {
  bg: string;
  surface: string;
  surfaceRaised: string;
  fg: string;
  fgSecondary: string;
  fgTertiary: string;
  border: string;
  borderSubtle: string;
  accent: string;
  accentSubtle: string;
  accentText: string;
  glassBg: string;
  glassEdge: string;
  glassBorder: string;
  inputBg: string;
  tagBg: string;
}

export function useTheme(isDark: boolean): Theme {
  return {
    bg: isDark ? COLORS.neutral[950] : COLORS.neutral[50],
    surface: isDark ? COLORS.neutral[900] : COLORS.neutral[0],
    surfaceRaised: isDark ? COLORS.neutral[800] : COLORS.neutral[0],
    fg: isDark ? COLORS.neutral[100] : COLORS.neutral[900],
    fgSecondary: isDark ? COLORS.neutral[400] : COLORS.neutral[500],
    fgTertiary: isDark ? COLORS.neutral[500] : COLORS.neutral[400],
    border: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
    borderSubtle: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
    accent: isDark ? COLORS.primary[400] : COLORS.primary[500],
    accentSubtle: isDark ? "rgba(242,140,62,0.12)" : COLORS.primary[50],
    accentText: isDark ? COLORS.primary[300] : COLORS.primary[600],
    glassBg: isDark ? "rgba(15,14,12,0.85)" : "rgba(255,255,255,0.88)",
    glassEdge: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.5)",
    glassBorder: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
    inputBg: isDark ? COLORS.neutral[800] : COLORS.neutral[100],
    tagBg: isDark ? "rgba(255,255,255,0.06)" : COLORS.neutral[100],
  };
}
