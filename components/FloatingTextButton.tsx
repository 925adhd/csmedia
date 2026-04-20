"use client";

const SMS_URL = "sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F";

export default function FloatingTextButton() {
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
      onClick={handleClick}
      style={{ bottom: "calc(1.5rem + var(--sticky-book-bar, 0px))" }}
      className="fixed right-6 z-40 flex md:hidden items-center justify-center rounded-full bg-dark-800 border border-gold/30 h-14 w-14 text-gold shadow-lg shadow-black/40 transition-all hover:scale-110 hover:bg-dark-700 active:scale-95"
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    </a>
  );
}
