"use client";

import { useState, useEffect } from "react";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark-800 border-t border-dark-500/30 p-4 sm:p-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-dark-200 text-center sm:text-left">
          This site uses cookies and analytics to improve your experience. By
          continuing to use this site, you agree to our{" "}
          <a href="/privacy" className="text-gold hover:underline">
            Privacy Policy
          </a>
          .
        </p>
        <button
          onClick={accept}
          className="shrink-0 rounded-full bg-gold/10 border border-gold/20 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
