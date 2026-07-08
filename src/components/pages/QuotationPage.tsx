import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';

/* ─────────── Inline SVGs ─────────── */
const checkIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 16, height: 16 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const starIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 18, height: 18 }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const diamondIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 18, height: 18 }}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 7v10l10 5 10-5V7" />
    <path d="M12 22V12" />
  </svg>
);

/* ─────────── Data ─────────── */
const options = [
  {
    name: { ar: 'احترافي', en: 'Professional' },
    price: '3,000',
    badge: { ar: '', en: '' },
    cms: false,
    features: [
      {
        key: 'bilingual',
        label: {
          ar: 'ثنائي اللغة (عربي / إنجليزي)',
          en: 'Bilingual (Arabic / English)'
        }
      },
      {
        key: 'responsive',
        label: { ar: 'متجاوب بالكامل', en: 'Fully Responsive' }
      },
      {
        key: 'performance',
        label: {
          ar: 'أداء عالي 90+ Lighthouse',
          en: '90+ Lighthouse Performance'
        }
      },
      { key: 'seo', label: { ar: 'تحسين محركات بحث أساسي', en: 'SEO Basics' } },
      {
        key: 'nav',
        label: { ar: 'قائمة تنقل ثابتة', en: 'Sticky Navigation' }
      },
      { key: 'hero', label: { ar: 'قسم رئيسي (هيرو)', en: 'Hero Section' } },
      {
        key: 'about',
        label: { ar: 'قسم نبذة / قصة', en: 'About / Story Section' }
      },
      {
        key: 'portfolio',
        label: {
          ar: 'قسم المشاريع مع مستندات',
          en: 'Portfolio Section with Documents'
        }
      },
      {
        key: 'steps',
        label: { ar: 'دليل خطوات تفاعلي', en: 'Step-by-Step Process Guide' }
      },
      { key: 'awards', label: { ar: 'معرض الجوائز', en: 'Awards Gallery' } },
      {
        key: 'testimonials',
        label: { ar: 'شهادات العملاء (فيديو)', en: 'Client Video Testimonials' }
      },
      { key: 'video', label: { ar: 'معرض فيديوهات', en: 'Video Gallery' } },
      { key: 'news', label: { ar: 'قسم الأخبار', en: 'News / Blog Section' } },
      {
        key: 'location',
        label: {
          ar: 'الموقع + خرائط جوجل',
          en: 'Office Location + Google Maps'
        }
      },
      {
        key: 'quotes',
        label: {
          ar: 'عرض اقتباسات العلامة التجارية',
          en: 'Brand Quotes Carousel'
        }
      },
      {
        key: 'form',
        label: { ar: 'نموذج تواصل مع CRM', en: 'Contact Form with CRM' }
      },
      {
        key: 'zoom',
        label: { ar: 'مشاهدة الصور بتكبير', en: 'Image Zoom Modal' }
      },
      {
        key: 'downloads',
        label: { ar: 'تحميل المستندات', en: 'Downloadable Documents' }
      },
      {
        key: 'footer',
        label: { ar: 'تذييل متعدد الأقسام', en: 'Multi-Column Footer' }
      },
      {
        key: 'utm',
        label: { ar: 'تتبع الحملات (UTM)', en: 'UTM Campaign Tracking' }
      },
      {
        key: 'animations',
        label: { ar: 'رسوم متحركة عند التمرير', en: 'Scroll Animations' }
      },
      {
        key: 'code',
        label: {
          ar: 'كود مصدري - ملكك بالكامل',
          en: 'Full Source Code Ownership'
        }
      },
      {
        key: 'hosting',
        label: {
          ar: 'إعداد استضافة - شهر مجاني',
          en: 'Free Hosting Setup (1 month)'
        }
      }
    ]
  },
  {
    name: { ar: 'احترافي + نظام إدارة محتوى', en: 'Professional + CMS' },
    price: '5,000',
    badge: { ar: 'الأكثر طلباً', en: 'BEST VALUE' },
    cms: true,
    features: [
      {
        key: 'everything-1',
        label: { ar: 'كل ما في الخيار الأول', en: 'Everything in Option 1' }
      },
      {
        key: 'cms',
        label: { ar: 'لوحة تحكم CMS مخصصة', en: 'Custom CMS Dashboard' }
      },
      {
        key: 'cms-hero',
        label: {
          ar: 'إدارة أقسام الهيرو والنبذة',
          en: 'Manage Hero & About Sections'
        }
      },
      {
        key: 'cms-projects',
        label: {
          ar: 'إضافة وتعديل المشاريع',
          en: 'Add / Edit Portfolio Projects'
        }
      },
      {
        key: 'cms-news',
        label: { ar: 'نشر المقالات والأخبار', en: 'Publish News & Blog Posts' }
      },
      {
        key: 'cms-testimonials',
        label: { ar: 'إدارة شهادات العملاء', en: 'Manage Client Testimonials' }
      },
      {
        key: 'cms-media',
        label: { ar: 'رفع وإدارة الوسائط', en: 'Upload & Manage Media' }
      },
      {
        key: 'cms-awards',
        label: {
          ar: 'تحديث الجوائز والشهادات',
          en: 'Update Awards & Certifications'
        }
      },
      {
        key: 'cms-api',
        label: { ar: 'طبقة API بين CMS والموقع', en: 'REST API Layer' }
      }
      // { key: 'cms-training', label: { ar: 'فيديو تدريبي شامل', en: 'Training Video' } },
    ]
  }
];

