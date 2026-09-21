"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import type { Project } from "@/data/projects";
import { techByName } from "@/data/tech";
import { TechIcon } from "@/components/tech-icon";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * كارت مشروع بعرض محترم: أيقونة، عنوان، وصف، تقنيات، مميزات، وزراير
 */
export function ProjectCard({
  project,
  index = 0,
  compact = false,
}: {
  project: Project;
  index?: number;
  compact?: boolean;
}) {
  const { t, lang, dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const isAr = lang === "ar";
  const loc = (o: { ar: string; en: string }) => (isAr ? o.ar : o.en);

  const shownFeatures = compact ? project.features.slice(0, 4) : project.features;
  const hiddenCount = project.features.length - shownFeatures.length;

  return (
    <Reveal delay={index * 0.08}>
      <article
        className={cn(
          "group relative rounded-3xl border border-border/70 bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-300",
          "hover:border-violet-500/40 hover:shadow-[0_0_60px_-20px_rgba(139,92,246,0.35)]",
          !project.published && "opacity-90"
        )}
      >
        {/* شريط متدرج فوق */}
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent"
          aria-hidden
        />

        <div className="p-6 sm:p-8">
          {/* الهيدر */}
          <div className="flex items-start gap-4">
            <span
              className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/15 to-blue-500/15 border border-violet-500/20 text-3xl"
              aria-hidden
            >
              {project.emoji}
            </span>
            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                {loc(project.title)}
              </h3>
              <p className="mt-1 text-sm font-semibold text-violet-600 dark:text-violet-400">
                {loc(project.subtitle)}
              </p>
            </div>
          </div>

          {/* الوصف */}
          <p className="mt-5 text-muted-foreground leading-relaxed">
            {loc(project.short)}
          </p>

          {/* التقنيات */}
          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {t.projectsSection.techUsed}
            </p>
            <ul className="mt-2.5 flex flex-wrap items-center gap-2">
              {project.technologies.map((name) => {
                const item = techByName.get(name.toLowerCase());
                return (
                  <li
                    key={name}
                    className="flex items-center gap-1.5 rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs font-bold"
                    style={item ? { color: item.color } : undefined}
                  >
                    {item && <TechIcon item={item} size={14} />}
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* أهم المميزات */}
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {t.projectsSection.keyFeatures}
            </p>
            <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {shownFeatures.map((f) => (
                <li key={f.title.en} className="flex items-start gap-2 text-sm">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-violet-500"
                    aria-hidden
                  />
                  <span className="text-foreground/85">{loc(f.title)}</span>
                </li>
              ))}
              {hiddenCount > 0 && (
                <li className="flex items-center gap-2 text-sm text-muted-foreground italic">
                  <Sparkles className="size-4 shrink-0" aria-hidden />
                  {t.projectsSection.moreFeatures}
                </li>
              )}
            </ul>
          </div>

          {/* زراير */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.published ? (
              <>
                <Button asChild className="rounded-full font-bold glow-sm">
                  <Link href={`/projects/${project.slug}`}>
                    {t.projectsSection.viewCaseStudy}
                    <ArrowIcon className="size-4" aria-hidden />
                  </Link>
                </Button>
                {project.liveUrl && (
                  <Button asChild variant="outline" className="rounded-full font-bold">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-track={`live:${project.slug}`}>
                      <ExternalLink className="size-4" aria-hidden />
                      {t.projectsSection.viewProject}
                    </a>
                  </Button>
                )}
              </>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-violet-500/40 bg-violet-500/5 px-4 py-2 text-xs font-bold text-violet-600 dark:text-violet-400">
                <span className="relative flex size-2" aria-hidden>
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-violet-400 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-violet-500" />
                </span>
                {t.projectsPage.comingSoonNote}
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
