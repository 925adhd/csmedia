"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import Image from "next/image";
import { animate, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const MAX_TILT = 14;

// Where the drone starts (relative to its own resting slot) so it visually
// rises up from below her before settling into its hover spot near her head.
const DRONE_LAUNCH_OFFSET = { x: -20, y: 440, scale: 0.5, rotate: -6 };

/**
 * Layered cutout scene (drone / Cheris), each layer sitting at a different
 * CSS translateZ so the shared perspective gives it depth. On mount (once in
 * view) the drone rises up and settles into its hover position near her
 * head. Only the drone reacts to the pointer afterward — a 3D tilt on top of
 * its own continuous idle bob (globals.css) — she stays put.
 */
export default function DepthPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const droneEntranceRef = useRef<HTMLDivElement>(null);
  const [entranceDone, setEntranceDone] = useState(false);
  const [inView, setInView] = useState(false);

  // Lazy-initialized (not an effect) since this only gates pointer-handler
  // behavior, not rendered markup — no hydration mismatch risk from reading
  // window during the client's first render.
  const [tiltEnabled] = useState(
    () => typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 16, mass: 0.4 };
  const rotateY = useSpring(useTransform(pointerX, [-1, 1], [-MAX_TILT, MAX_TILT]), springConfig);
  const rotateX = useSpring(useTransform(pointerY, [-1, 1], [MAX_TILT * 0.6, -MAX_TILT * 0.6]), springConfig);

  // Don't launch the drone until the scene has actually scrolled into view.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const droneEl = droneEntranceRef.current;
    if (!droneEl) return;

    let cancelled = false;

    (async () => {
      if (!tiltEnabled) {
        // Reduced motion: skip straight to the resting composition, no rise.
        droneEl.style.transform = "none";
        droneEl.style.opacity = "1";
        if (!cancelled) setEntranceDone(true);
        return;
      }

      // Drone rises up and settles into its hover slot.
      await animate(
        droneEl,
        {
          x: [DRONE_LAUNCH_OFFSET.x, 0],
          y: [DRONE_LAUNCH_OFFSET.y, 0],
          scale: [DRONE_LAUNCH_OFFSET.scale, 1],
          rotate: [DRONE_LAUNCH_OFFSET.rotate, 0],
          opacity: [0, 1],
        },
        { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
      );
      if (cancelled) return;

      setEntranceDone(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [inView, tiltEnabled]);

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!tiltEnabled || e.pointerType === "touch") return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative mx-auto w-full max-w-[360px] aspect-[10/19] lg:ml-auto"
      style={{ perspective: "1400px" }}
    >
      {/* Deepest layer — warm ambient glow grounding the scene behind her */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[38%] h-[75%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.12] blur-[70px]"
        style={{ transform: "translateZ(-140px)" }}
      />

      <div style={{ transformStyle: "preserve-3d" }} className="relative h-full w-full">
        {/* Contact shadow */}
        <div
          aria-hidden
          className="absolute bottom-[6%] left-1/2 h-5 w-[50%] -translate-x-1/2 rounded-full bg-black/60 blur-xl"
          style={{ transform: "translateZ(-10px)" }}
        />

        {/* Main figure — Cheris with her camera rig. Nudged right on mobile
            (where the container is full-width) so she reads centered against
            the drone's slot rather than dead-center; reverts once there's
            room. The depth translateZ and the responsive nudge each need
            their own element since both would otherwise fight over `transform`. */}
        <div className="absolute inset-x-0 -bottom-[2%] mx-auto w-[78%]" style={{ transform: "translateZ(10px)" }}>
          <div className="-translate-y-5 translate-x-[6%] sm:translate-x-0 sm:translate-y-0">
            <Image
              src="/images/peace.png"
              alt="Cheris Chanthavong, owner of CS Media, with her camera and tripod"
              width={501}
              height={1065}
              className="h-auto w-full select-none"
              draggable={false}
              priority
            />
          </div>
        </div>

        {/* Drone — rises up, settles into hover near her head. Shifted right and
            down on mobile (where it read too close to the left edge with too
            much dead space above her); reverts to its original spot once
            there's more width to work with. */}
        <div className="absolute left-[46%] sm:left-[10%] top-[8%] sm:top-[2%] w-[32%]" style={{ transform: "translateZ(150px)" }}>
          <div
            ref={droneEntranceRef}
            style={{
              opacity: 0,
              transform: `translate(${DRONE_LAUNCH_OFFSET.x}px, ${DRONE_LAUNCH_OFFSET.y}px) scale(${DRONE_LAUNCH_OFFSET.scale}) rotate(${DRONE_LAUNCH_OFFSET.rotate}deg)`,
            }}
          >
            {/* Only the drone tilts toward the pointer */}
            <motion.div style={{ rotateX, rotateY }}>
              <div className={entranceDone ? "animate-depth-float" : ""}>
                <Image
                  src="/images/drone.png"
                  alt=""
                  width={171}
                  height={75}
                  className="h-auto w-full select-none"
                  draggable={false}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
