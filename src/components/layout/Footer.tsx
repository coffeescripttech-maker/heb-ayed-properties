import { useLocale } from '../../i18n';

const socialLinks = [
  {
    href: '',
    label: 'Instagram',
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    )
  },
  {
    href: '',
    label: 'TikTok',
    path: (
      <path d="M16 3v3.5c1.4 1 3 1.5 4.5 1.5v3c-1.6 0-3.2-.4-4.5-1v6.5a5.5 5.5 0 1 1-5.5-5.5c.5 0 1 .1 1.5.2v3.1a2.5 2.5 0 1 0 1 2V3z" />
    )
  },
  {
    href: '',
    label: 'YouTube',
    path: (
      <path d="M23 7.3s-.2-1.5-.9-2.2c-.9-.9-1.9-.9-2.3-1C16.4 3.8 12 3.8 12 3.8s-4.4 0-7.8.3c-.4.1-1.4.1-2.3 1C1.2 5.8 1 7.3 1 7.3S.8 9.1.8 10.9v1.7c0 1.8.2 3.6.2 3.6s.2 1.5.9 2.2c.9.9 2.1.9 2.6 1C6.4 19.7 12 19.8 12 19.8s4.4 0 7.8-.3c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.2.9-2.2s.2-1.8.2-3.6v-1.7c0-1.8-.2-3.7-.2-3.7zM10 14.5V8.6l5.2 3z" />
    )
  },
  {
    href: '',
    label: 'Facebook',
    path: (
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.4c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5v1.8h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z" />
    )
  }
];

export function Footer() {
  const { t, locale } = useLocale();

  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="brand">
              <div className="brand-mark" aria-hidden="true">
                <img
                  src="/img/logo.jpg"
                  alt="Iheb Ayed Properties"
                  className="footer-logo-img"
                  width="44"
                  height="auto"
                  style={{
                    display: 'block',
                    height: 44,
                    width: 'auto',
                    borderRadius: 8
                  }}
                />
              </div>
              <div className="brand-name">
                <span className="brand-first">
                  {locale === 'ar'
                    ? 'إيهاب عيّاد العقارية'
                    : 'Iheb Ayed Properties'}
                </span>
              </div>
            </div>
            <p className="tag">{t.footer.tagline}</p>
            <div className="socials">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    {s.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="foot-sitemap">
            <div className="foot-col">
              <h4>{t.footer.exploreTitle}</h4>
              <ul>
                {t.footer.exploreLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="foot-col">
              <h4>{t.footer.companyTitle}</h4>
              <ul>
                {t.footer.companyLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="foot-col">
              <h4>{t.footer.legalTitle}</h4>
              <ul>
                {t.footer.legalLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="foot-divider" />

        <div className="foot-bottom">
          <div className="licenses">
            <span>{t.footer.copyright}</span>
            <span>{t.footer.rights}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
