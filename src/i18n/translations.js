export const translations = {
  hu: {
    // ─── Nav ───
    nav: {
      services: 'Szolgáltatások',
      process: 'Folyamat',
    },

    // ─── Hero ───
    hero: {
      label: 'merlon studios',
      title: 'Építsük fel együtt a',
      titleBreak: 'digitális',
      titleHighlight: 'jövődet.',
      subtitle:
        'Építsük fel együtt egyedi alkalmazásodat, weboldaladat, automatizációid - hogy a technológia érted dolgozzon.',
      ctaPrimary: 'Irány a felmérésre! →',
      ctaSecondary: 'Szolgáltatások ↓',
    },

    // ─── Services ───
    services: {
      sectionLabel: 'Szolgáltatások',
      heading: 'Amiben',
      headingHighlight: 'segíthetünk',
      ctaButton: 'Kérj ajánlatot →',
      groups: [
        {
          id: 'web',
          num: '01',
          label: 'Webes jelenlét',
          services: [
            { icon: '🌐', title: 'Céges weboldal', description: 'Modern, gyors, reszponzív weboldal ami a márkádat képviseli.' },
            { icon: '🚀', title: 'Landing page', description: 'Konverziós céloldal kampányokhoz, termékekhez - akár 2 nap alatt.' },
            { icon: '🛒', title: 'Webshop', description: 'Online bolt fizetéssel, készletkezeléssel, automatikus számlázással.' },
            { icon: '📝', title: 'CMS bevezetés', description: 'Tartalomkezelő rendszer, amit te is tudsz használni kód nélkül.' },
          ],
        },
        {
          id: 'auto',
          num: '02',
          label: 'Automatizáció és AI',
          services: [
            { icon: '⚡', title: 'Workflow automatizálás', description: 'Ismétlődő feladatok automatizálása n8n segítségével.' },
            { icon: '🤖', title: 'AI tartalom generálás', description: 'AI-alapú tartalom készítés, ami skálázza a kommunikációt.' },
            { icon: '📧', title: 'Email automatizálás', description: 'Automatikus email flow-k, értesítések, follow-up-ok.' },
            { icon: '🔗', title: 'API összekötés', description: 'Rendszerek összekötése, adat szinkronizálás, integrációk.' },
          ],
        },
        {
          id: 'data',
          num: '03',
          label: 'Adatok és kontrolling',
          services: [
            { icon: '📊', title: 'BI Dashboard', description: 'Interaktív dashboard, ahol valós időben látod az üzleti adatokat.' },
            { icon: '📈', title: 'Adatvizualizáció', description: 'Adataid érthetően, vizuálisan - prezentációra is alkalmas.' },
            { icon: '💼', title: 'Kontrolling rendszer', description: 'Pénzügyi és működési kontrolling, átláthatóság.' },
            { icon: '🗂️', title: 'Google Workspace', description: 'Sheets, Drive, Calendar - rendszerbe szervezve és optimalizálva.' },
          ],
        },
        {
          id: 'consulting',
          num: '04',
          label: 'Tanácsadás',
          services: [
            { icon: '🧭', title: 'IT Audit', description: 'Átnézzük a rendszereidet, és megmutatjuk hol lehet hatékonyabb.' },
            { icon: '🎓', title: 'AI Workshop', description: 'Gyakorlati workshop - megmutatom, mit automatizálhatsz AI-val.' },
            { icon: '👨‍💻', title: 'Fejlesztő koordináció', description: 'Ha van fejlesztőd de kell valaki aki irányítja a projektet.' },
            { icon: '🤝', title: 'Nem tudom mit lehetne', description: 'Beszélgessünk - kiderítjük mire van szükséged.' },
          ],
        },
      ],
    },

    // ─── Process ───
    process: {
      sectionLabel: 'Folyamat',
      heading: 'Hogyan',
      headingHighlight: 'működik',
      ctaButton: 'Kérj ajánlatot →',
      steps: [
        {
          num: '01',
          title: 'Indulás',
          description:
            'Egy rövid beszélgetéssel feltérképezzük, hol tartasz most, milyen célokat szeretnél elérni, és milyen erőforrások állnak rendelkezésre. Megértjük az üzleti kontextust, hogy a megoldás valóban neked szóljon.',
        },
        {
          num: '02',
          title: 'Tervezés',
          description:
            'Összeállítunk egy konkrét, átlátható tervet: mit építünk, hogyan működik, milyen lépésekben haladunk, és mennyi idő alatt lesz kész. Minden döntést együtt hozunk - nincs meglepetés.',
        },
        {
          num: '03',
          title: 'Építés',
          description:
            'Megépítjük a megoldást iteratív módon. Folyamatos kommunikáció, rendszeres demók, azonnali visszajelzési lehetőség. Nem hónapokra tűnsz el - napok alatt látod az eredményt.',
        },
        {
          num: '04',
          title: 'Átadás',
          description:
            'Alapos tesztelés után átadjuk a kész rendszert. Betanítjuk a csapatodat, dokumentáljuk a működést, és gondoskodunk róla, hogy magabiztosan használjátok.',
        },
        {
          num: '05',
          title: 'Monitorozás',
          description:
            'Átadás után a visszajelzéseid alapján állítunk a rendszeren és finomhangoljuk a beállításokat. Figyelemmel kísérjük a működést és optimalizáljuk, ahol szükséges.',
        },
      ],
    },

    // ─── CTA ───
    cta: {
      sectionLabel: 'Kapcsolat',
      heading: 'Beszéljünk',
      subtitle: 'Írd meg miben segíthetek, és 24 órán belül válaszolok.',
      ctaPrimary: 'Kérj ajánlatot →',
    },

    // ─── Radar Data ───
    radar: {
      categories: [
        { id: 'web', label: 'Webes jelenlét', icon: '🌐', description: 'Weboldal, landing page, webshop' },
        { id: 'auto', label: 'Automatizáció és AI', icon: '⚡', description: 'Workflow-k, integrációk, AI megoldások' },
        { id: 'data', label: 'Adatok és kontrolling', icon: '📊', description: 'Dashboard-ok, riportok, adatvizualizáció' },
        { id: 'consulting', label: 'Tanácsadás', icon: '🧭', description: 'IT audit, workshop, fejlesztő koordináció' },
        { id: 'unknown', label: 'Nem tudom pontosan', icon: '🤔', description: 'Segítek kideríteni, mire van szükséged' },
      ],
      detailOptions: {
        web: [
          { id: 'new-site', label: 'Új oldal nulláról' },
          { id: 'redesign', label: 'Meglévő oldal megújítása' },
          { id: 'landing', label: 'Landing page' },
          { id: 'webshop', label: 'Webshop' },
          { id: 'cms', label: 'CMS (tartalomkezelő)' },
          { id: 'multilang', label: 'Többnyelvűség' },
        ],
        auto: [
          { id: 'workflow', label: 'Workflow automatizálás' },
          { id: 'leadgen', label: 'Lead generálás' },
          { id: 'email-comms', label: 'Email / kommunikáció automatizálás' },
          { id: 'crm', label: 'CRM integráció' },
          { id: 'ai-content', label: 'AI tartalom generálás' },
          { id: 'api', label: 'API összekötés' },
        ],
        data: [
          { id: 'bi-dashboard', label: 'BI dashboard' },
          { id: 'google-workspace', label: 'Google Workspace optimalizálás' },
          { id: 'controlling', label: 'Kontrolling rendszer' },
          { id: 'dataviz', label: 'Adatvizualizáció' },
        ],
        consulting: [
          { id: 'it-audit', label: 'IT audit' },
          { id: 'ai-workshop', label: 'AI workshop' },
          { id: 'dev-coord', label: 'Fejlesztő koordináció' },
          { id: 'not-sure', label: 'Nem tudom, mit lehetne' },
        ],
        unknown: [],
      },
      maturityOptions: [
        { id: 'idea', label: 'Csak ötlet van', icon: '💡' },
        { id: 'broken', label: 'Van, de nem működik jól', icon: '🔧' },
        { id: 'improve', label: 'Működik, de fejleszteni kéne', icon: '📈' },
        { id: 'urgent', label: 'Sürgős, tegnap kellett volna', icon: '🚨' },
      ],
      sizeOptions: [
        { id: 'simple', label: 'Egyszerű megoldás' },
        { id: 'moderate', label: 'Néhány komplex elem' },
        { id: 'complex', label: 'Teljesen komplex' },
        { id: 'unsure', label: 'Nem tudom' },
      ],
      deadlineOptions: [
        { id: 'asap', label: 'ASAP' },
        { id: '2-4weeks', label: '2-4 héten belül' },
        { id: '1-3months', label: '1-3 hónap' },
        { id: 'no-deadline', label: 'Nincs határidő' },
      ],
      stepTexts: {
        1: { title: 'Miben segíthetünk?', description: 'Válaszd ki, melyik terület érdekel a legjobban.' },
        2: { title: 'Pontosítsunk', description: 'Jelöld be, amik relevánsak - többet is választhatsz.' },
        3: { title: 'Hol tartasz most?', description: 'Ezzel tudjuk, milyen megközelítés lenne a legjobb.' },
        4: { title: 'Időkeret', description: 'Segít a prioritás és az ütemezés megtervezésében.' },
        5: { title: 'Eredmények', description: 'A válaszaid alapján ezeket javasoljuk.' },
      },
      services: [
        {
          id: 'corporate-site', name: 'Céges weboldal', category: 'web',
          tags: ['new-site', 'redesign', 'cms', 'multilang'],
          maturityFit: ['idea', 'broken', 'improve'], deliveryDays: 5,
          whyRecommend: {
            default: 'Professzionális online jelenlét, ami bizalmat épít.',
            idea: 'Nulláról felépítjük a céges arculatodat online.',
            broken: 'Modernizáljuk a meglévő oldalt, ami végre működik.',
          },
        },
        {
          id: 'landing-page', name: 'Landing page', category: 'web',
          tags: ['landing', 'new-site'],
          maturityFit: ['idea', 'urgent'], deliveryDays: 2,
          whyRecommend: {
            default: 'Gyors, konverziós céloldal, ami értékesít.',
            urgent: 'Akár 2 nap alatt kész - tökéletes ha gyorsaság kell.',
          },
        },
        {
          id: 'webshop', name: 'Webshop', category: 'web',
          tags: ['webshop', 'new-site'],
          maturityFit: ['idea', 'improve'], deliveryDays: 8,
          whyRecommend: { default: 'Online értékesítési csatorna, fizetéssel, készletkezeléssel.' },
        },
        {
          id: 'cms-setup', name: 'CMS bevezetés', category: 'web',
          tags: ['cms', 'new-site', 'redesign'],
          maturityFit: ['idea', 'broken', 'improve'], deliveryDays: 4,
          whyRecommend: { default: 'Tartalomkezelő, amit te is tudsz használni kód nélkül.' },
        },
        {
          id: 'workflow-auto', name: 'Workflow automatizálás', category: 'auto',
          tags: ['workflow', 'api'],
          maturityFit: ['broken', 'improve', 'urgent'], deliveryDays: 3,
          whyRecommend: {
            default: 'Ismétlődő feladatok automatizálása, hogy időt spórolj.',
            broken: 'Rendbe tesszük a meglévő folyamatokat, és automatizáljuk.',
          },
        },
        {
          id: 'lead-automation', name: 'Lead generálás automatizálás', category: 'auto',
          tags: ['leadgen', 'email-comms', 'crm'],
          maturityFit: ['idea', 'improve'], deliveryDays: 4,
          whyRecommend: { default: 'Automatikus lead begyűjtés és feldolgozás.' },
        },
        {
          id: 'email-auto', name: 'Email automatizálás', category: 'auto',
          tags: ['email-comms', 'workflow'],
          maturityFit: ['idea', 'improve', 'urgent'], deliveryDays: 2,
          whyRecommend: {
            default: 'Automatikus email flow-k, értesítések, follow-up-ok.',
            urgent: 'Gyorsan bevezethető, azonnali hatás.',
          },
        },
        {
          id: 'crm-integration', name: 'CRM integráció', category: 'auto',
          tags: ['crm', 'api', 'workflow'],
          maturityFit: ['broken', 'improve'], deliveryDays: 4,
          whyRecommend: {
            default: 'CRM összekötése a meglévő rendszerekkel.',
            broken: 'Rendbe hozzuk a szétszórt adatokat.',
          },
        },
        {
          id: 'ai-content', name: 'AI tartalom generálás', category: 'auto',
          tags: ['ai-content', 'workflow'],
          maturityFit: ['idea', 'improve'], deliveryDays: 3,
          whyRecommend: { default: 'AI-alapú tartalomkészítés, ami skálázza a kommunikációt.' },
        },
        {
          id: 'api-integration', name: 'API összekötés', category: 'auto',
          tags: ['api', 'workflow'],
          maturityFit: ['broken', 'improve', 'urgent'], deliveryDays: 3,
          whyRecommend: { default: 'Rendszerek összekötése, adat szinkronizálás.' },
        },
        {
          id: 'bi-dashboard', name: 'BI Dashboard', category: 'data',
          tags: ['bi-dashboard', 'dataviz'],
          maturityFit: ['idea', 'improve'], deliveryDays: 6,
          whyRecommend: { default: 'Interaktív dashboard, ahol valós időben látod az adatokat.' },
        },
        {
          id: 'google-workspace', name: 'Google Workspace optimalizálás', category: 'data',
          tags: ['google-workspace', 'workflow'],
          maturityFit: ['broken', 'improve'], deliveryDays: 3,
          whyRecommend: { default: 'Sheets, Drive, Calendar - rendszerbe szervezve.' },
        },
        {
          id: 'controlling', name: 'Kontrolling rendszer', category: 'data',
          tags: ['controlling', 'bi-dashboard'],
          maturityFit: ['idea', 'improve'], deliveryDays: 7,
          whyRecommend: { default: 'Pénzügyi és működési kontrolling, ami átláthatóságot ad.' },
        },
        {
          id: 'dataviz', name: 'Adatvizualizáció', category: 'data',
          tags: ['dataviz', 'bi-dashboard'],
          maturityFit: ['idea', 'improve'], deliveryDays: 4,
          whyRecommend: { default: 'Adataid érthetően, vizuálisan - prezentációra is.' },
        },
        {
          id: 'it-audit', name: 'IT Audit', category: 'consulting',
          tags: ['it-audit'],
          maturityFit: ['broken', 'improve'], deliveryDays: 3,
          whyRecommend: { default: 'Átnézzük a rendszereidet és javaslatot teszünk.' },
        },
        {
          id: 'ai-workshop', name: 'AI Workshop', category: 'consulting',
          tags: ['ai-workshop', 'not-sure'],
          maturityFit: ['idea', 'improve'], deliveryDays: 1,
          whyRecommend: {
            default: 'Gyakorlati AI workshop - megmutatom, mit automatizálhatsz.',
            idea: 'Kiderítjük, hol segíthet az AI a te vállalkozásodban.',
          },
        },
      ],
      // Radar overlay UI
      back: '← Vissza',
      next: 'Tovább →',
      close: 'Bezárás',
      preSelectedHint: 'Ez stimmel? Ha nem, válassz másikat.',
      freeformPlaceholder: 'Mesélj szabadon, mire gondoltál...',
      projectSizeLabel: 'Mekkora projekt?',
      deadlineLabel: 'Mikor kell?',
      dayUnit: 'nap',
      strongMatch: 'Erősen ajánlott',
      noResults: 'Beszéljünk személyesen - úgy tudom a legjobban segíteni.',
      sendMessage: 'Küldj üzenetet',
      formName: 'Neved *',
      formEmail: 'Email *',
      formPhone: 'Telefon (opcionális)',
      formMessage: 'Bármi más, amit érdemes tudnom?',
      formSubmit: 'Elküldöm',
      formSubmitting: 'Küldés...',
      thankYou: 'Köszi!',
      thankYouMessage: '24 órán belül jelentkezem.',
      // Scoring reasons
      reasonFitsNeeds: 'Illeszkedik az igényeidhez',
      reasonFitsSituation: 'Passzol a jelenlegi helyzetedhez',
      reasonFastDelivery: 'Gyorsan megvalósítható',
    },
  },

  en: {
    // ─── Nav ───
    nav: {
      services: 'Services',
      process: 'Process',
    },

    // ─── Hero ───
    hero: {
      label: 'merlon studios',
      title: "Let's build your digital",
      titleBreak: '',
      titleHighlight: 'future.',
      subtitle:
        "Let's build your custom app, website, and automations together -- so technology works for you.",
      ctaPrimary: 'Start the assessment! →',
      ctaSecondary: 'Services ↓',
    },

    // ─── Services ───
    services: {
      sectionLabel: 'Services',
      heading: 'How we can',
      headingHighlight: 'help',
      ctaButton: 'Get a quote →',
      groups: [
        {
          id: 'web',
          num: '01',
          label: 'Web Presence',
          services: [
            { icon: '🌐', title: 'Business Website', description: 'A modern, fast, responsive website that represents your brand.' },
            { icon: '🚀', title: 'Landing Page', description: 'High-converting landing page for campaigns and products -- ready in 2 days.' },
            { icon: '🛒', title: 'Online Store', description: 'E-commerce with payments, inventory management, and automated invoicing.' },
            { icon: '📝', title: 'CMS Setup', description: 'A content management system you can use yourself -- no coding needed.' },
          ],
        },
        {
          id: 'auto',
          num: '02',
          label: 'Automation & AI',
          services: [
            { icon: '⚡', title: 'Workflow Automation', description: 'Automate repetitive tasks using n8n.' },
            { icon: '🤖', title: 'AI Content Generation', description: 'AI-powered content creation that scales your communication.' },
            { icon: '📧', title: 'Email Automation', description: 'Automated email flows, notifications, and follow-ups.' },
            { icon: '🔗', title: 'API Integration', description: 'Connect your systems, sync data, build integrations.' },
          ],
        },
        {
          id: 'data',
          num: '03',
          label: 'Data & Controlling',
          services: [
            { icon: '📊', title: 'BI Dashboard', description: 'Interactive dashboard to see your business data in real time.' },
            { icon: '📈', title: 'Data Visualization', description: 'Your data made clear and visual -- presentation-ready.' },
            { icon: '💼', title: 'Controlling System', description: 'Financial and operational controlling for full transparency.' },
            { icon: '🗂️', title: 'Google Workspace', description: 'Sheets, Drive, Calendar -- organized and optimized.' },
          ],
        },
        {
          id: 'consulting',
          num: '04',
          label: 'Consulting',
          services: [
            { icon: '🧭', title: 'IT Audit', description: "We review your systems and show you where to improve." },
            { icon: '🎓', title: 'AI Workshop', description: "Hands-on workshop -- I'll show you what you can automate with AI." },
            { icon: '👨‍💻', title: 'Dev Coordination', description: 'Already have a developer? I can manage the project for you.' },
            { icon: '🤝', title: "Not sure what's possible", description: "Let's talk -- we'll figure out what you need." },
          ],
        },
      ],
    },

    // ─── Process ───
    process: {
      sectionLabel: 'Process',
      heading: 'How it',
      headingHighlight: 'works',
      ctaButton: 'Get a quote →',
      steps: [
        {
          num: '01',
          title: 'Kickoff',
          description:
            "A short conversation to map out where you are, what goals you want to reach, and what resources are available. We understand your business context so the solution truly fits you.",
        },
        {
          num: '02',
          title: 'Planning',
          description:
            "We put together a clear, transparent plan: what we build, how it works, what steps we take, and when it's ready. Every decision is made together -- no surprises.",
        },
        {
          num: '03',
          title: 'Building',
          description:
            "We build the solution iteratively. Continuous communication, regular demos, instant feedback. You won't disappear for months -- you'll see results in days.",
        },
        {
          num: '04',
          title: 'Delivery',
          description:
            'After thorough testing, we hand over the finished system. We train your team, document everything, and make sure you use it with confidence.',
        },
        {
          num: '05',
          title: 'Monitoring',
          description:
            'After delivery, we fine-tune the system based on your feedback. We monitor performance and optimize wherever needed.',
        },
      ],
    },

    // ─── CTA ───
    cta: {
      sectionLabel: 'Contact',
      heading: "Let's talk",
      subtitle: "Tell me how I can help, and I'll get back to you within 24 hours.",
      ctaPrimary: 'Get a quote →',
    },

    // ─── Radar Data ───
    radar: {
      categories: [
        { id: 'web', label: 'Web Presence', icon: '🌐', description: 'Website, landing page, online store' },
        { id: 'auto', label: 'Automation & AI', icon: '⚡', description: 'Workflows, integrations, AI solutions' },
        { id: 'data', label: 'Data & Controlling', icon: '📊', description: 'Dashboards, reports, data visualization' },
        { id: 'consulting', label: 'Consulting', icon: '🧭', description: 'IT audit, workshop, dev coordination' },
        { id: 'unknown', label: "I'm not sure yet", icon: '🤔', description: "I'll help you figure out what you need" },
      ],
      detailOptions: {
        web: [
          { id: 'new-site', label: 'New site from scratch' },
          { id: 'redesign', label: 'Redesign an existing site' },
          { id: 'landing', label: 'Landing page' },
          { id: 'webshop', label: 'Online store' },
          { id: 'cms', label: 'CMS (content management)' },
          { id: 'multilang', label: 'Multi-language support' },
        ],
        auto: [
          { id: 'workflow', label: 'Workflow automation' },
          { id: 'leadgen', label: 'Lead generation' },
          { id: 'email-comms', label: 'Email / communication automation' },
          { id: 'crm', label: 'CRM integration' },
          { id: 'ai-content', label: 'AI content generation' },
          { id: 'api', label: 'API integration' },
        ],
        data: [
          { id: 'bi-dashboard', label: 'BI dashboard' },
          { id: 'google-workspace', label: 'Google Workspace optimization' },
          { id: 'controlling', label: 'Controlling system' },
          { id: 'dataviz', label: 'Data visualization' },
        ],
        consulting: [
          { id: 'it-audit', label: 'IT audit' },
          { id: 'ai-workshop', label: 'AI workshop' },
          { id: 'dev-coord', label: 'Dev coordination' },
          { id: 'not-sure', label: "Not sure what's possible" },
        ],
        unknown: [],
      },
      maturityOptions: [
        { id: 'idea', label: "It's just an idea", icon: '💡' },
        { id: 'broken', label: "We have something, but it's not working well", icon: '🔧' },
        { id: 'improve', label: 'It works, but needs improvement', icon: '📈' },
        { id: 'urgent', label: 'Urgent -- needed it yesterday', icon: '🚨' },
      ],
      sizeOptions: [
        { id: 'simple', label: 'Simple solution' },
        { id: 'moderate', label: 'A few complex elements' },
        { id: 'complex', label: 'Fully complex' },
        { id: 'unsure', label: "I'm not sure" },
      ],
      deadlineOptions: [
        { id: 'asap', label: 'ASAP' },
        { id: '2-4weeks', label: 'Within 2-4 weeks' },
        { id: '1-3months', label: '1-3 months' },
        { id: 'no-deadline', label: 'No deadline' },
      ],
      stepTexts: {
        1: { title: 'How can we help?', description: 'Pick the area that interests you most.' },
        2: { title: "Let's narrow it down", description: 'Check everything that applies -- you can select multiple.' },
        3: { title: 'Where are you now?', description: 'This helps us find the best approach for you.' },
        4: { title: 'Timeline', description: 'Helps us prioritize and plan the schedule.' },
        5: { title: 'Results', description: 'Based on your answers, here is what we recommend.' },
      },
      services: [
        {
          id: 'corporate-site', name: 'Business Website', category: 'web',
          tags: ['new-site', 'redesign', 'cms', 'multilang'],
          maturityFit: ['idea', 'broken', 'improve'], deliveryDays: 5,
          whyRecommend: {
            default: 'Professional online presence that builds trust.',
            idea: "We'll build your brand identity online from scratch.",
            broken: "We'll modernize your existing site so it finally works.",
          },
        },
        {
          id: 'landing-page', name: 'Landing Page', category: 'web',
          tags: ['landing', 'new-site'],
          maturityFit: ['idea', 'urgent'], deliveryDays: 2,
          whyRecommend: {
            default: 'A fast, conversion-focused page that sells.',
            urgent: 'Ready in as little as 2 days -- perfect when speed matters.',
          },
        },
        {
          id: 'webshop', name: 'Online Store', category: 'web',
          tags: ['webshop', 'new-site'],
          maturityFit: ['idea', 'improve'], deliveryDays: 8,
          whyRecommend: { default: 'An online sales channel with payments and inventory management.' },
        },
        {
          id: 'cms-setup', name: 'CMS Setup', category: 'web',
          tags: ['cms', 'new-site', 'redesign'],
          maturityFit: ['idea', 'broken', 'improve'], deliveryDays: 4,
          whyRecommend: { default: 'A content management system you can use yourself -- no code needed.' },
        },
        {
          id: 'workflow-auto', name: 'Workflow Automation', category: 'auto',
          tags: ['workflow', 'api'],
          maturityFit: ['broken', 'improve', 'urgent'], deliveryDays: 3,
          whyRecommend: {
            default: 'Automate repetitive tasks and save time.',
            broken: "We'll fix your existing processes and automate them.",
          },
        },
        {
          id: 'lead-automation', name: 'Lead Generation Automation', category: 'auto',
          tags: ['leadgen', 'email-comms', 'crm'],
          maturityFit: ['idea', 'improve'], deliveryDays: 4,
          whyRecommend: { default: 'Automated lead collection and processing.' },
        },
        {
          id: 'email-auto', name: 'Email Automation', category: 'auto',
          tags: ['email-comms', 'workflow'],
          maturityFit: ['idea', 'improve', 'urgent'], deliveryDays: 2,
          whyRecommend: {
            default: 'Automated email flows, notifications, and follow-ups.',
            urgent: 'Quick to set up with immediate impact.',
          },
        },
        {
          id: 'crm-integration', name: 'CRM Integration', category: 'auto',
          tags: ['crm', 'api', 'workflow'],
          maturityFit: ['broken', 'improve'], deliveryDays: 4,
          whyRecommend: {
            default: 'Connect your CRM with your existing systems.',
            broken: "We'll organize your scattered data.",
          },
        },
        {
          id: 'ai-content', name: 'AI Content Generation', category: 'auto',
          tags: ['ai-content', 'workflow'],
          maturityFit: ['idea', 'improve'], deliveryDays: 3,
          whyRecommend: { default: 'AI-powered content creation that scales your communication.' },
        },
        {
          id: 'api-integration', name: 'API Integration', category: 'auto',
          tags: ['api', 'workflow'],
          maturityFit: ['broken', 'improve', 'urgent'], deliveryDays: 3,
          whyRecommend: { default: 'Connect your systems and sync your data.' },
        },
        {
          id: 'bi-dashboard', name: 'BI Dashboard', category: 'data',
          tags: ['bi-dashboard', 'dataviz'],
          maturityFit: ['idea', 'improve'], deliveryDays: 6,
          whyRecommend: { default: 'Interactive dashboard to see your data in real time.' },
        },
        {
          id: 'google-workspace', name: 'Google Workspace Optimization', category: 'data',
          tags: ['google-workspace', 'workflow'],
          maturityFit: ['broken', 'improve'], deliveryDays: 3,
          whyRecommend: { default: 'Sheets, Drive, Calendar -- organized into a system.' },
        },
        {
          id: 'controlling', name: 'Controlling System', category: 'data',
          tags: ['controlling', 'bi-dashboard'],
          maturityFit: ['idea', 'improve'], deliveryDays: 7,
          whyRecommend: { default: 'Financial and operational controlling for full transparency.' },
        },
        {
          id: 'dataviz', name: 'Data Visualization', category: 'data',
          tags: ['dataviz', 'bi-dashboard'],
          maturityFit: ['idea', 'improve'], deliveryDays: 4,
          whyRecommend: { default: 'Your data made clear and visual -- presentation-ready.' },
        },
        {
          id: 'it-audit', name: 'IT Audit', category: 'consulting',
          tags: ['it-audit'],
          maturityFit: ['broken', 'improve'], deliveryDays: 3,
          whyRecommend: { default: "We'll review your systems and make recommendations." },
        },
        {
          id: 'ai-workshop', name: 'AI Workshop', category: 'consulting',
          tags: ['ai-workshop', 'not-sure'],
          maturityFit: ['idea', 'improve'], deliveryDays: 1,
          whyRecommend: {
            default: "Hands-on AI workshop -- I'll show you what you can automate.",
            idea: "We'll discover where AI can help your business.",
          },
        },
      ],
      // Radar overlay UI
      back: '← Back',
      next: 'Next →',
      close: 'Close',
      preSelectedHint: "Does this look right? If not, pick another.",
      freeformPlaceholder: 'Tell me freely what you have in mind...',
      projectSizeLabel: 'Project size?',
      deadlineLabel: 'When do you need it?',
      dayUnit: 'days',
      strongMatch: 'Strong match',
      noResults: "Let's talk in person -- that's the best way I can help.",
      sendMessage: 'Send a message',
      formName: 'Your name *',
      formEmail: 'Email *',
      formPhone: 'Phone (optional)',
      formMessage: 'Anything else I should know?',
      formSubmit: 'Send',
      formSubmitting: 'Sending...',
      thankYou: 'Thank you!',
      thankYouMessage: "I'll get back to you within 24 hours.",
      // Scoring reasons
      reasonFitsNeeds: 'Matches your needs',
      reasonFitsSituation: 'Fits your current situation',
      reasonFastDelivery: 'Fast to deliver',
    },
  },
}
