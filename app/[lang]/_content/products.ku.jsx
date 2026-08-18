import { GaugeIcon, SettingsIcon, ZapIcon } from 'lucide-react';
import { CLIENT_LOGOS, PARTNER_LOGOS } from '../../../lib/site-data';
import {
  Checklist,
  ChecklistItem,
  CtaBand,
  CtaButton,
  Eyebrow,
  Grid,
  Lede,
  LogoStrip,
  Media,
  PageHero,
  PillarHead,
  ProductBlock,
  ProductNav,
  ProductNavLink,
  Reveal,
  Section,
  SectionHead,
  Split,
} from '../../../components/sections';

export default function ProductsKu() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/electrical-panel.jpg"
        homeHref="/ku/"
        homeLabel="سەرەکی"
        crumb="بەرهەمەکانمان"
        eyebrow="دابینکردنی بەرهەم"
        title="کۆمەڵێکی تەواو لە بەرهەمی کارەبایی، ئامێری پێوانە و میکانیکی"
        lede="پێکهاتە، سیستەم و ئامێری پێوانەی وردمان دابین دەکەین — لەگەڵ هاوبەشی لەگەڵ گەورەترین کۆمپانیا بەرهەمهێنەرە جیهانییەکان بۆ دڵنیابوون لە متمانەپێکراویی و وردی لە سەرچاوەی وزەوە تا خاڵی بەکارهێنان."
      />

      {/* IN-PAGE NAV */}
      <Section size="sm">
        <ProductNav>
          <ProductNavLink href="#electrical">کارەبایی</ProductNavLink>
          <ProductNavLink href="#instrument">ئامێری پێوانە</ProductNavLink>
          <ProductNavLink href="#mechanical">میکانیکی</ProductNavLink>
        </ProductNav>
      </Section>

      {/* ELECTRICAL */}
      <Section id="electrical">
        <PillarHead icon={ZapIcon} tone="navy" eyebrow="دابینکردنی بەرهەم" title="کارەبایی" />
        <Grid cols={2} className="gap-x-7 gap-y-0">
          <ProductBlock title="پێکهاتەی پانێڵی کلیلی کارەبایی">کلیلی MCCB، MCB، RCD، کۆنتاکتۆر، ڕیلەی پاراستن لە بارگرانی، مۆتۆر ستارتەر (ڕاستەوخۆ و ستار-دێلتا).</ProductBlock>
          <ProductBlock title="پانێڵی کۆنترۆڵ">پانێڵی کۆنترۆڵی ڤۆڵتی نزم، پانێڵی PLC، پانێڵی MCC.</ProductBlock>
          <ProductBlock title="ئامێری کۆنترۆڵ و نیشانە">دوگمەی فشار، کلیلی هەڵبژاردن، لامپی نیشانەکەر، تایمەر، ڕیلەی چاودێریی فەیز.</ProductBlock>
          <ProductBlock title="وزەی یەدەگ و گرنگ">دابینکەری وزەی بێ پچڕان (UPS)، بانکی باتری، ژێنەراتۆر.</ProductBlock>
          <ProductBlock title="ڕێکخستنی وزە">ڕێکخەری ڤۆڵتاژ، ڕێکتیفایەر، ترانسفۆرمەری کۆنترۆڵ.</ProductBlock>
          <ProductBlock title="چارەسەری وزەی خۆر">ئینڤێرتەر، کۆنترۆڵەری شارژ، پانێڵی خۆر، و پێکهاتەی هاوسەنگیی سیستەم (BOS).</ProductBlock>
          <ProductBlock title="مۆتۆرەکان">مۆتۆری AC و DC (ڤۆڵتی نزم و بەرز).</ProductBlock>
          <ProductBlock title="کۆنترۆڵ و کارایی مۆتۆر">مۆتۆری خێرایی گۆڕاو (VSD)، سۆفت ستارتەر.</ProductBlock>
          <ProductBlock title="کێبڵەکان">کێبڵی وزە (ڤۆڵتی نزم، ناوەند، بەرز)، کێبڵی کۆنترۆڵ و پێوانە، کێبڵی داتا.</ProductBlock>
          <ProductBlock title="سیستەمی زەوی‌کردن">میلەی زەوی‌کردن، کێبڵی زەوی‌کردن، میلەی پەیوەستکردن، گیرەکان، پێکهاتەی بێنتۆنایت.</ProductBlock>
          <ProductBlock title="بەڕێوەبردنی کێبڵ">کەناڵی کێبڵ، پێپلیکانە، بۆری پاراستن، و سندوقی پەیوەستکردن.</ProductBlock>
          <ProductBlock title="سیستەمی گەرمکردنەوەی هاوپۆل">پانێڵی HT، کێبڵی گەرمکردنەوە، سندوقی پەیوەستکردن، سێتی پەیوەستکردن، یەکەی کۆنترۆڵ، هەستیاری RTD.</ProductBlock>
          <ProductBlock title="چارەسەری ڕووناکی">ڕووناکی LED، HID، فلۆرێسێنت، ئامێری بەرگری لە تەقینەوە، ڕووناکی حاڵەتی نائاسایی، پڕۆژێکتەر.</ProductBlock>
          <ProductBlock title="ئامێری وزە">ترانسفۆرمەری دابەشکردن، ڕیلەی پاراستن، کلیلی سیرکیت.</ProductBlock>
          <ProductBlock title="پشکنین و پێوانە">مەلتیمیتەر، کلامپ‌میتەر، پشکنەری ئیزۆلاسیۆن، شیکەرەوەی کوالیتیی وزە، ژمێرەری وزە، تۆمارکەری داتا، ئۆسیلۆسکۆپ.</ProductBlock>
        </Grid>
      </Section>

      {/* INSTRUMENT */}
      <Section id="instrument">
        <PillarHead icon={GaugeIcon} tone="gold" eyebrow="دابینکردنی بەرهەم" title="ئامێری پێوانە" />
        <Reveal as="div" className="mb-8">
          <Lede>کۆمەڵێکی تەواو لە ئامێری پێوانەی وردمان بۆ پێوانە، کۆنترۆڵ و سەلامەتی، لەگەڵ هاوبەشی لەگەڵ گەورەترین کۆمپانیا بەرهەمهێنەرە جیهانییەکان بۆ دڵنیابوون لە متمانەپێکراویی و وردی.</Lede>
        </Reveal>
        <Grid cols={2} className="gap-x-7 gap-y-0">
          <ProductBlock title="گەرمی">ئامێری RTD، جووتی گەرمایی، ترانسمیتەر و پێوەری پلەی گەرمی.</ProductBlock>
          <ProductBlock title="فشار">پێوەری فشار، ترانسمیتەر، ترانسدیوسەر، کلیل و نیشانەری دیجیتاڵ.</ProductBlock>
          <ProductBlock title="تێپەڕبوون">پێوەری تێپەڕبوونی جیاوازیی فشار، میکناتیسی، ڤۆرتێکس، ئەڵتراسۆنیک، تۆربایین و کۆریۆلیس.</ProductBlock>
          <ProductBlock title="ئاست">ترانسمیتەری ئاست (ڕادار، ئەڵتراسۆنیک)، کلیل، شووشەی بینین و نیشانەر.</ProductBlock>
          <ProductBlock title="شیکردنەوەی گاز و پرۆسە">شیکەرەوەی ئۆکسجین، ئینفراسوور، شیکردنەوەی گاز بە لەیزەر، و هەستیاری pH/بەڕەسمیی.</ProductBlock>
          <ProductBlock title="ڤاڵڤ و ئاکتیوەیتەری کۆنترۆڵ">ڤاڵڤ و ئاکتیوەیتەری کۆنترۆڵی هەوایی و کارەبایی.</ProductBlock>
          <ProductBlock title="ڤاڵڤی مانیفۆڵد و ئامێرەکان">ڤاڵڤی مانیفۆڵد (2، 3، 5 ڤاڵڤ)، ڤاڵڤی دەرزی، ڤاڵڤی پشکنین، ڤاڵڤی گۆی.</ProductBlock>
          <ProductBlock title="دۆزینەوەی ئاگر و گاز">پانێڵی کۆنترۆڵی ئاگاداریی ئاگر، دۆزەرەوەی دووکەڵ، گەرمی و گاز، خاڵی بانگکردنی دەستی، ئامێری ئاگاداریی دەنگی و ڕووناکی.</ProductBlock>
          <ProductBlock title="سەلامەتیی پرۆسە">ڤاڵڤی سەلامەتیی فشار (PSV)، کلیل، و پێکهاتەی ڕاگرتنی نائاسایی (ESD).</ProductBlock>
          <ProductBlock title="پێکهاتەی سیستەمی کۆنترۆڵ">یەکەی کۆنترۆڵی پرۆسە، ڕێکخەری نیشانە، و یەکەی چوونەژوورەوە/دەرچوونی PLC.</ProductBlock>
          <div className="sm:col-span-full">
            <ProductBlock title="کێبڵ و پاشکۆی ئامێرەکان">کێبڵی ئامێری پێوانە، سندوقی پەیوەستکردن، و بەربەستی سەلامەتیی بنەڕەتی.</ProductBlock>
          </div>
        </Grid>
      </Section>

      {/* MECHANICAL */}
      <Section id="mechanical">
        <PillarHead icon={SettingsIcon} tone="lavender" eyebrow="دابینکردنی بەرهەم" title="میکانیکی" />
        <Grid cols={2} className="gap-x-7 gap-y-0">
          <ProductBlock title="بۆری، ڤاڵڤ و ئامێرەکان">بۆری و ئامێر (فلانج، کوڵەکە، تی، ڕیدیوسەر، پەیوەندکەر)؛ ڤاڵڤی پیشەسازی (گەیت، گۆی، پشکنین، پەپوولە)؛ گاسکێت، هەڵقەی O، و سیلی میکانیکی.</ProductBlock>
          <ProductBlock title="گواستنەوەی هێز و کۆنترۆڵی جوڵە">بێرینگی گۆیی، گۆڕوکی و هێڵی لە براندی پێشەنگ؛ کەمەری V، کەمەری کاتبەندی، زنجیر، گیر و کۆپلینگ.</ProductBlock>
          <ProductBlock title="ئامێری خولیو و پشتگیری">پەمپ، کۆمپرێسەر، فان، بلۆوەر، تۆربایین، پارچە یەدەگی ڕەسەن، لوبریکانتی پیشەسازی و سیستەمی جوانکاریی ئۆتۆماتیکی.</ProductBlock>
          <ProductBlock title="هەواسازی و کۆنترۆڵی کەش">پێکهاتە و پارچە یەدەگی سیستەمی هەواسازی VRF؛ سیستەمی گەرمکردنەوەی بازرگانی و پیشەسازی — گەرمکەرەوە، بۆیلەر، و پێکهاتەکان.</ProductBlock>
          <ProductBlock title="بەرهەمهێنان، دروستکردن و پێکهاتەکان">پێداویستی و ئامێری پەیوەستکردن؛ پێداویستی بڕین و کارکردن لەسەر کانزا؛ پێکهاتەی پۆڵایی — کەناڵ، تیر، گۆشە، لەوح.</ProductBlock>
          <ProductBlock title="چەسپاندن و کۆکردنەوە">بۆڵت، سۆمون، هەڵقە، و میخ؛ چەسپێنەری بیناسازی — چوی، لەنگەر، ڕیڤێت.</ProductBlock>
          <div className="sm:col-span-full">
            <ProductBlock title="پاڵاوتن و ڕێکخستنی شلەمەنی">پاڵاوتنی هایدرۆلیکی، هەوایی و زەیت؛ گواستنەوەی ماددە — کەمەری گواستنەوە، پولی، و پێکهاتەکان.</ProductBlock>
          </div>
        </Grid>
      </Section>

      {/* BRANDS */}
      <Section>
        <SectionHead eyebrow="کۆمپانیا بەرهەمهێنەرە متمانەپێکراوەکان" title="براندە بازرگانییەکانی نوێنەرایەتیمان دەکەین">لە کۆمپانیا بەرهەمهێنەرە جیهانیی متمانەپێکراوەکان دابین دەکەین بۆ دڵنیابوون لە متمانەپێکراویی هەموو پڕۆژەیەک.</SectionHead>
        <LogoStrip logos={PARTNER_LOGOS} large />
      </Section>

      {/* CLIENTS */}
      <Section size="sm">
        <div className="mb-2 text-center">
          <Eyebrow>هەندێک لە کڕیارەکانمان</Eyebrow>
        </div>
        <LogoStrip logos={CLIENT_LOGOS} />
      </Section>

      {/* SUPPLY PROMISE */}
      <Section tone="navy">
        <Split>
          <div>
            <Eyebrow tone="light">بۆچی لە ئێمەوە دابین بکەیت</Eyebrow>
            <h2>بەڵێنی دابینکردنمان</h2>
            <Checklist tone="light">
              <ChecklistItem>بەرهەمەکان لە کۆمپانیا بەرهەمهێنەرە پەسەندکراوە جیهانییەکانەوە دابین دەکرێن</ChecklistItem>
              <ChecklistItem>لەگەڵ بەڵگەنامەی تەواو و تاقیکردنەوەی گونجاندن دەگەیەنرێن</ChecklistItem>
              <ChecklistItem>گەیاندنی خێرا و پشتگیریی تەکنیکی</ChecklistItem>
              <ChecklistItem>ئامادەن بۆ تێکەڵبوون لەگەڵ خزمەتگوزاریی ئەندازیاریی پڕۆژە</ChecklistItem>
            </Checklist>
          </div>
          <Media
            src="/assets/img/photos/piping-instrumentation.jpg"
            alt="Warehouse with industrial product supply"
          />
        </Split>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title="بەدوای پێکهاتەیەکی دیاریکراودا دەگەڕێیت؟"
          text="خشتەی بڕوبا یان تایبەتمەندییەکانمان بۆ بنێرە و ئێمە دابینی دەکەین — بە متمانەپێکراوی و نرخێکی گونجاو."
        >
          <CtaButton href="/ku/contact/" variant="gold">داوای نرخنامە بکە</CtaButton>
          <CtaButton href="/ku/services/" variant="outline">خزمەتگوزاریەکانمان</CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
