"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Smartphone } from "lucide-react";

export function PanelLogin() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/x/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password }),
      });
      const body = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !body.ok) {
        setError(body.error ?? "خطأ غير متوقع");
        return;
      }
      router.refresh();
    } catch {
      setError("تعذر الاتصال — حاول تاني");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900/60 p-8 space-y-5"
      >
        <div className="text-center space-y-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
            <Lock className="h-5 w-5 text-indigo-400" />
          </div>
          <h1 className="text-lg font-semibold text-slate-100">لوحة التحكم</h1>
          <p className="text-sm text-slate-500">الدخول للمالك فقط</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-slate-400">رقم الهاتف</label>
          <div className="relative">
            <Smartphone className="absolute right-3 top-2.5 h-4 w-4 text-slate-600" />
            <input
              type="tel"
              dir="ltr"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="01xxxxxxxxx"
              className="w-full rounded-lg border border-slate-700 bg-slate-800/60 py-2 pr-10 pl-3 text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-slate-400">كلمة السر</label>
          <div className="relative">
            <Lock className="absolute right-3 top-2.5 h-4 w-4 text-slate-600" />
            <input
              type="password"
              dir="ltr"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-700 bg-slate-800/60 py-2 pr-10 pl-3 text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"
              autoComplete="current-password"
            />
          </div>
        </div>

        {error && (
          <p className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-indigo-600 py-2.5 font-medium text-white transition hover:bg-indigo-500 disabled:opacity-50"
        >
          {loading ? "جاري الدخول..." : "دخول"}
        </button>
      </form>
    </div>
  );
}
