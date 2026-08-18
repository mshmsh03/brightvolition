import { DownloadIcon, LeafIcon, LightbulbIcon, UsersIcon } from 'lucide-react';
import { PROFILE_PDF } from '../../../lib/site-data';
import {
  Card,
  CardList,
  CardListItem,
  CardText,
  Checklist,
  ChecklistItem,
  CtaBand,
  CtaButton,
  Eyebrow,
  Grid,
  Lede,
  NumCard,
  PageHero,
  Section,
  SectionHead,
  Split,
  Timeline,
  TimelineEntry,
  TimelineItem,
} from '../../../components/sections';

export default function AboutAr() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/transformer-building.jpg"
        homeHref="/ar/"
        homeLabel="الرئيسية"
        crumb="من نحن"
        eyebrow="من نحن"
        title="شركة هندسية مسجّلة رسميًا في إقليم كوردستان، مبنية على الثقة"
        lede="تأسست الإرادة المشرقة عام 2022 كمكتب هندسي متخصص بالخدمات الكهربائية وأجهزة القياس والميكانيكية."
      >
        <CtaButton href={PROFILE_PDF} variant="gold" download>
          <DownloadIcon />تحميل الملف التعريفي الكامل للشركة</CtaButton>
      </PageHero>

      {/* MISSION */}
      <Section size="tight">
        <CtaBand align="start" eyebrow="مهمتنا" title="تمكين عملائنا من خلال تقديم خدمات هندسية ذكية ومستدامة وفعّالة من حيث التكلفة، تحقق قيمة دائمة." />
      </Section>

      {/* MILESTONES */}
      <Section>
        <SectionHead eyebrow="نظرة عامة عن الشركة" title="رؤية التأسيس، المحطات الرئيسية، والتطلعات المستقبلية" />
        <Timeline>
          <TimelineItem title="رؤية التأسيس">
            <TimelineEntry>الريادة في تقديم حلول هندسية مبتكرة ومستدامة وموثوقة.</TimelineEntry>
            <TimelineEntry>تمكين العملاء من تحقيق تميّز مستدام.</TimelineEntry>
          </TimelineItem>
          <TimelineItem title="المحطات الرئيسية">
            <TimelineEntry>
              <strong>2023:</strong> التأسيس الرسمي وإطلاق أولى المنتجات والخدمات.</TimelineEntry>
            <TimelineEntry>
              <strong>2024:</strong> توسيع الخدمات وترقية المكتب إلى شركة مسجّلة رسميًا في حكومة إقليم كوردستان.</TimelineEntry>
            <TimelineEntry>
              <strong>2025:</strong> تنويع الخدمات ودخول قطاعات جديدة بحلول هندسية متقدمة.</TimelineEntry>
          </TimelineItem>
          <TimelineItem title="التطلعات المستقبلية">
            <TimelineEntry>الالتزام بالجودة والاستدامة والمسؤولية.</TimelineEntry>
            <TimelineEntry>دفع الابتكار للبقاء في صدارة التوجهات.</TimelineEntry>
            <TimelineEntry>التوسع عالميًا مع التركيز على رضا العملاء.</TimelineEntry>
          </TimelineItem>
        </Timeline>
      </Section>

      {/* POLICY */}
      <Section>
        <Split className="items-start">
          <div>
            <Eyebrow>سياستنا</Eyebrow>
            <h2>الجودة، مصممة بعناية</h2>
            <Lede className="mb-4">تلتزم الإرادة المشرقة بتقديم حلول هندسية مبتكرة ومستدامة وموثوقة، وتوريد منتجات وخدمات تنفيذ تلبي متطلبات العملاء وتفوق توقعاتهم.</Lede>
            <p>توفر هذه السياسة الإطار اللازم لوضع ومراجعة أهداف الجودة لدينا، ويتم تعميمها على جميع الموظفين وأصحاب المصلحة لضمان الفهم والتطبيق الفعّال.</p>
          </div>
          <Checklist>
            <ChecklistItem>ضمان الامتثال للأنظمة القانونية والالتزامات التعاقدية.</ChecklistItem>
            <ChecklistItem>السعي لتحقيق رضا العملاء من خلال منتجات وخدمات وحلول عالية الجودة.</ChecklistItem>
            <ChecklistItem>ترسيخ ثقافة التحسين المستمر في جميع العمليات والأنظمة والأداء.</ChecklistItem>
            <ChecklistItem>تمكين الموظفين من خلال التدريب والعمل الجماعي والمسؤولية والاهتمام بسلامتهم.</ChecklistItem>
            <ChecklistItem>تعزيز الشراكات مع العملاء والموردين لخلق قيمة طويلة الأمد.</ChecklistItem>
          </Checklist>
        </Split>
      </Section>

      {/* HOW WE WORK */}
      <Section>
        <SectionHead eyebrow="كيف تخدم الإرادة المشرقة عملاءها" title="كيف نعمل" />
        <Grid cols={3} className="pt-5">
          <NumCard num="1" title="السرّية أولًا">
            <CardText>نُولي أولوية لسرّية عملائنا ومورّدينا، لضمان بقاء كل المعلومات الحساسة آمنة ومحمية.</CardText>
          </NumCard>
          <NumCard num="2" title="سلسلة توريد فعّالة">
            <CardText>إدارة فعّالة لسلسلة التوريد تضمن التسليم في الوقت المحدد وتقلل التأخير وتُحسّن الأداء.</CardText>
          </NumCard>
          <NumCard num="3" title="جودة وموثوقية لا تقبل التنازل">
            <CardText>نتعامل مع مورّدين موثوقين لضمان أن يلبي كل منتج وخدمة أعلى المعايير.</CardText>
          </NumCard>
          <NumCard num="4" title="حلول مخصصة وفعّالة من حيث التكلفة">
            <CardText>كل حل مصمم وفق احتياجاتك التشغيلية وميزانيتك.</CardText>
          </NumCard>
          <NumCard num="5" title="نهج تعاوني">
            <CardText>نعمل عن قرب مع العملاء لفهم احتياجاتهم وتقديم أفضل الحلول الممكنة.</CardText>
          </NumCard>
          <NumCard num="6" title="الالتزام بالتميّز">
            <CardText>نحن ملتزمون بتقديم التميّز في كل ما نقوم به.</CardText>
          </NumCard>
        </Grid>
      </Section>

      {/* WHY BV IS THE RIGHT CHOICE */}
      <Section tone="navy">
        <SectionHead
          eyebrow="لماذا الإرادة المشرقة هي الخيار الصحيح"
          tone="light"
          title="التركيز على العميل، الابتكار، والمسؤولية"
        />
        <Grid cols={3}>
          <Card icon={UsersIcon} tone="dark" title="التركيز على العميل">
            <CardList>
              <CardListItem>نُولي أهمية كبيرة لفهم المتطلبات والتحديات الخاصة بكل عميل.</CardListItem>
              <CardListItem>إعطاء الأولوية لخدمة متميزة وبناء علاقات قوية وطويلة الأمد.</CardListItem>
            </CardList>
          </Card>
          <Card icon={LightbulbIcon} tone="dark" title="الابتكار">
            <CardList>
              <CardListItem>نواكب أحدث التقنيات وتوجهات الصناعة باستمرار.</CardListItem>
              <CardListItem>استثمارنا في البحث والتطوير يتيح حلولًا متطورة تُعزز الكفاءة والإنتاجية.</CardListItem>
            </CardList>
          </Card>
          <Card icon={LeafIcon} tone="dark" title="الاستدامة والمسؤولية المجتمعية">
            <CardList>
              <CardListItem>تقديم حلول هندسية صديقة للبيئة.</CardListItem>
              <CardListItem>الصحة والسلامة: معايير صارمة للعمال والعملاء والمجتمع.</CardListItem>
              <CardListItem>تصاميم موفرة للطاقة تقلل الاستهلاك والانبعاثات.</CardListItem>
              <CardListItem>مبادرات مسؤولية مجتمعية تدعم المجتمعات المحلية والبيئة.</CardListItem>
            </CardList>
          </Card>
        </Grid>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title="تريد معرفة المزيد عن إمكانياتنا؟"
          text="اكتشف كيف تناسب قدراتنا الهندسية والتنفيذية والتوريدية مشروعك القادم."
        >
          <CtaButton href="/ar/services/" variant="gold">خدماتنا</CtaButton>
          <CtaButton href="/ar/contact/" variant="outline">تواصل معنا</CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
