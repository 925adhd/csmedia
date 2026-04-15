"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import BookingButton from "@/components/BookingButton";
import { CameraIcon } from "@/components/StepIcons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-dark-500/50"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="relative w-28 h-12">
            <Image
              src="/images/cs-media-logo-footer.webp"
              alt="CS Media"
              fill
              className="object-contain"
              sizes="112px"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium uppercase tracking-widest transition-colors ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-dark-100 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <BookingButton
              className="border-gradient rounded-full bg-gold/10 px-6 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-gold transition-all hover:bg-gold/20 cursor-pointer"
            >
              Book Now
            </BookingButton>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-dark-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

    </nav>

    {/* Mobile menu — full screen overlay, rendered outside nav */}
    {mobileOpen && (
      <div className="md:hidden fixed inset-0 top-[80px] bg-dark-900/95 backdrop-blur-md z-[60] overflow-y-auto">
        <div className="border-t border-gold/10" />
        <div className="flex flex-col gap-6 px-8 py-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 text-lg font-medium uppercase tracking-widest transition-colors ${
                  isActive ? "text-gold" : "text-dark-100 hover:text-gold"
                }`}
              >
                <span>{link.label}</span>
                <CameraIcon
                  width={32}
                  height={32}
                  className={isActive ? "opacity-100" : "opacity-0"}
                  aria-hidden
                />
              </Link>
            );
          })}
          <div className="mt-8 flex flex-col items-center gap-3">
            <BookingButton
              className="w-full border-gradient rounded-full bg-gold/10 py-3.5 text-sm font-semibold uppercase tracking-widest text-gold text-center transition-all hover:bg-gold/20"
              onClick={() => setMobileOpen(false)}
            >
              Book a Shoot
            </BookingButton>
            <a
              href="sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F"
              className="text-sm text-dark-200 hover:text-gold transition-colors"
              onClick={() => {
                if (typeof window !== "undefined" && typeof window.gtag === "function") {
                  window.gtag("event", "click_to_text", { event_category: "Contact", event_label: "Navbar Mobile" });
                }
              }}
            >
              Or text <span className="text-gold/70">(270) 307-0173</span>
            </a>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
