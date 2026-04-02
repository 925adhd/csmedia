import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Cookie Policy — CS Media",
  description:
    "CS Media cookie policy — how we use cookies and Google Analytics on our website, and how to manage your cookie and tracking preferences.",
  alternates: { canonical: `${BASE_URL}/cookies` },
  openGraph: {
    title: "Cookie Policy | CS Media",
    description:
      "CS Media cookie policy — how we use cookies and Google Analytics on our website, and how to manage your preferences.",
    type: "website",
    url: `${BASE_URL}/cookies`,
    siteName: "CS Media",
    images: [{ url: "/images/real-estate-aerial-drone-leitchfield-ky.webp", width: 1200, height: 630 }],
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="relative bg-dark-900 py-16 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
          <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
            Legal
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm text-dark-300 font-mono">
            Last updated: March 31, 2026
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-24 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-3xl px-6 lg:px-8 prose-sm text-dark-200 space-y-8">
          <div>
            <h2 className="text-lg font-bold text-white mb-3">1. What Are Cookies</h2>
            <p className="leading-relaxed">
              Cookies are small text files stored on your device when you visit a website.
              They help the site remember your preferences and understand how you interact
              with the content. Cookies may be set by the site you are visiting
              (&ldquo;first-party cookies&rdquo;) or by third-party services that the site
              uses (&ldquo;third-party cookies&rdquo;).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">2. Cookies We Use</h2>
            <p className="leading-relaxed mb-3">
              This website uses the following types of cookies:
            </p>

            <h3 className="text-base font-semibold text-white mb-2">Essential Cookies</h3>
            <p className="leading-relaxed mb-4">
              These are required for the website to function. They include the cookie
              consent preference stored in your browser&apos;s local storage
              (<code className="text-gold/80 text-xs">cookie-consent</code>). These cannot
              be disabled.
            </p>

            <h3 className="text-base font-semibold text-white mb-2">Analytics Cookies (Google Analytics)</h3>
            <p className="leading-relaxed">
              When you accept cookies, we use Google Analytics 4 to understand how visitors
              interact with our site. Google Analytics sets the following cookies:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong className="text-white">_ga</strong> — Distinguishes unique users.
                Expires after 2 years.
              </li>
              <li>
                <strong className="text-white">_ga_&lt;ID&gt;</strong> — Maintains session
                state. Expires after 2 years.
              </li>
            </ul>
            <p className="mt-2 leading-relaxed">
              These cookies collect information such as pages visited, time on site, and
              referral source. Data is aggregated and anonymous — we do not use it to
              identify individual visitors.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">3. How We Handle Consent</h2>
            <p className="leading-relaxed">
              When you first visit our site, a cookie banner asks you to accept or decline
              analytics cookies. If you decline, Google Analytics does not load and no
              analytics cookies are set. Your choice is stored in your browser&apos;s local
              storage so the banner does not appear again.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">4. How to Opt Out</h2>
            <p className="leading-relaxed">You can opt out of analytics cookies at any time by:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Clearing your browser&apos;s local storage and declining cookies when the banner reappears</li>
              <li>
                Installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline hover:text-gold/80"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
              <li>Disabling cookies in your browser settings</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">5. Third-Party Cookies</h2>
            <p className="leading-relaxed">
              We do not use any third-party advertising or remarketing cookies. The only
              third-party cookies on this site are from Google Analytics, loaded only with
              your consent.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">6. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Cookie Policy from time to time. Changes will be posted on
              this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">7. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about our use of cookies, contact us:
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li>
                Email:{" "}
                <a href="mailto:cscreatesmediallc@gmail.com" className="text-gold underline hover:text-gold/80">
                  cscreatesmediallc@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+12703070173" className="text-gold underline hover:text-gold/80 font-mono">
                  (270) 307-0173
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-dark-500/30">
            <p className="text-xs text-dark-300 font-mono tracking-wider">
              CS MEDIA, LLC &mdash; Advertising / Marketing
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
