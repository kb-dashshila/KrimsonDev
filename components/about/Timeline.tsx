"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import TimelineItem from "./TimelineItem";

interface TimelineItemType {
  year: string;
  title: string;
}

interface TimelineProps {
  items: TimelineItemType[];
}

export default function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Tracks the scroll progress specifically within this timeline container boundary
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Smooths out the scroll calculation bar velocity using real-time spring physics
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="relative rounded-3xl border border-theme bg-[color:var(--card)] p-6 sm:p-8 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/5"
    >
      {/* Glow Ambient Layer - Soft decorative background mesh */}
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="relative">
        {/* Modern Tracking Track: Underlying muted foundation rail */}
        <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-[color:var(--border-muted)] opacity-20 dark:opacity-10" />

        {/* Dynamic Animated Line: Grows and updates fluidly as the reader scrolls downwards */}
        <motion.div
          className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 origin-top"
          style={{ scaleY }}
        />

        {/* Content Stacking */}
        <div className="space-y-12 relative z-10">
          {items.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: index * 0.05, // Tiny micro-stagger for cascading item loading
              }}
            >
              <TimelineItem year={item.year} title={item.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
