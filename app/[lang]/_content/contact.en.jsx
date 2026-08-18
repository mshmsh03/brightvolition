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
  heading: 'Send an Inquiry or RFQ',
  intro: 'Fill in the form and it will open a pre-filled email to our team.',
  name: 'Full Name',
  email: 'Email',
  subject: 'Subject',
  subjectPlaceholder: 'RFQ, project inquiry, partnership...',
  message: 'Message',
  send: 'Send Message',
  defaultSubject: 'Website enquiry',
  note: "Your email app should now be open with your message ready to send. If it didn't open, please email us directly at info@brightvolition.com.",
};

export default function ContactEn() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/engineers-blueprint.jpg"
        homeHref="/en/"
        homeLabel="Home"
        crumb="Contact"
        eyebrow="Your Trusted Partner in Engineering Solutions"
        title="Ready to Collaborate?"
        lede="Reach out with your inquiries or RFQs — we're here to deliver precision, quality, and trust."
        className="md:pb-15"
      />

      <Section>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal as="div">
            <ContactCard>
              <h3 className="mb-5.5 text-[1.28rem]">Contact Details</h3>
              <ContactItem icon={MailIcon} label="Email">
                {/* .ltr-fixed keeps Latin addresses and numbers from being
                    reordered by the bidi algorithm in the RTL translations. */}
                <a href={`mailto:${EMAIL}`} className="ltr-fixed">
                  {EMAIL}
                </a>
              </ContactItem>
              <ContactItem icon={PhoneIcon} label="Phone">
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
              <ContactItem icon={MapPinIcon} label="Address">
                Mardin Street, Opposite Dilan City, Sulaymaniyah (46001), Iraq
              </ContactItem>
              <ContactItem icon={MapPinIcon} label="Coverage">
                Kurdistan Region & Iraq
              </ContactItem>
              <ContactItem icon={GlobeIcon} label="Website">
                <span className="ltr-fixed">brightvolition.com</span>
              </ContactItem>
              <ContactItem icon={TruckIcon} label="Supply Chain Team">
                <a href="mailto:procurement@brightvolition.com" className="ltr-fixed">
                  procurement@brightvolition.com
                </a>
              </ContactItem>
              <ContactItem icon={SettingsIcon} label="Technical Team">
                <a href="mailto:technical@brightvolition.com" className="ltr-fixed">
                  technical@brightvolition.com
                </a>
              </ContactItem>
              <SocialRow>
                <SocialButton href={`mailto:${EMAIL}`} label="Email">
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
        <SectionHead eyebrow="Find Us" title="Sulaymaniyah, Kurdistan Region of Iraq" />
        <MapFrame
          src="https://maps.google.com/maps?q=35.543082,45.480219&z=16&output=embed"
          title="Bright Volition location map"
        />
      </Section>
    </>
  );
}
