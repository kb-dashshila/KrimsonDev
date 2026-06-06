import { ArrowRight } from "lucide-react";
import AboutFeature from "./AboutFeature";

const features = [
  "Strong expertise in React, Next.js, JavaScript, TypeScript",
  "Adobe Experience Manager (AEM) specialist",
  "Building accessible and inclusive user interfaces",
  "Performance optimization and Core Web Vitals",
  "Experience in BFSI and Banking domain applications",
];

export default function AboutContent() {
  return (
    <div>
      <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
        ABOUT ME
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
        I build solutions that solve{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          real world problems
        </span>
      </h2>

      <p className="mt-6 text-slate-400 leading-8">
        I'm a Frontend Engineer with 5+ years of experience in building
        enterprise applications using React, Next.js and Adobe Experience
        Manager (AEM). I focus on performance, accessibility and clean
        architecture.
      </p>

      <div className="mt-8 space-y-4">
        {features.map((feature) => (
          <AboutFeature key={feature} text={feature} />
        ))}
      </div>

      <button className="mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:border-cyan-500 hover:bg-cyan-500/10">
        More About Me
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
