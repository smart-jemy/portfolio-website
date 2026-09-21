"use client";

// ============================================================================
// Tracker — first-party visit & click tracking (invisible)
// ============================================================================
// - Fires one "visit" per route change.
// - Reports clicks on any element carrying a data-track attribute
//   (e.g. data-track="whatsapp") so the owner knows which CTAs perform.
// ============================================================================

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function Tracker() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (pathname?.startsWith("/x") || pathname?.startsWith("/api")) return;
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;

    const payload = JSON.stringify({ type: "visit", path: pathname });
    const url = "/api/track";
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([payload], { type: "application/json" }));
    } else {
      fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true })
        .catch(() => {});
    }
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest?.("[data-track]") as HTMLElement | null;
      if (!target) return;
      const label = target.getAttribute("data-track") ?? "unknown";
      const payload = JSON.stringify({ type: "click", path: location.pathname, label });
      const url = "/api/track";
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, new Blob([payload], { type: "application/json" }));
      } else {
        fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true })
          .catch(() => {});
      }
    }
    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
