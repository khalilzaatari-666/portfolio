import Image from "next/image";
import { projects } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GithubIcon, ArrowUpRight } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        number="03"
        eyebrow="Projets"
        title={
          <>
            Deux plateformes, <em>en production</em>.
          </>
        }
        description="Conçues et déployées de bout en bout, aujourd'hui en ligne."
      />

      <div className="space-y-20">
        {projects.map((project, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal
              key={project.name}
              as="article"
              className="group grid gap-8 lg:grid-cols-12 lg:items-start"
            >
              {/* Capture d'écran servie telle quelle (unoptimized) pour rester nette */}
              <figure
                className={`order-2 lg:col-span-7 ${
                  flip ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <a
                  href={project.liveUrl ?? project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ouvrir ${project.name}`}
                  className="relative block aspect-[16/10] overflow-hidden rounded-[2px] border border-line"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Capture d'écran de ${project.name}`}
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  ) : (
                    /* Couverture typographique en l'absence de capture */
                    <span className="absolute inset-0 flex flex-col items-center justify-center bg-surface transition-colors duration-500 group-hover:bg-accent-soft">
                      <span className="display text-[clamp(2.5rem,7vw,5.5rem)] text-ink">
                        {project.name}
                      </span>
                      <span className="label mt-3">
                        {project.liveUrl?.replace(/^https?:\/\//, "") ??
                          "Projet"}
                      </span>
                    </span>
                  )}
                </a>
                <figcaption className="label mt-3 flex justify-between">
                  <span>Fig. {String(i + 2).padStart(2, "0")}</span>
                  <span>
                    {project.liveUrl?.replace(/^https?:\/\//, "") ??
                      project.name}
                  </span>
                </figcaption>
              </figure>

              <div
                className={`order-1 lg:col-span-5 ${flip ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-3xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-[2.4rem] text-ink sm:text-[3rem]">
                    {project.name}
                  </h3>
                </div>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-faint">
                  {project.year && (
                    <span className="mr-3 text-accent">{project.year}</span>
                  )}
                  {project.tagline}
                </p>

                <p className="mt-6 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <p className="mt-6 font-mono text-xs text-muted">
                  {project.tags.join("  ·  ")}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="u-link inline-flex items-center gap-1.5 font-medium text-ink"
                    >
                      Voir le site
                      <ArrowUpRight width={14} height={14} />
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
                      Code source
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
