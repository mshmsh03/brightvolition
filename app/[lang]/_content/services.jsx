import { STRINGS } from './services.strings';
import { Building2Icon, ClipboardCheckIcon, FileSignatureIcon, SettingsIcon, TruckIcon, WrenchIcon } from 'lucide-react';
import { CONSTRUCTION_TABLE, pagePath } from '../../../lib/site-data';
import {
  Card,
  CardList,
  CardListItem,
  CardText,
  CtaBand,
  CtaButton,
  DataTable,
  Grid,
  Lede,
  PageHero,
  ProductNav,
  ProductNavLink,
  Section,
  SectionHead,
  Step,
  Steps,
  Tag,
} from '../../../components/sections';

export default function Services({ lang }) {
  const t = STRINGS[lang];

  return (
    <>
      <PageHero
        image="/assets/img/photos/piping-instrumentation.jpg"
        homeHref={pagePath(lang, 'index')}
        homeLabel={t.home}
        crumb={t.services}
        eyebrow={t.whatWeOffer}
        title={t.engineeringConstructionSupplyUnderOne}
        lede={t.deliveringSpecializedEngineeringServices}
      />

      {/* THE SIX PILLARS */}
      <Section>
        <SectionHead eyebrow={t.whatWeDo} title={t.sixServicePillars} />
        <Grid cols={6}>
          <Card icon={SettingsIcon} title={t.designEngineering}>
            <CardText>{t.feasibilityStudiesConceptualDesignAnd}</CardText>
          </Card>
          <Card icon={Building2Icon} title={t.constructionInstallation}>
            <CardText>{t.fullFieldExecutionAcrossElectrical}</CardText>
          </Card>
          <Card icon={ClipboardCheckIcon} title={t.systemCommissioningStartUp}>
            <CardText>{t.structuredPreCommissioningTestingAnd}</CardText>
          </Card>
          <Card icon={TruckIcon} title={t.productSupplySourcing}>
            <CardText>{t.electricalInstrumentationMechanicalCompo}</CardText>
          </Card>
          <Card icon={WrenchIcon} title={t.operationsSupportTroubleshooting}>
            <CardText>{t.rootCauseAnalysisAndRapid}</CardText>
          </Card>
          <Card icon={FileSignatureIcon} title={t.contractingServices}>
            <CardText>{t.contractingServicesSummary}</CardText>
          </Card>
        </Grid>
      </Section>

      {/* ENGINEERING DISCIPLINES */}
      <Section id="engineering">
        <SectionHead eyebrow={t.ourEngineeringServicesInclude} title={t.fiveEngineeringDisciplines} />
        <ProductNav>
          <ProductNavLink href="#feasibility">{t.feasibilityStudies}</ProductNavLink>
          <ProductNavLink href="#electrical-eng">{t.electricalEngineering}</ProductNavLink>
          <ProductNavLink href="#mechanical-eng">{t.mechanicalEngineering}</ProductNavLink>
          <ProductNavLink href="#instrumentation-eng">{t.instrumentationEngineering}</ProductNavLink>
          <ProductNavLink href="#automation">{t.automationControl}</ProductNavLink>
        </ProductNav>
        <Grid cols={2}>
          <Card id="feasibility">
            <Tag tone="gold">01</Tag>
            <h3 className="mt-3.5 mb-2.5 text-card-title">{t.feasibilityStudies}</h3>
            <CardList>
              <CardListItem>{t.technicalAndEconomicFeasibilityStudies}</CardListItem>
              <CardListItem>{t.conceptualDesignAndProjectScoping}</CardListItem>
              <CardListItem>{t.siteSurveysAndDataCollection}</CardListItem>
            </CardList>
          </Card>
          <Card id="electrical-eng">
            <Tag tone="gold">02</Tag>
            <h3 className="mt-3.5 mb-2.5 text-card-title">{t.electricalEngineering}</h3>
            <CardList>
              <CardListItem>{t.detailedElectricalDesignLvMv}</CardListItem>
              <CardListItem>{t.powerManagementSystems}</CardListItem>
              <CardListItem>{t.protectionCoordinationStudies}</CardListItem>
              <CardListItem>{t.loadFlowShortCircuitStability}</CardListItem>
              <CardListItem>{t.harmonicAnalysisAndPowerQuality}</CardListItem>
              <CardListItem>{t.powerSystemSimulationEtapPscad}</CardListItem>
              <CardListItem>{t.scadaAndAutomationIntegration}</CardListItem>
            </CardList>
          </Card>
          <Card id="mechanical-eng">
            <Tag tone="gold">03</Tag>
            <h3 className="mt-3.5 mb-2.5 text-card-title">{t.mechanicalEngineering}</h3>
            <CardList>
              <CardListItem>{t.cableTrayAndCableLadder}</CardListItem>
              <CardListItem>{t.hvacSystemsDuctsDampersVrf}</CardListItem>
              <CardListItem>{t.tankPipingPaintingInspection}</CardListItem>
              <CardListItem>{t.pipeInstallationWelding}</CardListItem>
              <CardListItem>{t.nonDestructiveTestingPtRt}</CardListItem>
              <CardListItem>{t.rotatingEquipmentInstallation}</CardListItem>
              <CardListItem>{t.fireFightingSystemsPumpsSprinklers}</CardListItem>
              <CardListItem>{t.lubeOilFiltrationTreatment}</CardListItem>
              <CardListItem>{t.structuralSteelInstallation}</CardListItem>
            </CardList>
          </Card>
          <Card id="instrumentation-eng">
            <Tag tone="gold">04</Tag>
            <h3 className="mt-3.5 mb-2.5 text-card-title">{t.instrumentationEngineering}</h3>
            <CardList>
              <CardListItem>
                {t.fieldInstrumentSpecificationSizingPressu}
              </CardListItem>
              <CardListItem>{t.controlLoopDesignAndInstrument}</CardListItem>
              <CardListItem>{t.hookUpDrawingsAndInstrument}</CardListItem>
              <CardListItem>{t.junctionBoxMarshallingCabinetLayout}</CardListItem>
              <CardListItem>{t.fireGasFGDetection}</CardListItem>
            </CardList>
          </Card>
          <Card id="automation" className="sm:col-span-full">
            <Tag tone="gold">05</Tag>
            <h3 className="mt-3.5 mb-2.5 text-card-title">{t.automationControl}</h3>
            <CardList columns>
              <CardListItem>{t.dcsPlcScadaArchitectureDesign}</CardListItem>
              <CardListItem>{t.controlPhilosophyAndLogicDevelopment}</CardListItem>
              <CardListItem>{t.hmiDesignAndOperatorInterface}</CardListItem>
              <CardListItem>{t.analyzerSystemIntegrationGasLiquid}</CardListItem>
              <CardListItem>{t.dcsPlcPanelWiringAnd}</CardListItem>
              <CardListItem>{t.preCommissioningCalibrationCommissioning}</CardListItem>
            </CardList>
          </Card>
        </Grid>
      </Section>

      {/* CONSTRUCTION CAPABILITY */}
      <Section id="construction">
        <SectionHead eyebrow={t.fieldExecution} title={t.constructionCapability}>
          {t.aSingleFieldTeamExecuting}
        </SectionHead>
        <DataTable headers={CONSTRUCTION_TABLE.headers} rows={CONSTRUCTION_TABLE.rows} />
      </Section>

      {/* CONTRACTING SERVICES */}
      <Section id="contracting">
        <SectionHead eyebrow={t.contractingEyebrow} title={t.comprehensiveEpcContracting}>
          {t.brightVolitionProvidesEndToEnd}
        </SectionHead>
        <Lede className="mx-auto mb-10 text-center">{t.whetherActingAsAPrime}</Lede>
        <Grid cols={2}>
          <Card>
            <h3 className="mb-3 text-card-title">{t.coreCapabilities}</h3>
            <CardList>
              <CardListItem>{t.electroMechanicalContracting}</CardListItem>
              <CardListItem>{t.procurementLogistics}</CardListItem>
              <CardListItem>{t.projectManagementBullet}</CardListItem>
            </CardList>
          </Card>
          <Card>
            <h3 className="mb-3 text-card-title">{t.whyBrightVolitionContracting}</h3>
            <CardList>
              <CardListItem>{t.singlePointAccountability}</CardListItem>
              <CardListItem>{t.fullCompliance}</CardListItem>
              <CardListItem>{t.precisionExecution}</CardListItem>
            </CardList>
          </Card>
        </Grid>
        <Card className="mt-7">
          <h3 className="mb-2.5 text-card-title">{t.contractsManagement}</h3>
          <CardText className="mb-1">{t.fullLifecycleCommercialLegal}</CardText>
          <CardList columns>
            <CardListItem>{t.biddingAdministration}</CardListItem>
            <CardListItem>{t.variationsClaims}</CardListItem>
            <CardListItem>{t.subcontractsCloseout}</CardListItem>
          </CardList>
        </Card>
      </Section>

      {/* TROUBLESHOOTING */}
      <Section tone="navy" id="troubleshooting">
        <SectionHead
          eyebrow={t.operationsSupport}
          tone="light"
          title={t.advancedTechnicalTroubleshootingRootCaus}
        >
          {t.aSystematicDataDrivenApproach}
        </SectionHead>
        <Steps>
          <Step num="1" title={t.problemDefinitionDataCollection}>
            <p>{t.thoroughReviewOfSystemDocumentation}</p>
          </Step>
          <Step num="2" title={t.structuredAnalysisRootCauseId}>
            <p>
              {t.fmeaFaultTreeAnalysisFta}
            </p>
          </Step>
          <Step num="3" title={t.solutionImplementationValidation}>
            <p>
              {t.weDevelopAndExecuteA}
            </p>
          </Step>
        </Steps>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title={t.haveAScopeInMind}
          text={t.sendUsYourRequirementsAnd}
        >
          <CtaButton href={pagePath(lang, 'contact')} variant="gold">
            {t.requestAQuote}
          </CtaButton>
          <CtaButton href={pagePath(lang, 'products')} variant="outline">
            {t.browseProducts}
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
