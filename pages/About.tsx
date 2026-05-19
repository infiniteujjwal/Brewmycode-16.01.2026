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
          The team<br />
          <span className="font-serif italic font-light opacity-60">behind the work.</span>
        </h1>
      </header>

      {/* Team Members */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Ujjwal Soni",
              role: "Founder & CEO",
              location: "Helsinki, Finland",
              initials: "US",
              image: "/founder.jpg"
            },
            {
              name: "Eerika Patrakka",
              role: "Business Development Manager",
              location: "Helsinki, Finland",
              initials: "EP",
              image: "/eerika.png"
            },
            {
              name: "Shubham Chauhan",
              role: "ML Engineer",
              location: "Remote",
              initials: "SC",
              image: "/shubham.png"
            },
            {
              name: "Tisha Garg",
              role: "Senior AI Engineer",
              location: "Remote",
              initials: "TG",
              image: "/tisha.png"
            },
          ].map((member) => (
            <div key={member.name} className="bg-surface border border-border rounded-2xl p-6 flex flex-col gap-4">
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-primary/10 border border-primary/20 flex items-center justify-center text-3xl font-bold text-primary mb-2">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                ) : (
                  member.initials
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text">{member.name}</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-primary/80 mt-1">{member.role}</p>
              </div>
              {/* location removed */}
            </div>
          ))}
        </div>

        {/* Nex0 Oy notice */}
        <div className="mt-16 p-5 bg-surface border border-border rounded-xl flex items-start gap-4 max-w-3xl">
          <div className="text-xl mt-0.5">🏢</div>
          <div>
            <p className="font-semibold text-sm text-text mb-1">Legal Entity</p>
            <p className="text-sm text-text-muted leading-relaxed">
              BrewMyCode is now officially operating under{' '}
              <strong>Nex0 Oy</strong>{' '}(Business ID: 3589366-2), a registered company in Finland. All services and contracts are issued under this entity.
            </p>
          </div>
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
                { value: "2025", label: "Founded" },
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
          Book a 30-min call. We'll review your workflows and tell you honestly whether we can help.
        </p>
        <Link to="/contact">
          <Button className="text-lg px-10 py-5">Book a 30-Min Call</Button>
        </Link>
      </section>

    </div>
  );
};
