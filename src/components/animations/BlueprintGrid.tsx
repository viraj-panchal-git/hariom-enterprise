"use client";

import { motion } from "framer-motion";

export default function BlueprintGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="blueprint" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0B3C5D" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="1" fill="#0B3C5D" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#blueprint)" />
      <motion.circle
        cx="20%"
        cy="30%"
        r="80"
        fill="none"
        stroke="#1E88E5"
        strokeWidth="0.5"
        strokeDasharray="8 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.rect
        x="60%"
        y="50%"
        width="120"
        height="80"
        fill="none"
        stroke="#FF8C00"
        strokeWidth="0.5"
        strokeDasharray="6 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
    </svg>
  );
}
