"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  /** CSS selector for the element the bar should wait for before appearing. */
  revealAfter?: string;
  /** Fallback scroll-Y threshold if selector isn't found. */
  scrollThreshold?: number;
}

export default function MobileStickyBookBar({
  revealAfter = "[data-pricing-grid]",
  scrollThreshold = 600,
}: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.querySelector(revealAfter);
    const onScroll = target
      ? () => setVisible(target.getBoundingClientRect().bottom < 0)
      : () => setVisible(window.scrollY > scrollThreshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealAfter, scrollThreshold]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--sticky-book-bar",
      visible ? "72px" : "0px",
    );
    return () => {
      document.documentElement.style.setProperty("--sticky-book-bar", "0px");
    };
  }, [visible]);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-30 border-t border-gold/20 bg-dark-900/95 backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div className="leading-tight">
          <div className="text-[10px] font-mono uppercase tracking-widest text-gold/70">
            Packages from
          </div>
          <div className="text-lg font-bold text-white">$85</div>
        </div>
        <Link
          href="/book"
          className="rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-dark-900 transition-colors hover:bg-gold-light"
          onClick={() => {
            if (typeof window !== "undefined" && typeof window.gtag === "function") {
              window.gtag("event", "click_book", {
                event_category: "Booking",
                event_label: "Mobile Sticky CTA",
              });
            }
          }}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
