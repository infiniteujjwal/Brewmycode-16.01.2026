import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { GhostMascot } from '../components/ui/GhostMascot';

export const Contact: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const initialInterest = location.state?.interest || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: initialInterest,
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 px-6 animate-fade-in text-text">
        <div className="max-w-xl text-center">
          <div className="flex justify-center mb-8">
            <GhostMascot size="xl" />
          </div>
          <h1 className="text-5xl font-serif italic mb-6">{t('contact.success.title')}</h1>
          <p className="text-xl text-text-muted mb-8">
            {t('contact.success.desc')}
          </p>
          <div className="bg-surface p-8 rounded-xl inline-block text-left shadow-recessed">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 opacity-50 text-text">{t('contact.success.steps')}</h4>
            <ul className="space-y-2 text-text">
              <li>{t('contact.success.step1')}</li>
              <li>{t('contact.success.step2')}</li>
              <li>{t('contact.success.step3')}</li>
            </ul>
          </div>
          <div className="mt-12">
            <Button onClick={() => setSubmitted(false)} variant="outline">{t('contact.back')}</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 animate-fade-in text-text">
      <div>
        <h1 className="text-5xl md:text-7xl font-medium mb-8">{t('contact.title')}</h1>
        <p className="text-xl text-text-muted mb-12">
          {t('contact.desc')}
        </p>
        
        <div className="space-y-12">
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-2 opacity-50">{t('contact.email')}</h4>
            <p className="text-2xl">Info@Brewmycode.com</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-2 opacity-50">{t('contact.hq')}</h4>
            <p className="text-2xl">
              Pajamäentie 2B<br />
              00360 Helsinki, Finland
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-2 opacity-50">{t('contact.assurance')}</h4>
            <p className="opacity-70 max-w-md">
              {t('contact.assurance_desc')}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-surface p-8 md:p-12 rounded-2xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-text">{t('contact.form.name')}</label>
              <input 
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background border border-border p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all text-text placeholder-text-muted" 
                placeholder="Jane Doe" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-text">{t('contact.form.role')}</label>
              <input 
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-background border border-border p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all text-text placeholder-text-muted" 
                placeholder="CTO, Founder..." 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-text">{t('contact.form.email')}</label>
            <input 
              required
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-background border border-border p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all text-text placeholder-text-muted" 
              placeholder="jane@company.com" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-text">{t('contact.form.interest')}</label>
            <select 
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full bg-background border border-border p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all text-text"
            >
              <option value="">{t('contact.form.select')}</option>
              <option value="AI Strategy">General AI Strategy</option>
              <option value="Workflow Automation">Workflow Automation</option>
              <option value="Custom Dev">Custom Development</option>
              {initialInterest && <option value={initialInterest}>Regarding: {initialInterest}</option>}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-text">{t('contact.form.details')}</label>
            <textarea 
              rows={4} 
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="w-full bg-background border border-border p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all text-text placeholder-text-muted" 
              placeholder="Briefly describe the operational bottleneck..." 
            />
          </div>

          <Button type="submit" fullWidth className="mt-4">
            {t('contact.form.submit')}
          </Button>
        </form>
      </div>
    </div>
  );
};