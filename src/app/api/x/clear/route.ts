// ============================================================================
// POST /api/x/clear — wipe analytics data (protected)
// ============================================================================

import { isPanelAuthed } from "@/lib/panel-auth";
import { resetData } from "@/lib/analytics";

export const runtime = "nodejs";

export async function POST() {
  if (!(await isPanelAuthed())) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }
  await resetData();
  return Response.json({ ok: true });
}
