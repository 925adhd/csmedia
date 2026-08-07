"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import BookingButton from "@/components/BookingButton";

interface VideoLightboxProps {
  title: string;
  videoSrc: string;
  poster: string;
  onClose: () => void;
}

export default function VideoLightbox({ title, videoSrc, poster, onClose }: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    // Same play-after-mount pattern as VideoPlayer/CircularShowcase — calling
    // .play() synchronously on mount can lose the click's user-gesture window
    // in some browsers, so a short delay after the element renders is safer.
    const t = setTimeout(() => videoRef.current?.play().catch(() => {}), 50);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} video`}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-4 right-4 md:top-6 md:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-dark-900/80 text-white hover:bg-dark-800 transition-colors cursor-pointer"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div
        className="flex flex-col items-center gap-4 max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          controls
          playsInline
          className="max-h-[75vh] max-w-full rounded-xl shadow-2xl bg-black"
        />
        {/* Without this, closing the lightbox was a dead end — the detail page's
            "Book a Video Shoot" CTA never got seen by anyone who played the video
            from the grid instead of navigating to it. */}
        <BookingButton className="inline-flex items-center gap-1.5 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest text-dark-900 transition-colors hover:bg-gold-light cursor-pointer">
          Book a Shoot Like This
          <ArrowRight className="h-3.5 w-3.5" />
        </BookingButton>
      </div>
    </div>
  );
}
