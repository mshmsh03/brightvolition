export const LANGS = ['en', 'ar', 'ku'];
export const PAGES = ['index', 'about', 'services', 'products', 'projects', 'contact'];

// The whole site's chrome — nav labels, footer columns, contact block — lives
// here rather than being repeated inside each page's content file. The old
// static site carried all three languages inline in every page and toggled
// them with a CSS class, which meant one copy of the header per page per
// language; this is the single source those all collapse into.
export const SITE = {
  en: {
    dir: 'ltr',
    langName: 'EN',
    ogLocale: 'en_US',
    hreflang: 'en',
    brandAlt: 'Bright Volition',
    footerLogoAlt: 'Bright Volition logo',
    burgerLabel: 'Menu',
    headerCta: 'Get a Quote',
    nav: {
      index: 'Home',
      about: 'About',
      services: 'Services',
      products: 'Products',
      projects: 'Projects',
      contact: 'Contact',
    },
    tagline:
      'Electrical, Instrumentation & Mechanical engineering, construction, and product supply — headquartered in Sulaymaniyah, Kurdistan Region of Iraq.',
    footerCompanyHeading: 'Company',
    footerCompanyNav: {
      about: 'About Us',
      services: 'Services',
      products: 'Products',
      projects: 'Projects',
      contact: 'Contact',
    },
    profileLabel: 'Company Profile (PDF)',
    footerServicesHeading: 'Services',
    footerServices: [
      'Design & Engineering',
      'Construction & Installation',
      'Commissioning & Start-Up',
      'Product Supply',
      'Troubleshooting',
    ],
    contactHeading: 'Contact',
    address: 'Mardin Street, Opposite Dilan City, Sulaymaniyah (46001), Iraq',
    copyright: 'Bright Volition. All rights reserved.',
    regionLine: 'Kurdistan Region, Iraq',
    backToTop: 'Back to top',
  },
  ar: {
    dir: 'rtl',
    langName: 'AR',
    ogLocale: 'ar_IQ',
    hreflang: 'ar',
    brandAlt: 'الإرادة المشرقة',
    footerLogoAlt: 'شعار الإرادة المشرقة',
    burgerLabel: 'القائمة',
    headerCta: 'اطلب عرض سعر',
    nav: {
      index: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      products: 'منتجاتنا',
      projects: 'مشاريعنا',
      contact: 'تواصل معنا',
    },
    tagline:
      'هندسة كهربائية وأجهزة قياس وميكانيكية، وتنفيذ وتوريد — ومقرنا الرئيسي في السليمانية، إقليم كوردستان العراق.',
    footerCompanyHeading: 'الشركة',
    footerCompanyNav: {
      about: 'من نحن',
      services: 'خدماتنا',
      products: 'منتجاتنا',
      projects: 'مشاريعنا',
      contact: 'تواصل معنا',
    },
    profileLabel: 'الملف التعريفي (PDF)',
    footerServicesHeading: 'الخدمات',
    footerServices: [
      'التصميم والهندسة',
      'التنفيذ والتركيب',
      'التشغيل التجريبي',
      'توريد المنتجات',
      'استكشاف الأعطال',
    ],
    contactHeading: 'تواصل معنا',
    address: 'شارع ماردين، مقابل مدينة دلان، السليمانية (46001)، العراق',
    copyright: 'الإرادة المشرقة. جميع الحقوق محفوظة.',
    regionLine: 'إقليم كوردستان، العراق',
    backToTop: 'العودة إلى الأعلى',
  },
  ku: {
    dir: 'rtl',
    langName: 'KU',
    ogLocale: 'ckb_IQ',
    hreflang: 'ckb',
    brandAlt: 'برایت ڤۆلیشن',
    footerLogoAlt: 'لۆگۆی برایت ڤۆلیشن',
    burgerLabel: 'پێڕست',
    headerCta: 'داوای نرخنامە بکە',
    nav: {
      index: 'سەرەکی',
      about: 'دەربارەمان',
      services: 'خزمەتگوزاریەکانمان',
      products: 'بەرهەمەکانمان',
      projects: 'پڕۆژەکانمان',
      contact: 'پەیوەندیمان پێوە بکە',
    },
    tagline:
      'ئەندازیاری کارەبایی، ئامێری پێوانە و میکانیکی، جێبەجێکردن و دابینکردن — ناوەندی سەرەکیمان لە سلێمانی، هەرێمی کوردستانی عێراقە.',
    footerCompanyHeading: 'کۆمپانیا',
    footerCompanyNav: {
      about: 'دەربارەمان',
      services: 'خزمەتگوزاریەکانمان',
      products: 'بەرهەمەکانمان',
      projects: 'پڕۆژەکانمان',
      contact: 'پەیوەندیمان پێوە بکە',
    },
    profileLabel: 'پرۆفایلی کۆمپانیا (PDF)',
    footerServicesHeading: 'خزمەتگوزاریەکان',
    footerServices: [
      'دیزاین و ئەندازیاری',
      'جێبەجێکردن و دامەزراندن',
      'کارپێکردنی تاقیکارییانە',
      'دابینکردنی بەرهەم',
      'شیکردنەوەی کێشە',
    ],
    contactHeading: 'پەیوەندیمان پێوە بکە',
    address: 'شەقامی ماردین، بەرامبەر شاری دیلان، سلێمانی (46001)، عێراق',
    copyright: 'برایت ڤۆلیشن. هەموو مافەکان پارێزراون.',
    regionLine: 'هەرێمی کوردستان، عێراق',
    backToTop: 'گەڕانەوە بۆ سەرەوە',
  },
};

