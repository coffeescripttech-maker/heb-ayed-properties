import type {
  NavLink,
  NewsItem,
  ChooseCard,
  DubaiReason,
  Phase,
  StatItem,
} from '../types';

export interface SiteContent {
  nav: {
    links: NavLink[];
  };
  hero: {
    display: string;
    lede: string;
    bullets: string[];
    phoneCardTitle: string;
    phonePlaceholder: string;
    phoneBtn: string;
  };
  deals: {
    title: string;
    subtitle: string;
    cards: {
      badge: string;
      title: string;
      subtitle: string;
      profit: string;
    }[];
    cta: string;
    ctaBtn: string;
    docLabelPurchase: string;
    docLabelSale: string;
    docLabelRental: string;
    downloadLabel: string;
    downloadCertLabel: string;
  };
  howIChoose: {
    title: string;
    subtitle: string;
    cards: ChooseCard[];
    closing: string;
    ctaBtn: string;
  };
  story: {
    title: string;
    expandText: string;
    paragraphs: string[];
    verifyTitle: string;
    verifyText: string;
    moreParagraphs: string[];
  };
  awards: {
    title: string;
    subtitle: string;
    cards: { title: string; image: string }[];
  };
  ceremonies: {
    title: string;
    subtitle: string;
  };
  whyDubai: {
    title: string;
    subtitle: string;
    reasons: DubaiReason[];
  };
  testimonials: {
    title: string;
  };
  steps: {
    title: string;
    subtitle: string;
    phases: Phase[];
    notesTitle: string;
    notes: string[];
  };
  inquiry: {
    title: string;
    stats: StatItem[];
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    budgetLabel: string;
    budgetPlaceholder: string;
    budgetOptions: { value: string; label: string }[];
    readyLabel: string;
    readyPlaceholder: string;
    readyOptions: { value: string; label: string }[];
    submitBtn: string;
    sendingBtn: string;
    successTitle: string;
    successText: string;
  };
  office: {
    title: string;
    subtitle: string;
    addressLabel: string;
    addressLines: string[];
    tourBtn: string;
    mapsBtn: string;
  };
  news: {
    title: string;
    subtitle: string;
    items: NewsItem[];
  };
  quotes: {
    signature: string;
  };
  footer: {
    tagline: string;
    exploreTitle: string;
    exploreLinks: { label: string; href: string }[];
    companyTitle: string;
    companyLinks: { label: string; href: string }[];
    legalTitle: string;
    legalLinks: { label: string; href: string }[];
    copyright: string;
    rights: string;
  };
  paymentModal: {
    title: string;
    eyebrow: string;
    steps: {
      title: string;
      rows?: { label: string; value: string }[];
      body?: string;
    }[];
    disclaimer: string;
    closeBtn: string;
    copyAllBtn: string;
  };
  errors: {
    invalidPhone: string;
    genericError: string;
  };
}

