"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/hooks";

interface IconGradientPanelProps {
  icon: LucideIcon;
  gradient: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { panel: "h-28 sm:h-32", icon: 28, ring: "w-14 h-14" },
  md: { panel: "h-36 sm:h-40", icon: 36, ring: "w-16 h-16 sm:w-20 sm:h-20" },
  lg: { panel: "h-44 sm:h-48 md:h-52", icon: 44, ring: "w-20 h-20 sm:w-24 sm:h-24" },
};

export default function IconGradientPanel({
  icon: Icon,
  gradient,
  size = "md",
  className = "",
}: IconGradientPanelProps) {
  const reducedMotion = usePrefersReducedMotion();
  const dims = sizeMap[size];

  return (
    <div
      className={`relative overflow-hidden ${dims.panel} ${className}`}
      aria-hidden="true"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute inset-0 blueprint-overlay opacity-40" />
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-accent/20 blur-xl" />

      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" aria-hidden="true">
        <defs>
          <pattern id="eng-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#eng-grid)" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`${dims.ring} rounded-2xl glass flex items-center justify-center shadow-lg`}
        >
          <Icon size={dims.icon} className="text-white" strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
}
