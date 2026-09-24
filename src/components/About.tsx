import { content, type Lang } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About({ lang }: { lang: Lang }) {
  const { about } = content[lang];
  const [lead, ...rest] = about.paragraphs;

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        number="01"
        eyebrow={about.eyebrow}
        title={
          <>
            {about.title[0]}
            <em>{about.title[1]}</em>
            {about.title[2]}
          </>
        }
      />

      <div className="grid gap-12 md:grid-cols-[120px_1fr] lg:grid-cols-[120px_1.4fr_1fr]">
        {/* Colonne vide pour rester aligné sur la grille de l'en-tête */}
        <div className="hidden md:block" />

        <Reveal>
          {/* Premier paragraphe en serif, façon chapô */}
          <p className="font-serif text-[1.6rem] leading-[1.3] text-ink sm:text-[1.85rem]">
            {lead}
          </p>
          {rest.map((p, i) => (
            <p key={i} className="mt-6 text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120} className="md:col-start-2 lg:col-start-3">
          <dl className="divide-y divide-line border-y border-line">
            {about.facts.map((f) => (
              <div
                key={f.label}
                className="grid grid-cols-[110px_1fr] gap-4 py-3.5"
              >
                <dt className="label pt-0.5">{f.label}</dt>
                <dd className="text-sm text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
