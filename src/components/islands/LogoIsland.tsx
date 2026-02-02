import { ThemeProvider } from "../ThemeProvider";
import { LogoSection } from "../../sections/LogoSection";

export default function LogoIsland() {
  return (
    <ThemeProvider>
      {(props) => <LogoSection {...props} />}
    </ThemeProvider>
  );
}
