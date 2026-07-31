"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

interface Testimonial {
  quote: string;
  name: string;
  service: string;
  avatar?: string;
}

export default function TestimonialCarousel({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoplay || paused) return;
    // Give longer quotes more time on screen instead of a flat interval.
    const wordCount = testimonials[active].quote.split(/\s+/).length;
    const duration = Math.min(14000, Math.max(5500, wordCount * 280 + 2000));
    const timeout = setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, duration);
    return () => clearTimeout(timeout);
  }, [autoplay, paused, active, testimonials]);

  const current = testimonials[active];

  return (
    <div
      className="max-w-2xl mx-auto text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <FadeIn key={active}>
        <div className="h-[10rem] sm:h-[8rem] flex items-center justify-center overflow-hidden">
          <p className="text-lg sm:text-xl text-white leading-relaxed italic">
            &ldquo;{current.quote}&rdquo;
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          {current.avatar ? (
            <Image
              src={current.avatar}
              alt={current.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover border border-gold/30 shrink-0"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
              <span className="text-gold font-semibold text-sm">{current.name.charAt(0)}</span>
            </div>
          )}
          <div className="text-left">
            <p className="text-sm font-semibold text-white">{current.name}</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold/80">{current.service}</p>
          </div>
        </div>
      </FadeIn>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
          aria-label="Previous testimonial"
          className="h-8 w-8 rounded-full border border-dark-500/40 flex items-center justify-center text-dark-200 hover:text-gold hover:border-gold/40 transition-colors cursor-pointer"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="flex items-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === active ? "w-6 bg-gold" : "w-1.5 bg-dark-500/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setActive((active + 1) % testimonials.length)}
          aria-label="Next testimonial"
          className="h-8 w-8 rounded-full border border-dark-500/40 flex items-center justify-center text-dark-200 hover:text-gold hover:border-gold/40 transition-colors cursor-pointer"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
