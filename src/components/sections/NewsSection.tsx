import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';
import { img } from '../../config';

const arrowSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export function NewsSection() {
  const { t, locale } = useLocale();
  const ref = useReveal<HTMLElement>();
  const items = t.news.items;

  const featured = items.find((item) => item.featured);
  const rest = items.filter((item) => !item.featured);

  return (
    <section ref={ref} className="section reveal" id="news" style={{ marginTop: 50 }}>
      <div className="section-head">
        <h2
          className="display"
          dangerouslySetInnerHTML={{ __html: t.news.title }}
        />
        <p>{t.news.subtitle}</p>
      </div>

      <div className="news-list">
        {featured && (
          <article className="news-item featured">
            <div className="news-thumb">
              <img
                src={img(featured.image)}
                width={640}
                height={360}
                fetchPriority="high"
                loading="eager"
                alt="News hero"
              />
            </div>
            <div className="news-body">
              <div className="news-meta">
                <span className="news-tag">{featured.tag[locale]}</span>
                <span className="news-date">{featured.date[locale]}</span>
              </div>
              <h3 className="news-headline">{featured.headline[locale]}</h3>
            </div>
            <div className="news-arrow">{arrowSvg}</div>
          </article>
        )}

        {rest.length > 0 && (
          <div className="news-list-rest">
            {rest.map((item, i) => (
              <article key={i} className="news-item">
                <div className="news-thumb">
                  <img
                    src={img(item.image)}
                    width={120}
                    height={120}
                    loading="lazy"
                    alt="News thumbnail"
                  />
                </div>
                <div className="news-body">
                  <div className="news-meta">
                    <span className="news-tag">{item.tag[locale]}</span>
                    <span className="news-date">{item.date[locale]}</span>
                  </div>
                  <h3 className="news-headline">{item.headline[locale]}</h3>
                </div>
                <div className="news-arrow">{arrowSvg}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
