"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, MapPin } from "lucide-react";
import EngineeringIllustration from "@/components/ui/EngineeringIllustration";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { aboutContent } from "@/data/about";
import { COMPANY } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/lib/hooks";

interface AboutSectionProps {
  fullPage?: boolean;
}

export default function AboutSection({ fullPage = false }: AboutSectionProps) {
  const reducedMotion = usePrefersReducedMotion();
  const paragraphs = fullPage
    ? [aboutContent.intro, ...aboutContent.paragraphs]
    : [aboutContent.intro, aboutContent.paragraphs[0], aboutContent.paragraphs[1]];

  return (
    <section id="about" className="section-padding industrial-grid bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading
          subtitle="About Us"
          title="Engineering Excellence Since Day One"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.6 }}
            className="w-full min-w-0 space-y-4 sm:space-y-6"
          >
            <EngineeringIllustration />

            {!fullPage && (
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-primary rounded-lg sm:rounded-xl p-4 sm:p-5 text-center group hover-lift">
                  <Award size={24} className="text-accent mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-accent">GST</div>
                  <div className="text-white/70 text-xs mt-1">Registered Business</div>
                </div>
                <div className="bg-secondary rounded-lg sm:rounded-xl p-4 sm:p-5 text-center group hover-lift">
                  <Award size={24} className="text-white mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-white">ISO</div>
                  <div className="text-white/70 text-xs mt-1">Quality Standards</div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 bg-light rounded-xl p-4 border border-gray-100">
              <MapPin size={20} className="text-accent shrink-0" />
              <div>
                <p className="font-bold text-primary text-sm">{COMPANY.name}</p>
                <p className="text-steel text-xs">{COMPANY.address.city}, {COMPANY.address.state}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.6 }}
            className="space-y-4 sm:space-y-5 min-w-0"
          >
            {paragraphs.map((para, i) => (
              <p key={i} className="text-steel text-sm sm:text-base leading-relaxed break-words">
                {para}
              </p>
            ))}

            {!fullPage && (
              <Button href="/about" variant="primary" fullWidth className="sm:w-auto">
                Read More About Us
              </Button>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-2 sm:gap-3"
        >
          {aboutContent.highlights.map((item, i) => (
            <motion.div
              key={item}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: reducedMotion ? 0 : i * 0.03 }}
              className="flex items-center gap-1.5 sm:gap-2 bg-light rounded-lg p-2.5 sm:p-3 border border-gray-100 min-w-0 hover-lift"
            >
              <CheckCircle size={14} className="text-accent shrink-0 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-xs font-medium text-primary leading-tight break-words">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
