import React, { useEffect, useState } from 'react';

/**
 * Premium AI Assessment Animation Component
 * Moxo-inspired workflow storytelling with 4 phases:
 * 1. Current operations (fragmented workflows)
 * 2. Assessment scanning
 * 3. Insights revealed
 * 4. Operational clarity → loop
 */

// ─── Icon components (inline SVG to avoid deps) ───

const GoogleSheetsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="1" width="18" height="22" rx="3" fill="#0F9D58" />
    <rect x="6" y="5" width="12" height="14" rx="1" fill="white" />
    <line x1="6" y1="9" x2="18" y2="9" stroke="#0F9D58" strokeWidth="0.8" />
    <line x1="6" y1="13" x2="18" y2="13" stroke="#0F9D58" strokeWidth="0.8" />
    <line x1="12" y1="5" x2="12" y2="19" stroke="#0F9D58" strokeWidth="0.8" />
  </svg>
);

const GmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#EA4335" />
    <path d="M2 6l10 7 10-7" stroke="white" strokeWidth="1.5" fill="none" />
    <rect x="3" y="5" width="18" height="14" rx="1.5" fill="white" opacity="0.9" />
    <path d="M3 6l9 6.5L21 6" stroke="#EA4335" strokeWidth="1.2" fill="none" />
  </svg>
);

const SlackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="2" width="3" height="8" rx="1.5" fill="#E01E5A" />
    <rect x="2" y="9" width="8" height="3" rx="1.5" fill="#36C5F0" />
    <rect x="14" y="9" width="8" height="3" rx="1.5" fill="#2EB67D" />
    <rect x="9" y="14" width="3" height="8" rx="1.5" fill="#ECB22E" />
    <rect x="2" y="14" width="3" height="3" rx="1.5" fill="#E01E5A" />
    <rect x="14" y="2" width="3" height="3" rx="1.5" fill="#36C5F0" />
    <rect x="19" y="14" width="3" height="3" rx="1.5" fill="#2EB67D" />
    <rect x="2" y="5" width="3" height="3" rx="1.5" fill="#ECB22E" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="3" fill="#4285F4" />
    <rect x="3" y="4" width="18" height="6" rx="3" fill="#4285F4" />
    <rect x="3" y="8" width="18" height="14" rx="0" fill="white" />
    <rect x="3" y="8" width="18" height="2" fill="#4285F4" />
    <text x="12" y="18" textAnchor="middle" fill="#4285F4" fontSize="9" fontWeight="bold">31</text>
  </svg>
);

const DocsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="2" width="16" height="20" rx="2" fill="#4285F4" />
    <rect x="6" y="4" width="12" height="16" rx="1" fill="white" />
    <rect x="8" y="7" width="8" height="1.2" rx="0.6" fill="#4285F4" opacity="0.4" />
    <rect x="8" y="10" width="6" height="1.2" rx="0.6" fill="#4285F4" opacity="0.4" />
    <rect x="8" y="13" width="7" height="1.2" rx="0.6" fill="#4285F4" opacity="0.4" />
  </svg>
);

const SalesforceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="4" fill="#00A1E0" />
    <text x="12" y="15" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">SF</text>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <ellipse cx="10" cy="5" rx="7" ry="3" fill="#9CA3AF" opacity="0.3" />
    <ellipse cx="10" cy="5" rx="7" ry="3" stroke="#9CA3AF" strokeWidth="1.2" fill="none" />
    <path d="M3 5v10c0 1.66 3.13 3 7 3s7-1.34 7-3V5" stroke="#9CA3AF" strokeWidth="1.2" fill="none" />
    <ellipse cx="10" cy="10" rx="7" ry="3" stroke="#9CA3AF" strokeWidth="0.8" fill="none" opacity="0.5" />
  </svg>
);

const FolderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M2 6a2 2 0 012-2h4l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" fill="#9CA3AF" opacity="0.3" stroke="#9CA3AF" strokeWidth="1" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="4" width="16" height="12" rx="2" fill="none" stroke="#9CA3AF" strokeWidth="1.2" />
    <path d="M2 6l8 5 8-5" stroke="#9CA3AF" strokeWidth="1.2" fill="none" />
  </svg>
);

const NoteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="2" width="14" height="16" rx="2" fill="#FCD34D" opacity="0.5" stroke="#F59E0B" strokeWidth="0.8" />
    <path d="M6 6h8M6 9h5" stroke="#F59E0B" strokeWidth="0.8" opacity="0.6" />
  </svg>
);

