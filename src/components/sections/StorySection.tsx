import { useState } from 'react';
import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';
import { img } from '../../config';
import { DeedsCarousel } from '../ui/DeedsCarousel';

export function StorySection() {
  const { t } = useLocale();
  const ref = useReveal<HTMLElement>();
  const [expanded, setExpanded] = useState(false);

  return (
    <section ref={ref} className="section reveal" id="story" style={{ marginTop: 50 }}>
      <div className="section-head">
        <h2
          className="display"
          dangerouslySetInnerHTML={{ __html: t.story.title }}
        />
      </div>

      <div className="story-image-wrap">
        <img
          src={img('team-01.webp')}
          width={800}
          height={450}
          loading="lazy"
          alt="Iheb Ayed Properties"
        />
      </div>

      <div className="story-body">
        {t.story.paragraphs.map((p, i) => (
          <p key={i} className="story-paragraph">
            {p}
            {i === 0 && !expanded && (
              <span className="story-expand-inline" onClick={() => setExpanded(true)}>
                {' '}{t.story.expandText}
              </span>
            )}
          </p>
        ))}

        {expanded && (
          <div className="story-more" style={{ maxHeight: 'none', overflow: 'visible' }}>
            {t.story.moreParagraphs.map((p, i) => (
              <p key={i} className="story-paragraph">{p}</p>
            ))}
          </div>
        )}
      </div>

      <div className="story-verify-wrap">
        <div className="story-verify-card">
          <div className="verify-header">
            <div className="verify-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4" />
                <path d="M21 12c0 5-3.5 8-9 9-5.5-1-9-4-9-9V5l9-3 9 3v7z" />
              </svg>
            </div>
            <div className="verify-content">
              <h3 className="verify-title">{t.story.verifyTitle}</h3>
              <p className="verify-text">{t.story.verifyText}</p>
            </div>
          </div>

          <div className="deeds-section">
            <div className="deeds-slider-wrap">
              <DeedsCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
