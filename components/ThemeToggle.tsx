"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";

type Theme = "system" | "light" | "dark";

export function applyTheme(t: Theme) {
  const root = document.documentElement;
  if (t === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", t);
  try {
    localStorage.setItem("theme", t);
  } catch {}
  window.dispatchEvent(new CustomEvent("themechange", { detail: t }));
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    try {
      setTheme((localStorage.getItem("theme") as Theme) || "system");
    } catch {}
    const on = (e: Event) => setTheme((e as CustomEvent<Theme>).detail);
    window.addEventListener("themechange", on);
    return () => window.removeEventListener("themechange", on);
  }, []);

  const opts: { id: Theme; label: string; icon: React.ReactNode }[] = [
    { id: "system", label: "System theme", icon: <Icon.monitor /> },
    { id: "light", label: "Light theme", icon: <Icon.sun /> },
    { id: "dark", label: "Dark theme", icon: <Icon.moon /> },
  ];

  return (
    <div className="seg" role="radiogroup" aria-label="Theme">
      {opts.map((o) => (
        <button
          key={o.id}
          type="button"
          role="radio"
          aria-checked={theme === o.id}
          aria-label={o.label}
          title={o.label}
          className={theme === o.id ? "on" : ""}
          onClick={() => applyTheme(o.id)}
        >
          {o.icon}
        </button>
      ))}
    </div>
  );
}
