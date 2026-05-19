import React from 'react';
import { Database, FileText, Bot, CheckCircle2, Zap } from 'lucide-react';

interface ServiceVisualProps {
  slug: string;
}

export const ServiceVisual: React.FC<ServiceVisualProps> = ({ slug }) => {
  // We use an inline style block to inject custom keyframes for this specific component
  const customStyles = `
    @keyframes scan {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(400px); }
    }
    @keyframes slide {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(300%); }
    }
    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-scan { animation: scan 4s ease-in-out infinite; }
    .animate-slide { animation: slide 2s linear infinite; }
    .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
  `;

  if (slug === 'ai-assessment') {
    return (
      <div className="w-full h-full bg-surface/50 rounded-2xl relative overflow-hidden flex items-center justify-center min-h-[400px]">
        <style>{customStyles}</style>
        {/* Animated Assessment Visual */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 z-10 w-full px-8">
          
          {/* Input column */}
          <div className="flex flex-row md:flex-col gap-4">
             <div className="w-16 h-16 md:w-24 md:h-16 bg-background border border-border rounded-lg shadow-sm flex items-center justify-center animate-pulse delay-100">
               <FileText className="text-text-muted opacity-50" />
             </div>
             <div className="w-16 h-16 md:w-24 md:h-16 bg-background border border-border rounded-lg shadow-sm flex items-center justify-center animate-pulse delay-300">
               <Database className="text-text-muted opacity-50" />
             </div>
             <div className="w-16 h-16 md:w-24 md:h-16 bg-background border border-border rounded-lg shadow-sm flex items-center justify-center animate-pulse delay-500">
               <FileText className="text-text-muted opacity-50" />
             </div>
          </div>
          
          {/* AI Core */}
          <div className="relative w-32 h-32 shrink-0">
             <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_4s_linear_infinite]"></div>
             <div className="absolute inset-2 rounded-full border border-primary/40 border-dashed animate-[spin_6s_linear_infinite_reverse]"></div>
             <div className="absolute inset-0 flex items-center justify-center bg-background rounded-full shadow-[0_0_30px_rgba(var(--color-primary),0.15)]">
               <Bot size={40} className="text-primary animate-pulse" />
             </div>
          </div>
          
          {/* Output column */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
             <div className="w-full md:w-56 h-20 bg-background border border-primary/30 rounded-xl shadow-lg flex items-center px-4 gap-4 transform translate-y-2">
               <div className="w-10 h-10 shrink-0 bg-green-500/10 rounded-full flex items-center justify-center">
                 <CheckCircle2 className="text-green-500" size={20} />
               </div>
               <div className="flex-1">
                 <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1.5">Opportunity 1</div>
                 <div className="w-full h-1.5 bg-border rounded-full">
                   <div className="w-3/4 h-full bg-green-500/50 rounded-full"></div>
                 </div>
               </div>
             </div>
             <div className="w-full md:w-56 h-20 bg-background border border-primary/30 rounded-xl shadow-lg flex items-center px-4 gap-4 opacity-70">
               <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                 <Zap className="text-primary" size={20} />
               </div>
               <div className="flex-1">
                 <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1.5">Opportunity 2</div>
                 <div className="w-full h-1.5 bg-border rounded-full">
                    <div className="w-1/2 h-full bg-primary/50 rounded-full"></div>
                 </div>
               </div>
             </div>
          </div>
        </div>
        
        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 shadow-[0_0_15px_rgba(var(--color-primary),0.8)] animate-scan"></div>
      </div>
    );
  }

  // Automate Manual Work Visual
  return (
    <div className="w-full h-full bg-surface/50 rounded-2xl relative overflow-hidden flex items-center justify-center min-h-[400px]">
       <style>{customStyles}</style>
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
       
       <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col md:flex-row items-center justify-between gap-8">
         {/* Input pile - Messy */}
         <div className="relative w-40 h-40 shrink-0">
           {[0, 1, 2].map((i) => (
             <div 
                key={i} 
                className="absolute bg-background border border-border p-4 rounded-xl shadow-lg w-full animate-pulse" 
                style={{ 
                  top: i * 15, 
                  left: i * (i % 2 === 0 ? 10 : -10),
                  transform: `rotate(${i % 2 === 0 ? i * 5 : -i * 5}deg)`,
                  zIndex: 10 - i, 
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: '3s'
                }}
              >
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-6 h-6 bg-border/50 rounded flex items-center justify-center">
                   <FileText size={12} className="text-text-muted" />
                 </div>
                 <div className="w-1/2 h-2 bg-border rounded"></div>
               </div>
               <div className="space-y-2">
                 <div className="w-full h-1.5 bg-border/50 rounded"></div>
                 <div className="w-4/5 h-1.5 bg-border/50 rounded"></div>
                 <div className="w-2/3 h-1.5 bg-border/50 rounded"></div>
               </div>
             </div>
           ))}
         </div>

         {/* Pipeline Arrow */}
         <div className="flex-1 w-full relative px-4 flex items-center justify-center">
           <div className="h-1 w-full bg-border rounded-full relative overflow-hidden hidden md:block">
             <div className="absolute top-0 left-0 h-full w-1/3 bg-primary rounded-full animate-slide"></div>
           </div>
           
           <div className="absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-16 h-16 bg-background border-2 border-primary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(var(--color-primary),0.2)] z-10">
             <Bot className="text-primary animate-pulse" size={28} />
           </div>
         </div>

         {/* Output - Structured list */}
         <div className="flex flex-col gap-3 w-full md:w-56 shrink-0">
           {[0, 1, 2].map((i) => (
             <div 
               key={i} 
               className="bg-background border border-green-500/20 p-4 rounded-xl shadow-sm flex items-center gap-4 opacity-0 animate-fade-in-right" 
               style={{ animationDelay: `${0.5 + i * 0.5}s` }}
             >
               <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                 <CheckCircle2 size={14} className="text-green-500" />
               </div>
               <div className="flex-1 space-y-2">
                 <div className="w-3/4 h-1.5 bg-text-muted/30 rounded"></div>
                 <div className="w-1/2 h-1.5 bg-border rounded"></div>
               </div>
             </div>
           ))}
         </div>
       </div>
    </div>
  );
};
