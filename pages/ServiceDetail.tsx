import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SERVICES } from '../data/workflows';
import { Button } from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { ServiceVisual } from '../components/ui/ServiceVisual';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.slug === slug) as any;

  if (!service) {
    return <div className="pt-40 text-center text-text">Service not found.</div>;
  }

  return (
    <div className="animate-fade-in text-text">
      {/* Header */}
      <header className="pt-32 pb-32 px-6 border-b border-border bg-background transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="inline-block border border-border px-4 py-1 rounded-full text-xs uppercase tracking-widest text-text-muted">
              Service
            </div>
            {service.price && (
              <div className="inline-block border border-primary/40 px-4 py-1 rounded-full text-xs uppercase tracking-widest text-primary font-bold">
                {service.price}
              </div>
            )}
          </div>
          <h1 className="text-5xl md:text-7xl font-medium mb-8 max-w-4xl text-text">{service.title}</h1>
          <p className="text-2xl text-text-muted max-w-2xl leading-relaxed mb-4">
            {service.tagline}
          </p>
          {service.bestFor && (
            <p className="text-sm text-text-muted opacity-60 mb-12">
              → Best for: {service.bestFor}
            </p>
          )}
          <Button
            variant="outline"
            onClick={() => navigate('/contact')}
          >
            {service.slug === 'ai-assessment' ? 'Book Assessment' : `Start a Project`}
          </Button>

          <div className="mt-20 w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-surface flex items-center justify-center relative">
             <ServiceVisual slug={service.slug} />
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h3 className="text-3xl font-bold mb-8">The Challenge</h3>
          <p className="text-lg leading-relaxed mb-12 text-text-muted">
            {service.description}
          </p>

          <h4 className="font-bold uppercase tracking-widest text-sm mb-6 opacity-50">Common Pain Points</h4>
          <ul className="space-y-4">
            {service.challenges.map((c: string, i: number) => (
              <li key={i} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5"></div>
                 <span className="text-lg">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface p-12 rounded-2xl shadow-xl">
           <h3 className="text-3xl font-bold mb-8">The BrewMy{'{'+'Code'+'}'} Approach</h3>
           <div className="space-y-8">
             {service.approach.map((step: string, i: number) => (
               <div key={i} className="flex gap-6">
                 <div className="font-serif italic text-4xl text-text-muted opacity-50">0{i+1}</div>
                 <div>
                   <h5 className="font-bold text-xl mb-2">{step}</h5>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Examples section — only for Automate Manual Work */}
      {service.examples && service.examples.length > 0 && (
        <section className="border-t border-border py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm font-bold uppercase tracking-widest opacity-40 mb-4">What this actually looks like</p>
            <h3 className="text-4xl font-medium mb-14 max-w-2xl leading-tight">
              Real examples of multi-step work we've automated.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.examples.map((ex: any, i: number) => (
                <div key={i} className="bg-background border border-border rounded-2xl p-8 flex flex-col gap-4">
                  <div className="text-4xl font-bold text-primary/10">{String(i + 1).padStart(2, '0')}</div>
                  <h4 className="text-xl font-bold text-text">{ex.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed flex-1">{ex.description}</p>
                  <div className="border-t border-border pt-4 flex gap-6 text-xs font-bold uppercase tracking-widest">
                    <span className="text-text-muted opacity-60">{ex.timeline}</span>
                    <span className="text-green-500">{ex.saving}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-background border border-border rounded-2xl">
              <p className="text-text-muted text-lg leading-relaxed">
                <span className="font-semibold text-text">The key idea:</span> wherever people have the same multi-step work on a computer, we can probably automate 80% of it.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-surface py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12">Outcomes Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {service.outcomes.map((outcome: string, i: number) => (
               <div key={i} className="flex items-center gap-4 p-6 bg-background rounded-xl shadow-sm border border-border">
                 <CheckCircle2 className="text-green-600 shrink-0" />
                 <span className="font-medium">{outcome}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 text-center bg-surface mt-12 border-t border-border transition-colors duration-300">
         <h2 className="text-4xl font-medium mb-4">Ready to remove the manual work?</h2>
         <p className="text-text-muted mb-10 max-w-lg mx-auto">
           {service.slug === 'ai-assessment'
             ? 'Book a 30-min call. We\'ll map your top automation opportunities.'
             : 'Start with an assessment and we\'ll scope the right solution for your workflow.'}
         </p>
         <Button
            variant="primary"
            onClick={() => navigate('/contact')}
         >
           {service.slug === 'ai-assessment' ? 'Book Assessment' : 'Start a Project'}
         </Button>
      </section>
    </div>
  );
};