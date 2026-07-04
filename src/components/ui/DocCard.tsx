import { useCallback, useRef } from 'react';
import { downloadCardImage } from '../../lib/download';

const zoomSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const downloadSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

interface DocCardProps {
  label: string;
  src: string;
  alt: string;
  downloadLabel: string;
}

export function DocCard({ label, src, alt, downloadLabel }: DocCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleZoom = useCallback(() => {
    if (imgRef.current) {
      const event = new CustomEvent('alaa:zoom', {
        detail: { src: imgRef.current.src, alt: imgRef.current.alt },
      });
      document.dispatchEvent(event);
    }
  }, []);

  const handleDownload = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (imgRef.current) downloadCardImage(imgRef.current);
  }, []);

  return (
    <div className="doc-mini">
      <div className="doc-label">{label}</div>
      <div className="doc-mini-img" onClick={handleZoom}>
        <img
          ref={imgRef}
          src={src}
          width={140}
          height={198}
          loading="lazy"
          alt={alt}
        />
        <button
          type="button"
          className="doc-mini-zoom"
          aria-label="Zoom"
          onClick={(e) => { e.stopPropagation(); handleZoom(); }}
        >
          {zoomSvg}
        </button>
      </div>
      <a href="#" download className="doc-download" onClick={handleDownload}>
        {downloadSvg}
        <span>{downloadLabel}</span>
      </a>
    </div>
  );
}
