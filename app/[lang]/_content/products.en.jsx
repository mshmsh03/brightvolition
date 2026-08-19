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

export default function ProductsEn() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/electrical-panel.jpg"
        homeHref="/en/"
        homeLabel="Home"
        crumb="Products"
        eyebrow="Product Supply & Sourcing"
        title="A Complete Range of Electrical, Instrument & Mechanical Products"
        lede="We supply components, systems, and precision instruments — partnering with the world’s leading manufacturers to ensure reliability and accuracy from energy source to end-use."
      />

      {/* IN-PAGE NAV */}
      <Section size="sm">
        <ProductNav>
          <ProductNavLink href="#electrical">Electrical</ProductNavLink>
          <ProductNavLink href="#instrument">Instrumentation</ProductNavLink>
          <ProductNavLink href="#mechanical">Mechanical</ProductNavLink>
        </ProductNav>
      </Section>

      {/* ELECTRICAL */}
      <Section id="electrical">
        <PillarHead icon={ZapIcon} tone="navy" eyebrow="Product Supply" title="Electrical" />
        <Grid cols={2} className="gap-x-7 gap-y-0">
          <ProductBlock title="Switchgear & Panel Components">
            MCCB, MCB, RCD, contactors, overload relays, motor starters (DOL, Star-Delta).
          </ProductBlock>
          <ProductBlock title="Control Panels">LV control panels, PLC panels, MCC panels.</ProductBlock>
          <ProductBlock title="Control & Signaling Devices">
            Push buttons, selector switches, indicator lamps, timers, phase monitoring relays.
          </ProductBlock>
          <ProductBlock title="Backup & Critical Power">
            Uninterruptible power supplies (UPS), battery banks, generators.
          </ProductBlock>
          <ProductBlock title="Power Conditioning">
            Voltage regulators, rectifiers, control transformers.
          </ProductBlock>
          <ProductBlock title="Solar Energy Solutions">
            Inverters, charge controllers, solar panels, and balance of system (BOS) components.
          </ProductBlock>
          <ProductBlock title="Motors">AC/DC motors (LV & HV).</ProductBlock>
          <ProductBlock title="Motor Control & Efficiency">
            Variable speed drives (VSD), soft starters.
          </ProductBlock>
          <ProductBlock title="Cables">
            Power cable (LV, MV, HV), instrumentation & control cable, data cable.
          </ProductBlock>
          <ProductBlock title="Earthing / Grounding Systems">
            Earth rods, earth cable, earth bars, clamps, bentonite compound.
          </ProductBlock>
          <ProductBlock title="Cable Management">
            Cable trays, ladders, conduits, and junction boxes.
          </ProductBlock>
          <ProductBlock title="Heat Trace Systems">
            HT panels, heating cables, junction boxes, splice kits, controllers, monitoring RTDs.
          </ProductBlock>
          <ProductBlock title="Lighting Solutions">
            LED, HID (metal halide, high-pressure sodium), fluorescent, Ex-proof fixtures, emergency lighting,
            floodlights.
          </ProductBlock>
          <ProductBlock title="Power Equipment">
            Distribution transformers, protective relays, circuit breakers.
          </ProductBlock>
          <ProductBlock title="Test & Measurement">
            Multimeters, clamp meters, insulation testers, power quality analyzers, energy meters, data loggers,
            oscilloscopes.
          </ProductBlock>
        </Grid>
      </Section>

      {/* INSTRUMENT */}
      <Section id="instrument">
        <PillarHead icon={GaugeIcon} tone="gold" eyebrow="Product Supply" title="Instrument" />
        <Reveal as="div" className="mb-8">
          <Lede>
            A complete range of precision instruments for measurement, control, and safety, partnering with the
            world’s leading manufacturers to ensure reliability and accuracy.
          </Lede>
        </Reveal>
        <Grid cols={2} className="gap-x-7 gap-y-0">
          <ProductBlock title="Temperature">
            RTDs, thermocouples, temperature transmitters & gauges.
          </ProductBlock>
          <ProductBlock title="Pressure">
            Pressure gauges, transmitters, transducers, switches & digital indicators.
          </ProductBlock>
          <ProductBlock title="Flow">
            DP flow meters, magnetic, vortex, ultrasonic, turbine & Coriolis mass flow meters.
          </ProductBlock>
          <ProductBlock title="Level">
            Level transmitters (radar, ultrasonic), switches, sight glasses & indicators.
          </ProductBlock>
          <ProductBlock title="Gas & Process Analysis">
            Oxygen, infrared (IR), laser gas analyzers & pH/conductivity sensors.
          </ProductBlock>
          <ProductBlock title="Control Valves & Actuators">
            Pneumatic and electric control valves & actuators.
          </ProductBlock>
          <ProductBlock title="Manifold & Instrument Valves">
            Manifold valves (2, 3 & 5-valve), needle valves, check valves, and ball valves.
          </ProductBlock>
          <ProductBlock title="Fire & Gas Detection (F&G)">
            Fire alarm control panels, smoke/heat/combustible gas detectors, manual call points, sounders &
            flashers.
          </ProductBlock>
          <ProductBlock title="Process Safety">
            Pressure safety valves (PSV), switches, and emergency shutdown (ESD) components.
          </ProductBlock>
          <ProductBlock title="Control System Components">
            Process controllers, signal conditioners, and PLC I/O modules.
          </ProductBlock>
          <div className="sm:col-span-full">
            <ProductBlock title="Instrumentation Cabling & Accessories">
              Instrumentation cabling, junction boxes, and intrinsic safety barriers.
            </ProductBlock>
          </div>
        </Grid>
      </Section>

      {/* MECHANICAL */}
      <Section id="mechanical">
        <PillarHead icon={SettingsIcon} tone="lavender" eyebrow="Product Supply" title="Mechanical" />
        <Grid cols={2} className="gap-x-7 gap-y-0">
          <ProductBlock title="Piping, Valves & Fittings">
            Pipes, tubes & fittings (flanges, elbows, tees, reducers, couplings, unions, adapters, caps,
            nipples); industrial valves (gate, globe, check, ball, butterfly); gaskets, O-rings, mechanical
            seals & industrial sealants.
          </ProductBlock>
          <ProductBlock title="Power Transmission & Motion Control">
            Ball, roller & linear bearings from leading brands; V-belts, timing belts, flat belts, multi-ribbed
            belts, pulleys; chains, sprockets & couplings.
          </ProductBlock>
          <ProductBlock title="Rotating Equipment & Support">
            Pumps, compressors, fans, blowers, turbines, genuine spare parts, industrial lubricants & automatic
            lubrication systems.
          </ProductBlock>
          <ProductBlock title="HVAC & Climate Control">
            HVAC and VRF system components & spare parts; commercial and industrial heating — radiators,
            boilers, components.
          </ProductBlock>
          <ProductBlock title="Fabrication, Construction & Structural">
            Welding consumables (electrodes, wires, gases) & equipment; metal cutting & machining supplies;
            structural steel — channels, I-beams, angles, plates.
          </ProductBlock>
          <ProductBlock title="Fastening & Assembly">
            Bolts, screws, nuts, washers, studs; construction fasteners — nails, anchors, rivets.
          </ProductBlock>
          <div className="sm:col-span-full">
            <ProductBlock title="Filtration & Fluid Conditioning">
              Hydraulic filters, air filters, oil filters, and strainers; material handling — conveyor belts,
              idlers, and components.
            </ProductBlock>
          </div>
        </Grid>
      </Section>

      {/* BRANDS */}
      <Section>
        <SectionHead eyebrow="Trusted Manufacturers" title="Brands We Represent">
          We source from globally recognized manufacturers to keep every project reliable.
        </SectionHead>
        <LogoStrip logos={PARTNER_LOGOS} large />
      </Section>

      {/* CLIENTS */}
      <Section size="sm">
        <div className="mb-2 text-center">
          <Eyebrow>Some of Our Clients</Eyebrow>
        </div>
        <LogoStrip logos={CLIENT_LOGOS} />
      </Section>

      {/* SUPPLY PROMISE */}
      <Section tone="navy">
        <Split>
          <div>
            <Eyebrow tone="light">Why Source From Us</Eyebrow>
            <h2>Our Supply Promise</h2>
            <Checklist tone="light">
              <ChecklistItem>Products sourced from globally certified manufacturers</ChecklistItem>
              <ChecklistItem>Delivered with full documentation and compliance testing</ChecklistItem>
              <ChecklistItem>Fast turnaround and technical support</ChecklistItem>
              <ChecklistItem>Integration-ready with project engineering services</ChecklistItem>
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
          title="Looking for a Specific Component?"
          text="Send us your BOQ or spec sheet and we’ll source it — reliably, and at the right price."
        >
          <CtaButton href="/en/contact/" variant="gold">
            Request a Quote
          </CtaButton>
          <CtaButton href="/en/services/" variant="outline">
            Our Services
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
