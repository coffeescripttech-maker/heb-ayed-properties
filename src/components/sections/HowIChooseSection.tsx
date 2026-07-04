import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';

export function HowIChooseSection() {
  const { t, locale } = useLocale();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section reveal" id="how-i-choose" style={{ marginTop: 50 }}>
      <div className="section-head">
        <h2
          className="display"
          dangerouslySetInnerHTML={{ __html: t.howIChoose.title }}
        />
        <p>{t.howIChoose.subtitle}</p>
      </div>

      <div className="choose-grid">
        {t.howIChoose.cards.map((card, i) => (
          <article key={i} className="choose-card">
            <h3
              className="choose-title"
              dangerouslySetInnerHTML={{
                __html: locale === 'ar'
                  ? `<span class="cond-label">${card.title.ar.split(':')[0]}:</span>${card.title.ar.includes(':') ? card.title.ar.substring(card.title.ar.indexOf(':') + 1) : ''}`
                  : `<span class="cond-label">${card.title.en.split(':')[0]}:</span>${card.title.en.includes(':') ? card.title.en.substring(card.title.en.indexOf(':') + 1) : ''}`
              }}
            />

            <p
              className="choose-body"
              dangerouslySetInnerHTML={{
                __html: locale === 'ar' ? card.body.ar : card.body.en
              }}
            />
          </article>
        ))}
      </div>

      <div className="choose-closing">
        <p className="choose-closing-text">
          {t.howIChoose.closing}
        </p>
        <a href="#consultations" className="invest-cta-btn">
          {t.howIChoose.ctaBtn}
        </a>
      </div>
    </section>
  );
}
