import { LocaleProvider } from './i18n';
import { Shell } from './components/layout/Shell';
import { LangToggle } from './components/layout/LangToggle';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { VideoModal } from './components/ui/VideoModal';
import { ZoomModal } from './components/ui/ZoomModal';
import { PaymentModal } from './components/ui/PaymentModal';

export default function App() {
  return (
    <LocaleProvider>
      <Shell>
        <Nav />
        <LangToggle />
        <main>
          <HomePage />
        </main>
        <Footer />
      </Shell>

      <VideoModal />
      <ZoomModal />
      <PaymentModal />
    </LocaleProvider>
  );
}
