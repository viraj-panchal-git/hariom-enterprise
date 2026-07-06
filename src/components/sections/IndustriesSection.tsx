"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";
import { useCanHover, usePrefersReducedMotion } from "@/lib/hooks";

export default function IndustriesSection() {
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="industries" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="absolute inset-0 blueprint-overlay opacity-10" />
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <SectionHeading
          subtitle="Industries We Serve"
          title="Trusted Across Diverse Sectors"
          light
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: reducedMotion ? 0 : i * 0.04 }}
                whileHover={canHover && !reducedMotion ? { y: -5, scale: 1.05 } : undefined}
                className="glass rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 text-center cursor-default group min-w-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-accent/20 transition-colors">
                  <Icon size={22} className="text-accent sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-white text-[10px] sm:text-xs font-semibold font-subheading leading-tight break-words">
                  {industry.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
