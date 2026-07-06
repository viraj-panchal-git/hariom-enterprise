"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/hooks";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: reducedMotion ? 0 : 0.6 }}
      className={cn(
        "mb-5 sm:mb-6 md:mb-8",
        align === "center" && "text-center",
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "inline-block font-subheading text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3",
            light ? "text-accent" : "text-secondary"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-section-title font-bold",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 sm:mt-4 h-1 w-16 sm:w-20 rounded-full",
          align === "center" && "mx-auto",
          light ? "bg-accent" : "bg-gradient-to-r from-secondary to-accent"
        )}
      />
    </motion.div>
  );
}
