"use strict";

import { motion } from "framer-motion";

interface AboutFeatureProps {
  text: string;
}

// Icon Drawing Track Configuration
const checkVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      delay: 0.2, // Pops up right after typing finishes
    },
  },
};

// Sentence Animation Driver
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.015, // Speed of typing characters
    },
  },
};

// Letter Visibility Matrix
const letterVariants = {
  hidden: { opacity: 0, display: "none" },
  visible: { opacity: 1, display: "inline" },
};

export default function AboutFeature({ text }: AboutFeatureProps) {
  // Split text into individual characters for the typewriter effect
  const characters = Array.from(text);

  return (
    <div className="group flex items-start gap-3 p-2 rounded-xl transition-all duration-300 md:hover:bg-cyan-500/5 w-full">
      {/* Premium SVG Checkmark (Animates like an actual pencil stroke drawing) */}
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
          {/* Muted background circle rail */}
          <circle cx="12" cy="12" r="10" className="opacity-20" />

          {/* Animated check line */}
          <motion.path d="M20 6L9 17l-5-5" variants={checkVariants} />
        </svg>
      </div>

      {/* Typewriter text container wrapper */}
      <motion.span
        variants={sentenceVariants}
        className="text-sm sm:text-base font-mono text-[color:var(--text-secondary)] group-hover:text-[color:var(--text-primary)] transition-colors duration-200 leading-relaxed tracking-tight"
      >
        {characters.map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
