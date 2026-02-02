import { ThemeProvider } from "../ThemeProvider";
import { MobileUISection } from "../../sections/MobileUISection";

export default function MobileUIIsland() {
  return (
    <ThemeProvider>
      {(props) => <MobileUISection {...props} />}
    </ThemeProvider>
  );
}
