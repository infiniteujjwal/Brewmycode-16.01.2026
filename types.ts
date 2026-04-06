export interface Workflow {
  id: string;
  name: string;
  industry: 'SaaS' | 'FinTech' | 'Healthcare' | 'E-commerce' | 'Logistics' | 'Enterprise Ops';
  department: 'Operations' | 'Finance' | 'HR' | 'Sales' | 'Marketing' | 'Customer Support' | 'IT';
  automationType: 'AI Decision' | 'Rule-based' | 'Orchestration' | 'Data Processing';
  problem: string;
  manualPain: string;
  solution: string;
  aiUsed: string;
  roi: {
    time: string;
    cost: string;
    scalability: string;
  };
}

export interface UseCase {
  id: string;
  title: string;
  industry: string;
  metric: string;
  problem: string;
  oldProcess: string;
  solution: string;
  result: string;
}

export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  challenges: string[];
  approach: string[];
  outcomes: string[];
  icon: string;
}

export interface Client {
  id: string;
  name: string;
  logoPath: string;
  websiteUrl?: string;
  altText: string;
}
