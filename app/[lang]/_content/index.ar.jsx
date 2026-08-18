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

export default function IndexAr() {
  return (
    <>
      <Hero image="/assets/img/photos/power-plant.jpg">
        <h1 className="m-wipe text-cream" style={{ '--m-delay': '120ms' }}>التوريد الصناعي والخدمات الهندسية</h1>
        <Lede className="m-register text-lavender" style={{ '--m-delay': '320ms' }}>تقدّم الإرادة المشرقة خدمات الهندسة الكهربائية وأجهزة القياس والميكانيكية، إلى جانب التنفيذ والتشغيل والتوريد — من دراسة الجدوى وحتى دعم التشغيل.</Lede>
        <div className="m-register mt-8 flex flex-wrap gap-3.5" style={{ '--m-delay': '420ms' }}>
          <CtaButton href="/ar/services/" variant="gold" arrow>استكشف خدماتنا</CtaButton>
          <CtaButton href="/ar/contact/" variant="outline">تواصل مع فريقنا</CtaButton>
        </div>
      </Hero>

      {/* WHAT WE DO */}
      <Section id="what-we-do">
        <SectionHead eyebrow="ماذا نقدّم" title="خمسة محاور نقدّم من خلالها التميّز الهندسي">نقدّم خدمات هندسية متخصصة إلى جانب توريد موثوق لأنظمة كهربائية وميكانيكية وأجهزة قياس.</SectionHead>
        <Grid cols={5}>
          <Card icon={SettingsIcon} title="التصميم والهندسة">
            <CardText>دراسات جدوى، تصميم مفاهيمي، وهندسة تفصيلية كهربائية وميكانيكية وأجهزة قياس.</CardText>
          </Card>
          <Card icon={Building2Icon} title="التنفيذ والتركيب">
            <CardText>تنفيذ ميداني كامل للأنظمة الكهربائية والميكانيكية وأجهزة القياس وفق المواصفات.</CardText>
          </Card>
          <Card icon={ClipboardCheckIcon} title="التشغيل التجريبي والانطلاق">
            <CardText>تحضير قبل التشغيل واختبارات ودعم الانطلاق لضمان تسليم سلس.</CardText>
          </Card>
          <Card icon={TruckIcon} title="توريد المنتجات">
            <CardText>مكونات كهربائية وأجهزة قياس وميكانيكية موثوقة من كبرى الشركات العالمية.</CardText>
          </Card>
          <Card icon={WrenchIcon} title="دعم التشغيل واستكشاف الأعطال">
            <CardText>تحليل الأسباب الجذرية واستجابة سريعة لتقليل التوقف والحفاظ على الموثوقية.</CardText>
          </Card>
        </Grid>
      </Section>

      {/* ABOUT TEASER */}
      <Section>
        <Split>
          <Media src="/assets/img/photos/transformer-building.jpg" alt="Electrical substation infrastructure" />
          <div>
            <Eyebrow>من نحن</Eyebrow>
            <h2>هندسة أصيلة، تركيز على العميل، انطلاقًا من إقليم كوردستان.</h2>
            <Lede className="mb-5">تأسست الإرادة المشرقة عام 2022 كمكتب هندسي متخصص بالخدمات الكهربائية وأجهزة القياس والميكانيكية. ومنذ ذلك الحين تم تأسيسها رسميًا، وأصبحت شركة مسجلة في حكومة إقليم كوردستان، ووسّعت نشاطها إلى قطاعات جديدة — مسترشدة دومًا بسياسة جودة صارمة.</Lede>
            <Checklist>
              <ChecklistItem>الريادة في هندسة مبتكرة ومستدامة وموثوقة</ChecklistItem>
              <ChecklistItem>شركة مسجّلة رسميًا وسياسة جودة صارمة</ChecklistItem>
              <ChecklistItem>حلول سرّية ومخصصة وفعّالة من حيث التكلفة</ChecklistItem>
            </Checklist>
            <div className="mt-7">
              <CtaButton href="/ar/about/" variant="outlineNavy" arrow>المزيد عنّا</CtaButton>
            </div>
          </div>
        </Split>
      </Section>

      {/* FEATURED PROJECT */}
      <Section tone="navy">
        <Split>
          <div>
            <Eyebrow tone="light">مشروع نموذجي 2025</Eyebrow>
            <h2>دراسة الموثوقية والتأثير الشبكي لمحطة طاقة شمسية بقدرة 50 ميغاواط</h2>
            <Lede className="mb-6 text-lavender">قمنا بتنفيذ دراسة شاملة لتأثير النظام الكهربائي لصالح خط سينوما دي سي سي 2 التابع لشركة دلتا للإسمنت في بازيان، السليمانية — بالتنسيق المباشر مع وزارة الكهرباء العراقية.</Lede>
            <Stats>
              <Stat value="50MW">محطة شمسية بقدرة 50 ميغاواط</Stat>
              <Stat value="3">أدوات: PSS®E · PSCAD · ETAP</Stat>
              <Stat value="4">أشهر من العمل الهندسي</Stat>
            </Stats>
            <div className="mt-8">
              <CtaButton href="/ar/projects/" variant="gold" arrow>عرض تفاصيل المشروع</CtaButton>
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
        <SectionHead eyebrow="لماذا الإرادة المشرقة" title="شريك يخدمك بالشكل الصحيح" />
        <Grid cols={3}>
          <Card icon={LockIcon} title="السرّية أولًا">
            <CardText>نحافظ على أمن وسرّية معلومات العملاء والموردين في كل الأوقات.</CardText>
          </Card>
          <Card icon={TargetIcon} title="حلول مخصصة وفعّالة من حيث التكلفة">
            <CardText>حلول مصممة خصيصًا لاحتياجاتك — دون قوالب جاهزة.</CardText>
          </Card>
          <Card icon={HandshakeIcon} title="نهج تعاوني">
            <CardText>نعمل عن قرب مع العملاء لفهم احتياجاتهم وابتكار الحل الأنسب معًا.</CardText>
          </Card>
          <Card icon={ZapIcon} title="سلسلة توريد فعّالة">
            <CardText>لوجستيات فعّالة تقلل التأخير وتحافظ على جدول مشروعك.</CardText>
          </Card>
          <Card icon={AwardIcon} title="جودة لا تقبل التنازل">
            <CardText>نتعامل فقط مع موردين موثوقين لضمان أعلى المعايير في كل حل.</CardText>
          </Card>
          <Card icon={LightbulbIcon} title="مدفوعة بالابتكار">
            <CardText>استثمارنا في البحث والتطوير يبقينا في صدارة التوجهات بحلول متطورة.</CardText>
          </Card>
        </Grid>
      </Section>

      {/* PARTNERS */}
      <Section size="sm">
        <div className="mb-2 text-center">
          <Eyebrow>العلامات التجارية التي نمثلها</Eyebrow>
        </div>
        <LogoStrip logos={PARTNER_LOGOS} />
      </Section>

      {/* CLIENTS */}
      <Section size="sm">
        <div className="mb-2 text-center">
          <Eyebrow>بعض من عملائنا</Eyebrow>
        </div>
        <LogoStrip logos={CLIENT_LOGOS} />
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          eyebrow="مستعد للتعاون؟"
          title="لنبنِ معًا شيئًا موثوقًا"
          text="تواصل معنا لأي استفسار أو طلب عرض سعر — نحن هنا لنقدّم لك الدقة والجودة والثقة."
        >
          <CtaButton href="/ar/contact/" variant="gold" arrow>تواصل معنا</CtaButton>
          <CtaButton href="mailto:info@brightvolition.com" variant="outline">
            info@brightvolition.com
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
