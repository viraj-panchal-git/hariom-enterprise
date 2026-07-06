"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import IconGradientPanel from "@/components/ui/IconGradientPanel";
import { capabilities, companyStats, toleranceSpecs } from "@/data/capabilities";
import { useCanHover, usePrefersReducedMotion } from "@/lib/hooks";

interface CapabilitiesSectionProps {
  showAll?: boolean;
}

export default function CapabilitiesSection({ showAll = false }: CapabilitiesSectionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const displayItems = showAll ? capabilities : capabilities.slice(0, 6);
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="capabilities" className="section-padding bg-light overflow-hidden relative">
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none" />
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <SectionHeading
          subtitle="Manufacturing Capabilities"
          title="Precision Engineering at Scale"
        />

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14"
        >
          {companyStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: reducedMotion ? 0 : i * 0.05 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-lg shadow-primary/5 text-center group hover-lift"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-steel text-[10px] sm:text-xs mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14">
          {displayItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reducedMotion ? 0 : i * 0.06 }}
                onMouseEnter={() => canHover && setActiveId(item.id)}
                onMouseLeave={() => canHover && setActiveId(null)}
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden border shadow-lg shadow-primary/5 transition-all duration-300 cursor-default ${
                  isActive ? "border-secondary ring-2 ring-secondary/20" : "border-gray-100"
                } ${canHover ? "hover-lift" : ""}`}
              >
                <IconGradientPanel icon={Icon} gradient={item.gradient} size="sm" />
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-primary">{item.title}</h3>
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] sm:text-xs font-semibold font-mono">
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-steel text-xs sm:text-sm leading-relaxed mb-3">{item.description}</p>
                  <span className="inline-block text-[10px] sm:text-xs text-secondary font-medium bg-secondary/5 px-2 py-1 rounded-md">
                    {item.metricLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl sm:rounded-2xl bg-primary p-5 sm:p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 blueprint-overlay opacity-30" />
          <div className="relative z-10">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center">
              Precision Tolerance Standards
            </h3>
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
