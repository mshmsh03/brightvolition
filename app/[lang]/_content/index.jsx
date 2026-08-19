import { STRINGS } from './index.strings';
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
import { CLIENT_LOGOS, PARTNER_LOGOS, pagePath } from '../../../lib/site-data';
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

export default function Home({ lang }) {
  const t = STRINGS[lang];

  return (
    <>
      <Hero image="/assets/img/photos/power-plant.jpg">
        <h1 className="m-wipe text-cream" style={{ '--m-delay': '120ms' }}>
          {t.industrialSupplyEngineeringServices}
        </h1>
        <Lede className="m-register text-lavender" style={{ '--m-delay': '320ms' }}>
          {t.brightVolitionDeliversElectricalInstrume}
        </Lede>
        <div className="m-register mt-8 flex flex-wrap gap-3.5" style={{ '--m-delay': '420ms' }}>
          <CtaButton href={pagePath(lang, 'services')} variant="gold" arrow>
            {t.exploreOurServices}
          </CtaButton>
          <CtaButton href={pagePath(lang, 'contact')} variant="outline">
            {t.talkToOurTeam}
          </CtaButton>
        </div>
      </Hero>

      {/* WHAT WE DO */}
      <Section id="what-we-do">
        <SectionHead eyebrow={t.whatWeDo} title={t.fiveWaysWeDeliverEngineering}>
          {t.deliveringSpecializedEngineeringServices}
        </SectionHead>
        <Grid cols={5}>
          <Card icon={SettingsIcon} title={t.designEngineering}>
            <CardText>
              {t.feasibilityStudiesConceptualDesignAnd}
            </CardText>
          </Card>
          <Card icon={Building2Icon} title={t.constructionInstallation}>
            <CardText>
              {t.fullFieldExecutionAcrossElectrical}
            </CardText>
          </Card>
          <Card icon={ClipboardCheckIcon} title={t.systemCommissioningStartUp}>
            <CardText>
              {t.structuredPreCommissioningTestingAnd}
            </CardText>
          </Card>
          <Card icon={TruckIcon} title={t.productSupplySourcing}>
            <CardText>
              {t.electricalInstrumentationMechanicalCompo}
            </CardText>
          </Card>
          <Card icon={WrenchIcon} title={t.operationsSupportTroubleshooting}>
            <CardText>
              {t.rootCauseAnalysisAndRapid}
            </CardText>
          </Card>
        </Grid>
      </Section>

      {/* ABOUT TEASER */}
      <Section>
        <Split>
          <Media src="/assets/img/photos/transformer-building.jpg" alt="Electrical substation infrastructure" />
          <div>
            <Eyebrow>{t.whoWeAre}</Eyebrow>
            <h2>{t.engineeringLedClientFocusedBuilt}</h2>
            <Lede className="mb-5">
              {t.brightVolitionWasFoundedIn}
            </Lede>
            <Checklist>
              <ChecklistItem>{t.leadInInnovativeSustainableReliable}</ChecklistItem>
              <ChecklistItem>{t.registeredKrgCompanyWithA}</ChecklistItem>
              <ChecklistItem>{t.confidentialTailoredAndCostEffective}</ChecklistItem>
            </Checklist>
            <div className="mt-7">
              <CtaButton href={pagePath(lang, 'about')} variant="outlineNavy" arrow>
                {t.moreAboutUs}
              </CtaButton>
            </div>
          </div>
        </Split>
      </Section>

      {/* FEATURED PROJECT */}
      <Section tone="navy">
        <Split>
          <div>
            <Eyebrow tone="light">{t.n2025ModelProject}</Eyebrow>
            <h2>{t.reliabilityGridImpactStudyFor}</h2>
            <Lede className="mb-6 text-lavender">
              {t.forSinomaDccLine2}
            </Lede>
            <Stats>
              <Stat value="50MW">{t.dcSolarPlantStudied}</Stat>
              <Stat value="3">{t.toolsPssEPscadEtap}</Stat>
              <Stat value="4">{t.monthsOfEngineeringScope}</Stat>
            </Stats>
            <div className="mt-8">
              <CtaButton href={pagePath(lang, 'projects')} variant="gold" arrow>
                {t.viewProjectDetails}
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
        <SectionHead eyebrow={t.whyBrightVolition} title={t.aPartnerThatServesYou} />
        <Grid cols={3}>
          <Card icon={LockIcon} title={t.confidentialityFirst}>
            <CardText>{t.sensitiveClientAndSupplierInformation}</CardText>
          </Card>
          <Card icon={TargetIcon} title={t.tailoredCostEffective}>
            <CardText>{t.solutionsScopedToYourExact}</CardText>
          </Card>
          <Card icon={HandshakeIcon} title={t.collaborativeApproach}>
            <CardText>
              {t.weWorkCloselyWithClients}
            </CardText>
          </Card>
          <Card icon={ZapIcon} title={t.streamlinedSupplyChain}>
            <CardText>{t.efficientLogisticsThatMinimizeDelays}</CardText>
          </Card>
          <Card icon={AwardIcon} title={t.uncompromisingQuality}>
            <CardText>
              {t.wePartnerOnlyWithReputable}
            </CardText>
          </Card>
          <Card icon={LightbulbIcon} title={t.innovationDriven}>
            <CardText>
              {t.investmentInRDKeeps}
            </CardText>
          </Card>
        </Grid>
      </Section>

      {/* PARTNERS */}
      <Section size="sm">
        <div className="mb-2 text-center">
          <Eyebrow>{t.brandsWeRepresent}</Eyebrow>
        </div>
        <LogoStrip logos={PARTNER_LOGOS} />
      </Section>

      {/* CLIENTS */}
      <Section size="sm">
        <div className="mb-2 text-center">
          <Eyebrow>{t.someOfOurClients}</Eyebrow>
        </div>
        <LogoStrip logos={CLIENT_LOGOS} />
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          eyebrow={t.readyToCollaborate}
          title={t.letSBuildSomethingReliable}
          text={t.reachOutWithYourInquiries}
        >
          <CtaButton href={pagePath(lang, 'contact')} variant="gold" arrow>
            {t.contactUs}
          </CtaButton>
          <CtaButton href="mailto:info@brightvolition.com" variant="outline">
            info@brightvolition.com
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
