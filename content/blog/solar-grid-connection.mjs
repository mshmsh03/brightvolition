// Written by scripts/blog/docx-to-post.py from the company's Word file
// "Blog Connecting a Solar Plant to the National Grid (EN · AR · KU).docx".
// To change a setting (date, cover, guide files), edit solar-grid-connection.recipe.json and run the
// script again. A small wording fix can be made here by hand, but it is lost
// the next time the script runs, so fix the Word file too.
const post = {
  "slug": "solar-grid-connection",
  "date": "2026-11-27",
  "cover": {
    "src": "/assets/img/photos/solar-panels.jpg",
    "position": "center 30%"
  },
  "contact": {
    "email": "technical@brightvolition.com",
    "phones": [
      "+964 771 706 5000",
      "+964 750 225 0557"
    ]
  },
  "en": {
    "title": "Connecting a Solar Plant to the National Grid in the Kurdistan Region: What Plant Owners Need to Know",
    "byline": "Bright Volition · Engineering Services · November 2026",
    "dateLabel": "November 2026",
    "summary": "If you are planning a solar power plant in the Kurdistan Region, the grid connection will shape your project as much as the panels and inverters do.",
    "blocks": [
      {
        "type": "p",
        "text": "If you are planning a solar power plant in the Kurdistan Region, the grid connection will shape your project as much as the panels and inverters do. The rules are set by the KRG Ministry of Electricity and the Iraq Ministry of Electricity, and they are easiest to meet when they are built into the plan from day one. This guide summarises the main points, all taken from official Ministry documents."
      },
      {
        "type": "guide"
      },
      {
        "type": "h2",
        "text": "1. How much solar can the grid take?"
      },
      {
        "type": "p",
        "text": "The KRG Ministry of Electricity limits the total solar capacity connected to the Region's grid, counting both investment plants and net-metered systems, as a share of the Region's peak generation:"
      },
      {
        "type": "ul",
        "items": [
          {
            "lead": "2025–2028:",
            "text": "25% of peak generation"
          },
          {
            "lead": "2029–2030:",
            "text": "30% of peak generation"
          }
        ]
      },
      {
        "type": "p",
        "text": "The Ministry has said it will review the cap after 2030. A plant is required to install battery storage of 20% of its capacity. A developer who learns this late can lose months, so it should be part of the feasibility stage."
      },
      {
        "type": "h2",
        "text": "2. Requirements for plants of 5 MW and above"
      },
      {
        "type": "p",
        "text": "Solar plants of 5 MW and above must submit a grid impact study and meet the Ministry's connection requirements:"
      },
      {
        "type": "ul",
        "items": [
          {
            "lead": "All plants of 5 MW and above:",
            "text": "a grid impact study using PSS/E (or an equivalent tool) prepared by a reliable consultant; AC output that complies with the Iraqi Grid Code and Ministry standards; and inverter harmonic distortion below 3%."
          },
          {
            "lead": "Plants above 25 MW, connected at high voltage:",
            "text": "all of the above, plus reactive power (MVAr) capability and a SCADA system that meets the Ministry's requirements and protocols."
          },
          {
            "lead": "All solar plants:",
            "text": "an energy management system (EMS) and anti-islanding protection."
          }
        ]
      },
      {
        "type": "p",
        "text": "Plants of 25 MW or less connect at 11 or 33 kV. Larger projects need a study to fit them to the 132 kV grid or above, at the investor's expense."
      },
      {
        "type": "h2",
        "text": "3. The connection process, step by step"
      },
      {
        "type": "p",
        "text": "The Iraq PV Solar Grid Connection Code (Ministry of Electricity, 2018) sets a sequence that plant owners must complete before the plant may operate:"
      },
      {
        "type": "ol",
        "items": [
          {
            "lead": "Initial tests and test report.",
            "text": "For transmission-connected plants, the report is ratified by an independent engineering company."
          },
          {
            "lead": "Connection request and documents.",
            "text": "Transmission-connected plants also need a PSS/E dynamic model validated by a third party."
          },
          {
            "lead": "Review and Clearance for Connection.",
            "text": "The Ministry reviews the request within 30 business days."
          },
          {
            "lead": "Commissioning plan, witnessed tests and Commissioning Certificate.",
            "text": "Tests are witnessed before the certificate is issued."
          }
        ]
      },
      {
        "type": "p",
        "text": "Each step depends on the one before it, so delays early on carry through to the energy date. Planning the studies and the validated model before equipment is contracted avoids costly rework."
      },
      {
        "type": "h2",
        "text": "4. SCADA and communications for plants on the transmission grid"
      },
      {
        "type": "p",
        "text": "Owners of solar plants connected to the transmission grid must exchange real-time data with the control centre and keep a local record of plant operation. In practice that means:"
      },
      {
        "type": "ul",
        "items": [
          {
            "lead": "Protocol:",
            "text": "IEC 60870-5-101/104 to the control centre."
          },
          {
            "lead": "Links:",
            "text": "a main channel and a redundant channel."
          },
          {
            "lead": "Media:",
            "text": "fibre optic or high-voltage power line carrier (PLC)."
          },
          {
            "lead": "Data:",
            "text": "local storage of up to two years of historical data, available on request."
          }
        ]
      },
      {
        "type": "p",
        "text": "In the Kurdistan Region, the KRG Ministry of Electricity also sets SCADA protocols, so confirm the exact requirements with the Ministry for your site."
      },
      {
        "type": "h2",
        "text": "An example of our work"
      },
      {
        "type": "p",
        "text": "In 2025, Bright Volition carried out the grid impact study for connecting a 50 MW solar power plant to the Kurdistan Region grid at Bazyan, Sulaymaniyah, for Delta Cement Company (Sinoma DCC Line 2), in coordination with the Ministry of Electricity. The work ran from June to September 2025 and combined power system studies in PSS®E, PSCAD and ETAP with a protection and control coordination review and an evaluation of the energy management system and operating procedures. To our knowledge, it was the first solar plant connected to the KRG grid."
      },
      {
        "type": "link",
        "page": "projects"
      },
      {
        "type": "h2",
        "text": "How Bright Volition can help"
      },
      {
        "type": "p",
        "text": "We help plant owners and developers meet grid connection requirements, from the first study to commissioning:"
      },
      {
        "type": "ul",
        "items": [
          {
            "text": "Grid impact studies (PSS/E)"
          },
          {
            "text": "Power quality and harmonics"
          },
          {
            "text": "Reactive power and FACTS"
          },
          {
            "text": "SCADA integration with the grid"
          }
        ]
      }
    ],
    "cta": "Talk to us early, before equipment is contracted.",
    "sources": "Sources: KRG Ministry of Electricity, approved requirements for connecting solar power plants, circulated 18 May 2025; Iraq PV Solar Grid Connection Code, Ministry of Electricity, 2018. This article is a general summary and does not replace the official documents or the Ministry's guidance for a specific project.",
    "guide": {
      "file": "/assets/docs/blog/Bright-Volition-Solar-Grid-Connection-Guide-EN.pdf",
      "cover": "/assets/img/blog/solar-grid-connection-guide-en.jpg",
      "title": "Connecting a solar plant to the national grid",
      "pages": 7,
      "size": "1.6 MB"
    }
  },
  "ar": {
    "title": "ربط محطة الطاقة الشمسية بالشبكة الوطنية في إقليم كوردستان: ما يحتاج أصحاب المحطات إلى معرفته",
    "byline": "الإرادة المشرقة · الخدمات الهندسية · تشرين الثاني 2026",
    "dateLabel": "تشرين الثاني 2026",
    "summary": "إذا كنتم تخططون لإنشاء محطة للطاقة الشمسية في إقليم كوردستان، فإن الربط بالشبكة سيؤثر في مشروعكم بقدر ما تؤثر الألواح والعواكس (Inverter).",
    "blocks": [
      {
        "type": "p",
        "text": "إذا كنتم تخططون لإنشاء محطة للطاقة الشمسية في إقليم كوردستان، فإن الربط بالشبكة سيؤثر في مشروعكم بقدر ما تؤثر الألواح والعواكس (Inverter). تضع القواعدَ وزارةُ الكهرباء في حكومة إقليم كوردستان ووزارةُ الكهرباء العراقية، ويسهل التعامل معها حين تُدرج في خطة المشروع منذ اليوم الأول. يلخّص هذا الدليل أبرز النقاط، وجميعها مستقاة من الوثائق الرسمية للوزارة."
      },
      {
        "type": "guide"
      },
      {
        "type": "h2",
        "text": "1. كم تستوعب الشبكة من الطاقة الشمسية؟"
      },
      {
        "type": "p",
        "text": "تحدّد وزارة الكهرباء في إقليم كوردستان سقفاً لإجمالي قدرات الطاقة الشمسية المربوطة بشبكة الإقليم، سواء المشاريع الاستثمارية أو أنظمة صافي القياس، كنسبة من ذروة التوليد في الإقليم:"
      },
      {
        "type": "ul",
        "items": [
          {
            "lead": "2025–2028:",
            "text": "25% من ذروة التوليد"
          },
          {
            "lead": "2029–2030:",
            "text": "30% من ذروة التوليد"
          }
        ]
      },
      {
        "type": "p",
        "text": "وقد أعلنت الوزارة أنها ستراجع هذا السقف بعد عام 2030. ويتعيّن على محطة الطاقة الشمسية توفير بطاريات تخزين بنسبة 20% من قدرتها. ومن يكتشف ذلك متأخراً قد يخسر أشهراً من عمل المشروع، لذا ينبغي أن يكون جزءاً من مرحلة دراسة الجدوى."
      },
      {
        "type": "h2",
        "text": "2. متطلبات المحطات بقدرة 5 ميغاواط فأكثر"
      },
      {
        "type": "p",
        "text": "يتعيّن على أصحاب محطات الطاقة الشمسية بقدرة 5 ميغاواط فأكثر تقديم دراسة لتأثير المحطة على الشبكة، واستيفاء متطلبات الربط الصادرة عن الوزارة:"
      },
      {
        "type": "ul",
        "items": [
          {
            "lead": "جميع المحطات بقدرة 5 ميغاواط فأكثر:",
            "text": "دراسة تأثير على الشبكة باستخدام (PSS/E) أو ما يعادله، تُعدّها جهة استشارية رصينة؛ وخرج تيار متناوب (AC) مطابق لكود الشبكة العراقية ومعايير الوزارة؛ وتشوّه توافقي للعواكس (Inverter) أقل من 3%."
          },
          {
            "lead": "المحطات فوق 25 ميغاواط المربوطة بالجهد العالي:",
            "text": "جميع ما سبق، إضافةً إلى توفير القدرة غير الفعّالة (MVAr) ونظام SCADA وفق متطلبات الوزارة وبروتوكولاتها."
          },
          {
            "lead": "جميع محطات الطاقة الشمسية:",
            "text": "نظام لإدارة الطاقة (EMS) وحماية من الجزر المعزولة (Anti-islanding)."
          }
        ]
      },
      {
        "type": "p",
        "text": "تُربط المحطات بقدرة 25 ميغاواط فأقل بجهد 11 أو 33 كيلوفولت. أما المشاريع الأكبر فتحتاج إلى دراسة لملاءمتها مع شبكة 132 كيلوفولت أو أعلى، على نفقة المستثمر."
      },
      {
        "type": "h2",
        "text": "3. مراحل الربط خطوة بخطوة"
      },
      {
        "type": "p",
        "text": "يحدّد كود ربط محطات الطاقة الشمسية بالشبكة العراقية (وزارة الكهرباء، 2018) تسلسلاً يتعيّن على أصحاب المحطات إتمامه قبل السماح بتشغيل المحطة:"
      },
      {
        "type": "ol",
        "items": [
          {
            "lead": "الاختبارات الأولية وتقرير الاختبار.",
            "text": "وبالنسبة للمحطات المربوطة بشبكة النقل، يُصادَق على التقرير من شركة هندسية مستقلة."
          },
          {
            "lead": "طلب الربط مع الوثائق المطلوبة.",
            "text": "وتحتاج المحطات المربوطة بشبكة النقل أيضاً إلى نموذج ديناميكي (PSS/E) مصادَق عليه من طرف ثالث."
          },
          {
            "lead": "المراجعة وإصدار موافقة الربط بالشبكة.",
            "text": "تراجع الوزارة الطلب خلال 30 يوم عمل."
          },
          {
            "lead": "خطة التشغيل واختبارات بحضور مشغّل الشبكة وشهادة الإدخال في الخدمة.",
            "text": "تُجرى الاختبارات بحضور مشغّل الشبكة قبل إصدار الشهادة."
          }
        ]
      },
      {
        "type": "p",
        "text": "تعتمد كل مرحلة على سابقتها، لذا فإن التأخير في البداية ينعكس على موعد التشغيل. والتخطيط للدراسات وللنموذج المصادَق عليه قبل التعاقد على المعدات يجنّب إعادة العمل المكلفة."
      },
      {
        "type": "h2",
        "text": "4. نظام SCADA والاتصالات للمحطات المربوطة بشبكة النقل"
      },
      {
        "type": "p",
        "text": "يتعيّن على أصحاب المحطات الشمسية المربوطة بشبكة النقل تبادل البيانات لحظياً مع مركز السيطرة، والاحتفاظ بسجل محلي لتشغيل المحطة. وعملياً يعني ذلك:"
      },
      {
        "type": "ul",
        "items": [
          {
            "lead": "البروتوكول:",
            "text": "IEC 60870-5-101/104 مع مركز السيطرة."
          },
          {
            "lead": "قنوات الاتصال:",
            "text": "قناة رئيسية وأخرى احتياطية."
          },
          {
            "lead": "وسيلة الاتصال:",
            "text": "ألياف ضوئية أو اتصال عبر خطوط الجهد العالي (HV PLC)."
          },
          {
            "lead": "البيانات:",
            "text": "تخزين محلي لما يصل إلى سنتين من البيانات التاريخية وإتاحتها عند الطلب."
          }
        ]
      },
      {
        "type": "p",
        "text": "وفي إقليم كوردستان تحدّد وزارة الكهرباء في الإقليم بروتوكولات SCADA أيضاً، لذا ينبغي تأكيد المتطلبات الدقيقة مع الوزارة لموقع مشروعكم."
      },
      {
        "type": "h2",
        "text": "نموذج من أعمالنا"
      },
      {
        "type": "p",
        "text": "في عام 2025 أنجزت الإرادة المشرقة دراسة تأثير لربط محطة طاقة شمسية بقدرة 50 ميغاواط بشبكة إقليم كوردستان في بازيان بالسليمانية، لصالح شركة Delta Cement (Sinoma DCC Line 2)، بالتنسيق مع وزارة الكهرباء. استمر العمل من حزيران إلى أيلول 2025، وشمل دراسات منظومة القدرة بواسطة PSS®E وPSCAD وETAP، ومراجعة تنسيق الحماية والتحكم، وتقييم نظام إدارة الطاقة (EMS) وتنظيم إجراءات التشغيل. وبحسب علمنا، كانت أول محطة طاقة شمسية تُربط بشبكة الإقليم."
      },
      {
        "type": "link",
        "page": "projects"
      },
      {
        "type": "h2",
        "text": "كيف تساعدكم الإرادة المشرقة"
      },
      {
        "type": "p",
        "text": "نساعد أصحاب المحطات على استيفاء متطلبات الربط بالشبكة، من الدراسة الأولى حتى التشغيل:"
      },
      {
        "type": "ul",
        "items": [
          {
            "text": "دراسة تأثير المحطة على الشبكة (PSS/E)"
          },
          {
            "text": "جودة القدرة والتشوّه التوافقي"
          },
          {
            "text": "القدرة غير الفعّالة وأنظمة FACTS"
          },
          {
            "text": "ربط نظام SCADA بالشبكة"
          }
        ]
      }
    ],
    "cta": "تواصلوا معنا مبكراً، قبل التعاقد على المعدات.",
    "sources": "المصادر: وزارة الكهرباء في حكومة إقليم كوردستان، متطلبات ربط محطات الطاقة الشمسية المصادَق عليها، المعمَّمة في 18/5/2025؛ كود ربط محطات الطاقة الشمسية بالشبكة، وزارة الكهرباء العراقية، 2018. هذا المقال ملخص عام، ولا يغني عن الوثائق الرسمية ولا عن توجيهات الوزارة لمشروع بعينه.",
    "guide": {
      "file": "/assets/docs/blog/Bright-Volition-Solar-Grid-Connection-Guide-AR.pdf",
      "cover": "/assets/img/blog/solar-grid-connection-guide-ar.jpg",
      "title": "دليل ربط محطة الطاقة الشمسية بالشبكة الوطنية",
      "pages": 7,
      "size": "1.7 MB"
    }
  },
  "ku": {
    "title": "بەستنەوەی وێستگەی وزەی خۆر بە تۆڕی نیشتیمانییەوە لە هەرێمی کوردستان: ئەوەی خاوەن وێستگەکان پێویستە بیزانن",
    "byline": "Bright Volition · خزمەتگوزاری ئەندازیاری · تشرینی دووەمی 2026",
    "dateLabel": "تشرینی دووەمی 2026",
    "summary": "ئەگەر پلانت هەیە وێستگەیەکی وزەی خۆر لە هەرێمی کوردستان دابمەزرێنیت، بەستنەوە بە تۆڕ هێندەی پانێڵ و ئینڤێرتەرەکان کاریگەری لەسەر پرۆژەکەت دەبێت.",
    "blocks": [
      {
        "type": "p",
        "text": "ئەگەر پلانت هەیە وێستگەیەکی وزەی خۆر لە هەرێمی کوردستان دابمەزرێنیت، بەستنەوە بە تۆڕ هێندەی پانێڵ و ئینڤێرتەرەکان کاریگەری لەسەر پرۆژەکەت دەبێت. ڕێساکان وەزارەتی کارەبای هەرێمی کوردستان و وەزارەتی کارەبای عێراق دایانناون، و کاتێک لە یەکەم ڕۆژەوە لە پلانی پرۆژەکەدا جێگیر بکرێن، جێبەجێکردنیان ئاسانترە. ئەم ڕێبەرە خاڵە سەرەکییەکان کورت دەکاتەوە، کە هەموویان لە بەڵگەنامە فەرمییەکانی وەزارەتەوە وەرگیراون."
      },
      {
        "type": "guide"
      },
      {
        "type": "h2",
        "text": "1. تۆڕ چەند وزەی خۆر هەڵدەگرێت؟"
      },
      {
        "type": "p",
        "text": "وەزارەتی کارەبای هەرێمی کوردستان سنوورێک بۆ کۆی توانای وزەی خۆری بەستراو بە تۆڕی هەرێم دادەنێت، چ وێستگەی وەبەرهێنان بێت چ سیستەمی پێوانەی سافی، وەک ڕێژەیەک لە لووتکەی بەرهەمهێنانی هەرێم:"
      },
      {
        "type": "ul",
        "items": [
          {
            "lead": "2025–2028:",
            "text": "25%ی لووتکەی بەرهەمهێنان"
          },
          {
            "lead": "2029–2030:",
            "text": "30%ی لووتکەی بەرهەمهێنان"
          }
        ]
      },
      {
        "type": "p",
        "text": "وەزارەت ڕایگەیاندووە دوای ساڵی 2030 سنوورەکە پێداچوونەوەی بۆ دەکات. هەروەها پێویستە وێستگەی وزەی خۆر پاتری بۆ کۆگاکردنی وزە دابین بکات بە ڕێژەی 20%ی توانای خۆی. ئەگەر خاوەن وێستگە درەنگ ئەمە بزانێت، لەوانەیە چەند مانگێک لەدەست بدات، بۆیە دەبێت لە قۆناغی لێکۆڵینەوەی گونجاوییدا لەبەرچاو بگیرێت."
      },
      {
        "type": "h2",
        "text": "2. مەرجەکانی وێستگەکانی 5 میگاوات و زیاتر"
      },
      {
        "type": "p",
        "text": "خاوەن وێستگە خۆرییەکانی 5 میگاوات و زیاتر پێویستە توێژینەوەی کاریگەریی وێستگەکە لەسەر تۆڕ پێشکەش بکەن و مەرجەکانی بەستنەوەی وەزارەت جێبەجێ بکەن:"
      },
      {
        "type": "ul",
        "items": [
          {
            "lead": "هەموو وێستگەکانی 5 میگاوات و زیاتر:",
            "text": "توێژینەوەی کاریگەری لەسەر تۆڕ بە PSS/E (یان هاوشێوەکەی) کە لایەنێکی ڕاوێژکاریی متمانەپێکراو ئامادەی کردبێت؛ دەرچوونی AC بەپێی کۆدی تۆڕی عێراق و ستانداردەکانی وەزارەت؛ و هارمۆنیکی ئینڤێرتەر کەمتر لە 3%."
          },
          {
            "lead": "وێستگەکانی سەروو 25 میگاوات کە بە پەستانی بەرز دەبەسترێنەوە:",
            "text": "هەموو ئەوانەی سەرەوە، لەگەڵ توانای وزەی ناکارا (MVAr) و سیستەمی SCADA بەپێی مەرج و پرۆتۆکۆڵەکانی وەزارەت."
          },
          {
            "lead": "هەموو وێستگە خۆرییەکان:",
            "text": "سیستەمی بەڕێوەبردنی وزە (EMS) و پاراستن دژی دورگەبوونی تۆڕ (Anti-islanding)."
          }
        ]
      },
      {
        "type": "p",
        "text": "وێستگەکانی 25 میگاوات و کەمتر بە 11 یان 33 kV دەبەسترێنەوە. پڕۆژە گەورەکان پێویستیان بە توێژینەوەیەک هەیە بۆ گونجاندنیان لەگەڵ تۆڕی 132 kV یان زیاتر، لەسەر تێچووی وەبەرهێنەر."
      },
      {
        "type": "h2",
        "text": "3. پرۆسەی بەستنەوە، هەنگاو بە هەنگاو"
      },
      {
        "type": "p",
        "text": "کۆدی بەستنەوەی وێستگەکانی وزەی خۆر بە تۆڕی عێراق (وەزارەتی کارەبا، 2018) زنجیرەیەک دیاری دەکات کە خاوەن وێستگە پێویستە تەواوی بکات پێش ئەوەی ڕێگەی کارپێکردنی وێستگەکەی پێبدرێت:"
      },
      {
        "type": "ol",
        "items": [
          {
            "lead": "تاقیکردنەوە سەرەتاییەکان و ڕاپۆرتی تاقیکردنەوە.",
            "text": "بۆ وێستگە بەستراوەکان بە تۆڕی گواستنەوە، ڕاپۆرتەکە لەلایەن کۆمپانیایەکی ئەندازیاریی سەربەخۆوە پشتڕاست دەکرێتەوە."
          },
          {
            "lead": "داواکاریی بەستنەوە لەگەڵ بەڵگەنامەکان.",
            "text": "وێستگە بەستراوەکان بە تۆڕی گواستنەوە هەروەها پێویستیان بە مۆدێلی داینامیکیی PSS/E هەیە کە لایەنێکی سێیەم پەسەندی کردبێت."
          },
          {
            "lead": "پێداچوونەوە و مۆڵەتی بەستنەوە.",
            "text": "وەزارەت لە ماوەی 30 ڕۆژی کاردا داواکارییەکە پێداچوونەوەی بۆ دەکات."
          },
          {
            "lead": "پلانی کارپێکردن، تاقیکردنەوە بە ئامادەبوونی نوێنەری تۆڕ و بڕوانامەی کارپێکردن.",
            "text": "تاقیکردنەوەکان بە ئامادەبوونی نوێنەری تۆڕ ئەنجام دەدرێن پێش دەرکردنی بڕوانامەکە."
          }
        ]
      },
      {
        "type": "p",
        "text": "هەر هەنگاوێک پشت بە هەنگاوی پێشوو دەبەستێت، بۆیە دواکەوتنی سەرەتا کاریگەری لەسەر کاتی کارپێکردن دەبێت. پلاندانانی توێژینەوەکان و مۆدێلە پەسەندکراوەکە پێش گرێبەستکردنی ئامێرەکان، خۆ لە دووبارەکردنەوەی گرانبەهای کار دەپارێزێت."
      },
      {
        "type": "h2",
        "text": "4. SCADA و پەیوەندییەکان بۆ وێستگەکانی تۆڕی گواستنەوە"
      },
      {
        "type": "p",
        "text": "خاوەنی وێستگە خۆرییە بەستراوەکان بە تۆڕی گواستنەوە پێویستە بە شێوەی ڕاستەوخۆ داتا لەگەڵ ناوەندی کۆنترۆڵ ئاڵوگۆڕ بکەن و تۆمارێکی ناوخۆیی کارکردنی وێستگەکە بپارێزن. لە کردەوەدا ئەمە واتە:"
      },
      {
        "type": "ul",
        "items": [
          {
            "lead": "پرۆتۆکۆڵ:",
            "text": "IEC 60870-5-101/104 لەگەڵ ناوەندی کۆنترۆڵ."
          },
          {
            "lead": "هێڵەکان:",
            "text": "هێڵی سەرەکی و هێڵی یەدەگ."
          },
          {
            "lead": "ئامرازی پەیوەندی:",
            "text": "فایبەری ئۆپتیکی یان پەیوەندی لەسەر هێڵەکانی ڤۆڵتیەی بەرز (HV PLC)."
          },
          {
            "lead": "داتا:",
            "text": "پاراستنی تا 2 ساڵ داتای مێژوویی لە وێستگەکەدا و پێشکەشکردنی لە کاتی داواکردندا."
          }
        ]
      },
      {
        "type": "p",
        "text": "لە هەرێمی کوردستان، وەزارەتی کارەبای هەرێمیش پرۆتۆکۆڵەکانی SCADA دیاری دەکات، بۆیە ورددەکارییە پێویستەکان لەگەڵ وەزارەت بۆ شوێنی پرۆژەکەت پشتڕاست بکەرەوە."
      },
      {
        "type": "h2",
        "text": "نموونەیەک لە کارەکانمان"
      },
      {
        "type": "p",
        "text": "لە ساڵی 2025، Bright Volition توێژینەوەی کاریگەری بۆ بەستنەوەی وێستگەیەکی وزەی خۆری 50 میگاوات بە تۆڕی هەرێمی کوردستانەوە ئەنجامدا، لە بازیان، سلێمانی، بۆ کۆمپانیای Delta Cement (Sinoma DCC Line 2)، بە هەماهەنگی لەگەڵ وەزارەتی کارەبا. کارەکە لە حوزەیرانەوە تا ئەیلوولی 2025 بەردەوام بوو و توێژینەوەی سیستەمی وزە بە PSS®E و PSCAD و ETAP، پێداچوونەوەی هەماهەنگیی پاراستن و کۆنترۆڵ، و هەڵسەنگاندنی سیستەمی بەڕێوەبردنی وزە (EMS) و ڕێکارەکانی کارپێکردنی گرتەوە. بەپێی زانیاریی ئێمە، یەکەم وێستگەی وزەی خۆر بوو کە بە تۆڕی هەرێم بەسترایەوە."
      },
      {
        "type": "link",
        "page": "projects"
      },
      {
        "type": "h2",
        "text": "Bright Volition چۆن یارمەتیت دەدات"
      },
      {
        "type": "p",
        "text": "یارمەتیی خاوەن وێستگەکان دەدەین بۆ جێبەجێکردنی مەرجەکانی بەستنەوە بە تۆڕ، لە یەکەم توێژینەوەوە تا کارپێکردن:"
      },
      {
        "type": "ul",
        "items": [
          {
            "text": "توێژینەوەی کاریگەریی سەر تۆڕ (PSS/E)"
          },
          {
            "text": "کوالیتیی وزە و هارمۆنیک"
          },
          {
            "text": "وزەی ناکارا و FACTS"
          },
          {
            "text": "یەکخستنی SCADA لەگەڵ تۆڕ"
          }
        ]
      }
    ],
    "cta": "زوو پەیوەندیمان پێوە بکە، پێش گرێبەستکردنی ئامێرەکان.",
    "sources": "سەرچاوەکان: مەرجە پەسەندکراوەکانی وەزارەتی کارەبای هەرێمی کوردستان بۆ بەستنەوەی وێستگەکانی وزەی خۆر، بڵاوکراوەتەوە لە 18/5/2025؛ کۆدی بەستنەوەی وێستگەکانی وزەی خۆر بە تۆڕ، وەزارەتی کارەبای عێراق، 2018. ئەم وتارە کورتەیەکی گشتییە و جێگای بەڵگەنامە فەرمییەکان یان ڕێنمایی وەزارەت بۆ پرۆژەیەکی دیاریکراو ناگرێتەوە.",
    "guide": {
      "file": "/assets/docs/blog/Bright-Volition-Solar-Grid-Connection-Guide-KU.pdf",
      "cover": "/assets/img/blog/solar-grid-connection-guide-ku.jpg",
      "title": "ڕێبەری بەستنەوەی وێستگەی وزەی خۆر بە تۆڕی نیشتیمانیەوە",
      "pages": 7,
      "size": "1.7 MB"
    }
  }
};

export default post;
