"use client";

import { useEffect, useState } from "react";

const SMS_URL = "sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F";

export default function FloatingTextButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const footer = document.querySelector("footer");
    const onScroll = () => {
      // Hide once the footer comes into view — it already has its own "Text
      // us instead" link, and the footer's own content (e.g. the Contact
      // column, which sits in the same right-anchored corner as this button)
      // would otherwise get covered by it.
      const footerVisible = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      if (hero) {
        // Reveal once hero has fully passed under the fixed 80px nav
        setVisible(hero.getBoundingClientRect().bottom < 80 && !footerVisible);
      } else {
        setVisible(window.scrollY > 300 && !footerVisible);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "click_to_text", {
        event_category: "Contact",
        event_label: "Mobile Sticky CTA",
      });
    }
  }

  return (
    <a
      href={SMS_URL}
      aria-label="Text CS Media"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={handleClick}
      style={{ bottom: "calc(1.5rem + var(--sticky-book-bar, 0px))" }}
      className={`fixed right-6 z-40 flex md:hidden h-12 items-center justify-center rounded-full bg-dark-800 border border-gold/30 px-4 text-gold shadow-lg shadow-black/40 transition-all duration-300 hover:scale-105 hover:bg-dark-700 active:scale-95 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="text-xs font-semibold uppercase tracking-widest whitespace-nowrap">Text Us</span>
    </a>
  );
}
