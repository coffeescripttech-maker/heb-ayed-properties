import { useLocale } from '../../i18n';

export function LangToggle() {
  const { locale, setLocale } = useLocale();

  const handleToggle = () => {
    setLocale(locale === 'ar' ? 'en' : 'ar');
  };

  return (
    <div className="lang">
      <div className="lang-pill" role="tablist">
        <button
          role="tab"
          aria-selected={locale === 'en'}
          onClick={locale === 'ar' ? handleToggle : undefined}
        >
          English
        </button>
        <button
          role="tab"
          data-lang="ar"
          aria-selected={locale === 'ar'}
          onClick={locale === 'en' ? handleToggle : undefined}
        >
          العربية
        </button>
      </div>
    </div>
  );
}
