"use client";

import { motion } from "framer-motion";
import { Star, Quote, Building2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { useCanHover, usePrefersReducedMotion } from "@/lib/hooks";

function getCompanyInitials(company: string): string {
  return company
    .split(/\s+/)
    .filter((w) => w.length > 2 && /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase() || company.slice(0, 2).toUpperCase();
}

interface TestimonialsSectionProps {
  limit?: number;
}

export default function TestimonialsSection({ limit }: TestimonialsSectionProps) {
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="section-padding bg-white overflow-hidden relative">
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {displayTestimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={reducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reducedMotion ? 0 : i * 0.08 }}
              whileHover={canHover && !reducedMotion ? { y: -5 } : undefined}
              className="bg-light rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-100 shadow-lg shadow-primary/5 relative h-full flex flex-col hover-lift"
            >
              <Quote size={32} className="text-secondary/10 absolute top-4 right-4 sm:top-6 sm:right-6 sm:w-10 sm:h-10" />
              <div className="flex gap-1 mb-3 sm:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-accent fill-accent sm:w-4 sm:h-4" />
                ))}
              </div>
              <p className="text-steel text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-3 sm:pt-4 mt-auto flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-xs sm:text-sm">
                    {getCompanyInitials(testimonial.company)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-primary text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-secondary text-xs sm:text-sm">{testimonial.role}</p>
                  <p className="text-steel text-[10px] sm:text-xs break-words flex items-center gap-1">
                    <Building2 size={10} className="shrink-0" />
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
