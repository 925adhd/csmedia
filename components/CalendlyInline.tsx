"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/kara-studio925/30min";

export default function CalendlyInline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    const loadWidget = () => {
      if (containerRef.current && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: containerRef.current,
        });
      }
    };

    if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = loadWidget;
      document.head.appendChild(script);
    } else {
      loadWidget();
    }

    // Watch for iframe load to hide spinner
    const observer = new MutationObserver(() => {
      const iframe = containerRef.current?.querySelector("iframe");
      if (iframe) {
        iframe.addEventListener("load", () => setLoading(false));
        setLoading(false);
        observer.disconnect();
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }
    const timeout = setTimeout(() => setLoading(false), 5000);
    return () => { observer.disconnect(); clearTimeout(timeout); };
  }, []);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-start justify-center pt-24 bg-dark-900 z-10 rounded-2xl">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-full border-2 border-dark-500" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold animate-spin" />
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold/70">Loading calendar</span>
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        className="rounded-2xl overflow-hidden"
        style={{ minWidth: "320px", height: "900px" }}
      />
    </div>
  );
}
