import React from 'react';
import { Database, FileText, Bot, CheckCircle2, Zap, Clock, ArrowRight, BarChart3, Search, Cog, TrendingUp, Users, AlertTriangle } from 'lucide-react';
import { AIAssessmentAnimation } from './AIAssessmentAnimation';

interface ServiceVisualProps {
  slug: string;
}

export const ServiceVisual: React.FC<ServiceVisualProps> = ({ slug }) => {
  const customStyles = `
    @keyframes floatUp {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    @keyframes pulse-ring {
      0% { transform: scale(1); opacity: 0.6; }
      100% { transform: scale(1.5); opacity: 0; }
    }
    @keyframes slideRight {
      0% { transform: translateX(-8px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes drawLine {
      from { stroke-dashoffset: 100; }
      to { stroke-dashoffset: 0; }
    }
    .float-1 { animation: floatUp 3s ease-in-out infinite; }
    .float-2 { animation: floatUp 3s ease-in-out infinite 0.5s; }
    .float-3 { animation: floatUp 3s ease-in-out infinite 1s; }
    .slide-in-1 { animation: slideRight 0.6s ease-out forwards 0.3s; opacity: 0; }
    .slide-in-2 { animation: slideRight 0.6s ease-out forwards 0.6s; opacity: 0; }
    .slide-in-3 { animation: slideRight 0.6s ease-out forwards 0.9s; opacity: 0; }
  `;

  if (slug === 'ai-assessment') {
    return <AIAssessmentAnimation />;
  }

  // Automate Manual Work: Show before → after transformation
  return (
    <div className="w-full bg-surface/50 rounded-2xl relative overflow-hidden min-h-[420px] p-8 md:p-12">
      <style>{customStyles}</style>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-stretch">
        {/* Before: Manual chaos */}
        <div className="flex-1 space-y-3">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-400/70 mb-4">❌ Before — Manual Process</div>
          
          <div className="float-1 bg-background border border-red-400/20 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 bg-red-500/10 rounded-md flex items-center justify-center"><FileText size={14} className="text-red-400" /></div>
              <span className="text-sm font-medium text-text">Copy data from emails</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-text-muted">
              <Clock size={9} /> 45 min per batch · error-prone
            </div>
          </div>

          <div className="float-2 bg-background border border-red-400/20 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 bg-red-500/10 rounded-md flex items-center justify-center"><Database size={14} className="text-red-400" /></div>
              <span className="text-sm font-medium text-text">Update spreadsheets</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-text-muted">
              <Clock size={9} /> 30 min per update · repetitive
            </div>
          </div>

          <div className="float-3 bg-background border border-red-400/20 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 bg-red-500/10 rounded-md flex items-center justify-center"><Users size={14} className="text-red-400" /></div>
              <span className="text-sm font-medium text-text">Send status updates</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-text-muted">
              <Clock size={9} /> 20 min per round · easy to forget
            </div>
          </div>

          <div className="mt-2 text-center text-xs text-red-400/60 font-bold">~10 hours/week wasted</div>
        </div>

        {/* Center: Transformation */}
        <div className="hidden md:flex flex-col items-center justify-center gap-2 px-4">
          <div className="relative">
            <div className="w-16 h-16 bg-background border-2 border-primary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(var(--color-primary),0.2)]">
              <Cog className="text-primary animate-[spin_4s_linear_infinite]" size={28} />
            </div>
          </div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-primary/60 mt-1">Automated</div>
          <ArrowRight size={20} className="text-primary/50" />
        </div>

        {/* After: Automated flow */}
        <div className="flex-1 space-y-3">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500/70 mb-4">✅ After — Fully Automated</div>

          <div className="slide-in-1 bg-background border border-green-500/20 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 bg-green-500/10 rounded-md flex items-center justify-center"><Zap size={14} className="text-green-500" /></div>
              <span className="text-sm font-medium text-text">Auto-extract & validate</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-green-500/70">
              <CheckCircle2 size={9} /> Instant · 99.5% accuracy
            </div>
          </div>

          <div className="slide-in-2 bg-background border border-green-500/20 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 bg-green-500/10 rounded-md flex items-center justify-center"><Database size={14} className="text-green-500" /></div>
              <span className="text-sm font-medium text-text">Auto-sync to systems</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-green-500/70">
              <CheckCircle2 size={9} /> Real-time · no manual entry
            </div>
          </div>

          <div className="slide-in-3 bg-background border border-green-500/20 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 bg-green-500/10 rounded-md flex items-center justify-center"><BarChart3 size={14} className="text-green-500" /></div>
              <span className="text-sm font-medium text-text">Auto-report & notify</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-green-500/70">
              <CheckCircle2 size={9} /> Scheduled · never missed
            </div>
          </div>

          <div className="mt-2 text-center text-xs text-green-500/80 font-bold">~10 hours/week saved ✨</div>
        </div>
      </div>
    </div>
  );
};
