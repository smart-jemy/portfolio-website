"use client";

import Link from "next/link";
import { Compass } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-grid bg-grid-fade min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <span
          className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-violet-500/10 border border-violet-500/25 text-violet-500"
          aria-hidden
        >
          <Compass className="size-8" />
        </span>
        <p className="mt-6 font-mono text-sm text-muted-foreground">404</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight">
          {t.notFound.title}
        </h1>
        <p className="mt-3 text-muted-foreground">{t.notFound.desc}</p>
        <Button asChild className="mt-8 rounded-full font-bold glow-sm">
          <Link href="/">{t.notFound.button}</Link>
        </Button>
      </div>
    </div>
  );
}
