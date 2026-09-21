"use client";

import { useLanguage } from "@/lib/i18n";
import { getPublishedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const projects = getPublishedProjects();

  return (
    <div className="relative overflow-hidden">
      {/* خلفية */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[420px] bg-grid bg-grid-fade" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 start-1/3 size-[380px] rounded-full bg-violet-600/15 blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-24">
        {/* الهيدر */}
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400">
            <span className="inline-block size-1.5 rounded-full bg-violet-500" aria-hidden />
            {t.projectsPage.label}
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight">
            {t.projectsPage.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.projectsPage.subtitle}
          </p>
        </Reveal>

        {/* كروت المشاريع */}
        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
