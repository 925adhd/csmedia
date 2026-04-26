"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const POSTER = "/images/white-farmhouse-aerial-drone-kentucky.webp";
// Pre-baked 3200px lanczos3 upscale (see scripts/upscale-bg.mjs). The browser
// downscales for display instead of upscaling, which is always cleaner.
const BG_IMAGE = "/images/white-farmhouse-aerial-drone-kentucky-3200.webp";
const VIDEO = "/videos/desktop.mp4";
const VIDEO_START_SECONDS = 5;
const VIDEO_END_TRIM_SECONDS = 11;
const VIDEO_FADE_OUT_SECONDS = 2;

export default function PortfolioVideoIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [exitProgress, setExitProgress] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [hasFadedIn, setHasFadedIn] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    );
    const apply = () => setEnabled(mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      // Progress reaches 1 over 80vh of scroll; the rest of the section is
      // "hold" where sticky stays pinned. Exit fade is driven by video time,
      // not scroll, so it always lands right before the freeze.
      const progressDistance = window.innerHeight * 0.8;
      if (progressDistance <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(1, Math.max(0, -rect.top / progressDistance)));
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  // After the initial fade-in completes, disable the CSS transition so the
  // rAF-driven exit fade isn't lagged by it.
  useEffect(() => {
    if (!videoReady) return;
    const t = setTimeout(() => setHasFadedIn(true), 700);
    return () => clearTimeout(t);
  }, [videoReady]);

  // rAF-driven exit fade: reads video.currentTime at 60Hz so the fade is
  // smooth, not stepped to onTimeUpdate's ~4Hz cadence.
  useEffect(() => {
    if (!enabled) return;
    const v = videoRef.current;
    if (!v) return;

    let raf = 0;
    const tick = () => {
      if (!v.duration) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const cutoff = v.duration - VIDEO_END_TRIM_SECONDS;
      const fadeStart = cutoff - VIDEO_FADE_OUT_SECONDS;
      const ct = v.currentTime;

      if (ct >= cutoff) {
        if (!v.paused) {
          v.currentTime = cutoff;
          v.pause();
        }
        setExitProgress(1);
        raf = 0;
        return;
      }
      if (ct >= fadeStart) {
        setExitProgress((ct - fadeStart) / VIDEO_FADE_OUT_SECONDS);
      } else {
        setExitProgress(0);
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    v.addEventListener("playing", start);
    v.addEventListener("pause", stop);
    v.addEventListener("ended", stop);
    if (!v.paused) start();

    return () => {
      v.removeEventListener("playing", start);
      v.removeEventListener("pause", stop);
      v.removeEventListener("ended", stop);
      stop();
    };
  }, [enabled]);

  if (!enabled) return null;

  // Width grows 50vw → 100vw; aspect-ratio keeps 16:9 throughout.
  const widthVw = 50 + 50 * progress;
  // Border-radius softens from rounded card to flush-edge fullscreen.
  const radius = 16 * (1 - progress);

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className="relative hidden lg:block bg-dark-900 h-[220vh] select-none"
    >
      <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-hidden">
        {/* Hero backdrop — fades out as video takes over, fades back in on exit */}
        <div
          className="absolute inset-0"
          style={{
            opacity: Math.max(1 - progress, exitProgress),
            willChange: "opacity",
          }}
        >
          <Image
            src={BG_IMAGE}
            alt=""
            fill
            sizes="100vw"
            quality={90}
            priority
            className="object-cover"
          />
        </div>

        {/* Darken overlay — only during entry so the small video card pops.
            Locked off after the video has ended so scrolling back up keeps
            the bg at full brightness. */}
        <div
          className="absolute inset-0 bg-black/40 pointer-events-none"
          style={{
            opacity: (1 - progress) * (1 - exitProgress),
            willChange: "opacity",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.06),transparent_65%)]" />

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)] pointer-events-none"
          style={{
            width: `${widthVw}vw`,
            aspectRatio: "16 / 9",
            borderRadius: `${radius}px`,
            opacity: (videoReady ? 1 : 0) * (1 - exitProgress),
            transition: hasFadedIn ? "none" : "opacity 600ms ease-out",
            willChange: "width, border-radius, opacity",
          }}
        >
          <video
            ref={videoRef}
            src={`${VIDEO}#t=${VIDEO_START_SECONDS}`}
            autoPlay
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            onLoadedMetadata={(e) => {
              if (e.currentTarget.currentTime < VIDEO_START_SECONDS) {
                e.currentTarget.currentTime = VIDEO_START_SECONDS;
              }
            }}
            onPlaying={() => setVideoReady(true)}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Subtle scroll-cue, fades after first nudge */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/70"
          style={{ opacity: Math.max(0, 1 - progress * 4), willChange: "opacity" }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-gold/70 to-transparent" />
        </div>

        {/* Project credit + viewfinder frames — revealed with the bg on exit */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: exitProgress, willChange: "opacity" }}
        >
          <div className="absolute bottom-6 left-6 font-mono text-sm font-semibold tracking-[0.25em] uppercase text-gold-light [text-shadow:0_2px_8px_rgba(0,0,0,0.85),0_0_2px_rgba(0,0,0,0.9)]">
            Modern Farmhouse · Kentucky
          </div>
        </div>
      </div>
    </section>
  );
}
