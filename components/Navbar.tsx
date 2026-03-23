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
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block mt-4 border-gradient rounded-full bg-gold/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gold text-center"
          >
            Book Now
          </Link>
          <div className="mt-auto pt-8 border-t border-dark-500/30">
            <a
              href="tel:+12703070173"
              className="text-gold font-mono tracking-wider text-sm"
            >
              (270) 307-0173
            </a>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
