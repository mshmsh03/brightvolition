import { STRINGS } from './contact.strings';
import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon, SettingsIcon, TruckIcon } from 'lucide-react';
import { LinkedinIcon } from '../../../components/icons';
import { EMAIL, LINKEDIN, PHONE_HREF, pagePath } from '../../../lib/site-data';
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


export default function Contact({ lang }) {
  const t = STRINGS[lang];

  return (
    <>
      <PageHero
        image="/assets/img/photos/engineers-blueprint.jpg"
        homeHref={pagePath(lang, 'index')}
        homeLabel={t.home}
        crumb={t.contact}
        eyebrow={t.yourTrustedPartnerInEngineering}
        title={t.readyToCollaborate}
        lede={t.reachOutWithYourInquiries}
        className="md:pb-15"
      />

      <Section>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal as="div">
            <ContactCard>
              <h3 className="mb-5.5 text-card-title">{t.contactDetails}</h3>
              <ContactItem icon={MailIcon} label={t.email2}>
                {/* .ltr-fixed keeps Latin addresses and numbers from being
                    reordered by the bidi algorithm in the RTL translations. */}
                <a href={`mailto:${EMAIL}`} className="ltr-fixed">
                  {EMAIL}
                </a>
              </ContactItem>
              <ContactItem icon={PhoneIcon} label={t.phone}>
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
              <ContactItem icon={MapPinIcon} label={t.address}>
                {t.mardinStreetOppositeDilanCity}
              </ContactItem>
              <ContactItem icon={MapPinIcon} label={t.coverage}>
                {t.kurdistanRegionIraq}
              </ContactItem>
              <ContactItem icon={GlobeIcon} label={t.website}>
                <span className="ltr-fixed">brightvolition.com</span>
              </ContactItem>
              <ContactItem icon={TruckIcon} label={t.supplyChainTeam}>
                <a href="mailto:procurement@brightvolition.com" className="ltr-fixed">
                  procurement@brightvolition.com
                </a>
              </ContactItem>
              <ContactItem icon={SettingsIcon} label={t.technicalTeam}>
                <a href="mailto:technical@brightvolition.com" className="ltr-fixed">
                  technical@brightvolition.com
                </a>
              </ContactItem>
              <SocialRow>
                <SocialButton href={`mailto:${EMAIL}`} label={t.email3}>
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

          <ContactForm t={t.form} />
        </div>
      </Section>

      {/* MAP */}
      <Section size="sm">
        <SectionHead eyebrow={t.findUs} title={t.sulaymaniyahKurdistanRegionOfIraq} />
        <MapFrame
          src="https://maps.google.com/maps?q=35.5431746,45.4795484&z=16&output=embed"
          title="Bright Volition location map"
        />
      </Section>
    </>
  );
}
