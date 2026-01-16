import React from 'react';
import { USE_CASES } from '../data/workflows';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const UseCases: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 animate-fade-in text-text">
      <h1 className="text-5xl md:text-7xl font-medium mb-6">{t('cases.title')}</h1>
      <p className="text-xl text-text-muted max-w-3xl mb-20">
        {t('cases.desc')}
      </p>

      <div className="space-y-20">
        {USE_CASES.map((uc, index) => (
          <div key={uc.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
            
            <div className="flex-1">
              <div className="text-sm font-bold uppercase tracking-widest text-text-muted mb-2">{uc.industry}</div>
              <h2 className="text-4xl font-bold mb-6 text-text">{uc.title}</h2>
              <div className="text-6xl font-serif italic text-text-muted mb-8">{uc.metric}</div>
              
              <div className="space-y-6 text-lg opacity-80 leading-relaxed text-text-muted">
                <div>
                  <strong className="text-text">{t('cases.problem')}</strong> {uc.problem}
                </div>
                <div>
                  <strong className="text-text">{t('cases.old')}</strong> {uc.oldProcess}
                </div>
                <div>
                  <strong className="text-text">{t('cases.sol')}</strong> {uc.solution}
                </div>
                <div className="bg-surface p-6 rounded-lg border-l-4 border-primary">
                  <strong className="text-text block mb-2">{t('cases.outcome')}</strong> {uc.result}
                </div>
              </div>
            </div>

            <div className="flex-1 w-full">
              <Card className="h-full min-h-[400px] flex items-center justify-center bg-background border border-border">
                {/* Placeholder for a chart or graphic */}
                <div className="text-center opacity-30 text-text-muted">
                  <div className="text-9xl font-serif italic">{index + 1}</div>
                  <div className="uppercase tracking-widest font-bold">{t('cases.viz')}</div>
                </div>
              </Card>
            </div>

          </div>
        ))}
      </div>

      <div className="mt-40 text-center">
        <h3 className="text-3xl font-medium mb-8 text-text">{t('cases.cta')}</h3>
        <Button onClick={() => navigate('/contact')}>{t('cases.btn')}</Button>
      </div>
    </div>
  );
};