import type { AppConfig, Videos } from './types';

const cloudflareSubdomain = 'customer-je6w6lwjo03k0crg.cloudflarestream.com';

const videos: Videos = {
  ceremony_01: { id: '8cc2941da5c4a44b52662cfcdb5ff936', title: { ar: 'جائزة الأعلى مبيعاً 2023', en: 'Top Seller Award 2023' } },
  ceremony_02: { id: 'b489cd690f7ed5dc7152e7b51caea70f', title: { ar: 'حفل تكريم شرطة أبوظبي', en: 'Abu Dhabi Police Recognition' } },
  ceremony_03: { id: '4661fba3e6f2f19d4601edb6e41a6a4b', title: { ar: 'جائزة الأعلى مبيعاً 2024', en: 'Top Seller Award 2024' } },
  ceremony_04: { id: '0154a04404df29fe2219574bc37277b7', title: { ar: 'حفل تكريم بنك المشرق', en: 'Mashreq Bank Recognition' } },
  ceremony_05: { id: 'b30cf11f52a3eff37f67ea1046034def', title: { ar: 'حفل افتتاح الفرع الجديد', en: 'New Branch Opening' } },
  ceremony_06: { id: '68a0a07d4a7421976c30826232ed30ba', title: { ar: 'جائزة الأعلى مبيعاً 2025', en: 'Top Seller Award 2025' } },
  testimonial_01: { id: 'c820d47fc36ea2a835dded12e5cea1e6', title: { ar: 'أحمد الموسوي', en: 'Ahmed Al-Musawi' }, loc: { ar: 'مقيم في الإمارات', en: 'Based in the UAE' } },
  testimonial_02: { id: '41809f7b7e46a75ee1d2a593bb73bdfa', title: { ar: 'المهندس بلال حبشي', en: 'Engineer Bilal Habashi' }, loc: { ar: 'مقيم في فلسطين', en: 'Based in Palestine' } },
  testimonial_03: { id: 'a9c7c180fa007621d27e7786cbae3b2d', title: { ar: 'عمر الحارثي', en: 'Omar Al-Harthi' }, loc: { ar: 'مقيم في الولايات المتحدة', en: 'Based in the United States' } },
  office_tour: { id: '4c9487b796b0fa89159e8c18ff936df1', title: { ar: 'جولة في المكتب', en: 'Office Tour' } },
};

const downloadSources: Record<string, string> = {
  'hero-phone.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.15 AM.jpeg',
  'story-01.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.28 AM.jpeg',
  'team-01.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.18 AM.jpeg',
  'office-01.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.18 AM.jpeg',
  'inquiry-bg.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.29 AM (2).jpeg',
  'news-01.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.28 AM.jpeg',
  'news-02.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.28 AM (1).jpeg',
  'news-03.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.28 AM (2).jpeg',
  'news-04.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.29 AM.jpeg',
  'news-05.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.29 AM (1).jpeg',
  'deal-01-purchase.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.18 AM (1).jpeg',
  'deal-01-sale.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.16 AM (1).jpeg',
  'deal-02-purchase.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.18 AM (2).jpeg',
  'deal-02-sale.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.16 AM (3).jpeg',
  'deal-03-purchase.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.22 AM (2).jpeg',
  'deal-03-sale.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.17 AM (1).jpeg',
  'deal-04-purchase.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.17 AM (2).jpeg',
  'deal-04-ejari.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.17 AM (3).jpeg',
  'deed-01.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.17 AM.jpeg',
  'deed-02.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.20 AM.jpeg',
  'deed-03.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.22 AM.jpeg',
  'deed-04.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.21 AM.jpeg',
  'deed-05.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.20 AM (1).jpeg',
  'deed-06.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.20 AM (2).jpeg',
  'deed-07.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.20 AM (3).jpeg',
  'deed-08.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.21 AM (1).jpeg',
  'deed-09.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.21 AM (3).jpeg',
  'deed-10.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.16 AM (2).jpeg',
  'deed-11.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.19 AM.jpeg',
  'deed-12.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.21 AM (2).jpeg',
  'deed-13.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.16 AM.jpeg',
  'deed-14.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.22 AM (1).jpeg',
  'deed-15.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.19 AM (1).jpeg',
  'award-01.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.23 AM.jpeg',
  'award-02.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.24 AM.jpeg',
  'award-03.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.23 AM (2).jpeg',
  'award-04.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.23 AM (3).jpeg',
  'award-05.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.23 AM (1).jpeg',
  'award-06.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.24 AM (1).jpeg',
  'award-07.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.24 AM (2).jpeg',
  'award-08.webp': 'real/WhatsApp Image 2026-05-30 at 1.11.24 AM (3).jpeg',
};

