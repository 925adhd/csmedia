"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
interface SimpleTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
}

export function SimpleTestimonials({ testimonials, autoplay = false }: SimpleTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(() => Math.floor(testimonials.length / 2));
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const active = testimonials[activeIndex];

  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  function selectIndex(index: number) {
    setActiveIndex(index);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="flex justify-center gap-4">
        {testimonials.map((t, index) => (
          <button
            key={t.src}
            onClick={() => selectIndex(index)}
            aria-label={`Show testimonial from ${t.name}`}
            aria-current={index === activeIndex}
            className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full transition-all duration-300 cursor-pointer sm:h-16 sm:w-16"
            style={{
              outline: index === activeIndex ? "2px solid #c9a96e" : "2px solid transparent",
              outlineOffset: 3,
              opacity: index === activeIndex ? 1 : 0.5,
              transform: index === activeIndex ? "scale(1.05)" : "scale(1)",
            }}
          >
            <Image src={t.src} alt={t.name} fill sizes="64px" className="object-cover" />
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mt-8 text-center"
        >
          <h3 className="font-bold text-[#f7f7ff]" style={{ fontSize: "1.15rem" }}>
            {active.name}
          </h3>
          <p className="mt-0.5 text-[#c9a96e]" style={{ fontSize: "0.7rem" }}>
            {active.designation}
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#e5e5e5]" style={{ fontSize: "1rem" }}>
            {active.quote}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SimpleTestimonials;
