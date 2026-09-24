"use client";

import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";
import type { Content, Lang } from "@/data/content";

export default function Nav({
  lang,
  t,
}: {
  lang: Lang;
  t: Content["nav"];
}) {
  const { links } = t;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy : la section visible est soulignée dans la nav
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [links]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-serif text-2xl leading-none text-ink">
          K<span className="italic text-accent">Z</span>
          <span className="sr-only">{t.home}</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`u-link inline-flex items-baseline gap-1.5 text-sm transition-colors ${
                  active === l.href
                    ? "is-active text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                <span className="font-mono text-[0.65rem] text-faint">
                  {l.n}
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Langue courante en évidence, l'autre à côté, atténuée */}
          <div className="flex h-10 items-center gap-1 rounded-full border border-line px-3 font-mono text-xs uppercase">
            {(["fr", "en"] as const).map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && <span className="text-faint">/</span>}
                {l === lang ? (
                  <span aria-current="true" className="text-accent">
                    {l}
                  </span>
                ) : (
                  <a
                    href={l === "fr" ? "/" : `/${l}`}
                    hrefLang={l}
                    lang={l}
                    aria-label={t.switchLang}
                    title={t.switchLang}
                    className="text-faint transition-colors hover:text-ink"
                  >
                    {l}
                  </a>
                )}
              </span>
            ))}
          </div>
          <ThemeToggle labels={t.theme} />
          <button
            type="button"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            {open ? (
              <CloseIcon width={18} height={18} />
            ) : (
              <MenuIcon width={18} height={18} />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        inert={!open}
        className={`menu bg-bg md:hidden ${open ? "is-open border-t border-line" : ""}`}
      >
        <div>
          <ul className="mx-auto max-w-6xl px-6 py-3">
            {links.map((l, i) => (
              <li
                key={l.href}
                style={{ "--i": i } as React.CSSProperties}
                className="border-b border-line last:border-0"
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="font-mono text-xs text-faint">{l.n}</span>
                  <span className="font-serif text-2xl text-ink">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
