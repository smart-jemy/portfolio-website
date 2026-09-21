// ============================================================================
// Panel Auth — hidden admin access for the owner
// ============================================================================
// Same hardened pattern as Khatwa Store: scrypt password hashing and
// HMAC-signed stateless session cookies. Credentials live in env vars,
// never in the repository.
//   ADMIN_PHONE        — login phone (digits, international format)
//   ADMIN_PASSWORD_HASH — scrypt hash "salt:hash" (see scripts/hash-password.ts)
//   PANEL_SECRET       — HMAC secret for session signing (falls back to
//                        SESSION_SECRET in development only)
// ============================================================================

import { cookies } from "next/headers";
import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "crypto";

export const PANEL_COOKIE = "panel_session";
const SESSION_HOURS = 12;

function panelSecret(): string {
  const secret =
    process.env.PANEL_SECRET ??
    (process.env.NODE_ENV === "production" ? undefined : "panel-dev-secret");
  if (!secret) throw new Error("PANEL_SECRET environment variable is required in production");
  return secret;
}

export function adminPhone(): string {
  const phone = process.env.ADMIN_PHONE ?? "";
  return phone.replace(/[^0-9]/g, "");
}

function sign(value: string): string {
  return createHmac("sha256", panelSecret()).update(value).digest("base64url");
}

export function verifyPhone(input: string): boolean {
  const a = input.replace(/[^0-9]/g, "");
  const b = adminPhone();
  if (a.length < 4 || b.length < 4) return false;
  return a === b || a.endsWith(b) || b.endsWith(a);
}

export function verifyPassword(password: string): boolean {
  const stored = process.env.ADMIN_PASSWORD_HASH ?? "";
  if (!stored.includes(":")) return false;
  try {
    const [salt, hash] = stored.split(":");
    const hashBuf = Buffer.from(hash, "hex");
    const testBuf = scryptSync(password, salt, 64);
    return hashBuf.length === testBuf.length && timingSafeEqual(hashBuf, testBuf);
  } catch {
    return false;
  }
}

export async function createPanelSession() {
  const exp = Math.floor(Date.now() / 1000) + SESSION_HOURS * 60 * 60;
  const payload = `panel.${exp}`;
  const token = `${payload}.${sign(payload)}`;
  const cookieStore = await cookies();
  cookieStore.set(PANEL_COOKIE, token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_HOURS * 60 * 60,
  });
}

export async function destroyPanelSession() {
  const cookieStore = await cookies();
  cookieStore.delete(PANEL_COOKIE);
}

export async function isPanelAuthed(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(PANEL_COOKIE)?.value;
  if (!token) return false;

  const sigIndex = token.lastIndexOf(".");
  if (sigIndex === -1) return false;
  const payload = token.slice(0, sigIndex);
  if (!payload.startsWith("panel.")) return false;

  const received = Buffer.from(token.slice(sigIndex + 1));
  const expected = Buffer.from(sign(payload));
  if (received.length !== expected.length || !timingSafeEqual(received, expected)) {
    return false;
  }

  const exp = Number(payload.slice("panel.".length));
  return Number.isFinite(exp) && exp * 1000 > Date.now();
}
