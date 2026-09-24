import { content, profile, type Lang } from "@/data/content";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./icons";

export default function Contact({ lang }: { lang: Lang }) {
  const t = content[lang].contact;
  const channels = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    {
      label: t.phone,
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { label: "LinkedIn", value: "in/khalil-zaatari", href: profile.linkedin },
    { label: "GitHub", value: "khalilzaatari-666", href: profile.github },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="rule-draw grid gap-10 pt-6 md:grid-cols-[120px_1fr]">
        <div className="flex items-baseline gap-3 md:block">
          <span className="font-serif text-4xl leading-none text-accent">05</span>
          <span className="label md:mt-3 md:block">{t.eyebrow}</span>
        </div>

        <div>
          <h2 className="display text-[clamp(2.6rem,7vw,5.5rem)] text-ink">
            {t.title[0]}
            <br />
            <em>{t.title[1]}</em>
            {t.title[2]}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
            {t.intro}
          </p>

          {/* L'adresse email, en très grand, est le vrai bouton */}
          <a
            href={`mailto:${profile.email}`}
            className="group mt-12 inline-flex max-w-full items-baseline gap-3 border-b border-line-strong pb-2 font-serif text-[clamp(1.4rem,4vw,3rem)] leading-none text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <span className="truncate">{profile.email}</span>
            <ArrowUpRight
              width={22}
              height={22}
              className="shrink-0 self-center transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          <dl className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => {
              const external = c.href.startsWith("http");
              return (
                <div key={c.label} className="border-t border-line pt-4">
                  <dt className="label mb-2">{c.label}</dt>
                  <dd>
                    <a
                      href={c.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="u-link text-sm text-ink"
                    >
                      {c.value}
                    </a>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
