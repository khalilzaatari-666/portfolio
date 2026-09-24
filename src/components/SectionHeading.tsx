import Reveal from "./Reveal";

// En-tête de section façon index imprimé : numéro à gauche, titre serif à droite.
export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="rule-draw mb-14 grid gap-6 pt-6 md:grid-cols-[120px_1fr]">
      <div className="flex items-baseline gap-3 md:block">
        <span className="font-serif text-4xl leading-none text-accent">
          {number}
        </span>
        <span className="label md:mt-3 md:block">{eyebrow}</span>
      </div>
      <div>
        <h2 className="display max-w-3xl text-[clamp(2.2rem,5vw,3.75rem)] text-ink">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