const ar: SiteContent = {
  nav: {
    links: [
      { label: { ar: 'الاستثمارات', en: 'Investments' }, href: '#track' },
      { label: { ar: 'المؤسّس', en: 'Founder' }, href: '#story' },
      { label: { ar: 'الجوائز', en: 'Awards' }, href: '#awards' },
      { label: { ar: 'خطوات الشراء', en: 'Steps' }, href: '#steps' },
      { label: { ar: 'احجز استشارة', en: 'Contact' }, href: '#consultations' },
    ],
  },
  hero: {
    display: 'بدأتُ مهندساً فقيراً. اليوم: <span class="hl">15 عقاراً شخصياً</span>، مليار درهم مبيعات شركتي، 5 ملايين متابع، وتكريمات مؤسسية.',
    lede: 'حقّقت أرباحاً بالملايين عبر شراء العقارات قيد الإنشاء وبيعها عند التسليم أو تأجيرها، آلاف <span style="color:#5DCEF7">المستثمرين يتهافتون على دبي</span>. الأسعار ترتفع. الوحدات الجيدة تُحجَز قبل الإعلان. استثمر الآن في عقارات دبي واحصل على المزايا التالية:',
    bullets: [
      'خطط سداد تصل إلى 7 سنوات',
      'الشراء والبيع والتأجير عن بُعد',
      'إقامة مستثمر لك ولعائلتك',
      'مرخّص من دائرة الأراضي والأملاك',
    ],
    phoneCardTitle: 'اترك رقمك الآن لتحصل على <span class="hl">استشارة مباشرة مع علاء مهرة.</span>',
    phonePlaceholder: 'رقم هاتفك',
    phoneBtn: 'احجز استشارتك',
  },
  deals: {
    title: 'أمثلة على بعض استثماراتي وأرباحي، مع <span class="hl">الأدلّة والمستندات.</span>',
    subtitle: 'أربع صفقات من محفظتي الشخصية. كل درهم موثّق بسند ملكية أو عقد إيجار رسمي.',
    cards: [
      { badge: 'بيع', title: 'المثال الأول', subtitle: 'اشتريت شقة بغرفتين وصالة على الخارطة في برج فيدا مارينا بـ 1.8 مليون، وبعتها فور التسليم بـ 2.85 مليون. صفقة سريعة بفضل الطلب القوي على المارينا، واختيار نوع وحدة مناسب جداً.', profit: 'حقّقت ربح 1.05 مليون درهم خلال 6 أشهر' },
      { badge: 'بيع + إيجار', title: 'المثال الثاني', subtitle: 'اشتريت فيلا بثلاث غرف وصالة في تلال الغاف بـ 2 مليون، أجّرتها سنتين بمعدّل 180 ألف درهم سنوياً، ثم بعتها بـ 3.9 مليون. الإيجار أضاف 360 ألف درهم فوق الربح الرأسمالي.', profit: 'حقّقت ربح 2.26 مليون درهم خلال سنتين' },
      { badge: 'بيع + إيجار', title: 'المثال الثالث', subtitle: 'اشتريت شقة بغرفتين وصالة في برج بالوما بـ 3 مليون، أجّرتها سنتين بمعدّل 240 ألف درهم سنوياً، ثم بعتها بـ 4.1 مليون. الإيجار أضاف 480 ألف درهم فوق الربح الرأسمالي.', profit: 'حقّقت ربح 1.58 مليون درهم خلال سنتين' },
      { badge: 'إيجار، مستمر', title: 'المثال الرابع', subtitle: 'اشتريت شقة بغرفتين وصالة في جميرا ليفينج، مارينا غيت بـ 2.65 مليون، ولا تزال في محفظتي. مؤجَّرة منذ 4 سنوات بمعدّل 300 ألف درهم سنوياً. الاستثمار مستمرّ، يجمع بين الدخل الإيجاري وارتفاع قيمة العقار.', profit: 'حقّقت ربح 1.2 مليون درهم خلال 4 سنوات (مستمرّ)' },
    ],
    cta: 'هل تريد أن تعرف استثماري القادم لكي تنسخه؟',
    ctaBtn: 'اعرف الآن',
    docLabelPurchase: 'مستند الشراء',
    docLabelSale: 'مستند البيع',
    docLabelRental: 'عقد إيجاري',
    downloadLabel: 'حمل المستند',
    downloadCertLabel: 'حمل شهادة الملكية',
  },
  howIChoose: {
    title: 'كيف أختار <span class="hl">المشروع الأكثر ربحاً.</span>',
    subtitle: 'ثلاثة شروط أحرص عليها قبل أن أضع مالي في أي مشروع. كلّما تحقّق منها أكثر، كلّما كان الربح أكبر.',
    cards: [
      {
        title: { ar: '<span class="cond-label">الشرط الأول:</span> يجب أن يكون المطوّر قد سلّم أكثر من 10,000 شقة أو فيلا.', en: '' },
        body: { ar: 'في صفقة برج بالوما، حقّقت <span class="hl-inline">1.1 مليون درهم</span> لأن المطوّر سلّم أكثر من 30,000 منزل لأصحابها. لا تخمين في الجودة. ولا في موعد التسليم. وحين قرّرت البيع أثناء الإنشاء، لم أحتج لإقناع المشتري الجديد. سمعة المطوّر باعت الوحدة بدلاً عنّي.', en: '' },
      },
      {
        title: { ar: '<span class="cond-label">الشرط الثاني:</span> يجب أن يكون المشروع تحفة معمارية في النهار والليل.', en: '' },
        body: { ar: 'في صفقة The Address JBR، حقّقت <span class="hl-inline">600,000 درهم</span> في أشهر قليلة. المبنى تحفة فنية فريدة، يتألّق ليلاً ونهاراً. هناك من يأتي إلى دبي خصيصاً ليسكن فيه أو يلتقط الصور أمامه. حين يصبح المبنى رمزاً بصرياً للمدينة، تتحوّل ملكيته إلى قيمة لا تتبع سعر السوق.', en: '' },
      },
      {
        title: { ar: '<span class="cond-label">الشرط الثالث:</span> يجب أن يحقّق المشروع قانون الندرة.', en: '' },
        body: { ar: 'في صفقة Vida Marina، حقّقت <span class="hl-inline">1 مليون درهم في 6 أشهر فقط</span>. المبنى كان الوحيد في دبي الذي يحوي نادي يخوت ملاصقاً له. السكّان ينزلون بالمصعد ويصعدون إلى يخوتهم في دقائق. حين تملك في مبنى نادر بهذا الشكل، تتحرّر من سعر السوق، وتطلب السعر الذي تريد.', en: '' },
      },
    ],
    closing: 'تحقيق الشروط الثلاثة معاً في صفقة واحدة أمر نادر. شرط واحد كافٍ لربح جيّد. شرطان أو ثلاثة يجلبون أرباحاً ضخمة. هذه المشاريع لا تُعلَن للجمهور، تُباع قبل أن يسمع بها أحد. لتتفادى التخمين، احجز استشارة معنا.',
    ctaBtn: 'احجز استشارة',
  },
  story: {
    title: 'من مهندس براتب 3,000 دولار إلى امتلاك 15 عقاراً، <span class="hl">القصة الكاملة.</span>',
    expandText: 'اقرأ القصة كاملة...',
    paragraphs: [
      'وُلدتُ في غزّة، تحت سماءٍ علّمتني الصمود قبل أيّ درسٍ آخر. سافرتُ إلى الإمارات لأدرس الهندسة، ثم أكملتُ دراساتي العليا في المملكة المتحدة. عُدتُ بشهادتين، وحلمٍ أكبر من راتب مهندس. ادّخرتُ كلّ درهمٍ استطعت، وحرمتُ نفسي من رفاهياتٍ لا أحتاجها، حتى جمعتُ 50,000 دولار. دفعتها كاملةً عربوناً لأوّل شقّةٍ لي على الخارطة في دبي. عند التسليم، بِعتها. بأرباحها، اشتريتُ شقّتين. ثم كرّرتُ العملية. ومرّةً بعد مرّة. حتى صارت محفظتي 15 عقاراً.',
    ],
    verifyTitle: 'تحقّق من صحّة كلامي',
    verifyText: 'أعرف أنّ كلامي وحده لا يكفي. الثقة تُبنى على الأدلّة، لا على الوعود. تصفّح سندات الملكية لمعظم عقاراتي في الأسفل. تحقّق، ثم قرّر أن تثق.',
    moreParagraphs: [
      'في لحظة، أدركتُ أنّ هذه التجربة أكبر منّي، وأنّها يمكن أن تكون مفتاحاً لآلافٍ غيري. أسّستُ شركةً عقارية، ليس لأبيع، بل لأشاركَ ما أعرف. ما ميّزني، أنّي لم أنصح يوماً بمشروعٍ لم أستثمر فيه أنا أوّلاً. ولأنّ النصيحة كانت من جيبٍ دفع، لا من فمٍ نظّر، صدّقني الناس. تدفّق إلينا آلاف المستثمرين من كل قارّات العالم.',
      'على منصّات التواصل، تابعني 5 ملايين شخص، لأنّي كنتُ أكشف كلّ شيءٍ بصدقٍ نادر: سندات الملكية، أرقام الأرباح، تفاصيل كلّ صفقة، كلّها مفتوحة للعالم. شركتي صارت الأكثر مبيعاً في فئتها، وباعت منذ تأسيسها ما يقارب مليار درهم من العقارات. واليوم، أكرّس نفسي وخبرتي لكلّ من آمن بي، ومنحني ثقته.',
    ],
  },
  awards: {
    title: 'جوائز وتكريمات <span class="hl">من مطوّرين ومؤسسات حكومية.</span>',
    subtitle: 'على مدى عملنا في السوق، حصلنا على ثقة كبار المطوّرين وتكريم من جهات حكومية إماراتية رسمية.',
    cards: [
      { title: 'شهادة تكريم من وزارة الداخلية في الإمارات.', image: 'award-01.webp' },
      { title: 'جائزة الأعلى مبيعاً من ثاني أكبر مطوّر فلل فاخرة في دولة الإمارات.', image: 'award-02.webp' },
      { title: 'شهادة تكريم من مؤسسة الشيخ محمد بن راشد للتواصل الثقافي.', image: 'award-03.webp' },
      { title: 'شهادة تكريم من وزارة تنمية المجتمع في الإمارات.', image: 'award-04.webp' },
      { title: 'جائزة الأعلى مبيعاً من أكبر مطوّري ناطحات السحاب في الإمارات.', image: 'award-05.webp' },
      { title: 'شهادة الأعلى مبيعاً من واحد من أكبر مطوّري المدن السكنية في الإمارات.', image: 'award-06.webp' },
      { title: 'شهادة تكريم من مركز تأهيل أصحاب الهمم.', image: 'award-07.webp' },
      { title: 'شهادة تكريم من نادي ذوي الإعاقة الخيري.', image: 'award-08.webp' },
    ],
  },
  ceremonies: {
    title: 'من <span class="hl">حفلات التكريم.</span>',
    subtitle: 'لقطات من المناسبات التي كرّمت فيها كبرى الجهات والمطوّرين عملنا.',
  },
  whyDubai: {
    title: 'ما السرّ وراء الارتفاع المستمرّ في <span class="hl">أسعار عقارات دبي؟</span>',
    subtitle: 'ثلاث قوى هيكلية تدفع الطلب نحو الأعلى عاماً بعد عام.',
    reasons: [
      {
        title: { ar: 'الزيادة غير المسبوقة للضرائب في أوروبا خلقت هجرة أموال', en: '' },
        body: { ar: 'الضرائب في أوروبا ترتفع بشكلٍ غير مسبوق، والأثرياء يصوّتون بأقدامهم. تصدّرت الإمارات قائمة الهجرة العالمية للثروات للعام الثالث على التوالي في 2024، مع <span class="hl">6,700 مليونير جديد</span>. كلّ واحد منهم يحتاج بيتاً في دبي.', en: '' },
        source: { ar: 'المصدر: تقرير Henley &amp; Partners للهجرة الخاصة 2024', en: '' },
      },
      {
        title: { ar: 'النموّ غير المسبوق للشركات في دبي جلب رجال الأعمال', en: '' },
        body: { ar: 'الشركات تتأسّس في دبي بوتيرة غير مسبوقة، ومعها يأتي رجال الأعمال والمستثمرون والمواهب. أضافت دبي <span class="hl">208,030 مقيماً جديداً</span> بين نوفمبر 2024 ونوفمبر 2025، أعلى نموّ سنوي في تاريخها. وعدد السكّان تجاوز <span class="hl">4 مليون</span> للمرّة الأولى.', en: '' },
        source: { ar: 'المصدر: مركز دبي للإحصاء، ساعة السكّان', en: '' },
      },
      {
        title: { ar: 'السياحة في ارتفاع قياسي', en: '' },
        body: { ar: 'من يزور دبي مرّة، يعود. ومن يعود، يجلب عائلته. ثم يشتري. استقبل مطار دبي <span class="hl">95.2 مليون مسافر</span> في 2025، أعلى رقم سنوي لحركة المسافرين الدوليّين سجّله أيّ مطار في التاريخ. ودبي نفسها استقبلت <span class="hl">19.59 مليون سائح</span> بمبيت، بزيادة <span class="hl">5%</span> عن 2024. هذا التدفّق يرفع الطلب على السكن والإيجارات معاً.', en: '' },
        source: { ar: 'المصدر: مطارات دبي، دائرة الاقتصاد والسياحة', en: '' },
      },
    ],
  },
  testimonials: {
    title: 'ماذا يقول عملاؤنا <span class="hl">عنّا.</span>',
  },
  steps: {
    title: 'خطوات شراء عقار قيد الإنشاء في دبي، <span class="hl">دون زيارتها.</span>',
    subtitle: 'كل مرحلة موثّقة ومحميّة من دائرة الأراضي والأملاك.',
    phases: [
      {
        title: { ar: 'الاستشارة واختيار المشروع', en: 'Consultation' },
        steps: [
          { num: '1', label: { ar: 'تحجز معنا استشارة.', en: '' }, detail: { ar: 'نناقش معك أهدافك، ميزانيّتك، المدّة المتوقّعة، وما إذا كنت تخطّط للبيع أم للتأجير.', en: '' } },
          { num: '2', label: { ar: 'نُخبرك بالمشروع الذي نستثمر فيه بأنفسنا.', en: '' }, detail: { ar: 'لا نرشّح أبداً مشروعاً لم نضع أموالنا فيه نحن أوّلاً. خبرتنا تعرف ما يحقّق أعلى عائد.', en: '' } },
          { num: '3', label: { ar: 'نختار لك الوحدة الأعلى أداءً داخل المشروع.', en: '' }, detail: { ar: 'نختار الوحدة الأنسيب من ناحية الطابق والإطلالة والمساحة والتصميم، التي تحقّق أعلى عائد عند البيع والإيجار.', en: '' } },
        ],
      },
      {
        title: { ar: 'حجز العقار والدفع لحساب الضمان', en: 'Booking & Payment' },
        steps: [
          { num: '4', label: { ar: 'نحجز لك العقار بدفعة 2% إلى حساب الضمان.', en: '' }, detail: { ar: 'تذهب 2% من قيمة العقار مباشرةً إلى حساب الضمان لدى دائرة الأراضي والأملاك. لا يصل إليها المطوّر قبل إنجاز مراحل البناء.', en: '' } },
          { num: '5', label: { ar: 'نُرسل لك نموذج الحجز الرسمي.', en: '' }, detail: { ar: 'خلال 24 إلى 48 ساعة، تستلم النموذج الرسمي بتفاصيل الوحدة، السعر المتّفق عليه، وجدول الدفع.', en: '' } },
          { num: '6', label: { ar: 'نُنفّذ الدفعة الأولى، بين 5% و 20% من قيمة العقار.', en: '' }, detail: { ar: 'ننفّذها عبر حساب الضمان وفق خطّة السداد. القيمة بين 5% و 20%، حسب المشروع والمطوّر.', en: '' } },
          { num: '7', label: { ar: 'نُسجّل العقار باسمك في دائرة الأراضي والأملاك بدفع 4%.', en: '' }, detail: { ar: 'نتولّى التسجيل نيابةً عنك. رسوم 4% لمرّة واحدة، لتسجيل ملكيّتك رسمياً في السجلّ الحكومي.', en: '' } },
        ],
      },
      {
        title: { ar: 'استلام شهادة الملكية الحكومية', en: 'Ownership Certificate' },
        steps: [
          { num: '8', label: { ar: 'نُسلّمك النسخة الأصلية من اتفاقية البيع والشراء (SPA).', en: '' }, detail: { ar: 'نستلم النسخة الأصليّة موقّعة من المطوّر، ونُسلّمها لك. تحوي جميع الشروط القانونيّة لصفقتك.', en: '' } },
          { num: '9', label: { ar: 'نُسلّمك شهادة الملكية الرسمية من الحكومة.', en: '' }, detail: { ar: 'تُصدر دائرة الأراضي والأملاك شهادة الملكية الرسميّة (Oqood) باسمك. هي إثبات ملكيّتك القانوني المعترَف به دولياً.', en: '' } },
        ],
      },
    ],
    notesTitle: 'ملاحظات مهمة',
    notes: [
      'جميع المدفوعات محفوظة في حساب ضمان لدى دائرة الأراضي والأملاك. لا يستطيع المطوّر الوصول إليها إلا بعد تسليم المشروع.',
      'العملية كاملة قد تستغرق حتى شهر للحصول على شهادة الدائرة. أنت لست بحاجة لفعل خطوة واحدة. نحن نتولّى كل خطوة بدلاً عنك.',
      'كل شيء يتمّ عبر الإنترنت. لا تحتاج لزيارة دبي. ولا تحتاج لتوكيلنا قانونياً.',
    ],
  },
  inquiry: {
    title: 'احصل على استشارة مع <span class="hl">علاء مهرة.</span>',
    stats: [
      { value: '15 عقار', label: { ar: 'استثمار شخصي', en: 'Personal Investment' } },
      { value: '20 عام', label: { ar: 'خبرة عقارية', en: 'Experience' } },
      { value: '1 مليار', label: { ar: 'مبيعات عقارية', en: 'Sales' } },
    ],
    nameLabel: 'الاسم الكامل',
    namePlaceholder: 'اكتب اسمك الكامل',
    phoneLabel: 'رقم الهاتف',
    phonePlaceholder: 'رقم هاتفك',
    budgetLabel: 'ميزانيتك للاستثمار',
    budgetPlaceholder: 'اختر النطاق',
    budgetOptions: [
      { value: '', label: 'اختر النطاق' },
      { value: 'under-1m', label: 'أقلّ من مليون درهم' },
      { value: '1-2m', label: '1 - 2 مليون درهم' },
      { value: '2-5m', label: '2 - 5 مليون درهم' },
      { value: '5-10m', label: '5 - 10 مليون درهم' },
      { value: '10m-plus', label: 'أكثر من 10 مليون درهم' },
    ],
    readyLabel: 'هل أنت مستعدّ للاستثمار الآن؟',
    readyPlaceholder: 'اختر',
    readyOptions: [
      { value: '', label: 'اختر' },
      { value: 'yes', label: 'نعم' },
      { value: 'no', label: 'لا' },
    ],
    submitBtn: 'سجّل الآن',
    sendingBtn: 'جاري الإرسال...',
    successTitle: 'شكراً لك!',
    successText: 'تمّ استلام طلبك. سيتواصل معك فريقنا في أقرب وقت.',
  },
  office: {
    title: '<span class="hl">مقر الشركة في دبي.</span>',
    subtitle: 'تفضّل بزيارتنا في مقرّنا الرسمي في جميرا بيتش ريزيدنس، المسجَّل لدى دائرة الأراضي والأملاك.',
    addressLabel: 'عنوان المقر',
    addressLines: [
      'مكتب رقم 102، الطابق الأول،',
      'مجمّع الفطّان للأعمال،',
      'جميرا بيتش ريزيدنس، دبي.',
    ],
    tourBtn: 'شاهد جولة في المكتب',
    mapsBtn: 'افتح في خرائط جوجل',
  },
  news: {
    title: 'آخر الأخبار <span class="hl">والإنجازات.</span>',
    subtitle: 'تحديثات من الشركة عن الإنجازات والجوائز والشراكات الاستراتيجية.',
    items: [
      {
        image: 'news-01.webp',
        tag: { ar: 'حدث', en: 'Event' },
        date: { ar: 'نوفمبر 2024', en: 'November 2024' },
        headline: { ar: 'شركة علاء مهرة تشارك في معرض توظيف الإماراتيين.', en: '' },
        featured: true,
      },
      {
        image: 'news-02.webp',
        tag: { ar: 'شراكة', en: 'Partnership' },
        date: { ar: 'أغسطس 2025', en: 'August 2025' },
        headline: { ar: 'صبحا العقارية تستضيف شركة علاء مهرة ضمن دائرتها المغلقة.', en: '' },
      },
      {
        image: 'news-03.webp',
        tag: { ar: 'جائزة', en: 'Award' },
        date: { ar: 'ديسمبر 2024', en: 'December 2024' },
        headline: { ar: 'داماك العقارية تُكرّم شركة علاء مهرة كثاني أعلى الوكلاء مبيعاً.', en: '' },
      },
      {
        image: 'news-04.webp',
        tag: { ar: 'إنجاز', en: 'Milestone' },
        date: { ar: 'أكتوبر 2025', en: 'October 2025' },
        headline: { ar: 'مبيعات شركة علاء مهرة تتخطّى المليار درهم منذ تأسيسها.', en: '' },
      },
      {
        image: 'news-05.webp',
        tag: { ar: 'تكريم حكومي', en: 'Govt Recognition' },
        date: { ar: 'سبتمبر 2024', en: 'September 2024' },
        headline: { ar: 'دائرة الأراضي والأملاك تُصنّف شركة علاء مهرة حليفاً استراتيجياً.', en: '' },
      },
    ],
  },
  quotes: {
    signature: 'علاء مهرة',
  },
  footer: {
    tagline: 'استشارة في عقارات دبي قيد الإنشاء. مرخّصون من دائرة الاقتصاد ودائرة الأراضي والأملاك في دبي.',
    exploreTitle: 'استكشف',
    exploreLinks: [
      { label: 'الاستثمارات', href: '#track' },
      { label: 'المؤسّس', href: '#story' },
      { label: 'الجوائز', href: '#awards' },
      { label: 'لماذا دبي', href: '#why-dubai' },
      { label: 'آراء العملاء', href: '#testimonials' },
    ],
    companyTitle: 'الشركة',
    companyLinks: [
      { label: 'خطوات الشراء', href: '#steps' },
      { label: 'احجز استشارة', href: '#consultations' },
      { label: 'مقرّنا في دبي', href: '#office' },
      { label: 'الأخبار والإنجازات', href: '#news' },
    ],
    legalTitle: 'قانوني',
    legalLinks: [
      { label: 'رقم رخصة الاقتصاد', href: '#' },
      { label: 'رقم وسيط RERA', href: '#' },
      { label: 'سياسة الخصوصية', href: '#' },
      { label: 'الشروط والأحكام', href: '#' },
    ],
    copyright: '© 2026 شركة علاء مهرة العقارية',
    rights: 'جميع الحقوق محفوظة',
  },
  paymentModal: {
    title: 'تعليمات الدفع بالحوالة البنكية',
    eyebrow: 'رسوم الاستشارة العقارية',
    steps: [
      {
        title: 'حوّل المبلغ إلى الحساب التالي',
        rows: [
          { label: 'اسم البنك', value: 'Mashreq Bank' },
          { label: 'عنوان البنك', value: 'مدينة الإنترنت، دبي، الإمارات' },
          { label: 'اسم الحساب', value: 'Alaa Mohra Properties' },
          { label: 'رقم الحساب', value: '019101123598' },
          { label: 'IBAN', value: 'AE680330000019101123598' },
          { label: 'رمز السويفت', value: 'BOMLAEAD' },
          { label: 'عنوان المستفيد', value: 'برج الفطّان، دبي' },
        ],
      },
      {
        title: 'أرسل إثبات التحويل',
        body: 'أرسل صورة أو ملف PDF لإيصال التحويل إلى info@alaamohra.com',
      },
      {
        title: 'سيتّصل بك فريقنا',
        body: 'بعد التأكّد من استلام الدفعة، سيتّصل بك فريقنا لجدولة موعد جلسة الاستشارة.',
      },
    ],
    disclaimer: 'هذا المبلغ ليس جزءاً من قيمة العقار، وهو لرسوم الاستشارة فقط.',
    closeBtn: 'إغلاق',
    copyAllBtn: 'نسخ كلّ التفاصيل',
  },
  errors: {
    invalidPhone: 'يرجى إدخال رقم هاتف صحيح',
    genericError: 'حدث خطأ. حاول مرة أخرى.',
  },
};

