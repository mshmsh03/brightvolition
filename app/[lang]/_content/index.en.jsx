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

export default function IndexEn() {
  return (
    <>
      <Hero image="/assets/img/photos/power-plant.jpg">
        <h1 className="m-wipe text-cream" style={{ '--m-delay': '120ms' }}>
          Industrial Supply & Engineering Services
        </h1>
        <Lede className="m-register text-lavender" style={{ '--m-delay': '320ms' }}>
          Bright Volition delivers Electrical, Instrumentation & Mechanical engineering, construction,
          commissioning, and product supply — from feasibility study through to operations support.
        </Lede>
        <div className="m-register mt-8 flex flex-wrap gap-3.5" style={{ '--m-delay': '420ms' }}>
          <CtaButton href="/en/services/" variant="gold" arrow>
            Explore Our Services
          </CtaButton>
          <CtaButton href="/en/contact/" variant="outline">
            Talk to Our Team
          </CtaButton>
        </div>
      </Hero>

      {/* WHAT WE DO */}
      <Section id="what-we-do">
        <SectionHead eyebrow="What We Do" title="Five Ways We Deliver Engineering Excellence">
          Delivering specialized engineering services alongside reliable supply of electrical, mechanical, and
          instrumentation systems.
        </SectionHead>
        <Grid cols={5}>
          <Card icon={SettingsIcon} title="Design & Engineering">
            <CardText>
              Feasibility studies, conceptual design, and detailed electrical, mechanical & instrumentation
              engineering.
            </CardText>
          </Card>
          <Card icon={Building2Icon} title="Construction & Installation">
            <CardText>
              Full field execution across electrical, mechanical, and instrumentation systems, built to spec.
            </CardText>
          </Card>
          <Card icon={ClipboardCheckIcon} title="System Commissioning & Start-Up">
            <CardText>
              Structured pre-commissioning, testing, and start-up support for a smooth handover.
            </CardText>
          </Card>
          <Card icon={TruckIcon} title="Product Supply & Sourcing">
            <CardText>
              Electrical, instrumentation & mechanical components sourced from trusted global manufacturers.
            </CardText>
          </Card>
          <Card icon={WrenchIcon} title="Operations Support & Troubleshooting">
            <CardText>
              Root-cause analysis and rapid response that minimizes downtime and protects reliability.
            </CardText>
          </Card>
        </Grid>
      </Section>

      {/* ABOUT TEASER */}
      <Section>
        <Split>
          <Media src="/assets/img/photos/transformer-building.jpg" alt="Electrical substation infrastructure" />
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <h2>Engineering-Led. Client-Focused. Built in the Kurdistan Region.</h2>
            <Lede className="mb-5">
              Bright Volition was founded in 2022 as an engineering office specializing in Electrical,
              Instrumentation, and Mechanical services. Since then we've incorporated, become a registered KRG
              company, and diversified into new sectors — always guided by a strict quality policy.
            </Lede>
            <Checklist>
              <ChecklistItem>Lead in innovative, sustainable, reliable engineering</ChecklistItem>
              <ChecklistItem>Registered KRG company with a strict quality policy</ChecklistItem>
              <ChecklistItem>Confidential, tailored, and cost-effective solutions</ChecklistItem>
            </Checklist>
            <div className="mt-7">
              <CtaButton href="/en/about/" variant="outlineNavy" arrow>
                More About Us
              </CtaButton>
            </div>
          </div>
        </Split>
      </Section>

      {/* FEATURED PROJECT */}
      <Section tone="navy">
        <Split>
          <div>
            <Eyebrow tone="light">2025 Model Project</Eyebrow>
            <h2>Reliability & Grid-Impact Study for a 50MW Solar Power Plant</h2>
            <Lede className="mb-6 text-lavender">
              For Sinoma DCC Line 2 / Delta Cement Company in Bazyan, Sulaymaniyah, we delivered a full
              power-system impact study — coordinated directly with Iraq's Ministry of Electricity.
            </Lede>
            <Stats>
              <Stat value="50MW">DC solar plant studied</Stat>
              <Stat value="3">Tools: PSS®E · PSCAD · ETAP</Stat>
              <Stat value="4">Months of engineering scope</Stat>
            </Stats>
            <div className="mt-8">
              <CtaButton href="/en/projects/" variant="gold" arrow>
                View Project Details
              </CtaButton>
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
        <SectionHead eyebrow="Why Bright Volition" title="A Partner That Serves You Right" />
        <Grid cols={3}>
          <Card icon={LockIcon} title="Confidentiality First">
            <CardText>Sensitive client and supplier information stays secure and protected, always.</CardText>
          </Card>
          <Card icon={TargetIcon} title="Tailored & Cost-Effective">
            <CardText>Solutions scoped to your exact requirements — never one-size-fits-all.</CardText>
          </Card>
          <Card icon={HandshakeIcon} title="Collaborative Approach">
            <CardText>
              We work closely with clients to understand needs and co-create the best solution.
            </CardText>
          </Card>
          <Card icon={ZapIcon} title="Streamlined Supply Chain">
            <CardText>Efficient logistics that minimize delays and keep your project on schedule.</CardText>
          </Card>
          <Card icon={AwardIcon} title="Uncompromising Quality">
            <CardText>
              We partner only with reputable suppliers so every solution meets the highest standard.
            </CardText>
          </Card>
          <Card icon={LightbulbIcon} title="Innovation-Driven">
            <CardText>
              Investment in R&D keeps us ahead of trends, offering cutting-edge solutions.
            </CardText>
          </Card>
        </Grid>
      </Section>

      {/* PARTNERS */}
      <Section size="sm">
        <div className="mb-2 text-center">
          <Eyebrow>Brands We Represent</Eyebrow>
        </div>
        <LogoStrip logos={PARTNER_LOGOS} />
      </Section>

      {/* CLIENTS */}
      <Section size="sm">
        <div className="mb-2 text-center">
          <Eyebrow>Some of Our Clients</Eyebrow>
        </div>
        <LogoStrip logos={CLIENT_LOGOS} />
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          eyebrow="Ready to Collaborate?"
          title="Let's Build Something Reliable Together"
          text="Reach out with your inquiries or RFQs — we're here to deliver precision, quality, and trust."
        >
          <CtaButton href="/en/contact/" variant="gold" arrow>
            Contact Us
          </CtaButton>
          <CtaButton href="mailto:info@brightvolition.com" variant="outline">
            info@brightvolition.com
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
