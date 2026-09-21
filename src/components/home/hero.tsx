"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, MousePointerClick } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { site, whatsappUrl, whatsappDefaultMsg, hasWhatsapp } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t, lang, dir } = useLanguage();
  const reduce = useReducedMotion();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
      };

  return (
    <section
      className="relative overflow-hidden bg-grid bg-grid-fade"
      aria-labelledby="hero-title"
    >
      {/* توهجات الخلفية */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 start-1/4 size-[420px] rounded-full bg-violet-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 end-0 size-[380px] rounded-full bg-blue-600/15 blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-36 pb-20 sm:pt-44 sm:pb-28 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Badge متاح */}
          <motion.div variants={item} className="mb-8">
            {site.available ? (
              <span className="inline-flex items-center gap-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-violet-600 dark:text-violet-300">
                <span className="relative flex size-2" aria-hidden>
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {t.hero.badge}
              </span>
            ) : null}
          </motion.div>

          {/* الصورة الرمزية — Silhouette */}
          <motion.div variants={item} className="mb-8 flex justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-full bg-gradient-to-br from-violet-600/35 via-blue-600/25 to-violet-600/35 blur-2xl"
              />
              <div className="relative size-28 sm:size-36 rounded-full p-[3px] bg-gradient-to-br from-violet-500 via-blue-500 to-violet-500 glow">
                <div className="flex size-full items-end justify-center overflow-hidden rounded-full bg-card">
                  {/* نسخة الوضع الليلي (حبر فاتح) + نسخة النهاري (حبر غامق) */}
                  <img
                    src="/avatar-dark.png"
                    alt=""
                    aria-hidden
                    className="hidden dark:block w-[78%] h-auto object-contain translate-y-1"
                  />
                  <img
                    src="/avatar-light.png"
                    alt=""
                    aria-hidden
                    className="dark:hidden w-[78%] h-auto object-contain translate-y-1"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* الاسم واللقب */}
          <motion.p variants={item} className="text-lg sm:text-xl text-muted-foreground font-semibold">
            {t.hero.intro}
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={item}
            className="mt-3 text-5xl sm:text-7xl font-black tracking-tight leading-[1.1]"
          >
            {lang === "ar" ? (
              <>
                <span className="text-gradient">{site.nameAr.split(" ")[0]}</span>{" "}
                <span>{site.nameAr.split(" ").slice(1).join(" ")}</span>
              </>
            ) : (
              <>
                <span className="text-gradient">{site.name.split(" ")[0]}</span>{" "}
                <span>{site.name.split(" ").slice(1).join(" ")}</span>
              </>
            )}
          </motion.h1>

          <motion.p variants={item} className="mt-5">
            <span className="inline-block rounded-xl border border-border/80 bg-card/70 backdrop-blur px-5 py-2 font-mono text-sm sm:text-base font-semibold text-foreground/90">
              {t.hero.roleTag}
            </span>
          </motion.p>

          {/* الجملة البيعية */}
          <motion.p
            variants={item}
            className="mt-7 max-w-2xl mx-auto text-xl sm:text-2xl font-bold leading-relaxed"
          >
            {site.tagline[lang]}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-sm sm:text-base text-muted-foreground flex items-center justify-center gap-2"
          >
            <span className="inline-block size-1.5 rounded-full bg-violet-500" aria-hidden />
            {t.hero.highlightNote}
          </motion.p>

          {/* زراير الـ CTA */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-3.5"
          >
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
                <a href={whatsappUrl(whatsappDefaultMsg(lang))} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            )}
          </motion.div>

          {/* إشارة السكرول */}
          <motion.div
            variants={item}
            className="mt-16 flex flex-col items-center gap-1.5 text-muted-foreground"
          >
            <span className="text-xs font-semibold">{t.hero.scrollHint}</span>
            <MousePointerClick className="size-4 animate-bounce" aria-hidden />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
