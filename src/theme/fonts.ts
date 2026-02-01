export const FONTS = {
  display: "'Syne', sans-serif",
  heading: "'General Sans', sans-serif",
  body: "'DM Sans', sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export type Fonts = typeof FONTS;
