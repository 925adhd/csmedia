"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="border border-dark-500/30 rounded-xl overflow-hidden transition-colors hover:border-gold/20"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <h3 className="text-base font-semibold text-white pr-4">
                {faq.q}
              </h3>
              <svg
                className={`h-5 w-5 text-gold/60 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-dark-200 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
