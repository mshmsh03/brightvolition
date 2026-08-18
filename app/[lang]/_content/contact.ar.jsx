import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon, SettingsIcon, TruckIcon } from 'lucide-react';
import { LinkedinIcon } from '../../../components/icons';
import { EMAIL, LINKEDIN, PHONE_HREF } from '../../../lib/site-data';
import ContactForm from '../../../components/ContactForm';
import {
  ContactCard,
  ContactItem,
  MapFrame,
  PageHero,
  Reveal,
  Section,
  SectionHead,
  SocialButton,
  SocialRow,
} from '../../../components/sections';

const FORM = {
  heading: "أرسل استفسارًا أو طلب عرض سعر",
  intro: "املأ النموذج وسيتم فتح رسالة بريد إلكتروني معبأة مسبقًا لفريقنا.",
  name: "الاسم الكامل",
  email: "البريد الإلكتروني",
  subject: "الموضوع",
  subjectPlaceholder: "طلب عرض سعر، استفسار عن مشروع، شراكة...",
  message: "الرسالة",
  send: "إرسال الرسالة",
  defaultSubject: "استفسار من الموقع",
  note: "من المفترض أن يكون تطبيق البريد الإلكتروني قد فُتح برسالتك جاهزة للإرسال. إذا لم يفتح، الرجاء مراسلتنا مباشرة على info@brightvolition.com.",
};

export default function ContactAr() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/engineers-blueprint.jpg"
        homeHref="/ar/"
        homeLabel="الرئيسية"
        crumb="تواصل معنا"
        eyebrow="شريككم الموثوق في الحلول الهندسية"
        title="مستعد للتعاون؟"
        lede="تواصل معنا لأي استفسار أو طلب عرض سعر — نحن هنا لنقدّم لك الدقة والجودة والثقة."
        className="md:pb-15"
      />

      <Section>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal as="div">
            <ContactCard>
              <h3 className="mb-5.5 text-[1.28rem]">معلومات التواصل</h3>
              <ContactItem icon={MailIcon} label="البريد الإلكتروني">
                {/* .ltr-fixed keeps Latin addresses and numbers from being
                    reordered by the bidi algorithm in the RTL translations. */}
                <a href={`mailto:${EMAIL}`} className="ltr-fixed">
                  {EMAIL}
                </a>
              </ContactItem>
              <ContactItem icon={PhoneIcon} label="الهاتف">
                <div>
                  <a href={PHONE_HREF} className="ltr-fixed">
                    +964 771 706 5000
                  </a>
                </div>
                <div>
                  <a href="tel:+9647500269585" className="ltr-fixed">
                    +964 750 026 9585
                  </a>
                </div>
              </ContactItem>
              <ContactItem icon={MapPinIcon} label="العنوان">شارع ماردين، مقابل مدينة دلان، السليمانية (46001)، العراق</ContactItem>
              <ContactItem icon={MapPinIcon} label="نطاق العمل">إقليم كوردستان والعراق</ContactItem>
              <ContactItem icon={GlobeIcon} label="الموقع الإلكتروني">
                <span className="ltr-fixed">brightvolition.com</span>
              </ContactItem>
              <ContactItem icon={TruckIcon} label="فريق سلسلة التوريد">
                <a href="mailto:procurement@brightvolition.com" className="ltr-fixed">
                  procurement@brightvolition.com
                </a>
              </ContactItem>
              <ContactItem icon={SettingsIcon} label="الفريق الفني">
                <a href="mailto:technical@brightvolition.com" className="ltr-fixed">
                  technical@brightvolition.com
                </a>
              </ContactItem>
              <SocialRow>
                <SocialButton href={`mailto:${EMAIL}`} label="البريد الإلكتروني">
                  <MailIcon className="size-4" strokeWidth={1.8} />
                </SocialButton>
                <SocialButton href={PHONE_HREF} label="Call">
                  <PhoneIcon className="size-4" strokeWidth={1.8} />
                </SocialButton>
                <SocialButton href={LINKEDIN} label="LinkedIn" external>
                  <LinkedinIcon className="size-4" strokeWidth={1.8} />
                </SocialButton>
              </SocialRow>
            </ContactCard>
          </Reveal>

          <ContactForm t={FORM} />
        </div>
      </Section>

      {/* MAP */}
      <Section size="sm">
        <SectionHead eyebrow="موقعنا" title="السليمانية، إقليم كوردستان العراق" />
        <MapFrame
          src="https://maps.google.com/maps?q=35.543082,45.480219&z=16&output=embed"
          title="Bright Volition location map"
        />
      </Section>
    </>
  );
}
