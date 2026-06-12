"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideFromTopProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
}

export default function SlideFromTop({
  children,
  className = "",
  duration = 0.8,
  yOffset = -40,
}: SlideFromTopProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
