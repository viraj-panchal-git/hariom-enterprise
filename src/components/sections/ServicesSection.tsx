"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Button from "@/components/ui/Button";
import IconGradientPanel from "@/components/ui/IconGradientPanel";
import { services } from "@/data/services";
import { useCanHover, usePrefersReducedMotion } from "@/lib/hooks";

interface ServicesSectionProps {
  showAll?: boolean;
  compact?: boolean;
}

export default function ServicesSection({ showAll = false, compact = false }: ServicesSectionProps) {
  const displayServices = showAll || compact ? services : services.slice(0, 6);
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="services" className={`${compact ? "section-padding-compact" : "section-padding"} bg-light industrial-grid overflow-hidden`}>
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Services"
          title="Precision Manufacturing Services"
        />

        {compact ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {displayServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reducedMotion ? 0 : i * 0.03 }}
                  whileHover={canHover && !reducedMotion ? { y: -4 } : undefined}
                  className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all text-center group"
                >
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-105 transition-transform`}>
                    <Icon size={18} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-[11px] sm:text-xs font-bold text-primary leading-tight">
                    {service.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {displayServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedCard key={service.id} delay={i * 0.08} className="group overflow-hidden">
                  <IconGradientPanel icon={Icon} gradient={service.gradient} size="md" />
                  <div className="card-flex-body p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-accent" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-primary">{service.title}</h3>
                    </div>
                    <p className="text-steel text-xs sm:text-sm leading-relaxed flex-1">{service.description}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        )}

        {!showAll && !compact && (
          <div className="text-center mt-8 sm:mt-12">
            <Button href="/services" variant="primary" size="lg" fullWidth className="sm:w-auto sm:min-w-[200px]">
              View All Services
              <ArrowRight size={18} />
            </Button>
          </div>
        )}

        {compact && (
          <div className="text-center mt-4 sm:mt-5">
            <Button href="/services" variant="outline" size="sm" className="sm:min-w-[160px]">
              Full Service Details
              <ArrowRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
