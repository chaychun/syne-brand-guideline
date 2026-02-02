import { ThemeProvider } from "../ThemeProvider";
import { ComponentsSection } from "../../sections/ComponentsSection";

export default function ComponentsIsland() {
  return (
    <ThemeProvider>
      {(props) => <ComponentsSection {...props} />}
    </ThemeProvider>
  );
}
