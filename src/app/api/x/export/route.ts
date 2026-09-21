// ============================================================================
// GET /api/x/export — CSV export (protected)
// ============================================================================

import { isPanelAuthed } from "@/lib/panel-auth";
import { readData } from "@/lib/analytics";

export const runtime = "nodejs";

function csvEscape(v: string | number): string {
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET() {
  if (!(await isPanelAuthed())) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const d = await readData();
  const rows: string[] = [];
  rows.push("type,timestamp,path,label,country,referrer,device");
  for (const e of [...d.events].reverse()) {
    rows.push(
      [e.type, e.t, e.path, e.label ?? "", e.country ?? "", e.ref ?? "", e.device ?? ""]
        .map(csvEscape)
        .join(","),
    );
  }

  return new Response("\uFEFF" + rows.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="jemy-analytics-${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
