"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Activity,
  BarChart3,
  Download,
  Eye,
  MousePointerClick,
  RefreshCw,
  Trash2,
  Users,
  LogOut,
  MessageCircle,
} from "lucide-react";
import type { AnalyticsData } from "@/lib/analytics";

const REFRESH_MS = 15_000;

const LABEL_AR: Record<string, string> = {
  whatsapp: "واتساب",
  email: "البريد",
  github: "جيت هب",
  "cta-projects": "زر: استعرض مشاريعي",
  "cta-contact": "زر: تواصل معي",
  "hero-view-work": "الهيرو: شغلي",
};

function labelAr(label: string): string {
  if (LABEL_AR[label]) return LABEL_AR[label];
  if (label.startsWith("project:")) return `مشروع: ${label.slice(8)}`;
  if (label.startsWith("live:")) return `لايف: ${label.slice(5)}`;
  return label;
}

function relTime(iso: string): string {
  const diff = Math.max(0, Date.now() - new Date(iso).getTime());
  const m = Math.floor(diff / 60000);
  if (m < 1) return "الآن";
  if (m < 60) return `منذ ${m} د`;
  const h = Math.floor(m / 60);
  if (h < 24) return `منذ ${h} س`;
  return `منذ ${Math.floor(h / 24)} يوم`;
}

const FLAG: Record<string, string> = {
  EG: "🇪🇬", SA: "🇸🇦", AE: "🇦🇪", US: "🇺🇸", DE: "🇩🇪", GB: "🇬🇧", KW: "🇰🇼",
  QA: "🇶🇦", JO: "🇯🇴", MA: "🇲🇦", DZ: "🇩🇿", FR: "🇫🇷", CA: "🇨🇦", NL: "🇳🇱",
};

function flag(code?: string): string {
  return (code && FLAG[code]) || "🌍";
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string | number; label: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <div className="flex items-center gap-2 text-slate-500">{icon}<span className="text-xs">{label}</span></div>
      <div className="mt-2 text-2xl font-bold text-slate-100" dir="ltr">{value}</div>
    </div>
  );
}

