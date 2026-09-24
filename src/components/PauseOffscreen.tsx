"use client";

import { useEffect, useRef } from "react";

// Met en pause les boucles (marquee, point qui respire) de la section parente
// quand elle sort de l'écran. Ne rend rien.
export default function PauseOffscreen() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const target = ref.current?.parentElement;
    if (!target) return;
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) delete target.dataset.paused;
      else target.dataset.paused = "";
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref} hidden />;
}
