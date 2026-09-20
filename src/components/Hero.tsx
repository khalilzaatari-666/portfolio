import Image from "next/image";
import { profile, marquee } from "@/data/content";
import Clock from "./Clock";
import { ArrowUpRight, DownloadIcon } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-28 sm:pt-36">
        {/* Ligne d'en-tête façon « cartouche » */}
        <div
          className="rise flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint"
          style={{ "--d": "0ms" } as React.CSSProperties}
        >
          <span>Portfolio — 2026</span>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="breathe absolute inline-flex h-full w-full rounded-full bg-accent" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Disponible
          </span>
        </div>
        <div
          className="draw rule-strong mt-3"
          style={{ "--d": "100ms" } as React.CSSProperties}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* Nom en très grand, serif */}
            <h1
              className="display rise text-[clamp(3.6rem,11vw,9.5rem)] text-ink"
              style={{ "--d": "200ms" } as React.CSSProperties}
            >
              Khalil
              <br />
              Zaatari
            </h1>

            <p
              className="display rise mt-6 max-w-2xl text-[clamp(1.5rem,3.2vw,2.4rem)] text-muted"
              style={{ "--d": "350ms" } as React.CSSProperties}
            >
              Développeur <em>full stack</em>
              <br className="hidden sm:block" /> &amp; ingénieur{" "}
              <em>data science</em>.
            </p>
          </div>

          {/* Portrait (si fourni) ou emplacement hachuré */}
          <div
            className="rise relative w-full max-w-[300px] lg:w-[260px] xl:w-[300px]"
            style={{ "--d": "450ms" } as React.CSSProperties}
          >
            <div className="img-slot relative aspect-[4/5] overflow-hidden rounded-[2px] border border-line">
              {profile.portrait ? (
                <Image
                  src={profile.portrait}
                  alt={`Portrait de ${profile.name}`}
                  fill
                  priority
                  sizes="(min-width: 1280px) 300px, (min-width: 1024px) 260px, 300px"
                  className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
                />
              ) : (
                <span className="label absolute inset-x-0 bottom-3 text-center">
                  Portrait
                </span>
              )}
            </div>
            <p className="label mt-3 flex justify-between">
              <span>Fig. 01</span>
              <span>Agadir, MA</span>
            </p>
          </div>
        </div>

        {/* Bas du hero : tagline à gauche, fiche technique à droite */}
        <div className="mt-16 grid gap-10 border-t border-line pt-8 md:grid-cols-[1.4fr_1fr]">
          <div
            className="rise"
            style={{ "--d": "550ms" } as React.CSSProperties}
          >
            <p className="max-w-xl text-base leading-relaxed text-muted">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-ink group">
                Voir les projets
                <ArrowUpRight
                  width={15}
                  height={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={profile.cvFullStack}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <DownloadIcon width={15} height={15} />
                CV Full Stack
              </a>
              <a
                href={profile.cvDataScience}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <DownloadIcon width={15} height={15} />
                CV Data Science
              </a>
            </div>
          </div>

          <dl
            className="rise grid grid-cols-2 gap-x-6 gap-y-5 self-start font-mono text-sm"
            style={{ "--d": "650ms" } as React.CSSProperties}
          >
            <Meta label="Localisation">{profile.location}</Meta>
            <Meta label="Heure locale">
              <Clock />
            </Meta>
            <Meta label="Formation">Ingénieur d&apos;État, ENSA</Meta>
            <Meta label="Contact">
              <a href={`mailto:${profile.email}`} className="u-link">
                {profile.email}
              </a>
            </Meta>
          </dl>
        </div>
      </div>

      {/* Bandeau de stack qui défile */}
      <div className="overflow-hidden border-y border-line py-3">
        <div className="marquee font-mono text-xs uppercase tracking-[0.14em] text-faint">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="px-5">{item}</span>
              <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Meta({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <dt className="label mb-1">{label}</dt>
      <dd className="truncate text-ink">{children}</dd>
    </div>
  );
}
