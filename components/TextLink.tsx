"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

const subscribeNoop = () => () => {};

const SMS_URL = "sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F";

interface TextLinkProps {
  className?: string;
  children: React.ReactNode;
}

function trackEvent(action: string, label: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: "Contact",
      event_label: label,
    });
  }
}

export default function TextLink({ className, children }: TextLinkProps) {
  // Server render and hydration use the /book link; the client then swaps to SMS on phones.
  const isMobile = useSyncExternalStore(
    subscribeNoop,
    () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    () => false
  );

  if (isMobile) {
    return (
      <a
        href={SMS_URL}
        className={className}
        onClick={() => trackEvent("click_to_text", "TextLink CTA")}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href="/book" className={className}>
      {children}
    </Link>
  );
}
