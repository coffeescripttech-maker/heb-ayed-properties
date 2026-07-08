import { useState, useEffect, useCallback } from 'react';
import { LocaleProvider } from './i18n';
import { Shell } from './components/layout/Shell';
import { LangToggle } from './components/layout/LangToggle';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { QuotationPage } from './components/pages/QuotationPage';
import { VideoModal } from './components/ui/VideoModal';
import { ZoomModal } from './components/ui/ZoomModal';
import { PaymentModal } from './components/ui/PaymentModal';

type Page = 'home' | 'quotation';

function getPageFromUrl(): Page {
  const params = new URLSearchParams(window.location.search);
  const p = params.get('page');
  if (p === 'quotation') return 'quotation';
  return 'home';
}

export default function App() {
  const [page, setPage] = useState<Page>(getPageFromUrl);

  const navigate = useCallback((to: Page) => {
    const url = new URL(window.location.href);
    if (to === 'home') {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', to);
    }
    window.history.pushState({ page: to }, '', url.toString());
    setPage(to);
  }, []);

  useEffect(() => {
    const onPop = () => setPage(getPageFromUrl());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <LocaleProvider>
      <Shell>
        <Nav onNavigate={navigate} currentPage={page} />
        <LangToggle />
        <main>
          {page === 'home' && <HomePage />}
          {page === 'quotation' && <QuotationPage />}
        </main>
        <Footer />
      </Shell>

      <VideoModal />
      <ZoomModal />
      <PaymentModal />
    </LocaleProvider>
  );
}
