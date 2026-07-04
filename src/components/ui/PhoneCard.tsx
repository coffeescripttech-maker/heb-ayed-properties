import { useState, useRef, useCallback } from 'react';
import { useLocale } from '../../i18n';
import { img } from '../../config';
import { submitLead, redirectToThankYou } from '../../lib/api';
import { PhoneInput, type PhoneInputHandle } from './PhoneInput';

const badgeSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export function PhoneCard() {
  const { t, locale } = useLocale();
  const phoneRef = useRef<PhoneInputHandle>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = useCallback(async () => {
    const phone = phoneRef.current?.getNumber() || '';
    if (!phone || phone.length < 8) {
      alert(t.errors.invalidPhone);
      return;
    }
    setSubmitting(true);
    try {
      const name = locale === 'ar' ? 'التقاط رقم الهاتف' : 'Phone capture';
      const data = await submitLead({ name, phone, need: 'Hero phone card' }, locale);
      const leadId = data?.data?.id;
      redirectToThankYou(leadId, locale);
    } catch {
      alert(t.errors.genericError);
      setSubmitting(false);
    }
  }, [locale, t]);

  return (
    <div className="phone-card">
      <div
        className="phone-card-photo"
        style={{
          backgroundImage: `url(${img('hero-bg.jpg')})`,
        }}
      />

      <div className="phone-card-in">
        <div className="phone-card-badge">
          {badgeSvg}
        </div>

        <h4 dangerouslySetInnerHTML={{ __html: t.hero.phoneCardTitle }} />

        <div className="phone-card-phone" dir="ltr">
          <PhoneInput
            ref={phoneRef}
            id="heroPhone"
            placeholder={t.hero.phonePlaceholder}
          />
        </div>

        <button
          type="button"
          className="phone-card-btn"
          disabled={submitting}
          onClick={handleSubmit}
        >
          {submitting ? (locale === 'ar' ? 'جاري الإرسال...' : 'Sending...') : t.hero.phoneBtn}
        </button>
      </div>
    </div>
  );
}
