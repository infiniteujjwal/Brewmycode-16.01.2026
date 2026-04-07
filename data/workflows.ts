import { Workflow, UseCase } from '../types';

export const WORKFLOWS: Workflow[] = [
  {
    id: 'w1',
    name: 'Invoice Processing Automation',
    industry: 'FinTech',
    department: 'Finance',
    automationType: 'Data Processing',
    problem: 'Manual entry of 500+ invoices weekly leads to 12% error rate and delayed payments.',
    manualPain: 'Finance team spends 20h/week typing data. Vendor friction due to late payments.',
    solution: 'OCR + LLM extraction pipeline that auto-matches POs and pushes to ERP.',
    aiUsed: 'Document AI for extraction, LLM for fuzzy matching line items.',
    roi: { time: '90% reduction', cost: '$45k/yr saved', scalability: 'Infinite volume' }
  },
  {
    id: 'w2',
    name: 'Support Ticket Classification',
    industry: 'SaaS',
    department: 'Customer Support',
    automationType: 'AI Decision',
    problem: 'L1 agents waste time routing tickets instead of solving them.',
    manualPain: 'Average response time 4hrs due to manual triage bottlenecks.',
    solution: 'Zero-shot classification engine routes tickets to correct squad instantly.',
    aiUsed: 'Transformer-based text classification (BERT/Gemini).',
    roi: { time: 'Instant routing', cost: 'Reduces L1 headcount need', scalability: 'Handles spikes auto' }
  },
  {
    id: 'w3',
    name: 'Sales Lead Qualification',
    industry: 'SaaS',
    department: 'Sales',
    automationType: 'AI Decision',
    problem: 'SDRs spend 70% of time on low-intent leads.',
    manualPain: 'High burnout, low conversion rates on cold outreach.',
    solution: 'AI enrichment and behavioral scoring to surface "Ready to Buy" signals.',
    aiUsed: 'Predictive lead scoring models.',
    roi: { time: 'SDRs focus only on top 10%', cost: '+30% conversion', scalability: 'Auto-scales with ads' }
  },
  {
    id: 'w4',
    name: 'Employee Onboarding Flow',
    industry: 'Enterprise Ops',
    department: 'HR',
    automationType: 'Orchestration',
    problem: 'New hires wait 3 days for access to Slack, Jira, and GitHub.',
    manualPain: 'IT tickets pile up. Bad first impression for talent.',
    solution: 'Event-driven provisioning triggered by contract signature.',
    aiUsed: 'Rule-based orchestration scripts.',
    roi: { time: '0 wait time', cost: '$200 per hire admin', scalability: 'Same effort for 1 or 100' }
  },
  {
    id: 'w5',
    name: 'Inventory Forecasting',
    industry: 'Logistics',
    department: 'Operations',
    automationType: 'AI Decision',
    problem: 'Stockouts during peak season cause 15% revenue loss.',
    manualPain: 'Spreadsheets cant handle multi-variable seasonality trends.',
    solution: 'Demand prediction model ingesting historical sales + seasonal trends.',
    aiUsed: 'Time-series forecasting (Prophet/Arima + ML).',
    roi: { time: 'Automated purchasing', cost: '-20% holding costs', scalability: 'Multi-warehouse ready' }
  },
  {
    id: 'w6',
    name: 'Financial Reporting Gen',
    industry: 'FinTech',
    department: 'Finance',
    automationType: 'Data Processing',
    problem: 'Month-end close takes 10 days of grueling data aggregation.',
    manualPain: 'Analysts act as copy-paste machines from CSVs to Excel.',
    solution: 'Automated ETL pipelines feeding live dashboards.',
    aiUsed: 'Python data processing + SQL.',
    roi: { time: 'Close in 2 days', cost: 'Saved 100s of analyst hours', scalability: 'Real-time visibility' }
  },
  {
    id: 'w7',
    name: 'Compliance Monitoring',
    industry: 'Healthcare',
    department: 'Operations',
    automationType: 'AI Decision',
    problem: 'Manual audit of patient logs to ensure HIPAA compliance is spotty.',
    manualPain: 'Risk of massive fines. Human eye misses patterns.',
    solution: 'Anomaly detection system scanning access logs 24/7.',
    aiUsed: 'Unsupervised anomaly detection.',
    roi: { time: 'Continuous audit', cost: 'Avoids $M in fines', scalability: 'Scales with patient count' }
  },
  {
    id: 'w8',
    name: 'Internal Approval Routing',
    industry: 'Enterprise Ops',
    department: 'Operations',
    automationType: 'Orchestration',
    problem: 'Capex requests get lost in email threads for weeks.',
    manualPain: 'Projects stalled. Lack of audit trail on decisions.',
    solution: 'Slack-based interactive approval bot with ERP write-back.',
    aiUsed: 'N/A (Logic automation).',
    roi: { time: 'Approvals in mins', cost: 'Faster project kickoffs', scalability: 'Standardized process' }
  },
  {
    id: 'w9',
    name: 'Data Sync (CRM <> ERP)',
    industry: 'Enterprise Ops',
    department: 'IT',
    automationType: 'Data Processing',
    problem: 'Sales figures in Salesforce dont match revenue in NetSuite.',
    manualPain: 'Weekly "reconciliation meetings" that waste VP time.',
    solution: 'Bidirectional real-time sync via API middleware.',
    aiUsed: 'N/A (Integration).',
    roi: { time: 'Zero recon time', cost: 'Better strategic decisions', scalability: 'Handles API limits' }
  },
  {
    id: 'w10',
    name: 'Knowledge Base Search',
    industry: 'Enterprise Ops',
    department: 'IT',
    automationType: 'AI Decision',
    problem: 'Employees cant find internal docs; ask repetitive questions.',
    manualPain: 'Senior engineers distracted by trivial queries.',
    solution: 'RAG (Retrieval Augmented Generation) chatbot on Slack.',
    aiUsed: 'Vector embeddings + LLM.',
    roi: { time: '-40% interruptions', cost: 'Higher productivity', scalability: 'Ingests new docs auto' }
  },
  {
    id: 'w11',
    name: 'Patient Intake Triage',
    industry: 'Healthcare',
    department: 'Operations',
    automationType: 'AI Decision',
    problem: 'Front desk overwhelmed by intake forms and symptom checking.',
    manualPain: 'Long waiting room times, data entry errors.',
    solution: 'Digital intake analyzing symptoms to prioritize urgent cases.',
    aiUsed: 'NLP for symptom analysis.',
    roi: { time: 'Faster throughput', cost: 'Optimized doctor time', scalability: '24/7 digital front door' }
  },
  {
    id: 'w12',
    name: 'Product Description Gen',
    industry: 'E-commerce',
    department: 'Marketing',
    automationType: 'AI Decision',
    problem: 'Launching 100 SKUs takes weeks of copywriting.',
    manualPain: 'Generic, non-SEO descriptions due to fatigue.',
    solution: 'AI generates SEO-optimized descriptions from specs images.',
    aiUsed: 'Multimodal LLM (Vision + Text).',
    roi: { time: '100 SKUs in 10 mins', cost: 'No agency fees', scalability: 'Infinite SKU growth' }
  },
  {
    id: 'w13',
    name: 'Fraud Detection',
    industry: 'FinTech',
    department: 'Finance',
    automationType: 'AI Decision',
    problem: 'Rule-based fraud catches too many false positives.',
    manualPain: 'Genuine customers blocked; support flooded with complaints.',
    solution: 'Behavioral ML model adjusting risk scores in real-time.',
    aiUsed: 'Gradient Boosted Trees / Neural Nets.',
    roi: { time: 'Real-time blocking', cost: '-50% fraud loss', scalability: 'Adapts to new attacks' }
  },
  {
    id: 'w14',
    name: 'Competitor Price Watch',
    industry: 'E-commerce',
    department: 'Sales',
    automationType: 'Data Processing',
    problem: 'Manual checking of competitor sites is too slow.',
    manualPain: 'Losing buy box due to outdated pricing.',
    solution: 'Scraping engine + dynamic pricing algorithm.',
    aiUsed: 'Computer Vision for layout resistance.',
    roi: { time: 'Daily updates', cost: '+15% margin capture', scalability: 'Track 1000s of URLs' }
  },
  {
    id: 'w15',
    name: 'Contract Review Assistant',
    industry: 'Enterprise Ops',
    department: 'Finance',
    automationType: 'AI Decision',
    problem: 'Legal review bottlenecks sales deals for weeks.',
    manualPain: 'Expensive outside counsel for standard NDAs.',
    solution: 'AI highlights risk clauses and suggests standard redlines.',
    aiUsed: 'Legal LLM fine-tuned on contracts.',
    roi: { time: 'Review in minutes', cost: '-70% legal spend', scalability: 'Consistent risk policy' }
  },
  {
    id: 'w16',
    name: 'Server Log Analysis',
    industry: 'SaaS',
    department: 'IT',
    automationType: 'AI Decision',
    problem: 'Root cause analysis takes hours during downtime.',
    manualPain: 'Sifting through millions of log lines manually.',
    solution: 'AIOps platform correlating logs, metrics, and traces.',
    aiUsed: 'Pattern recognition ML.',
    roi: { time: 'MTTR reduced 60%', cost: 'Uptime SLA credits', scalability: 'Handles petabytes' }
  },
  {
    id: 'w17',
    name: 'Social Sentiment Monitor',
    industry: 'E-commerce',
    department: 'Marketing',
    automationType: 'Data Processing',
    problem: 'PR crisis detected too late.',
    manualPain: 'Brand damage spreads before team wakes up.',
    solution: 'Real-time sentiment analysis on Twitter/Reddit.',
    aiUsed: 'NLP Sentiment Analysis.',
    roi: { time: 'Instant alerts', cost: 'Brand reputation', scalability: 'Global coverage' }
  },
  {
    id: 'w18',
    name: 'Shift Scheduling',
    industry: 'Logistics',
    department: 'HR',
    automationType: 'Rule-based',
    problem: 'Managers spend Friday struggling to fill next week shifts.',
    manualPain: 'Understaffing or overstaffing creates waste.',
    solution: 'Constraint-based solver for optimal shift allocation.',
    aiUsed: 'Linear Programming.',
    roi: { time: 'Auto-schedule', cost: 'Optimized labor spend', scalability: 'Complex rules handled' }
  },
  {
    id: 'w19',
    name: 'Customer Churn Prediction',
    industry: 'SaaS',
    department: 'Customer Support',
    automationType: 'AI Decision',
    problem: 'Reactive retention offers are too little, too late.',
    manualPain: 'Revenue leakage from preventable churn.',
    solution: 'ML model flagging "at-risk" accounts based on usage drops.',
    aiUsed: 'Random Forest / XGBoost.',
    roi: { time: 'Proactive outreach', cost: '-2% monthly churn', scalability: 'Predicts for all users' }
  },
  {
    id: 'w20',
    name: 'Loan Underwriting',
    industry: 'FinTech',
    department: 'Finance',
    automationType: 'AI Decision',
    problem: 'Manual underwriting limits loan volume throughput.',
    manualPain: 'Inconsistent decisions between loan officers.',
    solution: 'Automated decision engine using alternative data points.',
    aiUsed: 'Explainable AI models.',
    roi: { time: 'Instant approval', cost: 'Lower default rates', scalability: 'Scale loan book 10x' }
  },
  {
    id: 'w21',
    name: 'Warehouse Path Optimization',
    industry: 'Logistics',
    department: 'Operations',
    automationType: 'Orchestration',
    problem: 'Pickers walk inefficient routes reducing orders/hour.',
    manualPain: 'Physical fatigue and slow fulfillment.',
    solution: 'Algorithm sorting pick lists by optimal path.',
    aiUsed: 'Traveling Salesperson Problem solver.',
    roi: { time: '+20% pick rate', cost: 'Less labor needed', scalability: 'Dynamic layout adaption' }
  },
  {
    id: 'w22',
    name: 'Email Triage for Execs',
    industry: 'Enterprise Ops',
    department: 'Operations',
    automationType: 'AI Decision',
    problem: 'Executives drowning in noise, missing urgent investor mails.',
    manualPain: 'Decision fatigue and lost opportunities.',
    solution: 'Personal AI inbox guard that highlights only priority.',
    aiUsed: 'Personalized LLM filtering.',
    roi: { time: 'Save 1h/day', cost: 'High-leverage focus', scalability: 'Learns preferences' }
  },
  {
    id: 'w23',
    name: 'Video content repurposing',
    industry: 'E-commerce',
    department: 'Marketing',
    automationType: 'AI Decision',
    problem: 'Long-form video gets low engagement on TikTok.',
    manualPain: 'Video editors are expensive and slow.',
    solution: 'AI clips viral moments and adds captions auto.',
    aiUsed: 'Video/Audio analysis models.',
    roi: { time: '10 clips in 5 mins', cost: '-80% editing cost', scalability: 'Multi-platform content' }
  },
  {
    id: 'w24',
    name: 'Code Refactoring Bot',
    industry: 'Enterprise Ops',
    department: 'IT',
    automationType: 'Orchestration',
    problem: 'Tech debt accumulates; engineers hate upgrading libs.',
    manualPain: 'Security vulnerabilities from old dependencies.',
    solution: 'Auto-PRs for dependency updates and migration patterns.',
    aiUsed: 'AST analysis + LLM code gen.',
    roi: { time: 'Always up to date', cost: 'Avoids rewrites', scalability: 'Across all repos' }
  },
  {
    id: 'w25',
    name: 'Resume Screening',
    industry: 'Enterprise Ops',
    department: 'HR',
    automationType: 'AI Decision',
    problem: 'Recruiters spend 10s per resume, missing gems.',
    manualPain: 'Bias and fatigue lead to poor hiring pipeline.',
    solution: 'Semantic search matching candidates to job descriptions.',
    aiUsed: 'Embedding similarity search.',
    roi: { time: 'Top 10% instant', cost: 'Better quality hire', scalability: '10k applicants easy' }
  }
];

