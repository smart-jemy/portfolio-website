// ============================================================================
// POST /api/x/logout
// ============================================================================

import { destroyPanelSession } from "@/lib/panel-auth";

export const runtime = "nodejs";

export async function POST() {
  await destroyPanelSession();
  return Response.json({ ok: true });
}