export const PHONE_HREF = 'tel:+9647717065000';
export const PHONE_DISPLAY = '+964 771 706 5000';
export const EMAIL = 'info@brightvolition.com';
export const LINKEDIN = 'https://www.linkedin.com/company/bright-volition/';
export const PROFILE_PDF = '/assets/docs/Bright-Volition-Company-Profile.pdf';

// Root-relative internal link path for a given language/page pair. The
// trailing slash is not cosmetic: `trailingSlash: true` in next.config.js
// makes the export emit `out/en/about/index.html`, and that is the only path
// GitHub Pages will serve without a rewrite rule.
export function pagePath(lang, page) {
  return page === 'index' ? `/${lang}/` : `/${lang}/${page}/`;
}

// Per-page <title>/<meta description>. The English strings are carried over
// verbatim from the pre-Next static pages so nothing already indexed changes
// wording; the Arabic and Kurdish sets are new, because the old site served
// one English <head> for all three languages.
export const PAGE_META = {
  en: {
    index: {
      title: 'Bright Volition | Electrical, Instrumentation & Mechanical Engineering — Iraq',
      description:
        'Bright Volition is an EIM engineering and industrial supply company based in Sulaymaniyah, Kurdistan Region of Iraq — design, construction, commissioning, product supply, and operations support.',
    },
    about: {
      title: 'About Us | Bright Volition',
      description:
        'Founded in 2022, Bright Volition is a registered KRG engineering company specializing in Electrical, Instrumentation, and Mechanical services, guided by a strict quality policy.',
    },
    services: {
      title: 'Services | Bright Volition',
      description:
        'Design & engineering, construction & installation, commissioning, product supply, and operations support across Electrical, Instrumentation, and Mechanical systems.',
    },
    products: {
      title: 'Products | Bright Volition',
      description:
        'Electrical, instrumentation, and mechanical products sourced from trusted global manufacturers — switchgear, measurement instruments, valves, rotating equipment, and more.',
    },
    projects: {
      title: 'Projects | Bright Volition',
      description:
        'Featured project: Reliability and grid-impact study for a 50MW PV power plant — Sinoma DCC Line 2 / Delta Cement Company, Bazyan, Sulaymaniyah, in coordination with the Ministry of Electricity.',
    },
    contact: {
      title: 'Contact Us | Bright Volition',
      description:
        'Reach Bright Volition for inquiries or RFQs — Mardin Street, Sulaymaniyah, Kurdistan Region of Iraq. info@brightvolition.com | +964 771 706 5000',
    },
  },
  ar: {
    index: {
      title: 'الإرادة المشرقة | الهندسة الكهربائية وأجهزة القياس والميكانيكية — العراق',
      description:
        'الإرادة المشرقة شركة هندسة وتوريد صناعي مقرها السليمانية، إقليم كوردستان العراق — التصميم والتنفيذ والتشغيل التجريبي وتوريد المنتجات ودعم التشغيل.',
    },
    about: {
      title: 'من نحن | الإرادة المشرقة',
      description:
        'تأسست الإرادة المشرقة عام 2022، وهي شركة هندسية مسجلة في حكومة إقليم كوردستان متخصصة بالخدمات الكهربائية وأجهزة القياس والميكانيكية، وتعمل وفق سياسة جودة صارمة.',
    },
    services: {
      title: 'خدماتنا | الإرادة المشرقة',
      description:
        'التصميم والهندسة، التنفيذ والتركيب، التشغيل التجريبي، توريد المنتجات، ودعم التشغيل عبر الأنظمة الكهربائية وأجهزة القياس والميكانيكية.',
    },
    products: {
      title: 'منتجاتنا | الإرادة المشرقة',
      description:
        'منتجات كهربائية وأجهزة قياس وميكانيكية من كبرى الشركات المصنعة الموثوقة — لوحات التوزيع، أجهزة القياس، الصمامات، المعدات الدوارة، وغيرها.',
    },
    projects: {
      title: 'مشاريعنا | الإرادة المشرقة',
      description:
        'مشروع مميز: دراسة الموثوقية والتأثير الشبكي لمحطة طاقة شمسية بقدرة 50 ميغاواط — سينوما دي سي سي 2 / شركة دلتا للإسمنت، بازيان، السليمانية، بالتنسيق مع وزارة الكهرباء.',
    },
    contact: {
      title: 'تواصل معنا | الإرادة المشرقة',
      description:
        'تواصل مع الإرادة المشرقة للاستفسارات أو طلبات عروض الأسعار — شارع ماردين، السليمانية، إقليم كوردستان العراق. info@brightvolition.com | ‎+964 771 706 5000',
    },
  },
  ku: {
    index: {
      title: 'برایت ڤۆلیشن | ئەندازیاری کارەبایی، ئامێری پێوانە و میکانیکی — عێراق',
      description:
        'برایت ڤۆلیشن کۆمپانیایەکی ئەندازیاری و دابینکردنی پیشەسازییە کە ناوەندی لە سلێمانی، هەرێمی کوردستانی عێراقە — دیزاین، جێبەجێکردن، کارپێکردنی تاقیکارییانە، دابینکردنی بەرهەم و پشتگیری کارپێکردن.',
    },
    about: {
      title: 'دەربارەمان | برایت ڤۆلیشن',
      description:
        'برایت ڤۆلیشن لە ساڵی 2022 دامەزرا و کۆمپانیایەکی ئەندازیاری تۆمارکراوە لە حکوومەتی هەرێمی کوردستان، پسپۆڕ لە خزمەتگوزاریی کارەبایی، ئامێری پێوانە و میکانیکی، بە ڕێنمایی سیاسەتی کوالیتیی توند.',
    },
    services: {
      title: 'خزمەتگوزاریەکانمان | برایت ڤۆلیشن',
      description:
        'دیزاین و ئەندازیاری، جێبەجێکردن و دامەزراندن، کارپێکردنی تاقیکارییانە، دابینکردنی بەرهەم و پشتگیری کارپێکردن لە سیستەمی کارەبایی، ئامێری پێوانە و میکانیکیدا.',
    },
    products: {
      title: 'بەرهەمەکانمان | برایت ڤۆلیشن',
      description:
        'بەرهەمی کارەبایی، ئامێری پێوانە و میکانیکی لە بەرهەمهێنەرە جیهانییە متمانەپێکراوەکانەوە — سویچگێر، ئامێری پێوانە، ڤاڵڤ، ئامێری سووڕاوە و زیاتر.',
    },
    projects: {
      title: 'پڕۆژەکانمان | برایت ڤۆلیشن',
      description:
        'پڕۆژەی دیار: خوێندنەوەی متمانەپێکراوی و کاریگەری گرید بۆ وێستگەیەکی وزەی خۆر بە توانای 50 مێگاوات — سینۆما دی سی سی 2 / کۆمپانیای دێلتا سیمێنت، بازیان، سلێمانی، بە هاوکاریی وەزارەتی کارەبا.',
    },
    contact: {
      title: 'پەیوەندیمان پێوە بکە | برایت ڤۆلیشن',
      description:
        'پەیوەندی بە برایت ڤۆلیشنەوە بکە بۆ پرسیار یان داواکاری نرخنامە — شەقامی ماردین، سلێمانی، هەرێمی کوردستانی عێراق. info@brightvolition.com | ‎+964 771 706 5000',
    },
  },
};

