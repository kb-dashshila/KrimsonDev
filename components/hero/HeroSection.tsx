"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import HeroImage from "./HeroImage";
import SocialLinks from "./SocialLinks";
import StatsSection from "../stats/StatsSection";

const popOutVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 45,
      damping: 22,
      mass: 1.2,
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[color:var(--background)]">
        {/* Adjusted padding rules for smooth mobile to desktop transitions */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:px-10 lg:py-24">
          {/* Changed grid layout: 1 column on mobile/tablet, 2 columns on large screens */}
          <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2 items-center">
            {/* Right Side Image Block moved first in DOM for mobile order control via tailwind order classes */}
            <div className="lg:order-2">
              <HeroImage />
            </div>

            {/* Left Content Section */}
            <motion.div
              variants={popOutVariants}
              initial="hidden"
              animate="visible"
              className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="mb-4 sm:mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-500 dark:text-cyan-400">
                5+ YEARS OF EXPERIENCE
              </div>

              {/* Added flexible responsive text scales (text-3xl to text-5xl to text-6xl) */}
              <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[color:var(--text-primary)]">
                Hi,
                <span>I&apos;m </span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent block sm:inline text-4xl sm:text-5xl md:text-6xl mt-1 sm:mt-0">
                  Kumkum Bala
                </span>
              </h1>

              <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl text-[color:var(--text-primary)] md:text-4xl font-medium">
                Frontend Engineer
                <span className="hidden sm:inline mx-2 text-[color:var(--secondary)]">
                  |
                </span>
                <span className="block sm:inline mt-1 sm:mt-0">AEM UI</span>
              </h2>

              <p className="max-w-xl text-base sm:text-lg leading-8 sm:leading-9 text-[color:var(--text-secondary)] text-center lg:text-left">
                Building scalable, accessible and high performance web
                applications using React, Next.js and AEM. Passionate about
                creating great user experiences and clean, maintainable code.
              </p>

              {/* Improved button layouts: full width stacks on small screens, row wraps on tablets */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row w-full sm:w-auto justify-center lg:justify-start gap-4">
                <Link
                  href="#projects"
                  className="w-full sm:w-auto text-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 sm:px-8 sm:py-4 font-semibold text-white transition transform active:scale-95 md:hover:scale-105 shadow-lg"
                >
                  View My Work
                </Link>

                <Link
                  href="#contact"
                  className="w-full sm:w-auto text-center rounded-xl border border-theme px-6 py-3.5 sm:px-8 sm:py-4 font-semibold text-[color:var(--text-primary)] transition md:hover:border-purple-500 bg-transparent"
                >
                  Get In Touch
                </Link>
              </div>

              <div className="mt-8 sm:mt-10">
                <SocialLinks />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <StatsSection />
    </>
  );
}
