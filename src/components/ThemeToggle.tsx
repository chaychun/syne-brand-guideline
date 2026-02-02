import { useState, useEffect } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme from data attribute
    const theme = document.documentElement.dataset.theme;
    setIsDark(theme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = newTheme;
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[11px] shadow-lg backdrop-blur-xl transition-colors"
      style={{
        color: isDark ? "#1E1C1A" : "#FFFBF7",
        background: isDark ? "rgba(255,255,255,0.9)" : "rgba(30,28,26,0.9)",
      }}
    >
      <span className="relative size-[14px]">
        <span
          className="absolute inset-0 transition-opacity duration-400"
          style={{ opacity: isDark ? 1 : 0 }}
        >
          <Sun size={14} />
        </span>
        <span
          className="absolute inset-0 transition-opacity duration-400"
          style={{ opacity: isDark ? 0 : 1 }}
        >
          <Moon size={14} />
        </span>
      </span>
      <span className="relative w-[30px]">
        <span
          className="absolute inset-0 transition-opacity duration-400"
          style={{ opacity: isDark ? 1 : 0 }}
        >
          Light
        </span>
        <span className="transition-opacity duration-400" style={{ opacity: isDark ? 0 : 1 }}>
          Dark
        </span>
      </span>
    </button>
  );
}
