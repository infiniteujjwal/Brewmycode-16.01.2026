import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SERVICES, WORKFLOWS } from '../data/workflows';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <div className="pt-40 text-center text-text">Service not found.</div>;
  }

  // Find 3 relevant workflows for this service casually
  const relatedWorkflows = WORKFLOWS.filter(w => {
     if (slug === 'ai-enablement') return w.automationType === 'AI Decision';
     if (slug === 'ai-automation') return w.automationType === 'AI Decision' || w.automationType === 'Data Processing';
     if (slug === 'workflow-automation') return w.automationType === 'Orchestration' || w.automationType === 'Rule-based';
     return true;
  }).slice(0, 3);

  return (
    <div className="animate-fade-in text-text">
      {/* Header using semantic colors for auto light/dark support */}
      <header className="pt-32 pb-32 px-6 border-b border-border bg-background transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block border border-border px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-8 text-text-muted">
            Service Vertical
          </div>
          <h1 className="text-5xl md:text-7xl font-medium mb-8 max-w-4xl text-text">{service.title}</h1>
          <p className="text-2xl text-text-muted max-w-2xl leading-relaxed mb-12">
            {service.tagline}
          </p>
          <Button 
            variant="outline" 
            onClick={() => navigate('/contact')}
          >
            Consult on {service.title}
          </Button>
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
            {service.challenges.map((c, i) => (
              <li key={i} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5"></div>
                 <span className="text-lg">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface p-12 rounded-2xl shadow-xl">
           <h3 className="text-3xl font-bold mb-8">The BrewMy{'{'}Code{'}'} Approach</h3>
           <div className="space-y-8">
             {service.approach.map((step, i) => (
               <div key={i} className="flex gap-6">
                 <div className="font-serif italic text-4xl text-text-muted opacity-50">0{i+1}</div>
                 <div>
                   <h5 className="font-bold text-xl mb-2">{step}</h5>
                   <p className="text-text-muted text-sm">Rigorous implementation focused on stability and future-proofing.</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      <section className="bg-surface py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12">Outcomes Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {service.outcomes.map((outcome, i) => (
               <div key={i} className="flex items-center gap-4 p-6 bg-background rounded-xl shadow-sm border border-border">
                 <CheckCircle2 className="text-green-600" />
                 <span className="font-medium">{outcome}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
           <h3 className="text-3xl font-bold">Related Workflows</h3>
           <Button variant="ghost" onClick={() => navigate('/workflows')}>View Library →</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedWorkflows.map(w => (
            <Card key={w.id} className="h-full flex flex-col">
              <h4 className="font-bold text-xl mb-2">{w.name}</h4>
              <p className="text-sm opacity-60 mb-4">{w.problem.substring(0, 80)}...</p>
              <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
                <span className="text-xs font-bold uppercase">{w.industry}</span>
                <ArrowRight size={16} />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer CTA Section - Adaptive to theme */}
      <section className="py-32 text-center bg-surface mt-12 border-t border-border transition-colors duration-300">
         <h2 className="text-4xl font-medium mb-8">Engineer your advantage.</h2>
         <Button 
            variant="primary" 
            onClick={() => navigate('/contact')}
         >
           Start {service.title} Project
         </Button>
      </section>
    </div>
  );
};