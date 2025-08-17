import { useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("system");

  const applyTheme = useCallback(
    (newTheme: Theme) => {
      const root = window.document.documentElement;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      let effectiveTheme: "light" | "dark" =
        newTheme === "system" ? (prefersDark ? "dark" : "light") : newTheme;

      root.classList.remove("light", "dark");
      root.classList.add(effectiveTheme);

      localStorage.setItem("theme", newTheme);
      setThemeState(newTheme);
    },
    []
  );

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    applyTheme(saved || "system");
  }, [applyTheme]);

  useEffect(() => {
    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme, applyTheme]);

  return { theme, setTheme: applyTheme };
}
