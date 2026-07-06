"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { toleranceSpecs } from "@/data/tolerances";
import { usePrefersReducedMotion } from "@/lib/hooks";

export default function ToleranceStandardsSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="tolerance-standards" className="section-padding-compact bg-light overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Quality Standards"
          title="Precision Tolerance Standards"
        />

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl sm:rounded-2xl bg-primary p-5 sm:p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 blueprint-overlay opacity-30 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-white/70 text-xs sm:text-sm text-center mb-4 sm:mb-5 max-w-2xl mx-auto">
              Dimensional control and surface finish targets maintained across grinding, machining, and inspection.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {toleranceSpecs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reducedMotion ? 0 : i * 0.04 }}
                  className="glass rounded-lg sm:rounded-xl p-3 sm:p-4 text-center"
                >
                  <div className="text-accent font-bold text-lg sm:text-xl font-mono">
                    {spec.value}
                    <span className="text-white/50 text-xs ml-0.5">{spec.unit}</span>
                  </div>
                  <div className="text-white/60 text-[9px] sm:text-[10px] mt-1 leading-tight">{spec.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
