"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./icons";
import type { Content } from "@/data/content";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle({
  labels,
  className = "",
}: {
  labels: Content["nav"]["theme"];
  className?: string;
}) {
  // null tant que le thème n'est pas connu côté client (évite un mismatch SSR)
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const saved = document.documentElement.dataset.theme as Theme | undefined;
    setTheme(saved ?? getSystemTheme());
  }, []);

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };
    setTheme(next);

    // L'encre se répand depuis le bouton (View Transitions) ; sinon, simple fondu.
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => unknown;
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!doc.startViewTransition || reduce) return apply();
    const r = e.currentTarget.getBoundingClientRect();
    const root = document.documentElement.style;
    root.setProperty("--vt-x", `${r.left + r.width / 2}px`);
    root.setProperty("--vt-y", `${r.top + r.height / 2}px`);
    doc.startViewTransition(apply);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? labels.toLight : labels.toDark}
      title={isDark ? labels.light : labels.dark}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink ${className}`}
    >
      <span className="relative flex h-[18px] w-[18px] items-center justify-center">
        <SunIcon
          width={18}
          height={18}
          className={`absolute transition-all duration-300 ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <MoonIcon
          width={18}
          height={18}
          className={`absolute transition-all duration-300 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}
