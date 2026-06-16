"use strict";

import { motion, Variants } from "framer-motion";

interface AboutFeatureProps {
  text: string;
}

// Explicitly typed as Variants to map pathLength and spring types seamlessly
const checkVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      delay: 0.4, // Delays the drawing until the sentence finishes typing out
    },
  },
};

const sentenceVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.015, // Smooth typewriter character speed
    },
  },
};

// Swapped display manipulation for pure opacity handling to fix structural flashing/shifting errors
const letterVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function AboutFeature({ text }: AboutFeatureProps) {
  const characters = Array.from(text);

  return (
    <div className="group flex items-start gap-3 p-2 rounded-xl transition-all duration-300 md:hover:bg-cyan-500/5 w-full">
      {/* SVG Container Inherits Animation states (hidden/visible) from Parent Context */}
      <div className="shrink-0 mt-1 flex items-center justify-center w-[18px] h-[18px]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-cyan-500 dark:text-cyan-400 w-full h-full"
        >
          <circle cx="12" cy="12" r="10" className="opacity-20" />
          <motion.path d="M20 6L9 17l-5-5" variants={checkVariants} />
        </svg>
      </div>

      {/* Typewriter Text Node */}
      <motion.span
        variants={sentenceVariants}
        className="text-sm sm:text-base text-[color:var(--text-secondary)] group-hover:text-[color:var(--text-primary)] transition-colors duration-200 leading-relaxed tracking-tight"
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline" // Keeps rendering consistent without block shifts
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
