export const SUNSET_COLORS = [
  "#0F0E0C",
  "#1C1A17",
  "#33302A",
  "#6B3410",
  "#8F4513",
  "#B85A18",
  "#E07020",
  "#F28C3E",
  "#FFA55E",
  "#FFC087",
  "#FFD8B0",
  "#FFEDD9",
  "#FAF9F7",
  "#FFFFFF",
] as const;

const sunsetStops = [0, 8, 16, 26, 36, 46, 54, 60, 66, 72, 78, 84, 92, 100];
const sunsetHStops = [0, 8, 16, 28, 42, 52, 64, 76, 92, 100];
const sunsetHColors = [0, 1, 2, 4, 6, 7, 9, 10, 12, 13]; // indices into SUNSET_COLORS

const buildGradient = (direction: string, colors: readonly string[], stops: number[]) =>
  `linear-gradient(${direction}, ${colors.map((c, i) => `${c} ${stops[i]}%`).join(", ")})`;

export const GRADIENTS = {
  warmGlow:
    "radial-gradient(ellipse at 50% 50%, #FFA55E 0%, #F5C4A1 35%, #D5CFE1 70%, #EBE7F0 100%)",
  sunrise: "linear-gradient(135deg, #F5C4A1 0%, #FFA55E 30%, #E8836B 60%, #C4B8D9 100%)",
  mist: "linear-gradient(180deg, #FAF9F7 0%, #F3F1EE 30%, #FFEDD9 60%, #EBE7F0 100%)",
  ember: "radial-gradient(circle at 30% 70%, #F28C3E 0%, #E8836B 40%, #C4B8D9 80%, #F5F3F7 100%)",
  dusk: "linear-gradient(135deg, #EBE7F0 0%, #F5C4A1 40%, #FFA55E 70%, #BAB0CE 100%)",
  subtle: "linear-gradient(180deg, #FAF9F7 0%, #FFF7F0 50%, #F5F3F7 100%)",
  sunset: buildGradient("180deg", SUNSET_COLORS, sunsetStops),
  sunsetH: buildGradient(
    "90deg",
    sunsetHColors.map((i) => SUNSET_COLORS[i]),
    sunsetHStops,
  ),
  // Teal/sage mixed gradients - simple 2-color transitions
  oasis: "linear-gradient(180deg, #F5C4A1 0%, #CCDFE0 100%)",
  lagoon: "linear-gradient(135deg, #A8C9CB 0%, #FAF9F7 100%)",
  meadow: "linear-gradient(180deg, #C8D4C0 0%, #F5EFDA 100%)",
  horizon: "linear-gradient(135deg, #E6F0F0 0%, #FFEDD9 100%)",
  grove: "linear-gradient(180deg, #A8B8A0 0%, #F5C4A1 100%)",
} as const;

export const GRADIENTS_DARK = {
  warmGlow: "radial-gradient(ellipse at 50% 50%, #E07020 0%, #B85A18 35%, #1C1A17 100%)",
  sunrise: "linear-gradient(135deg, #1C1A17 0%, #E8836B 50%, #5E9499 100%)",
  mist: "linear-gradient(180deg, #1C1A17 0%, #33302A 50%, #1C1A17 100%)",
  ember: "radial-gradient(circle at 30% 70%, #F28C3E 0%, #E8836B 40%, #1C1A17 100%)",
  dusk: "linear-gradient(135deg, #5E9499 0%, #E8836B 50%, #1C1A17 100%)",
  subtle: "linear-gradient(180deg, #1C1A17 0%, #33302A 50%, #1C1A17 100%)",
  sunset: buildGradient("180deg", SUNSET_COLORS, sunsetStops),
  sunsetH: buildGradient(
    "90deg",
    sunsetHColors.map((i) => SUNSET_COLORS[i]),
    sunsetHStops,
  ),
  // Dark mode versions - vibrant colors on dark
  oasis: "linear-gradient(180deg, #E8836B 0%, #5E9499 100%)",
  lagoon: "linear-gradient(135deg, #5E9499 0%, #1C1A17 100%)",
  meadow: "linear-gradient(180deg, #A8B8A0 0%, #33302A 100%)",
  horizon: "linear-gradient(135deg, #5E9499 0%, #F5C4A1 100%)",
  grove: "linear-gradient(180deg, #A8B8A0 0%, #E8836B 100%)",
} as const;

export type Gradients = typeof GRADIENTS;
export type GradientsDark = typeof GRADIENTS_DARK;
