import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#121212] dark:bg-[#000000] text-[#ebeae6] pt-24 pb-12 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-bold text-2xl tracking-tighter">BrewMy{'{'}Code{'}'}</span>
              <div className="w-2 h-2 bg-[#ebeae6] rounded-full"></div>
            </div>
            <p className="opacity-60 max-w-sm text-lg font-serif italic">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-6 opacity-40 uppercase tracking-widest text-xs">{t('footer.services')}</h5>
            <ul className="space-y-4 opacity-80">
              <li><Link to="/geo" className="hover:text-white hover:underline">{t('nav.geo')}</Link></li>
              <li><Link to="/services/ai-enablement" className="hover:text-white hover:underline">{t('nav.services.enablement')}</Link></li>
              <li><Link to="/services/ai-automation" className="hover:text-white hover:underline">{t('nav.services.automation')}</Link></li>
              <li><Link to="/services/workflow-automation" className="hover:text-white hover:underline">{t('nav.services.workflow')}</Link></li>
              <li><Link to="/services/custom-software" className="hover:text-white hover:underline">{t('nav.services.custom')}</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 opacity-40 uppercase tracking-widest text-xs">{t('footer.company')}</h5>
            <ul className="space-y-4 opacity-80">
              <li><Link to="/about" className="hover:text-white hover:underline">About</Link></li>
              <li><Link to="/workflows" className="hover:text-white hover:underline">{t('nav.workflows')}</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:underline">{t('nav.inquire')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center opacity-40 text-xs uppercase tracking-widest border-t border-white/10 pt-10">
          <div>© {new Date().getFullYear()} BrewMy{'{'}Code{'}'} , Business Id : 3518342-5</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
            <span>Helsinki / NYC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};