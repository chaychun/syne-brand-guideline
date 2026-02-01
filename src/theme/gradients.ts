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
} as const;

export type Gradients = typeof GRADIENTS;
