import { STRINGS } from './contact.strings';
import { MailIcon, MapPinIcon, PhoneIcon, SettingsIcon, TruckIcon } from 'lucide-react';
import { LinkedinIcon } from '../../../components/icons';
import { EMAIL, LINKEDIN, PHONE_HREF, pagePath } from '../../../lib/site-data';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import {
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
        <div className="mx-auto max-w-3xl">
          <Reveal as="div">
            <Card>
              <CardHeader>
                <CardTitle>{t.contactDetails}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                <div>
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
                </div>
                <div className="mt-4 border-t border-lavender pt-4 sm:mt-0 sm:border-t-0 sm:border-s sm:ps-10 sm:pt-0">
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
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* MAP */}
      <Section size="sm">
        <SectionHead eyebrow={t.findUs} title={t.sulaymaniyahKurdistanRegionOfIraq} />
        <MapFrame
          src="https://maps.google.com/maps?q=Bright+Volition,+Sulaymaniyah&z=16&output=embed"
          title="Bright Volition location map"
        />
      </Section>
    </>
  );
}
