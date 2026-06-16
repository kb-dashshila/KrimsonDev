"use client";

import { ArrowRight } from "lucide-react";
import AboutFeature from "./AboutFeature";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const features = [
  "Strong expertise in React, Next.js, JavaScript, TypeScript",
  "Adobe Experience Manager (AEM) specialist",
  "Building accessible and inclusive user interfaces",
  "Performance optimization and Core Web Vitals",
  "Experience in BFSI and Banking domain applications",
];

// Cascades the typing triggers across items sequentially
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.9, // Waits for the previous line to finish typing before starting the next
      delayChildren: 0.1,
    },
  },
};

// Basic element gate trigger
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
};

export default function AboutContent() {
  return (
    <div className="w-full">
      <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-cyan-500 dark:text-cyan-400">
        ABOUT ME
      </span>

      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--text-primary)] leading-tight">
        I build solutions that solve{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          real world problems
        </span>
      </h2>

      <p className="mt-6 text-base sm:text-lg text-[color:var(--text-secondary)] leading-7 sm:leading-8">
        I&apos;m a Frontend Engineer with 5+ years of experience in building
        enterprise applications using React, Next.js and Adobe Experience
        Manager (AEM). I focus on performance, accessibility and clean
        architecture.
      </p>

      {/* Sequential Animation Container triggered on viewport intersection */}
      <motion.div
        className="mt-8 flex flex-col space-y-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Triggers when element clears 100px of viewport
      >
        {features.map((feature) => (
          <motion.div key={feature} variants={itemVariants}>
            <AboutFeature text={feature} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 flex justify-start w-full sm:w-auto">
        <Link
          href="/"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-theme px-6 py-3.5 text-base font-semibold text-[color:var(--text-primary)] transition-all duration-300 md:hover:border-cyan-500 md:hover:bg-cyan-500/5 active:scale-95"
        >
          More About Me
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}
