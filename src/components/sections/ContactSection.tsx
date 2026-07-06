"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/sections/InquiryForm";
import { COMPANY } from "@/lib/constants";
import { getTelUrl, getWhatsAppUrl, getDirectionsUrl, getMapEmbedUrl } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/hooks";

export default function ContactSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="contact" className="section-padding bg-white overflow-hidden relative">
      <div className="absolute inset-0 blueprint-overlay opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <SectionHeading
          subtitle="Contact Us"
          title="Get In Touch With Us"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full min-w-0 order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Send Us an Inquiry</h3>
            <InquiryForm />
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 w-full min-w-0 order-1 lg:order-2"
          >
            <div className="bg-primary rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 blueprint-overlay opacity-20" />
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{COMPANY.name}</h3>
                <ul className="space-y-4 sm:space-y-5">
                  <li className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-sm sm:text-base">Address</p>
                      <p className="text-white/70 text-xs sm:text-sm mt-1 leading-relaxed break-words">
                        {COMPANY.address.line1}<br />
                        {COMPANY.address.line2}<br />
                        {COMPANY.address.line3}<br />
                        {COMPANY.address.city} - {COMPANY.address.pincode}<br />
                        {COMPANY.address.state}, {COMPANY.address.country}
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href={getTelUrl(COMPANY.phone)} className="flex items-center gap-3 sm:gap-4 hover:text-accent transition-colors touch-target">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-accent" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-sm sm:text-base">Phone</p>
                        <p className="text-white/70 text-xs sm:text-sm break-all">{COMPANY.phone}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 sm:gap-4 hover:text-accent transition-colors touch-target">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-accent" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-sm sm:text-base">Email</p>
                        <p className="text-white/70 text-xs sm:text-sm break-all">{COMPANY.email}</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Business Hours</p>
                      <p className="text-white/70 text-xs sm:text-sm">
                        {COMPANY.hours.days}: {COMPANY.hours.time}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 sm:mt-8">
                  <Button
                    href={getWhatsAppUrl("Hello Hariom Enterprise, I need machining services.")}
                    variant="accent"
                    size="sm"
                    external
                    fullWidth
                    className="sm:w-auto"
                  >
                    <FaWhatsapp size={16} />
                    WhatsApp
                  </Button>
                  <Button href={getTelUrl(COMPANY.phone)} variant="outline" size="sm" external fullWidth className="sm:w-auto">
                    <Phone size={16} />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg w-full aspect-[16/10] sm:aspect-[16/9] lg:h-56 lg:aspect-auto relative border border-gray-100">
              <iframe
                src={getMapEmbedUrl(COMPANY.maps.coordinates.lat, COMPANY.maps.coordinates.lng)}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hariom Enterprise Location"
              />
            </div>

            <Button
              href={getDirectionsUrl(COMPANY.maps.coordinates.lat, COMPANY.maps.coordinates.lng)}
              variant="secondary"
              fullWidth
              external
            >
              <Navigation size={18} />
              Get Directions
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
