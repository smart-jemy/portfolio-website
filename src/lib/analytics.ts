// ============================================================================
// First-party Analytics — visit & click tracking for the owner's panel
// ============================================================================
// Storage: a private GitHub repository acts as the persistent JSON store.
// Rationale: Vercel serverless has no persistent disk, so the site commits
// batched events to a private repo the owner controls. Free, durable, and
// readable from the hidden panel at /x.
//
// Privacy: no IPs, no user agents stored raw — visitors are counted via a
// salted HMAC fingerprint (irreversible). Only coarse data is kept:
// path, day, country code, referrer host, device class, click labels.
// ============================================================================

import { createHmac } from "crypto";

// ─── Types ──────────────────────────────────────────────────────────────────

export type TrackEvent = {
  t: string; // ISO timestamp
  type: "visit" | "click";
  path: string;
  label?: string; // click label (e.g. "whatsapp", "project:yallashiaka")
  country?: string;
  ref?: string; // referrer host
  device?: "mobile" | "tablet" | "desktop";
};

export type AnalyticsData = {
  updated: string;
  totals: { visits: number; uniques: number; clicks: number };
  byDay: Record<string, number>;
  byPath: Record<string, number>;
  byCountry: Record<string, number>;
  byReferrer: Record<string, number>;
  devices: Record<string, number>;
  labels: Record<string, number>;
  visitorHashes: string[]; // salted fingerprints — capped
  events: TrackEvent[]; // latest 500, newest first
};

const MAX_EVENTS = 500;
const MAX_VISITOR_HASHES = 20000;

function emptyData(): AnalyticsData {
  return {
    updated: new Date().toISOString(),
    totals: { visits: 0, uniques: 0, clicks: 0 },
    byDay: {},
    byPath: {},
    byCountry: {},
    byReferrer: {},
    devices: {},
    labels: {},
    visitorHashes: [],
    events: [],
  };
}

// ─── Config ─────────────────────────────────────────────────────────────────

function ghConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.ANALYTICS_REPO; // "owner/repo"
  if (!token || !repo || !repo.includes("/")) return null;
  return { token, repo, branch: "main", path: "data.json" };
}

function fingerprint(ip: string, ua: string): string {
  const salt = process.env.ANALYTICS_SALT ?? "jemy-analytics-salt";
  return createHmac("sha256", salt).update(`${ip}|${ua}`).digest("hex").slice(0, 16);
}

/** Salted, irreversible visitor fingerprint — the only visitor identifier stored. */
export function visitorFingerprint(ip: string, ua: string): string {
  return fingerprint(ip, ua);
}

// ─── In-memory buffer (per warm instance) ───────────────────────────────────

const buffer: TrackEvent[] = [];
let flushing = false;

function dayKey(d = new Date()): string {
  return d.toISOString().slice(0, 10);
}

export function classifyDevice(ua: string): "mobile" | "tablet" | "desktop" {
  const s = ua.toLowerCase();
  if (/ipad|tablet/.test(s)) return "tablet";
  if (/mobi|android|iphone/.test(s)) return "mobile";
  return "desktop";
}

export function hostFromReferrer(ref?: string | null): string | undefined {
  if (!ref) return undefined;
  try {
    return new URL(ref).host;
  } catch {
    return undefined;
  }
}

// ─── Recording ──────────────────────────────────────────────────────────────

export function record(
  event: Omit<TrackEvent, "t"> & { visitorKey: string },
): void {
  const { visitorKey, ...rest } = event;
  buffer.push({ ...rest, t: new Date().toISOString() });
  // Fold fingerprint straight into the pending aggregate set so uniques
  // survive even before flush.
  pendingVisitors.add(visitorKey);
}

const pendingVisitors = new Set<string>();

// ─── GitHub storage ─────────────────────────────────────────────────────────

