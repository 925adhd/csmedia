"use client";

import Link from "next/link";

const SMS_URL = "sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F";

interface TextLinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function TextLink({ className, children }: TextLinkProps) {
  const isMobile = typeof navigator !== "undefined" && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <a href={SMS_URL} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href="/contact" className={className}>
      {children}
    </Link>
  );
}