/* ─────────── Styles ─────────── */
const styles = {
  page: {
    padding: '40px 0 60px'
  },
  section: {
    marginBottom: 48
  },
  sectionTitle: {
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontFamily: 'var(--font-manrope)',
    fontWeight: 800,
    lineHeight: 1.3,
    letterSpacing: '-0.025em',
    margin: '0 0 8px 0'
  } as React.CSSProperties,
  sectionSub: {
    color: 'var(--color-text-mid)',
    fontSize: 15,
    lineHeight: 1.7,
    margin: '0 0 28px 0',
    maxWidth: 560
  } as React.CSSProperties,
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
    gap: 20
  } as React.CSSProperties,
  card: {
    background: 'var(--color-bg-card)',
    border: '1px solid var(--color-hair-strong)',
    borderRadius: 'var(--radius-card-lg)',
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 20,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative' as const,
  } as React.CSSProperties,
  cardHighlight: {
    background: 'var(--color-bg-card)',
    border: '1px solid rgba(93, 206, 247, 0.3)',
    borderRadius: 'var(--radius-card-lg)',
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 20,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative' as const,
    boxShadow:
      '0 0 0 1px rgba(93, 206, 247, 0.06), 0 24px 60px -30px rgba(93, 206, 247, 0.25)',
  } as React.CSSProperties,
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '5px 14px',
    background: 'linear-gradient(135deg, #5DCEF7, #B19CFF)',
    color: '#0B131B',
    borderRadius: 9999,
    fontFamily: 'var(--font-manrope)',
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    whiteSpace: 'nowrap' as const,
    position: 'absolute' as const,
    top: -12,
    insetInlineEnd: 24
  },
  price: {
    fontFamily: 'var(--font-manrope)',
    fontWeight: 800,
    fontSize: 'clamp(32px, 5vw, 48px)',
    lineHeight: 1,
    color: 'var(--color-text)'
  } as React.CSSProperties,
  priceSpan: {
    fontFamily: 'var(--font-manrope)',
    fontWeight: 500,
    fontSize: 16,
    color: 'var(--color-text-dim)'
  } as React.CSSProperties,
  featureRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '8px 0',
    borderBottom: '1px solid var(--color-hair)',
    fontSize: 14,
    lineHeight: 1.5,
    color: 'var(--color-text-soft)',
    fontWeight: 500
  } as React.CSSProperties,
  featureIcon: (included: boolean) =>
    ({
      width: 24,
      height: 24,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      background: included
        ? 'rgba(93, 212, 145, 0.12)'
        : 'rgba(139, 152, 168, 0.08)',
      color: included ? 'var(--color-green)' : 'var(--color-text-dim)'
    }) as React.CSSProperties,
  ctaBtn: {
    display: 'inline-block',
    width: '100%',
    padding: '14px 28px',
    border: 'none',
    borderRadius: 9999,
    background: 'linear-gradient(135deg, #5DCEF7, #B19CFF)',
    color: '#0B131B',
    fontFamily: 'var(--font-manrope)',
    fontWeight: 700,
    fontSize: 15,
    cursor: 'pointer',
    textAlign: 'center' as const,
    textDecoration: 'none',
    transition: 'transform 0.25s, box-shadow 0.25s'
  },
  arabic: {
    fontFamily: 'var(--font-cairo)'
  } as React.CSSProperties
};