const en: SiteContent = {
  nav: {
    links: [
      { label: { ar: 'الاستثمارات', en: 'Investments' }, href: '#track' },
      { label: { ar: 'المؤسّس', en: 'Founder' }, href: '#story' },
      { label: { ar: 'الجوائز', en: 'Awards' }, href: '#awards' },
      { label: { ar: 'خطوات الشراء', en: 'Steps' }, href: '#steps' },
      { label: { ar: 'احجز استشارة', en: 'Contact' }, href: '#consultations' },
    ],
  },
  hero: {
    display: 'I started as a poor engineer. Today: <span class="hl">15 personal properties</span>, billion dirham company sales, 5 million followers, and institutional recognition.',
    lede: 'I made millions buying off-plan properties and selling upon delivery or renting them. Thousands of <span style="color:#5DCEF7">investors are flocking to Dubai</span>. Prices are rising. Good units are booked before announcement. Invest now in Dubai real estate and get the following benefits:',
    bullets: [
      'Payment plans up to 7 years',
      'Buy, sell & rent remotely',
      'Investor residency for you & family',
      'Licensed by Dubai Land Department',
    ],
    phoneCardTitle: 'Leave your number now for a <span class="hl">direct consultation with Alaa Mohra.</span>',
    phonePlaceholder: 'Your phone number',
    phoneBtn: 'Book your consultation',
  },
  deals: {
    title: 'Examples of my investments and profits, with <span class="hl">evidence and documents.</span>',
    subtitle: 'Four deals from my personal portfolio. Every dirham is backed by a title deed or official rental contract.',
    cards: [
      { badge: 'Sale', title: 'Example 1', subtitle: 'I bought a 2BR+ living room off-plan in Vida Marina Tower for AED 1.8M and sold it upon delivery for AED 2.85M. A quick deal thanks to strong marina demand and the right unit type.', profit: 'Made AED 1.05M profit in 6 months' },
      { badge: 'Sale + Rental', title: 'Example 2', subtitle: 'I bought a 3BR+ living room villa in Tilal Al Ghaf for AED 2M, rented it for 2 years at AED 180K/year, then sold for AED 3.9M. Rental added AED 360K on top of capital gain.', profit: 'Made AED 2.26M profit in 2 years' },
      { badge: 'Sale + Rental', title: 'Example 3', subtitle: 'I bought a 2BR+ living room in Paloma Tower for AED 3M, rented for 2 years at AED 240K/year, then sold for AED 4.1M. Rental added AED 480K on top of capital gain.', profit: 'Made AED 1.58M profit in 2 years' },
      { badge: 'Rental, ongoing', title: 'Example 4', subtitle: 'I bought a 2BR+ living room in Jumeirah Living Marina Gate for AED 2.65M, still in my portfolio. Rented for 4 years at AED 300K/year. Ongoing investment combining rental income and appreciation.', profit: 'Made AED 1.2M profit in 4 years (ongoing)' },
    ],
    cta: 'Want to know my next investment so you can copy it?',
    ctaBtn: 'Find out now',
    docLabelPurchase: 'Purchase Document',
    docLabelSale: 'Sale Document',
    docLabelRental: 'Rental Contract',
    downloadLabel: 'Download',
    downloadCertLabel: 'Download Title Deed',
  },
  howIChoose: {
    title: 'How I choose <span class="hl">the most profitable project.</span>',
    subtitle: 'Three conditions I insist on before putting my money in any project. The more are met, the greater the profit.',
    cards: [
      {
        title: { ar: '', en: '<span class="cond-label">Condition 1:</span> The developer must have delivered over 10,000 apartments or villas.' },
        body: { ar: '', en: 'In the Paloma Tower deal, I made <span class="hl-inline">AED 1.1M</span> because the developer delivered over 30,000 homes. No guessing on quality or delivery date. When I decided to sell during construction, I didn\'t need to convince the new buyer. The developer\'s reputation sold the unit for me.' },
      },
      {
        title: { ar: '', en: '<span class="cond-label">Condition 2:</span> The project must be an architectural masterpiece day and night.' },
        body: { ar: '', en: 'In The Address JBR deal, I made <span class="hl-inline">AED 600,000</span> in a few months. The building is a unique work of art, shining day and night. People come to Dubai specifically to stay in it or take photos in front of it. When a building becomes a visual icon of the city, its value transcends the market price.' },
      },
      {
        title: { ar: '', en: '<span class="cond-label">Condition 3:</span> The project must satisfy the law of scarcity.' },
        body: { ar: '', en: 'In the Vida Marina deal, I made <span class="hl-inline">AED 1M in just 6 months</span>. The building was the only one in Dubai with an adjacent yacht club. Residents take the elevator down and board their yachts in minutes. When you own in a rare building like this, you break free from market price and set your own.' },
      },
    ],
    closing: 'Having all three conditions together in one deal is rare. One condition is enough for a good profit. Two or three bring massive profits. These projects are not announced to the public; they sell before anyone hears about them. To avoid speculation, book a consultation with us.',
    ctaBtn: 'Book a consultation',
  },
  story: {
    title: 'From an engineer earning $3,000 to owning 15 properties, <span class="hl">the complete story.</span>',
    expandText: 'Read the full story...',
    paragraphs: [
      'I was born in Gaza, under a sky that taught me resilience before any other lesson. I traveled to the UAE to study engineering, then completed my postgraduate studies in the UK. I returned with two degrees and a dream bigger than an engineer\'s salary. I saved every dirham I could, deprived myself of luxuries I didn\'t need, until I accumulated $50,000. I paid it all as a down payment for my first off-plan apartment in Dubai. Upon delivery, I sold it. With the profits, I bought two apartments. Then I repeated the process. Time after time, until my portfolio reached 15 properties.',
    ],
    verifyTitle: 'Verify my claims',
    verifyText: 'I know my words alone are not enough. Trust is built on evidence, not promises. Browse the title deeds of most of my properties below. Verify, then decide to trust.',
    moreParagraphs: [
      'In a moment, I realized this experience was bigger than me, and it could be a key for thousands of others. I founded a real estate company, not to sell, but to share what I know. What set me apart was that I never recommended a project I hadn\'t invested in first. And because the advice came from a pocket that paid, not a mouth that theorized, people trusted me. Thousands of investors flowed to us from every continent.',
      'On social media, 5 million people followed me because I revealed everything with rare honesty: title deeds, profit figures, details of every deal — all open to the world. My company became the best-selling in its category, selling nearly a billion dirhams in real estate since its founding. Today, I dedicate myself and my expertise to everyone who believed in me and gave me their trust.',
    ],
  },
  awards: {
    title: 'Awards and recognition <span class="hl">from developers and government institutions.</span>',
    subtitle: 'Throughout our work in the market, we have earned the trust of major developers and recognition from official UAE government entities.',
    cards: [
      { title: 'Certificate of appreciation from the UAE Ministry of Interior.', image: 'award-01.webp' },
      { title: 'Top Seller Award from the second largest luxury villa developer in the UAE.', image: 'award-02.webp' },
      { title: 'Certificate of appreciation from the Mohammed bin Rashid Foundation for Cultural Communication.', image: 'award-03.webp' },
      { title: 'Certificate of appreciation from the UAE Ministry of Community Development.', image: 'award-04.webp' },
      { title: 'Top Seller Award from the largest skyscraper developer in the UAE.', image: 'award-05.webp' },
      { title: 'Top Seller Certificate from one of the largest residential city developers in the UAE.', image: 'award-06.webp' },
      { title: 'Certificate of appreciation from the Rehabilitation Center for People of Determination.', image: 'award-07.webp' },
      { title: 'Certificate of appreciation from the Charity Club for People with Disabilities.', image: 'award-08.webp' },
    ],
  },
  ceremonies: {
    title: 'From <span class="hl">award ceremonies.</span>',
    subtitle: 'Footage from events where leading entities and developers honored our work.',
  },
  whyDubai: {
    title: 'What\'s the secret behind the continuous rise in <span class="hl">Dubai property prices?</span>',
    subtitle: 'Three structural forces driving demand higher year after year.',
    reasons: [
      {
        title: { ar: '', en: 'Unprecedented tax increases in Europe created capital migration' },
        body: { ar: '', en: 'Taxes in Europe are rising at an unprecedented rate, and the wealthy are voting with their feet. The UAE topped the global wealth migration list for the third consecutive year in 2024, with <span class="hl">6,700 new millionaires</span>. Each one needs a home in Dubai.' },
        source: { ar: '', en: 'Source: Henley & Partners Private Wealth Migration Report 2024' },
      },
      {
        title: { ar: '', en: 'Unprecedented business growth in Dubai brought entrepreneurs' },
        body: { ar: '', en: 'Companies are being established in Dubai at an unprecedented rate, bringing entrepreneurs, investors, and talent. Dubai added <span class="hl">208,030 new residents</span> between November 2024 and November 2025, the highest annual growth in its history. The population exceeded <span class="hl">4 million</span> for the first time.' },
        source: { ar: '', en: 'Source: Dubai Statistics Center, Population Clock' },
      },
      {
        title: { ar: '', en: 'Tourism at record highs' },
        body: { ar: '', en: 'Those who visit Dubai once, return. And those who return, bring their family. Then they buy. Dubai Airport received <span class="hl">95.2 million passengers</span> in 2025, the highest annual international passenger traffic ever recorded by any airport. Dubai itself received <span class="hl">19.59 million overnight tourists</span>, up <span class="hl">5%</span> from 2024. This flow drives housing and rental demand together.' },
        source: { ar: '', en: 'Source: Dubai Airports, Department of Economy and Tourism' },
      },
    ],
  },
  testimonials: {
    title: 'What our clients say <span class="hl">about us.</span>',
  },
  steps: {
    title: 'Steps to buy an off-plan property in Dubai <span class="hl">without visiting.</span>',
    subtitle: 'Every stage is documented and protected by the Dubai Land Department.',
    phases: [
      {
        title: { ar: '', en: '1. Consultation & Project Selection' },
        steps: [
          { num: '1', label: { ar: '', en: 'Book a consultation with us.' }, detail: { ar: '', en: 'We discuss your goals, budget, expected timeline, and whether you plan to sell or rent.' } },
          { num: '2', label: { ar: '', en: 'We tell you about the project we invest in ourselves.' }, detail: { ar: '', en: 'We never recommend a project we haven\'t invested in first. Our expertise knows what yields the highest return.' } },
          { num: '3', label: { ar: '', en: 'We select the best-performing unit within the project.' }, detail: { ar: '', en: 'We choose the best unit in terms of floor, view, area, and design, yielding the highest return on sale and rental.' } },
        ],
      },
      {
        title: { ar: '', en: '2. Booking & Escrow Payment' },
        steps: [
          { num: '4', label: { ar: '', en: 'We book the property with a 2% deposit to escrow.' }, detail: { ar: '', en: '2% goes directly to the Dubai Land Department escrow account. The developer cannot access it until construction milestones are met.' } },
          { num: '5', label: { ar: '', en: 'We send you the official booking form.' }, detail: { ar: '', en: 'Within 24-48 hours, you receive the official form with unit details, agreed price, and payment schedule.' } },
          { num: '6', label: { ar: '', en: 'We execute the first payment (5%-20% of property value).' }, detail: { ar: '', en: 'Executed via escrow account per the payment plan. The amount is 5%-20% depending on project and developer.' } },
          { num: '7', label: { ar: '', en: 'We register the property in your name at DLD for 4%.' }, detail: { ar: '', en: 'We handle registration on your behalf. 4% one-time fee to officially register your ownership in the government registry.' } },
        ],
      },
      {
        title: { ar: '', en: '3. Receiving Government Ownership Certificate' },
        steps: [
          { num: '8', label: { ar: '', en: 'We deliver the original SPA.' }, detail: { ar: '', en: 'We receive the original signed by the developer and deliver it to you. Contains all legal terms of your deal.' } },
          { num: '9', label: { ar: '', en: 'We deliver the official government title deed.' }, detail: { ar: '', en: 'DLD issues the official ownership certificate (Oqood) in your name. Your internationally recognized legal proof of ownership.' } },
        ],
      },
    ],
    notesTitle: 'Important Notes',
    notes: [
      'All payments are held in a Dubai Land Department escrow account. The developer can only access them after project delivery.',
      'The full process may take up to a month to obtain the DLD certificate. You don\'t need to take a single step. We handle everything on your behalf.',
      'Everything is done online. No need to visit Dubai. No need for a power of attorney.',
    ],
  },
  inquiry: {
    title: 'Get a consultation with <span class="hl">Alaa Mohra.</span>',
    stats: [
      { value: '15 Properties', label: { ar: 'استثمار شخصي', en: 'Personal Investment' } },
      { value: '20 Years', label: { ar: 'خبرة عقارية', en: 'Experience' } },
      { value: '1 Billion', label: { ar: 'مبيعات عقارية', en: 'Sales' } },
    ],
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'Your phone number',
    budgetLabel: 'Investment Budget',
    budgetPlaceholder: 'Select range',
    budgetOptions: [
      { value: '', label: 'Select range' },
      { value: 'under-1m', label: 'Under AED 1M' },
      { value: '1-2m', label: 'AED 1-2M' },
      { value: '2-5m', label: 'AED 2-5M' },
      { value: '5-10m', label: 'AED 5-10M' },
      { value: '10m-plus', label: 'Over AED 10M' },
    ],
    readyLabel: 'Are you ready to invest now?',
    readyPlaceholder: 'Select',
    readyOptions: [
      { value: '', label: 'Select' },
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    submitBtn: 'Register Now',
    sendingBtn: 'Sending...',
    successTitle: 'Thank you!',
    successText: 'Your request has been received. Our team will contact you soon.',
  },
  office: {
    title: '<span class="hl">Our office in Dubai.</span>',
    subtitle: 'Visit us at our official office in Jumeirah Beach Residence, registered with the Dubai Land Department.',
    addressLabel: 'Office Address',
    addressLines: [
      'Office 102, First Floor,',
      'Al Fattan Business Complex,',
      'Jumeirah Beach Residence, Dubai.',
    ],
    tourBtn: 'Take an office tour',
    mapsBtn: 'Open in Google Maps',
  },
  news: {
    title: 'Latest news <span class="hl">and achievements.</span>',
    subtitle: 'Company updates on achievements, awards, and strategic partnerships.',
    items: [
      {
        image: 'news-01.webp',
        tag: { ar: 'حدث', en: 'Event' },
        date: { ar: 'نوفمبر 2024', en: 'November 2024' },
        headline: { ar: '', en: 'Alaa Mohra Company participates in the Emirati Employment Fair.' },
        featured: true,
      },
      {
        image: 'news-02.webp',
        tag: { ar: 'شراكة', en: 'Partnership' },
        date: { ar: 'أغسطس 2025', en: 'August 2025' },
        headline: { ar: '', en: 'Sobha Realty hosts Alaa Mohra Company in its inner circle.' },
      },
      {
        image: 'news-03.webp',
        tag: { ar: 'جائزة', en: 'Award' },
        date: { ar: 'ديسمبر 2024', en: 'December 2024' },
        headline: { ar: '', en: 'DAMAC Properties honors Alaa Mohra Company as second highest-selling agent.' },
      },
      {
        image: 'news-04.webp',
        tag: { ar: 'إنجاز', en: 'Milestone' },
        date: { ar: 'أكتوبر 2025', en: 'October 2025' },
        headline: { ar: '', en: 'Alaa Mohra Company sales surpass AED 1 billion since founding.' },
      },
      {
        image: 'news-05.webp',
        tag: { ar: 'تكريم حكومي', en: 'Govt Recognition' },
        date: { ar: 'سبتمبر 2024', en: 'September 2024' },
        headline: { ar: '', en: 'Dubai Land Department classifies Alaa Mohra Company as a strategic ally.' },
      },
    ],
  },
  quotes: {
    signature: 'Alaa Mohra',
  },
  footer: {
    tagline: 'Consultancy in off-plan Dubai real estate. Licensed by the Dubai Economy Department and Dubai Land Department.',
    exploreTitle: 'Explore',
    exploreLinks: [
      { label: 'Investments', href: '#track' },
      { label: 'Founder', href: '#story' },
      { label: 'Awards', href: '#awards' },
      { label: 'Why Dubai', href: '#why-dubai' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
    companyTitle: 'Company',
    companyLinks: [
      { label: 'Purchase Steps', href: '#steps' },
      { label: 'Book Consultation', href: '#consultations' },
      { label: 'Our Office', href: '#office' },
      { label: 'News & Achievements', href: '#news' },
    ],
    legalTitle: 'Legal',
    legalLinks: [
      { label: 'Economy License No.', href: '#' },
      { label: 'RERA Broker No.', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
    ],
    copyright: '© 2026 Alaa Mohra Real Estate Company',
    rights: 'All rights reserved',
  },
  paymentModal: {
    title: 'Bank Transfer Payment Instructions',
    eyebrow: 'Real Estate Consultation Fee',
    steps: [
      {
        title: 'Transfer the amount to the following account',
        rows: [
          { label: 'Bank Name', value: 'Mashreq Bank' },
          { label: 'Bank Address', value: 'Internet City, Dubai, UAE' },
          { label: 'Account Name', value: 'Alaa Mohra Properties' },
          { label: 'Account Number', value: '019101123598' },
          { label: 'IBAN', value: 'AE680330000019101123598' },
          { label: 'SWIFT Code', value: 'BOMLAEAD' },
          { label: 'Beneficiary Address', value: 'Al Fattan Tower, Dubai' },
        ],
      },
      {
        title: 'Send transfer confirmation',
        body: 'Send a photo or PDF of the transfer receipt to info@alaamohra.com',
      },
      {
        title: 'Our team will contact you',
        body: 'After confirming receipt of payment, our team will contact you to schedule the consultation session.',
      },
    ],
    disclaimer: 'This amount is not part of the property value; it is only for the consultation fee.',
    closeBtn: 'Close',
    copyAllBtn: 'Copy All Details',
  },
  errors: {
    invalidPhone: 'Please enter a valid phone number',
    genericError: 'Something went wrong. Please try again.',
  },
};

export const translations = { ar, en } as const;
