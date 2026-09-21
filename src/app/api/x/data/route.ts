// ============================================================================
// GET /api/x/data — protected analytics snapshot for the hidden panel
// ============================================================================

import { isPanelAuthed } from "@/lib/panel-auth";
import { readData } from "@/lib/analytics";

export const runtime = "nodejs";

export async function GET() {
  if (!(await isPanelAuthed())) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }
  const data = await readData();
  return Response.json(data, { headers: { "Cache-Control": "no-store" } });
}
