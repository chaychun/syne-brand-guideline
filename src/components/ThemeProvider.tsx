import { useState, useEffect, type ReactNode } from "react";
import { useTheme, GRADIENTS, GRADIENTS_DARK } from "../theme";

interface ThemeProviderProps {
  children: (props: {
    t: ReturnType<typeof useTheme>;
    isDark: boolean;
    g: typeof GRADIENTS;
  }) => ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.dataset.theme === "dark");
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const t = useTheme(isDark);
  const g = isDark ? GRADIENTS_DARK : GRADIENTS;

  return <>{children({ t, isDark, g })}</>;
}
