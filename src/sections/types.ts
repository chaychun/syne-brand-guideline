import type { Theme } from "../theme";

export interface SectionProps {
  t: Theme;
  isDark: boolean;
  g: Record<string, string>;
}
