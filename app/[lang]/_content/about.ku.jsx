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

export default function AboutKu() {
  return (
    <>
      <PageHero
        image="/assets/img/photos/transformer-building.jpg"
        homeHref="/ku/"
        homeLabel="سەرەکی"
        crumb="دەربارەمان"
        eyebrow="دەربارەمان"
        title="کۆمپانیایەکی ئەندازیاری بە فەرمی تۆمارکراو لە هەرێمی کوردستان، لەسەر بنەمای متمانە بنیاتنراوە"
        lede="برایت ڤۆلیشن لە ساڵی 2022 وەک ئۆفیسێکی ئەندازیاری پسپۆڕ لە خزمەتگوزاری کارەبایی، ئامێری پێوانە و میکانیکی دامەزرا."
      >
        <CtaButton href={PROFILE_PDF} variant="gold" download>
          <DownloadIcon />داگرتنی پرۆفایلی تەواوی کۆمپانیا</CtaButton>
      </PageHero>

      {/* MISSION */}
      <Section size="tight">
        <CtaBand align="start" eyebrow="ئەرکمان" title="بەهێزکردنی کڕیارەکانمان لە ڕێگەی پێشکەشکردنی خزمەتگوزاریی ئەندازیاریی زیرەکانە، بەردەوام و کاریگەر لە ڕووی تێچووەوە کە بەهای بەردەوام بەدی دەهێنێت." />
      </Section>

      {/* MILESTONES */}
      <Section>
        <SectionHead eyebrow="ڕوانگەیەکی گشتی لەسەر کۆمپانیا" title="بینینی دامەزراندن، خاڵە سەرەکییەکان، و ئاواتەکانی داهاتوو" />
        <Timeline>
          <TimelineItem title="بینینی دامەزراندن">
            <TimelineEntry>پێشەنگی لە پێشکەشکردنی چارەسەری ئەندازیاریی داهێنەرانە، بەردەوام و متمانەپێکراو.</TimelineEntry>
            <TimelineEntry>بەهێزکردنی کڕیاران بۆ بەدیهێنانی باشیی بەردەوام.</TimelineEntry>
          </TimelineItem>
          <TimelineItem title="خاڵە سەرەکییەکان">
            <TimelineEntry>
              <strong>2023:</strong> دامەزراندنی فەرمی و دەستپێکردنی یەکەم بەرهەم و خزمەتگوزاری.</TimelineEntry>
            <TimelineEntry>
              <strong>2024:</strong> فراوانکردنی خزمەتگوزاریەکان و بەرزکردنەوەی ئۆفیسەکە بۆ کۆمپانیایەکی بە فەرمی تۆمارکراو لە حکوومەتی هەرێمی کوردستان.</TimelineEntry>
            <TimelineEntry>
              <strong>2025:</strong> فراوانکردنی جۆرەکانی خزمەتگوزاری و چوونە بوارە نوێیەکانەوە بە چارەسەری ئەندازیاریی پێشکەوتوو.</TimelineEntry>
          </TimelineItem>
          <TimelineItem title="ئاواتەکانی داهاتوو">
            <TimelineEntry>پابەندبوون بە کوالیتی، بەردەوامی و بەرپرسیارێتی.</TimelineEntry>
            <TimelineEntry>هاندانی داهێنان بۆ مانەوە لە پێشەنگیی ئاڕاستەکان.</TimelineEntry>
            <TimelineEntry>فراوانبوون لە ئاستی جیهانیدا لەگەڵ سەرنجدان لەسەر ڕازیبوونی کڕیار.</TimelineEntry>
          </TimelineItem>
        </Timeline>
      </Section>

      {/* POLICY */}
      <Section>
        <Split className="items-start">
          <div>
            <Eyebrow>سیاسەتمان</Eyebrow>
            <h2>کوالیتی، بە وردی داڕێژراوە</h2>
            <Lede className="mb-4">برایت ڤۆلیشن پابەندە بە پێشکەشکردنی چارەسەری ئەندازیاریی داهێنەرانە، بەردەوام و متمانەپێکراو، و دابینکردنی بەرهەم و خزمەتگوزاریی جێبەجێکردن کە پێداویستیەکانی کڕیار دابین دەکات و لە چاوەڕوانیەکانیان تێدەپەڕێت.</Lede>
            <p>ئەم سیاسەتە چوارچێوەی پێویست دابین دەکات بۆ دانان و پێداچوونەوەی ئامانجەکانی کوالیتیمان، و بۆ هەموو کارمەند و لایەنە پەیوەندیدارەکان بڵاو دەکرێتەوە بۆ دڵنیابوون لە تێگەیشتن و جێبەجێکردنی کاریگەر.</p>
          </div>
          <Checklist>
            <ChecklistItem>دڵنیابوون لە ڕێزگرتن لە یاساکان و ئەرکە گرێبەستییەکان.</ChecklistItem>
            <ChecklistItem>هەوڵدان بۆ بەدیهێنانی ڕازیبوونی کڕیار لە ڕێگەی بەرهەم، خزمەتگوزاری و چارەسەری بەرزی کوالیتی.</ChecklistItem>
            <ChecklistItem>چەسپاندنی کولتووری باشترکردنی بەردەوام لە هەموو پرۆسە، سیستەم و ئەدایەندا.</ChecklistItem>
            <ChecklistItem>بەهێزکردنی کارمەندان لە ڕێگەی ڕاهێنان، کاری تیمی، بەرپرسیارێتی و گرنگیدان بە سەلامەتیان.</ChecklistItem>
            <ChecklistItem>بەهێزکردنی هاوبەشی لەگەڵ کڕیار و دابینکەران بۆ دروستکردنی بەهای درێژخایەن.</ChecklistItem>
          </Checklist>
        </Split>
      </Section>

      {/* HOW WE WORK */}
      <Section>
        <SectionHead eyebrow="چۆن برایت ڤۆلیشن خزمەتی کڕیارەکانی دەکات" title="چۆن کار دەکەین" />
        <Grid cols={3} className="pt-5">
          <NumCard num="1" title="نهێنی سەرەتا">
            <CardText>پێشینەیی دەدەین بە نهێنیی کڕیار و دابینکەرەکانمان، بۆ دڵنیابوون لەوەی هەموو زانیاریی هەستیار سەلامەت و پارێزراو دەمێنێتەوە.</CardText>
          </NumCard>
          <NumCard num="2" title="زنجیرەی دابینکردنی کاریگەر">
            <CardText>بەڕێوەبردنێکی کاریگەری زنجیرەی دابینکردن کە ڕادەستکردن لە کاتی دیاریکراودا دڵنیا دەکات، دواکەوتن کەم دەکاتەوە و ئەدایەن باشتر دەکات.</CardText>
          </NumCard>
          <NumCard num="3" title="کوالیتی و متمانەپێکراویی بێ گوزەشت">
            <CardText>لەگەڵ دابینکەرانی متمانەپێکراو مامەڵە دەکەین بۆ دڵنیابوون لەوەی هەموو بەرهەم و خزمەتگوزارییەک بەرزترین ستانداردەکان دابین دەکات.</CardText>
          </NumCard>
          <NumCard num="4" title="چارەسەری تایبەتمەند و کاریگەر لە ڕووی تێچووەوە">
            <CardText>هەموو چارەسەرێک بەپێی پێویستیە کارپێکراوییەکانت و بودجەکەت داڕێژراوە.</CardText>
          </NumCard>
          <NumCard num="5" title="ڕێبازی هاوبەشی">
            <CardText>لە نزیکەوە لەگەڵ کڕیاران کار دەکەین بۆ تێگەیشتن لە پێویستیەکانیان و پێشکەشکردنی باشترین چارەسەری ئەگەری.</CardText>
          </NumCard>
          <NumCard num="6" title="پابەندبوون بە باشی">
            <CardText>ئێمە پابەندین بە پێشکەشکردنی باشی لە هەموو ئەوەی دەیکەین.</CardText>
          </NumCard>
        </Grid>
      </Section>

      {/* WHY BV IS THE RIGHT CHOICE */}
      <Section tone="navy">
        <SectionHead
          eyebrow="بۆچی برایت ڤۆلیشن هەڵبژاردەی ڕاستە"
          tone="light"
          title="سەرنجدان لەسەر کڕیار، داهێنان و بەرپرسیارێتی"
        />
        <Grid cols={3}>
          <Card icon={UsersIcon} tone="dark" title="سەرنجدان لەسەر کڕیار">
            <CardList>
              <CardListItem>گرنگیەکی زۆر دەدەین بە تێگەیشتن لە پێداویستی و ئاستەنگە تایبەتەکانی هەر کڕیارێک.</CardListItem>
              <CardListItem>پێشینەیی دان بە خزمەتگوزاریی نایاب و بنیاتنانی پەیوەندیی بەهێز و درێژخایەن.</CardListItem>
            </CardList>
          </Card>
          <Card icon={LightbulbIcon} tone="dark" title="داهێنان">
            <CardList>
              <CardListItem>بەردەوام هەنگاو بە نوێترین تەکنەلۆجیا و ئاڕاستەکانی پیشەسازی دەنێین.</CardListItem>
              <CardListItem>وەبەرهێنانمان لە توێژینەوە و پەرەپێدان ڕێگە بە چارەسەری پێشکەوتوو دەدات کە کارایی و بەرهەمهێنان بەهێز دەکات.</CardListItem>
            </CardList>
          </Card>
          <Card icon={LeafIcon} tone="dark" title="بەردەوامی و بەرپرسیارێتی کۆمەڵایەتی">
            <CardList>
              <CardListItem>پێشکەشکردنی چارەسەری ئەندازیاریی دۆستی ژینگە.</CardListItem>
              <CardListItem>تەندروستی و سەلامەتی: ستانداردی توند بۆ کرێکار، کڕیار و کۆمەڵگا.</CardListItem>
              <CardListItem>دیزاینی پاشەکەوتکەری وزە کە بەکارهێنان و دەرچوونەکان کەم دەکاتەوە.</CardListItem>
              <CardListItem>دەستپێشخەریی بەرپرسیارێتی کۆمەڵایەتی کە کۆمەڵگای ناوخۆیی و ژینگە پشتگیری دەکات.</CardListItem>
            </CardList>
          </Card>
        </Grid>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBand
          title="دەتەوێت زیاتر لەسەر توانامان بزانیت؟"
          text="بزانە چۆن توانای ئەندازیاری، جێبەجێکردن و دابینکردنمان لەگەڵ پڕۆژەی داهاتووت دەگونجێت."
        >
          <CtaButton href="/ku/services/" variant="gold">خزمەتگوزاریەکانمان</CtaButton>
          <CtaButton href="/ku/contact/" variant="outline">پەیوەندیمان پێوە بکە</CtaButton>
        </CtaBand>
      </Section>
    </>
  );
}
