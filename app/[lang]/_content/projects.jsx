import { STRINGS } from './projects.strings';
import { pagePath } from '../../../lib/site-data';
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

export default function Projects({ lang }) {
  const t = STRINGS[lang];

  return (
    <>
      <PageHero
        image="/assets/img/photos/solar-panels.jpg"
        homeHref={pagePath(lang, 'index')}
        homeLabel={t.home}
        crumb={t.projects}
        tag={t.n2025ModelProject}
        title={t.engineeringElectrical50mwPvPower}
        lede={t.reliabilityAndImpactStudyFor}
      />

      {/* SNAPSHOT */}
      <Section>
        <SectionHead
          align="start"
          eyebrow={t.projectSnapshot}
          title={t.reliabilityImpactStudyFor50mw}
        />
        <SpecList
          items={[
            { label: t.client, value: t.sinomaDccLine2Delta },
            { label: t.type, value: t.n50mwDcSolarPowerPlant },
            { label: t.scope, value: t.powerSystemAnalysisRegulatoryTechnical },
            { label: t.location, value: t.bazyanSulaymaniyahIraq },
            { label: t.inCoordinationWith, value: t.ministryOfElectricity },
            { label: t.status, value: <span className="ltr-fixed">June – September 2025</span> },
          ]}
        />
      </Section>

      {/* SCOPE */}
      <Section>
        <Split>
          <div>
            <Eyebrow>{t.scopeOfEngineeringServices}</Eyebrow>
            <h2>{t.whatWeDelivered}</h2>
            <Checklist>
              <ChecklistItem>{t.powerSystemImpactStudyUsing}</ChecklistItem>
              <ChecklistItem>{t.protectionAndControlCoordinationReview}</ChecklistItem>
              <ChecklistItem>
                {t.energyManagementSystemEmsEvaluation}
              </ChecklistItem>
              <ChecklistItem>{t.recommendationForTheVendorAnd}</ChecklistItem>
            </Checklist>
          </div>
          <Media src="/assets/img/photos/substation.jpg" alt="High-voltage substation infrastructure" />
        </Split>
      </Section>

      {/* TOOLS */}
      <Section>
        <SectionHead eyebrow={t.technicalToolsExpertiseApplied} title={t.toolsSoftwareUsed} />
        <DataTable headers={TOOLS.headers} rows={TOOLS.rows} />
      </Section>

      {/* REGULATORY EXPERTISE */}
      <Section tone="navy">
        <Split className="items-start">
          <div>
            <Eyebrow tone="light">{t.regulatoryTechnicalExecution}</Eyebrow>
            <h2>{t.teamExpertiseInRegulatoryTechnical}</h2>
            <Lede className="text-lavender">
              {t.ourTeamBringsSpecializedKnowledge}
            </Lede>
          </div>
          <Checklist tone="light">
            <ChecklistItem>
              {t.detailedPowerSystemImpactStudies}
            </ChecklistItem>
            <ChecklistItem>
              {t.systemModelingSimulationAndScenario}
            </ChecklistItem>
            <ChecklistItem>
              {t.evaluatingEmsPerformanceAndSettings}
            </ChecklistItem>
            <ChecklistItem>
              {t.protectionCoordinationReviewToAssess}
            </ChecklistItem>
            <ChecklistItem>
              {t.technicalReportsAlignedWithMinistry}
            </ChecklistItem>
          </Checklist>
        </Split>
      </Section>

      {/* BEYOND THIS PROJECT */}
      <Section>
        <Split>
          <Media src="/assets/img/photos/engineers-blueprint.jpg" alt="Engineers reviewing P&ID diagrams" />
          <div>
            <Eyebrow>{t.beyondThisProject}</Eyebrow>
            <h2>{t.everyProjectBackedByRoot}</h2>
            <Lede className="mb-6">
              {t.whicheverSystemWeDesignBuild}
            </Lede>
            <CtaButton href={`${pagePath(lang, 'services')}#troubleshooting`} variant="outlineNavy" arrow>
              {t.seeOurMethodology}
            </CtaButton>
          </div>
        </Split>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title={t.planningAPowerOrIndustrial}
          text={t.letSTalkAboutFeasibility}
        >
          <CtaButton href={pagePath(lang, 'contact')} variant="gold">
            {t.startAConversation}
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
