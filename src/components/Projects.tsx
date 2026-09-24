import Image from "next/image";
import { content, type Lang } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GithubIcon, ArrowUpRight } from "./icons";

// Chaque projet est une « planche » : numéro et nom en très grand sur la grille
// de section, capture pleine largeur, puis une fiche technique en deux colonnes.
export default function Projects({ lang }: { lang: Lang }) {
  const { projects, projectsSection: t } = content[lang];
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        number="03"
        eyebrow={t.eyebrow}
        title={
          <>
            {t.title[0]}
            <em>{t.title[1]}</em>
            {t.title[2]}
          </>
        }
        description={t.description}
      />

      <div className="space-y-32">
        {projects.map((project, i) => {
          const host = project.liveUrl?.replace(/^https?:\/\//, "");
          const fig = `Fig. ${String(i + 2).padStart(2, "0")}`;
          return (
            <Reveal
              key={project.name}
              as="article"
              className="group grid gap-x-6 gap-y-8 md:grid-cols-[120px_1fr]"
            >
              {/* Numéro de planche, à l'échelle du nom */}
              <span
                aria-hidden
                className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.85] text-accent"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
                <h3 className="display text-[clamp(3rem,8vw,7rem)] text-ink">
                  {project.name}
                </h3>
                <p className="label pb-2 sm:text-right">
                  {project.year && (
                    <span className="mr-3 text-accent">{project.year}</span>
                  )}
                  {project.tagline}
                </p>
              </div>

              {/* Planche : capture d'écran pleine largeur, servie telle quelle */}
              <figure className="md:col-span-2">
                <a
                  href={project.liveUrl ?? project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.open} ${project.name}`}
                  className="relative block aspect-[16/10] overflow-hidden rounded-[2px] border border-line"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${t.screenshot} ${project.name}`}
                      fill
                      unoptimized
                      sizes="(min-width: 1152px) 1104px, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    />
                  ) : (
                    /* Couverture typographique en l'absence de capture */
                    <span className="absolute inset-0 flex flex-col items-center justify-center bg-surface transition-colors duration-500 group-hover:bg-accent-soft">
                      <span className="display text-[clamp(2.5rem,7vw,5.5rem)] text-ink">
                        {project.name}
                      </span>
                      <span className="label mt-3">{host ?? t.project}</span>
                    </span>
                  )}
                </a>
                <figcaption className="label mt-3 flex justify-between">
                  <span>{fig}</span>
                  <span>{host ?? project.name}</span>
                </figcaption>
              </figure>

              {/* Fiche technique : description à gauche, stack et liens à droite */}
              <div className="hidden md:block" />
              <div className="grid gap-10 border-t border-line pt-8 lg:grid-cols-[1.4fr_1fr]">
                <p className="max-w-xl text-base leading-relaxed text-muted">
                  {project.description}
                </p>

                <div>
                  <p className="label mb-3">{t.stack}</p>
                  <ol className="divide-y divide-line border-y border-line">
                    {project.tags.map((tag, ti) => (
                      <li
                        key={tag}
                        className="grid grid-cols-[32px_1fr] gap-3 py-2.5 text-sm text-ink"
                      >
                        <span className="font-mono text-xs text-faint">
                          {String(ti + 1).padStart(2, "0")}
                        </span>
                        {tag}
                      </li>
                    ))}
                  </ol>

                  <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ink"
                      >
                        {t.live}
                        <ArrowUpRight width={15} height={15} />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="u-link inline-flex items-center gap-1.5 text-muted hover:text-ink"
                      >
                        <GithubIcon width={14} height={14} />
                        {t.code}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
