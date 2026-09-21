"use client";

import { Building2, Gauge, Layers } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const serviceIcons = [Building2, Gauge, Layers];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      className="py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div id="services-heading">
          <SectionHeading
            label={t.services.label}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i] ?? Layers;
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <article className="group relative h-full rounded-3xl border border-border/70 bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/40 hover:shadow-[0_16px_50px_-20px_rgba(139,92,246,0.45)]">
                  <span
                    className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/15 to-blue-500/15 border border-violet-500/20 text-violet-500 dark:text-violet-400 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden
                  >
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-black">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
