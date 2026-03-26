"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
          <Link href="/" className="relative w-16 h-12">
            <Image
              src="/images/logo.png"
              alt="CS Media"
              fill
              className="object-contain"
              sizes="64px"
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
            <Link
              href="/contact"
              className="border-gradient rounded-full bg-gold/10 px-6 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-gold transition-all hover:bg-gold/20"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-dark-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-lg font-medium uppercase tracking-widest transition-colors ${
                pathname === link.href
                  ? "text-gold"
                  : "text-dark-100 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 mt-6">
            <a
              href="tel:+12703070173"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold shadow-md transition-colors hover:bg-gold/20"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call
            </a>
            <a
              href="sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F"
              className="inline-flex items-center gap-2 rounded-full border border-dark-400/50 bg-dark-800 px-5 py-2.5 text-sm font-semibold text-dark-100 shadow-md transition-colors hover:bg-dark-700"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              Text
            </a>
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-block text-sm text-gold/70 underline underline-offset-4 decoration-gold/30 hover:text-gold transition-colors"
          >
            Or send a message online
          </Link>
        </div>
      </div>
    )}
    </>
  );
}
