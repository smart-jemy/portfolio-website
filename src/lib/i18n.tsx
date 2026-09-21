"use client";

// ============================================================
// 🌍 Language Provider — AR/EN مع تبديل اتجاه الصفحة RTL/LTR
// ============================================================

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { dict, type Dictionary, type Lang } from "./i18n-dict";

type LanguageContextValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  isEn: boolean;
  t: Dictionary;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const hydratedRef = useRef(false);

  // اقرأ اللغة المحفوظة أول ما الصفحة تتحمل (بعد الـ hydration عشان نتجنب
  // setState المتزامن جوه الـ effect — بنأجله لفريم واحد)
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === "ar" || stored === "en") setLangState(stored);
      } catch {
        /* ignore */
      }
      // بعد ما نقرأ القيمة المحفوظة نسمح بالحفظ تاني
      hydratedRef.current = true;
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // حدّث اتجاه و لغة الـ document + احفظ الاختيار (بس بعد ما نقرأ المحفوظ الأول)
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    if (!hydratedRef.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === "ar" ? "en" : "ar")),
    []
  );

  const value: LanguageContextValue = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    isEn: lang === "en",
    t: dict[lang] as Dictionary,
    setLang,
    toggleLang,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
