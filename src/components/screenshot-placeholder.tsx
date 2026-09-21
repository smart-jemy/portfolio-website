"use client";

import { ImageOff } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import type { Screenshot } from "@/data/projects";

/**
 * Placeholder أنيق بنسبة 16:10 — يتسدل بصورة حقيقية أول ما src يبقى موجود
 */
export function ScreenshotFrame({
  shot,
  className,
}: {
  shot: Screenshot;
  className?: string;
}) {
  const { t, lang } = useLanguage();

  return (
    <figure className={className}>
      <div className="relative aspect-[16/10] rounded-2xl border border-border/70 overflow-hidden bg-muted/40">
        {shot.src ? (          <img
            src={shot.src}
            alt={lang === "ar" ? shot.title.ar : shot.title.en}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-grid bg-grid-fade text-center p-4">
            <span className="flex size-12 items-center justify-center rounded-2xl border border-dashed border-violet-500/40 bg-violet-500/5">
              <ImageOff className="size-5 text-violet-500" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground/80">
                {t.caseStudy.placeholder}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {t.caseStudy.placeholderHint}
              </p>
            </div>
          </div>
        )}
      </div>
      <figcaption className="mt-2.5 text-sm text-muted-foreground font-medium text-center">
        {lang === "ar" ? shot.title.ar : shot.title.en}
      </figcaption>
    </figure>
  );
}
