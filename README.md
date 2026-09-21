<div align="center">

# 💼 Jemy — Portfolio Website

**Bilingual (AR/EN) personal portfolio — built with Next.js 16, React 19 & Tailwind CSS.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

## ✨ Highlights

- 🌍 **Fully bilingual** — Arabic (RTL) & English with instant language switching, no page reload
- 🎬 **Cinematic dark UI** — scroll-driven reveals, glow accents, responsive across all breakpoints
- 📂 **Case-study pages** — each project gets a full case study (role, stack, features, gallery)
- ⚙️ **Single-source config** — name, links, projects & content all live in one config file
- 🚀 **Static-first** — prerendered pages, zero backend needed to run

## 🛠️ Stack

Next.js 16 (App Router, standalone output) · React 19 · TypeScript strict · Tailwind CSS 4 · shadcn/ui · Prisma (optional) · next-intl-style i18n (custom, dependency-free)

## 🚀 Getting Started

```bash
bun install         # or npm install
bun run dev         # http://localhost:3000
bun run build       # production build (standalone)
bun run start       # serve production build
```

## 📄 Content Editing

Everything lives under `src/config/` and `src/data/`:

| File | What it controls |
|---|---|
| `src/config/site.ts` | Name, tagline, contact links, availability |
| `src/data/projects.ts` | Projects & case studies |

## 📄 License

[MIT](LICENSE) © Jemy
