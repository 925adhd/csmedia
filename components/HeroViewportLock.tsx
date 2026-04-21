"use client";

import { useEffect } from "react";

/**
 * Locks the hero section's height on mobile to the initial window.innerHeight.
 * Writes a px-valued --hero-h CSS variable once on mount and never updates it,
 * so the hero stays put when iOS Safari's URL bar shows/hides during scroll.
 * Desktop is unaffected (uses its own md:min-h-[90vh] class).
 */
export default function HeroViewportLock() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;
    const h = Math.round(window.innerHeight * 0.9);
    document.documentElement.style.setProperty("--hero-h", `${h}px`);
  }, []);

  return null;
}
