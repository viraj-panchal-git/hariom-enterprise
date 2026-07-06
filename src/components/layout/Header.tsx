"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { getTelUrl } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { usePrefersReducedMotion } from "@/lib/hooks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-primary shadow-2xl border-b border-white/10 py-2 sm:py-3"
            : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center shrink-0 min-w-0" onClick={closeMenu}>
            <Image
              src="/logo/logo-horizontal-white.svg"
              alt={COMPANY.name}
              width={220}
              height={55}
              className="h-10 w-auto sm:h-11 md:h-12 lg:h-14 max-w-[170px] sm:max-w-[195px] md:max-w-[220px]"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-subheading text-sm font-medium text-white/90 hover:text-accent transition-colors relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <a
              href={getTelUrl(COMPANY.phone)}
              className="flex items-center gap-2 text-white/90 hover:text-accent transition-colors text-sm whitespace-nowrap"
            >
              <Phone size={16} className="shrink-0" />
              <span className="hidden xl:inline">{COMPANY.phone}</span>
            </a>
            <Button href="/contact" variant="accent" size="sm">
              Get Quote
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2.5 touch-target rounded-lg hover:bg-white/10 transition-colors shrink-0"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { type: "spring", damping: 28, stiffness: 300 }
              }
              className="fixed top-0 right-0 z-50 h-full w-full max-w-[min(100vw,20rem)] sm:max-w-xs glass-dark border-l border-white/10 lg:hidden flex flex-col"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10">
                <span className="text-white font-subheading font-semibold">Menu</span>
                <button
                  onClick={closeMenu}
                  className="text-white p-2.5 touch-target rounded-lg hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col flex-1 p-4 sm:p-5 gap-1 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-white font-subheading text-base sm:text-lg py-3.5 px-3 rounded-lg hover:bg-white/10 transition-colors touch-target flex items-center border-b border-white/5"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="p-4 sm:p-5 border-t border-white/10 space-y-3">
                <a
                  href={getTelUrl(COMPANY.phone)}
                  className="flex items-center justify-center gap-2 text-white/90 hover:text-accent transition-colors text-sm py-3 touch-target"
                >
                  <Phone size={18} />
                  {COMPANY.phone}
                </a>
                <Button href="/contact" variant="accent" fullWidth onClick={closeMenu}>
                  Get Quote
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