// ─── Workflow card data ───

interface WorkflowCard {
  id: string;
  icon: React.ReactNode;
  label: string;
  x: number;
  y: number;
  barWidths: number[];
}

const workflowCards: WorkflowCard[] = [
  { id: 'spreadsheets', icon: <GoogleSheetsIcon />, label: 'Update spreadsheets', x: 48, y: 8, barWidths: [80, 55] },
  { id: 'emails', icon: <GmailIcon />, label: 'Send follow-up emails', x: 72, y: 18, barWidths: [75, 60] },
  { id: 'reports', icon: <DocsIcon />, label: 'Prepare weekly report', x: 58, y: 35, barWidths: [70, 50] },
  { id: 'crm', icon: <SalesforceIcon />, label: 'Copy data between tools', x: 35, y: 42, barWidths: [85, 65] },
  { id: 'approvals', icon: <SlackIcon />, label: 'Chase approvals', x: 47, y: 60, barWidths: [65, 45] },
  { id: 'schedule', icon: <CalendarIcon />, label: 'Schedule coordination', x: 75, y: 52, barWidths: [72, 58] },
];

// Floating small icons
interface FloatingIcon {
  icon: React.ReactNode;
  x: number;
  y: number;
  delay: number;
}

const floatingIcons: FloatingIcon[] = [
  { icon: <FolderIcon />, x: 34, y: 56, delay: 0 },
  { icon: <DatabaseIcon />, x: 42, y: 72, delay: 0.5 },
  { icon: <EnvelopeIcon />, x: 82, y: 40, delay: 1 },
  { icon: <NoteIcon />, x: 76, y: 70, delay: 1.5 },
  { icon: <NoteIcon />, x: 64, y: 75, delay: 2 },
];

// Avatar data
interface Avatar {
  x: number;
  y: number;
  color: string;
  initials: string;
}

const avatars: Avatar[] = [
  { x: 42, y: 22, color: '#6366F1', initials: 'JM' },
  { x: 83, y: 28, color: '#EC4899', initials: 'SK' },
  { x: 62, y: 50, color: '#F59E0B', initials: 'AT' },
];

// Connector paths (curved dashed lines between cards)
const connectorPaths = [
  'M 520 120 C 600 180, 650 160, 700 220',
  'M 780 230 C 720 280, 680 300, 640 350',
  'M 600 370 C 560 390, 520 400, 500 430',
  'M 480 460 C 500 500, 520 520, 540 560',
  'M 580 580 C 620 570, 680 560, 740 540',
  'M 760 310 C 780 350, 790 400, 780 440',
];

// Assessment labels
interface InsightLabel {
  text: string;
  x: number;
  y: number;
  type: 'warning' | 'bottleneck' | 'opportunity';
  delay: number;
}

const insightLabels: InsightLabel[] = [
  { text: 'repetitive', x: 52, y: 15, type: 'warning', delay: 0 },
  { text: 'manual process', x: 38, y: 48, type: 'warning', delay: 0.3 },
  { text: 'bottleneck', x: 50, y: 66, type: 'bottleneck', delay: 0.6 },
  { text: 'approval delay', x: 72, y: 58, type: 'bottleneck', delay: 0.9 },
  { text: 'automation opportunity', x: 60, y: 40, type: 'opportunity', delay: 1.2 },
];

// ─── Phase timing ───
const PHASE_DURATION = 4000; // ms per phase
const TOTAL_PHASES = 4;

