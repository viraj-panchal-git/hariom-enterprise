"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/why-choose";
import { useCanHover, usePrefersReducedMotion } from "@/lib/hooks";

export default function WhyChooseUsSection() {
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="why-choose-us" className="section-padding-compact bg-white industrial-grid overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading subtitle="Why Choose Us" title="The Hariom Enterprise Advantage" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reducedMotion ? 0 : i * 0.05 }}
                whileHover={canHover && !reducedMotion ? { y: -4 } : undefined}
                className="bg-light rounded-lg sm:rounded-xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-secondary/25 transition-all"
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3 sm:mb-4`}
                >
                  <Icon size={22} className="text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-primary mb-1.5 sm:mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-steel text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
