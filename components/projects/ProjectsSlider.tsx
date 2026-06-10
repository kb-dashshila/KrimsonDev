"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface ProjectsSliderProps {
  projects: any[];
}

export default function ProjectsSlider({ projects }: ProjectsSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  return (
    <div className="relative">
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute -left-5 top-1/2 z-30 -translate-y-1/2 rounded-full border border-theme bg-[color:var(--card)] p-3"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute -right-5 top-1/2 z-30 -translate-y-1/2 rounded-full border border-theme bg-[color:var(--card)] p-3"
      >
        <ChevronRight size={20} />
      </button>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="group flex gap-8 py-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                min-w-0
                flex-[0_0_100%]
                md:flex-[0_0_calc(50%-16px)]
                lg:flex-[0_0_calc(33.333%-22px)]

                transition-all duration-500 ease-out

                group-hover:scale-90
                group-hover:opacity-70

                hover:!scale-110
                hover:!opacity-100
                hover:z-20
              "
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