function RankTable({ title, rows, unit }: { title: string; rows: [string, number][]; unit?: string }) {
  const max = Math.max(1, ...rows.map((r) => r[1]));
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="mb-3 text-sm font-medium text-slate-400">{title}</h3>
      {rows.length === 0 ? (
        <p className="text-sm text-slate-600">لا بيانات بعد</p>
      ) : (
        <div className="space-y-2">
          {rows.slice(0, 6).map(([k, v]) => (
            <div key={k} className="flex items-center gap-2">
              <div className="w-28 shrink-0 truncate text-xs text-slate-300" dir="auto">{k}</div>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-indigo-500" style={{ width: `${(v / max) * 100}%` }} />
              </div>
              <div className="w-10 text-left text-xs text-slate-500" dir="ltr">{v}{unit}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function PanelDashboard() {
  const router = useRouter();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/x/data", { cache: "no-store" });
      if (res.status === 401) { router.refresh(); return; }
      setData((await res.json()) as AnalyticsData);
    } catch { /* keep last snapshot */ }
  }, [router]);

  useEffect(() => {
    load();
    const id = setInterval(load, REFRESH_MS);
    return () => clearInterval(id);
  }, [load]);

  async function logout() {
    await fetch("/api/x/logout", { method: "POST" });
    router.refresh();
  }

  async function clearAll() {
    if (!confirm("متأكد؟ هتمسح كل بيانات الزيارات والضغطات نهائياً.")) return;
    setBusy(true);
    await fetch("/api/x/clear", { method: "POST" });
    await load();
    setBusy(false);
  }

  const t = data?.totals ?? { visits: 0, uniques: 0, clicks: 0 };
  const today = new Date().toISOString().slice(0, 10);
  const visitsToday = data?.byDay[today] ?? 0;
  const waClicks = data?.labels["whatsapp"] ?? 0;

  // آخر 14 يوم للرسم البياني
  const days: { day: string; v: number }[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400_000).toISOString().slice(0, 10);
    days.push({ day: d, v: data?.byDay[d] ?? 0 });
  }
  const maxDay = Math.max(1, ...days.map((d) => d.v));

  const top = (obj: Record<string, number> | undefined): [string, number][] =>
    Object.entries(obj ?? {}).sort((a, b) => b[1] - a[1]);

  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-6" dir="rtl">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
              <Activity className="h-5 w-5 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-100">لوحة الموقع</h1>
              <p className="text-xs text-slate-500">بيانات حية من زوار موقعك — تحديث تلقائي كل 15 ثانية</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={load} className="flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800">
              <RefreshCw className="h-3.5 w-3.5" /> تحديث
            </button>
            <a href="/api/x/export" className="flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800">
              <Download className="h-3.5 w-3.5" /> تصدير CSV
            </a>
            <button onClick={clearAll} disabled={busy} className="flex items-center gap-1.5 rounded-lg border border-red-900/50 px-3 py-1.5 text-sm text-red-400 hover:bg-red-950/40 disabled:opacity-40">
              <Trash2 className="h-3.5 w-3.5" /> تصفير
            </button>
            <button onClick={logout} className="flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-400 hover:bg-slate-800">
              <LogOut className="h-3.5 w-3.5" /> خروج
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <StatCard icon={<Eye className="h-3.5 w-3.5" />} value={visitsToday} label="زيارات اليوم" />
          <StatCard icon={<BarChart3 className="h-3.5 w-3.5" />} value={t.visits} label="إجمالي الزيارات" />
          <StatCard icon={<Users className="h-3.5 w-3.5" />} value={t.uniques} label="زوار فريدون" />
          <StatCard icon={<MousePointerClick className="h-3.5 w-3.5" />} value={t.clicks} label="إجمالي الضغطات" />
          <StatCard icon={<MessageCircle className="h-3.5 w-3.5" />} value={waClicks} label="ضغطات واتساب" />
        </div>

        {/* 14-day chart */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="mb-4 text-sm font-medium text-slate-400">الزيارات — آخر 14 يوم</h3>
          <div className="flex h-36 items-end gap-1.5" dir="ltr">
            {days.map((d) => (
              <div key={d.day} className="group relative flex-1">
                <div
                  className="w-full rounded-t bg-indigo-600/70 transition-all group-hover:bg-indigo-400"
                  style={{ height: `${Math.max(4, (d.v / maxDay) * 130)}px` }}
                />
                <div className="pointer-events-none absolute -top-7 left-1/2 hidden -translate-x-1/2 rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-200 group-hover:block" dir="ltr">
                  {d.day.slice(5)} · {d.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rankings */}
        <div className="grid gap-3 md:grid-cols-2">
          <RankTable title="أكثر الصفحات زيارة" rows={top(data?.byPath)} />
          <RankTable title="ضغطات الأزرار والعناصر" rows={top(data?.labels).map(([k, v]) => [labelAr(k), v] as [string, number])} />
          <RankTable title="الدول" rows={top(data?.byCountry).map(([k, v]) => [`${flag(k)} ${k}`, v] as [string, number])} />
          <RankTable title="مصادر الزيارات" rows={top(data?.byReferrer)} />
          <RankTable title="الأجهزة" rows={top(data?.devices).map(([k, v]) => [k === "mobile" ? "📱 موبايل" : k === "tablet" ? "💻 تابلت" : "🖥️ ديسكتوب", v] as [string, number])} />
        </div>

        {/* Events log */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="mb-3 text-sm font-medium text-slate-400">سجل الأحداث — أحدث 500</h3>
          <div className="max-h-80 space-y-1 overflow-y-auto">
            {(data?.events ?? []).length === 0 ? (
              <p className="text-sm text-slate-600">لا أحداث بعد</p>
            ) : (
              data?.events.map((e, i) => (
                <div key={`${e.t}-${i}`} className="flex flex-wrap items-center gap-2 rounded-lg px-2 py-1.5 text-xs hover:bg-slate-800/50">
                  <span className={`rounded px-1.5 py-0.5 ${e.type === "visit" ? "bg-sky-500/15 text-sky-400" : "bg-amber-500/15 text-amber-400"}`}>
                    {e.type === "visit" ? "زيارة" : "ضغطة"}
                  </span>
                  <span className="text-slate-300" dir="ltr">{e.path}</span>
                  {e.label && <span className="text-indigo-400">{labelAr(e.label)}</span>}
                  {e.country && <span>{flag(e.country)}</span>}
                  {e.device && <span className="text-slate-600">{e.device === "mobile" ? "📱" : e.device === "tablet" ? "💻" : "🖥️"}</span>}
                  <span className="mr-auto text-slate-600">{relTime(e.t)}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <p className="pb-4 text-center text-[11px] text-slate-700">
          بيانات مجهولة الهوية بالكامل — لا يتم تخزين عناوين IP أو معلومات شخصية
        </p>
      </div>
    </div>
  );
}
