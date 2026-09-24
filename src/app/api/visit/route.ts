// Reçoit le beacon de VisitTracker et ajoute une ligne dans la Google Sheet
// (voir README, section « Statistiques de visite »).
export async function POST(req: Request) {
  const url = process.env.VISITS_WEBHOOK_URL;
  if (!url) return new Response(null, { status: 204 });

  let body: { duration?: unknown; lang?: unknown };
  try {
    body = JSON.parse(await req.text());
  } catch {
    return new Response(null, { status: 400 });
  }

  const duration = Number(body.duration);
  if (!Number.isFinite(duration) || duration < 0) {
    return new Response(null, { status: 400 });
  }

  // En-têtes de géolocalisation ajoutés par Vercel (absents en local)
  const h = req.headers;
  const city = decodeURIComponent(h.get("x-vercel-ip-city") ?? "");
  const country = h.get("x-vercel-ip-country") ?? "";

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      city,
      country,
      duration: Math.min(Math.round(duration), 86_400),
      lang: body.lang === "en" ? "en" : "fr",
    }),
    // Apps Script répond par une redirection une fois la ligne écrite : inutile de la suivre
    redirect: "manual",
  }).catch(() => {});

  return new Response(null, { status: 204 });
}
