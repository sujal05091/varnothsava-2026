import { MemberProvider } from '@/integrations';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import EventsPage from '@/components/pages/EventsPage';
import CartPage from '@/components/pages/CartPage';
import GalleryPage from '@/components/pages/GalleryPage';
import ProfilePage from '@/components/pages/ProfilePage';
import SchedulePage from '@/components/pages/SchedulePage';
import SponsorsPage from '@/components/pages/SponsorsPage';
import FAQPage from '@/components/pages/FAQPage';
import AboutPage from '@/components/pages/AboutPage';
import { useEffect } from 'react';

export default function AppRouter() {
  useEffect(() => {
    console.log('✅ AppRouter mounted successfully!');
  }, []);

  return (
    <MemberProvider>
      <BrowserRouter basename={import.meta.env.BASE_NAME}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </MemberProvider>
  );
}
