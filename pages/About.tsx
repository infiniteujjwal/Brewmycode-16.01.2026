import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = "About | BrewMyCode";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in bg-background text-text">

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-6 pt-40 pb-20 border-b border-border">
        <p className="text-sm font-bold uppercase tracking-widest opacity-40 mb-6">About</p>
        <h1 className="text-6xl md:text-8xl font-medium leading-[0.9] letterpress">
          The person<br />
          <span className="font-serif italic font-light opacity-60">behind the work.</span>
        </h1>
      </header>

      {/* Founder Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Photo */}
          <div className="relative">
            <div className="aspect-[3/4] max-w-md rounded-2xl overflow-hidden bg-surface border border-border">
              <img
                src="/founder.jpg"
                alt="Ujjwal Soni — Founder of BrewMyCode"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            {/* Caption */}
            <div className="mt-4 opacity-50 text-sm">
              Helsinki, Finland — 2024
            </div>
          </div>

          {/* Bio */}
          <div className="pt-4">
            <h2 className="text-4xl md:text-5xl font-medium mb-2">Ujjwal Soni</h2>
            <p className="text-sm font-bold uppercase tracking-widest opacity-40 mb-10">Founder, BrewMyCode</p>

            <div className="space-y-6 text-xl text-text-muted leading-relaxed">
              <p>
                I started BrewMyCode after noticing the same pattern in almost every business I encountered — smart people spending their time on predictable, repeatable work that a well-built system could handle automatically.
              </p>
              <p>
                Invoice chasing. Copying data between tools. Re-routing the same support tickets. Things that feel small until you realize they're consuming 20 hours a week of someone who should be thinking, not typing.
              </p>
              <p>
                I spent time working across the US through the Erasmus for Entrepreneurs program, specifically to understand how the best-run companies operate. The ones that stood out weren't the biggest — they had less friction. They'd automated the predictable parts and freed their people for the work that actually required a human.
              </p>
              <p>
                I came back to Helsinki wanting to make that kind of operational clarity accessible to companies that aren't Google-sized.
              </p>
            </div>

            {/* Recognition */}
            <div className="mt-10 p-5 bg-surface border border-border rounded-xl flex items-start gap-4">
              <div className="text-2xl mt-0.5">🏆</div>
              <div>
                <p className="font-semibold text-sm text-text mb-1">
                  Winner — Sisu Factory Sauna Pitching, Helsinki
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Selected from 20 competing teams. Awarded entry to{' '}
                  <a
                    href="https://www.linkedin.com/posts/sisu-factory_what-happens-when-you-combine-sauna-startup-activity-7432134229204856832-H7hX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                  >
                    Polar Bear Pitching
                  </a>
                  {' '}in Oulu — one of Finland's most competitive startup pitch events.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
              <Link to="/contact">
                <Button>Work with us</Button>
              </Link>
              <a
                href="https://www.erasmusforentrepreneurs.eu/en/story-1-ujjwal-soni-usa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-widest font-bold border-b border-primary pb-1 opacity-60 hover:opacity-100 transition-opacity mt-3"
              >
                Erasmus Story →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="border-y border-border py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest opacity-40 mb-8">Why BrewMyCode exists</p>
            <h3 className="text-4xl md:text-5xl font-medium mb-10 leading-tight">
              Most automation advice says "use this tool." We build the thing the tool can't do out of the box.
            </h3>
            <div className="space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                Off-the-shelf software gets you 80% of the way there. The last 20% — the part that's specific to how your business actually works — is where most companies either give up or hire someone to do it manually forever.
              </p>
              <p>
                That's the gap we fill. Not with a platform. Not with a subscription. With a system that's built around your actual process, tested against your actual data, and handed over to your team to own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What most agencies get wrong */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-widest opacity-40 mb-8">What most AI agencies get wrong</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {[
            {
              no: "01",
              wrong: "They sell you AI.",
              right: "We don't talk about AI — we talk about what takes your team 20 hours a week and shouldn't. The technology is secondary to the problem."
            },
            {
              no: "02",
              wrong: "They disappear after launch.",
              right: "The first version of any automation is never the last. We build for the moment it breaks, not just the moment it works."
            },
            {
              no: "03",
              wrong: "They promise everything.",
              right: "We'll tell you when automation isn't the right answer. Sometimes the bottleneck is a process problem, not a software problem. That's a free discovery."
            }
          ].map((item) => (
            <div key={item.no} className="bg-background p-10">
              <div className="text-5xl font-bold text-primary/10 mb-6">{item.no}</div>
              <p className="text-xl font-medium line-through opacity-30 mb-3">{item.wrong}</p>
              <p className="text-lg text-text-muted leading-relaxed">{item.right}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team & Size */}
      <section className="border-t border-border py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest opacity-40 mb-8">How we work</p>
              <h3 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">Small on purpose.</h3>
              <div className="space-y-5 text-lg text-text-muted leading-relaxed">
                <p>
                  We're a small team based in Helsinki. We take on 3–4 projects at a time and that's intentional. Every project gets real attention — not a junior hand-off after the sales call.
                </p>
                <p>
                  If we're at capacity, we'll tell you and give you an honest timeline. We'd rather lose a project than deliver something we're not proud of.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "3–4", label: "Active projects at a time" },
                { value: "Helsinki", label: "Where we're based" },
                { value: "2023", label: "Founded" },
                { value: "24h", label: "Response time, guaranteed" },
              ].map((stat) => (
                <div key={stat.label} className="bg-background p-8 rounded-2xl border border-border">
                  <div className="text-3xl font-bold mb-2 text-text">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest opacity-50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="text-5xl md:text-6xl font-medium mb-8">Ready to work together?</h2>
        <p className="text-xl text-text-muted mb-12 max-w-xl mx-auto">
          Book a free 30-min call. We'll review your workflows and tell you honestly whether we can help.
        </p>
        <Link to="/contact">
          <Button className="text-lg px-10 py-5">Book a Free 30-Min Call</Button>
        </Link>
      </section>

    </div>
  );
};
