import { useLocale } from '../../i18n';

export function CtaSection() {
  const { t } = useLocale();

  return (
    <section className="section cta-section" style={{ marginTop: 50, textAlign: 'center' }}>
      <div className="invest-cta">
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--color-text-mid)', marginBottom: 16, fontWeight: 600 }}>
          {t.deals.cta}
        </p>
        <a
          href="#consultations"
          className="invest-cta-btn"
          style={{
            display: 'inline-block',
            padding: '14px 36px',
            borderRadius: 9999,
            background: 'linear-gradient(135deg, var(--color-cyan), var(--color-cyan-deep))',
            color: '#000',
            fontWeight: 700,
            fontSize: 16,
            textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 20px rgba(93, 206, 247, 0.25)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(93, 206, 247, 0.35)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(93, 206, 247, 0.25)'; }}
        >
          {t.deals.ctaBtn}
        </a>
      </div>
    </section>
  );
}
