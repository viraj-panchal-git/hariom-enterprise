"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { usePrefersReducedMotion } from "@/lib/hooks";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="faq" className="section-padding bg-light industrial-grid overflow-hidden">
      <div className="w-full max-w-3xl mx-auto">
        <SectionHeading
          subtitle="FAQ"
          title="Frequently Asked Questions"
        />

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reducedMotion ? 0 : i * 0.04 }}
              className="bg-white rounded-lg sm:rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-light/50 transition-colors touch-target min-h-[56px]"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-primary text-sm sm:text-base pr-2 text-left">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-secondary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.3 }}
                  >
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-steel text-xs sm:text-sm leading-relaxed border-t border-gray-50 pt-3 sm:pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
