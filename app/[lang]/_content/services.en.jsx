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

export default function ServicesEn() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/piping-instrumentation.jpg"
        homeHref="/en/"
        homeLabel="Home"
        crumb="Services"
        eyebrow="What We Offer"
        title="Engineering, Construction & Supply Under One Roof"
        lede="Delivering specialized engineering services alongside reliable supply of electrical, mechanical, and instrumentation systems — from first sketch to full operation."
      />

      {/* THE FIVE PILLARS */}
      <Section>
        <SectionHead eyebrow="What We Do" title="Five Service Pillars" />
        <Grid cols={5}>
          <Card icon={SettingsIcon} title="Design & Engineering" />
          <Card icon={Building2Icon} title="Construction & Installation" />
          <Card icon={ClipboardCheckIcon} title="System Commissioning & Start-Up" />
          <Card icon={TruckIcon} title="Product Supply & Sourcing" />
          <Card icon={WrenchIcon} title="Operations Support & Troubleshooting" />
        </Grid>
      </Section>

      {/* ENGINEERING DISCIPLINES */}
      <Section id="engineering">
        <SectionHead eyebrow="Our Engineering Services Include" title="Five Engineering Disciplines" />
        <Grid cols={2}>
          <Card>
            <Tag tone="gold">01</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">Feasibility & Studies</h3>
            <CardList>
              <CardListItem>Technical and economic feasibility studies</CardListItem>
              <CardListItem>Conceptual design and project scoping</CardListItem>
              <CardListItem>Site surveys and data collection</CardListItem>
            </CardList>
          </Card>
          <Card>
            <Tag tone="gold">02</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">Electrical Engineering</h3>
            <CardList>
              <CardListItem>Detailed electrical design (LV, MV, HV systems)</CardListItem>
              <CardListItem>Power management systems</CardListItem>
              <CardListItem>Protection coordination studies</CardListItem>
              <CardListItem>Load flow, short circuit & stability studies</CardListItem>
              <CardListItem>Harmonic analysis and power quality studies</CardListItem>
              <CardListItem>Power system simulation (ETAP, PSCAD, PSS/E)</CardListItem>
              <CardListItem>SCADA and automation integration</CardListItem>
            </CardList>
          </Card>
          <Card>
            <Tag tone="gold">03</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">Mechanical Engineering</h3>
            <CardList>
              <CardListItem>Cable tray and cable ladder installation</CardListItem>
              <CardListItem>HVAC systems (ducts, dampers, VRF, accessories)</CardListItem>
              <CardListItem>Tank, piping & painting inspection</CardListItem>
              <CardListItem>Pipe installation & welding</CardListItem>
              <CardListItem>Non-Destructive Testing — PT, RT, UT, MT</CardListItem>
              <CardListItem>Rotating equipment installation</CardListItem>
              <CardListItem>Fire-fighting systems (pumps, sprinklers, FM200, hydrants)</CardListItem>
              <CardListItem>Lube oil filtration & treatment</CardListItem>
              <CardListItem>Structural steel installation</CardListItem>
            </CardList>
          </Card>
          <Card>
            <Tag tone="gold">04</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">Instrumentation Engineering</h3>
            <CardList>
              <CardListItem>
                Field instrument specification & sizing (pressure, temperature, flow, level)
              </CardListItem>
              <CardListItem>Control loop design and instrument index/data sheets</CardListItem>
              <CardListItem>Hook-up drawings and instrument cabling design</CardListItem>
              <CardListItem>Junction box & marshalling cabinet layout</CardListItem>
              <CardListItem>Fire & gas (F&G) detection system design</CardListItem>
            </CardList>
          </Card>
          <Card className="sm:col-span-full">
            <Tag tone="gold">05</Tag>
            <h3 className="mt-3.5 mb-2.5 text-[1.28rem]">Automation & Control</h3>
            <CardList columns>
              <CardListItem>DCS / PLC / SCADA architecture design</CardListItem>
              <CardListItem>Control philosophy and logic development</CardListItem>
              <CardListItem>HMI design and operator interface layout</CardListItem>
              <CardListItem>Analyzer system integration (gas & liquid)</CardListItem>
              <CardListItem>DCS/PLC panel wiring and I/O architecture</CardListItem>
              <CardListItem>Pre-commissioning, calibration & commissioning support</CardListItem>
            </CardList>
          </Card>
        </Grid>
      </Section>

      {/* CONSTRUCTION CAPABILITY */}
      <Section id="construction">
        <SectionHead eyebrow="Field Execution" title="Construction Capability">
          A single field team executing electrical, mechanical, and instrumentation scopes together.
        </SectionHead>
        <DataTable headers={CONSTRUCTION_TABLE.headers} rows={CONSTRUCTION_TABLE.rows} />
      </Section>

      {/* TROUBLESHOOTING */}
      <Section tone="navy" id="troubleshooting">
        <SectionHead
          eyebrow="Operations Support"
          tone="light"
          title="Advanced Technical Troubleshooting & Root Cause Analysis"
        >
          A systematic, data-driven approach to rapidly identify the root cause of complex issues in electrical,
          mechanical, and instrumentation systems — minimizing downtime and preventing recurrence.
        </SectionHead>
        <Steps>
          <Step num="1" title="Problem Definition & Data Collection">
            <p>Thorough review of system documentation, including P&ID and electrical schematic diagrams.</p>
          </Step>
          <Step num="2" title="Structured Analysis & Root Cause ID">
            <p>
              FMEA, Fault Tree Analysis (FTA), and Cause-and-Effect (Ishikawa) diagrams to explore every
              potential cause.
            </p>
          </Step>
          <Step num="3" title="Solution Implementation & Validation">
            <p>
              We develop and execute a corrective action plan, verifying the fix restores system reliability and
              performance.
            </p>
          </Step>
        </Steps>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title="Have a Scope in Mind?"
          text="Send us your requirements and our engineering team will get back to you with a tailored proposal."
        >
          <CtaButton href="/en/contact/" variant="gold">
            Request a Quote
          </CtaButton>
          <CtaButton href="/en/products/" variant="outline">
            Browse Products
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
