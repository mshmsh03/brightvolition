import { STRINGS } from './services.strings';
import { Building2Icon, ClipboardCheckIcon, SettingsIcon, TruckIcon, WrenchIcon } from 'lucide-react';
import { CONSTRUCTION_TABLE, pagePath } from '../../../lib/site-data';
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

      {/* THE FIVE PILLARS */}
      <Section>
        <SectionHead eyebrow={t.whatWeDo} title={t.fiveServicePillars} />
        <Grid cols={5}>
          <Card icon={SettingsIcon} title={t.designEngineering} />
          <Card icon={Building2Icon} title={t.constructionInstallation} />
          <Card icon={ClipboardCheckIcon} title={t.systemCommissioningStartUp} />
          <Card icon={TruckIcon} title={t.productSupplySourcing} />
          <Card icon={WrenchIcon} title={t.operationsSupportTroubleshooting} />
        </Grid>
      </Section>

      {/* ENGINEERING DISCIPLINES */}
      <Section id="engineering">
        <SectionHead eyebrow={t.ourEngineeringServicesInclude} title={t.fiveEngineeringDisciplines} />
        <Grid cols={2}>
          <Card>
            <Tag tone="gold">01</Tag>
            <h3 className="mt-3.5 mb-2.5 text-card-title">{t.feasibilityStudies}</h3>
            <CardList>
              <CardListItem>{t.technicalAndEconomicFeasibilityStudies}</CardListItem>
              <CardListItem>{t.conceptualDesignAndProjectScoping}</CardListItem>
              <CardListItem>{t.siteSurveysAndDataCollection}</CardListItem>
            </CardList>
          </Card>
          <Card>
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
          <Card>
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
          <Card>
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
          <Card className="sm:col-span-full">
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
