import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 footer-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 blueprint-overlay opacity-10 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <Image
              src="/logo/logo-white.svg"
              alt={COMPANY.name}
              width={80}
              height={80}
              className="mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20"
            />
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
              Premier precision engineering manufacturer specializing in CNC machining, VMC components, grinding services, and custom industrial machine parts in Ahmedabad, Gujarat.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a
                href={getWhatsAppUrl("Hello Hariom Enterprise")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors touch-target"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href={COMPANY.indiamart}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors touch-target"
                aria-label="IndiaMART"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-heading text-base sm:text-lg font-bold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm inline-block py-1 touch-target"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-heading text-base sm:text-lg font-bold mb-4 sm:mb-6">Contact Info</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-white/70 justify-center sm:justify-start">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-left break-words">{COMPANY.address.full}</span>
              </li>
              <li>
                <a
                  href={getTelUrl(COMPANY.phone)}
                  className="flex items-center gap-3 text-xs sm:text-sm text-white/70 hover:text-accent transition-colors justify-center sm:justify-start touch-target"
                >
                  <Phone size={18} className="text-accent shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-white/70 hover:text-accent transition-colors justify-center sm:justify-start touch-target break-all"
                >
                  <Mail size={18} className="text-accent shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm text-white/70 justify-center sm:justify-start">
                <Clock size={18} className="text-accent shrink-0" />
                <span>{COMPANY.hours.days}: {COMPANY.hours.time}</span>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-base sm:text-lg font-bold mb-4 sm:mb-6">Business Details</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-white/70">
              <li>
                <span className="text-white font-medium">Owner:</span> {COMPANY.owner}
              </li>
              <li className="break-all">
                <span className="text-white font-medium">GSTIN:</span> {COMPANY.gst.gstin}
              </li>
              <li>
                <span className="text-white font-medium">PAN:</span> {COMPANY.gst.pan}
              </li>
              <li>
                <span className="text-white font-medium">Type:</span> {COMPANY.businessType}
              </li>
            </ul>
            <a
              href={COMPANY.indiamart}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-5 sm:mt-6 px-4 sm:px-5 py-3 bg-accent text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-accent/90 transition-colors w-full sm:w-auto touch-target min-h-[44px]"
            >
              Visit IndiaMART Store
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-5 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center">
          <p className="text-white/50 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-white/50 text-xs sm:text-sm">
            Precision Engineering Manufacturer | Ahmedabad, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
