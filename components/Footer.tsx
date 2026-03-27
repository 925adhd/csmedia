import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-500/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="relative inline-block w-20 h-14">
              <Image
                src="/images/logo.png"
                alt="CS Media"
                fill
                className="object-contain"
                sizes="80px"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-dark-200">
              Elevated real estate media. Professional drone photography, video,
              and editing services for agents and property owners.
            </p>
            <div className="mt-6 flex items-center gap-2 text-gold text-sm font-mono tracking-wider">
              <span className="inline-block w-8 h-px bg-gold/50" />
              LICENSED TO DRONE
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="inline-block py-1.5 text-dark-200 hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="inline-block py-1.5 text-dark-200 hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="inline-block py-1.5 text-dark-200 hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/about" className="inline-block py-1.5 text-dark-200 hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/contact" className="inline-block py-1.5 text-dark-200 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="mailto:cscreatesmediallc@gmail.com" className="inline-block py-1.5 text-dark-200 hover:text-gold transition-colors">
                  cscreatesmediallc@gmail.com
                </a>
              </li>
              <li>
                <a href="sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F" className="inline-block py-1.5 text-dark-200 hover:text-gold transition-colors font-mono">
                  270.307.0173
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-500/30 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-dark-200">
            &copy; {new Date().getFullYear()} CS Media. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/privacy" className="text-xs text-dark-200 hover:text-gold transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-dark-200 hover:text-gold transition-colors whitespace-nowrap">
              Terms of Service
            </Link>
            <p className="text-xs text-dark-200 font-mono tracking-wider whitespace-nowrap">
              FAA Part 107 Certified
            </p>
            <Link href="/admin/login" className="text-xs text-dark-200 hover:text-gold transition-colors whitespace-nowrap">
              Admin
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://studio925.design"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-dark-200 hover:text-gold transition-colors"
          >
            Website by <span className="font-semibold">Studio 925</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
