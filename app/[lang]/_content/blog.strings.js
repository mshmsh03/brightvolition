// The blog's own chrome, one entry per key per language: the list page, the
// frame around an article, and the teaser on the home page. The articles
// themselves are not here — they live in content/blog/, one file per article.
//
// `guidePages` is a function because Arabic changes the noun with the number
// (صفحتان, 7 صفحات, 11 صفحة); a fixed "{n} pages" pattern cannot say that.
export const STRINGS = {
  en: {
    home: 'Home',
    blog: 'Blog',
    blogLede: 'Articles and guides from our engineering team.',
    fromOurBlog: 'From Our Blog',
    readArticle: 'Read the Article',
    allArticles: 'All Articles',
    guideEyebrow: 'PDF Guide',
    guidePages: (n) => (n === 1 ? '1 page' : `${n} pages`),
    downloadGuide: 'Download the Guide',
    linkTo: { projects: 'View Project Details' },
    contactUs: 'Contact Us',
  },
  ar: {
    home: 'الرئيسية',
    blog: 'المدونة',
    blogLede: 'مقالات وأدلّة من فريقنا الهندسي.',
    fromOurBlog: 'من مدونتنا',
    readArticle: 'اقرأ المقال',
    allArticles: 'جميع المقالات',
    guideEyebrow: 'ملف PDF',
    guidePages: (n) => {
      if (n === 1) return 'صفحة واحدة';
      if (n === 2) return 'صفحتان';
      return n <= 10 ? `${n} صفحات` : `${n} صفحة`;
    },
    downloadGuide: 'تنزيل الدليل',
    linkTo: { projects: 'عرض تفاصيل المشروع' },
    contactUs: 'تواصل معنا',
  },
  ku: {
    home: 'سەرەکی',
    blog: 'بلۆگ',
    blogLede: 'وتار و ڕێبەر لە تیمی ئەندازیاریمانەوە.',
    fromOurBlog: 'لە بلۆگەکەمانەوە',
    readArticle: 'وتارەکە بخوێنەوە',
    allArticles: 'هەموو وتارەکان',
    guideEyebrow: 'فایلی PDF',
    guidePages: (n) => `${n} لاپەڕە`,
    downloadGuide: 'داگرتنی ڕێبەرەکە',
    linkTo: { projects: 'وردەکاریی پڕۆژە ببینە' },
    contactUs: 'پەیوەندیمان پێوە بکە',
  },
};
