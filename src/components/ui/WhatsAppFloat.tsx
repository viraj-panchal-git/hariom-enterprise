"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/utils";
import { useCanHover, usePrefersReducedMotion } from "@/lib/hooks";

export default function WhatsAppFloat() {
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.a
      href={getWhatsAppUrl("Hello Hariom Enterprise, I need machining services.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors touch-target"
      initial={reducedMotion ? false : { scale: 0 }}
      animate={{ scale: 1 }}
      transition={reducedMotion ? { duration: 0 } : { delay: 2, type: "spring" }}
      whileHover={canHover && !reducedMotion ? { scale: 1.1 } : undefined}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} className="sm:w-7 sm:h-7" />
    </motion.a>
  );
}
