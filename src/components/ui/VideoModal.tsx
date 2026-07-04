import { useEffect, useState, useRef, useCallback } from 'react';
import { streamIframe } from '../../config';

const videoKeys: Record<string, string> = {
  ceremony_01: '8cc2941da5c4a44b52662cfcdb5ff936',
  ceremony_02: 'b489cd690f7ed5dc7152e7b51caea70f',
  ceremony_03: '4661fba3e6f2f19d4601edb6e41a6a4b',
  ceremony_04: '0154a04404df29fe2219574bc37277b7',
  ceremony_05: 'b30cf11f52a3eff37f67ea1046034def',
  ceremony_06: '68a0a07d4a7421976c30826232ed30ba',
  testimonial_01: 'c820d47fc36ea2a835dded12e5cea1e6',
  testimonial_02: '41809f7b7e46a75ee1d2a593bb73bdfa',
  testimonial_03: 'a9c7c180fa007621d27e7786cbae3b2d',
  office_tour: '4c9487b796b0fa89159e8c18ff936df1',
};

// Keys that play in 9:16 portrait aspect ratio
const portraitKeys = new Set([
  'ceremony_01', 'ceremony_02', 'ceremony_03', 'ceremony_04', 'ceremony_05', 'ceremony_06',
  'testimonial_01', 'testimonial_02', 'testimonial_03',
]);

export function VideoModal() {
  const [open, setOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    if (iframeRef.current) iframeRef.current.src = '';
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const videoKey = detail?.key as string;
      const videoId = videoKeys[videoKey];
      if (!videoId) return;

      const url = streamIframe(videoId);
      if (!url) return;

      setIsPortrait(portraitKeys.has(videoKey));
      if (iframeRef.current) iframeRef.current.src = url;
      setOpen(true);
      document.body.style.overflow = 'hidden';
    };
    document.addEventListener('alaa:openVideo', handler);
    return () => document.removeEventListener('alaa:openVideo', handler);
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
      id="videoModal"
      className={`video-modal${open ? ' open' : ''}`}
      onClick={handleBackdrop}
    >
      <div
        className={`video-modal-content${!isPortrait ? ' video-modal-content--landscape' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="video-modal-close"
          onClick={close}
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <iframe
          ref={iframeRef}
          id="videoModalIframe"
          src="about:blank"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          title="Video"
        />
      </div>
    </div>
  );
}
