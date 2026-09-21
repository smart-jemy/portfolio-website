// ============================================================
// 🌍 i18n Dictionary — كل نصوص الموقع بالعربي والإنجليزي
// ============================================================

export type Lang = "ar" | "en";

export const dict = {
  ar: {
    nav: {
      home: "الرئيسية",
      projects: "المشاريع",
      about: "عني",
      contact: "تواصل",
      openMenu: "افتح القائمة",
      closeMenu: "اقفل القائمة",
    },
    theme: { dark: "الوضع الليلي", light: "الوضع النهاري", toggle: "تبديل المظهر" },
    langToggle: { label: "English", aria: "تبديل اللغة إلى الإنجليزية" },
    hero: {
      badge: "متاح لمشاريع جديدة",
      intro: "أهلاً، أنا",
      roleTag: "Full-Stack Developer",
      ctaPrimary: "استعرض مشاريعي",
      ctaSecondary: "تواصل معي",
      scrollHint: "اكتشف شغلي",
      highlightNote: "أنظمة حقيقية شغّالة في أعمال حقيقية — مش مجرد Demo.",
    },
    stats: {
      items: [
        { value: "1+", label: "نظام إدارة حقيقي شغّال في السوق" },
        { value: "4+", label: "مشاريع حقيقية بـ Case Study كاملة" },
        { value: "13+", label: "مصدر استطلاع في أداة الأمن المفتوحة" },
        { value: "100%", label: "شغل حقيقي — مش Demo" },
      ],
    },
    projectsSection: {
      label: "مشاريعي",
      title: "المشاريع بتتكلم عني أنا",
      subtitle:
        "كل مشروع هنا مبني من الصفر لمشكلة فعلية، ومستخدم فعليًا في إدارة business حقيقي.",
      viewCaseStudy: "اقرا الـ Case Study",
      viewProject: "عرض المشروع",
      viewAll: "شوف كل المشاريع",
      techUsed: "التقنيات",
      keyFeatures: "أهم المميزات",
      moreFeatures: "والمزيد",
    },
    techSection: {
      label: "Tech Stack",
      title: "الأدوات اللي ببني بيها",
      subtitle: "ستاك متكامل من قاعدة البيانات لحد آخر سطر في الواجهة.",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        tools: "أدوات ومنصات",
      },
    },
    services: {
      label: "خدماتي",
      title: "أقدر أساعدك في إيه؟",
      subtitle: "بحوّل العمليات اليدوية المزعجة لأنظمة سهلة وسريعة بتشتغل لحالها.",
      items: [
        {
          title: "أنظمة إدارة مخصصة",
          desc: "أنظمة إدارة على مقاس شغلك: طلبات، عملاء، مخزون، موظفين، ومصروفات — من غير تعقيد زايد ولا مميزات مش هتستخدمها.",
        },
        {
          title: "لوحات تحكم وتقارير",
          desc: "Dashboards بتحوّل بياناتك لقرارات: إحصائيات حية، تقارير مالية واضحة، ومتابعة أداء الفريق لحظة بلحظة.",
        },
        {
          title: "تطوير Full-Stack متكامل",
          desc: "من أول فكرة لحد النشر: Backend آمن ومنظم بـ Laravel، وواجهات سريعة وعصرية بـ Next.js، وقواعد بيانات محسوبة.",
        },
      ],
    },
    cta: {
      title: "عندك شغل بيتدار يدوي؟",
      subtitle:
        "خليني بني لك نظام يديره مكانك — زي ما عملت لمركز صيانة كامل. احكيلي عن عملياتك ونبني الحل المناسب.",
      primary: "ابعتلي رسالة دلوقتي",
      secondary: "صفحة التواصل",
    },
    about: {
      label: "عني",
      title: "مين اللي ورا الكود؟",
      storyTitle: "قصتي باختصار",
      p1: "أنا AhmeD — Full-Stack Developer من القاهرة، وبيصدق إن أقوى كود هو اللي بيحل مشكلة حقيقية. بدل ما أقول «أنا بعرف Laravel و Next.js»، بسيب الشغل اللي معايا يتكلم: بنيت نظام إدارة متكامل لمركز صيانة أجهزة شغّال فعليًا وبيدير عمليات المركز يوم بيوم، وأداة أمن مفتوحة المصدر بـ Python، وصفحات هبوط معمولة كتجربة كاملة.",
      p2: "بيئتي الأساسية: Laravel و PHP و MySQL و Python للـ Backend والأدوات، و Next.js و TypeScript و Tailwind للـ Frontend — وجنبهم شغل مستمر في الـ Cloud Security والـ Open Source. بحب أبني حاجات تُستخدم فعلًا: أنظمة إدارة بتنظم عمليات حقيقية، وأدوات بتحل مشاكل مجتمع المبرمجين، وواجهات تسيب انطباع.",
      p3: "في كل مشروع بحاول أفهم الـ business نفسه قبل ما أكتب سطر كود واحد: إزاي الشغل بيمشي؟ إيه اللي بياخد وقت؟ إيه اللي بيتضيع؟ وبعدها ببنى نظام بيسهّل الدنيا دي — مش نظام فيه كل حاجة ومش محتاج ولا حاجة منها. وفلسفتي في سطر: «Simplicity is the ultimate sophistication.»",
      valuesTitle: "مبادئي في الشغل",
      values: [
        {
          title: "شغل حقيقي مش شكلي",
          desc: "بقدّم مشاريع مستخدمة فعليًا في businesses حقيقية، ومشاريع تجريبية للحاجة الجديدة.",
        },
        {
          title: "تواصل واضح",
          desc: "تحديثات مستمرة، لغة مفهومة من غير مصطلحات معقدة، وشفافية كاملة في المواعيد والأسعار.",
        },
        {
          title: "التزام بالتسليم",
          desc: "جدول زمني واضح من البداية، وتسليم في الموعد — والاستمرارية بعد التسليم جزء من الشغل.",
        },
      ],
      stackTitle: "الستاك اللي شغّال بيه",
      nowTitle: "دلوقتي",
      nowDesc: "متاح لمشاريع جديدة — خاصة أنظمة إدارة للأعمال الصغيرة والمتوسطة اللي عايزة تنظم عملياتها.",
      ctaTitle: "تحب نشوف سوا إمكانيات مشروعك؟",
    },
    contact: {
      label: "تواصل",
      title: "خلينا نتكلم عن مشروعك",
      subtitle:
        "افضل بداية هي مكالمة قصيرة أو رسالة تحكي فيها عن شغلك واللي محتاج تنظيمه. برد عادة في أسرع وقت.",
      channelsTitle: "قنوات التواصل",
      channels: {
        whatsapp: { title: "واتساب", desc: "الأسرع للرد — اضغط وهتلاقي رسالة جاهزة." },
        email: { title: "الإيميل", desc: "للتفاصيل والمستندات والطلبات الرسمية." },
        github: { title: "GitHub", desc: "شوف أكوادي ومشاريعي المفتوحة." },
        linkedin: { title: "LinkedIn", desc: "للتواصل المهني وفرص الشغل." },
      },
      formTitle: "ابعتلي رسالة سريعة",
      formName: "اسمك",
      formNamePh: "اكتب اسمك",
      formMessage: "رسالتك",
      formMessagePh: "احكيلي عن مشروعك أو الفكرة اللي في دماغك...",
      formWhatsapp: "ابعت عبر واتساب",
      formEmail: "ابعت عبر الإيميل",
      formNote: "الرسالة هتتفتح جاهزة في الإيميل (أو واتساب لو متظبط) بتاعك — ابعتها عادي.",
      formValidation: "من فضلك اكتب اسمك ورسالتك الأول.",
      followTitle: "أو تابعني على",
    },
    projectsPage: {
      label: "المشاريع",
      title: "دراسات حالة حقيقية",
      subtitle:
        "مش مجرد screenshots — هنا هتلاقي قصة كل مشروع: المشكلة إيه، والحل كان إزاي، والنتيجة طلعت بأي شكل.",
      caseStudy: "اقرا الـ Case Study",
      comingSoonNote: "المشروع ده تحت التجهيز — التفاصيل الكاملة هتنزل قريب.",
    },
    caseStudy: {
      back: "رجوع لكل المشاريع",
      overview: "نظرة عامة",
      problem: "المشكلة",
      solution: "الحل",
      myRole: "دوري في المشروع",
      features: "أبرز الخصائص",
      screenshots: "صور المشروع",
      result: "النتيجة",
      impact: "الأثر العملي",
      techTitle: "التقنيات المستخدمة",
      meta: { type: "نوع المشروع", year: "السنة", role: "الدور" },
      placeholder: "Screenshot قريبًا",
      placeholderHint: "الصور الحقيقية هتتضاف قريب",
      viewLive: "زيارة المشروع الحي",
      nextProject: "المشروع التالي",
      prevProject: "المشروع السابق",
      ctaTitle: "عايز نظام زي ده لشغلك؟",
      ctaDesc: "احكيلي عن عملياتك وهنخطط مع بعض لحل يناسبك.",
      ctaButton: "كلمني دلوقتي",
    },
    footer: {
      tagline: "ببني أنظمة ويب مخصصة لإدارة الأعمال وتحسين العمليات.",
      nav: "تنقل سريع",
      connect: "تواصل معي",
      rights: "كل الحقوق محفوظة",
      builtWith: "مبني بـ",
    },
    notFound: {
      title: "الصفحة دي مش موجودة",
      desc: "يظهر إن اللينك غلط أو الصفحة اتنقلت.",
      button: "رجوع للرئيسية",
    },
  },

  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    theme: { dark: "Dark mode", light: "Light mode", toggle: "Toggle theme" },
    langToggle: { label: "عربي", aria: "Switch language to Arabic" },
    hero: {
      badge: "Available for new projects",
      intro: "Hi, I'm",
      roleTag: "Full-Stack Developer",
      ctaPrimary: "View my projects",
      ctaSecondary: "Get in touch",
      scrollHint: "Scroll to explore",
      highlightNote: "Real systems running real businesses — not just demos.",
    },
    stats: {
      items: [
        { value: "1+", label: "Real management system live in production" },
        { value: "4+", label: "Real projects with full case studies" },
        { value: "13+", label: "Recon sources in the open-source security tool" },
        { value: "100%", label: "Real work — not demos" },
      ],
    },
    projectsSection: {
      label: "My Projects",
      title: "Projects speak louder than skills",
      subtitle:
        "Every project here was built from scratch for a real problem, and is actually used to run a real business.",
      viewCaseStudy: "Read the Case Study",
      viewProject: "View project",
      viewAll: "See all projects",
      techUsed: "Tech stack",
      keyFeatures: "Key features",
      moreFeatures: "and more",
    },
    techSection: {
      label: "Tech Stack",
      title: "Tools I build with",
      subtitle: "A complete stack — from the database all the way to the last line of the UI.",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        tools: "Tools & Platforms",
      },
    },
    services: {
      label: "Services",
      title: "How can I help you?",
      subtitle: "I turn painful manual operations into easy, fast systems that run themselves.",
      items: [
        {
          title: "Custom management systems",
          desc: "Management systems tailored to your business: orders, customers, inventory, staff, and expenses — no bloat, no features you'll never use.",
        },
        {
          title: "Dashboards & reporting",
          desc: "Dashboards that turn data into decisions: live stats, clear financial reports, and real-time team performance tracking.",
        },
        {
          title: "End-to-end Full-Stack",
          desc: "From idea to deployment: a secure, well-structured Laravel backend, fast modern Next.js frontends, and carefully designed databases.",
        },
      ],
    },
    cta: {
      title: "Still running your business on paper?",
      subtitle:
        "Let me build a system that manages it for you — like I did for a full maintenance center. Tell me about your operations and we'll design the right solution.",
      primary: "Message me now",
      secondary: "Contact page",
    },
    about: {
      label: "About",
      title: "Who's behind the code?",
      storyTitle: "My story in short",
      p1: "I'm AhmeD — a Full-Stack Developer from Cairo who believes the strongest code is the kind that solves a real problem. Instead of saying “I know Laravel and Next.js”, I let the work speak: I built a complete management system for a device maintenance center that is live today, an open-source security tool in Python, and landing pages designed as full experiences.",
      p2: "My core environment: Laravel, PHP, MySQL and Python on the backend and tooling side, with Next.js, TypeScript and Tailwind on the frontend — plus ongoing work in cloud security and open source. I love building things that actually get used: management systems that organize real operations, tools that solve real problems for the developer community, and interfaces that leave an impression.",
      p3: "In every project I try to understand the business itself before writing a single line of code: how does the work flow? what eats time? what gets lost? Then I build a system that makes those things easier — not a system full of features nobody needs. My philosophy in one line: “Simplicity is the ultimate sophistication.”",
      valuesTitle: "How I work",
      values: [
        {
          title: "Real work, not filler",
          desc: "I ship projects actually used in real businesses, with sample projects only for brand-new skills.",
        },
        {
          title: "Clear communication",
          desc: "Continuous updates, plain language instead of jargon, and full transparency on timelines and pricing.",
        },
        {
          title: "Delivery you can count on",
          desc: "A clear schedule from day one, delivery on time — and support after launch is part of the job.",
        },
      ],
      stackTitle: "My daily stack",
      nowTitle: "Right now",
      nowDesc: "Available for new projects — especially management systems for SMBs that want to organize their operations.",
      ctaTitle: "Want to explore what's possible for your project?",
    },
    contact: {
      label: "Contact",
      title: "Let's talk about your project",
      subtitle:
        "The best start is a short call or a message describing your business and what needs organizing. I usually reply quickly.",
      channelsTitle: "Contact channels",
      channels: {
        whatsapp: { title: "WhatsApp", desc: "Fastest way to reach me — tap and you'll get a pre-filled message." },
        email: { title: "Email", desc: "For details, documents, and formal requests." },
        github: { title: "GitHub", desc: "Check out my code and open-source work." },
        linkedin: { title: "LinkedIn", desc: "Professional networking and opportunities." },
      },
      formTitle: "Send me a quick message",
      formName: "Your name",
      formNamePh: "Type your name",
      formMessage: "Your message",
      formMessagePh: "Tell me about your project or the idea on your mind...",
      formWhatsapp: "Send via WhatsApp",
      formEmail: "Send via Email",
      formNote: "Your message opens pre-filled in your email app (or WhatsApp when configured) — just hit send.",
      formValidation: "Please write your name and message first.",
      followTitle: "Or find me on",
    },
    projectsPage: {
      label: "Projects",
      title: "Real case studies",
      subtitle:
        "Not just screenshots — here you'll find each project's story: what the problem was, how it was solved, and what the results looked like.",
      caseStudy: "Read the Case Study",
      comingSoonNote: "This project is in progress — full details coming soon.",
    },
    caseStudy: {
      back: "Back to all projects",
      overview: "Overview",
      problem: "The Problem",
      solution: "The Solution",
      myRole: "My Role",
      features: "Key Features",
      screenshots: "Screenshots",
      result: "The Result",
      impact: "Real-world impact",
      techTitle: "Technologies Used",
      meta: { type: "Project type", year: "Year", role: "Role" },
      placeholder: "Screenshot coming soon",
      placeholderHint: "Real screenshots will be added soon",
      viewLive: "Visit live project",
      nextProject: "Next project",
      prevProject: "Previous project",
      ctaTitle: "Want a system like this for your business?",
      ctaDesc: "Tell me about your operations and we'll plan a solution that fits you.",
      ctaButton: "Contact me now",
    },
    footer: {
      tagline: "I build custom web systems for business management and process improvement.",
      nav: "Quick links",
      connect: "Connect",
      rights: "All rights reserved",
      builtWith: "Built with",
    },
    notFound: {
      title: "Page not found",
      desc: "Looks like this link is broken or the page has moved.",
      button: "Back to home",
    },
  },
} as const;

export type Dictionary = (typeof dict)["ar"];
