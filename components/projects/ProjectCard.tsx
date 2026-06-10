import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  caseStudyUrl: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  caseStudyUrl,
}: ProjectCardProps) {
  return (
    <div className="group rounded-3xl border border-theme bg-[color:var(--card)] overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[color:var(--surface)] px-3 py-1 text-sm text-[color:var(--text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">
          {title}
        </h3>

        <p className="mt-4 text-[color:var(--text-secondary)] leading-7">
          {description}
        </p>

        <div className="mt-6 flex gap-6">
          <a
            href={demoUrl}
            className="flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
          >
            Live Demo
            <ExternalLink size={16} />
          </a>

          <a
            href={caseStudyUrl}
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
          >
            Case Study
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
