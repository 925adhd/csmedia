"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ShowcaseItem {
  image: string;
  video?: string;
  /** Alternative to `video` — cycles through these stills like a slideshow while active, then
      advances to the next item, for categories (e.g. photography) that have no clip to show. */
  images?: string[];
  /** Small SEO-friendly category label shown above the title (e.g. "Real Estate Photography"
      above a "Photography" title) — deliberately distinct wording from `title` so it doesn't
      just repeat the headline. */
  eyebrow?: string;
  title: string;
  description: string;
  disclaimer?: string;
  href: string;
  /** Overrides the shared `linkLabel` with service-specific CTA copy (e.g. "Explore Drone Services"). */
  ctaLabel?: string;
}

function ImageSlideshow({
  images,
  alt,
  style,
  onCycleComplete,
}: {
  images: string[];
  alt: string;
  style: React.CSSProperties;
  onCycleComplete?: () => void;
}) {
  const [frame, setFrame] = useState(0);
  const [prevImages, setPrevImages] = useState(images);

  // Reset to frame 0 when a new slideshow's images arrive — adjusted during render
  // (not an effect) per React's guidance for resetting state on a prop change.
  if (images !== prevImages) {
    setPrevImages(images);
    setFrame(0);
  }

  useEffect(() => {
    const isLast = frame === images.length - 1;
    // Linger noticeably longer on the last frame than the mid-cycle frames so the
    // final image has a moment to register before the card auto-advances.
    const duration = isLast ? 1900 : 900;
    const timeout = setTimeout(() => {
      if (isLast) onCycleComplete?.();
      else setFrame((f) => f + 1);
    }, duration);
    return () => clearTimeout(timeout);
  }, [frame, images, onCycleComplete]);

  return (
    <div
      className="absolute inset-0 h-full w-full overflow-hidden rounded-3xl bg-dark-900 shadow-[0_10px_30px_rgba(0,0,0,0.4)] select-none"
      style={style}
    >
      {/* Overlapping crossfade (not fade-out-then-fade-in) — the incoming frame animates in on
          top while the outgoing one is still visible underneath, so there's never a moment where
          the card is see-through to whatever is stacked behind it (the neighboring cards). */}
      <AnimatePresence>
        <motion.div
          key={frame}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[frame]}
            alt={alt}
            fill
            draggable={false}
            sizes="(min-width: 768px) 33vw, 90vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
interface CircularShowcaseProps {
  items: ShowcaseItem[];
  autoplay?: boolean;
  linkLabel?: string;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 72;
  const maxGap = 98;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export function CircularShowcase({ items, autoplay = true, linkLabel = "Learn more" }: CircularShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  // Once the user manually navigates (arrow, dot, or swipe), stop auto-advancing entirely —
  // a finished video just sits frozen on its last frame until they swipe/click again.
  const [hasInteracted, setHasInteracted] = useState(false);

  const itemsLength = useMemo(() => items.length, [items]);
  const activeItem = useMemo(() => items[activeIndex], [activeIndex, items]);

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Don't start playing anything until the section is actually scrolled into view — otherwise
  // the first video burns bandwidth/decode time autoplaying off-screen before anyone sees it.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // No fixed timer — video items advance when their clip finishes playing (onEnded on the
  // <video> below). Only a still (no-video) item needs a fallback timer, since there's no
  // natural "end" for a static image.
  // Auto-advance (video onEnded / the image fallback timer below) — does NOT mark the user as
  // having interacted, so it keeps auto-advancing item after item until they actually take
  // control (arrow, dot, or swipe).
  const advanceAuto = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % itemsLength);
  }, [itemsLength]);

  useEffect(() => {
    if (!autoplay || !isInView || hasInteracted || activeItem.video || (activeItem.images && activeItem.images.length > 1)) return;
    const timeout = setTimeout(advanceAuto, 5000);
    return () => clearTimeout(timeout);
  }, [autoplay, isInView, hasInteracted, activeItem, itemsLength, advanceAuto]);

  const handleNext = useCallback(() => {
    setHasInteracted(true);
    setActiveIndex((prev) => (prev + 1) % itemsLength);
  }, [itemsLength]);

  const handlePrev = useCallback(() => {
    setHasInteracted(true);
    setActiveIndex((prev) => (prev - 1 + itemsLength) % itemsLength);
  }, [itemsLength]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + itemsLength) % itemsLength === index;
    const isRight = (activeIndex + 1) % itemsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div ref={sectionRef} className="relative mx-auto w-full max-w-7xl p-8 md:translate-x-16">
      {/* Arrows — desktop/pointer only. Mirrored around the image stack (not the text
          column): left sits ~2px off its left edge, right ~22px off its right edge
          (some breathing room, rather than hugging it like the left one does).
          The right offset is computed from the grid's own math (50% of this container
          minus half the column gap minus button width minus the extra gap) so it
          tracks the image column's actual right edge at any width instead of a
          viewport-relative guess.
          Touch devices swipe the image stack instead. */}
      <button
        onClick={handlePrev}
        onMouseEnter={() => setHoverPrev(true)}
        onMouseLeave={() => setHoverPrev(false)}
        aria-label="Previous service"
        className="hidden md:flex absolute -left-4 top-1/2 z-10 h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border-none transition-colors duration-300 cursor-pointer"
        style={{ backgroundColor: hoverPrev ? "#c9a96e" : "#141414" }}
      >
        <ChevronLeft size={26} color="#f1f1f7" />
      </button>
      <button
        onClick={handleNext}
        onMouseEnter={() => setHoverNext(true)}
        onMouseLeave={() => setHoverNext(false)}
        aria-label="Next service"
        className="hidden md:flex absolute left-[calc(50%-16px)] top-1/2 z-10 h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border-none transition-colors duration-300 cursor-pointer"
        style={{ backgroundColor: hoverNext ? "#c9a96e" : "#141414" }}
      >
        <ChevronRight size={26} color="#f1f1f7" />
      </button>

      {/* Swipe is on the whole row (image + text), not just the image — on mobile,
          people naturally try to swipe on the text/caption too, not just the photo. */}
      <motion.div
        className="grid gap-20 touch-pan-y md:grid-cols-2 md:gap-x-[76px]"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.6}
        onDragEnd={(_, info) => {
          if (info.offset.x < -60 || info.velocity.x < -400) handleNext();
          else if (info.offset.x > 60 || info.velocity.x > 400) handlePrev();
        }}
      >
        <div
          ref={imageContainerRef}
          className="relative h-80 sm:h-96 md:h-[420px]"
          style={{ perspective: "1000px" }}
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            // Only the active item plays video, and only once the section has scrolled into
            // view — the side-peek and hidden items stay as a still poster frame, so at most
            // one clip is ever decoding at a time, and nothing plays off-screen.
            if (item.video && isActive && isInView) {
              return (
                <video
                  key={item.image}
                  ref={(el) => {
                    // iOS Safari sometimes ignores the `muted` JSX attribute's timing and
                    // blocks autoplay, leaving the poster + play icon showing until tapped.
                    // Setting `.muted` as a real DOM property (not just the attribute) before
                    // calling `.play()` makes autoplay actually fire without a manual tap.
                    if (!el) return;
                    el.muted = true;
                    el.play().catch(() => {});
                  }}
                  src={item.video}
                  poster={item.image}
                  autoPlay
                  muted
                  playsInline
                  draggable={false}
                  // Once the user has taken manual control, a finished clip just freezes on its
                  // last frame (the browser's default for a non-looping video) instead of
                  // auto-advancing — no onEnded handler needed for that case.
                  onEnded={autoplay && !hasInteracted ? advanceAuto : undefined}
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover shadow-[0_10px_30px_rgba(0,0,0,0.4)] select-none"
                  style={getImageStyle(index)}
                />
              );
            }
            if (item.images && item.images.length > 1 && isActive && isInView) {
              return (
                <ImageSlideshow
                  key={item.image}
                  images={item.images}
                  alt={item.title}
                  style={getImageStyle(index)}
                  onCycleComplete={autoplay && !hasInteracted ? advanceAuto : undefined}
                />
              );
            }
            // Static poster state (inactive/peek, or the active item before it's scrolled
            // into view) — plain poster, no play-button badge at all. Videos autoplay on
            // their own the moment they're active, so there's never a tap for it to promise.
            return (
              <div
                key={item.image}
                className="absolute inset-0 select-none overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                style={getImageStyle(index)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  draggable={false}
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:min-h-[248px]"
            >
              {/* Eyebrow label — a distinct SEO category phrase (not a repeat of the
                  title below it) + short gold divider, echoing the mockup's category
                  tag sitting above the headline. */}
              {activeItem.eyebrow && (
                <>
                  <span className="block text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-gold">
                    {activeItem.eyebrow}
                  </span>
                  <span className="mt-2 block h-px w-10 bg-gold/50" />
                </>
              )}
              <h3 className="mt-4 mb-3 text-4xl font-bold text-white">{activeItem.title}</h3>
              <motion.p className="leading-relaxed text-white/80" style={{ fontSize: "1.05rem" }}>
                {activeItem.description.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut", delay: 0.025 * i }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
              {activeItem.disclaimer && (
                <p className="mt-2 text-xs italic text-dark-300">{activeItem.disclaimer}</p>
              )}
              <Link
                href={activeItem.href}
                className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.25em] text-gold/70 hover:text-gold transition-colors"
              >
                {activeItem.ctaLabel ?? linkLabel}
                <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Dots — small slide indicator beneath the CTA; implies swipeable content
              on touch devices and is also directly clickable at every size. */}
          <div className="flex items-center gap-2 pt-4" role="tablist" aria-label="Choose service">
            {items.map((item, index) => (
              <button
                key={item.image}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show ${item.title}`}
                onClick={() => {
                  setHasInteracted(true);
                  setActiveIndex(index);
                }}
                className="h-2 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: index === activeIndex ? 20 : 8,
                  backgroundColor: index === activeIndex ? "#c9a96e" : "#3a3a3a",
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CircularShowcase;
