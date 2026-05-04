"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const INTERACTION_EVENTS = ["scroll", "click", "touchstart", "keydown", "mousemove"] as const;
const FALLBACK_DELAY_MS = 5000;

export default function GoogleAnalytics() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;

    let disarm: (() => void) | undefined;

    const arm = () => {
      const trigger = () => setLoad(true);
      INTERACTION_EVENTS.forEach((e) =>
        window.addEventListener(e, trigger, { once: true, passive: true })
      );
      const timer = window.setTimeout(trigger, FALLBACK_DELAY_MS);
      disarm = () => {
        INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, trigger));
        window.clearTimeout(timer);
      };
    };

    const tryArm = () => {
      if (localStorage.getItem("cookie-consent") === "accepted") {
        arm();
        return true;
      }
      return false;
    };

    if (tryArm()) {
      return () => disarm?.();
    }

    const onConsentUpdate = () => {
      if (tryArm()) {
        window.removeEventListener("cookie-consent-update", onConsentUpdate);
      }
    };
    window.addEventListener("cookie-consent-update", onConsentUpdate);

    return () => {
      window.removeEventListener("cookie-consent-update", onConsentUpdate);
      disarm?.();
    };
  }, []);

  if (!GA_ID || !load) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