// Brand marks are language-neutral, and both the home page and the products
// page show the same two rows, so they live here rather than being repeated in
// six content files.
export const PARTNER_LOGOS = [
  { src: '/assets/img/partners/siemens.png', alt: 'Siemens' },
  { src: '/assets/img/partners/schneider.png', alt: 'Schneider Electric' },
  { src: '/assets/img/partners/abb.png', alt: 'ABB' },
  { src: '/assets/img/partners/honeywell.png', alt: 'Honeywell' },
  { src: '/assets/img/partners/emerson.png', alt: 'Emerson' },
  { src: '/assets/img/partners/yokogawa.png', alt: 'Yokogawa' },
  { src: '/assets/img/partners/ashcroft.png', alt: 'Ashcroft' },
];

export const CLIENT_LOGOS = [
  { src: '/assets/img/partners/enka.png', alt: 'ENKA' },
  { src: '/assets/img/partners/qaiwan.png', alt: 'Qaiwan Group' },
  { src: '/assets/img/partners/fox.png', alt: 'FOX' },
  { src: '/assets/img/partners/taurus.png', alt: 'Taurus' },
  { src: '/assets/img/partners/sinoma-cnbm.png', alt: 'Sinoma / CNBM' },
  { src: '/assets/img/partners/wataniya.png', alt: 'Wataniya Group' },
];

