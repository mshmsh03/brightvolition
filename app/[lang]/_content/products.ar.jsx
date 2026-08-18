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

export default function ProductsAr() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/electrical-panel.jpg"
        homeHref="/ar/"
        homeLabel="الرئيسية"
        crumb="منتجاتنا"
        eyebrow="توريد المنتجات"
        title="مجموعة متكاملة من المنتجات الكهربائية وأجهزة القياس والميكانيكية"
        lede="نوفر مكونات وأنظمة وأجهزة قياس دقيقة — بالشراكة مع كبرى الشركات المصنّعة العالمية لضمان الموثوقية والدقة من مصدر الطاقة وحتى نقطة الاستخدام."
      />

      {/* IN-PAGE NAV */}
      <Section size="sm">
        <ProductNav>
          <ProductNavLink href="#electrical">كهربائي</ProductNavLink>
          <ProductNavLink href="#instrument">أجهزة قياس</ProductNavLink>
          <ProductNavLink href="#mechanical">ميكانيكي</ProductNavLink>
        </ProductNav>
      </Section>

      {/* ELECTRICAL */}
      <Section id="electrical">
        <PillarHead icon={ZapIcon} tone="navy" eyebrow="توريد المنتجات" title="كهربائي" />
        <Grid cols={2} className="gap-x-7 gap-y-0">
          <ProductBlock title="مكونات لوحات المفاتيح الكهربائية">قواطع MCCB، MCB، RCD، كونتاكتورات، مرحلات حماية من الحمل الزائد، مشغلات محركات (مباشر ونجمة-مثلث).</ProductBlock>
          <ProductBlock title="لوحات التحكم">لوحات تحكم منخفضة الجهد، لوحات PLC، لوحات MCC.</ProductBlock>
          <ProductBlock title="أجهزة التحكم والإشارة">أزرار ضغط، مفاتيح اختيار، مصابيح مؤشرة، مؤقتات، مرحلات مراقبة الطور.</ProductBlock>
          <ProductBlock title="الطاقة الاحتياطية والحرجة">مزودات طاقة غير منقطعة (UPS)، بنوك بطاريات، مولدات.</ProductBlock>
          <ProductBlock title="تكييف الطاقة">منظمات الجهد، مقومات، محولات تحكم.</ProductBlock>
          <ProductBlock title="حلول الطاقة الشمسية">عاكسات، منظمات شحن، ألواح شمسية، ومكونات توازن النظام (BOS).</ProductBlock>
          <ProductBlock title="المحركات">محركات تيار متردد ومستمر (منخفضة وعالية الجهد).</ProductBlock>
          <ProductBlock title="تحكم وكفاءة المحركات">محركات سرعة متغيرة (VSD)، مشغلات ناعمة.</ProductBlock>
          <ProductBlock title="الكابلات">كابلات طاقة (منخفضة، متوسطة، عالية الجهد)، كابلات تحكم وقياس، كابلات بيانات.</ProductBlock>
          <ProductBlock title="أنظمة التأريض">قضبان تأريض، كابلات تأريض، قضبان توصيل، مشابك، مركب البنتونايت.</ProductBlock>
          <ProductBlock title="إدارة الكابلات">مجاري كابلات، سلالم، أنابيب حماية، وصناديق توصيل.</ProductBlock>
          <ProductBlock title="أنظمة التسخين المرافق">لوحات HT، كابلات تسخين، صناديق توصيل، أطقم وصل، وحدات تحكم، أجهزة استشعار RTD.</ProductBlock>
          <ProductBlock title="حلول الإنارة">إنارة LED، HID، فلورسنت، تجهيزات مقاومة للانفجار، إنارة طوارئ، كشافات.</ProductBlock>
          <ProductBlock title="معدات الطاقة">محولات توزيع، مرحلات حماية، قواطع دائرة.</ProductBlock>
          <ProductBlock title="الفحص والقياس">أجهزة قياس متعددة، ملزمات قياس، فاحصات عزل، محللات جودة الطاقة، عدادات طاقة، مسجلات بيانات، راسمات إشارة.</ProductBlock>
        </Grid>
      </Section>

      {/* INSTRUMENT */}
      <Section id="instrument">
        <PillarHead icon={GaugeIcon} tone="gold" eyebrow="توريد المنتجات" title="أجهزة القياس" />
        <Reveal as="div" className="mb-8">
          <Lede>مجموعة متكاملة من أجهزة القياس الدقيقة للقياس والتحكم والسلامة، بالشراكة مع كبرى الشركات المصنّعة العالمية لضمان الموثوقية والدقة.</Lede>
        </Reveal>
        <Grid cols={2} className="gap-x-7 gap-y-0">
          <ProductBlock title="الحرارة">أجهزة RTD، مزدوجات حرارية، أجهزة إرسال ومقاييس حرارة.</ProductBlock>
          <ProductBlock title="الضغط">مقاييس ضغط، أجهزة إرسال، محولات، مفاتيح ومؤشرات رقمية.</ProductBlock>
          <ProductBlock title="التدفق">مقاييس تدفق فرق الضغط، مغناطيسية، دوامية، فوق صوتية، توربينية وكوريوليس.</ProductBlock>
          <ProductBlock title="المستوى">أجهزة إرسال مستوى (رادار، فوق صوتي)، مفاتيح، زجاج معاينة ومؤشرات.</ProductBlock>
          <ProductBlock title="تحليل الغاز والعمليات">محللات أكسجين، أشعة تحت حمراء، تحليل الغاز بالليزر، وحساسات pH/الموصلية.</ProductBlock>
          <ProductBlock title="صمامات وحركات التحكم">صمامات ومشغلات تحكم هوائية وكهربائية.</ProductBlock>
          <ProductBlock title="صمامات المانيفولد والأجهزة">صمامات مانيفولد (2، 3، 5 صمام)، صمامات إبرة، صمامات فحص، صمامات كروية.</ProductBlock>
          <ProductBlock title="كشف الحريق والغاز">لوحات تحكم بإنذار الحريق، كواشف دخان وحرارة وغاز، نقاط استدعاء يدوية، أجهزة إنذار صوتي وضوئي.</ProductBlock>
          <ProductBlock title="سلامة العمليات">صمامات أمان الضغط (PSV)، مفاتيح، ومكونات الإيقاف الطارئ (ESD).</ProductBlock>
          <ProductBlock title="مكونات أنظمة التحكم">وحدات تحكم بالعمليات، مكيّفات إشارة، ووحدات إدخال/إخراج PLC.</ProductBlock>
          <div className="sm:col-span-full">
            <ProductBlock title="كابلات وملحقات الأجهزة">كابلات أجهزة القياس، صناديق توصيل، وحواجز السلامة الجوهرية.</ProductBlock>
          </div>
        </Grid>
      </Section>

      {/* MECHANICAL */}
      <Section id="mechanical">
        <PillarHead icon={SettingsIcon} tone="lavender" eyebrow="توريد المنتجات" title="ميكانيكي" />
        <Grid cols={2} className="gap-x-7 gap-y-0">
          <ProductBlock title="الأنابيب والصمامات والتجهيزات">أنابيب وتجهيزات (فلنجات، أكواع، تيات، مخفضات، وصلات)؛ صمامات صناعية (بوابة، كروية، فحص، فراشة)؛ حشوات، حلقات O، وسدادات ميكانيكية.</ProductBlock>
          <ProductBlock title="نقل القدرة والتحكم الحركي">محامل كروية، دحرجة وخطية من علامات رائدة؛ أحزمة V، أحزمة توقيت، سلاسل، تروس وقارنات.</ProductBlock>
          <ProductBlock title="المعدات الدوّارة والدعم">مضخات، ضواغط، مراوح، نفاخات، توربينات، قطع غيار أصلية، مزلقات صناعية وأنظمة تشحيم أوتوماتيكية.</ProductBlock>
          <ProductBlock title="التكييف والتحكم بالمناخ">مكونات وقطع غيار أنظمة التكييف VRF؛ أنظمة تدفئة تجارية وصناعية — سخانات، غلايات، ومكونات.</ProductBlock>
          <ProductBlock title="التصنيع والإنشاء والهياكل">مستلزمات ومعدات لحام؛ مستلزمات قص وتشغيل المعادن؛ هياكل فولاذية — قنوات، عوارض، زوايا، ألواح.</ProductBlock>
          <ProductBlock title="التثبيت والتجميع">براغي، صواميل، حلقات، وأوتاد؛ مثبتات إنشائية — مسامير، مراسي، برشام.</ProductBlock>
          <div className="sm:col-span-full">
            <ProductBlock title="الترشيح وتكييف السوائل">مرشحات هيدروليكية وهوائية وزيت ومصافي؛ مناولة المواد — سيور نقل، بكرات، ومكونات.</ProductBlock>
          </div>
        </Grid>
      </Section>

      {/* BRANDS */}
      <Section>
        <SectionHead eyebrow="شركات مصنّعة موثوقة" title="العلامات التجارية التي نمثلها">نقوم بالتوريد من شركات مصنّعة عالمية موثوقة لضمان موثوقية كل مشروع.</SectionHead>
        <LogoStrip logos={PARTNER_LOGOS} large />
      </Section>

      {/* CLIENTS */}
      <Section size="sm">
        <div className="mb-2 text-center">
          <Eyebrow>بعض من عملائنا</Eyebrow>
        </div>
        <LogoStrip logos={CLIENT_LOGOS} />
      </Section>

      {/* SUPPLY PROMISE */}
      <Section tone="navy">
        <Split>
          <div>
            <Eyebrow tone="light">لماذا تختار التوريد منا</Eyebrow>
            <h2>وعدنا في التوريد</h2>
            <Checklist tone="light">
              <ChecklistItem>منتجات مصدرها شركات مصنّعة معتمدة عالميًا</ChecklistItem>
              <ChecklistItem>تُسلَّم مع توثيق كامل واختبارات مطابقة</ChecklistItem>
              <ChecklistItem>تسليم سريع ودعم فني</ChecklistItem>
              <ChecklistItem>جاهزة للتكامل مع خدمات الهندسة الخاصة بالمشروع</ChecklistItem>
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
          title="تبحث عن مكوّن معيّن؟"
          text="أرسل لنا جدول الكميات أو المواصفات وسنقوم بتوفيرها — بموثوقية وبالسعر المناسب."
        >
          <CtaButton href="/ar/contact/" variant="gold">اطلب عرض سعر</CtaButton>
          <CtaButton href="/ar/services/" variant="outline">خدماتنا</CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
