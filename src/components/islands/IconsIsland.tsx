import { ThemeProvider } from "../ThemeProvider";
import { IconsSection } from "../../sections/IconsSection";

export default function IconsIsland() {
  return (
    <ThemeProvider>
      {(props) => <IconsSection {...props} />}
    </ThemeProvider>
  );
}
