"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t.theme.toggle}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-full size-9 text-muted-foreground hover:text-foreground hover:bg-accent"
    >
      {/* التبديل بيتم بالـ CSS بالكامل — من غير state ولا hydration mismatch */}
      <Sun className="hidden dark:block size-[18px]" aria-hidden />
      <Moon className="block dark:hidden size-[18px]" aria-hidden />
    </Button>
  );
}

export function LanguageToggle() {
  const { toggleLang, t } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={t.langToggle.aria}
      onClick={toggleLang}
      className="rounded-full h-9 px-3 gap-1.5 text-muted-foreground hover:text-foreground hover:bg-accent font-semibold"
    >
      <Languages className="size-[18px]" aria-hidden />
      <span className="text-sm">{t.langToggle.label}</span>
    </Button>
  );
}
