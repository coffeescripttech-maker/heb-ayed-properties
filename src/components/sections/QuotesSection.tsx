import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocale } from '../../i18n';
import { config, img } from '../../config';

const ROTATE = 4500;

export function QuotesSection() {
  const { t, locale } = useLocale();
  const statementRef = useRef<HTMLParagraphElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const quotes = config.promiseQuotes;
  const total = quotes.length;

  const show = useCallback((i: number, animate: boolean) => {
    const quote = quotes[i];
    const html = quote ? (typeof quote === 'string' ? quote : quote[locale]) : '';
    const el = statementRef.current;
    const dots = dotsRef.current;
    if (!el || !html) return;

    if (!animate) {
      el.innerHTML = html;
      dots?.querySelectorAll('.promise-dot').forEach((d, j) => {
        d.classList.toggle('active', j === i);
        d.setAttribute('aria-selected', j === i ? 'true' : 'false');
      });
      setIdx(i);
      return;
    }

    el.classList.add('fading');
    setTimeout(() => {
      el.innerHTML = html;
      el.classList.remove('fading');
      dots?.querySelectorAll('.promise-dot').forEach((d, j) => {
        d.classList.toggle('active', j === i);
        d.setAttribute('aria-selected', j === i ? 'true' : 'false');
      });
      setIdx(i);
    }, 220);
  }, [quotes, locale]);

  const next = useCallback(() => {
    show((idx + 1) % total, true);
  }, [idx, total, show]);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, ROTATE);
  }, [next]);

  useEffect(() => {
    show(0, false);
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onEnter = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    const onLeave = () => startInterval();
    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);
    return () => {
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, [startInterval]);

  const handleDotClick = (i: number) => {
    if (i === idx) return;
    show(i, true);
    startInterval();
  };

  return (
    <section className="section" style={{ marginTop: 50 }}>
      <div ref={containerRef} className="promise-card">
        <div className="promise-photo-wide">
          <img
            src={img('inquiry-bg.webp')}
            width={800}
            height={450}
            loading="lazy"
            alt="Team"
          />
        </div>

        <div className="promise-glass">
          <span className="quote-open" />
          <p
            ref={statementRef}
            className="promise-statement"
            id="promiseStatement"
            aria-live="polite"
          />
          <span className="quote-close" />

          <div className="promise-signature">{t.quotes.signature}</div>

          <div
            ref={dotsRef}
            className="promise-dots"
            id="promiseDots"
            role="tablist"
            aria-label="Quote navigation"
          >
            {quotes.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`promise-dot${i === 0 ? ' active' : ''}`}
                role="tab"
                aria-selected={i === 0 ? 'true' : 'false'}
                aria-label={`${locale === 'ar' ? 'اقتباس ' : 'Quote '}${i + 1}${locale === 'ar' ? ' من ' : ' of '}${total}`}
                onClick={() => handleDotClick(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
