"use client";

import { motion } from "framer-motion";
import FloatingGear from "@/components/animations/FloatingGear";
import { usePrefersReducedMotion } from "@/lib/hooks";

export default function EngineeringIllustration() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-[#0d4a6f] to-secondary shadow-2xl aspect-[4/3] min-h-[220px] max-h-[320px]">
      <div className="absolute inset-0 blueprint-overlay" />
      <div className="absolute inset-0 metal-texture opacity-30" />

      {!reducedMotion && (
        <>
          <FloatingGear size={56} className="absolute top-6 right-8 text-white/20" duration={25} />
          <FloatingGear size={36} className="absolute bottom-10 left-6 text-accent/30" reverse duration={18} />
        </>
      )}

      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full p-6 sm:p-8"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="machineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E88E5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* CNC lathe isometric outline */}
        <motion.g
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <rect x="60" y="180" width="280" height="20" rx="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <rect x="80" y="120" width="120" height="60" rx="4" fill="none" stroke="url(#machineGrad)" strokeWidth="2" />
          <rect x="200" y="100" width="100" height="80" rx="4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <circle cx="140" cy="150" r="25" fill="none" stroke="#FF8C00" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="165" y1="150" x2="200" y2="150" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <rect x="210" y="130" width="30" height="40" fill="none" stroke="#1E88E5" strokeWidth="1.5" />
          <path d="M 100 120 L 100 80 L 160 80 L 160 120" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <text x="90" y="70" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="monospace">Ø 25.00 ±0.01</text>
          <text x="250" y="95" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="monospace">Ra 0.4</text>
        </motion.g>

        {/* Dimension lines */}
        <motion.g
          initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <line x1="80" y1="200" x2="80" y2="220" stroke="rgba(30,136,229,0.6)" strokeWidth="1" />
          <line x1="200" y1="200" x2="200" y2="220" stroke="rgba(30,136,229,0.6)" strokeWidth="1" />
          <line x1="80" y1="215" x2="200" y2="215" stroke="rgba(30,136,229,0.6)" strokeWidth="1" />
          <text x="125" y="235" fill="rgba(30,136,229,0.7)" fontSize="9" fontFamily="monospace" textAnchor="middle">120mm</text>
        </motion.g>
      </svg>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 to-transparent p-4 sm:p-6">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { value: "±0.01", label: "mm Tolerance" },
            { value: "Ra 0.4", label: "Surface Finish" },
            { value: "100%", label: "Inspected" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-lg p-2 sm:p-3 text-center">
              <div className="text-accent font-bold text-sm sm:text-base font-mono">{stat.value}</div>
              <div className="text-white/60 text-[9px] sm:text-[10px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
