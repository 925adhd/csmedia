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
              Professional drone photography, video, and editing services for
              agents and property owners in Leitchfield, Grayson County &amp; across Kentucky.
            </p>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-dark-300">
              Serving Leitchfield, Caneyville, Clarkson, Elizabethtown,
              Bowling Green, Owensboro, Bardstown &amp; all of Kentucky.
              Available for out-of-state projects upon request.
            </p>
            <div className="mt-6 flex items-center gap-2 text-gold text-sm font-mono tracking-wider">
              <span className="inline-block w-8 h-px bg-gold/50" />
              LICENSED TO DRONE
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=100090509656389"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CS Media on Facebook"
              className="mt-4 inline-flex items-center justify-center w-11 h-11 rounded-full border border-dark-500/30 text-dark-200 hover:text-gold hover:border-gold/30 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 md:flex-col md:gap-x-0 text-sm">
              <li><Link href="/" className="inline-block py-1 md:py-1.5 text-dark-200 hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="inline-block py-1 md:py-1.5 text-dark-200 hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="inline-block py-1 md:py-1.5 text-dark-200 hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/about" className="inline-block py-1 md:py-1.5 text-dark-200 hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/contact" className="inline-block py-1 md:py-1.5 text-dark-200 hover:text-gold transition-colors">Contact</Link></li>
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

        <div className="mt-10 pt-8 border-t border-dark-500/30">
          <h3 className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
            Service Areas
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-dark-300">
            <Link href="/services/leitchfield" className="hover:text-gold transition-colors">Leitchfield</Link>
            <Link href="/services/elizabethtown" className="hover:text-gold transition-colors">Elizabethtown</Link>
            <Link href="/services/bowling-green" className="hover:text-gold transition-colors">Bowling Green</Link>
            <Link href="/services/owensboro" className="hover:text-gold transition-colors">Owensboro</Link>
            <Link href="/services/bardstown" className="hover:text-gold transition-colors">Bardstown</Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-dark-500/30 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
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
