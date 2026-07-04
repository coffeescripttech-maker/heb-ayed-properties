import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';
import { img, config } from '../../config';

const playSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="6,4 22,12 6,20" />
  </svg>
);

const mapSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export function OfficeSection() {
  const { t, locale } = useLocale();
  const ref = useReveal<HTMLElement>();

  const handleTour = () => {
    document.dispatchEvent(new CustomEvent('alaa:openVideo', { detail: { key: 'office_tour' } }));
  };

  return (
    <section ref={ref} className="section reveal" id="office" style={{ marginTop: 50 }}>
      <div className="section-head">
        <h2
          className="display"
          dangerouslySetInnerHTML={{ __html: t.office.title }}
        />
        <p>{t.office.subtitle}</p>
      </div>

      <div className="office-frame">
        <div className="office-photo-wrap">
          <img
            src={img('office-01.webp')}
            width={800}
            height={450}
            loading="lazy"
            alt="Office photo"
          />
        </div>

        <div className="office-info-pane">
          <div>
            <span className="office-address-label">{t.office.addressLabel}</span>
            {t.office.addressLines.map((line, i) => (
              <p key={i} className="office-address-lines">
                {line}
              </p>
            ))}
          </div>

          <div className="office-actions">
            <button
              type="button"
              className="office-btn office-btn-primary"
              onClick={handleTour}
            >
              {playSvg}
              <span>{t.office.tourBtn}</span>
            </button>
            <a
              href={config.mapsUrl}
              target="_blank"
              rel="noopener"
              className="office-btn office-btn-secondary"
            >
              {mapSvg}
              <span>{t.office.mapsBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
