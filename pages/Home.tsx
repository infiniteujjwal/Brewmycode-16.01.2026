import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SERVICES } from '../data/workflows';
import { useLanguage } from '../contexts/LanguageContext';
import { GhostMascot } from '../components/ui/GhostMascot';
import { ClientLogos } from '../components/ui/ClientLogos';

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
            onClick={() => navigate('/workflows')}
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
                  <p className="opacity-70 leading-relaxed text-lg text-text mb-4">{service.tagline}</p>
                  <div className="text-sm text-text-muted border-t border-border pt-4">
                    <p className="font-medium mb-1">Example:</p>
                    <p className="text-xs">
                      {service.slug === 'workflow-automation' && 'We built a system that auto-routes support tickets. Resolution time: 4hrs → 47min.'}
                      {service.slug === 'ai-automation' && 'Invoice processing that runs itself. 20hrs/week → 2hrs via OCR+ERP integration.'}
                      {service.slug === 'ai-enablement' && 'Lead scoring that updates nightly. SDRs now focus only on top 10% ready-to-buy signals.'}
                    </p>
                  </div>
                </div>
                <div className="mt-8 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-text">
                  Explore →
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 mb-20">
        <h2 className="text-center text-sm uppercase tracking-widest font-bold text-text-muted mb-12">
          {t('home.clients.title')}
        </h2>
        <ClientLogos />
      </section>

      {/* What We Build Section */}
      <section className="border-y border-border py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-4xl md:text-5xl font-medium text-text mb-8">{t('home.philosophy.title')}</h4>
            <p className="opacity-60 text-xl md:text-2xl leading-relaxed text-text">
              {t('home.philosophy.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <h3 className="text-2xl font-medium text-text">What clients say</h3>
          <a
            href="https://www.trustpilot.com/review/brewmycode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity border-b border-primary pb-0.5"
          >
            Read on Trustpilot →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Chan",
              location: "United States",
              stars: 4,
              date: "April 2026",
              text: "The work quality is genuinely excellent. They automated our customer health scoring — pulling data from Intercom, Stripe, and HubSpot into a unified dashboard with automated alerts. What used to take our CS team 2 hours of manual checking now happens automatically every morning. Clear communication, structured sprints, no drama. They delivered on time and on scope. We've now rolled them into our CRM automation as well and I don't even think about it anymore. Stuff just gets done.",
            },
            {
              name: "Eerika P",
              location: "Finland",
              stars: 5,
              date: "February 2026",
              text: "Very nice experience with Ujjwal and his team. Work was delivered on time, and communication was clear from the get-go. Will come back if I need any expertise in automation.",
            },
            {
              name: "Verified Customer",
              location: "India",
              stars: 5,
              date: "February 2026",
              text: "Very professional and always on time. The service was fast and smooth.",
            },
          ].map((review) => (
            <a
              key={review.name}
              href="https://www.trustpilot.com/review/brewmycode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-surface border border-border rounded-2xl p-8 hover:border-primary transition-colors group"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${i < review.stars ? 'text-[#00b67a]' : 'text-border'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              {/* Review text */}
              <p className="text-text leading-relaxed mb-6 opacity-80">
                "{review.text}"
              </p>
              {/* Reviewer */}
              <div className="border-t border-border pt-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-text">{review.name}</p>
                  <p className="text-xs opacity-40 mt-0.5">{review.location} · {review.date}</p>
                </div>
                <span className="text-xs opacity-30 group-hover:opacity-60 transition-opacity uppercase tracking-widest font-bold">
                  Trustpilot
                </span>
              </div>
            </a>
          ))}
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