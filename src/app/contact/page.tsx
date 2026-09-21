"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import {
  site,
  whatsappUrl,
  whatsappDefaultMsg,
  mailtoUrl,
  hasWhatsapp,
  hasLinkedin,
} from "@/config/site";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const composed = {
    ar: `أهلاً ${site.nameAr}! 👋\n\nاسمي: ${name || "..."}\n\n${message || "..."}`,
    en: `Hi ${site.name}! 👋\n\nMy name is: ${name || "..."}\n\n${message || "..."}`,
  }[lang];

  const channels = [
    ...(hasWhatsapp
      ? [
          {
            key: "whatsapp" as const,
            icon: MessageCircle,
            href: whatsappUrl(whatsappDefaultMsg(lang)),
            color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/25",
          },
        ]
      : []),
    {
      key: "email" as const,
      icon: Mail,
      href: mailtoUrl(lang === "ar" ? "استفسار عن نظام مخصص" : "Custom system inquiry"),
      color: "text-violet-500 bg-violet-500/10 border-violet-500/25",
    },
    {
      key: "github" as const,
      icon: Github,
      href: site.links.github,
      color: "text-foreground bg-secondary border-border/60",
    },
    ...(hasLinkedin
      ? [
          {
            key: "linkedin" as const,
            icon: Linkedin,
            href: site.links.linkedin,
            color: "text-sky-500 bg-sky-500/10 border-sky-500/25",
          },
        ]
      : []),
  ];

  const channelValue: Record<string, string> = {
    whatsapp: site.links.whatsappDisplay,
    email: site.links.email,
    github: "@smart-jemy",
    linkedin: "LinkedIn",
  };

  const submit = (target: "whatsapp" | "email") => {
    if (!name.trim() || !message.trim()) {
      toast({
        title: t.contact.formValidation,
        variant: "destructive",
      });
      return;
    }
    const url =
      target === "whatsapp"
        ? whatsappUrl(composed)
        : mailtoUrl(
            `${lang === "ar" ? "رسالة من" : "Message from"} ${name}`
          ) + `&body=${encodeURIComponent(composed)}`;
    // window.open bypasses the global click tracker — report it explicitly.
    const payload = JSON.stringify({ type: "click", path: location.pathname, label: `form-${target}` });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/track", new Blob([payload], { type: "application/json" }));
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative overflow-hidden">
      {/* خلفية */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[420px] bg-grid bg-grid-fade" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 start-1/3 size-[360px] rounded-full bg-violet-600/15 blur-[120px]"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-24">
        {/* الهيدر */}
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400">
            <span className="inline-block size-1.5 rounded-full bg-violet-500" aria-hidden />
            {t.contact.label}
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight">
            {t.contact.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.contact.subtitle}
          </p>
        </Reveal>

        {/* قنوات التواصل */}
        <Reveal className="mt-14">
          <h2 className="text-lg font-black">{t.contact.channelsTitle}</h2>
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            {channels.map(({ key, icon: Icon, href, color }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-track={key}
                className="group flex items-start gap-4 rounded-2xl border border-border/70 bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_12px_40px_-16px_rgba(139,92,246,0.4)]"
              >
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${color}`}
                  aria-hidden
                >
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-black text-[15px] flex items-center gap-1.5">
                    {t.contact.channels[key].title}
                    <ExternalLink
                      className="size-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden
                    />
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {t.contact.channels[key].desc}
                  </p>
                  <p
                    dir="ltr"
                    className="mt-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 truncate text-end"
                  >
                    {channelValue[key]}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* نموذج سريع */}
        <Reveal className="mt-14">
          <div className="rounded-3xl border border-border/70 bg-card/60 p-6 sm:p-8">
            <h2 className="text-lg font-black">{t.contact.formTitle}</h2>
            <div className="mt-5 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">{t.contact.formName}</Label>
                <Input
                  id="contact-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.formNamePh}
                  className="h-11 rounded-xl bg-background/60"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">{t.contact.formMessage}</Label>
                <Textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.formMessagePh}
                  rows={5}
                  className="rounded-xl bg-background/60 resize-none"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {hasWhatsapp && (
                  <Button
                    onClick={() => submit("whatsapp")}
                    className="rounded-full font-bold bg-emerald-600 hover:bg-emerald-500 text-white glow-sm"
                  >
                    <Send className="size-4" aria-hidden />
                    {t.contact.formWhatsapp}
                  </Button>
                )}
                <Button
                  onClick={() => submit("email")}
                  variant="outline"
                  className="rounded-full font-bold"
                >
                  <Mail className="size-4" aria-hidden />
                  {t.contact.formEmail}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">{t.contact.formNote}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
