"use client";

import Image from "next/image";
import { useState, useRef, useId, useEffect } from "react";

/** Custom window event so any two VideoPlayer instances on the same page — even in
    unrelated components — stop each other rather than playing over one another. */
const VIDEO_PLAY_EVENT = "cs-video-play";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  posterAlt?: string;
  aspectRatio?: string;
  className?: string;
  /** WebVTT captions path — required for WCAG 1.2.2 AA when the video has spoken audio. */
  captionsSrc?: string;
}

export default function VideoPlayer({
  src,
  poster,
  posterAlt = "Video thumbnail",
  aspectRatio = "aspect-[9/16]",
  className = "",
  captionsSrc,
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const id = useId();

  function handlePlay() {
    setPlaying(true);
    // Small delay so the video element renders before we call play
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  }

  // Pause this instance whenever a different VideoPlayer starts — the native onPlay
  // below broadcasts our own id, so only videos other than the one just started react.
  useEffect(() => {
    function handleOtherPlay(e: Event) {
      const startedId = (e as CustomEvent<string>).detail;
      if (startedId !== id) {
        videoRef.current?.pause();
      }
    }
    window.addEventListener(VIDEO_PLAY_EVENT, handleOtherPlay);
    return () => window.removeEventListener(VIDEO_PLAY_EVENT, handleOtherPlay);
  }, [id]);

  return (
    <div className={`relative ${aspectRatio} ${className}`}>
      {!playing ? (
        <>
          {/* Thumbnail (only when a poster is provided) */}
          {poster ? (
            <>
              <Image
                src={poster}
                alt={posterAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 320px, 460px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            </>
          ) : (
            <div className="absolute inset-0 bg-dark-900" />
          )}

          {/* Play button */}
          <button
            onClick={handlePlay}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gold/90 shadow-[0_4px_30px_rgba(201,169,110,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:shadow-[0_4px_40px_rgba(201,169,110,0.6)]">
              <svg
                className="w-8 h-8 text-dark-900 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>

        </>
      ) : (
        <video
          ref={videoRef}
          controls
          playsInline
          onPlay={() => window.dispatchEvent(new CustomEvent(VIDEO_PLAY_EVENT, { detail: id }))}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
          {captionsSrc && (
            <track
              kind="captions"
              src={captionsSrc}
              srcLang="en"
              label="English"
              default
            />
          )}
        </video>
      )}
    </div>
  );
}
