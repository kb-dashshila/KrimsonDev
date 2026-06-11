"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

import ProjectTabs from "./ProjectTabs";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects-data";
import ProjectsSlider from "./ProjectsSlider";
import Link from "next/link";

const tabs = ["All", "React", "Next.js", "AEM", "Accessibility", "BFSI"];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return projects;

    return projects.filter(
      (project) =>
        project.category === activeTab ||
        project.technologies.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <section
      id="projects"
      className="bg-[color:var(--background)] py-24 px-6 lg:px-12"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-theme bg-[color:var(--card)] p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div>
            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500 dark:text-blue-400">
              FEATURED PROJECTS
            </span>

            <h2 className="mt-5 text-5xl font-bold text-[color:var(--text-primary)]">
              Things I've built
            </h2>
          </div>

          <Link
            href="#projects"
            className="flex items-center gap-2 rounded-xl border border-theme px-6 py-3 text-[color:var(--text-primary)] hover:border-blue-500"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10">
          <ProjectTabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        <div className="mt-12">
          <ProjectsSlider projects={filteredProjects} />
        </div>
      </div>
    </section>
  );
}
