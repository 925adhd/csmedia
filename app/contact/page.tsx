"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const services = [
  "Photography",
  "Videography",
  "Drone (Part 107)",
  "Video Editing",
  "Logo / Watermark Design",
  "Full Package",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="relative bg-dark-900 py-16 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-gold text-xs font-mono uppercase tracking-[0.3em]">
              Get in Touch
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              Book a Shoot
            </h1>
            <p className="mt-5 text-base sm:text-lg text-dark-200 max-w-2xl mx-auto">
              Fill out the form or text{" "}
              <a href="tel:+12703070173" className="text-gold hover:text-gold-light transition-colors font-mono whitespace-nowrap">
                (270)&nbsp;307-0173
              </a>{" "}
              and I&apos;ll get back to you within 24 hours.
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
              <FadeIn>
                {submitted ? (
                  <div className="rounded-2xl bg-dark-700 border border-gold/20 p-12 text-center">
                    <svg className="mx-auto h-14 w-14 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="mt-4 text-2xl font-bold text-white">
                      Message Sent!
                    </h2>
                    <p className="mt-2 text-dark-200">
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-2">
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full rounded-lg bg-dark-700 border border-dark-500 px-4 py-3.5 text-sm text-white placeholder-dark-300 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-lg bg-dark-700 border border-dark-500 px-4 py-3.5 text-sm text-white placeholder-dark-300 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 outline-none transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-2">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="w-full rounded-lg bg-dark-700 border border-dark-500 px-4 py-3.5 text-sm text-white placeholder-dark-300 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 outline-none transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-2">
                          Service
                        </label>
                        <select
                          id="service"
                          name="service"
                          className="w-full rounded-lg bg-dark-700 border border-dark-500 px-4 py-3.5 text-sm text-white focus:border-gold/50 focus:ring-1 focus:ring-gold/30 outline-none transition-colors"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-2">
                        Property / Business Address
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        className="w-full rounded-lg bg-dark-700 border border-dark-500 px-4 py-3.5 text-sm text-white placeholder-dark-300 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 outline-none transition-colors"
                        placeholder="123 Main St, City, State"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full rounded-lg bg-dark-700 border border-dark-500 px-4 py-3.5 text-sm text-white placeholder-dark-300 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 outline-none transition-colors resize-none"
                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto border-gradient rounded-full bg-gold/10 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.15}>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">
                      Call / Text
                    </h3>
                    <a
                      href="tel:+12703070173"
                      className="text-xl font-mono text-white hover:text-gold transition-colors tracking-wider"
                    >
                      (270) 307-0173
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@csmedia.com"
                      className="text-dark-100 hover:text-gold transition-colors"
                    >
                      hello@csmedia.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">
                      Services
                    </h3>
                    <ul className="space-y-1.5 text-sm text-dark-200">
                      <li>Photography</li>
                      <li>Videography</li>
                      <li>Drone Pilot (Part 107)</li>
                      <li>Video Editing Services</li>
                      <li>Logo &amp; Watermark Design</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-3">
                      Response Time
                    </h3>
                    <p className="text-dark-100">
                      Within 24 hours
                    </p>
                  </div>

                  {/* Decorative */}
                  <div className="pt-6 border-t border-dark-500/30">
                    <p className="text-xs text-dark-300 font-mono tracking-widest uppercase">
                      CS MEDIA, LLC
                    </p>
                    <p className="text-xs text-dark-300 mt-1 font-mono tracking-wider">
                      Advertising / Marketing
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
