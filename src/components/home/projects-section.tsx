"use client";

import { useLanguage } from "@/lib/i18n";
import { getPublishedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  const { t } = useLanguage();
  const projects = getPublishedProjects();

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 scroll-mt-16"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div id="projects-heading">
          <SectionHeading
            label={t.projectsSection.label}
            title={t.projectsSection.title}
            subtitle={t.projectsSection.subtitle}
          />
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
