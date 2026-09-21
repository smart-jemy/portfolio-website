"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CircleAlert,
  Lightbulb,
  UserRoundCheck,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { getProjectBySlug, getPublishedProjects } from "@/data/projects";
import { techByName } from "@/data/tech";
import { TechIcon } from "@/components/tech-icon";
import { ScreenshotFrame } from "@/components/screenshot-placeholder";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { whatsappUrl, whatsappDefaultMsg, hasWhatsapp } from "@/config/site";

const toneStyles: Record<string, string> = {
  violet: "text-violet-500 bg-violet-500/10 border-violet-500/25",
  amber: "text-amber-500 bg-amber-500/10 border-amber-500/25",
  emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/25",
  blue: "text-blue-500 bg-blue-500/10 border-blue-500/25",
};

function SectionTitle({
  icon: Icon,
  title,
  tone = "violet",
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tone?: "violet" | "amber" | "emerald" | "blue";
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`flex size-10 items-center justify-center rounded-xl border ${toneStyles[tone]}`}
        aria-hidden
      >
        <Icon className="size-5" />
      </span>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{title}</h2>
    </div>
  );
}

/**
 * ملاحظة: بنستقبل `slug` مش الـ object نفسه — عشان الـ page السيرفري
 * ميبعتلش functions (أيقونات lucide) عبر حدود الـ Client Component.
 */