// The construction-capability and tooling tables are lists of standardised
// engineering terms — PSS®E, RTD, FM200, DOL. The pre-Next site left them in
// English in all three languages because that is how they appear on a drawing
// or a datasheet, and translating them would make them harder to recognise,
// not easier. Kept shared for the same reason.
export const CONSTRUCTION_TABLE = {
  headers: ['Electrical', 'Mechanical', 'Instrumentation'],
  rows: [
    [
      'Grounding / earthing system installation',
      'Cable tray and cable ladder installation',
      'Field instrument installation (pressure, temperature, flow, level)',
    ],
    ['LV/MV power cable pulling', 'HVAC / VRF system installation', 'Control valve installation and calibration'],
    ['LV/MV distribution board installation', 'Air duct installation', 'Instrument cabling and tray/duct routing'],
    ['UPS and battery bank installation', 'FM200 installation', 'Junction box and marshalling cabinet installation'],
    ['LV/MV cable termination and connection', 'Pipe insulation', 'Instrument cable termination and loop checking'],
    ['Fire alarm system installation', 'Equipment installation', 'Hook-up installation for transmitters and sensors'],
    ['Lighting and small power installation', 'Welding and fabrication', 'Fire & gas detection system installation'],
    ['Electric motor installation incl. control & power cable termination', '', 'Analyzer system installation (gas, liquid)'],
    ['Heat trace system installation', '', 'DCS/PLC panel installation and wiring'],
    ['Solar power system installation', '', 'Pre-commissioning, calibration & commissioning support'],
  ],
};
