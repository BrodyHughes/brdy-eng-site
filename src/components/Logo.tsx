"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ size = "md", showText = false }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 72, height: 72 },
  };

  const { width, height } = sizes[size];

  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src="/brdy-logo.png"
        alt="brdy eng."
        width={width}
        height={height}
        className="object-contain"
        priority
      />
      {showText && (
        <span className="font-display text-xl">brdy eng.</span>
      )}
    </motion.div>
  );
}
