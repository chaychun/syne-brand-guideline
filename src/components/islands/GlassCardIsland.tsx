import { ThemeProvider } from "../ThemeProvider";
import { GlassCardSection } from "../../sections/GlassCardSection";

export default function GlassCardIsland() {
  return (
    <ThemeProvider>
      {(props) => <GlassCardSection {...props} />}
    </ThemeProvider>
  );
}
