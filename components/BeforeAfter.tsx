"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  // Touch events: only the handle initiates drag, so scrolling works on the image
  useEffect(() => {
    const handle = handleRef.current;
    if (!handle) return;

    function onTouchStart(e: TouchEvent) {
      e.preventDefault(); // Prevent scroll only when touching the handle
      dragging.current = true;
      setIsDragging(true);
      const touch = e.touches[0];
      updatePosition(touch.clientX);
    }

    // Listen on window so dragging continues even if finger moves off handle
    function onTouchMove(e: TouchEvent) {
      if (!dragging.current) return;
      e.preventDefault();
      const touch = e.touches[0];
      updatePosition(touch.clientX);
    }

    function onTouchEnd() {
      dragging.current = false;
      setIsDragging(false);
    }

    handle.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      handle.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [updatePosition]);

  // Mouse events for desktop — only the handle initiates drag
  useEffect(() => {
    const handle = handleRef.current;
    if (!handle) return;

    function onMouseDown(e: MouseEvent) {
      e.preventDefault();
      dragging.current = true;
      setIsDragging(true);
      updatePosition(e.clientX);
    }

    function onMouseMove(e: MouseEvent) {
      if (!dragging.current) return;
      updatePosition(e.clientX);
    }

    function onMouseUp() {
      dragging.current = false;
      setIsDragging(false);
    }

    handle.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      handle.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-xl overflow-hidden select-none border border-dark-500/30"
    >
      {/* After image (full background) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 768px) 100vw, 50vw"
        draggable={false}
      />

      {/* Before image (clipped via clip-path) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gold z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle — touch target for mobile dragging */}
        <div
          ref={handleRef}
          role="slider"
          tabIndex={0}
          aria-label="Before/after comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`Showing ${Math.round(position)}% before image, ${100 - Math.round(position)}% after image`}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              setPosition((p) => Math.max(0, p - (e.shiftKey ? 10 : 2)));
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              setPosition((p) => Math.min(100, p + (e.shiftKey ? 10 : 2)));
            } else if (e.key === "Home") {
              e.preventDefault();
              setPosition(0);
            } else if (e.key === "End") {
              e.preventDefault();
              setPosition(100);
            }
          }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-900/80 border-2 border-gold flex items-center justify-center backdrop-blur-sm pointer-events-auto touch-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        >
          <svg aria-hidden="true" className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7M9 19l7-7-7-7" />
          </svg>
        </div>
      </div>

      {/* Labels — fade out after 2s */}
      <div
        className="absolute top-4 left-4 z-20 rounded-full bg-dark-900/70 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-dark-500/30 pointer-events-none"
        style={{
          opacity: isDragging && position < 50 ? 0 : 1,
          transition: isDragging && position < 50 ? "opacity 0.5s" : "opacity 0.05s",
        }}
      >
        Before
      </div>
      <div
        className="absolute top-4 right-4 z-20 rounded-full bg-gold/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-dark-900 pointer-events-none"
        style={{
          opacity: isDragging && position > 50 ? 0 : 1,
          transition: isDragging && position > 50 ? "opacity 0.5s" : "opacity 0.05s",
        }}
      >
        After
      </div>
    </div>
  );
}
