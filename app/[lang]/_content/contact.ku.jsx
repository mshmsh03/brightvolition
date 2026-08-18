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
  heading: "پرسیارێک یان داواکاری نرخنامە بنێرە",
  intro: "فۆرمەکە پڕبکەرەوە و نامەیەکی ئیمەیلی پێشپڕکراو بۆ تیمەکەمان دەکرێتەوە.",
  name: "ناوی تەواو",
  email: "ئیمەیل",
  subject: "بابەت",
  subjectPlaceholder: "داواکاری نرخنامە، پرسیار دەربارەی پڕۆژە، هاوبەشی...",
  message: "پەیام",
  send: "ناردنی پەیام",
  defaultSubject: "پرسیار لە ماڵپەڕەوە",
  note: "دەبێت ئەپی ئیمەیل بە پەیامەکەت ئامادە بۆ ناردن کرابێتەوە. ئەگەر نەکرایەوە، تکایە ڕاستەوخۆ لە info@brightvolition.com پەیوەندیمان پێوە بکە.",
};

export default function ContactKu() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/engineers-blueprint.jpg"
        homeHref="/ku/"
        homeLabel="سەرەکی"
        crumb="پەیوەندیمان پێوە بکە"
        eyebrow="هاوبەشی متمانەپێکراوتان لە چارەسەری ئەندازیاریدا"
        title="ئامادەیت بۆ هاوکاری؟"
        lede="پەیوەندیمان پێوە بکە بۆ هەر پرسیارێک یان داواکاری نرخنامە — ئێمە لێرەین بۆ پێشکەشکردنی وردی، کوالیتی و متمانە بۆت."
        className="md:pb-15"
      />

      <Section>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal as="div">
            <ContactCard>
              <h3 className="mb-5.5 text-[1.28rem]">زانیاریی پەیوەندی</h3>
              <ContactItem icon={MailIcon} label="ئیمەیل">
                {/* .ltr-fixed keeps Latin addresses and numbers from being
                    reordered by the bidi algorithm in the RTL translations. */}
                <a href={`mailto:${EMAIL}`} className="ltr-fixed">
                  {EMAIL}
                </a>
              </ContactItem>
              <ContactItem icon={PhoneIcon} label="تەلەفۆن">
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
              <ContactItem icon={MapPinIcon} label="ناونیشان">شەقامی ماردین، بەرامبەر شاری دیلان، سلێمانی (46001)، عێراق</ContactItem>
              <ContactItem icon={MapPinIcon} label="مەودای کار">هەرێمی کوردستان و عێراق</ContactItem>
              <ContactItem icon={GlobeIcon} label="ماڵپەڕ">
                <span className="ltr-fixed">brightvolition.com</span>
              </ContactItem>
              <ContactItem icon={TruckIcon} label="تیمی زنجیرەی دابینکردن">
                <a href="mailto:procurement@brightvolition.com" className="ltr-fixed">
                  procurement@brightvolition.com
                </a>
              </ContactItem>
              <ContactItem icon={SettingsIcon} label="تیمی تەکنیکی">
                <a href="mailto:technical@brightvolition.com" className="ltr-fixed">
                  technical@brightvolition.com
                </a>
              </ContactItem>
              <SocialRow>
                <SocialButton href={`mailto:${EMAIL}`} label="ئیمەیل">
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
        <SectionHead eyebrow="شوێنمان" title="سلێمانی، هەرێمی کوردستانی عێراق" />
        <MapFrame
          src="https://maps.google.com/maps?q=35.543082,45.480219&z=16&output=embed"
          title="Bright Volition location map"
        />
      </Section>
    </>
  );
}
