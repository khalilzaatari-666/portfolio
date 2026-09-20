import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const siteUrl = "https://khalilzaatari.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Khalil Zaatari | Développeur Full Stack & Data Science",
  description:
    "Portfolio de Khalil Zaatari, ingénieur d'État en informatique (ENSA El Jadida). Développeur full stack React / Next.js / Node.js et spécialiste en science des données, basé à Agadir, Maroc.",
  keywords: [
    "Khalil Zaatari",
    "développeur full stack",
    "React",
    "Next.js",
    "Node.js",
    "data science",
    "machine learning",
    "Agadir",
    "Maroc",
    "portfolio",
  ],
  authors: [{ name: "Khalil Zaatari" }],
  creator: "Khalil Zaatari",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: "Khalil Zaatari | Développeur Full Stack & Data Science",
    description:
      "Ingénieur d'État en informatique. Développeur full stack et spécialiste en science des données. Basé à Agadir, Maroc.",
    siteName: "Khalil Zaatari",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalil Zaatari | Développeur Full Stack & Data Science",
    description:
      "Ingénieur d'État en informatique. Développeur full stack et spécialiste en science des données.",
  },
  robots: { index: true, follow: true },
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
