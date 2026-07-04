import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';
import { PhoneCard } from '../ui/PhoneCard';
import { img } from '../../config';

const checkSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* Preload hero image */
(function preloadHero() {
  if (typeof document !== 'undefined') {
    const existing = document.querySelector('link[data-hero-preload]');
    if (!existing) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img('hero-phone.webp');
      link.setAttribute('data-hero-preload', '1');
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }
  }
})();

export function HeroSection() {
  const { t } = useLocale();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="hero reveal">
      <h1
        className="display"
        dangerouslySetInnerHTML={{ __html: t.hero.display }}
      />

      <div className="hero-text">
        <p
          className="lede"
          dangerouslySetInnerHTML={{ __html: t.hero.lede }}
        />

        <ul className="hero-bullets">
          {t.hero.bullets.map((b, i) => (
            <li key={i}>
              <span className="m">{checkSvg}</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <PhoneCard />
    </section>
  );
}
