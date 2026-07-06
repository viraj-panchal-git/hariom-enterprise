"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, FileText, Wrench, Package, Building2, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "@/components/ui/Button";
import FloatingGear from "@/components/animations/FloatingGear";
import BlueprintGrid from "@/components/animations/BlueprintGrid";
import { COMPANY } from "@/lib/constants";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { useIsMobile, usePrefersReducedMotion, useCanHover } from "@/lib/hooks";

const HERO_VIDEO_SRC = "/videos/hero-lathe.mp4";

const CAPABILITIES = ["CNC", "VMC", "Grinding", "Traub"] as const;

const HERO_STATS = [
  { value: "10+", label: "Services", icon: Wrench },
  { value: "12+", label: "Products", icon: Package },
  { value: "14+", label: "Industries", icon: Building2 },
  { value: "100%", label: "Quality Focus", icon: ShieldCheck },
] as const;

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
  const canHover = useCanHover();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    video.play().catch(() => {});
  }, [reducedMotion, isMobile]);

  const fadeUp = (delay = 0) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay },
        };

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-10 sm:pb-12 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)} className="flex justify-center mb-4 sm:mb-5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs sm:text-sm font-subheading font-semibold text-white tracking-wide">
                Engineering Manufacturer
              </span>
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="text-hero font-bold text-white mb-3 sm:mb-4 tracking-tight leading-[1.15] max-w-2xl mx-auto"
          >
            Precision CNC, VMC & Grinding Job Work
          </motion.h1>

          <motion.div
            {...fadeUp(0.3)}
            className="hidden sm:block w-20 sm:w-28 h-1 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent mb-4 sm:mb-5 mx-auto"
            aria-hidden="true"
          />

          <motion.div
            {...fadeUp(0.35)}
            className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-5"
          >
            {CAPABILITIES.map((item) => (
              <span
                key={item}
                className="hero-capability-pill px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-subheading font-semibold text-white/90 tracking-wide uppercase"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp(0.55)}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6"
          >
            <Button href="/contact" variant="accent" size="lg" fullWidth className="sm:min-w-[180px] shadow-xl shadow-accent/20">
              <FileText size={20} />
              Get Quote
            </Button>

            <div className="flex rounded-xl border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden divide-x divide-white/15">
              <Button
                href={getTelUrl(COMPANY.phone)}
                variant="ghost"
                size="lg"
                external
                fullWidth
                className="rounded-none hover:bg-white/10 min-w-0 flex-1 sm:flex-none sm:min-w-[130px]"
              >
                <Phone size={18} />
                Call Now
              </Button>
              <Button
                href={getWhatsAppUrl("Hello Hariom Enterprise, I need machining services.")}
                variant="ghost"
                size="lg"
                external
                fullWidth
                className="rounded-none hover:bg-white/10 min-w-0 flex-1 sm:flex-none sm:min-w-[130px]"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.7)} className="w-full max-w-4xl mx-auto mt-2 sm:mt-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {HERO_STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.75 + i * 0.08 }}
                    whileHover={canHover && !reducedMotion ? { y: -6, scale: 1.02 } : undefined}
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/25 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl p-4 sm:p-5 text-center shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary" />
                    <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-accent/10 blur-2xl pointer-events-none" />

                    <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto mb-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <Icon size={22} className="text-accent" strokeWidth={1.75} />
                    </div>

                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-none mb-1.5">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/65 font-subheading uppercase tracking-[0.15em] leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
