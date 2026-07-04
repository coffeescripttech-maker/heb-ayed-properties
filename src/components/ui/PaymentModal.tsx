import { useLocale } from '../../i18n';

const copySvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export function PaymentModal() {
  const { t, locale } = useLocale();
  const steps = t.paymentModal.steps;
  const rows = steps[0]?.rows || [];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
  };

  const handleCopyAll = () => {
    const all = rows.map((r) => `${r.label}: ${r.value}`).join('\n');
    navigator.clipboard.writeText(all).catch(() => {});
  };

  return null; /* Payment modal is hidden in original — shown in rare flows. Placeholder for when needed. */

  /* Uncomment below to make it functional:
  return (
    <div
      id="paymentModal"
      role="dialog"
      aria-modal="true"
      aria-hidden="true"
      style={{ display: 'none' }}
    >
      ...
    </div>
  );
  */
}
