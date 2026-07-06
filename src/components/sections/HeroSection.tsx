"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, FileText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "@/components/ui/Button";
import FloatingGear from "@/components/animations/FloatingGear";
import BlueprintGrid from "@/components/animations/BlueprintGrid";
import { COMPANY } from "@/lib/constants";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";

const HERO_VIDEO_SRC =
  "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4";

function HeroStaticBackground() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0a2d45] via-primary to-[#0d4a6f]">
      <div className="absolute inset-0 metal-texture opacity-40" />
      <BlueprintGrid />
      <FloatingGear size={48} className="absolute top-16 right-6 text-white/15" duration={22} />
      <FloatingGear size={32} className="absolute bottom-24 left-4 text-accent/20" reverse duration={16} />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/30" />
    </div>
  );
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    video.play().catch(() => {});
  }, [reducedMotion, isMobile]);

  return (
    <section className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden w-full">
      {!reducedMotion ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <HeroStaticBackground />
      )}

      <div className="absolute inset-0 video-overlay" />
      {!reducedMotion && <BlueprintGrid />}

      {!reducedMotion && !isMobile && (
        <>
          <FloatingGear size={80} className="absolute top-20 right-10 text-white hidden md:block" />
          <FloatingGear size={50} className="absolute bottom-32 left-10 text-white hidden md:block" reverse />
          <FloatingGear size={40} className="absolute top-40 left-1/4 text-white hidden lg:block" duration={30} />
        </>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24 pb-16 sm:pb-20">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8 }}
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 rounded-full glass text-accent text-xs sm:text-sm font-subheading font-semibold mb-4 sm:mb-6 tracking-wide max-w-full">
            Precision Engineering Manufacturer | Ahmedabad
          </span>
        </motion.div>

        <motion.h1
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.2 }}
          className="text-hero font-bold text-white mb-4 sm:mb-6 px-1"
        >
          Precision Engineering &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent block sm:inline mt-1 sm:mt-0">
            Industrial Machine Components
          </span>
        </motion.h1>

        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.4 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 font-subheading leading-relaxed px-2"
        >
          Manufacturing High Precision CNC, VMC, Grinding and Traub Components for Industrial Applications.
        </motion.p>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full mx-auto"
        >
          <Button href="/contact" variant="accent" size="lg" fullWidth className="sm:min-w-[150px]">
            <FileText size={20} />
            Get Quote
          </Button>
          <Button href={getTelUrl(COMPANY.phone)} variant="outline" size="lg" external fullWidth className="sm:min-w-[150px]">
            <Phone size={20} />
            Call Now
          </Button>
          <Button
            href={getWhatsAppUrl("Hello Hariom Enterprise, I need machining services.")}
            variant="secondary"
            size="lg"
            external
            fullWidth
            className="sm:min-w-[150px]"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </Button>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 1.2, duration: reducedMotion ? 0 : 1 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto w-full"
        >
          {[
            { value: "10+", label: "Services" },
            { value: "12+", label: "Products" },
            { value: "14+", label: "Industries" },
            { value: "100%", label: "Quality Focus" },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-white/70 text-xs sm:text-sm font-subheading">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {!reducedMotion && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-accent rounded-full" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
