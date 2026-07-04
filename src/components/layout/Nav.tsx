import { useState, useEffect, useCallback } from 'react';
import { useLocale } from '../../i18n';

const brandMarkSvg = (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lg" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#2A9FCC" />
        <stop offset="100%" stopColor="#7FDAFA" />
      </linearGradient>
    </defs>
    <rect x="8" y="9" width="3" height="27" rx="1.5" fill="url(#lg)" opacity=".35" />
    <rect x="14" y="5" width="3" height="31" rx="1.5" fill="url(#lg)" opacity=".35" />
    <rect x="20" y="11" width="3" height="25" rx="1.5" fill="url(#lg)" opacity=".35" />
    <rect x="26" y="17" width="3" height="19" rx="1.5" fill="url(#lg)" opacity=".35" />
    <rect x="32" y="25" width="3" height="11" rx="1.5" fill="url(#lg)" opacity=".35" />
    <rect x="6" y="8" width="3" height="28" rx="1.5" fill="url(#lg)" />
    <rect x="12" y="4" width="3" height="32" rx="1.5" fill="url(#lg)" />
    <rect x="18" y="10" width="3" height="26" rx="1.5" fill="url(#lg)" />
    <rect x="24" y="16" width="3" height="20" rx="1.5" fill="url(#lg)" />
    <rect x="30" y="24" width="3" height="12" rx="1.5" fill="url(#lg)" />
  </svg>
);

const menuSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="4" y1="16" x2="20" y2="16" />
  </svg>
);

const arrowSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export function Nav() {
  const { t, locale } = useLocale();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, close]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a
          href="/"
          className="nav-brand"
          aria-label={locale === 'ar' ? 'الصفحة الرئيسية — علاء مهرة' : 'Home — Alaa Mohra'}
        >
          <div className="nav-brand-mark" aria-hidden="true">
            {brandMarkSvg}
          </div>
          <div className="nav-brand-name">
            <span>{locale === 'ar' ? 'علاء مهرة' : 'Alaa Mohra'}</span>
          </div>
        </a>

        <div className="nav-dropdown-wrap">
          <button
            id="navMenuBtn"
            className={`nav-menu-btn${open ? ' open' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="navDropdown"
            onClick={() => setOpen((v) => !v)}
          >
            {menuSvg}
          </button>

          <nav
            id="navDropdown"
            className={`nav-dropdown${open ? ' open' : ''}`}
            role="menu"
            aria-labelledby="navMenuBtn"
          >
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                role="menuitem"
                onClick={close}
              >
                <span>{link.label[locale]}</span>
                <span style={{
                  [locale === 'ar' ? 'marginInlineStart' : 'marginInlineEnd']: 'auto',
                  display: 'flex',
                  transform: locale === 'ar' ? 'rotate(180deg)' : 'none',
                }}>
                  {arrowSvg}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
