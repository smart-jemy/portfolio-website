"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

/**
 * ظهور تدريجي عند الوصول للعنصر — بدون الاعتماد على JS في إظهار المحتوى.
 *
 * القاعدة: المحتوى ظاهر افتراضيًا في الـ HTML. عميلًا فقط (useLayoutEffect —
 * قبل الرسم) نُسلّح العنصر بالإخفاء ثم نكشفه عند دخوله الشاشة بـ
 * IntersectionObserver. لو فشل JS أو الـ Observer: العنصر يفضل ظاهر
 * — مفيش صفحة فاضية في أي متصفح. ويحترم prefers-reduced-motion عبر CSS.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return; // لا تسليح — ظاهر دائمًا
    el.classList.add("rv-armed");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("rv-in");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
