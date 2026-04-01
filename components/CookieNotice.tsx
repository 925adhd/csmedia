"use client";

import { useState, useEffect } from "react";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-update"));
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-update"));
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark-800 border-t border-dark-500/30 p-4 sm:p-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-dark-200 text-center sm:text-left">
          This site uses cookies and analytics to improve your experience. See
          our{" "}
          <a href="/privacy" className="text-gold underline hover:text-gold/80">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/cookies" className="text-gold underline hover:text-gold/80">
            Cookie Policy
          </a>
          .
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={decline}
            className="shrink-0 rounded-full border border-dark-400 px-5 py-2 text-sm font-medium text-dark-200 transition-all hover:border-dark-300 hover:text-white"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="shrink-0 rounded-full bg-gold/10 border border-gold/20 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
