"use client";

import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", n: "01", label: "À propos" },
  { href: "#skills", n: "02", label: "Compétences" },
  { href: "#projects", n: "03", label: "Projets" },
  { href: "#experience", n: "04", label: "Parcours" },
  { href: "#contact", n: "05", label: "Contact" },
];

export default function Nav() {
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
  }, []);

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
          <span className="sr-only">Khalil Zaatari — accueil</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`u-link inline-flex items-baseline gap-1.5 text-sm transition-colors ${
                  active === l.href ? "text-ink" : "text-muted hover:text-ink"
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
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
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

      {open && (
        <div className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-3">
            {links.map((l) => (
              <li key={l.href} className="border-b border-line last:border-0">
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
      )}
    </header>
  );
}
