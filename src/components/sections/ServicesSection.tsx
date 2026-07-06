"use client";

import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Button from "@/components/ui/Button";
import IconGradientPanel from "@/components/ui/IconGradientPanel";
import { services } from "@/data/services";

interface ServicesSectionProps {
  showAll?: boolean;
}

export default function ServicesSection({ showAll = false }: ServicesSectionProps) {
  const displayServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="section-padding bg-light industrial-grid overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Services"
          title="Precision Manufacturing Services"
        />

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

        {!showAll && (
          <div className="text-center mt-8 sm:mt-12">
            <Button href="/services" variant="primary" size="lg" fullWidth className="sm:w-auto sm:min-w-[200px]">
              View All Services
              <ArrowRight size={18} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