/* ─────────── Component ─────────── */
export function QuotationPage() {
  const { t: _t, locale } = useLocale();
  const ref = useReveal<HTMLDivElement>();
  const isAr = locale === 'ar';
  const pageStyle = isAr ? { ...styles.page, ...styles.arabic } : styles.page;
  const sectionTitleStyle = isAr
    ? {
        ...styles.sectionTitle,
        fontFamily: 'var(--font-cairo)',
        letterSpacing: 0
      }
    : styles.sectionTitle;

  return (
    <div ref={ref} className="reveal" style={pageStyle}>
      {/* ─── Header ─── */}
      <div style={{ marginBottom: 36 }}>
        <h1 style={sectionTitleStyle}>📄 {isAr ? 'عرض سعر' : 'Quotation'}</h1>
        <p style={styles.sectionSub}>
          <strong style={{ color: 'var(--color-text-soft)' }}>
            {isAr ? 'موقع ويب احترافي' : 'Professional Business Website'}
          </strong>
          <br />
          {isAr ? 'التاريخ: 8 يوليو 2026' : 'Date: July 8, 2026'}
          <br />
          {isAr
            ? 'مقدم لـ: مكتب إيهاب عيّاد العقارية'
            : 'Presented to: Iheb Ayed Properties'}
          <br />
          {isAr ? 'إعداد: ديكستر ميراندا' : 'Prepared by: Dexter Miranda'}
        </p>
      </div>

      {/* ─── Option Cards ─── */}
      <div style={styles.grid2}>
        {options.map((opt, i) => {
          const cardStyle = opt.badge ? styles.cardHighlight : styles.card;
          const isDark = opt.badge;
          return (
            <div
              key={i}
              className="deal-card-hover"
              style={{
                ...cardStyle
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                if (isDark)
                  e.currentTarget.style.boxShadow =
                    '0 24px 60px -20px rgba(93, 206, 247, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                if (isDark) e.currentTarget.style.boxShadow = '';
              }}>
              {opt.badge && (
                <div style={styles.badge}>
                  {starIcon}
                  {opt.badge[locale]}
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: 'var(--color-cyan)' }}>
                  {opt.cms ? diamondIcon : starIcon}
                </span>
                <h3
                  style={{
                    fontFamily: isAr
                      ? 'var(--font-cairo)'
                      : 'var(--font-manrope)',
                    fontWeight: 800,
                    fontSize: 20,
                    margin: 0,
                    lineHeight: 1.3,
                    color: opt.badge ? 'var(--color-text)' : 'var(--color-text)'
                  }}>
                  {opt.name[locale]}
                </h3>
              </div>

              <div>
                <span style={styles.price}>
                  {opt.price} <span style={styles.priceSpan}>AED</span>
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {opt.features.map((f, fi) => (
                  <div key={fi} style={styles.featureRow}>
                    <div style={styles.featureIcon(true)}>{checkIcon}</div>
                    <span>{f.label[locale]}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Footer Note ─── */}
      <div
        style={{
          textAlign: 'center',
          padding: '24px 20px',
          background: 'var(--color-bg-elev)',
          border: '1px solid var(--color-hair)',
          borderRadius: 'var(--radius-card)',
          fontSize: 13,
          color: 'var(--color-text-dim)',
          lineHeight: 1.7
        }}>
        {isAr
          ? 'عرض سعر مقدم لـ مكتب إيهاب عيّاد العقارية. إعداد ديكستر ميراندا. جميع الأسعار بالدرهم الإماراتي. \
             الأسعار قابلة للتغيير حسب المتطلبات النهائية.'
          : 'Quotation prepared for Iheb Ayed Properties. Prepared by Dexter Miranda. All prices in AED. \
             Prices may vary based on final requirements.'}
      </div>
    </div>
  );
}
