import { STRINGS } from './about.strings';
import { DownloadIcon, LeafIcon, LightbulbIcon, UsersIcon } from 'lucide-react';
import { PROFILE_PDF, pagePath } from '../../../lib/site-data';
import {
  Card,
  CardList,
  CardListItem,
  CardText,
  Checklist,
  ChecklistItem,
  CtaBand,
  CtaButton,
  Eyebrow,
  Grid,
  Lede,
  NumCard,
  PageHero,
  Section,
  SectionHead,
  Split,
  Timeline,
  TimelineEntry,
  TimelineItem,
} from '../../../components/sections';

export default function About({ lang }) {
  const t = STRINGS[lang];

  return (
    <>
      <PageHero
        image="/assets/img/photos/transformer-building.jpg"
        homeHref={pagePath(lang, 'index')}
        homeLabel={t.home}
        crumb={t.aboutUs}
        eyebrow={t.whoWeAre}
        title={t.aRegisteredKrgEngineeringCompany}
        lede={t.brightVolitionWasFoundedIn}
      >
        <CtaButton href={PROFILE_PDF} variant="gold" download>
          <DownloadIcon />
          {t.downloadOurFullCompanyProfile}
        </CtaButton>
      </PageHero>

      {/* MISSION */}
      <Section size="tight">
        <CtaBand align="start" eyebrow={t.ourMission} title={t.toEmpowerClientsByProviding} />
      </Section>

      {/* MILESTONES */}
      <Section>
        <SectionHead eyebrow={t.companyOverview} title={t.foundingVisionMilestonesFutureOutlook} />
        <Timeline>
          <TimelineItem title={t.foundingVision}>
            <TimelineEntry>{t.leadInInnovativeSustainableAnd}</TimelineEntry>
            <TimelineEntry>{t.empowerClientsToAchieveLasting}</TimelineEntry>
          </TimelineItem>
          <TimelineItem title={t.milestones}>
            <TimelineEntry>
              <strong>2023:</strong> {t.incorporatedLaunchedFirstProductsService}
            </TimelineEntry>
            <TimelineEntry>
              <strong>2024:</strong> {t.broadenedOurServicesAndUpgraded}
            </TimelineEntry>
            <TimelineEntry>
              <strong>2025:</strong> {t.diversifiedServicesEnteredNewSectors}
            </TimelineEntry>
          </TimelineItem>
          <TimelineItem title={t.futureOutlook}>
            <TimelineEntry>{t.commitToQualitySustainabilityAnd}</TimelineEntry>
            <TimelineEntry>{t.driveInnovationToStayAhead}</TimelineEntry>
            <TimelineEntry>{t.expandGloballyWhileFocusingOn}</TimelineEntry>
          </TimelineItem>
        </Timeline>
      </Section>

      {/* POLICY */}
      <Section>
        <Split className="items-start">
          <div>
            <Eyebrow>{t.ourPolicy}</Eyebrow>
            <h2>{t.qualityDeliveredByDesign}</h2>
            <Lede className="mb-4">
              {t.brightVolitionIsCommittedTo}
            </Lede>
            <p>
              {t.thisPolicyProvidesTheFramework}
            </p>
          </div>
          <Checklist>
            <ChecklistItem>{t.ensureComplianceWithLegalRegulations}</ChecklistItem>
            <ChecklistItem>
              {t.striveForCustomerSatisfactionThrough}
            </ChecklistItem>
            <ChecklistItem>
              {t.fosterACultureOfContinuous}
            </ChecklistItem>
            <ChecklistItem>
              {t.empowerEmployeesThroughTrainingTeamwork}
            </ChecklistItem>
            <ChecklistItem>
              {t.strengthenPartnershipsWithClientsAnd}
            </ChecklistItem>
          </Checklist>
        </Split>
      </Section>

      {/* HOW WE WORK */}
      <Section>
        <SectionHead eyebrow={t.howBvServesItsCustomers} title={t.howWeWork} />
        <Grid cols={3} className="pt-5">
          <NumCard num="1" title={t.confidentialityFirst}>
            <CardText>
              {t.wePrioritizeTheConfidentialityOf}
            </CardText>
          </NumCard>
          <NumCard num="2" title={t.streamlinedSupplyChain}>
            <CardText>
              {t.efficientSupplyChainManagementGuarantees}
            </CardText>
          </NumCard>
          <NumCard num="3" title={t.uncompromisingQualityReliability}>
            <CardText>
              {t.wePartnerWithReputableSuppliers}
            </CardText>
          </NumCard>
          <NumCard num="4" title={t.tailoredCostEffective}>
            <CardText>{t.everySolutionIsScopedAround}</CardText>
          </NumCard>
          <NumCard num="5" title={t.collaborativeApproach}>
            <CardText>
              {t.weWorkCloselyWithClients}
            </CardText>
          </NumCard>
          <NumCard num="6" title={t.commitmentToExcellence}>
            <CardText>{t.weAreCommittedToDelivering}</CardText>
          </NumCard>
        </Grid>
      </Section>

      {/* WHY BV IS THE RIGHT CHOICE */}
      <Section tone="navy">
        <SectionHead
          eyebrow={t.whyBvIsTheRight}
          tone="light"
          title={t.customerFocusInnovationResponsibility}
        />
        <Grid cols={3}>
          <Card icon={UsersIcon} tone="dark" title={t.customerFocus}>
            <CardList>
              <CardListItem>
                {t.wePlaceAHighValue}
              </CardListItem>
              <CardListItem>
                {t.prioritizingExcellentServiceAndBuilding}
              </CardListItem>
            </CardList>
          </Card>
          <Card icon={LightbulbIcon} tone="dark" title={t.innovation}>
            <CardList>
              <CardListItem>
                {t.weStayAheadOfThe}
              </CardListItem>
              <CardListItem>
                {t.investmentInRDEnables}
              </CardListItem>
            </CardList>
          </Card>
          <Card icon={LeafIcon} tone="dark" title={t.sustainabilitySocialResponsibility}>
            <CardList>
              <CardListItem>{t.offeringEnvironmentallyFriendlyEngineeri}</CardListItem>
              <CardListItem>
                {t.healthSafetyRigorousStandardsFor}
              </CardListItem>
              <CardListItem>{t.energyEfficientDesignsThatReduce}</CardListItem>
              <CardListItem>
                {t.csrEngagementSupportingLocalCommunities}
              </CardListItem>
            </CardList>
          </Card>
        </Grid>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title={t.wantToKnowMoreAbout}
          text={t.seeHowOurEngineeringConstruction}
        >
          <CtaButton href={pagePath(lang, 'services')} variant="gold">
            {t.ourServices}
          </CtaButton>
          <CtaButton href={pagePath(lang, 'contact')} variant="outline">
            {t.contactUs}
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
