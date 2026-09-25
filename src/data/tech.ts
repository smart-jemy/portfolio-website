// ============================================================
// 🧰 Tech Stack — الشعارات من Devicon CDN مع fallback أنيق
// ============================================================

export type TechCategory = "backend" | "frontend" | "tools";

export type TechItem = {
  name: string;
  /** devicon slug, e.g. "laravel" */
  devicon?: string;
  /** devicon file, defaults to `${slug}-original.svg` */
  file?: string;
  /** لو الشعار مش هينزل نظير في الوضع الليلي (شعار أسود) اعكسه */
  invertInDark?: boolean;
  /** لون البراند للـ dot والـ glow */
  color: string;
  /** حرفين يظهروا لو الصورة فشلت */
  fallback: string;
};

export const techStack: Record<TechCategory, TechItem[]> = {
  backend: [
    { name: "Laravel", devicon: "laravel", color: "#FF2D20", fallback: "Lv" },
    { name: "PHP", devicon: "php", color: "#777BB4", fallback: "PHP" },
    { name: "Python", devicon: "python", color: "#3776AB", fallback: "Py" },
    { name: "MySQL", devicon: "mysql", color: "#4479A1", fallback: "SQL" },
    { name: "Java", devicon: "java", color: "#EA2D2E", fallback: "Ja" },
    { name: "SQLite", devicon: "sqlite", color: "#003B57", fallback: "DB" },
  ],
  frontend: [
    { name: "Next.js", devicon: "nextjs", file: "nextjs-original.svg", invertInDark: true, color: "#8889f4", fallback: "N" },
    { name: "React", devicon: "react", color: "#61DAFB", fallback: "Re" },
    { name: "TypeScript", devicon: "typescript", color: "#3178C6", fallback: "TS" },
    { name: "JavaScript", devicon: "javascript", color: "#F7DF1E", fallback: "JS" },
    { name: "Tailwind CSS", devicon: "tailwindcss", color: "#06B6D4", fallback: "Tw" },
    { name: "HTML5", devicon: "html5", color: "#E34F26", fallback: "<>" },
    { name: "CSS3", devicon: "css3", color: "#1572B6", fallback: "#" },
  ],
  tools: [
    { name: "Git", devicon: "git", color: "#F05032", fallback: "Git" },
    { name: "GitHub", devicon: "github", file: "github-original.svg", invertInDark: true, color: "#a1a1aa", fallback: "GH" },
    { name: "Android", devicon: "android", file: "android-original.svg", color: "#3DDC84", fallback: "An" },
  ],
};

export function deviconUrl(item: TechItem) {
  const file = item.file ?? `${item.devicon}-original.svg`;
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.devicon}/${file}`;
}

// خريطة اسم التقنية -> عنصر (للإستخدام في صفحة الـ Case Study)
export const techByName = new Map<string, TechItem>(
  Object.values(techStack)
    .flat()
    .map((item) => [item.name.toLowerCase(), item])
);
