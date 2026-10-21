const services = [
  {
    icon: "fa-globe",
    title: "سایت شرکتی",
    desc: "طراحی و توسعه سایت‌های شرکتی از نسخه اقتصادی تا طراحی اختصاصی و Next.js.",
    price: "از ۵ میلیون تومان",
  },
  {
    icon: "fa-cart-shopping",
    title: "سایت فروشگاهی",
    desc: "راه‌اندازی و توسعه فروشگاه اینترنتی، اتصال به درگاه، ترب، اینماد و امکانات اختصاصی.",
    price: "از ۲۰ میلیون تومان",
  },
  {
    icon: "fa-boxes-stacked",
    title: "سیستم انبارداری",
    desc: "طراحی سیستم اختصاصی مدیریت کالا، موجودی، ورود و خروج و فرآیندهای انبار.",
    price: "از ۵۰ میلیون تومان",
  },
  {
    icon: "fa-industry",
    title: "تولید و برنامه‌ریزی",
    desc: "سیستم‌های انبارداری، مدیریت تولید و برنامه‌ریزی فرآیندهای تولید.",
    price: "از ۱۰۰ میلیون تومان",
  },
  {
    icon: "fa-robot",
    title: "بات تلگرام و بله",
    desc: "طراحی بات‌های اختصاصی برای اتوماسیون، خدمات مشتری و فرآیندهای کسب‌وکار.",
    price: "شروع از ۲ میلیون تومان",
  },
  {
    icon: "fa-instagram",
    title: "ادمینی اینستاگرام",
    desc: "مدیریت و تولید محتوای پیج، طراحی و اجرای برنامه حضور حرفه‌ای در اینستاگرام.",
    price: "۳۰ میلیون تومان",
  },
  {
    icon: "fa-id-card",
    title: "کارت ویزیت",
    desc: "طراحی هویت بصری و کارت ویزیت حرفه‌ای متناسب با برند.",
    price: "۲ میلیون تومان",
  },
  {
    icon: "fa-graduation-cap",
    title: "پروژه‌های دانشجویی",
    desc: "توسعه پروژه‌های نرم‌افزاری دانشجویی و مشاوره فنی.",
    price: "توافقی",
  },
];

