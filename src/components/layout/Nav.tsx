import { useState, useEffect, useCallback } from 'react';
import { useLocale } from '../../i18n';

interface NavProps {
  onNavigate?: (to: 'home' | 'quotation') => void;
  currentPage?: string;
}

const brandMark = (
  <img
    src="/img/logo.jpg"
    alt="Iheb Ayed Properties"
    className="nav-logo-img"
    width="36"
    height="auto"
    style={{ display: 'block', height: 36, width: 'auto', borderRadius: 6 }}
  />
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

export function Nav({ onNavigate, currentPage }: NavProps) {
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
          aria-label={locale === 'ar' ? 'الصفحة الرئيسية — إيهاب عيّاد العقارية' : 'Home — Iheb Ayed Properties'}
        >
          <div className="nav-brand-mark" aria-hidden="true">
            {brandMark}
          </div>
          <div className="nav-brand-name">
            <span>{locale === 'ar' ? 'إيهاب عيّاد العقارية' : 'Iheb Ayed Properties'}</span>
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
            <div style={{
              height: 1,
              background: 'var(--color-hair)',
              margin: '6px 0' ,
            }} />
            <a
              href={currentPage === 'quotation' ? '/' : '?page=quotation'}
              role="menuitem"
              onClick={(e) => {
                close();
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate(currentPage === 'quotation' ? 'home' : 'quotation');
                }
              }}
              style={{
                color: currentPage === 'quotation' ? 'var(--color-cyan)' : undefined,
              }}
            >
              <span>
                {locale === 'ar'
                  ? currentPage === 'quotation' ? '🏠 الصفحة الرئيسية' : '📄 عرض السعر'
                  : currentPage === 'quotation' ? '🏠 Home' : '📄 Quotation'}
              </span>
              <span style={{
                [locale === 'ar' ? 'marginInlineStart' : 'marginInlineEnd']: 'auto',
                display: 'flex',
                transform: locale === 'ar' ? 'rotate(180deg)' : 'none',
              }}>
                {arrowSvg}
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
