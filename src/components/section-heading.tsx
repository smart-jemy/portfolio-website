"use client";

import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

/**
 * عنوان قسم موحد: Label صغير + Title كبير + Subtitle
 */
export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
}) {
  const { dir } = useLanguage();

  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
        className
      )}
    >
      <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400">
        <span
          className="inline-block size-1.5 rounded-full bg-violet-500"
          aria-hidden
          style={dir === "rtl" ? { marginInlineEnd: "0.5rem" } : undefined}
        />
        {label}
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
