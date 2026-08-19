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

export default function ProjectsAr() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/solar-panels.jpg"
        homeHref="/ar/"
        homeLabel="الرئيسية"
        crumb="مشاريعنا"
        tag="مشروع نموذجي 2025"
        title="الهندسة الكهربائية — محطة كهروضوئية بقدرة 50 ميغاواط"
        lede="دراسة الموثوقية والتأثير لمحطة طاقة كهروضوئية بقدرة 50 ميغاواط، نُفّذت بالتنسيق مع وزارة الكهرباء العراقية."
      />

      {/* SNAPSHOT */}
      <Section>
        <SectionHead
          align="start"
          eyebrow="لمحة عن المشروع"
          title="دراسة الموثوقية والتأثير لمحطة كهروضوئية 50 ميغاواط"
        />
        <SpecList
          items={[
            { label: "العميل", value: "سينوما دي سي سي خط 2 — شركة دلتا للإسمنت" },
            { label: "النوع", value: "دراسة ربط شبكي لمحطة شمسية بقدرة 50 ميغاواط (تيار مستمر)" },
            { label: "النطاق", value: "تحليل النظام الكهربائي ودعم فني تنظيمي" },
            { label: "الموقع", value: "بازيان، السليمانية، العراق" },
            { label: "بالتنسيق مع", value: "وزارة الكهرباء" },
            { label: "الحالة", value: <span className="ltr-fixed">June – September 2025</span> },
          ]}
        />
      </Section>

      {/* SCOPE */}
      <Section>
        <Split>
          <div>
            <Eyebrow>نطاق الخدمات الهندسية</Eyebrow>
            <h2>ما الذي نفّذناه</h2>
            <Checklist>
              <ChecklistItem>دراسة تأثير النظام الكهربائي باستخدام PSS®E وPSCAD وETAP</ChecklistItem>
              <ChecklistItem>مراجعة تنسيق الحماية والتحكم</ChecklistItem>
              <ChecklistItem>تقييم نظام إدارة الطاقة (EMS) وترتيب إجراءات التشغيل</ChecklistItem>
              <ChecklistItem>تقديم توصيات للمورّد والعميل</ChecklistItem>
            </Checklist>
          </div>
          <Media src="/assets/img/photos/substation.jpg" alt="High-voltage substation infrastructure" />
        </Split>
      </Section>

      {/* TOOLS */}
      <Section>
        <SectionHead eyebrow="الأدوات والخبرات الفنية المطبّقة" title="الأدوات والبرمجيات المستخدمة" />
        <DataTable headers={TOOLS.headers} rows={TOOLS.rows} />
      </Section>

      {/* REGULATORY EXPERTISE */}
      <Section tone="navy">
        <Split className="items-start">
          <div>
            <Eyebrow tone="light">التنفيذ الفني والتنظيمي</Eyebrow>
            <h2>خبرة الفريق في التنفيذ الفني والتنظيمي</h2>
            <Lede className="text-lavender">يمتلك فريقنا معرفة متخصصة في تنفيذ الدراسات الهندسية بما يتوافق مع كود الشبكة العراقي ومتطلبات وزارة الكهرباء.</Lede>
          </div>
          <Checklist tone="light">
            <ChecklistItem>دراسات تأثير مفصّلة للنظام الكهربائي باستخدام PSS®E — تحليل التشوه التوافقي، تقييم القدرة الردية، والتخفيف من مخاطر التغذية العكسية.</ChecklistItem>
            <ChecklistItem>نمذجة النظام والمحاكاة وتوصيات فنية قائمة على السيناريوهات.</ChecklistItem>
            <ChecklistItem>تقييم أداء وإعدادات نظام إدارة الطاقة لضمان تحكم فعّال بسريان الطاقة بين النظام الشمسي والشبكة.</ChecklistItem>
            <ChecklistItem>مراجعة تنسيق الحماية لتقييم سلامة النظام الشمسي عند نقطة الربط بالشبكة.</ChecklistItem>
            <ChecklistItem>تقارير فنية متوافقة مع متطلبات الوزارة والمعايير التنظيمية المحلية.</ChecklistItem>
          </Checklist>
        </Split>
      </Section>

      {/* BEYOND THIS PROJECT */}
      <Section>
        <Split>
          <Media src="/assets/img/photos/engineers-blueprint.jpg" alt="Engineers reviewing P&ID diagrams" />
          <div>
            <Eyebrow>إضافة إلى هذا المشروع</Eyebrow>
            <h2>كل مشروع مدعوم بمنهجية تحليل الأسباب الجذرية</h2>
            <Lede className="mb-6">أيًا كان النظام الذي نصممه أو ننفّذه أو ندرسه، فإن المنهجية المنظمة نفسها لاستكشاف الأعطال — FMEA وتحليل شجرة الأعطال ومخططات إيشيكاوا — تحمي الموثوقية لفترة طويلة بعد التشغيل.</Lede>
            <CtaButton href="/ar/services/#troubleshooting" variant="outlineNavy" arrow>اطّلع على منهجيتنا</CtaButton>
          </div>
        </Split>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title="تخطط لمشروع طاقة أو صناعي؟"
          text="لنتحدث عن دراسات الجدوى أو دراسات الشبكة أو التنفيذ الكامل لمشروعك القادم."
        >
          <CtaButton href="/ar/contact/" variant="gold">ابدأ محادثة</CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
