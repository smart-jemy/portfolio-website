// سكربت يشتغل قبل الـ hydration عشان يمنع وميض الاتجاه/اللغة الغلط
// (ملف منفصل بدون "use client" عشان الـ server layout يقدر يقرأه)
const STORAGE_KEY = "portfolio-lang";

export const langInitScript = `
try {
  var stored = localStorage.getItem('${STORAGE_KEY}');
  var lang = stored === 'en' ? 'en' : 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
} catch (e) {}
`;