async function ghGet(): Promise<{ data: AnalyticsData; sha?: string }> {
  const cfg = ghConfig();
  if (!cfg) {
    // Local development — /tmp store
    try {
      const fs = await import("fs/promises");
      const raw = await fs.readFile("/tmp/jemy-analytics.json", "utf8");
      return { data: JSON.parse(raw) as AnalyticsData };
    } catch {
      return { data: emptyData() };
    }
  }
  const url = `https://api.github.com/repos/${cfg.repo}/contents/${cfg.path}?ref=${cfg.branch}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "jemy-analytics",
    },
    cache: "no-store",
  });
  if (res.status === 404) return { data: emptyData() };
  if (!res.ok) throw new Error(`GitHub read failed: ${res.status}`);
  const json = (await res.json()) as { content?: string; sha?: string };
  const data = JSON.parse(Buffer.from(json.content ?? "", "base64").toString("utf8")) as AnalyticsData;
  return { data, sha: json.sha };
}

async function ghPut(data: AnalyticsData, sha?: string): Promise<void> {
  const cfg = ghConfig();
  if (!cfg) {
    const fs = await import("fs/promises");
    await fs.writeFile("/tmp/jemy-analytics.json", JSON.stringify(data));
    return;
  }
  const body = {
    message: `analytics: ${data.totals.visits} visits · ${data.totals.clicks} clicks`,
    content: Buffer.from(JSON.stringify(data)).toString("base64"),
    branch: cfg.branch,
    ...(sha ? { sha } : {}),
  };
  const res = await fetch(`https://api.github.com/repos/${cfg.repo}/contents/${cfg.path}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "User-Agent": "jemy-analytics",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GitHub write failed: ${res.status} ${await res.text()}`);
}

// ─── Merge + Flush ──────────────────────────────────────────────────────────

function merge(base: AnalyticsData, events: TrackEvent[], visitors: Set<string>): AnalyticsData {
  const d: AnalyticsData = { ...base };
  d.updated = new Date().toISOString();
  d.byDay = { ...base.byDay };
  d.byPath = { ...base.byPath };
  d.byCountry = { ...base.byCountry };
  d.byReferrer = { ...base.byReferrer };
  d.devices = { ...base.devices };
  d.labels = { ...base.labels };

  for (const e of events) {
    const day = e.t.slice(0, 10);
    if (e.type === "visit") {
      d.totals.visits += 1;
      d.byDay[day] = (d.byDay[day] ?? 0) + 1;
      d.byPath[e.path] = (d.byPath[e.path] ?? 0) + 1;
      if (e.country) d.byCountry[e.country] = (d.byCountry[e.country] ?? 0) + 1;
      if (e.ref) d.byReferrer[e.ref] = (d.byReferrer[e.ref] ?? 0) + 1;
      if (e.device) d.devices[e.device] = (d.devices[e.device] ?? 0) + 1;
    } else {
      d.totals.clicks += 1;
      const label = e.label ?? e.path;
      d.labels[label] = (d.labels[label] ?? 0) + 1;
    }
    d.events.unshift(e);
  }
  d.events = d.events.slice(0, MAX_EVENTS);

  const hashes = new Set([...base.visitorHashes, ...visitors]);
  d.visitorHashes = [...hashes].slice(0, MAX_VISITOR_HASHES);
  d.totals.uniques = d.visitorHashes.length;
  return d;
}

export async function flush(): Promise<void> {
  // Serialize concurrent flushes on the same warm instance — a flush fired
  // while another one is in flight would silently drop its batch otherwise.
  for (let i = 0; flushing && i < 40; i++) {
    await new Promise((r) => setTimeout(r, 100));
  }
  if (flushing || (buffer.length === 0 && pendingVisitors.size === 0)) return;
  flushing = true;
  const events = buffer.splice(0, buffer.length);
  const visitors = new Set(pendingVisitors);
  pendingVisitors.clear();
  try {
    for (let attempt = 0; attempt < 3; attempt++) {
      const { data, sha } = await ghGet();
      try {
        await ghPut(merge(data, events, visitors), sha);
        return;
      } catch (err) {
        if (attempt === 2) throw err;
        // SHA conflict — another instance wrote first; re-read and retry.
      }
    }
  } catch (err) {
    // Never lose events on a failed flush — put them back for the next try.
    buffer.unshift(...events);
    for (const v of visitors) pendingVisitors.add(v);
    console.error("[analytics] flush failed:", err instanceof Error ? err.message : err);
  } finally {
    flushing = false;
  }
}

export async function readData(): Promise<AnalyticsData> {
  const { data } = await ghGet();
  // Show in-flight buffer on top of the stored snapshot for instant feedback.
  return merge(data, buffer, pendingVisitors);
}

export async function resetData(): Promise<void> {
  buffer.length = 0;
  pendingVisitors.clear();
  await ghPut(emptyData(), (await ghGet()).sha);
}

// ─── Simple per-IP rate limit ───────────────────────────────────────────────

const hits = new Map<string, { count: number; reset: number }>();

export function rateLimited(ip: string, limit = 60, windowMs = 60_000): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + windowMs });
    return false;
  }
  entry.count += 1;
  if (hits.size > 5000) hits.clear();
  return entry.count > limit;
}
