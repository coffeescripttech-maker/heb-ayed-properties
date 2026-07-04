import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';

const phasePrefix: Record<number, string> = {
  0: 'الأولى',
  1: 'الثانية',
  2: 'الثالثة',
};

export function StepsSection() {
  const { t, locale } = useLocale();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section reveal" id="steps" style={{ marginTop: 50 }}>
      <div className="section-head">
        <h2
          className="display"
          dangerouslySetInnerHTML={{ __html: t.steps.title }}
        />
        <p>{t.steps.subtitle}</p>
      </div>

      <div className="phases-wrap">
        {t.steps.phases.map((phase, i) => (
          <div key={i} className="phase">
            <div className="phase-head">
              <h3 className="phase-title">
                {locale === 'ar' ? (
                  <>
                    <span className="phase-prefix">المرحلة {phasePrefix[i]}:</span>{' '}
                    {phase.title.ar}
                  </>
                ) : (
                  phase.title.en
                )}
              </h3>
            </div>
            <div className="phase-steps">
              {phase.steps.map((step, j) => (
                <div key={j} className="step-row">
                  <div className="step-num">{step.num}</div>
                  <div className="step-content">
                    <div className="step-label">
                      {locale === 'ar' ? step.label.ar : step.label.en}
                    </div>
                    <div className="step-detail">
                      {locale === 'ar' ? step.detail.ar : step.detail.en}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="phase-notes">
        <div className="phase-notes-title">{t.steps.notesTitle}</div>
        <ul className="phase-notes-list">
          {t.steps.notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
