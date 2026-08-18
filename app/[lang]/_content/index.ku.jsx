import {
  AwardIcon,
  Building2Icon,
  ClipboardCheckIcon,
  HandshakeIcon,
  LightbulbIcon,
  LockIcon,
  SettingsIcon,
  TargetIcon,
  TruckIcon,
  WrenchIcon,
  ZapIcon,
} from 'lucide-react';
import { CLIENT_LOGOS, PARTNER_LOGOS } from '../../../lib/site-data';
import {
  Card,
  CardText,
  Checklist,
  ChecklistItem,
  CtaBand,
  CtaButton,
  Eyebrow,
  Grid,
  Hero,
  Lede,
  LogoStrip,
  Media,
  Section,
  SectionHead,
  Split,
  Stat,
  Stats,
} from '../../../components/sections';

export default function IndexKu() {
  return (
    <>
      <Hero image="/assets/img/photos/power-plant.jpg">
        <h1 className="m-wipe text-cream" style={{ '--m-delay': '120ms' }}>دابینکردنی پیشەسازی و خزمەتگوزاریی ئەندازیاری</h1>
        <Lede className="m-register text-lavender" style={{ '--m-delay': '320ms' }}>برایت ڤۆلیشن خزمەتگوزاری ئەندازیاری کارەبا، ئامێری پێوانە و میکانیک پێشکەش دەکات، لەگەڵ جێبەجێکردن، بەکارخستن و دابینکردنیش — لە خوێندنەوەی گونجاویدا تا پشتگیری کارپێکردن.</Lede>
        <div className="m-register mt-8 flex flex-wrap gap-3.5" style={{ '--m-delay': '420ms' }}>
          <CtaButton href="/ku/services/" variant="gold" arrow>خزمەتگوزاریەکانمان ببینە</CtaButton>
          <CtaButton href="/ku/contact/" variant="outline">پەیوەندی بە تیمەکەمانەوە بکە</CtaButton>
        </div>
      </Hero>

      {/* WHAT WE DO */}
      <Section id="what-we-do">
        <SectionHead eyebrow="چیمان پێشکەشە" title="پێنج ڕێگا کە تیایاندا باشیی ئەندازیاری پێشکەش دەکەین">خزمەتگوزاری ئەندازیاری پسپۆڕانە پێشکەش دەکەین لەگەڵ دابینکردنی متمانەپێکراوی سیستەمی کارەبایی، میکانیکی و ئامێری پێوانە.</SectionHead>
        <Grid cols={5}>
          <Card icon={SettingsIcon} title="دیزاین و ئەندازیاری">
            <CardText>خوێندنەوەی گونجاوی، دیزاینی چەمکی، و ئەندازیاری وردی کارەبایی، میکانیکی و ئامێری پێوانە.</CardText>
          </Card>
          <Card icon={Building2Icon} title="جێبەجێکردن و دامەزراندن">
            <CardText>جێبەجێکردنی تەواوی مەیدانی بۆ سیستەمی کارەبایی، میکانیکی و ئامێری پێوانە بەپێی ڕێنماییەکان.</CardText>
          </Card>
          <Card icon={ClipboardCheckIcon} title="کارپێکردنی تاقیکارییانە و دەستپێکردن">
            <CardText>ئامادەکاری پێش کارپێکردن، تاقیکردنەوە و پشتگیری دەستپێکردن بۆ دڵنیابوون لە ڕادەستکردنێکی ئاسان.</CardText>
          </Card>
          <Card icon={TruckIcon} title="دابینکردنی بەرهەم">
            <CardText>پێکهاتەی کارەبایی، ئامێری پێوانە و میکانیکی متمانەپێکراو لە گەورەترین کۆمپانیا جیهانییەکان.</CardText>
          </Card>
          <Card icon={WrenchIcon} title="پشتگیری کارپێکردن و شیکردنەوەی کێشە">
            <CardText>شیکردنەوەی هۆکاری بنەڕەتی و وەڵامدانەوەیەکی خێرا بۆ کەمکردنەوەی وەستان و پاراستنی متمانەپێکراوی.</CardText>
          </Card>
        </Grid>
      </Section>

      {/* ABOUT TEASER */}
      <Section>
        <Split>
          <Media src="/assets/img/photos/transformer-building.jpg" alt="Electrical substation infrastructure" />
          <div>
            <Eyebrow>دەربارەمان</Eyebrow>
            <h2>ئەندازیارییەکی ڕەسەن، سەرنجدان لەسەر کڕیار، هەڵگیرساوە لە هەرێمی کوردستانەوە.</h2>
            <Lede className="mb-5">برایت ڤۆلیشن لە ساڵی 2022 وەک ئۆفیسێکی ئەندازیاری پسپۆڕ لە خزمەتگوزاری کارەبایی، ئامێری پێوانە و میکانیکی دامەزرا. لەو کاتەوە بە فەرمی تۆمار کرا و بوو بە کۆمپانیایەکی تۆمارکراو لە حکوومەتی هەرێمی کوردستان، و چالاکیی خۆی بۆ بوارە نوێیەکانیش فراوان کرد — هەمیشە بە ڕێنمایی سیاسەتی کوالیتیی توند.</Lede>
            <Checklist>
              <ChecklistItem>پێشەنگی لە ئەندازیاریی داهێنەرانە، بەردەوام و متمانەپێکراودا</ChecklistItem>
              <ChecklistItem>کۆمپانیایەکی بە فەرمی تۆمارکراو و سیاسەتی کوالیتیی توند</ChecklistItem>
              <ChecklistItem>چارەسەری نهێنی، تایبەتمەند و کاریگەر لە ڕووی تێچووەوە</ChecklistItem>
            </Checklist>
            <div className="mt-7">
              <CtaButton href="/ku/about/" variant="outlineNavy" arrow>زیاتر دەربارەمان</CtaButton>
            </div>
          </div>
        </Split>
      </Section>

      {/* FEATURED PROJECT */}
      <Section tone="navy">
        <Split>
          <div>
            <Eyebrow tone="light">پڕۆژەی نموونەیی 2025</Eyebrow>
            <h2>خوێندنەوەی متمانەپێکراوی و کاریگەری گرید بۆ وێستگەیەکی وزەی خۆر بە توانای 50 مێگاوات</h2>
            <Lede className="mb-6 text-lavender">خوێندنەوەیەکی گشتگیرمان بۆ کاریگەری سیستەمی کارەبایی بۆ هێڵی سینۆما دی سی سی 2ی کۆمپانیای دێلتا سیمێنت لە بازیان، سلێمانی جێبەجێ کرد — بە هاوکاریی ڕاستەوخۆ لەگەڵ وەزارەتی کارەبای عێراق.</Lede>
            <Stats>
              <Stat value="50MW">وێستگەی خۆر بە توانای 50 مێگاوات</Stat>
              <Stat value="3">ئامرازەکان: PSS®E · PSCAD · ETAP</Stat>
              <Stat value="4">مانگی کاری ئەندازیاری</Stat>
            </Stats>
            <div className="mt-8">
              <CtaButton href="/ku/projects/" variant="gold" arrow>وردەکاریی پڕۆژە ببینە</CtaButton>
            </div>
          </div>
          <Media
            src="/assets/img/photos/solar-panels.jpg"
            alt="Solar PV installation team at work"
            position="center 30%"
          />
        </Split>
      </Section>

      {/* WHY CHOOSE US */}
      <Section>
        <SectionHead eyebrow="بۆچی برایت ڤۆلیشن" title="هاوبەشێک بە شێوەی ڕاست خزمەتت دەکات" />
        <Grid cols={3}>
          <Card icon={LockIcon} title="نهێنی سەرەتا">
            <CardText>لە هەموو کاتێکدا ئاسایش و نهێنیی زانیاریی کڕیار و دابینکەران دەپارێزین.</CardText>
          </Card>
          <Card icon={TargetIcon} title="چارەسەری تایبەتمەند و کاریگەر لە ڕووی تێچووەوە">
            <CardText>چارەسەرێک تایبەت بۆ پێویستیەکانت داڕێژراوە — بێ قاڵبی ئامادە.</CardText>
          </Card>
          <Card icon={HandshakeIcon} title="ڕێبازی هاوبەشی">
            <CardText>لە نزیکەوە لەگەڵ کڕیاران کار دەکەین بۆ تێگەیشتن لە پێویستیەکانیان و پێکەوە داهێنانی گونجاوترین چارەسەر.</CardText>
          </Card>
          <Card icon={ZapIcon} title="زنجیرەی دابینکردنی کاریگەر">
            <CardText>لۆجستیکی کاریگەر کە دواکەوتن کەم دەکاتەوە و خشتەی پڕۆژەکەت دەپارێزێت.</CardText>
          </Card>
          <Card icon={AwardIcon} title="کوالیتیی بێ گوزەشت">
            <CardText>تەنها لەگەڵ دابینکەرانی متمانەپێکراو مامەڵە دەکەین بۆ دڵنیابوون لە بەرزترین ستاندارد لە هەموو چارەسەرێکدا.</CardText>
          </Card>
          <Card icon={LightbulbIcon} title="لە ڕێگەی داهێنانەوە هاندراو">
            <CardText>وەبەرهێنانمان لە توێژینەوە و پەرەپێدان ئێمە لە پێشەنگیی ئاڕاستەکان ڕادەگرێت بە چارەسەری پێشکەوتوو.</CardText>
          </Card>
        </Grid>
      </Section>

      {/* PARTNERS */}
      <Section size="sm">
        <div className="mb-2 text-center">
          <Eyebrow>براندە بازرگانییەکانی نوێنەرایەتیمان دەکەین</Eyebrow>
        </div>
        <LogoStrip logos={PARTNER_LOGOS} />
      </Section>

      {/* CLIENTS */}
      <Section size="sm">
        <div className="mb-2 text-center">
          <Eyebrow>هەندێک لە کڕیارەکانمان</Eyebrow>
        </div>
        <LogoStrip logos={CLIENT_LOGOS} />
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          eyebrow="ئامادەیت بۆ هاوکاری؟"
          title="با پێکەوە شتێکی متمانەپێکراو بنیات بنێین"
          text="پەیوەندیمان پێوە بکە بۆ هەر پرسیارێک یان داواکاری نرخنامە — ئێمە لێرەین بۆ پێشکەشکردنی وردی، کوالیتی و متمانە بۆت."
        >
          <CtaButton href="/ku/contact/" variant="gold" arrow>پەیوەندیمان پێوە بکە</CtaButton>
          <CtaButton href="mailto:info@brightvolition.com" variant="outline">
            info@brightvolition.com
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
