import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';
import { img } from '../../config';
import { DocCard } from '../ui/DocCard';

export function DealsSection() {
  const { t } = useLocale();
  const ref = useReveal<HTMLElement>();
  const deals = t.deals.cards;
  const dealImages = [
    { purchase: 'deal-01-purchase.webp', sale: 'deal-01-sale.webp' },
    { purchase: 'deal-02-purchase.webp', sale: 'deal-02-sale.webp' },
    { purchase: 'deal-03-purchase.webp', sale: 'deal-03-sale.webp' },
    { purchase: 'deal-04-purchase.webp', sale: 'deal-04-ejari.webp' },
  ];

  const badgeType = (badge: string): string => {
    const b = badge.toLowerCase();
    const hasSale = b.includes('بيع') || b.includes('sale');
    const hasRental = b.includes('إيجار') || b.includes('rental');
    if (hasSale && hasRental) return 'hybrid';
    if (hasRental) return 'rental';
    return 'sale';
  };

  return (
    <section ref={ref} className="section deals-section reveal" id="track" style={{ marginTop: 50 }}>
      <div className="section-head">
        <h2
          className="display"
          dangerouslySetInnerHTML={{ __html: t.deals.title }}
        />
        <p>{t.deals.subtitle}</p>
      </div>

      <div className="deals-wrap">
        <div className="deals-track">
          {deals.map((deal, i) => {
            const images = dealImages[i];
            return (
              <article key={i} className="deal-card">
                <header className="deal-header">
                  <span className={`deal-badge ${badgeType(deal.badge)}`}>
                    {deal.badge}
                  </span>
                </header>

                <h3 className="deal-title">{deal.title}</h3>
                <p className="deal-subtitle">{deal.subtitle}</p>

                <div className="deal-profit">
                  <div className="profit-statement">{deal.profit}</div>
                </div>

                <div className="deal-docs">
                  <DocCard
                    label={t.deals.docLabelPurchase}
                    src={img(images.purchase)}
                    alt={`Purchase Document ${i + 1}`}
                    downloadLabel={t.deals.downloadCertLabel}
                  />
                  <DocCard
                    label={i === 3 ? t.deals.docLabelRental : t.deals.docLabelSale}
                    src={img(images.sale)}
                    alt={`Sale Document ${i + 1}`}
                    downloadLabel={t.deals.downloadCertLabel}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="invest-cta" style={{ marginTop: 36 }}>
        <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', color: 'var(--color-text-mid)', margin: 0, fontWeight: 700 }}>
          {t.deals.cta}
        </p>
        <a href="#consultations" className="invest-cta-btn">
          {t.deals.ctaBtn}
        </a>
      </div>
    </section>
  );
}
