// ============================================================================
// POST /api/x/login — hidden owner login (phone + password)
// ============================================================================

import {
  createPanelSession,
  verifyPhone,
  verifyPassword,
} from "@/lib/panel-auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: { phone?: string; password?: string };
  try {
    body = (await req.json()) as typeof body;
  } catch {
    return Response.json({ error: "بيانات ناقصة" }, { status: 400 });
  }

  const { phone = "", password = "" } = body;
  if (typeof phone !== "string" || typeof password !== "string" || !phone || !password) {
    return Response.json({ error: "اكتب رقم الهاتف وكلمة السر" }, { status: 400 });
  }

  if (!verifyPhone(phone) || !verifyPassword(password)) {
    // Constant-ish delay to blunt brute force, generic error on purpose.
    await new Promise((r) => setTimeout(r, 600));
    return Response.json({ error: "بيانات الدخول غير صحيحة" }, { status: 401 });
  }

  await createPanelSession();
  return Response.json({ ok: true });
}
