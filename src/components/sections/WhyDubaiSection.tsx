import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';

export function WhyDubaiSection() {
  const { t, locale } = useLocale();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section reveal" id="why-dubai" style={{ marginTop: 50 }}>
      <div className="section-head">
        <h2
          className="display"
          dangerouslySetInnerHTML={{ __html: t.whyDubai.title }}
        />
        <p>{t.whyDubai.subtitle}</p>
      </div>

      <div className="dubai-grid">
        {t.whyDubai.reasons.map((reason, i) => (
          <article key={i} className="dubai-reason">
            <h3
              className="dubai-title"
              dangerouslySetInnerHTML={{ __html: locale === 'ar' ? reason.title.ar : reason.title.en }}
            />
            <p
              className="dubai-body"
              dangerouslySetInnerHTML={{ __html: locale === 'ar' ? reason.body.ar : reason.body.en }}
            />
            {reason.source && (
              <p
                className="dubai-source"
                dangerouslySetInnerHTML={{ __html: locale === 'ar' ? reason.source.ar : reason.source.en }}
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
