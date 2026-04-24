import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Disclaimer — CS Media",
  description:
    "CS Media disclaimer — important information about our website content, drone photography services, and limitations of liability in Kentucky.",
  alternates: { canonical: `${BASE_URL}/disclaimer` },
  openGraph: {
    title: "Disclaimer | CS Media",
    description:
      "CS Media disclaimer — important information about our website content, services, and limitations of liability.",
    type: "website",
    url: `${BASE_URL}/disclaimer`,
    siteName: "CS Media",
    images: [{ url: "/images/kentucky-real-estate-drone-aerial.webp", width: 1200, height: 630 }],
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="relative bg-dark-900 py-16 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
          <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
            Legal
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Disclaimer
          </h1>
          <p className="mt-4 text-sm text-dark-300 font-mono">
            Last updated: April 19, 2026
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-24 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-3xl px-6 lg:px-8 prose-sm text-dark-200 space-y-8">
          <div>
            <h2 className="text-lg font-bold text-white mb-3">1. Website Content</h2>
            <p className="leading-relaxed">
              The information provided on this website is for general informational purposes
              only. While we strive to keep the content accurate and up to date, CS Media,
              LLC makes no representations or warranties of any kind, express or implied,
              about the completeness, accuracy, reliability, or availability of the
              information, products, services, or related graphics contained on this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">2. Professional Services</h2>
            <p className="leading-relaxed">
              CS Media, LLC provides drone photography, videography, virtual staging, and
              video editing services. All work is performed by an FAA Part 107 certified
              remote pilot in compliance with applicable federal, state, and local
              regulations. Results may vary based on weather conditions, property
              characteristics, and other factors outside our control.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">3. Virtual Staging</h2>
            <p className="leading-relaxed">
              Virtual staging images are digitally enhanced representations of properties.
              Furniture, decor, and other items shown in virtually staged photos are not
              physically present in the property. Virtual staging is intended to help
              potential buyers visualize the potential of a space and should not be
              interpreted as a representation of the property&apos;s current condition.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">4. Pricing</h2>
            <p className="leading-relaxed">
              Package prices listed on this website are subject to change without notice. A
              6% Kentucky sales tax and a 2-way mileage fee (based on Google Maps
              round-trip distance from Leitchfield, KY) are applied to the final price for
              all shoots outside Grayson County. Final pricing is confirmed at the time of
              booking and may vary based on project scope, location, and add-ons such as
              twilight edits, rush delivery, virtual staging, or additional photos.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">5. External Links</h2>
            <p className="leading-relaxed">
              This website may contain links to third-party websites. These links are
              provided for your convenience and do not signify endorsement. CS Media, LLC
              has no control over the content or availability of external sites and is not
              responsible for their content or privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">6. Testimonials</h2>
            <p className="leading-relaxed">
              Testimonials displayed on this website are from real clients and reflect their
              individual experiences. Results and satisfaction may vary. Testimonials are not
              intended to guarantee that every client will achieve the same results.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">7. Limitation of Liability</h2>
            <p className="leading-relaxed">
              In no event shall CS Media, LLC be liable for any loss or damage, including
              without limitation indirect or consequential loss or damage, arising from the
              use of this website or reliance on any information provided herein.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">8. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this disclaimer, contact us:
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
