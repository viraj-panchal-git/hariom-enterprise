"use client";

import { motion } from "framer-motion";
import {
  Target, Crosshair, Cog, Users, ShieldCheck, IndianRupee,
  Truck, Heart, Headphones, Factory,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/industries";
import { useCanHover, usePrefersReducedMotion } from "@/lib/hooks";

const icons = [
  Target, Crosshair, Cog, Users, ShieldCheck,
  IndianRupee, Truck, Heart, Headphones, Factory,
];

export default function WhyChooseUsSection() {
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="section-padding bg-light industrial-grid overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Your Trusted Manufacturing Partner"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={reducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reducedMotion ? 0 : i * 0.06 }}
                whileHover={canHover && !reducedMotion ? { y: -8 } : undefined}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center shadow-lg shadow-primary/5 border border-gray-100 hover-lift hover-shadow transition-all duration-300 group h-full flex flex-col"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform shrink-0">
                  <Icon size={22} className="text-white sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-bold text-primary text-sm mb-2">{item.title}</h3>
                <p className="text-steel text-xs leading-relaxed flex-1">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
