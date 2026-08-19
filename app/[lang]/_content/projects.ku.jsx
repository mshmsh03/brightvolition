import {
  Checklist,
  ChecklistItem,
  CtaBand,
  CtaButton,
  DataTable,
  Eyebrow,
  Lede,
  Media,
  PageHero,
  Section,
  SectionHead,
  SpecList,
  Split,
} from '../../../components/sections';

// The tool table is a list of software names and what each was used for. Like
// the construction table on the services page, it stays in English in all three
// languages — PSS®E is PSS®E on every drawing and in every ministry submittal.
const TOOLS = {
  headers: ['Tool / Software', 'Function'],
  /* eslint-disable react/jsx-key -- these are table cells, not a rendered
     list. DataTable keys every <tr> and <td> itself, and each element below
     is the single child of one <td>, so a key here would key nothing. */
  rows: [
    [<strong className="ltr-fixed">PSS®E</strong>, 'Grid modeling, power flow, fault studies'],
    [<strong className="ltr-fixed">ETAP</strong>, 'Protection coordination study'],
    ['Excel / Docs', 'Reports and Ministry submittals'],
    [<strong className="ltr-fixed">PPC</strong>, 'Power Project Control'],
  ],
  /* eslint-enable react/jsx-key */
};

export default function ProjectsKu() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/solar-panels.jpg"
        homeHref="/ku/"
        homeLabel="سەرەکی"
        crumb="پڕۆژەکانمان"
        tag="پڕۆژەی نموونەیی 2025"
        title="ئەندازیاری کارەبایی — وێستگەی خۆرەکی بە توانای 50 مێگاوات"
        lede="خوێندنەوەی متمانەپێکراوی و کاریگەری بۆ وێستگەی وزەی خۆرەکی بە توانای 50 مێگاوات، بە هاوکاریی لەگەڵ وەزارەتی کارەبای عێراق جێبەجێ کراوە."
      />

      {/* SNAPSHOT */}
      <Section>
        <SectionHead
          align="start"
          eyebrow="پوختەیەک لەسەر پڕۆژە"
          title="خوێندنەوەی متمانەپێکراوی و کاریگەری بۆ وێستگەی خۆرەکی 50 مێگاوات"
        />
        <SpecList
          items={[
            { label: "کڕیار", value: "سینۆما دی سی سی هێڵی 2 — کۆمپانیای دێلتا سیمێنت" },
            { label: "جۆر", value: "خوێندنەوەی پەیوەستکردنی گرید بۆ وێستگەی خۆر بە توانای 50 مێگاوات (DC)" },
            { label: "مەودا", value: "شیکردنەوەی سیستەمی کارەبایی و پشتگیری تەکنیکی ڕێکخراوەیی" },
            { label: "شوێن", value: "بازیان، سلێمانی، عێراق" },
            { label: "بە هاوکاریی لەگەڵ", value: "وەزارەتی کارەبا" },
            { label: "دۆخ", value: <span className="ltr-fixed">June – September 2025</span> },
          ]}
        />
      </Section>

      {/* SCOPE */}
      <Section>
        <Split>
          <div>
            <Eyebrow>مەودای خزمەتگوزاریی ئەندازیاری</Eyebrow>
            <h2>چیمان جێبەجێ کرد</h2>
            <Checklist>
              <ChecklistItem>خوێندنەوەی کاریگەری سیستەمی کارەبایی بە بەکارهێنانی PSS®E و PSCAD و ETAP</ChecklistItem>
              <ChecklistItem>پێداچوونەوەی ڕێکخستنی پاراستن و کۆنترۆڵ</ChecklistItem>
              <ChecklistItem>هەڵسەنگاندنی سیستەمی بەڕێوەبردنی وزە (EMS) و ڕێکخستنی هەنگاوەکانی کارپێکردن</ChecklistItem>
              <ChecklistItem>پێشکەشکردنی ڕاسپاردە بۆ دابینکەر و کڕیار</ChecklistItem>
            </Checklist>
          </div>
          <Media src="/assets/img/photos/substation.jpg" alt="High-voltage substation infrastructure" />
        </Split>
      </Section>

      {/* TOOLS */}
      <Section>
        <SectionHead eyebrow="ئامراز و شارەزاییە تەکنیکییە بەکارهاتووەکان" title="ئامراز و نەرمەکالای بەکارهاتوو" />
        <DataTable headers={TOOLS.headers} rows={TOOLS.rows} />
      </Section>

      {/* REGULATORY EXPERTISE */}
      <Section tone="navy">
        <Split className="items-start">
          <div>
            <Eyebrow tone="light">جێبەجێکردنی تەکنیکی و ڕێکخراوەیی</Eyebrow>
            <h2>شارەزاییی تیم لە جێبەجێکردنی تەکنیکی و ڕێکخراوەیی</h2>
            <Lede className="text-lavender">تیمەکەمان زانیاریی پسپۆڕانەی هەیە لە جێبەجێکردنی خوێندنەوە ئەندازیارییەکان بەگوێرەی کۆدی گریدی عێراق و پێداویستیەکانی وەزارەتی کارەبا.</Lede>
          </div>
          <Checklist tone="light">
            <ChecklistItem>خوێندنەوەی کاریگەری وردی سیستەمی کارەبایی بە بەکارهێنانی PSS®E — شیکردنەوەی خەوشی هارمۆنیک، هەڵسەنگاندنی هێزی ڕیئاکتیڤ، و کەمکردنەوەی مەترسیی گەڕانەوەی تێچووەوە.</ChecklistItem>
            <ChecklistItem>مۆدێلکردنی سیستەم، شێوەیی، و ڕاسپاردەی تەکنیکی بەرەو سیناریۆکان.</ChecklistItem>
            <ChecklistItem>هەڵسەنگاندنی ئەدایەن و ڕێکخستنەکانی سیستەمی بەڕێوەبردنی وزە بۆ دڵنیابوون لە کۆنترۆڵێکی کاریگەر بەسەر سریانی وزەدا لەنێوان سیستەمی خۆرەکی و گرید.</ChecklistItem>
            <ChecklistItem>پێداچوونەوەی ڕێکخستنی پاراستن بۆ هەڵسەنگاندنی سەلامەتیی سیستەمی خۆرەکی لە خاڵی پەیوەستبوون بە گریدەوە.</ChecklistItem>
            <ChecklistItem>ڕاپۆرتی تەکنیکی گونجاو لەگەڵ پێداویستیەکانی وەزارەت و ستانداردە ڕێکخراوەییە ناوخۆییەکان.</ChecklistItem>
          </Checklist>
        </Split>
      </Section>

      {/* BEYOND THIS PROJECT */}
      <Section>
        <Split>
          <Media src="/assets/img/photos/engineers-blueprint.jpg" alt="Engineers reviewing P&ID diagrams" />
          <div>
            <Eyebrow>سەرباری ئەم پڕۆژەیە</Eyebrow>
            <h2>هەموو پڕۆژەیەک بە ڕێبازی شیکردنەوەی هۆکاری بنەڕەتی پشتگیری کراوە</h2>
            <Lede className="mb-6">هەرچی سیستەمێک دیزاینی دەکەین، جێبەجێی دەکەین یان دەیخوێنینەوە، هەمان ڕێبازی ڕێکخراوی شیکردنەوەی کێشە — FMEA و شیکردنەوەی دارەی کێشەکان و پلانی ئیشیکاوا — متمانەپێکراویی بۆ ماوەیەکی درێژ دوای کارپێکردن دەپارێزێت.</Lede>
            <CtaButton href="/ku/services/#troubleshooting" variant="outlineNavy" arrow>ڕێبازمان ببینە</CtaButton>
          </div>
        </Split>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title="پلان بۆ پڕۆژەیەکی وزە یان پیشەسازی دادەڕێژیت؟"
          text="با باسی خوێندنەوەی گونجاوی، خوێندنەوەی گرید، یان جێبەجێکردنی تەواوی پڕۆژەی داهاتووت بکەین."
        >
          <CtaButton href="/ku/contact/" variant="gold">گفتوگۆیەک دەست پێبکە</CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
