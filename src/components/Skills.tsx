import { skills } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Compétences présentées comme un index : catégorie à gauche, liste en ligne.
export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeading
          number="02"
          eyebrow="Compétences"
          title={
            <>
              Une stack full-stack, <em>ancrée dans la data</em>.
            </>
          }
          description="Du front-end au déploiement, en passant par l'ingénierie et la science des données."
        />

        <ol className="border-t border-line">
          {skills.map((group, i) => (
            <Reveal
              key={group.title}
              as="li"
              delay={i * 50}
              className="group grid gap-3 border-b border-line py-6 transition-colors md:grid-cols-[120px_260px_1fr] md:items-baseline md:py-7"
            >
              <span className="font-mono text-xs text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl leading-none text-ink transition-colors group-hover:text-accent">
                {group.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {group.items.map((item, j) => (
                  <span key={item}>
                    {item}
                    {j < group.items.length - 1 && (
                      <span className="mx-2 text-line-strong/30">/</span>
                    )}
                  </span>
                ))}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
