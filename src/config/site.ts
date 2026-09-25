// ============================================================
// ⚙️ Site Config — عدّل كل حاجة هنا في مكان واحد
// اسمك، اللينكات، الإيميل، رقم الواتساب... إلخ
// deploy trigger: git connected — auto-deploy active (moneib case study v2)
// ============================================================

export const site = {
  // 📝 الاسم (زي ما هو على GitHub)
  name: "AhmeD",
  nameAr: "أحمد",

  // 💼 اللقب الوظيفي
  role: "Full-Stack Developer",
  roleAr: "مطور ويب متكامل",

  // 🎯 الجملة البيعية الرئيسية
  tagline: {
    ar: "ببني أنظمة ويب مخصصة لإدارة الأعمال وتحسين العمليات.",
    en: "I build custom web systems that run real businesses.",
  },

  // 🏷️ الوصف المختصر (للـ SEO)
  description: {
    ar: "Full-Stack Developer من القاهرة — أنظمة إدارة مخصصة بـ Laravel و Next.js، أدوات أمن مفتوحة المصدر بـ Python، وواجهات ويب سريعة. أنظمة حقيقية شغّالة في أعمال حقيقية.",
    en: "Cairo-based Full-Stack Developer — custom management systems with Laravel & Next.js, open-source security tooling in Python, and fast modern web UIs. Real systems running real businesses.",
  },

  // 🔗 لينكات التواصل — ضبطها من هنا بس
  // ⚠️ أي لينك سيب فاضي ("") هيختفي من الموقع تلقائيًا
  links: {
    github: "https://github.com/smart-jemy",
    linkedin: "", // ⬅️ حط يوزرنيم LinkedIn لما تبعتّه
    email: "ntgi46@proton.me",
    whatsapp: "201148252590", // بصيغة دولية من غير +
    whatsappDisplay: "+20 114 825 2590",
  },

  // 🟢 متاح لمشاريع جديدة؟
  available: true,

  // 📍 الموقع
  location: { ar: "القاهرة، مصر", en: "Cairo, Egypt" },

  // 📅 سنة بداية الشغل
  startYear: 2023,
};

// ✅ هل فيه واتساب / لينكدإن متظبطين؟ (القيم الفاضية بتخفي العنصر)
export const hasWhatsapp = site.links.whatsapp.replace(/[^0-9]/g, "").length > 6;
export const hasLinkedin = site.links.linkedin.trim().length > 0;

// رابط واتساب — النص بيتحدد من الكومبوننت (مش من document) عشان نتجنب hydration mismatch
export function whatsappUrl(text?: string) {
  const num = site.links.whatsapp.replace(/[^0-9]/g, "");
  const base = `https://wa.me/${num}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

// الرسالة الافتراضية الجاهزة لما حد يفتح واتساب
export const whatsappDefaultMsg = (lang: "ar" | "en") =>
  lang === "en"
    ? "Hi! I saw your portfolio and I'm interested in a custom web system."
    : "أهلاً! شفت الـ Portfolio بتاعك ومهتم ببناء نظام مخصص لشغلي.";

export const mailtoUrl = (subject?: string) =>
  `mailto:${site.links.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
