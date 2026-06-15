"use client";

import { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiSass,
  SiRedux,
  SiTailwindcss,
  SiLighthouse,
  SiGooglechrome,
  SiStorybook,
  SiGit,
  SiGithub,
  SiWebpack,
  SiBabel,
  SiJenkins,
  SiNpm,
  SiFigma,
} from "react-icons/si";
// import { FaAdobe } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoAdobe } from "react-icons/bi";

import SkillsTabs from "./SkillsTabs";
import SkillCard from "./SkillCard";

const skillsData = {
  Frontend: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "var(--nextjs-color)" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Sass", icon: SiSass, color: "#CC6699" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  ],

  AEM: [
    { name: "AEM ClientLibraries", icon: BiLogoAdobe, color: "#FF0000" },
    { name: "AEM Components", icon: BiLogoAdobe, color: "#FF0000" },
    { name: "AEM EditableTemplates", icon: BiLogoAdobe, color: "#FF0000" },
    { name: "Content Fragments", icon: BiLogoAdobe, color: "#FF0000" },
    { name: "Experience Fragments", icon: BiLogoAdobe, color: "#FF0000" },
    { name: "AEM Assets", icon: BiLogoAdobe, color: "#FF0000" },
    { name: "AEM Dispatcher", icon: BiLogoAdobe, color: "#FF0000" },
    { name: "Sightly/HTL", icon: BiLogoAdobe, color: "#FF0000" },
  ],

  Accessibility: [
    { name: "WCAG", icon: SiGooglechrome, color: "#4285F4" },
    { name: "ARIA", icon: SiGooglechrome, color: "#4285F4" },
    { name: "Screen Readers", icon: SiGooglechrome, color: "#4285F4" },
    { name: "Keyboard Navigation", icon: SiGooglechrome, color: "#4285F4" },
    { name: "Color Contrast", icon: SiGooglechrome, color: "#4285F4" },
    { name: "Semantic HTML", icon: SiGooglechrome, color: "#4285F4" },
    { name: "Accessibility Testing", icon: SiGooglechrome, color: "#4285F4" },
  ],

  Tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
    { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
    { name: "Webpack", icon: SiWebpack, color: "#11B5E4" },
    { name: "Babel", icon: SiBabel, color: "#F38020" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
    { name: "NPM", icon: SiNpm, color: "#CB3837" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Lighthouse", icon: SiLighthouse, color: "#F44B21" },
    { name: "Core Web Vitals", icon: SiGooglechrome, color: "#4285F4" },
  ],
};

const tabs = Object.keys(skillsData);

export default function SkillsSection() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof skillsData>("Frontend");

  return (
    <section
      id="skills"
      className="bg-[color:var(--background)] py-20 px-6 lg:px-12"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-theme bg-[color:var(--card)] p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-500 dark:text-cyan-400">
              MY SKILLS
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[color:var(--text-primary)]">
              Technologies I work with
            </h2>
          </div>

          <SkillsTabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={(tab) => setActiveTab(tab as keyof typeof skillsData)}
          />
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[color:var(--card)] to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[color:var(--card)] to-transparent" />

          <div className="flex gap-6 w-max animate-skills-marquee">
            {[...skillsData[activeTab], ...skillsData[activeTab]].map(
              (skill, index) => (
                <SkillCard
                  key={`${skill.name}-${index}`}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
