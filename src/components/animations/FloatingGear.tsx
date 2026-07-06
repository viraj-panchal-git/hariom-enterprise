"use client";

import { motion } from "framer-motion";

interface FloatingGearProps {
  size?: number;
  className?: string;
  duration?: number;
  reverse?: boolean;
}

export default function FloatingGear({
  size = 60,
  className = "",
  duration = 20,
  reverse = false,
}: FloatingGearProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`opacity-10 ${className}`}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <rect
          key={angle}
          x="46"
          y="8"
          width="8"
          height="12"
          rx="2"
          fill="currentColor"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </motion.svg>
  );
}
