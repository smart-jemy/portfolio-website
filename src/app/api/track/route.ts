// ============================================================================
// POST /api/track — public ingest endpoint for visits & clicks
// Same-origin only, rate-limited per IP, no raw IPs or UAs ever stored.
// ============================================================================

import { after } from "next/server";
import {
  record,
  flush,
  rateLimited,
  classifyDevice,
  hostFromReferrer,
  visitorFingerprint,
} from "@/lib/analytics";

export const runtime = "nodejs";

export async function POST(req: Request) {
  // Same-origin guard
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host && !origin.includes(host)) {
    return Response.json({ ok: false }, { status: 403 });
  }

  const ip =
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "0.0.0.0";

  if (rateLimited(ip)) {
    return Response.json({ ok: true, skipped: true });
  }

  let body: { type?: string; path?: string; label?: string };
  try {
    body = (await req.json()) as typeof body;
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const type = body.type === "click" ? "click" : "visit";
  const path =
    typeof body.path === "string" && body.path.length <= 200
      ? body.path.slice(0, 200)
      : "/";
  const label =
    typeof body.label === "string" && body.label.length <= 80
      ? body.label.slice(0, 80)
      : undefined;

  const ua = req.headers.get("user-agent") ?? "";
  const country = req.headers.get("x-vercel-ip-country") ?? undefined;
  const ref = hostFromReferrer(req.headers.get("referer"));

  record({
    type,
    path,
    label,
    country,
    ref,
    device: classifyDevice(ua),
    visitorKey: visitorFingerprint(ip, ua), // salted & irreversible
  });

  // Flush after the response finishes — batched, durable, non-blocking.
  after(async () => {
    await flush();
  });

  return Response.json({ ok: true });
}
