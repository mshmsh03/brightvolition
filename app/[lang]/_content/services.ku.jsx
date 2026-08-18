import { Building2Icon, ClipboardCheckIcon, SettingsIcon, TruckIcon, WrenchIcon } from 'lucide-react';
import { CONSTRUCTION_TABLE } from '../../../lib/site-data';
import {
  Card,
  CardList,
  CardListItem,
  CtaBand,
  CtaButton,
  DataTable,
  Grid,
  PageHero,
  Section,
  SectionHead,
  Step,
  Steps,
  Tag,
} from '../../../components/sections';

export default function ServicesKu() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/piping-instrumentation.jpg"
        homeHref="/ku/"
        homeLabel="سەرەکی"
        crumb="خزمەتگوزاریەکانمان"
        eyebrow="چی پێشکەش دەکەین"
        title="ئەندازیاری، جێبەجێکردن و دابینکردن لەژێر یەک سەقفدا"
        lede="خزمەتگوزاری ئەندازیاری پسپۆڕانە پێشکەش دەکەین لەگەڵ دابینکردنی متمانەپێکراوی سیستەمی کارەبایی، میکانیکی و ئامێری پێوانە — لە یەکەم وێنە تا کارپێکردنی تەواو."
      />

      {/* THE FIVE PILLARS */}
      <Section>
        <SectionHead eyebrow="چیمان پێشکەشە" title="پێنج بواری خزمەتگوزاری" />
        <Grid cols={5}>
          <Card icon={SettingsIcon} title="دیزاین و ئەندازیاری" />
          <Card icon={Building2Icon} title="جێبەجێکردن و دامەزراندن" />
          <Card icon={ClipboardCheckIcon} title="کارپێکردنی تاقیکارییانە و دەستپێکردن" />
          <Card icon={TruckIcon} title="دابینکردنی بەرهەم" />
          <Card icon={WrenchIcon} title="پشتگیری کارپێکردن و شیکردنەوەی کێشە" />
        </Grid>
      </Section>

      {/* ENGINEERING DISCIPLINES */}
      <Section id="engineering">
        <SectionHead eyebrow="خزمەتگوزاریە ئەندازیاریەکانمان لەخۆدەگرێت" title="پێنج پسپۆڕیی ئەندازیاری" />
        <Grid cols={2}>
          <Card>
            <Tag tone="gold">01</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">خوێندنەوەی گونجاوی</h3>
            <CardList>
              <CardListItem>خوێندنەوەی گونجاوی تەکنیکی و ئابووری</CardListItem>
              <CardListItem>دیزاینی چەمکی و دیاریکردنی مەودای پڕۆژە</CardListItem>
              <CardListItem>پێداچوونەوەی مەیدانی و کۆکردنەوەی داتا</CardListItem>
            </CardList>
          </Card>
          <Card>
            <Tag tone="gold">02</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">ئەندازیاری کارەبایی</h3>
            <CardList>
              <CardListItem>دیزاینی کارەبایی وردی (سیستەمی ڤۆڵتی نزم، ناوەند و بەرز)</CardListItem>
              <CardListItem>سیستەمی بەڕێوەبردنی وزە</CardListItem>
              <CardListItem>خوێندنەوەی ڕێکخستنی پاراستن</CardListItem>
              <CardListItem>خوێندنەوەی سریانی بار، سیرکیتی کورت و جێگیری</CardListItem>
              <CardListItem>شیکردنەوەی هارمۆنیک و خوێندنەوەی کوالیتیی وزە</CardListItem>
              <CardListItem>شێوەیی سیستەمی وزە (ETAP, PSCAD, PSS/E)</CardListItem>
              <CardListItem>تەواوکردنی سیستەمی SCADA و ئۆتۆماسیۆن</CardListItem>
            </CardList>
          </Card>
          <Card>
            <Tag tone="gold">03</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">ئەندازیاری میکانیکی</h3>
            <CardList>
              <CardListItem>دامەزراندنی کەناڵ و پێپلیکانەی کێبڵ</CardListItem>
              <CardListItem>سیستەمی هەواسازی (کەناڵ، دامپەر، VRF، پاشکۆکان)</CardListItem>
              <CardListItem>پشکنینی مەخزەن، بۆری و بۆیاخ</CardListItem>
              <CardListItem>دامەزراندن و پەیوەستکردنی بۆری</CardListItem>
              <CardListItem>پشکنینی نا وێرانکەر — PT, RT, UT, MT</CardListItem>
              <CardListItem>دامەزراندنی ئامێری خولیو</CardListItem>
              <CardListItem>سیستەمی کوژاندنەوەی ئاگر (پەمپ، سپرینکلەر، FM200، حەنەفیەی ئاگرکوژاندنەوە)</CardListItem>
              <CardListItem>پاڵاوتن و چارەسەرکردنی زەیتی جوانکاری</CardListItem>
              <CardListItem>دامەزراندنی پێکهاتەی پۆڵایی</CardListItem>
            </CardList>
          </Card>
          <Card>
            <Tag tone="gold">04</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">ئەندازیاری ئامێری پێوانە</h3>
            <CardList>
              <CardListItem>دیاریکردن و پێوانەکردنی ئامێری پێوانەی مەیدانی (فشار، پلەی گەرمی، تێپەڕبوون، ئاست)</CardListItem>
              <CardListItem>دیزاینی حەڵقەی کۆنترۆڵ و ئیندێکس/کارتی زانیاریی ئامێرەکان</CardListItem>
              <CardListItem>پلانی پەیوەستکردن و دیزاینی کێبڵی ئامێرەکان</CardListItem>
              <CardListItem>پلاندانانی سندوقی پەیوەستکردن و دۆلابی کۆکردنەوە</CardListItem>
              <CardListItem>دیزاینی سیستەمی دۆزینەوەی ئاگر و گاز</CardListItem>
            </CardList>
          </Card>
          <Card className="sm:col-span-full">
            <Tag tone="gold">05</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">ئۆتۆماسیۆن و کۆنترۆڵ</h3>
            <CardList columns>
              <CardListItem>دیزاینی پێکهاتەی سیستەمی DCS / PLC / SCADA</CardListItem>
              <CardListItem>پەرەپێدانی فەلسەفە و لۆجیکی کۆنترۆڵ</CardListItem>
              <CardListItem>دیزاینی ڕووکاری کارپێکردن HMI</CardListItem>
              <CardListItem>تێکەڵکردنی سیستەمی شیکردنەوە (گاز و شلەیی)</CardListItem>
              <CardListItem>پەیوەستکردنی پانێڵی DCS/PLC و پێکهاتەی چوونەژوورەوە/دەرچوون</CardListItem>
              <CardListItem>پشتگیری پێش کارپێکردن، پێوانەکردن و کارپێکردنی تاقیکارییانە</CardListItem>
            </CardList>
          </Card>
        </Grid>
      </Section>

      {/* CONSTRUCTION CAPABILITY */}
      <Section id="construction">
        <SectionHead eyebrow="جێبەجێکردنی مەیدانی" title="توانای جێبەجێکردن">یەک تیمی مەیدانی کاری کارەبایی، میکانیکی و ئامێری پێوانە پێکەوە جێبەجێ دەکات.</SectionHead>
        <DataTable headers={CONSTRUCTION_TABLE.headers} rows={CONSTRUCTION_TABLE.rows} />
      </Section>

      {/* TROUBLESHOOTING */}
      <Section tone="navy" id="troubleshooting">
        <SectionHead
          eyebrow="پشتگیری کارپێکردن"
          tone="light"
          title="شیکردنەوەی پێشکەوتووی کێشە و شیکردنەوەی هۆکاری بنەڕەتی"
        >ڕێبازێکی سیستەماتیکی بەرەو داتا بۆ دیاریکردنی خێرای هۆکاری بنەڕەتی کێشە ئاڵۆزەکان لە سیستەمی کارەبایی، میکانیکی و ئامێری پێوانەدا — بۆ کەمکردنەوەی وەستان و ڕێگریکردن لە دووبارەبوونەوەی کێشەکان.</SectionHead>
        <Steps>
          <Step num="1" title="دیاریکردنی کێشە و کۆکردنەوەی داتا">
            <p>پێداچوونەوەیەکی گشتگیر بۆ بەڵگەنامەکانی سیستەم، لەوانە پلانی P&ID و پلانی کارەبایی.</p>
          </Step>
          <Step num="2" title="شیکردنەوەیەکی ڕێکخراو و دیاریکردنی هۆکاری بنەڕەتی">
            <p>شیکردنەوەی FMEA، دارەی کێشەکان FTA و پلانی ئیشیکاوا بۆ گەڕان بەدوای هەموو هۆکارە ئەگەرییەکاندا.</p>
          </Step>
          <Step num="3" title="جێبەجێکردنی چارەسەر و دڵنیابوونەوە لێی">
            <p>پلانی چارەسەرکردنی هەڵە پەرەپێدەدەین و جێبەجێی دەکەین، لەگەڵ دڵنیابوونەوە لە گەڕانەوەی متمانەپێکراویی و ئەدایەنی سیستەم.</p>
          </Step>
        </Steps>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title="مەودای کاری دیاریکراوت هەیە؟"
          text="پێداویستیەکانت بۆمان بنێرە و تیمی ئەندازیاریمان بە پێشنیارێکی تایبەت وەڵامت دەداتەوە."
        >
          <CtaButton href="/ku/contact/" variant="gold">داوای نرخنامە بکە</CtaButton>
          <CtaButton href="/ku/products/" variant="outline">بەرهەمەکان ببینە</CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
