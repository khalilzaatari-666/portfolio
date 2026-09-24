import { content, type Lang } from "@/data/content";
import { WhatsappIcon } from "./icons";

const WHATSAPP_NUMBER = "212617246500";

// Bouton flottant, en bas à droite, qui ouvre une conversation WhatsApp.
export default function WhatsappButton({ lang }: { lang: Lang }) {
  const label = content[lang].whatsapp;
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-bg text-ink shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-line-strong hover:text-bg sm:bottom-6 sm:right-6"
    >
      <WhatsappIcon width={22} height={22} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-line bg-bg px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        WhatsApp
      </span>
    </a>
  );
}
