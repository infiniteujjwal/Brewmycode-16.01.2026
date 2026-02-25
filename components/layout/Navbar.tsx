import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path ? 'opacity-100 border-b border-primary' : 'opacity-60 hover:opacity-100';
  const isServiceActive = location.pathname.startsWith('/services');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border text-text transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        <Link to="/" className="flex items-baseline gap-1 group">
          <span className="font-bold text-2xl tracking-tighter">BrewMy{'{'}Code{'}'}</span>
          <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-text-muted transition-colors"></div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-medium items-center">
          <Link to="/geo" className={`pb-1 transition-all ${isActive('/geo')}`}>{t('nav.geo')}</Link>
          <Link to="/workflows" className={`pb-1 transition-all ${isActive('/workflows')}`}>{t('nav.workflows')}</Link>


          {/* Services Dropdown */}
          <div className="relative group">
            <button className={`pb-1 flex items-center gap-1 transition-all ${isServiceActive ? 'opacity-100 border-b border-primary' : 'opacity-60 hover:opacity-100'}`}>
              {t('nav.services')} <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-surface border border-border shadow-2xl rounded-xl p-2 w-64 overflow-hidden">
                <Link to="/services/ai-enablement" className="block px-4 py-3 hover:bg-background rounded-lg transition-colors text-sm font-medium opacity-80 hover:opacity-100">
                  {t('nav.services.enablement')}
                </Link>
                <Link to="/services/ai-automation" className="block px-4 py-3 hover:bg-background rounded-lg transition-colors text-sm font-medium opacity-80 hover:opacity-100">
                  {t('nav.services.automation')}
                </Link>
                <Link to="/services/workflow-automation" className="block px-4 py-3 hover:bg-background rounded-lg transition-colors text-sm font-medium opacity-80 hover:opacity-100">
                  {t('nav.services.workflow')}
                </Link>
                <Link to="/services/custom-software" className="block px-4 py-3 hover:bg-background rounded-lg transition-colors text-sm font-medium opacity-80 hover:opacity-100">
                  {t('nav.services.custom')}
                </Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className={`pb-1 transition-all ${isActive('/contact')}`}>{t('nav.inquire')}</Link>

          <div className="h-6 w-px bg-border mx-2"></div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Language */}
            <div className="relative group">
              <button className="flex items-center gap-1 opacity-60 hover:opacity-100">
                <Globe size={18} /> <span className="uppercase text-xs font-bold">{language}</span>
              </button>
              <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-surface border border-border shadow-xl rounded-lg overflow-hidden flex flex-col">
                  <button onClick={() => setLanguage('en')} className="px-4 py-2 hover:bg-background text-sm text-left">English</button>
                  <button onClick={() => setLanguage('fi')} className="px-4 py-2 hover:bg-background text-sm text-left">Suomi</button>
                  <button onClick={() => setLanguage('sv')} className="px-4 py-2 hover:bg-background text-sm text-left">Svenska</button>
                </div>
              </div>
            </div>

            {/* Theme */}
            <button onClick={toggleTheme} className="opacity-60 hover:opacity-100 transition-opacity">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-6 text-xl font-medium shadow-xl h-[calc(100vh-6rem)] overflow-y-auto">
          <Link to="/geo" className={isActive('/geo')} onClick={() => setIsOpen(false)}>{t('nav.geo')}</Link>
          <Link to="/workflows" className={isActive('/workflows')} onClick={() => setIsOpen(false)}>{t('nav.workflows')}</Link>


          <div className="space-y-4 pt-2 pb-2">
            <div className="opacity-40 text-xs uppercase tracking-widest font-bold">{t('nav.services')}</div>
            <div className="flex flex-col gap-4 pl-4 border-l border-border">
              <Link to="/services/ai-enablement" className={`${isActive('/services/ai-enablement')} text-lg`} onClick={() => setIsOpen(false)}>{t('nav.services.enablement')}</Link>
              <Link to="/services/ai-automation" className={`${isActive('/services/ai-automation')} text-lg`} onClick={() => setIsOpen(false)}>{t('nav.services.automation')}</Link>
              <Link to="/services/workflow-automation" className={`${isActive('/services/workflow-automation')} text-lg`} onClick={() => setIsOpen(false)}>{t('nav.services.workflow')}</Link>
              <Link to="/services/custom-software" className={`${isActive('/services/custom-software')} text-lg`} onClick={() => setIsOpen(false)}>{t('nav.services.custom')}</Link>
            </div>
          </div>

          <Link to="/contact" className={isActive('/contact')} onClick={() => setIsOpen(false)}>{t('nav.inquire')}</Link>

          <div className="border-t border-border pt-6 flex justify-between items-center">
            <div className="flex gap-4">
              <button onClick={() => setLanguage('en')} className={`text-sm font-bold ${language === 'en' ? 'opacity-100' : 'opacity-40'}`}>EN</button>
              <button onClick={() => setLanguage('fi')} className={`text-sm font-bold ${language === 'fi' ? 'opacity-100' : 'opacity-40'}`}>FI</button>
              <button onClick={() => setLanguage('sv')} className={`text-sm font-bold ${language === 'sv' ? 'opacity-100' : 'opacity-40'}`}>SV</button>
            </div>
            <button onClick={toggleTheme} className="opacity-80">
              {theme === 'dark' ? <span className="flex items-center gap-2 text-sm"><Sun size={18} /> Light</span> : <span className="flex items-center gap-2 text-sm"><Moon size={18} /> Dark</span>}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};