export const config: AppConfig = {
  crmBase: 'https://crm.alaainvest.com',
  apiUrl: 'https://crm.alaainvest.com/api/store-lead-api',
  qualifyApiUrl: 'https://crm.alaainvest.com/api/update-lead-api',
  apiKey: 'hv8tgrt*@$&*8vbfdubg8tvbruvburvbuygfdbvv4r43fesn3#*$@Y$',
  source: { ar: 'Iheb Ayed Properties', en: 'Iheb Ayed Properties English' },
  thankYou: { ar: '/thank-you', en: '/english/thank-you' },
  cloudflare: {
    customerCode: 'je6w6lwjo03k0crg',
    subdomain: cloudflareSubdomain,
  },
  mapsUrl: 'https://maps.app.goo.gl/s2oUn3j6sGxmARKv8',
  assetBase: '/img/',
  downloadSources,
  videos,
  images: {
    heroPhone: 'hero-bg.jpg',
    story: 'team-01.webp',
    office: 'office-01.webp',
    inquiryBg: 'hero-phone.webp',
    team: 'inquiry-bg.webp',
    news: ['news-01.webp', 'news-02.webp', 'news-03.webp', 'news-04.webp', 'news-05.webp'],
    awards: Array.from({ length: 8 }, (_, i) => 'award-' + String(i + 1).padStart(2, '0') + '.webp'),
    deeds: Array.from({ length: 15 }, (_, i) => 'deed-' + String(i + 1).padStart(2, '0') + '.webp'),
    deals: [
      { purchase: 'deal-01-purchase.webp', sale: 'deal-01-sale.webp' },
      { purchase: 'deal-02-purchase.webp', sale: 'deal-02-sale.webp' },
      { purchase: 'deal-03-purchase.webp', sale: 'deal-03-sale.webp' },
      { purchase: 'deal-04-purchase.webp', sale: 'deal-04-ejari.webp' },
    ],
  },
  promiseQuotes: [
    {
      ar: 'إن نصحتك بمشروع قيد الإنشاء، فاعلم أنّي اشتريت فيه. <span class="promise-hl">هذا وعدي، ومصدر قوتي</span>، وجلب لي آلاف الزبائن.',
      en: 'If I recommend an off-plan project, know that I&rsquo;m invested in it. <span class="promise-hl">This is my promise and my edge</span>, and it has brought me thousands of clients.',
    },
    {
      ar: 'أوّل عقار اشتريته قبل عشر سنوات، لم يكن معي إلّا <span class="promise-hl">20% من قيمته</span>. كنتُ أعلم أنّ الله سيرزقني جزاء شجاعتي.',
      en: 'My first property, ten years ago, I had only <span class="promise-hl">20% of its value</span>. I knew God would reward me for my courage.',
    },
    {
      ar: 'سيأتي يوم لن تتمكّن فيه من امتلاك بيت، حتّى لو كنت تملك المال. <span class="promise-hl">الطلب على السكن يتزايد</span> في أنحاء العالم.',
      en: 'A day is coming when you won&rsquo;t be able to own a home, even if you have the money. <span class="promise-hl">Demand for housing is climbing</span> around the world.',
    },
    {
      ar: 'أوّل إنسان ظهر في التاريخ كان اسمه «رجل الكهف»، لأنّ امتلاك مسكن هو <span class="promise-hl">التعريف الأكثر جاذبية للرجل</span>.',
      en: 'The first human in history was called &ldquo;Cave Man,&rdquo; because owning a home is <span class="promise-hl">the most compelling definition of a man</span>.',
    },
    {
      ar: 'يوماً ما سيكبر أولادك، وتصبح لهم أهدافهم، والإنفاق عليك لن يكون منها. لذلك قال أجدادنا: <span class="promise-hl">العقار هو الابن البارّ</span>.',
      en: 'One day your children will grow up with their own goals, and supporting you won&rsquo;t be one of them. That&rsquo;s why our ancestors said: <span class="promise-hl">real estate is the loyal son</span>.',
    },
    {
      ar: 'أمّي كانت ذكيّة جدّاً. علّمتني أنّه بدل أن تشتري البيض كلّ يوم، <span class="promise-hl">اشترِ دجاجة مرّة واحدة، واتركها تبيض لك كلّ يوم</span>.',
      en: 'My mother was very wise. She taught me: instead of buying eggs every day, <span class="promise-hl">buy a chicken once, and let it lay eggs for you every day</span>.',
    },
  ],
};

/* ─────────── Helper functions ─────────── */

export function streamThumb(videoId: string, height = 640): string {
  if (!videoId || videoId === 'PLACEHOLDER') return '';
  return `https://${cloudflareSubdomain}/${videoId}/thumbnails/thumbnail.jpg?time=1s&height=${height}`;
}

export function streamIframe(videoId: string): string {
  if (!videoId || videoId === 'PLACEHOLDER') return '';
  const poster = streamThumb(videoId, 600);
  const qs = 'autoplay=true&letterboxColor=000000';
  return `https://${cloudflareSubdomain}/${videoId}/iframe?${qs}${poster ? '&poster=' + encodeURIComponent(poster) : ''}`;
}

export function img(filename: string): string {
  return `/img/${filename}`;
}

export function downloadUrl(webpFilename: string): string {
  const rel = downloadSources[webpFilename];
  if (!rel) return img(webpFilename);
  return `/img/${rel}`;
}
