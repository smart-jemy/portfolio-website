// ============================================================
// 📁 Projects Data — كل مشروع Case Study كاملة بالعربي والإنجليزي
//
// ✅ عشان تضيف مشروع جديد:
//    1. انسخ شكل أي مشروع من اللي تحت
//    2. عبّي البيانات (ar + en)
//    3. خلي published: true
//    وصفحة /projects هتعرضه تلقائيًا
// ============================================================

import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Users,
  LayoutDashboard,
  UserCog,
  Package,
  BarChart3,
  BellRing,
  ShieldCheck,
  Globe,
  MousePointerClick,
  CreditCard,
  MessagesSquare,
  Gauge,
  Smartphone,
  Radar,
  Network,
  Layers,
  Terminal,
  Sparkles,
  Palette,
  MoveHorizontal,
} from "lucide-react";

export type Localized = { ar: string; en: string };

export type Feature = {
  icon: LucideIcon;
  title: Localized;
  desc: Localized;
};

export type Screenshot = {
  title: Localized;
  /** أول ما تبعت الصور: حطها في public/screenshots/ واكتب المسار هنا زي "/screenshots/dashboard.png" */
  src?: string;
};

export type Project = {
  slug: string;
  published: boolean;
  emoji: string;
  title: Localized;
  /** العنوان الإنجليزي الفرعي زي "Custom Business Management System" */
  subtitle: Localized;
  short: Localized;
  type: Localized;
  year: string;
  role: Localized;
  technologies: string[];
  /** لينك المشروع الحي (اختياري): موقع live أو الريبو على GitHub */
  liveUrl?: string;
  features: Feature[];
  problem: Localized[];
  solution: Localized[];
  myRoleChips: string[];
  results: Localized[];
  impact: Localized[];
  screenshots: Screenshot[];
};