export const USE_CASES: UseCase[] = [
  {
    id: 'uc1',
    title: 'FinTech Unification',
    industry: 'FinTech',
    metric: '45% OPEX Reduction',
    problem: 'A neobank had fragmented data across 12 legacy systems, causing 3-day delays in customer balance updates.',
    oldProcess: 'Manual SQL scripts run by 3 engineers every night to reconcile ledgers.',
    solution: 'We built an event-driven middleware using Kafka and custom connectors to sync all ledgers in real-time.',
    result: 'Real-time balance visibility, zero reconciliation errors, and engineers redeployed to product features.'
  },
  {
    id: 'uc2',
    title: 'Healthcare Compliance',
    industry: 'Healthcare',
    metric: '100% Audit Pass Rate',
    problem: 'A chaotic manual audit process for HIPAA logs left a hospital network vulnerable to massive fines.',
    oldProcess: 'Random sampling of logs once a month by a compliance officer.',
    solution: 'Deployed an AI-driven anomaly detection system that reviews 100% of access logs continuously.',
    result: 'Zero fines in 24 months, automated reporting, and complete peace of mind for the board.'
  },
  {
    id: 'uc3',
    title: 'Logistics Scale-Up',
    industry: 'Logistics',
    metric: '3x Order Volume',
    problem: 'A 3PL provider could not handle Black Friday spikes without hiring 50 temp workers for data entry.',
    oldProcess: 'Humans manually typing shipping labels from emailed spreadsheets.',
    solution: 'End-to-end EDI and API automation directly from retailer ERPs to the warehouse floor.',
    result: 'Handled record volume with zero temp hires and 99.9% accuracy.'
  }
];

