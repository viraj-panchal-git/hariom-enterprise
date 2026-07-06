"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCanHover, usePrefersReducedMotion } from "@/lib/hooks";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function AnimatedCard({
  children,
  className,
  delay = 0,
  hover = true,
}: AnimatedCardProps) {
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : delay }}
      whileHover={
        hover && canHover && !reducedMotion
          ? { y: -8, transition: { duration: 0.3 } }
          : undefined
      }
      className={cn(
        "card-flex bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-primary/5 border border-gray-100 overflow-hidden transition-shadow duration-300",
        hover && canHover && "hover-lift hover-shadow",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
