import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { langInitScript } from "@/lib/lang-init";
import { site } from "@/config/site";
import { Tracker } from "@/components/tracker";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role} | Web Systems, Android Apps, Stores & Security`,
    template: `%s — ${site.name}`,
  },
  description: site.description.en,
  keywords: [
    "Full-Stack Developer",
    "Laravel",
    "Next.js",
    "Python",
    "Android App",
    "Delivery App",
    "Zone Delivery",
    "Java",
    "Cloud Security",
    "Open Source",
    "Custom Business Systems",
    "Web Development",
    "E-commerce Store",
    "متجر إلكتروني",
    "أنظمة إدارة",
    "تطبيق توصيل",
    site.name,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — ${site.role} | Web Systems, Android Apps, Stores & Security`,
    description: site.description.en,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: langInitScript }} />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col font-sans">
        <Tracker />
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
