"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCanHover, usePrefersReducedMotion } from "@/lib/hooks";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
}

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25",
  secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/25",
  accent: "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25",
  outline: "border-2 border-white text-white hover:bg-white hover:text-primary",
  ghost: "text-white hover:bg-white/10",
};

const sizes = {
  sm: "px-3 py-2.5 sm:px-4 sm:py-2 text-xs sm:text-sm min-h-[44px]",
  md: "px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-base min-h-[44px]",
  lg: "px-5 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg min-h-[48px]",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external,
  type = "button",
  disabled,
  fullWidth,
}: ButtonProps) {
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-subheading font-semibold transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    fullWidth && "w-full sm:w-auto",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const motionProps = canHover && !reducedMotion
    ? { whileHover: { scale: disabled ? 1 : 1.03 }, whileTap: { scale: disabled ? 1 : 0.97 } }
    : { whileTap: { scale: disabled ? 1 : 0.97 } };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div
        className={cn("inline-flex", fullWidth && "w-full sm:w-auto")}
        {...motionProps}
      >
        <Link
          href={href}
          className={cn(classes, fullWidth && "w-full sm:w-auto")}
          onClick={onClick}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
