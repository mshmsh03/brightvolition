// Every translated string on the contact page, one entry per key per language.
// The markup lives in contact.jsx and is shared by all three, so a layout
// change is made once instead of being copied into three files that nothing
// keeps in step.
//
// Routes are deliberately NOT here — they are derived from `lang` via
// pagePath(), so a URL change cannot leave one language on a stale path.
export const STRINGS = {
  en: {
    home: "Home",
    contact: "Contact",
    yourTrustedPartnerInEngineering: "Your Trusted Partner in Engineering Solutions",
    readyToCollaborate: "Ready to Collaborate?",
    reachOutWithYourInquiries: "Reach out with your inquiries or RFQs — include the scope, timeline, and budget, and we’ll respond with the right team.",
    contactDetails: "Contact Details",
    email2: "Email",
    phone: "Phone",
    address: "Address",
    mardinStreetOppositeDilanCity: "Mardin Street, Opposite Dilan City, Sulaymaniyah (46001), Iraq",
    supplyChainTeam: "Supply Chain Team",
    technicalTeam: "Technical Team",
    email3: "Email",
    findUs: "Find Us",
    sulaymaniyahKurdistanRegionOfIraq: "Sulaymaniyah, Kurdistan Region of Iraq",
  },
  ar: {
    home: "الرئيسية",
    contact: "تواصل معنا",
    yourTrustedPartnerInEngineering: "شريككم الموثوق في الحلول الهندسية",
    readyToCollaborate: "مستعد للتعاون؟",
    reachOutWithYourInquiries: "تواصل معنا لأي استفسار أو طلب عرض سعر — أخبرنا بالنطاق والجدول الزمني والميزانية، وسنرد عليك بالفريق المناسب.",
    contactDetails: "معلومات التواصل",
    email2: "البريد الإلكتروني",
    phone: "الهاتف",
    address: "العنوان",
    mardinStreetOppositeDilanCity: "شارع ماردين، مقابل مدينة دلان، السليمانية (46001)، العراق",
    supplyChainTeam: "فريق سلسلة التوريد",
    technicalTeam: "الفريق الفني",
    email3: "البريد الإلكتروني",
    findUs: "موقعنا",
    sulaymaniyahKurdistanRegionOfIraq: "السليمانية، إقليم كوردستان العراق",
  },
  ku: {
    home: "سەرەکی",
    contact: "پەیوەندیمان پێوە بکە",
    yourTrustedPartnerInEngineering: "هاوبەشی متمانەپێکراوتان لە چارەسەری ئەندازیاریدا",
    readyToCollaborate: "ئامادەیت بۆ هاوکاری؟",
    reachOutWithYourInquiries: "پەیوەندیمان پێوە بکە بۆ هەر پرسیارێک یان داواکاری نرخنامە — مەودا، کاتبەندی و بودجەکەت پێمان بڵێ، ئێمەش بە تیمی گونجاو وەڵامت دەدەینەوە.",
    contactDetails: "زانیاریی پەیوەندی",
    email2: "ئیمەیل",
    phone: "تەلەفۆن",
    address: "ناونیشان",
    mardinStreetOppositeDilanCity: "شەقامی ماردین، بەرامبەر شاری دیلان، سلێمانی (46001)، عێراق",
    supplyChainTeam: "تیمی زنجیرەی دابینکردن",
    technicalTeam: "تیمی تەکنیکی",
    email3: "ئیمەیل",
    findUs: "شوێنمان",
    sulaymaniyahKurdistanRegionOfIraq: "سلێمانی، هەرێمی کوردستانی عێراق",
  },
};
