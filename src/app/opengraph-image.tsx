import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Charge Instrument Serif depuis Google Fonts au moment du build (Satori a
// besoin du fichier de police brut, pas d'un lien CSS).
async function loadFont(family: string, text: string) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    )
  ).text();
  const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype|woff)'\)/)?.[1];
  if (!url) throw new Error("Police introuvable");
  return (await fetch(url)).arrayBuffer();
}

export default async function OpenGraphImage() {
  const text = `${profile.name}${profile.role}Portfolio${profile.location}khalilzaatari.com`;
  const serif = await loadFont("Instrument+Serif", text);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f5f3ee",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(23,21,15,0.12) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          color: "#17150f",
          fontFamily: "Instrument Serif",
        }}
      >
        {/* Halo accent */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(212,73,27,0.35) 0%, rgba(212,73,27,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 26, letterSpacing: -0.5, opacity: 0.9 }}>
            khalil<span style={{ color: "#d4491b" }}>.</span>zaatari
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#d4491b",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 400,
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 34, color: "#625d52" }}>{profile.role}</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#9a9488",
          }}
        >
          <span>{profile.location}</span>
          <span>khalilzaatari.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Instrument Serif", data: serif, style: "normal" }],
    }
  );
}
