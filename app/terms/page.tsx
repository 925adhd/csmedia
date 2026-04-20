import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreatesmedia.com";

export const metadata: Metadata = {
  title: "Terms of Service — CS Media",
  description:
    "CS Media terms of service — the terms and conditions for using our website and services. Covers bookings, IP, payment, and liability.",
  alternates: { canonical: `${BASE_URL}/terms` },
  openGraph: {
    title: "Terms of Service | CS Media",
    description:
      "CS Media terms of service — the terms and conditions for using our website and services. Covers bookings, IP, payment, and liability.",
    type: "website",
    url: `${BASE_URL}/terms`,
    siteName: "CS Media",
    images: [{ url: "/images/real-estate-aerial-drone-leitchfield-ky.webp", width: 1200, height: 630 }],
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="relative bg-dark-900 py-16 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
          <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
            Legal
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Terms of Service
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
            <h2 className="text-lg font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing or using the CS Media website and services, you agree to be bound by
              these Terms of Service. If you do not agree with any part of these terms, you may
              not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">2. Services</h2>
            <p className="leading-relaxed">
              CS Media, LLC provides professional drone photography, videography, video editing,
              virtual staging, and related media services for real estate agents, property owners,
              and businesses. All services are subject to availability, scheduling, and weather
              conditions (for outdoor and aerial work).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">3. Booking &amp; Scheduling</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>All bookings are subject to confirmation by CS Media</li>
              <li>Scheduling is based on availability and may be affected by weather conditions for drone and outdoor photography</li>
              <li>We will make reasonable efforts to reschedule shoots impacted by weather at no additional cost</li>
              <li>Cancellations should be communicated at least 24 hours in advance</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">4. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website, including but not limited to photographs, videos, text,
              graphics, and logos, is the property of CS Media, LLC and is protected by copyright
              law. You may not reproduce, distribute, or use any content from this website without
              prior written consent.
            </p>
            <p className="mt-2 leading-relaxed">
              Upon full payment for services rendered, clients receive a license to use the
              delivered media for their intended purpose (e.g., property listings, marketing
              materials). CS Media retains the right to use completed work in our portfolio and
              marketing materials unless otherwise agreed in writing.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">5. Drone Operations</h2>
            <p className="leading-relaxed">
              All drone operations are conducted by an FAA Part 107 certified pilot in compliance
              with federal, state, and local regulations. Flights are subject to FAA airspace
              restrictions, weather conditions, and safety considerations. CS Media reserves the
              right to cancel or modify drone operations if safety conditions are not met.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">6. Payment</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Package prices are published on our <a href="/services" className="text-gold hover:underline">services page</a> and confirmed at the time of booking</li>
              <li>A 6% Kentucky sales tax and a 2-way mileage fee (Google Maps round-trip distance from Leitchfield) are added to the final price for shoots outside Grayson County</li>
              <li>Add-ons (twilight edits, rush delivery, virtual staging, additional photos) are billed at the rates published on the services page</li>
              <li>Payment terms will be communicated at the time of booking</li>
              <li>Final deliverables are provided upon receipt of full payment</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">7. Revisions</h2>
            <p className="leading-relaxed">
              Each package includes a set number of free revisions, as published on our{" "}
              <a href="/services" className="text-gold hover:underline">services page</a>{" "}
              (currently 1 free revision on most packages, 2 on Full Package — Pro).
              Revision terms:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Additional revisions beyond those included are billed at $15 per request</li>
              <li>Major edits — including but not limited to object removal, sky swaps, and virtual staging changes — are quoted separately and are not covered by included or additional revisions</li>
              <li>All revision requests must be submitted within 3 days of delivery; requests received after this window may be declined or quoted as new work</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">8. Limitation of Liability</h2>
            <p className="leading-relaxed">
              CS Media, LLC shall not be liable for any indirect, incidental, special, or
              consequential damages arising from the use of our website or services. Our total
              liability shall not exceed the amount paid for the specific service in question.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">9. Website Use</h2>
            <p className="leading-relaxed">You agree not to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Copy, modify, or distribute website content without permission</li>
              <li>Interfere with the proper operation of the website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">10. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to update these Terms of Service at any time. Changes will be
              posted on this page with an updated revision date. Continued use of the website
              after changes constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">11. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
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
