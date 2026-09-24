import { content, profile, type Lang } from "@/data/content";
import Clock from "./Clock";

export default function Footer({ lang }: { lang: Lang }) {
  const t = content[lang].footer;
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-strong">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-faint sm:grid-cols-3 sm:items-center">
        <p>
          © {year} {profile.name}
        </p>
        <p className="sm:text-center">
          {t.madeIn} — <Clock />
        </p>
        <div className="flex gap-5 sm:justify-end">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="u-link hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="u-link hover:text-ink"
          >
            LinkedIn
          </a>
          <a href="#home" className="u-link hover:text-ink">
            {t.top}
          </a>
        </div>
      </div>
    </footer>
  );
}
