import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';
import { streamThumb } from '../../config';

const testimonialMeta: Record<string, { name: { ar: string; en: string }; loc: { ar: string; en: string }; videoId: string }> = {
  testimonial_01: {
    name: { ar: 'أحمد الموسوي', en: 'Ahmed Al-Musawi' },
    loc: { ar: 'مقيم في الإمارات', en: 'Based in the UAE' },
    videoId: 'c820d47fc36ea2a835dded12e5cea1e6',
  },
  testimonial_02: {
    name: { ar: 'المهندس بلال حبشي', en: 'Engineer Bilal Habashi' },
    loc: { ar: 'مقيم في فلسطين', en: 'Based in Palestine' },
    videoId: '41809f7b7e46a75ee1d2a593bb73bdfa',
  },
  testimonial_03: {
    name: { ar: 'عمر الحارثي', en: 'Omar Al-Harthi' },
    loc: { ar: 'مقيم في الولايات المتحدة', en: 'Based in the United States' },
    videoId: 'a9c7c180fa007621d27e7786cbae3b2d',
  },
};

const testimonialKeys = Object.keys(testimonialMeta);

export function TestimonialsSection() {
  const { t, locale } = useLocale();
  const ref = useReveal<HTMLElement>();

  const handleOpen = (key: string) => {
    document.dispatchEvent(new CustomEvent('alaa:openVideo', { detail: { key } }));
  };

  return (
    <section ref={ref} className="section reveal" id="testimonials" style={{ marginTop: 50 }}>
      <div className="section-head">
        <h2
          className="display"
          dangerouslySetInnerHTML={{ __html: t.testimonials.title }}
        />
      </div>

      <div className="test-wrap">
        <div className="test-track">
          {testimonialKeys.map((key) => {
            const meta = testimonialMeta[key];
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
                    backgroundImage: `url(${streamThumb(meta.videoId, 640)})`,
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
                    {locale === 'ar' ? meta.name.ar : meta.name.en}
                  </div>
                  <div className="loc">
                    {locale === 'ar' ? meta.loc.ar : meta.loc.en}
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
