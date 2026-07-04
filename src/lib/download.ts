import { downloadUrl } from '../config';

function webpBasenameFromSrc(src: string): string {
  const path = src.split('?')[0];
  const parts = path.split('/');
  return parts[parts.length - 1] || '';
}

function encodeAssetPath(url: string): string {
  if (/^https?:\/\//i.test(url)) return url;
  return url
    .split('/')
    .map((seg) => (seg ? encodeURIComponent(seg) : seg))
    .join('/');
}

export function fullQualityUrlFromSrc(src: string): string {
  if (!src) return '';
  const webpName = webpBasenameFromSrc(src);
  if (webpName) return downloadUrl(webpName);
  return src;
}

function buildDownloadName(alt: string, src: string): string {
  const clean = src.split('?')[0];
  const ext = (clean.split('.').pop() || 'jpg').toLowerCase();
  const finalExt = !ext || ext.length > 5 || ext.indexOf('/') !== -1 ? 'jpg' : ext;
  let base = (alt || '').trim();
  if (!base) base = clean.split('/').pop()?.replace(/\.[^.]+$/, '') || '';
  base = base.replace(/[\\/:*?"<>|]+/g, '').replace(/\s+/g, '-').slice(0, 80) || 'document';
  return `${base}.${finalExt}`;
}

function triggerDownload(href: string, filename: string, revoke: boolean) {
  const a = document.createElement('a');
  a.href = href;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  if (revoke) setTimeout(() => URL.revokeObjectURL(href), 1000);
}

export function downloadCardImage(imgEl: HTMLImageElement) {
  const displaySrc = imgEl.getAttribute('src') || imgEl.src;
  if (!displaySrc) return;
  const downloadSrc = fullQualityUrlFromSrc(displaySrc) || displaySrc;
  const filename = buildDownloadName(imgEl.alt, downloadSrc);
  const fetchUrl = encodeAssetPath(downloadSrc);

  fetch(fetchUrl)
    .then((r) => {
      if (!r.ok) throw new Error('fetch failed');
      return r.blob();
    })
    .then((blob) => {
      triggerDownload(URL.createObjectURL(blob), filename, true);
    })
    .catch(() => {
      triggerDownload(downloadSrc, filename, false);
    });
}
