"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Skip the slide/fade animation on small screens (renders content in its final state immediately). */
  disableOnMobile?: boolean;
}

export default function FadeIn({ children, className, delay = 0, disableOnMobile = false }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        disableOnMobile
          ? `${className ?? ""} max-sm:!opacity-100 max-sm:!transform-none max-sm:!transition-none`
          : className
      }
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 500ms ease ${delay}s, transform 500ms ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