export const projects: Project[] = [
  // ==========================================================
  // ⭐ أحدث إصدار — طلبات المنيب: تطبيق توصيل مخصوص لمنطقة كاملة
  // ==========================================================
  {
    slug: "moneib-delivery",
    published: true,
    emoji: "🛵",
    title: {
      ar: "طلبات المنيب",
      en: "Moneib Delivery",
    },
    subtitle: {
      ar: "تطبيق توصيل مخصوص لمنطقة كاملة — موبايل وويب ولوحة تحكم",
      en: "Zone-locked delivery platform — Android app, Web & Admin panel",
    },
    short: {
      ar: "أول منصة توصيل مخصوصة لمنطقة المنيب: أوردرات مطاعم وأي طلبات يومية — سوبر ماركت وصيدلية ومشاوير — كباتن معتمدين من المنطقة، لوحة تحكم كاملة، ومنيو بيتحدث لحظيًا بدون سيرفر مدفوع.",
      en: "The first delivery platform dedicated to El-Mounib district: restaurant orders plus any daily errand — groceries, pharmacy, pickups — with verified local captains, a full admin dashboard, and a live menu that syncs with zero server cost.",
    },
    type: {
      ar: "تطبيق أندرويد + ويب + لوحة تحكم",
      en: "Android app + Web + Admin panel",
    },
    year: "2026",
    role: {
      ar: "المالك والمطور — من الفكرة للنشر",
      en: "Owner & Developer — idea to production",
    },
    technologies: ["Java", "Android", "JavaScript", "HTML5", "CSS3", "GitHub", "SQLite"],
    liveUrl: "https://smart-jemy.github.io/moneib-menu/",
    features: [
      {
        icon: Smartphone,
        title: { ar: "تطبيق أندرويد أصلي", en: "Native Android app" },
        desc: {
          ar: "بدون أي frameworks — 112KB فقط، يشتغل من أندرويد 7، عربي RTL بالكامل، وبيسحب المنيو من مصدر واحد.",
          en: "Zero frameworks — just 112KB, runs on Android 7+, fully Arabic RTL, pulls the menu from a single source.",
        },
      },
      {
        icon: Sparkles,
        title: { ar: "طلبات مخصصة وأي طلبات يومية", en: "Custom orders for any daily need" },
        desc: {
          ar: "مش مطاعم بس — العميل يكتب أي طلب من جوه المنطقة: سوبر ماركت، صيدلية، مشاوير — والكابتن ينفذه.",
          en: "Not just restaurants — customers write any errand inside the zone: groceries, pharmacy, pickups — and a captain executes it.",
        },
      },
      {
        icon: Radar,
        title: { ar: "نظام كباتن معتمدين", en: "Verified captains system" },
        desc: {
          ar: "تسجيل من الموقع بصورة شخصية، موافقة الإدارة، ودخول في التطبيق برقم الموبايل — التحقق بهاش مشفر بدون كشف الأرقام.",
          en: "Website registration with photo, admin approval, and in-app phone login — verified via salted hashes so numbers are never exposed.",
        },
      },
      {
        icon: LayoutDashboard,
        title: { ar: "لوحة تحكم كاملة", en: "Full admin dashboard" },
        desc: {
          ar: "مطاعم ومنيوهات وأسعار وأكواد خصم وكباتن وإحصائيات — بتتحفظ على GitHub وبتنشر للتطبيقات بضغطة واحدة.",
          en: "Restaurants, menus, prices, promo codes, captains and stats — stored on GitHub and published to all clients with one tap.",
        },
      },
      {
        icon: ShieldCheck,
        title: { ar: "أمان على أكثر من مستوى", en: "Layered security" },
        desc: {
          ar: "HTTPS إجباري، كلمات سر هاش، CSP، لوحة على رابط سري، وفحص أمان عميق — النتيجة: صفر ثغرات.",
          en: "Enforced HTTPS, hashed credentials, CSP, hidden panel route, and a deep security audit — zero findings.",
        },
      },
      {
        icon: Network,
        title: { ar: "بنية جاهزة للتوسع", en: "Built to expand" },
        desc: {
          ar: "قاعدة البيانات على GitHub وثلاث واجهات (تطبيق/ويب/إدارة) على مصدر واحد — منطقة جديدة = بيانات جديدة، مش بناء من الأول.",
          en: "GitHub-backed data with three clients (app/web/admin) on one source — a new district is new data, not a rebuild.",
        },
      },
    ],
    problem: [
      {
        ar: "تطبيقات التوصيل الكبيرة مش بتغطي المناطق الشعبية زي المنيب — أهل المنطقة مش لاقيين مطاعمهم على أي تطبيق، والمطاعم المحلية نفسها مش ظاهرة في أي مكان أونلاين.",
        en: "Big delivery apps don't cover working-class districts like El-Mounib — residents can't find their local restaurants on any app, and the restaurants themselves have zero online presence.",
      },
      {
        ar: "المطاعم الصغيرة بتدفع عمولات مرتفعة لمنصات مش بتخدم منطقتها أصلًا، وأي حل بديل محتاج سيرفر وتكاليف شهرية قبل أول عميل — فمفيش حد بيبدأ أصلًا.",
        en: "Small restaurants pay high commissions to platforms that don't even serve their district, and any alternative needs servers and monthly costs before the first customer — so nobody starts.",
      },
      {
        ar: "الطلبات اليومية — سوبر ماركت أو صيدلية أو مشوار بسيط — مالهاش أي حل منظم: كله مكالمات وتفاهمات وارتباك.",
        en: "Daily errands — groceries, pharmacy, simple pickups — have no structured solution at all: just calls, back-and-forth, and chaos.",
      },
    ],
    solution: [
      {
        ar: "بنيت منصة كاملة (تطبيق أندرويد + موقع طلب + لوحة تحكم) مخصوصة لمنطقة واحدة، بقاعدة بيانات على GitHub API — يعني صفر تكاليف سيرفر، والبيانات ملك للمالك بالكامل.",
        en: "I built a complete platform (Android app + ordering site + admin dashboard) dedicated to one district, with its database on the GitHub API — zero server cost, and the data fully owned by the operator.",
      },
      {
        ar: "المنيو بينشر لحظيًا من لوحة التحكم لكل الواجهات بضغطة واحدة، والأوردرات بتوصل الإدارة والكباتن فورًا عبر واتساب — تجربة سريعة بالطريقة اللي الناس فعلاً بتشتغل بيها.",
        en: "The menu publishes live from the dashboard to every client with one tap, and orders reach the store and captains instantly via WhatsApp — fast, using the channel people actually work with.",
      },
      {
        ar: "نظام كباتن من أهل المنطقة: تسجيل من الموقع بصورة شخصية وموافقة إدارة، ودخول في التطبيق برقم الموبايل — التحقق بيتم بهاش مشفر بحيث الأرقام الشخصية مش منشورة أبدًا.",
        en: "A captains system from the neighborhood: website registration with a photo and admin approval, then in-app login by phone number — verification runs through salted hashes so personal numbers are never published.",
      },
    ],
    myRoleChips: ["Product", "Android", "Web", "Admin Panel", "Security", "Release"],
    results: [
      {
        ar: "تطبيق أندرويد أصلي بحجم 112KB بس — يشتغل من أندرويد 7، عربي RTL بالكامل، وبيمر فحص أمان عميق بصفر ثغرات.",
        en: "A native Android app at just 112KB — runs on Android 7+, fully Arabic RTL, and passes a deep security audit with zero findings.",
      },
      {
        ar: "8 مطاعم و66 صنف يوم الإطلاق، وأي تعديل في المنيو بيتنشر لكل المستخدمين خلال دقائق — من غير سيرفر ولا صيانة.",
        en: "8 restaurants and 66 menu items on launch day, and any menu change reaches every user within minutes — no servers, no maintenance.",
      },
      {
        ar: "ثلاث منصات (موبايل/ويب/إدارة) شغالة على نفس مصدر البيانات بتكلفة تشغيل شهرية صفر — وخدمة طلب مخصص بتعمل خط إضافي للدخل.",
        en: "Three platforms (mobile/web/admin) running on one data source at zero monthly cost — plus a custom-orders service adding an extra revenue line.",
      },
    ],
    impact: [
      {
        ar: "أول منصة بتتعامل مع المنطقة دي كـ«زون» مستقلة — النموذج قابل للتكرار لأي منطقة جديدة بنفس مستوى الجودة بدون بناء من الأول.",
        en: "The first platform treating this district as its own delivery zone — a repeatable model for every new area at the same quality bar, without rebuilding from scratch.",
      },
      {
        ar: "مطاعم المنطقة بتبيع أونلاين من غير أي عمولة، والكباتن من أهل المنطقة لاقيين دخل إضافي بوقت مرن.",
        en: "Local restaurants sell online with zero commission, and neighborhood captains gain flexible extra income.",
      },
      {
        ar: "العميل بيوفر وقت وربط: أي طلب يومي — من فطار لحد دواء — بيكتبه مرة واحدة من موبايله والكابتن بينفذه.",
        en: "Customers save time and hassle: any daily errand — from breakfast to medication — is written once from their phone and executed by a captain.",
      },
    ],
    screenshots: [
      { title: { ar: "واجهة التطبيق الرئيسية", en: "App home screen" } },
      { title: { ar: "لوحة تحكم الإدارة", en: "Admin dashboard" } },
      { title: { ar: "صفحة الطلب على الويب", en: "Web ordering page" } },
    ],
  },
  // ==========================================================
  // ✅ المشروع رقم 1 — نظام إدارة مركز صيانة الأجهزة
  // ==========================================================
  {
    slug: "device-maintenance-center",
    published: true,
    emoji: "🏢",
    title: {
      ar: "نظام إدارة مركز صيانة الأجهزة",
      en: "Device Maintenance Center Management System",
    },
    subtitle: {
      ar: "نظام إدارة أعمال مخصص",
      en: "Custom Business Management System",
    },
    short: {
      ar: "نظام متكامل لإدارة عمليات مركز صيانة الأجهزة، بداية من استقبال الطلب وحتى التسليم.",
      en: "A complete system to run a device maintenance center — from receiving the ticket all the way to delivery.",
    },
    type: {
      ar: "نظام إدارة أعمال مخصص",
      en: "Custom business management system",
    },
    year: "2024",
    role: {
      ar: "Full-Stack Developer — بناء كامل من الصفر",
      en: "Full-Stack Developer — built end-to-end from scratch",
    },
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://noorcenter.gt.tc",
    features: [
      {
        icon: ClipboardList,
        title: { ar: "إدارة الطلبات ومراحل دورة العمل", en: "Tickets & workflow stages" },
        desc: {
          ar: "كل جهاز بيدخل المركز بيتسجل كطلب له حالة واضحة: استقبال، فحص، عرض سعر، موافقة، صيانة، جاهز، تم التسليم — ومفيش طلب بيتضيع.",
          en: "Every device entering the center becomes a ticket with a clear status: intake, inspection, quote, approval, repair, ready, delivered — nothing falls through the cracks.",
        },
      },
      {
        icon: Users,
        title: { ar: "إدارة العملاء والأجهزة", en: "Customers & devices" },
        desc: {
          ar: "ملف كامل لكل عميل وسجل بكل أجهزته وتاريخ صيانتها، فأي فني يقدر يرجع لتاريخ الجهاز في ثواني.",
          en: "A complete profile per customer with all their devices and repair history — any technician can pull up a device's history in seconds.",
        },
      },
      {
        icon: LayoutDashboard,
        title: { ar: "Dashboard وإحصائيات", en: "Dashboard & live stats" },
        desc: {
          ar: "لوحة تحكم مركزية بتعرفك فورًا: الطلبات المفتوحة، إيه اللي متأخر، إيرادات الشهر، وأداء الفريق — من غير ما تسأل حد.",
          en: "A central dashboard that instantly shows open tickets, what's late, monthly revenue, and team performance — no need to ask around.",
        },
      },
      {
        icon: UserCog,
        title: { ar: "إدارة الموظفين والفنيين", en: "Staff & technicians" },
        desc: {
          ar: "تكليف الطلبات للفنيين المناسبين ومتابعة إنجازهم، مع حساب لكل موظف بصلاحياته وشغله المسجل.",
          en: "Assign tickets to the right technicians and track their progress — every employee has an account with their own role and logged activity.",
        },
      },
      {
        icon: Package,
        title: { ar: "المخزون والمصروفات", en: "Inventory & expenses" },
        desc: {
          ar: "متابعة قطع الغيار والمخزون، وتسجيل مصروفات المركز التشغيلية — عشان الصورة المالية تفضل كاملة.",
          en: "Track spare parts and stock levels, plus every operational expense — so the financial picture stays complete.",
        },
      },
      {
        icon: BarChart3,
        title: { ar: "التقارير المالية", en: "Financial reports" },
        desc: {
          ar: "تقارير إيرادات ومصروفات وأرباح بفترات زمنية واضحة، بتستخرج أرقام المركز في دقايق بدل نهاية الشهر الكامل بالحسبة اليدوية.",
          en: "Revenue, expense and profit reports over clear time ranges — pulling the center's numbers in minutes instead of a manual end-of-month scramble.",
        },
      },
      {
        icon: BellRing,
        title: { ar: "الإشعارات وسجل النشاط", en: "Notifications & activity log" },
        desc: {
          ar: "تنبيهات لحظية للأحداث المهمة، وسجل كامل بكل اللي حصل في النظام ومين عمله — محاسبة شفافة.",
          en: "Instant notifications for important events, plus a full audit log of everything that happened in the system and who did it.",
        },
      },
      {
        icon: ShieldCheck,
        title: { ar: "نظام صلاحيات ودخول منفصل", en: "Roles & separate logins" },
        desc: {
          ar: "دخول منفصل للإدارة والموظفين والفنيين، وكل واحد يشوف بس اللي يخصه — بيانات المركز محمية ومنظمة.",
          en: "Separate logins for admins, staff and technicians — everyone sees only what concerns them, keeping business data protected and organized.",
        },
      },
    ],

    problem: [
      {
        ar: "المركز كان شغّال بأسلوب يدوي بالكامل: الطلبات بتتسجل في دفاتر وإكسل، والأجهزة بتتتبع بالذاكرة والتوصيل الشفهي بين الموظفين. النتيجة كانت واضحة كل يوم: طلبات بتتأخر من غير ما حد ياخد باله، سؤال «جهازي فين ووصل لفين؟» كان بياخد وقت ومكالمات عشان يتحل، وبيانات العملاء والأجهزة كانت مبعثرة ومفيش سجل تاريخي لأي جهاز.",
        en: "The center ran on a fully manual workflow: tickets were logged in notebooks and Excel, devices were tracked by memory and verbal hand-offs between staff. The cost showed up daily: tickets slipped through with nobody noticing, answering “where is my device and what stage is it in?” took time and phone calls, and customer and device data was scattered with no real history for any device.",
      },
      {
        ar: "المشكلة التانية كانت في المال: المصروفات والإيرادات كانت بتتحسب يدويًا في آخر الشهر، والأرقام بتطلع مختلفة حسب مين بيتحسب. مكانش في صورة واضحة للربحية ولا تقارير تخلي صاحب المركز ياخد قرار مبني على أرقام — ولا حتى طريقة يعرف بيها إيه اللي بيتحرك في المخزون من قطع غيار.",
        en: "The second problem was money: expenses and revenue were tallied manually at the end of each month, and the numbers changed depending on who did the counting. There was no clear profitability picture, no reports to support decisions — and not even a reliable way to know what was moving in and out of the spare-parts inventory.",
      },
    ],

    solution: [
      {
        ar: "تم بناء نظام إدارة مخصص بالكامل على مقاس عمليات المركز، مش برنامج جاهز بيفرض طريقة شغل مرسومة عليه. في قلب النظام دورة عمل (Workflow) بتقسم حياة كل طلب لمراحل واضحة: من استقبال الجهاز وتسجيل حالته وبيانات العميل، لفحص أولي وعرض سعر، لموافقة العميل، للصيانة وتسجيل قطع الغيار المستخدمة، لحد التسليم النهائي والإغلاق المالي للطلب.",
        en: "A fully custom management system was built around the center's actual operations — not an off-the-shelf product forcing its own workflow. At the heart of the system is a workflow that divides every ticket's life into clear stages: from device intake (with condition details and customer data), through inspection and quotation, customer approval, repair with logged spare-parts usage, all the way to final delivery and financial closure.",
      },
      {
        ar: "فوق دورة العمل دي اتبنت الطبقات التانية: ملفات عملاء وأجهزة بسجل تاريخي كامل، لوحة تحكم بالإحصائيات الحية، إدارة مخزون مربوطة بالطلبات، وتقارير مالية بتطلع من البيانات نفسها — يعني أي رقم في التقرير ممكن يتتبع لطلباته الأصلية. وكل ده محمي بنظام صلاحيات بيضمن إن كل مستخدم يشوف بس مجاله.",
        en: "On top of that workflow sit the other layers: customer and device files with full history, a live dashboard, inventory management tied to tickets, and financial reports generated from the same data — meaning any number in a report can be traced back to its source tickets. All of it is protected by a role-based permissions system so every user only sees their own scope.",
      },
    ],

    myRoleChips: [
      "Architecture",
      "Database Design",
      "Backend — Laravel",
      "Frontend",
      "Authentication & Roles",
      "Dashboard & Reports",
      "Deployment",
    ],

    results: [
      {
        ar: "النهارده النظام شغّال فعليًا وبيدير عمليات المركز يوم بيوم: كل جهاز بيدخل بيتسجل وبيتحرك في دورة العمل، وسؤال العميل «جهازي فين؟» بيتجاوب في ثواني من أي شاشة. المركز بقى عنده سجل مالي واضح وتقارير جاهزة في أي وقت، وصاحب المركز بيتابع كل حاجة من مكان واحد من غير مكالمات ولا ورق.",
        en: "Today the system is live and runs the center's daily operations: every device that comes in is registered and moves through the workflow, and the customer question “where is my device?” is answered in seconds from any screen. The center now has a clear financial record and on-demand reports, and the owner monitors everything from one place — no calls, no paper.",
      },
    ],

    impact: [
      { ar: "تتبع كامل لكل طلب من لحظة الاستقبال لحد التسليم", en: "Full tracking of every ticket from intake to delivery" },
      { ar: "أي استفسار عن حالة جهاز بيتجاوب في ثواني", en: "Any device-status question answered in seconds" },
      { ar: "صورة مالية واضحة: إيرادات، مصروفات، وأرباح في تقارير جاهزة", en: "A clear financial picture: revenue, expenses and profit in ready reports" },
      { ar: "قرارات مبنية على أرقام حية بدل التخمين", en: "Decisions driven by live numbers instead of guesswork" },
      { ar: "مخزون قطع غيار تحت السيطرة ومربوط بالطلبات", en: "Spare-parts inventory under control, tied to tickets" },
      { ar: "مسؤولية واضحة: سجل نشاط كامل لكل عملية في النظام", en: "Clear accountability: a complete audit trail for every action" },
    ],

    screenshots: [
      {
        title: { ar: "لوحة التحكم والإحصائيات الحية", en: "Dashboard & live stats" },
        src: "/screenshots/maintenance-dashboard.png",
      },
      {
        title: { ar: "الإشعارات وسجل نشاط النظام", en: "Notifications & activity log" },
        src: "/screenshots/maintenance-reports.png",
      },
      {
        title: { ar: "الفواتير — إنشاء فاتورة جديدة", en: "Invoices — creating a new invoice" },
        src: "/screenshots/maintenance-invoice.png",
      },
      { title: { ar: "ملف العميل وسجل الأجهزة", en: "Customer profile & device history" } },
    ],
  },

  // ==========================================================
  // ✅ المشروع رقم 2 — SaaSFlow: صفحة هبوط عربية لمنصة SaaS
  //    Live: https://smart-jemy.github.io/saasflow-landing/
  // ==========================================================
  {
    slug: "saasflow-landing",
    published: true,
    emoji: "⚡",
    title: {
      ar: "SaaSFlow — صفحة هبوط منتج SaaS",
      en: "SaaSFlow — SaaS Product Landing Page",
    },
    subtitle: {
      ar: "تجربة هبوط عربية RTL متكاملة",
      en: "A complete Arabic-first RTL landing experience",
    },
    short: {
      ar: "صفحة هبوط عربية بالكامل لمنصة SaaS — مش قالب مترجم: تجربة بصرية متكاملة من أول Hero لحد الـ FAQ، مبنية عشان تقنع وتبيع.",
      en: "A fully Arabic SaaS landing page — not a translated template: a complete visual experience from the hero down to the FAQ, built to convince and convert.",
    },
    type: { ar: "صفحة هبوط — UI/UX", en: "Landing page — UI/UX" },
    year: "2025",
    role: {
      ar: "تصميم وتطوير كامل — مشروع فردي",
      en: "Design & development — solo project",
    },
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "CSS3"],
    liveUrl: "https://smart-jemy.github.io/saasflow-landing/",

    features: [
      {
        icon: Globe,
        title: { ar: "عربي RTL أصيل من الأساس", en: "Arabic-first RTL, not a translation" },
        desc: {
          ar: "التصميم معمول بالعربي من أول سطر: بنية RTL أصلية، خطوط ومقاسات محسوبة للعربي، وصياغة تسويقية مكتوبة بالعربي مش مترجمة — وده اللي بيبني الثقة مع الزائر في ثواني.",
          en: "Designed in Arabic from the first line: a native RTL layout, type sizes calculated for Arabic, and marketing copy written — not translated — which is what builds trust with visitors in seconds.",
        },
      },
      {
        icon: LayoutDashboard,
        title: { ar: "عرض تفاعلي للمنتج", en: "Interactive product showcase" },
        desc: {
          ar: "معاينة لوحة تحكم حية جوه الصفحة بتعرض إيرادات ومشاريع وتحليلات — الزائر بيشوف المنتج وهو بيتنقل، مش بس بيقرأ عنه.",
          en: "A live dashboard preview inside the page showing revenue, projects and analytics — visitors see the product while browsing it, not just read about it.",
        },
      },
      {
        icon: MousePointerClick,
        title: { ar: "حركة وأرقام بتعد قدامك", en: "Motion & live counters" },
        desc: {
          ar: "عدادات بتعد لفوق أول ما تظهر، عناصر بتتحرك مع السكرول، وتفاصيل صغيرة في كل مكان — الصفحة «حية» وبتستجيب، مش صورة ثابتة.",
          en: "Counters that tick up as they appear, elements that move with scroll, and micro-details everywhere — the page feels alive and responsive, not a static brochure.",
        },
      },
      {
        icon: CreditCard,
        title: { ar: "خطط أسعار وأسئلة متكررة", en: "Pricing plans & FAQ" },
        desc: {
          ar: "قسم أسعار واضح بباقات مرتبة، وقسم FAQ بيزيل الاعتراضات الشائعة قبل ما الزائر يوصل للـ CTA النهائي — رحلة إقناع كاملة جوه صفحة واحدة.",
          en: "A clear pricing section with organized tiers, and an FAQ that removes common objections before the final CTA — a full persuasion journey in a single page.",
        },
      },
      {
        icon: MessagesSquare,
        title: { ar: "إثبات اجتماعي مبني جوه الصفحة", en: "Social proof built in" },
        desc: {
          ar: "آراء عملاء بأسماء ووظايفهم، وشريط شركات موثوقة بيتحرك باستمرار — الثقة بتتبني في الصفحة نفسها مش في لينك خارجي.",
          en: "Testimonials with names and roles, plus a continuously moving trusted-companies strip — trust is built inside the page itself, not delegated to an external link.",
        },
      },
      {
        icon: Smartphone,
        title: { ar: "Responsive من الموبايل للديسكتوب", en: "Responsive from mobile to desktop" },
        desc: {
          ar: "كل قسم متظبط على كل مقاس شاشة: قائمة موبايل، معاينات بتتقلب، وشبكات بترتب نفسها — تجربة واحدة متكاملة على أي جهاز.",
          en: "Every section is tuned for every screen size: mobile menu, flipping previews, and self-rearranging grids — one seamless experience on any device.",
        },
      },
    ],

    problem: [
      {
        ar: "منتجات الـ SaaS بيتحكم فيها الانطباع الأول في ثواني، والانطباع ده بيصنعه شكل صفحة الهبوط. والسوق العربي مليان صفحات إما مترجمة حرفيًا بـ RTL مكسور، أو قوالب أجنبية اتعربت بالعافية: نصوص متراكبة، خطوط مش متوافقة، وحروف عربية مقطوعة من بعضها. النتيجة إن منتج ممتاز ممكن يبان «هيّن» قبل ما حد يجربه أصلًا.",
        en: "SaaS products are judged by first impressions measured in seconds, and the landing page makes that impression. The Arabic market is full of pages that are either literally translated with broken RTL, or foreign templates awkwardly localized: overlapping text, mismatched fonts, disconnected Arabic glyphs. An excellent product can look cheap before anyone even tries it.",
      },
      {
        ar: "التحدي كان واضح: إزاي تبني صفحة هبوط عربية «تحس إنها أصلية» فعلًا — بنفس مستوى الإنتاج العالمي من ناحية الحركة والإيقاع والإقناع — وتثبت إن العربي مش مرحلة ثانوية بتتعمل بعد الإنجليزي.",
        en: "The challenge was clear: build an Arabic landing page that genuinely feels native — at global production quality in motion, rhythm and persuasion — and prove that Arabic is not a secondary afterthought bolted on after English.",
      },
    ],

    solution: [
      {
        ar: "اتبنى الصفحة بالعربي من أول قرار تصميمي: بنية RTL أصلية من غير محاولات عكس CSS، تايبوغرافي مضبوط للعربي، وصياغة تسويقية كتبت بالعربي للعقلية العربية. وكل قسم مصمم ليخدم خطوة واحدة في رحلة الزائر: الفهم (المزايا)، الرؤية (المعاينة التفاعلية للمنتج)، الثقة (الآراء والأسعار والـ FAQ)، وبعدها الإجراء (CTA).",
        en: "The page was built in Arabic from the first design decision: a native RTL structure with no CSS-flipping hacks, typography tuned for Arabic, and marketing copy written in Arabic for an Arabic-speaking audience. Each section serves one step of the visitor journey: understand (features), see (interactive product demo), trust (testimonials, pricing, FAQ), then act (CTA).",
      },
      {
        ar: "تقنيًا: صفحة static خفيفة بـ Tailwind CSS، وحركات مبنية بـ JavaScript خالص مع IntersectionObserver — الحركة بتشتغل بس لما العنصر يبقى ظاهر، فالأداء بيفضل سريع حتى على موبايلات متوسطة. مفيش أي framework تقيل: الحاجة الوحيدة اللي الزائر بيستنى عليها هي المحتوى نفسه.",
        en: "Technically: a lightweight static page in Tailwind CSS with motion built in pure JavaScript and IntersectionObserver — animations only run when their element is visible, so performance stays fast even on mid-range phones. No heavy framework involved: the only thing a visitor waits for is the content itself.",
      },
    ],

    myRoleChips: [
      "UI/UX Design",
      "Arabic Copywriting",
      "RTL Engineering",
      "Tailwind CSS",
      "Vanilla JS Animations",
      "Performance",
    ],

    results: [
      {
        ar: "الصفحة live ومتاحة للتجربة على GitHub Pages، ومستخدمة كـ showcase أساسي في الـ Portfolio: بتثبت إني أقدر أسوّق منتج بالعربي بنفس مستوى صفحات الهبوط العالمية — من قرار التصميم الأول لحد آخر micro-interaction.",
        en: "The page is live on GitHub Pages and serves as a core showcase in this portfolio: it proves I can market a product in Arabic at the same production level as the world's best landing pages — from the first design decision to the last micro-interaction.",
      },
    ],

    impact: [
      { ar: "تجربة RTL عربية أصيلة بمستوى إنتاج عالمي", en: "Authentic Arabic RTL experience at global production quality" },
      { ar: "رحلة تحويل كاملة: مزايا ← معاينة ← ثقة ← إجراء", en: "A complete conversion journey: features → demo → trust → action" },
      { ar: "أداء خفيف من غير أي framework تقيل", en: "Lightweight performance with zero heavy frameworks" },
      { ar: "أساس جاهز لأي منتج SaaS بيستهدف السوق العربي", en: "A ready foundation for any SaaS product targeting the Arabic market" },
    ],

    screenshots: [
      {
        title: { ar: "الـ Hero — الانطباع الأول", en: "Hero — the first impression" },
        src: "/screenshots/saasflow-hero.png",
      },
      {
        title: { ar: "أقسام المزايا والمحتوى", en: "Features & content sections" },
        src: "/screenshots/saasflow-features.png",
      },
    ],
  },

  // ==========================================================
  // ✅ المشروع رقم 3 — CloudFail Killer: أداة أمن مفتوحة المصدر
  //    GitHub: https://github.com/smart-jemy/cloudfail-killer
  // ==========================================================
  {
    slug: "cloudfail-killer",
    published: true,
    emoji: "🛡️",
    title: {
      ar: "CloudFail Killer — أداة استطلاع أمني",
      en: "CloudFail Killer — Security Recon Tool",
    },
    subtitle: {
      ar: "أداة مفتوحة المصدر لاكتشاف الـ Origin IP المخفي خلف Cloudflare",
      en: "Open-source tool to discover origin IPs hidden behind Cloudflare",
    },
    short: {
      ar: "أداة CLI مفتوحة المصدر بـ Python بتجمع 13+ مصدر استطلاع سلبي وفعال في pipeline من 6 مراحل، عشان تكشف الـ IP الحقيقي المخفي وراء بروكسي Cloudflare — بنتائج مرتبة بنسبة ثقة.",
      en: "An open-source Python CLI that aggregates 13+ passive and active recon sources into a 6-stage pipeline to uncover the real origin IP behind Cloudflare's proxy — with confidence-scored results.",
    },
    type: { ar: "أداة أمن مفتوحة المصدر — CLI", en: "Open-source security tool — CLI" },
    year: "2025",
    role: {
      ar: "Author & Maintainer — بناء كامل من الصفر",
      en: "Author & Maintainer — built from scratch",
    },
    technologies: ["Python", "IPv6", "Cybersecurity", "CLI", "Open Source"],
    liveUrl: "https://github.com/smart-jemy/cloudfail-killer",

    features: [
      {
        icon: Radar,
        title: { ar: "13+ مصدر استطلاع سلبي وفعال", en: "13+ passive & active recon sources" },
        desc: {
          ar: "جمع آلي من مصادر سلبية (سجلات DNS التاريخية، قواعد بيانات الشهادات، أرشيفات) ومصادر فعالة (فحص مباشر) — كل مصدر بيزوّد فرصة الوصول للـ IP الحقيقي.",
          en: "Automated aggregation across passive sources (historical DNS records, certificate databases, archives) and active ones (direct probing) — every source adds another path to the real origin IP.",
        },
      },
      {
        icon: Network,
        title: { ar: "دعم IPv6 أصلي", en: "IPv6-native support" },
        desc: {
          ar: "الأدوات القديمة بتفكر IPv4 بس — الأداة دي بتعامل مع IPv6 كموااطنة من الدرجة الأولى: بتفحص وتفهم سجلات AAAA وCNAME في كل مراحل التحليل.",
          en: "Legacy tools think in IPv4 only — this one treats IPv6 as a first-class citizen: it probes and interprets AAAA and CNAME records throughout every analysis stage.",
        },
      },
      {
        icon: Layers,
        title: { ar: "Pipeline إثراء من 6 مراحل", en: "6-stage enrichment pipeline" },
        desc: {
          ar: "كل نتيجة بتعدي عبر مراحل تحقق وإثراء متتالية — من الاكتشاف الأولي لحد التأكيد النهائي — عشان الضوضاء تقل والدقة تزيد مع كل مرحلة.",
          en: "Every finding passes through sequential enrichment and verification stages — from first discovery to final confirmation — reducing noise and increasing precision at each step.",
        },
      },
      {
        icon: Gauge,
        title: { ar: "نتائج مرتبة بنسبة ثقة", en: "Confidence-scored results" },
        desc: {
          ar: "بدل قايمة IPs خام من غير ترتيب، الأداة بتحسب نسبة ثقة لكل نتيجة وترتبها — الباحث بيبدأ من أقوى احتمال، مش من الصفر.",
          en: "Instead of a raw unordered list of IPs, the tool computes a confidence score per finding and ranks them — researchers start from the strongest lead, not from zero.",
        },
      },
      {
        icon: Terminal,
        title: { ar: "تجربة CLI محترمة", en: "A proper CLI experience" },
        desc: {
          ar: "واجهة سطر أوامر نظيفة: مخرجات واضحة، مراحل مفهومة، وتقدّم مرئي — أداة معمولة تُستخدم يوميًا في شغل حقيقي، مش demo أكاديمي.",
          en: "A clean command-line interface: clear output, understandable stages, visible progress — a tool built for daily real-world use, not an academic demo.",
        },
      },
      {
        icon: ShieldCheck,
        title: { ar: "مفتوح المصدر بترخيص MIT", en: "MIT-licensed open source" },
        desc: {
          ar: "الكود كله عام على GitHub بترخيص MIT، معمول modular عشان إضافة مصدر استطلاع جديد تبقى أسطر معدودة مش إعادة كتابة — جاهز للمراجعة والتوسع من المجتمع.",
          en: "The full code is public on GitHub under the MIT license, structured modularly so adding a new recon source takes a few lines instead of a rewrite — ready for community review and extension.",
        },
      },
    ],

    problem: [
      {
        ar: "في اختبارات الاختراق والتحقيق الأمني، من أعيق العوائق إن الهدف مخفي وراء Cloudflare: الـ IP الحقيقي للسيرفر متغطي بالبروكسي، وكل تقييم أمني بيقف قدام حاجز الـ CDN. الأدوات الموجودة — زي CloudFail الأصلية — اتطورت لحد نقطة واتركت من سنين: مصادرها اتبهرت مع الوقت، وما بتتعاملش غير مع IPv4.",
        en: "In penetration testing and security research, one of the hardest blockers is a target hidden behind Cloudflare: the server's real IP is masked by the proxy, and every assessment stops at the CDN wall. Existing tools — like the original CloudFail — were built, abandoned for years, and left behind: their data sources decayed, and they only handle IPv4.",
      },
      {
        ar: "والمشكلة الأعمق كانت في شكل النتائج نفسها: الأدوات الموجودة بترمي عليك قايمة IP خام من غير ترتيب ولا تقييم، والباحث بيقعد يجرب واحده واحدة يدويًا. المطلوب كان أداة حديثة بتجمع المصادر، وتتحقق، وترتب النتائج بذكاء — مش أداة بتضيف شغل بدل ما تقلله.",
        en: "The deeper problem was the shape of the results themselves: existing tools dump a raw list of IPs with no ranking or scoring, leaving the researcher to test them one by one manually. What was needed was a modern tool that aggregates sources, verifies findings, and ranks results intelligently — one that removes work instead of adding it.",
      },
    ],

    solution: [
      {
        ar: "بنيت CloudFail-Killer (cloudkill) كإعادة بناء حديثة بالكامل للفكرة: محرك تجميع بيجمع الدليل من 13+ مصدر سلبي وفعال، وpipeline من 6 مراحل بيثري ويتحقق من كل نتيجة على حدة. وبدل ما الأداة ترمي عليك ملف غامق، بتسلمك نتائج مرتبة بنسبة ثقة — وكل نتيجة معاها مصدرها اللي بيخليك توصلها.",
        en: "I built CloudFail-Killer (cloudkill) as a complete modern rebuild of the idea: an aggregation engine that gathers evidence from 13+ passive and active sources, and a 6-stage pipeline that enriches and verifies every finding individually. Instead of dumping an opaque file, it hands you confidence-ranked results — each with the source evidence that led to it.",
      },
      {
        ar: "الدعم الأصلي للـ IPv6 كان قرار تصميم أساسي مش ميزة إضافية: كل مرحلة بتفهم سجلات AAAA وCNAME ونطاقات IPv6 كأنها جزء طبيعي من التحليل. والكود معمول modular بحت — كل مصدر استطلاع وحدة مستقلة، فإضافة مصدر جديد أو تحديث القديم مش بيلمس باقي النظام.",
        en: "Native IPv6 support was a core design decision, not a bolted-on feature: every stage understands AAAA and CNAME records and IPv6 ranges as a natural part of the analysis. The code is strictly modular — each recon source is an independent unit, so adding or updating one never touches the rest of the system.",
      },
    ],

    myRoleChips: [
      "Architecture",
      "Python",
      "Recon Sources",
      "Enrichment Pipeline",
      "CLI/UX",
      "Open Source",
    ],

    results: [
      {
        ar: "الأداة منشورة على GitHub بترخيص MIT ومتاحة للباحثين الأمنيين، ووراها تقييم حقيقي من مجتمع الـ DevOps: «CloudFail Killer حلّت مشكلة حقيقية بيواجهها ناس كتير — الكود جاهز للإنتاج من أول يوم: modular، موثق، ومتابع فعلًا.»",
        en: "The tool is published on GitHub under the MIT license and available to security researchers, backed by a real community review from a DevOps engineer: “CloudFail Killer solved a real problem that many teams face. The code quality was production-ready from day one — modular, well-documented, and actually maintained.”",
      },
    ],

    impact: [
      { ar: "إعادة بناء حديثة لأداة كلاسيكية اتوقفت عن التطوير", en: "A modern rebuild of a classic, abandoned tool" },
      { ar: "نتائج مرتبة بنسبة ثقة بدل قايم خام", en: "Confidence-scored results instead of raw lists" },
      { ar: "دعم IPv6 أصلي من أول قرار تصميمي", en: "Native IPv6 support from the first design decision" },
      { ar: "كود مفتوح قابقل للمراجعة والتوسع من المجتمع", en: "Open code, reviewable and extendable by the community" },
    ],

    screenshots: [
      {
        title: { ar: "المشروع على GitHub — بترخيص MIT", en: "The project on GitHub — MIT licensed" },
        src: "/screenshots/cloudfail-repo.png",
      },
    ],
  },

  // ==========================================================
  // ✅ المشروع رقم 4 — سلسلة صفحات الهبوط السينمائية
  //    MONOLITH · OBLIVION · ECHO · NOVA
  // ==========================================================
  {
    slug: "cinematic-landings",
    published: true,
    emoji: "🎬",
    title: {
      ar: "MONOLITH · OBLIVION · ECHO · NOVA",
      en: "MONOLITH · OBLIVION · ECHO · NOVA",
    },
    subtitle: {
      ar: "مجموعة صفحات هبوط سينمائية تفاعلية — WebGL وMotion",
      en: "A collection of cinematic interactive landing pages — WebGL & motion",
    },
    short: {
      ar: "أربع صفحات هبوط داكنة بروح سينمائية — كل واحدة بعالمها: شاشات إقلاع terminal، كرات WebGL متحولة، نصوص جسيمات، ومؤشرات مخصصة بذيول ضوئية. سلسلة بتثبت إن صفحة الهبوط ممكن تكون تجربة.",
      en: "Four dark, cinematic landing pages — each with its own world: terminal boot screens, morphing WebGL spheres, particle text, and custom cursors with light trails. A series proving a landing page can be an experience.",
    },
    type: { ar: "واجهات إبداعية — WebGL & Motion", en: "Creative front-end — WebGL & motion" },
    year: "2025",
    role: {
      ar: "تصميم وتطوير كامل — سلسلة شخصية",
      en: "Design & development — personal series",
    },
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "WebGL", "Canvas", "CSS3"],
    liveUrl: "https://smart-jemy.github.io/monolith-landing/",

    features: [
      {
        icon: Terminal,
        title: { ar: "شاشات إقلاع سينمائية", en: "Cinematic boot screens" },
        desc: {
          ar: "كل صفحة بتفتح بتسلسل إقلاع خاص بيها: أسطر terminal بتنزل واحدة واحدة بإيقاع محسوب — الترقب بيتبنى سطر بسطر قبل ما البراند يظهر. التقنية في خدمة الإحساس.",
          en: "Every page opens with its own boot sequence: terminal lines dropping one by one at a calculated pace — anticipation builds line by line before the brand reveals itself. Technology in service of feeling.",
        },
      },
      {
        icon: Sparkles,
        title: { ar: "WebGL حية بتعمل morphing", en: "Live morphing WebGL" },
        desc: {
          ar: "كرة متحولة بأربع أوكتافات ضوضاء في MONOLITH، icosaedron سلكي بأوجه مزدوجة في OBLIVION، وsphere حالمة في ECHO — رسومات ثلاثية الأبعاد realtime شغالة في المتصفح مباشرة.",
          en: "A 4-octave morphing noise sphere in MONOLITH, a dual-pass wireframe icosahedron in OBLIVION, and a dreamlike sphere in ECHO — realtime 3D graphics running directly in the browser.",
        },
      },
      {
        icon: MousePointerClick,
        title: { ar: "مؤشرات وتفاعلات مخصصة", en: "Custom cursors & interactions" },
        desc: {
          ar: "مؤشر مخصص بذيول ضوئية بتتبع الحركة، ripple بيتمدد عند الضغط، وcard stacks بتستجيب للسكرول — كل تفصيلة معمولة عشان الصفحة تحس إنها حية وبتحس فيك.",
          en: "Custom cursors with light trails following motion, ripples expanding on click, and card stacks that respond to scroll — every detail engineered so the page feels alive and aware of you.",
        },
      },
      {
        icon: Palette,
        title: { ar: "هوية بصرية مستقلة لكل عالم", en: "A distinct visual identity per world" },
        desc: {
          ar: "ليموني على أسود لـ MONOLITH، ذهبي دافي لـ ECHO، أزرق سماوي لـ NOVA — نفس العائلة السينمائية بهويات مختلفة تمامًا: تايبوغرافي، ألوان، وإيقاع مختلف لكل براند.",
          en: "Lime on black for MONOLITH, warm gold for ECHO, cyan for NOVA — the same cinematic family with completely different identities: unique typography, color, and rhythm per brand.",
        },
      },
      {
        icon: MoveHorizontal,
        title: { ar: "سرد بصري مختلف", en: "Alternative visual storytelling" },
        desc: {
          ar: "شريط marquee بيلف باستمرار، horizontal scroll في NOVA، وتايبوغرافي كبيرة جريئة — الصفحة بتحكي قصتها بإيقاع مختلف تمامًا عن الصفحات التقليدية.",
          en: "Endlessly looping marquees, horizontal scroll in NOVA, and bold oversized typography — each page tells its story with a rhythm completely different from conventional layouts.",
        },
      },
      {
        icon: Gauge,
        title: { ar: "أداء سلس رغم كل الفخامة", en: "Smooth performance despite the spectacle" },
        desc: {
          ar: "كل الفخامة دي معمولة بـ vanilla JavaScript وCanvas وWebGL خام — من غير أي مكتبة 3D تقيلة، مع rAF وrendering محسوب عشان السلاسة تفضل معاك في كل إطار.",
          en: "All of this spectacle is built with vanilla JavaScript, Canvas and raw WebGL — no heavy 3D libraries, with rAF and carefully budgeted rendering to keep every frame smooth.",
        },
      },
    ],

    problem: [
      {
        ar: "معظم صفحات الهبوط بتنطلق من نفس القالب: hero أبيض، ثلاث كروت، وCTA أزرق. بالنسبة لبراندات عوالم الـ gaming والـ AI والإبداع، ده كارثة انطباعات: المنتج بيوعد بعالم مختلف تمامًا، وصفحته شبه أي حاجة تانية في السوق. الفجوة بين اللي المنتج بيقوله واللي صفحته بتعمله هي اللي بتضيّع الثقة من أول ثانية.",
        en: "Most landing pages start from the same template: a white hero, three cards, and a blue CTA. For brands in gaming, AI and creative worlds, that's an impressions disaster: the product promises a completely different universe, while its page looks like everything else on the market. The gap between what a product says and what its page does is what loses trust in the first second.",
      },
      {
        ar: "والتحدي التقني كان حقيقي بنفس القوة: إزاي تحقق المستوى ده من الحركة والعمق والتفاعل من غير ما تحوّل الصفحة لحمولة تقيلة — عشان تفضل شغالة سلسة على أجهزة عادية ومتصفحات موبايل، ومش بس على ماكينات التطوير.",
        en: "And the technical challenge was just as real: how do you reach that level of motion, depth and interactivity without turning the page into a heavy load — keeping it fluid on ordinary devices and mobile browsers, not just on developer machines.",
      },
    ],

    solution: [
      {
        ar: "بنيت سلسلة من أربع صفحات، كل واحدة بمفهوم واسم وهوية كاملة: MONOLITH (محرك spatial إبداعي)، OBLIVION (عالم موازي بطاقة أصعب)، ECHO (منصة ذكاء إبداعي)، وNOVA (نفس العائلة بطاقة تالتة). كل صفحة بتبدأ بشاشة إقلاع سينمائية، وبعدها عالم متكامل: WebGL حية، مؤشرات مخصصة، وشريط كلمات بيلف، وتايبوغرافي جريئة.",
        en: "I built a series of four pages, each with its own concept, name and complete identity: MONOLITH (a spatial creation engine), OBLIVION (a parallel world with a harder edge), ECHO (a creative intelligence platform), and NOVA (the family's third voice). Every page opens with a cinematic boot sequence, then unfolds a complete world: live WebGL, custom cursors, looping word ribbons, and bold typography.",
      },
      {
        ar: "تقنيًا، كل حاجة معمولة بالكود: Canvas وWebGL خام مع requestAnimationFrame للرسومات، وحركات مربوطة بـ IntersectionObserver عشان مفيش حاجة تشتغل غير وهي ظاهرة على الشاشة. النتيجة: صفحات فخامة شكلاً وخفيفة وزنًا — عمق بصري حقيقي من غير أي framework 3D تقيل في الميزان.",
        en: "Technically, everything is drawn by code: raw Canvas and WebGL with requestAnimationFrame for graphics, and motion bound to IntersectionObserver so nothing runs until it's on screen. The result: pages that are luxurious to look at and light to load — real visual depth with no heavy 3D framework in the weight budget.",
      },
    ],

    myRoleChips: [
      "Concept & Art Direction",
      "WebGL / Canvas",
      "Motion Design",
      "Custom Cursors",
      "Tailwind CSS",
      "Performance",
    ],

    results: [
      {
        ar: "الأربع صفحات live على GitHub Pages وبتشتغل كـ gallery تفاعلي: أي حد بيدخل أي صفحة بيفهم في ثواني إني أقدر أبني واجهات مش زي الكل — ودي الصفحات اللي بتفتح باب الشغل الإبداعي مع العملاء اللي عايزين حاجة استثنائية فعلًا.",
        en: "All four pages are live on GitHub Pages and work as an interactive gallery: anyone entering any page understands in seconds that I can build interfaces unlike everyone else's — and these are the pages that open the door to creative work with clients who genuinely want something exceptional.",
      },
    ],

    impact: [
      { ar: "أربعة عوالم بصرية مكتملة — لكل براند هوية مختلفة", en: "Four complete visual worlds — a different identity per brand" },
      { ar: "حركة WebGL وCanvas realtime بـ vanilla JS", en: "Realtime WebGL & Canvas motion in vanilla JS" },
      { ar: "أداء سلس من غير مكتبات 3D تقيلة", en: "Smooth performance without heavy 3D libraries" },
      { ar: "سلسلة بتوثّق الحد الأعلى لقدرات الواجهات عندي", en: "A series documenting the ceiling of my front-end craft" },
    ],

    screenshots: [
      {
        title: { ar: "MONOLITH — شاشة الإقلاع", en: "MONOLITH — boot sequence" },
        src: "/screenshots/monolith-hero.png",
      },
      {
        title: { ar: "OBLIVION — Icosahedron سلكي", en: "OBLIVION — wireframe icosahedron" },
        src: "/screenshots/oblivion-hero.png",
      },
      {
        title: { ar: "ECHO — كرة WebGL متحولة", en: "ECHO — morphing WebGL sphere" },
        src: "/screenshots/echo-hero.png",
      },
      {
        title: { ar: "NOVA — نص الجسيمات", en: "NOVA — particle text" },
        src: "/screenshots/nova-hero.png",
      },
    ],
  },

  // ==========================================================
  // ✅ المشروع رقم 5 — يلا شياكه: متجر إلكتروني كامل
  //    Live: https://yallashiaka.vercel.app
  // ==========================================================
  {
    slug: "yallashiaka-store",
    published: true,
    emoji: "🛍️",
    title: {
      ar: "يلا شياكه — متجر أحذية وإكسسوارات",
      en: "Yalla Shiaka — Shoes & Accessories Store",
    },
    subtitle: {
      ar: "متجر إلكتروني مع لوحات أدمن ومشرفين",
      en: "E-commerce store with admin & supervisor dashboards",
    },
    short: {
      ar: "متجر إلكتروني كامل: سلة شراء، طلبات، لوحة أدمن، ولوحة مشرفين بنظام اعتماد للمنتجات.",
      en: "A complete e-commerce store: cart, orders, an admin dashboard, and a supervisor panel with a product approval workflow.",
    },
    type: {
      ar: "متجر إلكتروني",
      en: "E-commerce store",
    },
    year: "2026",
    role: {
      ar: "Full-Stack Developer — بناء كامل من الصفر",
      en: "Full-Stack Developer — built end-to-end from scratch",
    },
    technologies: ["Next.js 16", "React 19", "TypeScript", "Prisma", "SQLite", "Tailwind CSS"],
    liveUrl: "https://yallashiaka.vercel.app",
    features: [
      {
        icon: Package,
        title: { ar: "كتالوج منتجات وسلة شراء", en: "Catalog & shopping cart" },
        desc: {
          ar: "منتجات بالصور والمقاسات والألوان والمخزون، سلة شراء بحالة محفوظة، وصفحة تفاصيل لكل منتج.",
          en: "Products with images, sizes, colors and stock, a persistent cart, and a detail page per product.",
        },
      },
      {
        icon: ShieldCheck,
        title: { ar: "مصادقة وصلاحيات بأدوار", en: "Role-based auth" },
        desc: {
          ar: "ثلاثة أدوار: أدمن، مشرف، وعميل — كلمات سر مشفرة بـ scrypt وجلسات موقّعة بـ HMAC بدون تخزين في قاعدة البيانات.",
          en: "Three roles: admin, supervisor, and customer — scrypt-hashed passwords and HMAC-signed stateless sessions.",
        },
      },
      {
        icon: UserCog,
        title: { ar: "نظام اعتماد المنتجات", en: "Product approval workflow" },
        desc: {
          ar: "المشرف يضيف منتجاته فينتظر مراجعة الأدمن: اعتماد أو رفض بسبب واضح — محتوى المتجر تحت سيطرة صاحبه.",
          en: "Supervisors submit products that wait for admin review: approve, or reject with a clear reason — the owner stays in control of the catalog.",
        },
      },
      {
        icon: BarChart3,
        title: { ar: "لوحات تحكم وإحصائيات", en: "Dashboards & sales stats" },
        desc: {
          ar: "لوحة أدمن للمستخدمين والمنتجات والطلبات، ولوحة مشرف بمنتجاته ومبيعاته — كل قرار مسنود برقم.",
          en: "An admin panel for users, products and orders, plus a supervisor panel with their own products and sales — decisions backed by numbers.",
        },
      },
      {
        icon: Gauge,
        title: { ar: "أمان وحدود استخدام", en: "Security & rate limiting" },
        desc: {
          ar: "تحقق من كل مدخل على السيرفر، حدود لمحاولات الدخول، ورفع ملفات متحكم فيه — جاهز للعمل الحقيقي.",
          en: "Server-side validation on every input, login rate limiting, and controlled file uploads — ready for real work.",
        },
      },
    ],
    problem: [
      { ar: "التجار الصغار محتاجين متجر حقيقي بسرعة وبأقل تكلفة، والحلول الجاهزة إما غالية أو مش بتتحكم فيها.", en: "Small merchants need a real store fast and cheap; off-the-shelf platforms are either expensive or impossible to control." },
      { ar: "محتاجين أكتر من متجر: فريق بيع (مشرفين) بيضيف منتجاته، وصاحب المتجر لازم يوافق على كل حاجة قبل النشر.", en: "They need more than a storefront: a sales team (supervisors) adding products, with the owner approving everything before it goes live." },
      { ar: "لوحات التحكم الجاهزة معقدة للتجار — محتاجين حاجة بسيطة وسريعة وبالعربي.", en: "Stock dashboards are too complex for merchants — they need something simple, fast, and in Arabic." },
    ],
    solution: [
      { ar: "بنيت المتجر بـ Next.js وPrisma: واجهة عربية RTL كاملة وسريعة، مع تجربة شراء في خطوات قليلة.", en: "I built the store with Next.js and Prisma: a fast, fully RTL Arabic UI with a checkout that takes a few steps." },
      { ar: "صممت نظام أدوار واضح: العميل يشتري، المشرف يبيع ويتابع مبيعاته، والأدمن يدير ويعتمد كل شيء.", en: "I designed clear roles: customers buy, supervisors sell and track their sales, and the admin manages and approves everything." },
      { ar: "خليت الجلسات موقّعة بدون تخزين في قاعدة البيانات — أسرع وأأمن على بيئات الاستضافة السحابية.", en: "Sessions are signed and stateless — faster and safer on cloud hosting environments." },
    ],
    myRoleChips: ["Next.js", "React 19", "Prisma", "Auth & Roles", "Dashboards", "RTL UI"],
    results: [
      { ar: "متجر لايف شغال على Vercel بمنتجات وطلبات فعلية", en: "A live store on Vercel with real products and orders" },
      { ar: "ثلاث لوحات تحكم: أدمن، مشرف، وتجربة شراء للعميل", en: "Three control surfaces: admin, supervisor, and the customer buying flow" },
      { ar: "نظام اعتماد يحمي جودة محتوى المتجر", en: "An approval workflow that protects catalog quality" },
      { ar: "كود نظيف: TypeScript صارم بدون أخطاء وESLint نضيف", en: "Clean code: strict TypeScript with zero errors and a clean ESLint pass" },
    ],
    impact: [
      { ar: "صاحب المتجر يقدر يدير فريق بيع كامل من غير ما يقلق على المحتوى", en: "The owner can run a whole sales team without worrying about catalog content" },
      { ar: "تجربة شراء عربية سريعة بتقلل التخلي عن السلة", en: "A fast Arabic buying experience that reduces cart abandonment" },
      { ar: "أساس قابل للتوسع: بوابة دفع، شركات شحن، وتقارير أعمار لاحقاً", en: "A base ready to grow: payment gateway, shipping, and deeper reports later" },
    ],
    screenshots: [
      {
        title: { ar: "واجهة المتجر — المنتجات المميزة", en: "Storefront — featured products" },
      },
      {
        title: { ar: "صفحة المنتج — مقاسات وألوان", en: "Product page — sizes & colors" },
      },
      {
        title: { ar: "لوحة الأدمن — المنتجات والاعتماد", en: "Admin dashboard — products & approvals" },
      },
      {
        title: { ar: "لوحة المشرف — المبيعات", en: "Supervisor panel — sales" },
      },
    ],
  },

  // ==========================================================
  // ✅ المشروع رقم 6 — جادجيتا: متجر أجهزة المطبخ الذكية
  //    Live: https://gadgate.vercel.app
  // ==========================================================
  {
    slug: "gadgeta-store",
    published: true,
    emoji: "🍳",
    title: {
      ar: "جادجيتا — سحر وابتكار",
      en: "Gadgeta — Magic & Innovation",
    },
    subtitle: {
      ar: "متجر إلكتروني كامل بمحرّك عروض ذهبية",
      en: "Full-featured e-commerce with a golden deals engine",
    },
    short: {
      ar: "متجر متكامل على Postgres: كوبونات، عروض ذهبية بأسعار يحددها الأدمن، ولوحة تحكم شاملة.",
      en: "A complete store on Postgres: coupons, admin-priced golden deals, and a full control dashboard.",
    },
    type: {
      ar: "متجر إلكتروني",
      en: "E-commerce store",
    },
    year: "2026",
    role: {
      ar: "Full-Stack Developer — بناء كامل من الصفر",
      en: "Full-Stack Developer — built end-to-end from scratch",
    },
    technologies: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Neon", "JWT"],
    liveUrl: "https://gadgate.vercel.app",
    features: [
      {
        icon: Package,
        title: { ar: "متجر كامل بتجربة شراء حقيقية", en: "Complete shopping experience" },
        desc: {
          ar: "أقسام، منتجات بالتفاصيل، سلة، مفضلة، وطلب حقيقي بقاعدة بيانات Postgres دائمة — مش demo.",
          en: "Categories, detailed products, cart, favorites and real orders on a persistent Postgres database — not a demo.",
        },
      },
      {
        icon: Sparkles,
        title: { ar: "محرّك العروض الذهبية", en: "Golden deals engine" },
        desc: {
          ar: "الأدمن يفعّل عرضاً ذهبياً بسعر وخصم يحددهم بنفسه على أي منتج — فيظهر فوراً بالتمييز في الواجهة.",
          en: "Admin activates golden deals with custom prices and discounts on any product — highlighted instantly in the storefront.",
        },
      },
      {
        icon: CreditCard,
        title: { ar: "كوبونات خصم بمنطق سيرفر", en: "Server-side coupons" },
        desc: {
          ar: "أكواد خصم بحد استخدام وصلاحية، والتحقق والتطبيق كله على السيرفر — التلاعب بالمستغمل مستحيل.",
          en: "Discount codes with usage limits and validity, verified and applied server-side — no client tampering.",
        },
      },
      {
        icon: LayoutDashboard,
        title: { ar: "لوحة أدمن شاملة", en: "Comprehensive admin panel" },
        desc: {
          ar: "منتجات وأقسام وطلبات وعملاء وكوبونات وعروض ذهبية وإعدادات تواصل تظهر في المتجر فوراً.",
          en: "Products, categories, orders, customers, coupons, golden deals and contact settings reflected live in the store.",
        },
      },
      {
        icon: Globe,
        title: { ar: "عربي/إنجليزي + ليلي/نهاري", en: "AR/EN + dark/light" },
        desc: {
          ar: "دعم كامل RTL/LTR مع وضع ليلي ونهاري، وصور مضغوطة تلقائياً بدون خدمات خارجية.",
          en: "Full RTL/LTR support with dark and light modes, plus auto-compressed images without external services.",
        },
      },
    ],
    problem: [
      { ar: "تاجر أجهزة مطبخ محتاج متجر بحقيقي بقاعدة بيانات دائمة وكوبونات وعروض يتحكم فيها بنفسه.", en: "A kitchen-appliance merchant needs a real store with a persistent database, coupons and deals he controls himself." },
      { ar: "الحلول الجاهزة بتاخد عمولة أو اشتراك شهري ومش بتديه حرية كاملة في الشكل والعروض.", en: "Off-the-shelf platforms take commissions or subscriptions and give no full control over shape and deals." },
      { ar: "محتاج نظام يشتغل بالعربي الأول بواجهة سريعة ومنظمة على الموبايل.", en: "He needs an Arabic-first system, fast and tidy on mobile." },
    ],
    solution: [
      { ar: "بنيت المتجر على Neon Postgres — بيانات دائمة تفضل موجودة، مش قاعدة مؤقتة.", en: "I built the store on Neon Postgres — data persists, no temporary database." },
      { ar: "كل الأسعار والخصومات والكوبونات بتتحسب على السيرفر بس — الأمان مش اختياري.", en: "All pricing, discounts and coupons are computed server-side only — security is not optional." },
      { ar: "لوحة أدمن واحدة بتدير كل حاجة: من كتالوج المنتجات لحد رقم الواتساب اللي بيظهر في المتجر.", en: "One admin panel manages everything: from the product catalog to the WhatsApp number shown in the store." },
    ],
    myRoleChips: ["Next.js 16", "React 19", "Prisma", "Neon Postgres", "JWT Auth", "RTL"],
    results: [
      { ar: "متجر إنتاجي لايف على Vercel بقاعدة Neon دائمة", en: "A production store live on Vercel with persistent Neon database" },
      { ar: "محرّك عروض ذهبية وكوبونات بإدارة كاملة", en: "Golden deals and coupon engine with full control" },
      { ar: "دخول برقم الهاتف المصري بجلسات httpOnly آمنة", en: "Egyptian phone login with secure httpOnly sessions" },
      { ar: "أداء عالي: صور مضغوطة webp وطلب خفيف", en: "High performance: webp-compressed images and a light bundle" },
    ],
    impact: [
      { ar: "صاحب المتجر يدير كل حاجة بنفسه من غير مبرمج", en: "The owner runs everything himself without a developer" },
      { ar: "العروض الذهبية بتطلع مبيعات محددة بأسعار مرنة", en: "Golden deals drive targeted sales with flexible pricing" },
      { ar: "أساس قابل للتوسع: دفع إلكتروني وشحن لاحقاً", en: "A base ready to grow: payments and shipping later" },
    ],
    screenshots: [
      {
        title: { ar: "واجهة المتجر — العروض الذهبية", en: "Storefront — golden deals" },
      },
      {
        title: { ar: "صفحة المنتج", en: "Product page" },
      },
      {
        title: { ar: "لوحة الأدمن — إدارة كاملة", en: "Admin panel — full control" },
      },
      {
        title: { ar: "السلة والدفع", en: "Cart & checkout" },
      },
    ],
  },
];

export function getPublishedProjects() {
  return projects.filter((p) => p.published);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