export const AIAssessmentAnimation: React.FC = () => {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => (p + 1) % TOTAL_PHASES);
    }, PHASE_DURATION);
    return () => clearInterval(interval);
  }, []);

  // Smooth progress within phase
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / PHASE_DURATION, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [phase]);

  const isScanning = phase === 1;
  const isInsights = phase === 2;
  const isClarity = phase === 3;

  return (
    <div
      className="w-full relative overflow-hidden select-none"
      style={{
        background: '#F7F4F0',
        minHeight: '560px',
        borderRadius: '16px',
      }}
    >
      <style>{`
        @keyframes aa-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes aa-scan-line {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 95%; opacity: 0; }
        }
        @keyframes aa-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes aa-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes aa-connector-draw {
          from { stroke-dashoffset: 500; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes aa-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
          50% { box-shadow: 0 0 20px 4px rgba(59, 130, 246, 0.15); }
        }
        @keyframes aa-check-pop {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        .aa-card {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .aa-card-scanning {
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3), 0 4px 20px rgba(59, 130, 246, 0.1);
        }
        .aa-card-clear {
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }
        .aa-card-highlight-warning {
          box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.4), 0 4px 16px rgba(245, 158, 11, 0.1);
        }
        .aa-card-highlight-opportunity {
          box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.4), 0 4px 16px rgba(34, 197, 94, 0.1);
        }
      `}</style>

      {/* Left text area */}
      <div className="absolute left-8 md:left-12 top-12 z-20 max-w-[340px]">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mb-8"
          style={{
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
            <line x1="11" y1="11" x2="14" y2="14" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1F2937', letterSpacing: '0.01em' }}>AI Assessment</span>
        </div>

        {/* Headline — changes per phase */}
        <h3
          style={{
            fontSize: '32px',
            lineHeight: 1.2,
            fontWeight: 500,
            color: '#111827',
            marginBottom: '16px',
            transition: 'opacity 0.6s ease',
          }}
        >
          {phase === 0 && <>We analyze your workflows to find what's slowing your team down.</>}
          {phase === 1 && <>Our assessment scans for repetitive work and bottlenecks.</>}
          {phase === 2 && <>We identify where time is lost and where automation fits.</>}
          {phase === 3 && <>Your operations become clearer and more efficient.</>}
        </h3>

        {/* Subtext */}
        <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#6B7280' }}>
          {phase === 0 && 'Our AI Assessment uncovers repetitive work, manual handoffs, and hidden inefficiencies across your tools.'}
          {phase === 1 && 'A structured operational review — not AI magic, but experienced analysis of how your organization works.'}
          {phase === 2 && 'Small insight cards reveal reporting patterns, approval delays, and automation opportunities.'}
          {phase === 3 && 'Workflows simplify. Manual steps disappear. Systems connect more clearly.'}
        </p>

        {/* Phase indicator dots */}
        <div className="flex gap-2 mt-8">
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              style={{
                width: phase === i ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: phase === i ? '#3B82F6' : '#D1D5DB',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* SVG connector lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Dashed orbit / flow lines */}
        <ellipse
          cx="620" cy="350" rx="280" ry="220"
          fill="none"
          stroke="#D1D5DB"
          strokeWidth="1"
          strokeDasharray="6 6"
          opacity={phase === 0 ? 0.5 : phase === 3 ? 0.8 : 0.3}
          style={{ transition: 'opacity 0.8s ease' }}
        />
        <ellipse
          cx="620" cy="350" rx="180" ry="140"
          fill="none"
          stroke="#D1D5DB"
          strokeWidth="1"
          strokeDasharray="6 6"
          opacity={phase === 0 ? 0.4 : phase === 3 ? 0.7 : 0.2}
          style={{ transition: 'opacity 0.8s ease' }}
        />

        {/* Connector lines between cards */}
        {connectorPaths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={isClarity ? '#3B82F6' : '#D1D5DB'}
            strokeWidth={isClarity ? 1.5 : 1}
            strokeDasharray="6 4"
            opacity={phase === 0 ? 0.3 : isScanning ? 0.5 : isInsights ? 0.6 : 0.8}
            style={{
              transition: 'all 1s ease',
              ...(isClarity ? { strokeDasharray: '500', strokeDashoffset: 0, animation: 'aa-connector-draw 2s ease forwards' } : {}),
            }}
          />
        ))}

        {/* Scanning line */}
        {isScanning && (
          <line
            x1="350" x2="950"
            y1={60 + progress * 500} y2={60 + progress * 500}
            stroke="#3B82F6"
            strokeWidth="2"
            opacity={0.3}
          />
        )}
      </svg>

      {/* Workflow cards */}
      {workflowCards.map((card, idx) => {
        const isHighlighted = isInsights && idx < Math.floor(progress * workflowCards.length + 1);
        const highlightType = idx % 3 === 0 ? 'warning' : idx % 3 === 1 ? 'opportunity' : 'warning';

        return (
          <div
            key={card.id}
            className={`aa-card absolute z-10`}
            style={{
              left: `${card.x}%`,
              top: `${card.y}%`,
              animation: `aa-float ${3 + idx * 0.3}s ease-in-out infinite ${idx * 0.4}s`,
              transform: isClarity ? `translate(${(60 - card.x) * 0.15}px, ${(40 - card.y) * 0.1}px)` : undefined,
            }}
          >
            <div
              className={`
                bg-white rounded-2xl px-4 py-3 flex items-center gap-3
                ${isScanning ? 'aa-card-scanning' : ''}
                ${isHighlighted && highlightType === 'warning' ? 'aa-card-highlight-warning' : ''}
                ${isHighlighted && highlightType === 'opportunity' ? 'aa-card-highlight-opportunity' : ''}
                ${isClarity ? 'aa-card-clear' : ''}
              `}
              style={{
                boxShadow: (!isScanning && !isHighlighted && !isClarity) ? '0 2px 12px rgba(0,0,0,0.06)' : undefined,
                border: '1px solid rgba(0,0,0,0.04)',
                minWidth: '200px',
                transition: 'all 0.6s ease',
                opacity: isClarity && (idx === 1 || idx === 4) ? 0.4 : 1,
              }}
            >
              <div className="shrink-0">{card.icon}</div>
              <div className="flex-1 min-w-0">
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#1F2937', marginBottom: '6px', whiteSpace: 'nowrap' }}>
                  {card.label}
                </div>
                {/* Placeholder bars */}
                <div className="flex flex-col gap-1.5">
                  {card.barWidths.map((w, bi) => (
                    <div
                      key={bi}
                      style={{
                        width: `${w}%`,
                        height: '4px',
                        borderRadius: '2px',
                        background: isHighlighted
                          ? (highlightType === 'opportunity' ? '#86EFAC' : '#FCD34D')
                          : isClarity ? '#93C5FD' : '#E5E7EB',
                        transition: 'background 0.6s ease',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Clarity checkmark */}
              {isClarity && idx !== 1 && idx !== 4 && (
                <div
                  style={{
                    animation: `aa-check-pop 0.4s ease ${idx * 0.15}s both`,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill="#22C55E" opacity="0.15" />
                    <path d="M6 10l3 3 5-6" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Avatars */}
      {avatars.map((av, i) => (
        <div
          key={i}
          className="absolute z-10"
          style={{
            left: `${av.x}%`,
            top: `${av.y}%`,
            animation: `aa-float ${3.5 + i * 0.5}s ease-in-out infinite ${i * 0.7}s`,
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: av.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '11px',
              fontWeight: 700,
              border: '2px solid white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            {av.initials}
          </div>
        </div>
      ))}

      {/* Floating small icons */}
      {floatingIcons.map((fi, i) => (
        <div
          key={i}
          className="absolute z-5"
          style={{
            left: `${fi.x}%`,
            top: `${fi.y}%`,
            animation: `aa-float ${4 + i * 0.3}s ease-in-out infinite ${fi.delay}s`,
            opacity: isClarity ? 0.3 : 0.5,
            transition: 'opacity 0.8s ease',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.04)',
            }}
          >
            {fi.icon}
          </div>
        </div>
      ))}

      {/* Assessment insight labels (phase 2) */}
      {isInsights && insightLabels.map((label, i) => {
        const show = progress > (label.delay / 2);
        const colors = {
          warning: { bg: '#FEF3C7', text: '#B45309', border: '#FCD34D' },
          bottleneck: { bg: '#FEE2E2', text: '#DC2626', border: '#FCA5A5' },
          opportunity: { bg: '#DCFCE7', text: '#16A34A', border: '#86EFAC' },
        };
        const c = colors[label.type];

        return show ? (
          <div
            key={i}
            className="absolute z-20"
            style={{
              left: `${label.x}%`,
              top: `${label.y}%`,
              animation: `aa-fade-in 0.5s ease ${label.delay}s both`,
            }}
          >
            <div
              style={{
                fontSize: '10px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '3px 8px',
                borderRadius: '6px',
                background: c.bg,
                color: c.text,
                border: `1px solid ${c.border}`,
                whiteSpace: 'nowrap',
              }}
            >
              {label.text}
            </div>
          </div>
        ) : null;
      })}

      {/* Final status card (phase 3) */}
      {isClarity && progress > 0.5 && (
        <div
          className="absolute z-20"
          style={{
            bottom: '24px',
            right: '24px',
            animation: 'aa-fade-in 0.6s ease both',
          }}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '12px 20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" fill="#22C55E" opacity="0.2" />
              <path d="M6 10l3 3 5-6" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>
              Automation opportunities identified
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
