import { useEffect, useState, useCallback } from 'react';
import { fullQualityUrlFromSrc } from '../../lib/download';

export function ZoomModal() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');

  const close = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.src) {
        setSrc(detail.src);
        setAlt(detail.alt || '');
        setOpen(true);
        document.body.style.overflow = 'hidden';

        const fullSrc = fullQualityUrlFromSrc(detail.src);
        if (fullSrc && fullSrc !== detail.src) {
          const img = new Image();
          img.onload = () => {
            const modalImg = document.getElementById('zoomModalImg') as HTMLImageElement | null;
            if (modalImg) modalImg.src = img.src;
          };
          img.src = fullSrc;
        }
      }
    };
    document.addEventListener('alaa:zoom', handler);
    return () => document.removeEventListener('alaa:zoom', handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, close]);

  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <div
      id="zoomModal"
      className={`zoom-modal${open ? ' open' : ''}`}
      onClick={handleBackdrop}
    >
      <button
        type="button"
        className="zoom-modal-close"
        onClick={close}
        aria-label="Close"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <img
        id="zoomModalImg"
        src={src}
        alt={alt}
        className="zoom-modal-img"
      />
    </div>
  );
}
