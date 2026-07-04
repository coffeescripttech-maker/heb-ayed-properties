import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';
import { img } from '../../config';

const zoomSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

export function AwardsSection() {
  const { t } = useLocale();
  const ref = useReveal<HTMLElement>();

  const handleZoom = (src: string, alt: string) => {
    document.dispatchEvent(new CustomEvent('alaa:zoom', { detail: { src, alt } }));
  };

  return (
    <section ref={ref} className="section reveal" id="awards" style={{ marginTop: 50 }}>
      <div className="section-head">
        <h2
          className="display"
          dangerouslySetInnerHTML={{ __html: t.awards.title }}
        />
        <p>{t.awards.subtitle}</p>
      </div>

      <div className="awards-wrap">
        <div className="awards-track">
          {t.awards.cards.map((card, i) => (
            <article key={i} className="award-card">
              <div
                className="award-cert"
                onClick={() => handleZoom(img(card.image), card.title)}
              >
                <img
                  src={img(card.image)}
                  width={320}
                  height={226}
                  loading="lazy"
                  alt={card.title}
                />
                <button
                  type="button"
                  className="award-cert-zoom"
                  aria-label="Zoom"
                  onClick={e => {
                    e.stopPropagation();
                    handleZoom(img(card.image), card.title);
                  }}
                >
                  {zoomSvg}
                </button>
              </div>
              <h3 className="award-title">{card.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
