import { DownloadIcon, LeafIcon, LightbulbIcon, UsersIcon } from 'lucide-react';
import { PROFILE_PDF } from '../../../lib/site-data';
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

export default function AboutEn() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/transformer-building.jpg"
        homeHref="/en/"
        homeLabel="Home"
        crumb="About Us"
        eyebrow="Who We Are"
        title="A Registered KRG Engineering Company, Built on Trust"
        lede="Bright Volition was founded in 2022 as an engineering office specializing in Electrical, Instrumentation, and Mechanical services."
      >
        <CtaButton href={PROFILE_PDF} variant="gold" download>
          <DownloadIcon />
          Download Our Full Company Profile
        </CtaButton>
      </PageHero>

      {/* MISSION */}
      <Section size="tight">
        <CtaBand align="start" eyebrow="Our Mission" title="To empower clients by providing smart, sustainable, and cost-effective engineering services that drive lasting value." />
      </Section>

      {/* MILESTONES */}
      <Section>
        <SectionHead eyebrow="Company Overview" title="Founding Vision, Milestones & Future Outlook" />
        <Timeline>
          <TimelineItem title="Founding Vision">
            <TimelineEntry>Lead in innovative, sustainable, and reliable engineering solutions.</TimelineEntry>
            <TimelineEntry>Empower clients to achieve lasting excellence.</TimelineEntry>
          </TimelineItem>
          <TimelineItem title="Milestones">
            <TimelineEntry>
              <strong>2023:</strong> Incorporated, launched first products & services.
            </TimelineEntry>
            <TimelineEntry>
              <strong>2024:</strong> Broadened our services and upgraded our office to a registered company in
              the KRG.
            </TimelineEntry>
            <TimelineEntry>
              <strong>2025:</strong> Diversified services; entered new sectors with advanced engineering
              solutions.
            </TimelineEntry>
          </TimelineItem>
          <TimelineItem title="Future Outlook">
            <TimelineEntry>Commit to quality, sustainability, and responsibility.</TimelineEntry>
            <TimelineEntry>Drive innovation to stay ahead of trends.</TimelineEntry>
            <TimelineEntry>Expand globally while focusing on customer satisfaction.</TimelineEntry>
          </TimelineItem>
        </Timeline>
      </Section>

      {/* POLICY */}
      <Section>
        <Split className="items-start">
          <div>
            <Eyebrow>Our Policy</Eyebrow>
            <h2>Quality, Delivered by Design</h2>
            <Lede className="mb-4">
              Bright Volition is committed to delivering innovative, sustainable, and reliable engineering
              solutions, product supply, and construction services that meet customer requirements and exceed
              expectations.
            </Lede>
            <p>
              This policy provides the framework for setting and reviewing our quality objectives and is
              communicated to all employees and stakeholders to ensure understanding and effective
              implementation.
            </p>
          </div>
          <Checklist>
            <ChecklistItem>Ensure compliance with legal regulations and contractual obligations.</ChecklistItem>
            <ChecklistItem>
              Strive for customer satisfaction through high-quality products, services, and solutions.
            </ChecklistItem>
            <ChecklistItem>
              Foster a culture of continuous improvement in all processes, systems, and performance.
            </ChecklistItem>
            <ChecklistItem>
              Empower employees through training, teamwork, accountability, and well-being.
            </ChecklistItem>
            <ChecklistItem>
              Strengthen partnerships with clients and suppliers to create long-term value.
            </ChecklistItem>
          </Checklist>
        </Split>
      </Section>

      {/* HOW WE WORK */}
      <Section>
        <SectionHead eyebrow="How BV Serves Its Customers" title="How We Work" />
        <Grid cols={3} className="pt-5">
          <NumCard num="1" title="Confidentiality First">
            <CardText>
              We prioritize the confidentiality of both our customers and suppliers, ensuring that all sensitive
              information remains secure and protected.
            </CardText>
          </NumCard>
          <NumCard num="2" title="Streamlined Supply Chain">
            <CardText>
              Efficient supply chain management guarantees timely delivery, minimizing delays and optimizing
              performance.
            </CardText>
          </NumCard>
          <NumCard num="3" title="Uncompromising Quality & Reliability">
            <CardText>
              We partner with reputable suppliers so every product and service meets the highest standards.
            </CardText>
          </NumCard>
          <NumCard num="4" title="Tailored & Cost-Effective">
            <CardText>Every solution is scoped around your operational and budget realities.</CardText>
          </NumCard>
          <NumCard num="5" title="Collaborative Approach">
            <CardText>
              We work closely with clients to understand their needs and provide the best possible solutions.
            </CardText>
          </NumCard>
          <NumCard num="6" title="Commitment to Excellence">
            <CardText>We are committed to delivering excellence in everything we do.</CardText>
          </NumCard>
        </Grid>
      </Section>

      {/* WHY BV IS THE RIGHT CHOICE */}
      <Section tone="navy">
        <SectionHead
          eyebrow="Why BV Is the Right Choice"
          tone="light"
          title="Customer Focus, Innovation & Responsibility"
        />
        <Grid cols={3}>
          <Card icon={UsersIcon} tone="dark" title="Customer Focus">
            <CardList>
              <CardListItem>
                We place a high value on comprehending the specific requirements and obstacles of each client.
              </CardListItem>
              <CardListItem>
                Prioritizing excellent service and building strong, long-term relationships.
              </CardListItem>
            </CardList>
          </Card>
          <Card icon={LightbulbIcon} tone="dark" title="Innovation">
            <CardList>
              <CardListItem>
                We stay ahead of the curve with the latest technologies and industry trends.
              </CardListItem>
              <CardListItem>
                Investment in R&D enables cutting-edge solutions that enhance efficiency and productivity.
              </CardListItem>
            </CardList>
          </Card>
          <Card icon={LeafIcon} tone="dark" title="Sustainability & Social Responsibility">
            <CardList>
              <CardListItem>Offering environmentally friendly engineering solutions.</CardListItem>
              <CardListItem>
                Health & Safety: rigorous standards for workers, clients, and the community.
              </CardListItem>
              <CardListItem>Energy-efficient designs that reduce consumption and emissions.</CardListItem>
              <CardListItem>
                CSR engagement supporting local communities and environmental initiatives.
              </CardListItem>
            </CardList>
          </Card>
        </Grid>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title="Want to Know More About Our Capabilities?"
          text="See how our engineering, construction, and supply capabilities fit your next project."
        >
          <CtaButton href="/en/services/" variant="gold">
            Our Services
          </CtaButton>
          <CtaButton href="/en/contact/" variant="outline">
            Contact Us
          </CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
