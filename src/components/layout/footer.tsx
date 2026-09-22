"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import {
  site,
  whatsappUrl,
  whatsappDefaultMsg,
  hasWhatsapp,
  hasLinkedin,
} from "@/config/site";

export function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  const socials = [
    { href: site.links.github, icon: Github, label: "GitHub" },
    ...(hasLinkedin
      ? [{ href: site.links.linkedin, icon: Linkedin, label: "LinkedIn" }]
      : []),
    ...(hasWhatsapp
      ? [
          {
            href: whatsappUrl(whatsappDefaultMsg(lang)),
            icon: MessageCircle,
            label: "WhatsApp",
          },
        ]
      : []),
    { href: `mailto:${site.links.email}`, icon: Mail, label: "Email" },
  ];

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* الاسم والوصف */}
          <div className="max-w-sm">
            <p className="font-extrabold text-lg">
              {lang === "ar" ? site.nameAr : site.name}
            </p>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* تنقل سريع */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
              {t.footer.nav}
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* السوشيال */}
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
              {t.footer.connect}
            </p>
            <ul className="flex items-center gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-xl border border-border/70 text-muted-foreground transition-all hover:text-foreground hover:border-violet-500/50 hover:glow-sm"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {year} {lang === "ar" ? site.nameAr : site.name}. {t.footer.rights}.
          </p>
          <p className="flex items-center gap-1.5" dir="ltr">
            <span aria-hidden className="text-gold-gradient">✦</span>
            <span className="text-gold-gradient font-semibold tracking-widest uppercase text-[10px]">
              Limited Edition
            </span>
            <span aria-hidden className="text-gold-gradient">✦</span>
          </p>
          <p className="flex items-center gap-1">
            {t.footer.builtWith}{" "}
            <span className="font-semibold text-foreground">Next.js</span>
            <span aria-hidden>·</span>
            <span className="font-semibold text-foreground">Tailwind CSS</span>
            <Heart className="size-3 text-violet-500 fill-violet-500" aria-hidden />
          </p>
        </div>
      </div>
    </footer>
  );
}
