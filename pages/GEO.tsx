import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { GhostMascot } from '../components/ui/GhostMascot';

export const GEO: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Generative Engine Optimization (GEO) | BrewMyCode";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in bg-background text-text selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <h2 className="font-serif italic text-2xl md:text-3xl mb-8 opacity-60 text-primary">
          The New Era of Search Visibility
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight font-medium mb-8 letterpress">
          Generative Engine <br />
          Optimization <span className="text-primary">(GEO)</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
          "If someone asks ChatGPT, Perplexity, or Gemini about your industry right now — and your brand doesn't show up — you're invisible."
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button onClick={() => window.open('https://cal.com/brewmycode', '_blank')}>
            Book a GEO Strategy Call
          </Button>
          <button
            onClick={() => document.getElementById('framework')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm uppercase tracking-widest font-bold border-b border-primary pb-1 hover:text-primary transition-colors"
          >
            How It Works
          </button>
        </div>
      </header>

      {/* The Shift Section */}
      <section className="bg-surface py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-medium mb-8">
                Traditional SEO Is <br />No Longer Enough
              </h3>
              <p className="text-lg text-text-muted mb-6 leading-relaxed">
                Search behavior has fundamentally changed. Users aren't just clicking blue links anymore; they're asking AI engines for answers, recommendations, and decisions.
              </p>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Your customers are using ChatGPT, Perplexity, and Gemini to find solutions. If your brand isn't optimized for these Generative Engines, you're missing out on the highest-intent traffic available today.
              </p>
              <ul className="space-y-4">
                {[
                  "AI engines are replacing traditional search journeys",
                  "Zero-click searches are skyrocketing",
                  "Brand authority now means 'AI readability'",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl opacity-50 rounded-full" />
              <Card className="relative p-8 border-primary/20 bg-background/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">The Old Way (SEO)</h4>
                      <p className="text-sm text-text-muted">Optimizing for keywords and backlinks to rank on a list of blue links.</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-border" />
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/10 p-3 rounded-lg text-purple-500">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">The New Way (GEO)</h4>
                      <p className="text-sm text-text-muted">Optimizing for entities and context to be the <strong>direct answer</strong> recommended by AI.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-medium mb-6">
          We Ensure AI Systems <br />Can Do 4 Things:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { title: "Find You", desc: "Ensure your brand exists in the AI's knowledge graph." },
            { title: "Understand You", desc: "Communicate your value proposition clearly to the algorithms." },
            { title: "Trust You", desc: "Establish authority so AI cites you as a credible source." },
            { title: "Recommend You", desc: "Position your brand as the best solution for user queries." },
          ].map((item, i) => (
            <Card key={i} className="p-8 hover:border-primary transition-colors text-left">
              <div className="text-6xl font-bold text-primary/20 mb-4">0{i + 1}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-text-muted">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Service Framework */}
      <section id="framework" className="bg-surface py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Our Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-medium">The GEO Framework</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 flex flex-col h-full bg-background border-border hover:border-primary transition-all duration-300">
              <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4">1. AI Visibility Score</h4>
              <p className="text-text-muted mb-6 flex-grow">
                We scan your brand's presence across ChatGPT, Perplexity, Gemini, and Google AI Overviews to provide a measurable visibility baseline.
              </p>
              <ul className="space-y-2 text-sm text-text-muted border-t border-border pt-6">
                <li className="flex items-center gap-2">✓ Cross-platform Analysis</li>
                <li className="flex items-center gap-2">✓ Brand Sentiment Check</li>
                <li className="flex items-center gap-2">✓ Competitor Benchmarking</li>
              </ul>
            </Card>

            <Card className="p-8 flex flex-col h-full bg-background border-border hover:border-primary transition-all duration-300 transform md:-translate-y-4 shadow-xl border-primary/30">
              <div className="h-12 w-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-500 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4">2. AI Gap Audit</h4>
              <p className="text-text-muted mb-6 flex-grow">
                Identify why you aren't showing up. We find structural issues, missing entities, weak topical authority, and lack of answer-optimized content.
              </p>
              <ul className="space-y-2 text-sm text-text-muted border-t border-border pt-6">
                <li className="flex items-center gap-2">✓ Entity Gap Analysis</li>
                <li className="flex items-center gap-2">✓ Technical Structure Audit</li>
                <li className="flex items-center gap-2">✓ Content Comprehension Test</li>
              </ul>
            </Card>

            <Card className="p-8 flex flex-col h-full bg-background border-border hover:border-primary transition-all duration-300">
              <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4">3. AI Optimization Engine</h4>
              <p className="text-text-muted mb-6 flex-grow">
                The execution phase. We restructure content for AI comprehension, improve entity architecture, and build trust signals that algorithms love.
              </p>
              <ul className="space-y-2 text-sm text-text-muted border-t border-border pt-6">
                <li className="flex items-center gap-2">✓ Answer-Ready Content</li>
                <li className="flex items-center gap-2">✓ Schema & Entity Markup</li>
                <li className="flex items-center gap-2">✓ Digital PR & Citations</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof & Target Audience */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-3xl md:text-5xl font-medium mb-8">Who Needs GEO?</h3>
            <div className="space-y-6">
              {[
                "SaaS Companies looking to dominate feature comparisons",
                "Local Businesses needing to be the 'best nearby' recommendation",
                "Agencies wanting to offer cutting-edge value to clients",
                "Growth-stage Startups seeking rapid authority",
              ].map((audience, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center text-xs font-bold text-primary">
                    {i + 1}
                  </div>
                  <p className="text-lg text-text-muted">{audience}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-surface rounded-xl border-l-4 border-primary">
              <h4 className="font-bold text-xl mb-2">Real World Impact</h4>
              <p className="italic text-text-muted mb-4">
                "One customer generates 40% of their sales directly from ChatGPT visibility after implementing our GEO framework."
              </p>
              <p className="text-sm text-text-muted">
                Even local businesses like <span className="text-text font-medium">Eerikin Pippuri</span> can rank as "best restaurant in Kamppi" when properly optimized.
              </p>
            </div>
          </div>
          
          <div className="bg-surface p-10 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <GhostMascot size="lg" />
             </div>
             <h3 className="text-2xl font-bold mb-6">The BrewMyCode Promise</h3>
             <p className="text-lg text-text-muted mb-8 leading-relaxed">
               We don't just chase algorithms; we future-proof your digital presence. By optimizing for the most advanced AI models, you automatically win at traditional SEO, too.
             </p>
             <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                  <span className="font-medium">Search Visibility</span>
                  <span className="text-green-500 font-bold">+215%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                  <span className="font-medium">AI Recommendations</span>
                  <span className="text-green-500 font-bold">+3x</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                  <span className="font-medium">Qualified Leads</span>
                  <span className="text-green-500 font-bold">+40%</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-fg py-32 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-medium mb-8">
            Stop Being Invisible to AI.
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto">
            The search landscape has changed forever. Secure your brand's place in the future of search today.
          </p>
          <Button 
            variant="secondary" 
            className="text-primary bg-white hover:bg-white/90 text-xl px-12 py-6 h-auto"
            onClick={() => window.open('https://cal.com/brewmycode', '_blank')}
          >
            Get Your Free AI Visibility Audit
          </Button>
          <p className="mt-6 text-sm opacity-70">
            Limited spots available for this month.
          </p>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      </section>
    </div>
  );
};
