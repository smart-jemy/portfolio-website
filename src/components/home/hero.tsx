"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, MousePointerClick } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { site, whatsappUrl, whatsappDefaultMsg, hasWhatsapp } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t, lang, dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  // staggered CSS entrance — fully visible when JS is unavailable
  const d = (i: number) => ({ ["--d" as string]: `${120 + i * 90}ms` });

  const firstName = lang === "ar" ? site.nameAr.split(" ")[0] : site.name.split(" ")[0];
  const restName =
    lang === "ar"
      ? site.nameAr.split(" ").slice(1).join(" ")
      : site.name.split(" ").slice(1).join(" ");

  return (
    <section
      className="relative overflow-hidden bg-grid bg-grid-fade"
      aria-labelledby="hero-title"
    >
      {/* توهجات الخلفية — بنفسجي + ذهبي */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 start-1/4 size-[420px] rounded-full bg-violet-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 end-0 size-[380px] rounded-full bg-blue-600/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 start-1/2 -translate-x-1/2 size-[300px] rounded-full bg-amber-400/10 blur-[100px]"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-36 pb-20 sm:pt-44 sm:pb-28 text-center">
        {/* Badge متاح */}
        <div className="rise mb-8" style={d(0)}>
          {site.available ? (
            <span className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-300">
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {t.hero.badge}
            </span>
          ) : null}
        </div>

        {/* الصورة الشخصية — double exposure */}
        <div className="rise mb-8 flex justify-center" style={d(1)}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-5 rounded-full bg-[conic-gradient(from_120deg,rgba(139,92,246,.4),rgba(212,175,55,.45),rgba(59,130,246,.35),rgba(139,92,246,.4))] blur-2xl"
            />
            <div className="relative size-32 sm:size-40 rounded-full p-[3px] bg-[conic-gradient(from_120deg,#8b5cf6,#d4af37,#3b82f6,#8b5cf6)] glow">
              <div className="size-full overflow-hidden rounded-full bg-card">
                <img
                  src="/profile-city-256.webp"
                  alt="AhmeD — Full-Stack Developer"
                  width={256}
                  height={256}
                  loading="eager"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* الاسم واللقب */}
        <p className="rise text-lg sm:text-xl text-muted-foreground font-semibold" style={d(2)}>
          {t.hero.intro}
        </p>

        <h1
          id="hero-title"
          className="rise mt-3 text-5xl sm:text-7xl font-black tracking-tight leading-[1.1]"
          style={d(3)}
        >
          <span className="text-gradient gold-underline">{firstName}</span>{" "}
          <span>{restName}</span>
        </h1>

        <div className="rise mt-5" style={d(4)}>
          <span className="inline-block rounded-xl border border-border/80 bg-card/70 backdrop-blur px-5 py-2 font-mono text-sm sm:text-base font-semibold text-foreground/90">
            {t.hero.roleTag}
          </span>
        </div>

        {/* الجملة البيعية */}
        <p
          className="rise mt-7 max-w-2xl mx-auto text-xl sm:text-2xl font-bold leading-relaxed"
          style={d(5)}
        >
          {site.tagline[lang]}
        </p>

        {/* شريط الثقة — أرقام حقيقية من الإنتاج */}
        <div
          className="rise mt-6 flex flex-wrap items-center justify-center gap-2.5"
          style={d(6)}
        >
          {t.stats.items.slice(0, 3).map((stat) => (
            <span
              key={stat.label}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 backdrop-blur px-3.5 py-1.5 text-xs sm:text-[13px] font-semibold text-muted-foreground"
            >
              <span className="text-gold-gradient font-black" dir="ltr">{stat.value}</span>
              {stat.label}
            </span>
          ))}
        </div>

        <p
          className="rise mt-5 text-sm sm:text-base text-muted-foreground flex items-center justify-center gap-2"
          style={d(7)}
        >
          <span className="inline-block size-1.5 rounded-full bg-amber-400" aria-hidden />
          {t.hero.highlightNote}
        </p>

        {/* زراير الـ CTA */}
        <div className="rise mt-10 flex flex-wrap items-center justify-center gap-3.5" style={d(8)}>
          <Button
            asChild
            size="lg"
            className="rounded-full h-12 px-7 text-base font-bold glow"
          >
            <Link href="/projects">
              {t.hero.ctaPrimary}
              <ArrowIcon className="size-4" aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full h-12 px-7 text-base font-bold border-border/80"
          >
            <Link href="/contact">{t.hero.ctaSecondary}</Link>
          </Button>
          {hasWhatsapp && (
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full h-12 px-6 text-base font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 hover:bg-emerald-500/10"
            >
              <a href={whatsappUrl(whatsappDefaultMsg(lang))} target="_blank" rel="noopener noreferrer" data-track="whatsapp">
                WhatsApp
              </a>
            </Button>
          )}
        </div>

        {/* إشارة السكرول */}
        <div
          className="rise mt-16 flex flex-col items-center gap-1.5 text-muted-foreground"
          style={d(9)}
        >
          <span className="text-xs font-semibold">{t.hero.scrollHint}</span>
          <MousePointerClick className="size-4 animate-bounce" aria-hidden />
        </div>
      </div>
    </section>
  );
}
