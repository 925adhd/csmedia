"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

// TODO: Replace with your real Web3Forms access key
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

interface ContactFormProps {
  services: string[];
  successHeading: string;
  successMessage: string;
  submitText: string;
}

export default function ContactForm({
  services,
  successHeading,
  successMessage,
  submitText,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0 });
        // Track form submission in Google Analytics
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "form_submission", {
            event_category: "Contact",
            event_label: data.get("service") as string || "General Inquiry",
          });
        }
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <FadeIn>
      {submitted ? (
        <div className="rounded-2xl bg-dark-700 border border-gold/20 p-12 text-center">
          <svg className="mx-auto h-14 w-14 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-white">
            {successHeading}
          </h2>
          <p className="mt-2 text-dark-200">
            {successMessage}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Web3Forms hidden fields */}
          <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
          <input type="hidden" name="subject" value="New Booking Inquiry — CS Media Website" />
          <input type="hidden" name="from_name" value="CS Media Website" />
          <input type="hidden" name="replyto" value="" />
          {/* Honeypot spam protection */}
          <input type="checkbox" name="botcheck" className="hidden" />

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

          {error && (
            <p className="text-red-400 text-sm">
              Something went wrong. Please try again or text us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto border-gradient rounded-full bg-gold/10 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending..." : submitText}
          </button>
        </form>
      )}
    </FadeIn>
  );
}
