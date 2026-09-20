import { experience, education, certifications } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "./icons";

// Parcours présenté comme un registre : période à gauche, détail à droite.
export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeading
          number="04"
          eyebrow="Parcours"
          title={
            <>
              Expérience &amp; <em>formation</em>.
            </>
          }
        />

        <ol className="border-t border-line">
          {experience.map((item, i) => (
            <Reveal
              key={item.company + item.period}
              as="li"
              delay={i * 40}
              className="grid gap-3 border-b border-line py-8 md:grid-cols-[120px_260px_1fr] md:gap-6"
            >
              <span className="font-mono text-xs leading-6 text-faint">
                {item.period}
              </span>
              <div>
                <h3 className="font-serif text-2xl leading-none text-ink">
                  {item.company}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Site de ${item.company}`}
                      className="ml-1.5 inline-flex translate-y-0.5 text-faint transition-colors hover:text-accent"
                    >
                      <ArrowUpRight width={14} height={14} />
                    </a>
                  )}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-accent">
                  {item.role}
                </p>
              </div>
              <ul className="space-y-2.5">
                {item.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-faint"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20 grid gap-12 md:grid-cols-[120px_1fr] lg:grid-cols-[120px_1fr_1fr]">
          <div className="hidden md:block" />

          <Reveal>
            <p className="label mb-5">Formation</p>
            <p className="font-serif text-2xl leading-tight text-ink">
              {education.school}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {education.degree}
            </p>
            <p className="mt-3 font-mono text-xs text-faint">{education.period}</p>
          </Reveal>

          <Reveal delay={100} className="md:col-start-2 lg:col-start-3">
            <p className="label mb-5">Certifications</p>
            <ol className="divide-y divide-line border-y border-line">
              {certifications.map((c, i) => (
                <li
                  key={c}
                  className="grid grid-cols-[32px_1fr] gap-3 py-3 text-sm text-muted"
                >
                  <span className="font-mono text-xs text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {c}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