export function CaseStudy({ slug }: { slug: string }) {
  const { t, lang, dir } = useLanguage();
  const project = getProjectBySlug(slug);
  if (!project) return null;
  const isAr = lang === "ar";
  const loc = (o: { ar: string; en: string }) => (isAr ? o.ar : o.en);
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const BackArrow = dir === "rtl" ? ArrowRight : ArrowLeft;

  // المشروع اللي قبله و بعده (للتنقل)
  const published = getPublishedProjects();
  const idx = published.findIndex((p) => p.slug === project.slug);
  const prev = idx > 0 ? published[idx - 1] : null;
  const next = idx >= 0 && idx < published.length - 1 ? published[idx + 1] : null;

  return (
    <div className="relative overflow-hidden">
      {/* خلفية */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[380px] bg-grid bg-grid-fade" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 start-1/4 size-[360px] rounded-full bg-violet-600/15 blur-[120px]"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-24">
        {/* رجوع */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <BackArrow className="size-4" aria-hidden />
          {t.caseStudy.back}
        </Link>

        {/* هيدر المشروع */}
        <Reveal className="mt-8">
          <div className="flex items-start gap-4 sm:gap-5">
            <span
              className="flex size-16 sm:size-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/15 to-blue-500/15 border border-violet-500/20 text-4xl sm:text-5xl"
              aria-hidden
            >
              {project.emoji}
            </span>
            <div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                {loc(project.title)}
              </h1>
              <p className="mt-2 text-sm sm:text-base font-semibold text-violet-600 dark:text-violet-400">
                {loc(project.subtitle)}
              </p>
            </div>
          </div>

          {/* ميتا */}
          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="glass rounded-2xl p-4">
              <dt className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {t.caseStudy.meta.type}
              </dt>
              <dd className="mt-1.5 text-sm font-bold">{loc(project.type)}</dd>
            </div>
            <div className="glass rounded-2xl p-4">
              <dt className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {t.caseStudy.meta.year}
              </dt>
              <dd className="mt-1.5 text-sm font-bold">{project.year}</dd>
            </div>
            <div className="glass rounded-2xl p-4">
              <dt className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {t.caseStudy.meta.role}
              </dt>
              <dd className="mt-1.5 text-sm font-bold">{loc(project.role)}</dd>
            </div>
          </dl>

          {/* تقنيات الهيدر */}
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((name) => {
              const item = techByName.get(name.toLowerCase());
              return (
                <li
                  key={name}
                  className="flex items-center gap-1.5 rounded-full border border-border/70 bg-secondary/60 px-3.5 py-1.5 text-xs font-bold"
                  style={item ? { color: item.color } : undefined}
                >
                  {item && <TechIcon item={item} size={15} />}
                  {name}
                </li>
              );
            })}
          </ul>

          {/* لينك المشروع الحي */}
          {project.liveUrl && (
            <div className="mt-6">
              <Button asChild variant="outline" className="rounded-full font-bold">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-4" aria-hidden />
                  {t.caseStudy.viewLive}
                </a>
              </Button>
            </div>
          )}
        </Reveal>

        <div className="mt-14 space-y-14">
          {/* المشكلة */}
          <Reveal>
            <section aria-labelledby="cs-problem">
              <SectionTitle icon={CircleAlert} title={t.caseStudy.problem} tone="amber" />
              <div className="mt-5 space-y-4 border-s-2 border-amber-500/40 ps-5 sm:ps-6">
                {project.problem.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-loose">
                    {loc(p)}
                  </p>
                ))}
              </div>
            </section>
          </Reveal>

          {/* الحل */}
          <Reveal>
            <section aria-labelledby="cs-solution">
              <SectionTitle icon={Lightbulb} title={t.caseStudy.solution} tone="violet" />
              <div className="mt-5 space-y-4 border-s-2 border-violet-500/40 ps-5 sm:ps-6">
                {project.solution.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-loose">
                    {loc(p)}
                  </p>
                ))}
              </div>
            </section>
          </Reveal>

          {/* دوري في المشروع */}
          <Reveal>
            <section aria-labelledby="cs-role">
              <SectionTitle icon={UserRoundCheck} title={t.caseStudy.myRole} tone="blue" />
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {project.myRoleChips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-600 dark:text-blue-400"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* أبرز الخصائص */}
          <Reveal>
            <section aria-labelledby="cs-features">
              <SectionTitle icon={Lightbulb} title={t.caseStudy.features} tone="violet" />
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {project.features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <article
                      key={f.title.en}
                      className="group rounded-2xl border border-border/70 bg-card/60 p-5 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_10px_40px_-16px_rgba(139,92,246,0.4)]"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/25 text-violet-500 dark:text-violet-400"
                          aria-hidden
                        >
                          <Icon className="size-5" />
                        </span>
                        <h3 className="font-black text-[15px] leading-snug">
                          {loc(f.title)}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {loc(f.desc)}
                      </p>
                    </article>
                  );
                })}
              </div>
            </section>
          </Reveal>

          {/* Screenshots */}
          <Reveal>
            <section aria-labelledby="cs-shots">
              <h2
                id="cs-shots"
                className="text-2xl sm:text-3xl font-black tracking-tight"
              >
                {t.caseStudy.screenshots}
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                {project.screenshots.map((shot, i) => (
                  <ScreenshotFrame key={i} shot={shot} />
                ))}
              </div>
            </section>
          </Reveal>

          {/* النتيجة */}
          <Reveal>
            <section aria-labelledby="cs-result">
              <SectionTitle icon={TrendingUp} title={t.caseStudy.result} tone="emerald" />
              <div className="mt-5 space-y-4 border-s-2 border-emerald-500/40 ps-5 sm:ps-6">
                {project.results.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-loose">
                    {loc(p)}
                  </p>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-6">
                <p className="text-sm font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {t.caseStudy.impact}
                </p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {project.impact.map((line, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="mt-1 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20"
                        aria-hidden
                      >
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-foreground/85">{loc(line)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </Reveal>

          {/* التقنيات بالتفصيل */}
          <Reveal>
            <section aria-labelledby="cs-tech">
              <h2
                id="cs-tech"
                className="text-2xl sm:text-3xl font-black tracking-tight"
              >
                {t.caseStudy.techTitle}
              </h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {project.technologies.map((name) => {
                  const item = techByName.get(name.toLowerCase());
                  return (
                    <li
                      key={name}
                      className="flex items-center gap-2.5 rounded-2xl border border-border/70 bg-card/70 px-4 py-3"
                    >
                      {item && <TechIcon item={item} size={26} />}
                      <span className="text-sm font-bold">{name}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          </Reveal>

          {/* تنقل بين المشاريع */}
          <Reveal>
            <nav
              aria-label="Project navigation"
              className="grid sm:grid-cols-2 gap-4"
            >
              {prev ? (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="group rounded-2xl border border-border/70 bg-card/60 p-5 transition-all hover:border-violet-500/40"
                >
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    {t.caseStudy.prevProject}
                  </p>
                  <p className="mt-2 font-bold text-sm group-hover:text-violet-500 transition-colors">
                    {loc(prev.title)}
                  </p>
                </Link>
              ) : (
                <span aria-hidden />
              )}
              {next && (
                <Link
                  href={`/projects/${next.slug}`}
                  className="group rounded-2xl border border-border/70 bg-card/60 p-5 transition-all hover:border-violet-500/40 sm:text-end"
                >
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    {t.caseStudy.nextProject}
                  </p>
                  <p className="mt-2 font-bold text-sm group-hover:text-violet-500 transition-colors">
                    {loc(next.title)}
                  </p>
                </Link>
              )}
            </nav>
          </Reveal>

          {/* CTA */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-violet-500/25 bg-gradient-to-br from-violet-600/15 via-card/60 to-blue-600/15 p-8 sm:p-10 text-center">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                {t.caseStudy.ctaTitle}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
                {t.caseStudy.ctaDesc}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {hasWhatsapp ? (
                  <Button asChild className="rounded-full font-bold glow-sm">
                    <a href={whatsappUrl(whatsappDefaultMsg(lang))} target="_blank" rel="noopener noreferrer">
                      {t.caseStudy.ctaButton}
                      <ArrowIcon className="size-4" aria-hidden />
                    </a>
                  </Button>
                ) : (
                  <Button asChild className="rounded-full font-bold glow-sm">
                    <Link href="/contact">
                      {t.caseStudy.ctaButton}
                      <ArrowIcon className="size-4" aria-hidden />
                    </Link>
                  </Button>
                )}
                <Button asChild variant="outline" className="rounded-full font-bold">
                  <Link href="/contact">{t.nav.contact}</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
