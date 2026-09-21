"use client";

import { useState } from "react";
import { deviconUrl, type TechItem } from "@/data/tech";
import { cn } from "@/lib/utils";

/**
 * شعار تقنية من Devicon CDN — لو الصورة فشلت بيرجع لحرفين أنيقين
 */
export function TechIcon({
  item,
  size = 44,
  className,
}: {
  item: TechItem;
  size?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !item.devicon) {
    return (
      <span
        style={{ width: size, height: size }}
        className={cn(
          "flex items-center justify-center rounded-xl bg-accent border border-border/70 text-[11px] font-black text-muted-foreground",
          className
        )}
        aria-hidden
      >
        {item.fallback}
      </span>
    );
  }

  return (    <img
      src={deviconUrl(item)}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      aria-hidden
      onError={() => setFailed(true)}
      className={cn("object-contain", item.invertInDark && "dark:invert", className)}
      style={{ width: size, height: size }}
    />
  );
}
