"use strict";

import Image from "next/image";

const basePath = "/KrimsonDev";

import { motion, useMotionValue, useTransform } from "framer-motion";

const techIcons = [
  {
    src: `${basePath}/images/react-icon.png`,
    alt: "React",
    className: "top-10 left-0 md:top-24",
    delay: 0,
    duration: 5,
  },
  {
    src: `${basePath}/images/js-icon.png`,
    alt: "JavaScript",
    className: "bottom-12 left-2 md:bottom-32 md:left-8",
    delay: 0.5,
    duration: 6,
  },
  {
    src: `${basePath}/images/next-icon.png`,
    alt: "Next.js",
    className: "top-10 right-0 md:top-28",
    delay: 0.2,
    duration: 5.5,
  },
  {
    src: `${basePath}/images/aem-icon.webp`,
    alt: "AEM",
    className: "bottom-10 right-2 md:bottom-24 md:right-4",
    delay: 0.7,
    duration: 6.5,
  },
];

export default function HeroImage() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // 3D Tilt Values for Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse positions to rotational degrees
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="relative flex justify-center items-center perspective-[1000px]">
      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full bg-purple-600/20 blur-[70px] md:blur-[90px]"
      />

      {/* Pulse/Spin Background Rings */}
      <div className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full border border-blue-500/20 animate-[spin_120s_linear_infinite]" />
      <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-purple-500/30 animate-[spin_90s_linear_infinite_reverse]" />
      <div className="absolute w-[150px] h-[150px] md:w-[220px] md:h-[220px] rounded-full border border-cyan-500/20 animate-[spin_60s_linear_infinite]" />

      {/* 3D Interactive Profile Card Container */}
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-theme bg-[color:var(--card)] p-3 md:p-4 shadow-2xl select-none cursor-default z-20"
        onContextMenu={handleContextMenu}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Secure Image Layer - completely unclickable and untouchable */}
        <div
          className="pointer-events-none select-none"
          style={{ transform: "translateZ(30px)" }}
        >
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={420}
            height={520}
            priority
            draggable={false}
            className="w-[250px] sm:w-[300px] md:w-[420px] h-auto rounded-2xl object-cover pointer-events-none select-none"
          />
        </div>

        {/* Transparent Overriding Invisible Shield Mask */}
        <div
          className="absolute inset-0 z-50 w-full h-full bg-transparent cursor-default select-none pointer-events-auto"
          onContextMenu={handleContextMenu}
          draggable={false}
        />
      </motion.div>

      {/* Floating Tech Icons */}
      {techIcons.map((icon) => (
        <motion.div
          key={icon.alt}
          className={`absolute ${icon.className} z-30
            flex items-center justify-center
            w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20
            rounded-2xl border border-theme
            bg-panel backdrop-blur-md shadow-lg`}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: icon.delay,
          }}
          whileHover={{
            scale: 1.15,
            rotate: 8,
            y: -15,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={42}
            height={42}
            className="w-6 sm:w-8 md:w-10 h-auto object-contain pointer-events-none"
          />
        </motion.div>
      ))}
    </div>
  );
}