export const SERVICES = [
  {
    id: 's1',
    title: 'AI Enablement',
    slug: 'ai-enablement',
    tagline: 'Preparing your data infrastructure for cognitive utility.',
    description: 'AI is only as good as the data it feeds on. We architect the underlying data lakes, vector databases, and governance frameworks required to deploy LLMs safely and effectively within your enterprise.',
    challenges: ['Fragmented, siloed data sources', 'Privacy and security concerns with LLMs', 'Lack of internal AI expertise'],
    approach: ['Data readiness audit', 'Vector database implementation', 'Private model hosting strategy'],
    outcomes: ['Secure, private AI infrastructure', 'Unified data knowledge base', 'Ready for rapid model deployment'],
    icon: '+'
  },
  {
    id: 's2',
    title: 'AI Automation',
    slug: 'ai-automation',
    tagline: 'Decision engines that work while you sleep.',
    description: 'Moving beyond simple chatbots. We build agents that can reason, plan, and execute complex tasks across your software stack, reducing the need for human intervention in routine cognitive tasks.',
    challenges: ['Human error in complex decision trees', 'Slow response times to customers', 'High operational overhead'],
    approach: ['Agentic workflow design', 'Human-in-the-loop safeguards', 'Performance monitoring loops'],
    outcomes: ['24/7 autonomous operations', 'Consistent decision quality', 'Massive scale without headcount'],
    icon: '∞'
  },
  {
    id: 's3',
    title: 'Workflow Automation',
    slug: 'workflow-automation',
    tagline: 'Connecting your tools to eliminate friction.',
    description: 'Your SaaS tools should talk to each other. We build custom integrations and orchestration layers that turn disjointed apps into a seamless, flowing operating system for your business.',
    challenges: ['Double data entry', 'Dropped balls between departments', 'Visibility black holes'],
    approach: ['API-first integration architecture', 'Event-driven serverless functions', 'Robust error handling'],
    outcomes: ['One-click processes', 'Real-time data synchronization', 'Elimination of "copy-paste" work'],
    icon: '⚡'
  },
  {
    id: 's4',
    title: 'Custom Software',
    slug: 'custom-software',
    tagline: 'Bespoke infrastructure that fits perfectly.',
    description: 'When off-the-shelf SaaS fails to meet your unique needs, we engineer purpose-built internal tools, portals, and platforms that give you a competitive advantage.',
    challenges: ['Generic software limitations', 'Vendor lock-in', 'Poor user experience for employees'],
    approach: ['Domain-driven design', 'Modern React/Node stack', 'Iterative agile delivery'],
    outcomes: ['Perfect operational fit', 'Full IP ownership', 'High-performance specific tools'],
    icon: '−'
  },
  {
    id: 's5',
    title: 'AI Search Visibility',
    slug: 'ai-search-visibility',
    tagline: 'Get found by ChatGPT and AI engines.',
    description: 'When someone asks ChatGPT for a recommendation in your category, does your brand show up? We structure your content so AI engines can find and cite you.',
    challenges: ['Invisible to AI search engines', 'Competitors showing up in ChatGPT/Perplexity', 'Zero AI-driven referral traffic'],
    approach: ['AI Visibility Score across platforms', 'Entity gap analysis', 'Content restructuring for AI comprehension'],
    outcomes: ['3x increase in AI referral traffic', 'Brand cited by ChatGPT/Perplexity', 'Future-proof digital presence'],
    icon: '◉'
  }
];