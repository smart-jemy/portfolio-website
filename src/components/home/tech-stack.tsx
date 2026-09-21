"use client";

import { useLanguage } from "@/lib/i18n";
import { techStack } from "@/data/tech";
import { TechIcon } from "@/components/tech-icon";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function TechStackSection() {
  const { t } = useLanguage();

  const categories = [
    { key: "backend" as const, items: techStack.backend },
    { key: "frontend" as const, items: techStack.frontend },
    { key: "tools" as const, items: techStack.tools },
  ];

  return (
    <section
      className="py-20 sm:py-28 bg-secondary/30 border-y border-border/50"
      aria-labelledby="tech-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div id="tech-heading">
          <SectionHeading
            label={t.techSection.label}
            title={t.techSection.title}
            subtitle={t.techSection.subtitle}
          />
        </div>

        <div className="mt-14 space-y-10">
          {categories.map((cat, ci) => (
            <Reveal key={cat.key} delay={ci * 0.08}>
              <div className="max-w-4xl mx-auto">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
                  {t.techSection.categories[cat.key]}
                </p>
                <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="group relative flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 backdrop-blur px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_8px_30px_-10px_rgba(139,92,246,0.4)]"
                    >
                      <span
                        className="absolute -top-1 -end-1 size-2.5 rounded-full ring-4 ring-background"
                        style={{ backgroundColor: item.color }}
                        aria-hidden
                      />
                      <TechIcon item={item} size={30} />
                      <span className="text-sm font-bold">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
