(function () {
  const STRINGS = {
    ar: {
      'nav.projects': 'المشاريع',
      'nav.architecture': 'العمارة',
      'nav.founder': 'أحمد رضا',
      'nav.contact': 'تواصل',
      'search.placeholder': 'ابحث في الموقع...',
      'search.empty': 'مفيش نتائج',
      'search.aria': 'بحث',
      'hero.tagline': 'فن جميلاً.',
      'hero.subtitle': 'مصمم معماري · تصميم داخلي · تخطيط',
      'filter.all': 'الكل',
      'filter.residential': 'سكني',
      'filter.commercial': 'تجاري',
      'filter.interior': 'داخلي',
      'filter.public': 'عام / ثقافي',
      'filter.landscape': 'منتجعات',
      'suggestions.title': 'اقتراحات قد تعجبك',
      'services.title': 'الخدمات',
      'services.arch.title': 'تصميم معماري',
      'services.arch.desc': 'من الفكرة إلى المخططات التنفيذية للمشاريع السكنية والتجارية والعامة.',
      'services.int.title': 'تصميم داخلي',
      'services.int.desc': 'فراغات داخلية متناسقة مع الخامات والإضاءة والأثاث.',
      'services.viz.title': 'تصور ثلاثي الأبعاد',
      'services.viz.desc': 'رندر ومرئيات معمارية لعرض المشروع قبل التنفيذ.',
      'about.tagline': 'فن جميلاً.',
      'about.body': 'مصمم معماري متخصص في المشاريع السكنية والتجارية والتصميم الداخلي. بركز على الحلول الوظيفية مع الحفاظ على الجمال والاستدامة.',
      'about.founder': 'المهندس أحمد رضا — منشئ الموقع ←',
      'about.architecture': 'تاريخ العمارة ←',
      'contact.title': 'تواصل معنا',
      'contact.sub': 'للاستفسارات والمشاريع الجديدة',
      'contact.form': 'نموذج التواصل ←',
      'contact.channel': 'قناة واتساب',
      'contact.channel.val': 'اشترك في القناة',
      'contact.intro': 'تواصل مباشرة عبر القنوات التالية',
      'contact.page.title': 'تواصل معنا',
      'contact.page.meta': 'للاستفسارات والمشاريع الجديدة',
      'contact.call': 'اتصال',
      'footer': '© 2026 DEZN. جميع الحقوق محفوظة.',
      'noResults': 'مفيش نتائج مطابقة لبحثك',
      'noResults.btn': 'عرض كل المشاريع',
      'results': 'تم العثور على {n} مشروع',
      'founder.name': 'م. أحمد رضا',
      'founder.hero': 'منشئ الموقع',
      'founder.meta': 'المهندس أحمد رضا · DEZN',
      'founder.role': 'مصمم معماري · مؤسس DEZN',
      'founder.p1': 'مهندس معماري ومؤسس منصة DEZN — مساحة لعرض المشاريع المعمارية والتصميم الداخلي والتصور البصري.',
      'founder.p2': 'يهتم بالتصميم السكني والتجاري، والحلول الوظيفية مع الحفاظ على الجمال والاستدامة، ويعمل بأدوات مثل AutoCAD و Revit و 3ds Max ضمن مسار من الفكرة إلى التقديم.',
      'founder.p3': 'الموقع ده اتعمل كبورتفوليو ومنصة تواصل مع العملاء المهتمين بمشاريع معمارية وتصميم داخلي.',
      'arch.hero': 'المجال المعماري',
      'arch.meta': 'نبذة تاريخية · معماريون أثّروا في العالم',
      'arch.what': 'ما هي العمارة؟',
      'arch.what.body': 'العمارة هي فن وعلم تصميم المباني والفراغات التي يعيش ويعمل فيها الإنسان. تجمع بين الجمال، الوظيفة، الإنشاء، والبيئة — من المسكن البسيط إلى المدن الكاملة.',
      'arch.timeline': 'محطات تاريخية',
      'arch.t1.t': 'مصر القديمة',
      'arch.t1.b': 'الأهرامات والمعابد — هندسة دقيقة، محاذاة فلكية، ورمزية دينية معمارية ما زالت تُدرَّس حتى اليوم.',
      'arch.t2.t': 'اليونان والرومان',
      'arch.t2.b': 'النظام الكلاسيكي (دوري، أيوني، كورنثي)، القوس والقبة، والمدرجات والمباني العامة كقلب المدينة.',
      'arch.t3.t': 'العمارة الإسلامية',
      'arch.t3.b': 'المساجد والمدارس والأسبلة — القبة، العقد، المشربية، والزخرفة الهندسية مع احترام المناخ والخصوصية.',
      'arch.t4.t': 'النهضة والأوروبية',
      'arch.t4.b': 'إحياء الكلاسيكية، التناسب، والمنظور — من كاتدرائيات القوطي إلى قصور النهضة.',
      'arch.t5.t': 'الحداثة (القرن 20)',
      'arch.t5.b': '«الشكل يتبع الوظيفة»، الخرسانة والزجاج والصلب، والمساكن والمكاتب كمنتجات صناعية قابلة للتكرار.',
      'arch.t6.t': 'المعاصرة والاستدامة',
      'arch.t6.b': 'كفاءة الطاقة، المواد المحلية، التصميم البيئي، والدمج بين التقنية والهوية الثقافية.',
      'arch.famous': 'معماريون مشهورون',
      'arch.why': 'لماذا يهم المصمم المعماري؟',
      'arch.why.p1': 'المعماري لا يرسم شكلاً فقط: يرتّب حركة الناس، الضوء، التهوية، التكلفة، والسلامة. من الفكرة الأولى حتى التفاصيل التنفيذية، دوره يربط حلم العميل بواقع قابل للبناء.',
      'arch.why.p2': 'في DEZN نشتغل على هذا المسار: سكني، تجاري، داخلي، وتصور ثلاثي — مع احترام الوظيفة والجمال.',
      'arch.back': '← العودة للمشاريع',
      'arch.meet': 'تعرّف على أحمد رضا',
      'arch.gaudi.meta': 'إسبانيا',
      'arch.gaudi.d': 'أشكال عضوية مستوحاة من الطبيعة — ساغرادا فاميليا وحديقة غويل في برشلونة.',
      'arch.corb.meta': 'سويسرا / فرنسا',
      'arch.corb.d': 'رواد الحداثة: الوحدات السكنية، «البيت آلة للسكن»، والموديولور كنظام تناسبي.',
      'arch.wright.meta': 'أمريكا',
      'arch.wright.d': 'العمارة العضوية والاندماج مع الموقع — منزل الشلال (Fallingwater) مثالاً.',
      'arch.hadid.meta': 'عراق / بريطانيا',
      'arch.hadid.d': 'أشكال انسيابية وجريئة — من أبرز وجوه العمارة المعاصرة عالمياً.',
      'arch.fathy.meta': 'مصر',
      'arch.fathy.d': 'عمارة الفقراء والخامة المحلية (الطوب اللبن) — قرية القرنة الجديدة وإرث الاستدامة الاجتماعية.',
      'arch.cont.meta': 'العالم العربي',
      'arch.cont.d': 'مشاريع تمزج الهوية المحلية مع تقنيات البناء الحديثة في المنطقة العربية.',
      'works.btn': 'أعماله التاريخية ←',
      'works.section': 'أعمال تاريخية',
      'back.architecture': '← العودة لتاريخ العمارة',
      'back.projects': 'المشاريع',
      'back.services': '← العودة للخدمات',
      'back.request': 'اطلب الخدمة',
      'back.architect': '← العودة للمعماري',
      'related': 'مشاريع مشابهة',
      'lang.ar': 'عربي',
      'lang.en': 'English',
      'p.villa': 'فيلا سكنية حديثة',
      'p.complex': 'مجمع سكني فاخر',
      'p.apartment': 'تصميم داخلي - شقة',
      'p.office': 'مبنى إداري حديث',
      'p.museum': 'مركز ثقافي ومتحف',
      'p.resort': 'منتجع سياحي',
      'p.beach': 'بيت صيفي على البحر',
      'p.mall': 'مركز تسوق حديث',
      'p.workspace': 'تصميم مكتب حديث',
      'a.gaudi': 'أنطوني غاودي',
      'a.corbusier': 'لو كوربوزييه',
      'a.wright': 'فرانك لويد رايت',
      'a.hadid': 'زها حديد',
      'a.fathy': 'حسن فتحي',
      'a.contemporary': 'طلال العيسوي / جيل معاصر'
    },
    en: {
      'nav.projects': 'Projects',
      'nav.architecture': 'Architecture',
      'nav.founder': 'Ahmed Reda',
      'nav.contact': 'Contact',
      'search.placeholder': 'Search the site...',
      'search.empty': 'No results',
      'search.aria': 'Search',
      'hero.tagline': 'Beautiful art.',
      'hero.subtitle': 'Architect · Interior Design · Planning',
      'filter.all': 'All',
      'filter.residential': 'Residential',
      'filter.commercial': 'Commercial',
      'filter.interior': 'Interior',
      'filter.public': 'Public / Cultural',
      'filter.landscape': 'Resorts',
      'suggestions.title': 'You may also like',
      'services.title': 'Services',
      'services.arch.title': 'Architectural Design',
      'services.arch.desc': 'From concept to working drawings for residential, commercial, and public projects.',
      'services.int.title': 'Interior Design',
      'services.int.desc': 'Cohesive interiors with materials, lighting, and furniture.',
      'services.viz.title': '3D Visualization',
      'services.viz.desc': 'Renders and architectural visuals before construction.',
      'about.tagline': 'Beautiful art.',
      'about.body': 'An architect focused on residential and commercial projects and interiors. Functional solutions with beauty and sustainability.',
      'about.founder': 'Eng. Ahmed Reda — Site founder →',
      'about.architecture': 'Architecture history →',
      'contact.title': 'Contact us',
      'contact.sub': 'For inquiries and new projects',
      'contact.form': 'Contact form →',
      'contact.channel': 'WhatsApp Channel',
      'contact.channel.val': 'Join the channel',
      'contact.intro': 'Reach us directly via',
      'contact.page.title': 'Contact us',
      'contact.page.meta': 'For inquiries and new projects',
      'contact.call': 'Call',
      'footer': '© 2026 DEZN. All rights reserved.',
      'noResults': 'No matching results',
      'noResults.btn': 'Show all projects',
      'results': 'Found {n} projects',
      'founder.name': 'Eng. Ahmed Reda',
      'founder.hero': 'Site founder',
      'founder.meta': 'Eng. Ahmed Reda · DEZN',
      'founder.role': 'Architect · Founder of DEZN',
      'founder.p1': 'Architect and founder of DEZN — a space to showcase architectural projects, interiors, and visualization.',
      'founder.p2': 'Focused on residential and commercial design and functional solutions with beauty and sustainability, working with AutoCAD, Revit, and 3ds Max from concept to presentation.',
      'founder.p3': 'This site was built as a portfolio and a way to connect with clients interested in architecture and interior design.',
      'arch.hero': 'Architecture',
      'arch.meta': 'A brief history · Architects who shaped the world',
      'arch.what': 'What is architecture?',
      'arch.what.body': 'Architecture is the art and science of designing buildings and spaces where people live and work. It brings together beauty, function, structure, and environment — from a simple home to entire cities.',
      'arch.timeline': 'Historical milestones',
      'arch.t1.t': 'Ancient Egypt',
      'arch.t1.b': 'Pyramids and temples — precise engineering, astronomical alignment, and religious symbolism still studied today.',
      'arch.t2.t': 'Greece and Rome',
      'arch.t2.b': 'The classical orders (Doric, Ionic, Corinthian), the arch and dome, and public buildings as the heart of the city.',
      'arch.t3.t': 'Islamic architecture',
      'arch.t3.b': 'Mosques, schools, and public fountains — dome, arch, mashrabiya, and geometric ornament with respect for climate and privacy.',
      'arch.t4.t': 'Renaissance and Europe',
      'arch.t4.b': 'Revival of classicism, proportion, and perspective — from Gothic cathedrals to Renaissance palaces.',
      'arch.t5.t': 'Modernism (20th century)',
      'arch.t5.b': '"Form follows function," concrete, glass, and steel, and housing and offices as industrial, repeatable products.',
      'arch.t6.t': 'Contemporary and sustainability',
      'arch.t6.b': 'Energy efficiency, local materials, environmental design, and blending technology with cultural identity.',
      'arch.famous': 'Famous architects',
      'arch.why': 'Why does the architect matter?',
      'arch.why.p1': 'An architect does not only draw a shape: they organize movement, light, ventilation, cost, and safety. From first idea to construction details, their role links the client\'s dream to a buildable reality.',
      'arch.why.p2': 'At DEZN we work along this path: residential, commercial, interior, and 3D visualization — with respect for function and beauty.',
      'arch.back': '← Back to projects',
      'arch.meet': 'Meet Ahmed Reda',
      'arch.gaudi.meta': 'Spain',
      'arch.gaudi.d': 'Organic forms inspired by nature — Sagrada Família and Park Güell in Barcelona.',
      'arch.corb.meta': 'Switzerland / France',
      'arch.corb.d': 'Pioneer of modernism: housing units, "the house is a machine for living," and the Modulor.',
      'arch.wright.meta': 'USA',
      'arch.wright.d': 'Organic architecture and site integration — Fallingwater as an example.',
      'arch.hadid.meta': 'Iraq / Britain',
      'arch.hadid.d': 'Fluid, bold forms — among the leading faces of contemporary architecture worldwide.',
      'arch.fathy.meta': 'Egypt',
      'arch.fathy.d': 'Architecture for the poor and local materials (mud brick) — New Gourna and social sustainability.',
      'arch.cont.meta': 'Arab world',
      'arch.cont.d': 'Projects that blend local identity with modern building techniques in the Arab region.',
      'works.btn': 'Historic works →',
      'works.section': 'Historic works',
      'back.architecture': '← Back to architecture',
      'back.projects': 'Projects',
      'back.services': '← Back to services',
      'back.request': 'Request service',
      'back.architect': '← Back to architect',
      'related': 'Similar projects',
      'lang.ar': 'عربي',
      'lang.en': 'English',
      'p.villa': 'Modern Residential Villa',
      'p.complex': 'Luxury Residential Complex',
      'p.apartment': 'Interior Design — Apartment',
      'p.office': 'Modern Office Building',
      'p.museum': 'Cultural Center & Museum',
      'p.resort': 'Tourist Resort',
      'p.beach': 'Seaside Summer House',
      'p.mall': 'Modern Shopping Center',
      'p.workspace': 'Modern Office Interior',
      'a.gaudi': 'Antoni Gaudí',
      'a.corbusier': 'Le Corbusier',
      'a.wright': 'Frank Lloyd Wright',
      'a.hadid': 'Zaha Hadid',
      'a.fathy': 'Hassan Fathy',
      'a.contemporary': 'Contemporary generation'
    }
  };

  function getLang() {
    try { return localStorage.getItem('dezn-lang') || 'ar'; } catch (e) { return 'ar'; }
  }
  function setLang(lang) {
    try { localStorage.setItem('dezn-lang', lang); } catch (e) {}
  }
  function t(key, lang) {
    lang = lang || getLang();
    return (STRINGS[lang] && STRINGS[lang][key]) || (STRINGS.ar && STRINGS.ar[key]) || key;
  }

  function applyLanguage(lang) {
    if (lang !== 'ar' && lang !== 'en') lang = 'ar';
    setLang(lang);
    const html = document.documentElement;
    html.lang = lang;
    /* Keep page layout RTL so header doesn't jump LTR↔RTL */
    html.dir = 'rtl';
    document.body.classList.toggle('lang-en', lang === 'en');
    document.body.classList.toggle('lang-ar', lang === 'ar');
    document.body.classList.toggle('is-en', lang === 'en');
    document.body.classList.toggle('is-ar', lang === 'ar');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key, lang);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
      else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'), lang);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'), lang));
    });
    document.querySelectorAll('[data-i18n-p]').forEach(el => {
      el.textContent = t('p.' + el.getAttribute('data-i18n-p'), lang);
    });
    document.querySelectorAll('[data-i18n-a]').forEach(el => {
      el.textContent = t('a.' + el.getAttribute('data-i18n-a'), lang);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    updateToggleLabel(lang);
    window.dispatchEvent(new CustomEvent('dezn-lang', { detail: { lang } }));
  }

  function updateToggleLabel(lang) {
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      // Show the OTHER language as action label
      btn.textContent = lang === 'ar' ? 'English' : 'عربي';
      btn.setAttribute('data-lang-next', lang === 'ar' ? 'en' : 'ar');
      btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    });
  }

  function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const next = btn.getAttribute('data-lang-next') || (getLang() === 'ar' ? 'en' : 'ar');
        applyLanguage(next);
      });
    });
    applyLanguage(getLang());
  }

  window.DEZN_I18N = { t, getLang, setLang, applyLanguage, STRINGS };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangSwitcher);
  } else {
    initLangSwitcher();
  }
})();
