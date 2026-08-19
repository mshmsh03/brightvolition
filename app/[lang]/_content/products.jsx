import { STRINGS } from './products.strings';
import { GaugeIcon, SettingsIcon, ZapIcon } from 'lucide-react';
import { CLIENT_LOGOS, PARTNER_LOGOS, pagePath } from '../../../lib/site-data';
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

export default function Products({ lang }) {
  const t = STRINGS[lang];

  return (
    <>
      <PageHero
        image="/assets/img/photos/electrical-panel.jpg"
        homeHref={pagePath(lang, 'index')}
        homeLabel={t.home}
        crumb={t.products}
        eyebrow={t.productSupplySourcing}
        title={t.aCompleteRangeOfElectrical}
        lede={t.weSupplyComponentsSystemsAnd}
      />

      {/* IN-PAGE NAV */}
      <Section size="sm">
        <ProductNav>
          <ProductNavLink href="#electrical">{t.electrical}</ProductNavLink>
          <ProductNavLink href="#instrument">{t.instrumentation}</ProductNavLink>
          <ProductNavLink href="#mechanical">{t.mechanical}</ProductNavLink>
        </ProductNav>
      </Section>

      {/* ELECTRICAL */}
      <Section id="electrical">
        <PillarHead icon={ZapIcon} tone="navy" eyebrow={t.productSupply} title={t.electrical2} />
        <Grid cols={2} className="gap-x-7 gap-y-0">
          <ProductBlock title={t.switchgearPanelComponents}>
            {t.mccbMcbRcdContactorsOverload}
          </ProductBlock>
          <ProductBlock title={t.controlPanels}>{t.lvControlPanelsPlcPanels}</ProductBlock>
          <ProductBlock title={t.controlSignalingDevices}>
            {t.pushButtonsSelectorSwitchesIndicator}
          </ProductBlock>
          <ProductBlock title={t.backupCriticalPower}>
            {t.uninterruptiblePowerSuppliesUpsBattery}
          </ProductBlock>
          <ProductBlock title={t.powerConditioning}>
            {t.voltageRegulatorsRectifiersControlTransf}
          </ProductBlock>
          <ProductBlock title={t.solarEnergySolutions}>
            {t.invertersChargeControllersSolarPanels}
          </ProductBlock>
          <ProductBlock title={t.motors}>{t.acDcMotorsLvHv}</ProductBlock>
          <ProductBlock title={t.motorControlEfficiency}>
            {t.variableSpeedDrivesVsdSoft}
          </ProductBlock>
          <ProductBlock title={t.cables}>
            {t.powerCableLvMvHv}
          </ProductBlock>
          <ProductBlock title={t.earthingGroundingSystems}>
            {t.earthRodsEarthCableEarth}
          </ProductBlock>
          <ProductBlock title={t.cableManagement}>
            {t.cableTraysLaddersConduitsAnd}
          </ProductBlock>
          <ProductBlock title={t.heatTraceSystems}>
            {t.htPanelsHeatingCablesJunction}
          </ProductBlock>
          <ProductBlock title={t.lightingSolutions}>
            {t.ledHidMetalHalideHigh}
          </ProductBlock>
          <ProductBlock title={t.powerEquipment}>
            {t.distributionTransformersProtectiveRelays}
          </ProductBlock>
          <ProductBlock title={t.testMeasurement}>
            {t.multimetersClampMetersInsulationTesters}
          </ProductBlock>
        </Grid>
      </Section>

      {/* INSTRUMENT */}
      <Section id="instrument">
        <PillarHead icon={GaugeIcon} tone="gold" eyebrow={t.productSupply2} title={t.instrument} />
        <Reveal as="div" className="mb-8">
          <Lede>
            {t.aCompleteRangeOfPrecision}
          </Lede>
        </Reveal>
        <Grid cols={2} className="gap-x-7 gap-y-0">
          <ProductBlock title={t.temperature}>
            {t.rtdsThermocouplesTemperatureTransmitters}
          </ProductBlock>
          <ProductBlock title={t.pressure}>
            {t.pressureGaugesTransmittersTransducersSwi}
          </ProductBlock>
          <ProductBlock title={t.flow}>
            {t.dpFlowMetersMagneticVortex}
          </ProductBlock>
          <ProductBlock title={t.level}>
            {t.levelTransmittersRadarUltrasonicSwitches}
          </ProductBlock>
          <ProductBlock title={t.gasProcessAnalysis}>
            {t.oxygenInfraredIrLaserGas}
          </ProductBlock>
          <ProductBlock title={t.controlValvesActuators}>
            {t.pneumaticAndElectricControlValves}
          </ProductBlock>
          <ProductBlock title={t.manifoldInstrumentValves}>
            {t.manifoldValves235}
          </ProductBlock>
          <ProductBlock title={t.fireGasDetectionFG}>
            {t.fireAlarmControlPanelsSmoke}
          </ProductBlock>
          <ProductBlock title={t.processSafety}>
            {t.pressureSafetyValvesPsvSwitches}
          </ProductBlock>
          <ProductBlock title={t.controlSystemComponents}>
            {t.processControllersSignalConditionersAnd}
          </ProductBlock>
          <div className="sm:col-span-full">
            <ProductBlock title={t.instrumentationCablingAccessories}>
              {t.instrumentationCablingJunctionBoxesAnd}
            </ProductBlock>
          </div>
        </Grid>
      </Section>

      {/* MECHANICAL */}
      <Section id="mechanical">
        <PillarHead icon={SettingsIcon} tone="lavender" eyebrow={t.productSupply3} title={t.mechanical2} />
        <Grid cols={2} className="gap-x-7 gap-y-0">
          <ProductBlock title={t.pipingValvesFittings}>
            {t.pipesTubesFittingsFlangesElbows}
          </ProductBlock>
          <ProductBlock title={t.powerTransmissionMotionControl}>
            {t.ballRollerLinearBearingsFrom}
          </ProductBlock>
          <ProductBlock title={t.rotatingEquipmentSupport}>
            {t.pumpsCompressorsFansBlowersTurbines}
          </ProductBlock>
          <ProductBlock title={t.hvacClimateControl}>
            {t.hvacAndVrfSystemComponents}
          </ProductBlock>
          <ProductBlock title={t.fabricationConstructionStructural}>
            {t.weldingConsumablesElectrodesWiresGases}
          </ProductBlock>
          <ProductBlock title={t.fasteningAssembly}>
            {t.boltsScrewsNutsWashersStuds}
          </ProductBlock>
          <div className="sm:col-span-full">
            <ProductBlock title={t.filtrationFluidConditioning}>
              {t.hydraulicFiltersAirFiltersOil}
            </ProductBlock>
          </div>
        </Grid>
      </Section>

      {/* BRANDS */}
      <Section>
        <SectionHead eyebrow={t.trustedManufacturers} title={t.brandsWeRepresent}>
          {t.weSourceFromGloballyRecognized}
        </SectionHead>
        <LogoStrip logos={PARTNER_LOGOS} large />
      </Section>

      {/* CLIENTS */}
      <Section size="sm">
        <div className="mb-2 text-center">
          <Eyebrow>{t.someOfOurClients}</Eyebrow>
        </div>
        <LogoStrip logos={CLIENT_LOGOS} />
      </Section>

      {/* SUPPLY PROMISE */}
      <Section tone="navy">
        <Split>
          <div>
            <Eyebrow tone="light">{t.whySourceFromUs}</Eyebrow>
            <h2>{t.ourSupplyPromise}</h2>
            <Checklist tone="light">
              <ChecklistItem>{t.productsSourcedFromGloballyCertified}</ChecklistItem>
              <ChecklistItem>{t.deliveredWithFullDocumentationAnd}</ChecklistItem>
              <ChecklistItem>{t.fastTurnaroundAndTechnicalSupport}</ChecklistItem>
              <ChecklistItem>{t.integrationReadyWithProjectEngineering}</ChecklistItem>
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
          title={t.lookingForASpecificComponent}
          text={t.sendUsYourBoqOr}
        >
          <CtaButton href={pagePath(lang, 'contact')} variant="gold">
            {t.requestAQuote}
          </CtaButton>
          <CtaButton href={pagePath(lang, 'services')} variant="outline">
            {t.ourServices}
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
