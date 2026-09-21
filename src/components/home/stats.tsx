"use client";

import { useLanguage } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";

export function StatsBar() {
  const { t } = useLanguage();

  return (
    <section aria-label="Key numbers" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {t.stats.items.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-5 sm:p-6 text-center transition-colors hover:border-violet-500/40"
              >
                <dt className="order-2 mt-2 text-xs sm:text-sm font-semibold text-muted-foreground leading-relaxed">
                  {stat.label}
                </dt>
                <dd className="order-1 text-2xl sm:text-3xl font-black text-gradient">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
