import type { Metadata } from "next";
import { isPanelAuthed } from "@/lib/panel-auth";
import { PanelLogin } from "@/components/panel/panel-login";
import { PanelDashboard } from "@/components/panel/panel-dashboard";

// Hidden owner panel — never indexed, never linked in the UI.
export const metadata: Metadata = {
  title: "Panel",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function PanelPage() {
  const authed = await isPanelAuthed();
  return authed ? <PanelDashboard /> : <PanelLogin />;
}
