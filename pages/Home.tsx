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
      <header className="max-w-7xl mx-auto px-6 pt-28 pb-24">
        <h2 className="font-serif italic text-2xl md:text-3xl mb-10 opacity-60 text-text-muted">
          {t('hero.subtitle')}
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight font-medium mb-10 letterpress text-text">
          {t('hero.title1')} {t('hero.title2')} <span className="font-serif italic font-light text-text-muted">{t('hero.title2_accent')}</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted mb-14 max-w-2xl leading-relaxed">
          {t('hero.desc')}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <Button onClick={() => navigate('/contact')}>{t('hero.cta_primary')}</Button>
        </div>
      </header>

      {/* Client Logos Section */}
      <section className="max-w-7xl mx-auto px-6 py-14 mb-16">
        <h2 className="text-center text-sm uppercase tracking-widest font-bold text-text-muted mb-10">
          {t('home.clients.title')}
        </h2>
        <ClientLogos />
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.slice(0, 2).map((service) => (
            <Link to={`/services/${service.slug}`} key={service.id}>
              <Card className="h-full flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="flex items-center justify-between mb-12">
                    <div className="w-16 h-16 border border-border rounded-full flex items-center justify-center font-bold text-2xl text-text-muted group-hover:border-primary group-hover:text-primary transition-colors">
                      {service.icon}
                    </div>
                    {(service as any).price && (
                      <span className="text-xs font-bold uppercase tracking-widest border border-border rounded-full px-3 py-1 text-text-muted group-hover:border-primary transition-colors">
                        {(service as any).price}
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-text">{service.title}</h3>
                  <p className="opacity-70 leading-relaxed text-lg text-text mb-4">{service.tagline}</p>
                  <div className="text-sm text-text-muted border-t border-border pt-4">
                    <p className="font-medium mb-1 text-xs uppercase tracking-widest opacity-50">Best for</p>
                    <p className="text-sm">{(service as any).bestFor ?? ''}</p>
                  </div>
                </div>
                <div className="mt-8 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-text">
                  Learn more →
                </div>
              </Card>
            </Link>
          ))}
        </div>
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
              name: "Aino",
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

      {/* Partner Network */}
      <section className="border-t border-border py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-bold uppercase tracking-widest opacity-40 mb-4">Partner Network</p>
          <p className="text-center text-text-muted text-sm mb-12 max-w-xl mx-auto">
            We work within a trusted ecosystem of technology and compliance partners to deliver secure, scalable automation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {/* Microsoft */}
            <div className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-primary transition-colors">
              <div className="h-10 flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt="Microsoft"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-sm text-text leading-snug">Microsoft AI Cloud Partner</p>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">Certified partner in Microsoft's AI &amp; Cloud ecosystem.</p>
            </div>

            {/* AWS */}
            <div className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-primary transition-colors">
              <div className="h-10 flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                  alt="AWS"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-sm text-text leading-snug">AWS Partner Network</p>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">Official member of the Amazon Web Services Partner Network.</p>
            </div>

            {/* Zapier */}
            <div className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-primary transition-colors">
              <div className="h-10 flex items-center">
                <img
                  src="/logos/zapier-wordmark.svg"
                  alt="Zapier"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-sm text-text leading-snug">Zapier Partner</p>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">Verified Zapier partner for workflow automation integrations.</p>
            </div>

            {/* Vaanta AI */}
            <div className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-primary transition-colors">
              <div className="h-10 flex items-center">
                <span className="text-3xl">🔒</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-text leading-snug">Vaanta AI</p>
                <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-widest text-primary/70 border border-primary/20 rounded-full px-2 py-0.5">
                  Compliance Partner
                </span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">Affiliate partner for secure infrastructure &amp; compliance (SOC 2, GDPR).</p>
            </div>
          </div>
          <p className="text-center text-xs text-text-muted opacity-50">
            Vaanta AI is our affiliate partner for secure deployment environments and compliance certifications including SOC 2.
          </p>
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