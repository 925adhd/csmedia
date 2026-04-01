import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

import { getPageContent } from "@/lib/supabase/queries";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://csmedia.vercel.app";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a drone photography or videography shoot with CS Media in Leitchfield & Grayson County, KY. Serving all of Kentucky.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contact | CS Media",
    description:
      "Book a drone photography or videography shoot with CS Media in Leitchfield & Grayson County, KY. Serving all of Kentucky.",
    type: "website",
    url: `${BASE_URL}/contact`,
    siteName: "CS Media",
    images: [{ url: "/images/aerialhome1.jpg", width: 1200, height: 630 }],
  },
};

export default async function ContactPage() {
  const [headerContent, sidebarContent, formContent] = await Promise.all([
    getPageContent("contact", "header"),
    getPageContent("contact", "sidebar"),
    getPageContent("contact", "form"),
  ]);

  // Header fields
  const tagline = (headerContent?.tagline as string) || "Get in Touch";
  const heading = "Request a Booking";
  const subtext = "Fill out the form or text (270) 307-0173. I'll get back to you within 24 hours.";
  const headerPhone = (headerContent?.phone as string) || "(270)\u00a0307-0173";

  // Sidebar fields
  const sidebarPhone = (sidebarContent?.phone as string) || "(270) 307-0173";
  const sidebarEmail = (sidebarContent?.email as string) || "cscreatesmediallc@gmail.com";
  const sidebarServices = (sidebarContent?.services as string[]) || [
    "Photography",
    "Videography",
    "Drone Pilot (Part 107)",
    "Video Editing Services",
    "Logo & Watermark Design",
  ];
  const responseTime = (sidebarContent?.response_time as string) || "Within 24 hours";
  const companyName = (sidebarContent?.company_name as string) || "CS MEDIA, LLC";
  const companyType = (sidebarContent?.company_type as string) || "Advertising / Marketing";

  // Form fields
  const successHeading = (formContent?.success_heading as string) || "Message Sent!";
  const successMessage = (formContent?.success_message as string) || "Thanks for reaching out. I'll get back to you within 24 hours.";
  const submitText = (formContent?.submit_text as string) || "Send Message";
  const formServices = (formContent?.services as string[]) || [
    "Photography",
    "Videography",
    "Drone (Part 107)",
    "Video Editing",
    "Logo / Watermark Design",
    "Full Package",
  ];

  return (
    <>
      {/* Header */}
      <section className="relative bg-dark-900 py-16 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              {tagline}
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              {heading}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-dark-200 max-w-2xl mx-auto">
              Fill out the form or text{" "}
              <a href="sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F" className="text-gold hover:text-gold-light transition-colors whitespace-nowrap">
                (270) 307-0173
              </a>
              . I&apos;ll get back to you within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-14 sm:py-24 bg-dark-800 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm
                services={formServices}
                successHeading={successHeading}
                successMessage={successMessage}
                submitText={submitText}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.15}>
                <div className="space-y-10">
                  <div>
                    <h2 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">
                      Text
                    </h2>
                    <a
                      href="sms:+12703070173?body=Hey%20CS%20Media%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20chat%3F"
                      className="text-xl font-mono text-white hover:text-gold transition-colors tracking-wider"
                    >
                      {sidebarPhone}
                    </a>
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">
                      Email
                    </h2>
                    <a
                      href={`mailto:${sidebarEmail}`}
                      className="text-dark-100 hover:text-gold transition-colors"
                    >
                      {sidebarEmail}
                    </a>
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">
                      Services
                    </h2>
                    <ul className="space-y-1.5 text-sm text-dark-200">
                      {sidebarServices.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">
                      Response Time
                    </h2>
                    <p className="text-dark-100">
                      {responseTime}
                    </p>
                  </div>

                  {/* Decorative */}
                  <div className="pt-6 border-t border-dark-500/30">
                    <p className="text-xs text-dark-300 font-mono tracking-widest uppercase">
                      {companyName}
                    </p>
                    <p className="text-xs text-dark-300 mt-1 font-mono tracking-wider">
                      {companyType}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
