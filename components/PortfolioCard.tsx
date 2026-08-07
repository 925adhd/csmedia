"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { PortfolioProject } from "@/lib/portfolio";
import VideoLightbox from "@/components/VideoLightbox";

export default function PortfolioCard({ project }: { project: PortfolioProject }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Video cards promise instant playback with the play icon below — deliver on
  // that literally (lightbox, no navigation) instead of sending people to the
  // text-first detail page and making them find a second play button. The
  // detail page still exists and is still a real, crawlable link (SEO doesn't
  // need a human to click through it) — plain clicks just get intercepted here;
  // ctrl/cmd/shift-click and middle-click fall through to normal link behavior
  // so "open in new tab" still works.
  function handleClick(e: React.MouseEvent) {
    if (project.videoSrc && e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      setLightboxOpen(true);
    }
  }

  return (
    <article>
    <Link href={`/portfolio/${project.slug}`} className="group block" onClick={handleClick}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-dark-700">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Gold shimmer overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-gold/10 via-transparent to-transparent" />

        {/* Play icon for video projects */}
        {project.videoSrc && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-dark-900/60 border border-gold/40 flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/20 group-hover:border-gold/70">
              <svg className="w-5 h-5 text-gold ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        </div>

        {/* Corner accent */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </div>
    </Link>
    {lightboxOpen && project.videoSrc && (
      <VideoLightbox
        title={project.title}
        videoSrc={project.videoSrc}
        poster={project.heroImage}
        onClose={() => setLightboxOpen(false)}
      />
    )}
    </article>
  );
}
