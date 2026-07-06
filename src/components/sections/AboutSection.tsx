"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Wrench,
  User,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import EngineeringIllustration from "@/components/ui/EngineeringIllustration";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { aboutContent } from "@/data/about";
import { COMPANY } from "@/lib/constants";
import { getTelUrl, getWhatsAppUrl, getDirectionsUrl } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/hooks";

interface AboutSectionProps {
  fullPage?: boolean;
  showHighlights?: boolean;
}

export default function AboutSection({ fullPage = false, showHighlights = false }: AboutSectionProps) {
  const reducedMotion = usePrefersReducedMotion();

  if (fullPage) {
    return (
      <section id="about" className="section-padding industrial-grid bg-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto">
          <SectionHeading subtitle="About Us" title="Who We Are & What We Do" />

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-steel text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-center mb-8 sm:mb-10"
          >
            {aboutContent.intro}
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Wrench size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary font-heading">{aboutContent.work.title}</h3>
              </div>
              <p className="text-steel text-sm leading-relaxed mb-4">{aboutContent.work.summary}</p>
              <ul className="space-y-2 mb-4">
                {aboutContent.work.capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-primary">
                    <CheckCircle size={15} className="text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-steel border-t border-gray-200 pt-3">
                <span className="font-semibold text-primary">Materials: </span>
                {aboutContent.work.materials}
              </p>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reducedMotion ? 0 : 0.08 }}
              className="bg-light rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary font-heading">Owner</h3>
              </div>
              <p className="text-xl font-bold text-primary mb-1">{aboutContent.owner.name}</p>
              <p className="text-sm font-medium text-secondary mb-3">{aboutContent.owner.role}</p>
              <p className="text-steel text-sm leading-relaxed mb-4">{aboutContent.owner.description}</p>
              <div className="text-xs sm:text-sm text-steel space-y-1 border-t border-gray-200 pt-3">
                <p>
                  <span className="font-semibold text-primary">Business: </span>
                  {COMPANY.businessType}
                </p>
                <p>
                  <span className="font-semibold text-primary">GSTIN: </span>
                  {COMPANY.gst.gstin}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reducedMotion ? 0 : 0.16 }}
              className="bg-primary rounded-xl sm:rounded-2xl p-5 sm:p-6 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 blueprint-overlay opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 font-heading">Connect With Us</h3>
                <ul className="space-y-3 sm:space-y-4 text-sm">
                  <li>
                    <a
                      href={getTelUrl(COMPANY.phone)}
                      className="flex items-center gap-3 hover:text-accent transition-colors"
                    >
                      <Phone size={18} className="text-accent shrink-0" />
                      <span>{COMPANY.phone}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={getWhatsAppUrl("Hello Hariom Enterprise, I would like to connect.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-accent transition-colors"
                    >
                      <FaWhatsapp size={18} className="text-accent shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-center gap-3 hover:text-accent transition-colors break-all"
                    >
                      <Mail size={18} className="text-accent shrink-0" />
                      <span>{COMPANY.email}</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-white/80 leading-relaxed">
                      {COMPANY.address.line1}, {COMPANY.address.line3}
                      <br />
                      {COMPANY.address.city} - {COMPANY.address.pincode}, {COMPANY.address.state}
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Clock size={18} className="text-accent shrink-0" />
                    <span>
                      {COMPANY.hours.days}, {COMPANY.hours.time}
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-2 mt-5 pt-4 border-t border-white/15">
                  <a
                    href={getDirectionsUrl(COMPANY.maps.coordinates.lat, COMPANY.maps.coordinates.lng)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors"
                  >
                    <MapPin size={16} />
                    Get Directions
                  </a>
                  <a
                    href={COMPANY.indiamart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    IndiaMART Profile
                  </a>
                </div>
                <Button href="/contact" variant="accent" size="sm" className="mt-4 w-full sm:w-auto">
                  Send Inquiry
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="section-padding industrial-grid bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading subtitle="About Us" title="Engineering Excellence Since Day One" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.6 }}
            className="w-full min-w-0"
          >
            <EngineeringIllustration />
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.6 }}
            className="space-y-4 sm:space-y-5 min-w-0"
          >
            <p className="text-steel text-sm sm:text-base leading-relaxed break-words">{aboutContent.intro}</p>
            <p className="text-steel text-sm sm:text-base leading-relaxed break-words">{aboutContent.homeBlurb}</p>

            <Button href="/about" variant="primary" fullWidth className="sm:w-auto">
              Read More About Us
            </Button>
          </motion.div>
        </div>

        {showHighlights && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3"
          >
            {aboutContent.highlights.map((item, i) => (
              <motion.div
                key={item}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: reducedMotion ? 0 : i * 0.03 }}
                className="flex items-center gap-1.5 sm:gap-2 bg-light rounded-lg p-2.5 sm:p-3 border border-gray-100 min-w-0"
              >
                <CheckCircle size={14} className="text-accent shrink-0 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-xs font-medium text-primary leading-tight break-words">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
