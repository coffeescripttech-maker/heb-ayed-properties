import { useState, useRef, useCallback } from 'react';
import { useLocale } from '../../i18n';
import { useReveal } from '../../hooks/useReveal';
import { img } from '../../config';
import { submitLead, redirectToThankYou } from '../../lib/api';
import { PhoneInput, type PhoneInputHandle } from '../ui/PhoneInput';

const checkSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function InquirySection() {
  const { t, locale } = useLocale();
  const ref = useReveal<HTMLElement>();
  const formRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<PhoneInputHandle>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const name = formData.get('fullname') as string;
    const phone = phoneRef.current?.getNumber() || formData.get('phone') as string || '';
    const budget = formData.get('budget') as string;
    const ready = formData.get('ready') as string;

    if (!name || !phone || phone.length < 8) {
      alert(t.errors.invalidPhone);
      return;
    }

    setSubmitting(true);
    try {
      const data = await submitLead({ name, phone, budget, ready_to_invest: ready, country: '' }, locale);
      const leadId = data?.data?.id;
      redirectToThankYou(leadId, locale);
    } catch {
      alert(t.errors.genericError);
      setSubmitting(false);
    }
  }, [locale, t]);

  const stats = t.inquiry.stats;

  return (
    <section ref={ref} className="section reveal" id="consultations" style={{ marginTop: 50 }}>
      <form ref={formRef} onSubmit={handleSubmit} className="inquiry-split">
        {/* Left */}
        <div
          className="inquiry-left"
          style={{
            backgroundImage: `url(${img('hero-phone.webp')})`,
          }}
        >
          <h2
            dangerouslySetInnerHTML={{ __html: t.inquiry.title }}
          />
          <div className="inquiry-stats">
            {stats.map((s, i) => (
              <div key={i} className="s">
                <div className="n">{s.value}</div>
                <div className="l">{s.label[locale]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="inquiry-right">
          <div className={`inquiry-success${success ? ' show' : ''}`}>
            <div className="check">{checkSvg}</div>
            <h4>{t.inquiry.successTitle}</h4>
            <p>{t.inquiry.successText}</p>
          </div>

          {!success && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="inquiry-field">
                <label>{t.inquiry.nameLabel}</label>
                <input
                  type="text"
                  name="fullname"
                  required
                  placeholder={t.inquiry.namePlaceholder}
                />
              </div>

              <div className="inquiry-field inquiry-phone">
                <label>{t.inquiry.phoneLabel}</label>
                <PhoneInput
                  ref={phoneRef}
                  id="inquiryPhone"
                  name="phone"
                  required
                  placeholder={t.inquiry.phonePlaceholder}
                />
              </div>

              <div className="inquiry-field">
                <label>{t.inquiry.budgetLabel}</label>
                <select name="budget" required>
                  {t.inquiry.budgetOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div className="inquiry-field">
                <label>{t.inquiry.readyLabel}</label>
                <select name="ready" required>
                  {t.inquiry.readyOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inquiry-submit"
                style={{
                  background: submitting
                    ? 'var(--color-text-dim)'
                    : undefined,
                  cursor: submitting ? 'default' : undefined,
                  transform: submitting ? 'none' : undefined,
                }}
              >
                {submitting ? t.inquiry.sendingBtn : t.inquiry.submitBtn}
              </button>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
