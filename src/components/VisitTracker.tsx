"use client";

import { useEffect } from "react";

// Envoie une ligne par visite (durée, langue) quand l'onglet est masqué ou
// fermé. Pas de cookie, pas d'IP stockée : la localisation vient de Vercel.
export default function VisitTracker({ lang }: { lang: string }) {
  useEffect(() => {
    const start = Date.now();
    let sent = false;
    // ponytail: un seul envoi par chargement ; si le visiteur revient sur
    // l'onglet après l'avoir masqué, le temps en plus n'est pas compté.
    const send = () => {
      if (sent || document.visibilityState !== "hidden") return;
      sent = true;
      const duration = Math.round((Date.now() - start) / 1000);
      navigator.sendBeacon("/api/visit", JSON.stringify({ duration, lang }));
    };
    document.addEventListener("visibilitychange", send);
    window.addEventListener("pagehide", send);
    return () => {
      document.removeEventListener("visibilitychange", send);
      window.removeEventListener("pagehide", send);
    };
  }, [lang]);

  return null;
}
