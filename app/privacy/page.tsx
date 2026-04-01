import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://csmedia.vercel.app";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CS Media privacy policy — how we collect, use, and protect your information. Covers Google Analytics, cookies, and your data rights.",
  alternates: { canonical: `${BASE_URL}/privacy` },
  openGraph: {
    title: "Privacy Policy | CS Media",
    description:
      "CS Media privacy policy — how we collect, use, and protect your information. Covers Google Analytics, cookies, and your data rights.",
    type: "website",
    url: `${BASE_URL}/privacy`,
    siteName: "CS Media",
    images: [{ url: "/images/real-estate-aerial-drone-leitchfield-ky.jpg", width: 1200, height: 630 }],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-dark-900 py-16 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
          <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
            Legal
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-dark-300 font-mono">
            Last updated: March 22, 2026
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-24 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-3xl px-6 lg:px-8 prose-sm text-dark-200 space-y-8">
          <div>
            <h2 className="text-lg font-bold text-white mb-3">1. Information We Collect</h2>
            <p className="leading-relaxed">
              When you use our website or contact us, we may collect the following information:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Name, email address, and phone number (via our contact form)</li>
              <li>Property or business address (when requesting a quote)</li>
              <li>Service preferences and project details</li>
              <li>Usage data and analytics (via Google Analytics)</li>
              <li>Cookies and browser information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">2. How We Use Your Information</h2>
            <p className="leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Schedule and deliver our media services</li>
              <li>Improve our website and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">3. Google Analytics</h2>
            <p className="leading-relaxed">
              This website uses Google Analytics to help us understand how visitors interact with
              our site. Google Analytics uses cookies to collect information such as how often users
              visit the site, what pages they visit, and what other sites they used prior to coming
              to this site. We use the information we get from Google Analytics to improve our website.
              Google Analytics collects only the IP address assigned to you on the date you visit this
              site. Google&apos;s ability to use and share information collected by Google Analytics is
              governed by the{" "}
              <a href="https://policies.google.com/terms" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                Google Analytics Terms of Service
              </a>{" "}
              and the{" "}
              <a href="https://policies.google.com/privacy" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">4. Cookies</h2>
            <p className="leading-relaxed">
              Our website uses cookies to enhance your browsing experience. Cookies are small text
              files stored on your device. We use:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-white">Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong className="text-white">Analytics cookies:</strong> Help us understand how visitors use our site (Google Analytics)</li>
            </ul>
            <p className="mt-2 leading-relaxed">
              You can control cookies through your browser settings. Disabling cookies may affect
              your experience on this site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">5. Third-Party Services</h2>
            <p className="leading-relaxed">
              We use the following third-party services that may collect information:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-white">Web3Forms:</strong> To process contact form submissions</li>
              <li><strong className="text-white">Google Analytics:</strong> For website analytics and tracking</li>
              <li><strong className="text-white">Google Search Console:</strong> For search performance monitoring</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">6. Data Security</h2>
            <p className="leading-relaxed">
              We take reasonable measures to protect your personal information from unauthorized
              access, use, or disclosure. Our website uses HTTPS encryption to secure data
              transmitted between your browser and our servers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">7. Your Rights</h2>
            <p className="leading-relaxed">You have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Opt out of analytics tracking by disabling cookies</li>
              <li>Contact us with any privacy-related questions or concerns</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">8. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li>
                Email:{" "}
                <a href="mailto:cscreatesmediallc@gmail.com" className="text-gold hover:underline">
                  cscreatesmediallc@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+12703070173" className="text-gold hover:underline font-mono">
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
