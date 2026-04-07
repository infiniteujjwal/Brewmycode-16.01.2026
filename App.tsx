import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Workflows } from './pages/Workflows';
import { ServiceDetail } from './pages/ServiceDetail';

import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { AISearchVisibility } from './pages/AISearchVisibility';
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
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col font-sans text-text bg-background transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workflows" element={<Workflows />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />

                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/services/ai-search-visibility" element={<AISearchVisibility />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
            <StickyBookingButton />
          </div>
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
