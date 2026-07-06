"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/lib/hooks";

const indiamartCategories = [
  "Centerless Grinding",
  "Surface Grinding",
  "CNC Machining",
  "VMC Components",
  "Dowel Pins",
  "Taper Pins",
  "Traub Machine Parts",
  "Precision Machine Components",
  "Industrial Job Work",
  "Custom Engineering Parts",
];

export default function IndiaMARTSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-dark relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-10" />
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-accent font-subheading text-xs sm:text-sm font-semibold uppercase tracking-widest">
              IndiaMART Verified
            </span>
            <h2 className="text-section-title font-bold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              Find Us on IndiaMART
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
              Explore our complete product catalog and service offerings on IndiaMART.
              As a verified supplier based in Ahmedabad, we offer precision grinding,
              CNC machining, VMC components, dowel pins, taper pins, Traub parts, and
              comprehensive industrial job work services for manufacturers across India.
            </p>
            <Button href={COMPANY.indiamart} variant="accent" size="lg" external fullWidth className="sm:w-auto">
              <ExternalLink size={18} />
              Visit Our IndiaMART Store
            </Button>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-2 sm:gap-3"
          >
            {indiamartCategories.map((cat) => (
              <div
                key={cat}
                className="glass rounded-lg sm:rounded-xl p-3 sm:p-4 text-center min-w-0"
              >
                <span className="text-white text-xs sm:text-sm font-medium break-words">{cat}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
