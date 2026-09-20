"use client";

import { useEffect, useState } from "react";

// Heure locale à Agadir, mise à jour chaque minute.
export default function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Africa/Casablanca",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {time ?? "--:--"}
      <span className="text-[var(--color-faint)]"> GMT+1</span>
    </span>
  );
}
