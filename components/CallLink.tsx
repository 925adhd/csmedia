"use client";

interface CallLinkProps {
  className?: string;
  label: string;
  children: React.ReactNode;
}

export default function CallLink({ className, label, children }: CallLinkProps) {
  return (
    <a
      href="tel:+12703070173"
      className={className}
      onClick={() => {
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "click_to_call", {
            event_category: "Contact",
            event_label: label,
          });
        }
      }}
    >
      {children}
    </a>
  );
}
