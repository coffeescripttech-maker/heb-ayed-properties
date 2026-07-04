import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';
import { streamThumb } from '../../config';

const ceremonyVideos: Record<string, string> = {
  ceremony_01: '8cc2941da5c4a44b52662cfcdb5ff936',
  ceremony_02: 'b489cd690f7ed5dc7152e7b51caea70f',
  ceremony_03: '4661fba3e6f2f19d4601edb6e41a6a4b',
  ceremony_04: '0154a04404df29fe2219574bc37277b7',
  ceremony_05: 'b30cf11f52a3eff37f67ea1046034def',
  ceremony_06: '68a0a07d4a7421976c30826232ed30ba',
};

const ceremonyLabels: Record<string, [string, string]> = {
  ceremony_01: ['جائزة الأعلى مبيعاً 2023', 'Top Seller Award 2023'],
  ceremony_02: ['حفل تكريم شرطة أبوظبي', 'Abu Dhabi Police Recognition'],
  ceremony_03: ['جائزة الأعلى مبيعاً 2024', 'Top Seller Award 2024'],
  ceremony_04: ['حفل تكريم بنك المشرق', 'Mashreq Bank Recognition'],
  ceremony_05: ['حفل افتتاح الفرع الجديد', 'New Branch Opening'],
  ceremony_06: ['جائزة الأعلى مبيعاً 2025', 'Top Seller Award 2025'],
};

const ceremonyKeys = Object.keys(ceremonyVideos);

export function CeremoniesSection() {
  const { t, locale } = useLocale();
  const ref = useReveal<HTMLElement>();

  const handleOpen = (key: string) => {
    document.dispatchEvent(new CustomEvent('alaa:openVideo', { detail: { key } }));
  };

  return (
    <section ref={ref} className="section reveal" id="ceremonies" style={{ marginTop: 50 }}>
      <div className="section-head">
        <h2
          className="display"
          dangerouslySetInnerHTML={{ __html: t.ceremonies.title }}
        />
        <p>{t.ceremonies.subtitle}</p>
      </div>

      <div className="test-wrap">
        <div className="test-track">
          {ceremonyKeys.map((key) => {
            const videoId = ceremonyVideos[key];
            const label = ceremonyLabels[key];
            return (
              <div
                key={key}
                className="test-card"
                data-video={key}
                onClick={() => handleOpen(key)}
              >
                <div
                  className="test-card-media"
                  style={{
                    backgroundImage: `url(${streamThumb(videoId, 640)})`,
                  }}
                />
                <div className="deco" />
                <div className="play">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6,4 22,12 6,20" />
                  </svg>
                </div>
                <div className="info">
                  <div className="name">
                    {locale === 'ar' ? label[0] : label[1]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