const projects = [
  {
    id: 1,
    title: "سیستم مدیریت تولید",
    company: "ناب الکترونیک",
    status: "در حال توسعه",
    category: "system",
    categoryLabel: "سیستم اختصاصی",
    summary:
      "سامانه‌ای برای مدیریت تولید، رهگیری بارکد، ایستگاه‌های کاری و بسته‌بندی.",
    description:
      "سیستم مدیریت تولید برای یکپارچه‌سازی فرآیندهای تولید طراحی شده است؛ از ثبت و برنامه‌ریزی تولید تا رهگیری محصول، مدیریت ایستگاه‌های کاری، بارکد، بسته‌بندی و گزارش‌گیری. هدف پروژه کاهش خطای انسانی، افزایش شفافیت و فراهم‌کردن دید دقیق‌تر از روند تولید است.",
    about:
      "این سامانه به‌عنوان یک راهکار اختصاصی برای مدیریت فرآیند تولید طراحی شده و بخش‌های مختلف خط تولید را در یک محیط یکپارچه به هم متصل می‌کند. ساختار پروژه به‌گونه‌ای در نظر گرفته شده که امکان توسعه قابلیت‌های جدید در ادامه مسیر وجود داشته باشد.",
    tech: ["NestJS", "PostgreSQL", "JavaScript"],
    icon: "<i class='fa-solid fa-chart-column'></i>",
    image: "assets/projects/project-1-1.jpg",
    gallery: ["assets/projects/project-1-1.jpg", "assets/projects/project-1-2.jpg", "assets/projects/project-1-3.jpg"],
    url: "https://www.nabelec.ir",
    features: [
      ["fa-chart-column", "مدیریت تولید"],
      ["fa-barcode", "بارکد"],
      ["fa-user", "ایستگاه کاری"],
      ["fa-box", "بسته‌بندی"],
      ["fa-list-check", "گزارش‌گیری"],
    ],
  },
  {
    id: 2,
    title: "فروشگاه اینترنتی",
    company: "نمونه مشتری",
    status: "تکمیل شده",
    category: "shop",
    categoryLabel: "فروشگاه",
    summary: "فروشگاهی مدرن برای مدیریت محصولات، سفارش‌ها و تجربه خرید آنلاین.",
    description:
      "این پروژه با تمرکز بر تجربه خرید ساده و سریع طراحی شده است و بخش‌هایی مانند نمایش محصولات، مدیریت سفارش‌ها، ساختار دسته‌بندی و مسیر کاربر را در یک تجربه یکپارچه قرار می‌دهد.",
    about:
      "در طراحی این فروشگاه تلاش شده مسیر رسیدن کاربر از مشاهده محصول تا ثبت سفارش کوتاه و روشن باشد. ساختار فنی نیز برای اضافه‌شدن امکانات و اتصال به سرویس‌های موردنیاز در آینده آماده شده است.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "<i class='fa-solid fa-cart-shopping'></i>",
    image: "assets/project-shop.jpg",
    url: "",
    features: [
      ["fa-cart-shopping", "مدیریت فروشگاه"],
      ["fa-box-open", "مدیریت محصولات"],
      ["fa-receipt", "سفارش‌ها"],
      ["fa-tags", "دسته‌بندی"],
      ["fa-user", "حساب کاربری"],
    ],
  },
  {
    id: 3,
    title: "اپلیکیشن و Backend هوشمند",
    company: "نمونه مشتری",
    status: "تکمیل شده",
    category: "app",
    categoryLabel: "اپلیکیشن",
    summary:
      "اپلیکیشن موبایل با Backend اختصاصی برای مدیریت داده و سرویس‌های هوشمند.",
    description:
      "یک راهکار موبایلی که رابط کاربری اپلیکیشن را به Backend اختصاصی متصل می‌کند تا داده‌ها، درخواست‌ها و سرویس‌های موردنیاز در یک معماری منسجم مدیریت شوند.",
    about:
      "این پروژه با تمرکز بر ارتباط پایدار میان اپلیکیشن و Backend توسعه داده شده است. ساختار سرویس‌ها به‌صورت ماژولار در نظر گرفته شده تا قابلیت افزودن امکانات جدید بدون بازطراحی کل سیستم وجود داشته باشد.",
    tech: ["Android", "Express.js", "Node.js"],
    icon: "<i class='fa-solid fa-mobile-screen-button'></i>",
    image: "assets/project-app.jpg",
    url: "",
    features: [
      ["fa-mobile-screen-button", "اپلیکیشن موبایل"],
      ["fa-server", "Backend اختصاصی"],
      ["fa-database", "مدیریت داده"],
      ["fa-bolt", "سرویس‌های سریع"],
      ["fa-shield-halved", "امنیت ارتباط"],
    ],
  },
  {
    id: 4,
    title: "سامانه سازمانی اختصاصی",
    company: "نمونه مشتری",
    status: "در حال توسعه",
    category: "system",
    categoryLabel: "سیستم اختصاصی",
    summary: "سامانه‌ای برای مدیریت فرآیندهای داخلی و داده‌های یک سازمان.",
    description:
      "این سامانه با هدف دیجیتالی‌کردن فرآیندهای داخلی، مدیریت داده‌ها و ساده‌ترکردن گردش کار سازمانی طراحی شده است و امکان توسعه متناسب با ساختار هر مجموعه را دارد.",
    about:
      "در این پروژه ساختار سیستم بر اساس فرآیندهای سازمانی تعریف شده و بخش‌های مختلف آن برای کاهش کارهای دستی و افزایش نظم اطلاعات در نظر گرفته شده‌اند. معماری پروژه قابلیت اضافه‌شدن ماژول‌های جدید را حفظ می‌کند.",
    tech: ["Java", "Spring Boot", "React"],
    icon: "<i class='fa-solid fa-server'></i>",
    image: "assets/project-org.jpg",
    url: "",
    features: [
      ["fa-diagram-project", "گردش کار"],
      ["fa-database", "مدیریت داده"],
      ["fa-users", "کاربران سازمانی"],
      ["fa-chart-pie", "گزارش‌ها"],
      ["fa-layer-group", "ماژولار"],
    ],
  },
  {
    id: 5,
    title: "وب‌سایت معرفی شرکت",
    company: "ناب الکترونیک",
    status: "تکمیل شده",
    category: "web",
    categoryLabel: "وب‌سایت شرکتی",
    summary:
      "وب‌سایت رسمی شرکتی ناب الکترونیک برای معرفی شرکت، خدمات و مسیر ارتباط با مخاطب.",
    description:
      "وب‌سایت معرفی شرکت با تمرکز بر هویت بصری برند، ساختار محتوایی روشن، طراحی Responsive و مسیر ساده برای آشنایی مخاطب با خدمات و ایجاد ارتباط.",
    about:
      "در این پروژه تلاش شده هویت برند در تمام صفحات یکپارچه باشد و کاربر بتواند با کمترین تعداد کلیک به خدمات، معرفی شرکت و راه‌های ارتباطی دسترسی پیدا کند. طراحی برای نمایش مناسب در موبایل و دسکتاپ نیز در نظر گرفته شده است.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "<i class='fa-solid fa-globe'></i>",
    image: "assets/projects/project-5-1.jpg",
    gallery: ["assets/projects/project-5-1.jpg", "assets/projects/project-5-2.jpg", "assets/projects/project-5-3.jpg"],
    url: " https://www.nbelec.ir",
    features: [
      ["fa-desktop", "طراحی Responsive"],
      ["fa-palette", "هویت بصری"],
      ["fa-gauge-high", "سرعت مناسب"],
      ["fa-magnifying-glass", "ساختار محتوا"],
      ["fa-mobile-screen", "نمایش موبایل"],
    ],
  },
];

