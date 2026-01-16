import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { WORKFLOWS } from '../data/workflows';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Workflow } from '../types';
import { Filter, ArrowRight, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useLanguage } from '../contexts/LanguageContext';
import { GhostMascot } from '../components/ui/GhostMascot';

export const Workflows: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [selectedWorkflowForAi, setSelectedWorkflowForAi] = useState<Workflow | null>(null);
  const [aiResponse, setAiResponse] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const industries = ['All', ...Array.from(new Set(WORKFLOWS.map(w => w.industry)))];
  const departments = ['All', ...Array.from(new Set(WORKFLOWS.map(w => w.department)))];

  const filteredWorkflows = useMemo(() => {
    return WORKFLOWS.filter(w => {
      const matchIndustry = selectedIndustry === 'All' || w.industry === selectedIndustry;
      const matchDept = selectedDepartment === 'All' || w.department === selectedDepartment;
      const matchSearch = w.name.toLowerCase().includes(search.toLowerCase()) || 
                          w.problem.toLowerCase().includes(search.toLowerCase());
      return matchIndustry && matchDept && matchSearch;
    });
  }, [selectedIndustry, selectedDepartment, search]);

  const handleAiConsult = async (workflow: Workflow) => {
    setSelectedWorkflowForAi(workflow);
    setAiModalOpen(true);
    setAiResponse('');
    setIsThinking(true);

    try {
      const apiKey = process.env.API_KEY; 
      if (!apiKey) {
          // Simulate thinking delay for demo purposes even if API key missing
          await new Promise(resolve => setTimeout(resolve, 2000));
          setAiResponse("AI Service is currently unavailable (Missing API Key). Please contact sales.");
          setIsThinking(false);
          return;
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `
        You are a senior enterprise automation architect at BrewMy{Code}.
        Explain briefly (max 100 words) how a company should implement this workflow: "${workflow.name}".
        Focus on the immediate first step and the biggest risk to avoid.
        Tone: Professional, concise, expert.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setAiResponse(response.text || "Could not generate insight.");
    } catch (error) {
      console.error(error);
      setAiResponse("System is currently experiencing high load. Please try discussing this with our team directly.");
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 animate-fade-in text-text">
      
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-medium mb-6">{t('workflows.title')}</h1>
        <p className="text-xl text-text-muted max-w-3xl">
          {t('workflows.desc')}
        </p>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-24 z-30 bg-background/95 backdrop-blur py-4 mb-12 border-b border-border flex flex-wrap gap-4 items-center transition-colors duration-300">
        <div className="flex items-center gap-2 text-text-muted mr-4">
          <Filter size={20} />
          <span className="font-bold text-sm uppercase tracking-widest">{t('workflows.filter')}</span>
        </div>
        
        <select 
          className="bg-surface border border-border px-4 py-2 rounded-lg text-sm font-medium focus:outline-none focus:border-primary text-text"
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
        >
          {industries.map(i => <option key={i} value={i}>{i === 'All' ? t('workflows.all_ind') : i}</option>)}
        </select>

        <select 
          className="bg-surface border border-border px-4 py-2 rounded-lg text-sm font-medium focus:outline-none focus:border-primary text-text"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          {departments.map(d => <option key={d} value={d}>{d === 'All' ? t('workflows.all_dept') : d}</option>)}
        </select>

        <input 
          type="text" 
          placeholder={t('workflows.search')} 
          className="bg-surface border border-border px-4 py-2 rounded-lg text-sm w-full md:w-64 focus:outline-none focus:border-primary text-text ml-auto placeholder-text-muted"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredWorkflows.map(workflow => (
          <Card key={workflow.id} className="flex flex-col h-full group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2 block">
                  {workflow.industry} • {workflow.department}
                </span>
                <h3 className="text-2xl font-bold text-text">{workflow.name}</h3>
              </div>
              <div className="bg-background text-text text-xs font-bold px-2 py-1 rounded uppercase tracking-wider border border-border">
                {workflow.automationType}
              </div>
            </div>

            <div className="space-y-6 mb-8 flex-grow">
              <div>
                <h4 className="font-serif italic text-text-muted mb-1">{t('workflows.pain')}</h4>
                <p className="text-sm opacity-80 text-text">{workflow.problem}</p>
              </div>
              <div>
                <h4 className="font-serif italic text-text-muted mb-1">{t('workflows.solution')}</h4>
                <p className="text-sm opacity-80 text-text">{workflow.solution}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-2 py-4 border-t border-border mt-4">
                <div>
                  <div className="text-xs uppercase text-text-muted">Time</div>
                  <div className="font-bold text-sm text-text">{workflow.roi.time}</div>
                </div>
                <div>
                  <div className="text-xs uppercase text-text-muted">Cost</div>
                  <div className="font-bold text-sm text-text">{workflow.roi.cost}</div>
                </div>
                <div>
                  <div className="text-xs uppercase text-text-muted">Scale</div>
                  <div className="font-bold text-sm text-text">{workflow.roi.scalability}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
                <Button 
                    onClick={() => navigate('/contact', { state: { interest: workflow.name } })} 
                    className="flex-1 py-3 text-sm"
                >
                    {t('workflows.discuss')}
                </Button>
                <button 
                    onClick={() => handleAiConsult(workflow)}
                    className="p-3 border border-border rounded-lg hover:bg-background transition-colors text-text"
                    title="Ask AI Consultant"
                >
                    <Bot size={20} />
                </button>
            </div>
          </Card>
        ))}
      </div>

      {filteredWorkflows.length === 0 && (
        <div className="text-center py-20 opacity-50">
          <p className="text-2xl font-serif italic text-text">{t('workflows.empty')}</p>
          <button onClick={() => {setSelectedIndustry('All'); setSelectedDepartment('All'); setSearch('')}} className="underline mt-4 text-text">{t('workflows.clear')}</button>
        </div>
      )}

      {/* AI Modal */}
      {aiModalOpen && selectedWorkflowForAi && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-surface p-8 rounded-xl max-w-md w-full shadow-2xl relative border border-border flex flex-col max-h-[90vh]">
            <button onClick={() => setAiModalOpen(false)} className="absolute top-4 right-4 text-text-muted hover:text-text">
                ✕
            </button>
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-text">
                <Bot size={20} />
                AI Architect Insight
            </h3>
            <p className="text-sm text-text-muted mb-4">
                Analyzing: <strong>{selectedWorkflowForAi.name}</strong>
            </p>
            
            <div className="bg-background p-6 rounded-lg shadow-inner min-h-[180px] text-sm leading-relaxed text-text flex items-center justify-center relative overflow-y-auto">
                {isThinking ? (
                    <div className="text-center">
                        <GhostMascot size="lg" className="mb-4" />
                        <p className="text-xs uppercase tracking-widest font-bold opacity-50 animate-pulse">Computing Strategy...</p>
                    </div>
                ) : (
                    <div className="w-full h-full text-left">
                       {aiResponse}
                    </div>
                )}
            </div>

            <div className="mt-6 flex justify-end">
                <Button onClick={() => {setAiModalOpen(false); navigate('/contact', { state: { interest: selectedWorkflowForAi.name } });}} className="py-2 text-sm">
                    Book Full Audit
                </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};