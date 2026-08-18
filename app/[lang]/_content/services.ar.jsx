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

export default function ServicesAr() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/piping-instrumentation.jpg"
        homeHref="/ar/"
        homeLabel="الرئيسية"
        crumb="خدماتنا"
        eyebrow="ما نقدّمه"
        title="هندسة وتنفيذ وتوريد تحت سقف واحد"
        lede="نقدّم خدمات هندسية متخصصة إلى جانب توريد موثوق لأنظمة كهربائية وميكانيكية وأجهزة قياس — من أول رسم إلى التشغيل الكامل."
      />

      {/* THE FIVE PILLARS */}
      <Section>
        <SectionHead eyebrow="ماذا نقدّم" title="خمسة محاور خدمية" />
        <Grid cols={5}>
          <Card icon={SettingsIcon} title="التصميم والهندسة" />
          <Card icon={Building2Icon} title="التنفيذ والتركيب" />
          <Card icon={ClipboardCheckIcon} title="التشغيل التجريبي والانطلاق" />
          <Card icon={TruckIcon} title="توريد المنتجات" />
          <Card icon={WrenchIcon} title="دعم التشغيل واستكشاف الأعطال" />
        </Grid>
      </Section>

      {/* ENGINEERING DISCIPLINES */}
      <Section id="engineering">
        <SectionHead eyebrow="تشمل خدماتنا الهندسية" title="خمسة تخصصات هندسية" />
        <Grid cols={2}>
          <Card>
            <Tag tone="gold">01</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">دراسات الجدوى</h3>
            <CardList>
              <CardListItem>دراسات جدوى فنية واقتصادية</CardListItem>
              <CardListItem>تصميم مفاهيمي وتحديد نطاق المشروع</CardListItem>
              <CardListItem>مسوحات ميدانية وجمع البيانات</CardListItem>
            </CardList>
          </Card>
          <Card>
            <Tag tone="gold">02</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">الهندسة الكهربائية</h3>
            <CardList>
              <CardListItem>تصميم كهربائي تفصيلي (أنظمة منخفضة ومتوسطة وعالية الجهد)</CardListItem>
              <CardListItem>أنظمة إدارة الطاقة</CardListItem>
              <CardListItem>دراسات تنسيق الحماية</CardListItem>
              <CardListItem>دراسات سريان الحمل والدائرة القصيرة والاستقرار</CardListItem>
              <CardListItem>تحليل التوافقيات ودراسات جودة الطاقة</CardListItem>
              <CardListItem>محاكاة أنظمة الطاقة (ETAP, PSCAD, PSS/E)</CardListItem>
              <CardListItem>تكامل أنظمة SCADA والأتمتة</CardListItem>
            </CardList>
          </Card>
          <Card>
            <Tag tone="gold">03</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">الهندسة الميكانيكية</h3>
            <CardList>
              <CardListItem>تركيب مجاري وسلالم الكابلات</CardListItem>
              <CardListItem>أنظمة التكييف (المجاري، الدمبرات، VRF، الملحقات)</CardListItem>
              <CardListItem>فحص الخزانات والأنابيب والطلاء</CardListItem>
              <CardListItem>تركيب ولحام الأنابيب</CardListItem>
              <CardListItem>الفحص غير الإتلافي — PT, RT, UT, MT</CardListItem>
              <CardListItem>تركيب المعدات الدوّارة</CardListItem>
              <CardListItem>أنظمة الإطفاء (مضخات، رشاشات، FM200، صنابير حريق)</CardListItem>
              <CardListItem>ترشيح ومعالجة زيوت التشحيم</CardListItem>
              <CardListItem>تركيب الهياكل الفولاذية</CardListItem>
            </CardList>
          </Card>
          <Card>
            <Tag tone="gold">04</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">هندسة أجهزة القياس</h3>
            <CardList>
              <CardListItem>تحديد ومعايرة أجهزة القياس الميدانية (ضغط، حرارة، تدفق، مستوى)</CardListItem>
              <CardListItem>تصميم حلقات التحكم وفهارس/بطاقات بيانات الأجهزة</CardListItem>
              <CardListItem>مخططات الربط وتصميم كابلات الأجهزة</CardListItem>
              <CardListItem>تخطيط صناديق التوصيل وخزائن التجميع</CardListItem>
              <CardListItem>تصميم أنظمة كشف الحريق والغاز</CardListItem>
            </CardList>
          </Card>
          <Card className="sm:col-span-full">
            <Tag tone="gold">05</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">الأتمتة والتحكم</h3>
            <CardList columns>
              <CardListItem>تصميم بنية أنظمة DCS / PLC / SCADA</CardListItem>
              <CardListItem>تطوير فلسفة ومنطق التحكم</CardListItem>
              <CardListItem>تصميم واجهات التشغيل HMI</CardListItem>
              <CardListItem>دمج أنظمة التحليل (غاز وسائل)</CardListItem>
              <CardListItem>توصيل لوحات DCS/PLC وبنية المداخل والمخارج</CardListItem>
              <CardListItem>دعم ما قبل التشغيل والمعايرة والتشغيل التجريبي</CardListItem>
            </CardList>
          </Card>
        </Grid>
      </Section>

      {/* CONSTRUCTION CAPABILITY */}
      <Section id="construction">
        <SectionHead eyebrow="التنفيذ الميداني" title="قدرات التنفيذ">فريق ميداني واحد ينفّذ الأعمال الكهربائية والميكانيكية وأجهزة القياس معًا.</SectionHead>
        <DataTable headers={CONSTRUCTION_TABLE.headers} rows={CONSTRUCTION_TABLE.rows} />
      </Section>

      {/* TROUBLESHOOTING */}
      <Section tone="navy" id="troubleshooting">
        <SectionHead
          eyebrow="دعم التشغيل"
          tone="light"
          title="استكشاف الأعطال المتقدم وتحليل الأسباب الجذرية"
        >نهج منهجي قائم على البيانات لتحديد الأسباب الجذرية للمشكلات المعقّدة بسرعة في الأنظمة الكهربائية والميكانيكية وأجهزة القياس — لتقليل التوقف ومنع تكرار الأعطال.</SectionHead>
        <Steps>
          <Step num="1" title="تحديد المشكلة وجمع البيانات">
            <p>مراجعة شاملة لوثائق النظام، بما في ذلك مخططات P&ID والمخططات الكهربائية.</p>
          </Step>
          <Step num="2" title="تحليل منظم وتحديد السبب الجذري">
            <p>تحليل FMEA وشجرة الأعطال FTA ومخططات إيشيكاوا لاستكشاف كل الأسباب المحتملة.</p>
          </Step>
          <Step num="3" title="تنفيذ الحل والتحقق منه">
            <p>نُطوّر وننفّذ خطة إجراء تصحيحي، مع التحقق من استعادة موثوقية النظام وأدائه.</p>
          </Step>
        </Steps>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title="لديك نطاق عمل محدد؟"
          text="أرسل لنا متطلباتك وسيقوم فريقنا الهندسي بالرد عليك بعرض مخصص."
        >
          <CtaButton href="/ar/contact/" variant="gold">اطلب عرض سعر</CtaButton>
          <CtaButton href="/ar/products/" variant="outline">تصفح المنتجات</CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