const companies = [
  { name: "ناب الکترونیک", tag: "طراحی و توسعه بردهای الکترونیکی", logo: "N" },
  { name: "شرکت همکار ۲", tag: "راهکارهای صنعتی", logo: "T" },
  { name: "شرکت همکار ۳", tag: "کسب‌وکار و تجارت", logo: "C" },
  { name: "شرکت همکار ۴", tag: "فناوری و خدمات", logo: "A" },
];

// ==================== اطلاعات اعضای تیم تک‌رایا ====================
// ترتیب نمایش از راست به چپ: امیرمحمد، پریا، سروین، زهرا
const team = [
  {
    name: "Amirmohammad.jz ",
    role: "CEO & Backend Developer",
    icon: "assets/team-amirmohammad.jpg",
    alt: "تصویر امیرمحمد، عضو تیم تک‌رایا",
  },
  {
    name: "Parya.vlm",
    role: "Designer & Backend Developer",
    icon: "assets/team-sarvin.jpg",
    alt: "تصویر پریا، عضو تیم تک‌رایا",
  },
  {
    name: "Sarvin.hk",
    role: "Frontend Developer",
    icon: "assets/team-pariya-glasses.jpg",
    alt: "تصویر سروین با عینک، عضو تیم تک‌رایا",
  },
  {
    name: "Zahra.kn",
    role: "UI/UX Designer",
    icon: "assets/team-zahra-hijab.jpg",
    alt: "تصویر زهرا با حجاب، عضو تیم تک‌رایا",
  },
];

function serviceCard(s) {
  const iconStyle = s.icon === "fa-instagram" ? "fa-brands" : "fa-solid";
  return `<article class="service-card tilt"><div class="service-icon"><i class="${iconStyle} ${s.icon}"></i></div><h3>${s.title}</h3><p>${s.desc}</p><span class="price">${s.price}</span></article>`;
}
function projectCard(p) {
  const projectImage = p.image
    ? `<img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('project-image-fallback')">`
    : "";
  return `<a class="project-card reveal tilt" href="project.html?id=${p.id}">
    <div class="project-image ${p.image ? "has-project-image" : "project-image-fallback"}">
      ${projectImage}
      <span class="project-image-icon">${p.icon}</span>
      <span class="project-image-caption">${p.categoryLabel || "نمونه‌کار تک‌رایا"}</span>
    </div>
    <div class="project-body">
      <div class="project-meta"><span>${p.company}</span><span class="project-status">${p.status}</span></div>
      <h3>${p.title}</h3><p>${p.summary}</p>
      <div class="project-tech">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
    </div>
  </a>`;
}
function companyCard(c) {
  return `<div class="company-card reveal"><div class="company-logo">${c.logo}</div><b>${c.name}</b><span>${c.tag}</span></div>`;
}
function teamCard(t) {
  return `<article class="team-card reveal"><div class="team-photo"><img src="${t.icon}" alt="${t.alt || t.name}" loading="lazy"></div><div class="team-card-body"><h3>${t.name}</h3><p>${t.role}</p></div></article>`;
}
