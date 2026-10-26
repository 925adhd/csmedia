"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

function subscribe(onChange: () => void) {
  window.addEventListener("cookie-consent-update", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("cookie-consent-update", onChange);
    window.removeEventListener("storage", onChange);
  };
}

// Hidden on the server and until hydration, then shown only if no choice is stored.
function needsConsent() {
  return !localStorage.getItem("cookie-consent");
}

export default function CookieNotice() {
  const visible = useSyncExternalStore(subscribe, needsConsent, () => false);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-update"));
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    window.dispatchEvent(new Event("cookie-consent-update"));
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark-800 border-t border-dark-500/30 p-4 sm:p-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-dark-200 text-center sm:text-left">
          This site uses cookies and analytics to improve your experience. See
          our{" "}
          <Link href="/privacy" className="text-gold underline hover:text-gold/80">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/cookies" className="text-gold underline hover:text-gold/80">
            Cookie Policy
          </Link>
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
            className="shrink-0 rounded-full border border-gold/30 px-5 py-2 text-sm font-medium text-gold transition-all hover:border-gold/50 hover:bg-gold/10"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
