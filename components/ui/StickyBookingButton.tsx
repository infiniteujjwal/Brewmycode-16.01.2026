import React from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const StickyBookingButton: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <button
      data-cal-link="brewmycode/discovery-call"
      data-cal-namespace="discovery-call"
      data-cal-config='{"layout":"month_view"}'
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-fg px-6 py-4 rounded-full shadow-2xl font-semibold tracking-tight hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-3 border border-border group"
    >
      <Calendar size={20} className="group-hover:-translate-y-0.5 transition-transform" />
      <span>{t('booking.sticky')}</span>
    </button>
  );
};