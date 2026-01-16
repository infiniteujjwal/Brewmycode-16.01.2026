import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SERVICES } from '../data/workflows';
import { useLanguage } from '../contexts/LanguageContext';
import { GhostMascot } from '../components/ui/GhostMascot';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-32 pb-40">
        <h2 className="font-serif italic text-3xl md:text-4xl mb-12 opacity-60 text-text-muted">
          {t('hero.subtitle')}
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] font-medium mb-12 letterpress text-text">
          {t('hero.title1')} <br />
          {t('hero.title2')} <span className="font-serif italic font-light text-text-muted">{t('hero.title2_accent')}</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted mb-16 max-w-2xl leading-relaxed">
          {t('hero.desc')}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
          <Button onClick={() => navigate('/contact')}>{t('hero.cta_primary')}</Button>
          <button 
            onClick={() => navigate('/use-cases')}
            className="text-sm uppercase tracking-widest font-bold border-b border-primary pb-1 text-text hover:text-text-muted transition-colors"
          >
            {t('hero.cta_secondary')}
          </button>
        </div>
      </header>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service) => (
            <Link to={`/services/${service.slug}`} key={service.id}>
              <Card className="h-full flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="w-16 h-16 mb-12 border border-border rounded-full flex items-center justify-center font-bold text-2xl text-text-muted group-hover:border-primary group-hover:text-primary transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-text">{service.title}</h3>
                  <p className="opacity-70 leading-relaxed text-lg text-text">{service.tagline}</p>
                </div>
                <div className="mt-8 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-text">
                  Explore →
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-y border-border py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-20">
          <div className="max-w-xl relative z-10">
            <div className="mb-8 flex items-center gap-4">
               <h4 className="text-4xl md:text-5xl font-medium text-text">{t('home.philosophy.title')}</h4>
               <GhostMascot size="sm" className="hidden lg:block opacity-60" />
            </div>
            <p className="opacity-60 text-xl md:text-2xl font-serif leading-relaxed text-text">
              {t('home.philosophy.desc')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full lg:w-auto z-10">
            <div className="p-10 bg-primary text-primary-fg rounded-2xl text-center shadow-2xl">
              <div className="text-5xl md:text-6xl font-bold mb-2">45%</div>
              <div className="text-xs uppercase opacity-60 tracking-widest">{t('home.stat.opex')}</div>
            </div>
            <div className="p-10 bg-surface text-text rounded-2xl text-center shadow-recessed">
              <div className="text-5xl md:text-6xl font-bold mb-2">10k+</div>
              <div className="text-xs uppercase opacity-60 tracking-widest">{t('home.stat.hours')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-40 text-center">
        <h2 className="text-5xl md:text-7xl font-medium mb-12 text-text">{t('home.ready')}</h2>
        <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
          {t('home.ready_desc')}
        </p>
        <div className="relative inline-block">
            <Button onClick={() => navigate('/contact')} className="text-xl px-12 py-6 relative z-10">
            {t('home.begin')}
            </Button>
            <div className="absolute -right-20 -top-12 hidden lg:block rotate-12">
               <GhostMascot size="md" />
            </div>
        </div>
      </section>
    </div>
  );
};