import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  IBM_Plex_Sans_Arabic,
  Instrument_Serif,
  Aref_Ruqaa,
} from "next/font/google";
import { content, langPath, langs, type Lang } from "@/data/content";
import "../globals.css";

// Pas de police de secours générée (Arial, Times New Roman) pour les polices
// latines : elles contiennent aussi de l'arabe et masqueraient les polices
// arabes placées juste après dans globals.css.
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  adjustFontFallback: false,
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
  adjustFontFallback: false,
});

// Polices arabes, placées en secours derrière les polices latines (voir
// globals.css) : les noms latins gardent Geist / Instrument Serif. Limitées au
// sous-ensemble arabe, elles ne sont téléchargées que si la page en contient.
const arabicSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500"],
  variable: "--font-arabic-sans",
  display: "swap",
  preload: false,
});

const arabicDisplay = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: "400",
  variable: "--font-arabic-display",
  display: "swap",
  preload: false,
});

const fontVariables = [
  geistSans,
  geistMono,
  instrumentSerif,
  arabicSans,
  arabicDisplay,
]
  .map((f) => f.variable)
  .join(" ");

const siteUrl ="https://khalilzaatari.com";

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = (await params).lang as Lang;
  const { meta } = content[lang];
  const url = langPath(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Khalil Zaatari" }],
    creator: "Khalil Zaatari",
    alternates: {
      canonical: url,
      languages: Object.fromEntries(langs.map((l) => [l, langPath(l)])),
    },
    openGraph: {
      type: "website",
      locale: meta.locale,
      url,
      title: meta.title,
      description: meta.ogDescription,
      siteName: "Khalil Zaatari",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.ogDescription,
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Applique le thème sauvegardé avant le premier rendu pour éviter le flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.dataset.theme=t}}catch(e){}})();`;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={fontVariables}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
