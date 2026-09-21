"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { whatsappUrl, whatsappDefaultMsg, hasWhatsapp } from "@/config/site";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  const { t, dir, lang } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="pb-24" aria-labelledby="cta-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-violet-500/25 bg-gradient-to-br from-violet-600/15 via-card/60 to-blue-600/15 p-8 sm:p-14 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 start-1/3 size-[320px] rounded-full bg-violet-600/20 blur-[100px]"
            />
            <div className="relative">
              <h2
                id="cta-heading"
                className="text-2xl sm:text-4xl font-black tracking-tight"
              >
                {t.cta.title}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed text-sm sm:text-base">
                {t.cta.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                {hasWhatsapp ? (
                  <Button asChild size="lg" className="rounded-full h-12 px-7 text-base font-bold glow">
                    <a href={whatsappUrl(whatsappDefaultMsg(lang))} target="_blank" rel="noopener noreferrer" data-track="whatsapp">
                      <MessageCircle className="size-4" aria-hidden />
                      {t.cta.primary}
                    </a>
                  </Button>
                ) : (
                  <Button asChild size="lg" className="rounded-full h-12 px-7 text-base font-bold glow">
                    <Link href="/contact">
                      <MessageCircle className="size-4" aria-hidden />
                      {t.cta.primary}
                    </Link>
                  </Button>
                )}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 text-base font-bold border-border/80"
                >
                  <Link href="/contact">
                    {t.cta.secondary}
                    <ArrowIcon className="size-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
