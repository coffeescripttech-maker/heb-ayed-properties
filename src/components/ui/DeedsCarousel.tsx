import { useRef, useState, useCallback, useEffect } from 'react';
import { useLocale } from '../../i18n';
import { img } from '../../config';
import { downloadCardImage } from '../../lib/download';

const arrowSvg = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 18, height: 18 }}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const zoomSvg = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const downloadSvg = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const deeds = Array.from({ length: 15 }, (_, i) => ({
  image: `deed-${String(i + 1).padStart(2, '0')}.webp`,
  alt: `Title Deed ${i + 1}`
}));

export function DeedsCarousel() {
  const { t, locale } = useLocale();
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);
  const total = deeds.length;

  const updateCounter = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll('.deed-card');
    if (!cards.length) return;
    const rect = track.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    let idx = 0;
    let min = Infinity;
    cards.forEach((c, i) => {
      const r = c.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - center);
      if (d < min) {
        min = d;
        idx = i;
      }
    });
    setCurrent(idx + 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf: number | null = null;
    const handler = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateCounter);
    };
    track.addEventListener('scroll', handler, { passive: true });
    setTimeout(updateCounter, 100);
    return () => {
      track.removeEventListener('scroll', handler);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [updateCounter]);

  const scroll = useCallback((dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.deed-card') as HTMLElement | null;
    if (!card) return;
    const w = card.offsetWidth + 14;
    const rtl = document.documentElement.dir === 'rtl';
    track.scrollBy({ left: dir * (rtl ? -1 : 1) * w, behavior: 'smooth' });
  }, []);

  const handleZoom = useCallback((src: string, alt: string) => {
    const event = new CustomEvent('alaa:zoom', { detail: { src, alt } });
    document.dispatchEvent(event);
  }, []);

  const handleDownload = useCallback(
    (e: React.MouseEvent, imgEl: HTMLImageElement | null) => {
      e.preventDefault();
      if (imgEl) downloadCardImage(imgEl);
    },
    []
  );

  return (
    <>
      <div ref={trackRef} className="deeds-track">
        {deeds.map((deed, i) => (
          <div key={i} className="deed-card">
            <div
              className="deed-image"
              onClick={() => handleZoom(img(deed.image), deed.alt)}>
              <img
                src={img(deed.image)}
                width={140}
                height={198}
                loading="lazy"
                alt={deed.alt}
              />
              <button
                type="button"
                className="deed-zoom"
                aria-label="Zoom"
                onClick={e => {
                  e.stopPropagation();
                  handleZoom(img(deed.image), deed.alt);
                }}>
                {zoomSvg}
              </button>
            </div>
            <a
              href="#"
              download
              className="deed-download"
              onClick={e => {
                const imgEl = e.currentTarget.parentElement?.querySelector(
                  '.deed-image img'
                ) as HTMLImageElement | null;
                handleDownload(e, imgEl);
              }}>
              {downloadSvg}
              <span>{t.deals.downloadLabel}</span>
            </a>
          </div>
        ))}
      </div>

      <div className="deeds-controls">
        <div className="deeds-counter">
          <span className="current">{current}</span>
          <span className="sep">/</span>
          <span>{total}</span>
        </div>
        <div className="deeds-arrows">
          <button
            type="button"
            className={`deeds-arrow${current === 1 ? ' disabled' : ''}`}
            aria-label="Previous"
            disabled={current === 1}
            onClick={() => scroll(-1)}
            style={{
              border: '1px solid var(--color-hair-strong)'
            }}>
            <span
              style={{
                transform: locale === 'ar' ? 'rotate(180deg)' : 'none',
                display: 'flex'
              }}>
              {arrowSvg}
            </span>
          </button>
          <button
            type="button"
            className={`deeds-arrow${current === total ? ' disabled' : ''}`}
            aria-label="Next"
            disabled={current === total}
            onClick={() => scroll(1)}
            style={{
              border: '1px solid var(--color-hair-strong)'
            }}>
            <span
              style={{
                transform: locale === 'ar' ? 'rotate(180deg)' : 'none',
                display: 'flex'
              }}>
              {arrowSvg}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
