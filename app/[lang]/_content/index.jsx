import { STRINGS } from './index.strings';
import { STRINGS as BLOG } from './blog.strings';
import { CLIENT_LOGOS, EMAIL, PARTNER_LOGOS, pagePath } from '../../../lib/site-data';
import { getPosts } from '../../../lib/blog.mjs';
import { postPath } from '../../../lib/paths.mjs';
import { LatestPost } from '../../../components/blog';
import {
  CardList,
  CardListItem,
  CardText,
  Checklist,
  ChecklistItem,
  CtaBand,
  CtaButton,
  Entries,
  Entry,
  Eyebrow,
  Hero,
  Lede,
  LogoStrip,
  Media,
  Reveal,
  Section,
  SectionHead,
  Split,
} from '../../../components/sections';

export default function Home({ lang }) {
  const t = STRINGS[lang];
  const blog = BLOG[lang];
  // getPosts() is newest first, so this is always the latest article.
  const [latest] = getPosts();

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
        <SectionHead title={t.sixWaysWeDeliverEngineering}>
          {t.deliveringSpecializedEngineeringServices}
        </SectionHead>
        <Entries>
          <Entry title={t.designEngineering}>
            <CardText>{t.feasibilityStudiesConceptualDesignAnd}</CardText>
          </Entry>
          <Entry title={t.constructionInstallation}>
            <CardText>{t.fullFieldExecutionAcrossElectrical}</CardText>
          </Entry>
          <Entry title={t.systemCommissioningStartUp}>
            <CardText>{t.structuredPreCommissioningTestingAnd}</CardText>
          </Entry>
          <Entry title={t.productSupplySourcing}>
            <CardText>{t.electricalInstrumentationMechanicalCompo}</CardText>
          </Entry>
          <Entry title={t.operationsSupportTroubleshooting}>
            <CardText>{t.rootCauseAnalysisAndRapid}</CardText>
          </Entry>
          <Entry title={t.contractingServices}>
            <CardText>{t.contractingServicesSummary}</CardText>
          </Entry>
        </Entries>
      </Section>

      {/* ABOUT TEASER */}
      <Section>
        <Split>
          <Media src="/assets/img/photos/transformer-building.jpg" alt="Electrical substation infrastructure" />
          <div>
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
            {/* Plain facts, not a row of giant numerals: "3" and "4" are not
                statistics, and the plant's size is already in the heading. */}
            <CardList className="mt-0">
              <CardListItem>{t.toolsPssEPscadEtap}</CardListItem>
              <CardListItem>4 {t.monthsOfEngineeringScope}</CardListItem>
            </CardList>
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
        {/* The heading sits beside its list rather than centred above it, so
            the page is not the same block twice. */}
        <div className="grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <Reveal as="div">
            <h2 className="mb-0">{t.aPartnerThatServesYou}</h2>
          </Reveal>
          <Entries cols={2}>
            <Entry title={t.confidentialityFirst}>
              <CardText>{t.sensitiveClientAndSupplierInformation}</CardText>
            </Entry>
            <Entry title={t.tailoredCostEffective}>
              <CardText>{t.solutionsScopedToYourExact}</CardText>
            </Entry>
            <Entry title={t.collaborativeApproach}>
              <CardText>{t.weWorkCloselyWithClients}</CardText>
            </Entry>
            <Entry title={t.streamlinedSupplyChain}>
              <CardText>{t.efficientLogisticsThatMinimizeDelays}</CardText>
            </Entry>
            <Entry title={t.uncompromisingQuality}>
              <CardText>{t.wePartnerOnlyWithReputable}</CardText>
            </Entry>
            <Entry title={t.innovationDriven}>
              <CardText>{t.investmentInRDKeeps}</CardText>
            </Entry>
          </Entries>
        </div>
      </Section>

      {/* FROM THE BLOG */}
      {latest ? (
        <Section size="tight" className="pt-0 md:pt-0">
          <LatestPost
            href={postPath(lang, latest.slug)}
            eyebrow={blog.fromOurBlog}
            title={latest[lang].title}
            summary={latest[lang].summary}
            readLabel={blog.readArticle}
          />
        </Section>
      ) : null}

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
          title={t.letSBuildSomethingReliable}
          text={t.reachOutWithYourInquiries}
        >
          <CtaButton href={pagePath(lang, 'contact')} variant="gold" arrow>
            {t.contactUs}
          </CtaButton>
          <CtaButton href={`mailto:${EMAIL}`} variant="outline">
            {EMAIL}
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
