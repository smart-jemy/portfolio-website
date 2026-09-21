"use client";

import Link from "next/link";
import {
  BadgeCheck,
  MessagesSquare,
  Timer,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { techStack } from "@/data/tech";
import { TechIcon } from "@/components/tech-icon";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const valueIcons = [BadgeCheck, MessagesSquare, Timer];

export default function AboutPage() {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className="relative overflow-hidden">
      {/* خلفية */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[420px] bg-grid bg-grid-fade" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 start-1/4 size-[360px] rounded-full bg-violet-600/15 blur-[120px]"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-24">
        {/* الهيدر */}
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400">
            <span className="inline-block size-1.5 rounded-full bg-violet-500" aria-hidden />
            {t.about.label}
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight">
            {t.about.title}
          </h1>
        </Reveal>

        {/* الصورة الرمزية + القصة */}
        <Reveal className="mt-12">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="relative shrink-0">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-600/30 via-blue-600/20 to-violet-600/30 blur-2xl"
              />
              <div className="relative size-24 sm:size-28 rounded-3xl p-[2px] bg-gradient-to-br from-violet-500 via-blue-500 to-violet-500 glow-sm">
                <div className="flex size-full items-end justify-center overflow-hidden rounded-3xl bg-card">
                  <img
                    src="/avatar-dark.png"
                    alt=""
                    aria-hidden
                    className="hidden dark:block w-[80%] h-auto object-contain translate-y-1"
                  />
                  <img
                    src="/avatar-light.png"
                    alt=""
                    aria-hidden
                    className="dark:hidden w-[80%] h-auto object-contain translate-y-1"
                  />
                </div>
              </div>
            </div>
            <section aria-labelledby="about-story" className="flex-1">
              <h2 id="about-story" className="text-xl font-black">
                {t.about.storyTitle}
              </h2>
              <div className="mt-4 space-y-4">
                <p className="text-muted-foreground leading-loose">{t.about.p1}</p>
                <p className="text-muted-foreground leading-loose">{t.about.p2}</p>
                <p className="text-muted-foreground leading-loose">{t.about.p3}</p>
              </div>
            </section>
          </div>
        </Reveal>

        {/* مبادئ الشغل */}
        <Reveal className="mt-16">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            {t.about.valuesTitle}
          </h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {t.about.values.map((value, i) => {
              const Icon = valueIcons[i] ?? BadgeCheck;
              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-border/70 bg-card/60 p-6 transition-all duration-300 hover:border-violet-500/40"
                >
                  <span
                    className="flex size-11 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/25 text-violet-500 dark:text-violet-400"
                    aria-hidden
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-black">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </Reveal>

        {/* الستاك */}
        <Reveal className="mt-16">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            {t.about.stackTitle}
          </h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {Object.values(techStack)
              .flat()
              .map((item) => (
                <span
                  key={item.name}
                  className="flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-bold"
                >
                  <TechIcon item={item} size={18} />
                  {item.name}
                </span>
              ))}
          </div>
        </Reveal>

        {/* متاح دلوقتي */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-violet-500/25 bg-gradient-to-br from-violet-600/15 via-card/60 to-blue-600/15 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="relative flex size-2" aria-hidden>
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  {t.about.nowTitle}
                </p>
                <p className="mt-2 font-black text-lg sm:text-xl">
                  {t.about.nowDesc}
                </p>
              </div>
              <Button asChild size="lg" className="rounded-full font-bold shrink-0 glow-sm">
                <Link href="/contact">
                  {t.nav.contact}
                  <ArrowIcon className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
