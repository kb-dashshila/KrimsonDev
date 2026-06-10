"use client";

import Link from "next/link";
import HeroImage from "./HeroImage";
import SocialLinks from "./SocialLinks";
import StatsSection from "../stats/StatsSection";

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#020617]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                5+ YEARS OF EXPERIENCE
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Hi,
                <span className="">I&apos;m </span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent lg:text-6xl">
                  Kumkum Bala
                </span>
              </h1>

              <h2 className="mb-8 text-3xl text-white lg:text-4xl">
                Frontend Engineer
                <span className="ml-2 text-purple-500">| </span>
                AEM UI
              </h2>

              <p className="max-w-xl text-lg leading-9 text-slate-400">
                Building scalable, accessible and high performance web
                applications using React, Next.js and AEM. Passionate about
                creating great user experiences and clean, maintainable code.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#projects"
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  View My Work
                </Link>

                <Link
                  href="#contact"
                  className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-purple-500"
                >
                  Get In Touch
                </Link>
              </div>

              <div className="mt-10">
                <SocialLinks />
              </div>
            </div>

            {/* Right Side */}
            <HeroImage />
          </div>
        </div>
      </section>
      <StatsSection />
    </>
  );
}
