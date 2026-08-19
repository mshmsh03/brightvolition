import {
  Checklist,
  ChecklistItem,
  CtaBand,
  CtaButton,
  DataTable,
  Eyebrow,
  Lede,
  Media,
  PageHero,
  Section,
  SectionHead,
  SpecList,
  Split,
} from '../../../components/sections';

// The tool table is a list of software names and what each was used for. Like
// the construction table on the services page, it stays in English in all three
// languages — PSS®E is PSS®E on every drawing and in every ministry submittal.
const TOOLS = {
  headers: ['Tool / Software', 'Function'],
  /* eslint-disable react/jsx-key -- these are table cells, not a rendered
     list. DataTable keys every <tr> and <td> itself, and each element below
     is the single child of one <td>, so a key here would key nothing. */
  rows: [
    [<strong className="ltr-fixed">PSS®E</strong>, 'Grid modeling, power flow, fault studies'],
    [<strong className="ltr-fixed">ETAP</strong>, 'Protection coordination study'],
    ['Excel / Docs', 'Reports and Ministry submittals'],
    [<strong className="ltr-fixed">PPC</strong>, 'Power Project Control'],
  ],
  /* eslint-enable react/jsx-key */
};

export default function ProjectsEn() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/solar-panels.jpg"
        homeHref="/en/"
        homeLabel="Home"
        crumb="Projects"
        tag="2025 Model Project"
        title="Engineering: Electrical — 50MW PV Power Plant"
        lede="Reliability and Impact Study for a 50MW PV Power Plant, delivered in coordination with Iraq’s Ministry of Electricity."
      />

      {/* SNAPSHOT */}
      <Section>
        <SectionHead
          align="start"
          eyebrow="Project Snapshot"
          title="Reliability & Impact Study for 50MW PV Power Plant"
        />
        <SpecList
          items={[
            { label: 'Client', value: 'Sinoma DCC Line 2 — Delta Cement Company' },
            { label: 'Type', value: '50MW (DC) Solar Power Plant Grid Connection Study' },
            { label: 'Scope', value: 'Power System Analysis, Regulatory Technical Support' },
            { label: 'Location', value: 'Bazyan, Sulaymaniyah, Iraq' },
            { label: 'In Coordination With', value: 'Ministry of Electricity' },
            { label: 'Status', value: <span className="ltr-fixed">June – September 2025</span> },
          ]}
        />
      </Section>

      {/* SCOPE */}
      <Section>
        <Split>
          <div>
            <Eyebrow>Scope of Engineering Services</Eyebrow>
            <h2>What We Delivered</h2>
            <Checklist>
              <ChecklistItem>Power System Impact Study using PSS®E, PSCAD and ETAP</ChecklistItem>
              <ChecklistItem>Protection and Control Coordination Review</ChecklistItem>
              <ChecklistItem>
                Energy Management System (EMS) Evaluation and Operation Procedure Arrangements
              </ChecklistItem>
              <ChecklistItem>Recommendation for the Vendor and the Client</ChecklistItem>
            </Checklist>
          </div>
          <Media src="/assets/img/photos/substation.jpg" alt="High-voltage substation infrastructure" />
        </Split>
      </Section>

      {/* TOOLS */}
      <Section>
        <SectionHead eyebrow="Technical Tools & Expertise Applied" title="Tools & Software Used" />
        <DataTable headers={TOOLS.headers} rows={TOOLS.rows} />
      </Section>

      {/* REGULATORY EXPERTISE */}
      <Section tone="navy">
        <Split className="items-start">
          <div>
            <Eyebrow tone="light">Regulatory & Technical Execution</Eyebrow>
            <h2>Team Expertise in Regulatory & Technical Execution</h2>
            <Lede className="text-lavender">
              Our team brings specialized knowledge in delivering engineering studies in compliance with the
              Iraqi Grid Code and Ministry of Electricity (MoE) requirements.
            </Lede>
          </div>
          <Checklist tone="light">
            <ChecklistItem>
              Detailed power system impact studies using PSS®E — harmonic distortion analysis, reactive power
              evaluation, and back-feed risk mitigation.
            </ChecklistItem>
            <ChecklistItem>
              System modeling, simulation, and scenario-based technical recommendations.
            </ChecklistItem>
            <ChecklistItem>
              Evaluating EMS performance and settings for efficient power flow control between the PV system and
              the grid.
            </ChecklistItem>
            <ChecklistItem>
              Protection Coordination Review to assess the PV system’s safety at the grid connection point.
            </ChecklistItem>
            <ChecklistItem>
              Technical reports aligned with ministry expectations and local regulatory standards.
            </ChecklistItem>
          </Checklist>
        </Split>
      </Section>

      {/* BEYOND THIS PROJECT */}
      <Section>
        <Split>
          <Media src="/assets/img/photos/engineers-blueprint.jpg" alt="Engineers reviewing P&ID diagrams" />
          <div>
            <Eyebrow>Beyond This Project</Eyebrow>
            <h2>Every Project Backed by Root-Cause Discipline</h2>
            <Lede className="mb-6">
              Whichever system we design, build, or study, the same systematic troubleshooting methodology —
              FMEA, Fault Tree Analysis, and Ishikawa diagrams — protects reliability long after commissioning.
            </Lede>
            <CtaButton href="/en/services/#troubleshooting" variant="outlineNavy" arrow>
              See Our Methodology
            </CtaButton>
          </div>
        </Split>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title="Planning a Power or Industrial Project?"
          text="Let’s talk about feasibility, grid studies, or full EPC-style delivery for your next project."
        >
          <CtaButton href="/en/contact/" variant="gold">
            Start a Conversation
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
