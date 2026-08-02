import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HeyZincWidgetProvider, Home as HeyZincWidget } from '@heyzinc/widget';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';

import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { About } from './pages/About';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { StickyBookingButton } from './components/ui/StickyBookingButton';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HeyZincWidgetProvider token="EI4KLcBI8rar2cWDxvvscM84C6GqyJXy">
      <HeyZincWidget />
      <ThemeProvider>
        <LanguageProvider>
          <HashRouter>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col font-sans text-text bg-background transition-colors duration-300">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services/:slug" element={<ServiceDetail />} />

                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </main>
              <Footer />
              <StickyBookingButton />
            </div>
          </HashRouter>
        </LanguageProvider>
      </ThemeProvider>
    </HeyZincWidgetProvider>
  );
};

export default App;
