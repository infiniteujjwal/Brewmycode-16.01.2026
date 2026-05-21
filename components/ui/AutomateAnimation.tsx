import React, { useEffect, useState } from 'react';

/**
 * Premium Automate Manual Work Animation Component
 * Moxo-inspired before → after transformation storytelling
 * 
 * 4 phases:
 * 1. Manual chaos — disconnected tasks, slow handoffs, human bottlenecks
 * 2. Automation mapping — connections form, workflows identified
 * 3. Transformation — manual steps replaced with automated flows
 * 4. Streamlined operations — clean, fast, connected
 */

// ─── Inline icons ───

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="4" width="18" height="14" rx="2.5" fill="#EA4335" opacity="0.15" stroke="#EA4335" strokeWidth="1.2" />
    <path d="M2 6.5l9 6 9-6" stroke="#EA4335" strokeWidth="1.2" fill="none" />
  </svg>
);

const SpreadsheetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="3" y="2" width="16" height="18" rx="2.5" fill="#0F9D58" opacity="0.15" stroke="#0F9D58" strokeWidth="1.2" />
    <line x1="3" y1="8" x2="19" y2="8" stroke="#0F9D58" strokeWidth="0.8" />
    <line x1="3" y1="13" x2="19" y2="13" stroke="#0F9D58" strokeWidth="0.8" />
    <line x1="11" y1="2" x2="11" y2="20" stroke="#0F9D58" strokeWidth="0.8" />
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="8.5" fill="#F59E0B" opacity="0.12" stroke="#F59E0B" strokeWidth="1.2" />
    <path d="M11 6v5.5l3.5 2" stroke="#F59E0B" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const ChecklistIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="3" y="2" width="16" height="18" rx="2.5" fill="#6366F1" opacity="0.12" stroke="#6366F1" strokeWidth="1.2" />
    <path d="M7 8l2 2 4-4" stroke="#6366F1" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="7" y1="14" x2="15" y2="14" stroke="#6366F1" strokeWidth="0.8" opacity="0.5" />
    <line x1="7" y1="17" x2="12" y2="17" stroke="#6366F1" strokeWidth="0.8" opacity="0.5" />
  </svg>
);

const SyncIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M4 11a7 7 0 0112.5-4.3" stroke="#3B82F6" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M18 11a7 7 0 01-12.5 4.3" stroke="#3B82F6" strokeWidth="1.3" strokeLinecap="round" />
    <polyline points="16 3 17 7 13 7" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="6 19 5 15 9 15" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const BotIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="4" y="6" width="14" height="12" rx="3" fill="#8B5CF6" opacity="0.12" stroke="#8B5CF6" strokeWidth="1.2" />
    <circle cx="8.5" cy="12" r="1.5" fill="#8B5CF6" />
    <circle cx="13.5" cy="12" r="1.5" fill="#8B5CF6" />
    <line x1="11" y1="3" x2="11" y2="6" stroke="#8B5CF6" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="11" cy="2.5" r="1" fill="#8B5CF6" />
  </svg>
);

const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2l-6 9h5l-1 7 6-9h-5l1-7z" fill="#F59E0B" opacity="0.3" stroke="#F59E0B" strokeWidth="1" strokeLinejoin="round" />
  </svg>
);

const CheckCircleIcon = ({ size = 18, color = '#22C55E' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" fill={color} opacity="0.15" />
    <path d="M6 10l3 3 5-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10m0 0l-3-3m3 3l-3 3" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PersonIcon = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5.5" r="3" fill={color} opacity="0.3" />
    <path d="M2 14c0-3.3 2.7-5 6-5s6 1.7 6 5" fill={color} opacity="0.2" />
  </svg>
);

// ─── Task data ───

interface ManualTask {
  id: string;
  icon: React.ReactNode;
  label: string;
  time: string;
  issue: string;
}

const manualTasks: ManualTask[] = [
  { id: 'email-copy', icon: <EmailIcon />, label: 'Copy data from emails', time: '45 min/batch', issue: 'error-prone' },
  { id: 'spreadsheet', icon: <SpreadsheetIcon />, label: 'Update spreadsheets', time: '30 min/update', issue: 'repetitive' },
  { id: 'status', icon: <ChecklistIcon />, label: 'Send status updates', time: '20 min/round', issue: 'easy to forget' },
  { id: 'sync', icon: <SyncIcon />, label: 'Sync between systems', time: '25 min/sync', issue: 'manual handoff' },
  { id: 'reports', icon: <ClockIcon />, label: 'Compile weekly reports', time: '2 hours/week', issue: 'time-consuming' },
];

interface AutomatedTask {
  id: string;
  icon: React.ReactNode;
  label: string;
  benefit: string;
}

const automatedTasks: AutomatedTask[] = [
  { id: 'auto-extract', icon: <ZapIcon />, label: 'Auto-extract & validate', benefit: 'Instant · 99.5% accuracy' },
  { id: 'auto-sync', icon: <SyncIcon />, label: 'Real-time system sync', benefit: 'No manual entry needed' },
  { id: 'auto-notify', icon: <BotIcon />, label: 'Smart notifications', benefit: 'Context-aware · never missed' },
  { id: 'auto-report', icon: <ChecklistIcon />, label: 'Auto-generated reports', benefit: 'Scheduled · always accurate' },
];

// ─── Timing ───
const PHASE_DURATION = 4500;
const TOTAL_PHASES = 4;

export const AutomateAnimation: React.FC = () => {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => (p + 1) % TOTAL_PHASES);
    }, PHASE_DURATION);
    return () => clearInterval(interval);
  }, []);

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

  const isManual = phase === 0;
  const isMapping = phase === 1;
  const isTransforming = phase === 2;
  const isStreamlined = phase === 3;

  // How far the "before" side slides / fades
  const beforeOpacity = isManual ? 1 : isMapping ? 1 : isTransforming ? Math.max(0, 1 - progress * 1.5) : 0;
  const afterOpacity = isTransforming ? Math.min(1, progress * 1.8) : isStreamlined ? 1 : 0;

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
        @keyframes ama-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes ama-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ama-slide-right {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes ama-pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes ama-draw {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes ama-check-pop {
          0% { transform: scale(0); }
          60% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes ama-glow-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          50% { box-shadow: 0 0 20px 4px rgba(34, 197, 94, 0.12); }
        }
        @keyframes ama-slide-left-out {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-30px); }
        }
      `}</style>

      {/* Left text panel */}
      <div className="absolute left-8 md:left-12 top-12 z-20 max-w-[320px]">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mb-8"
          style={{
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <ZapIcon />
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1F2937', letterSpacing: '0.01em' }}>Automate Manual Work</span>
        </div>

        <h3
          style={{
            fontSize: '30px',
            lineHeight: 1.2,
            fontWeight: 500,
            color: '#111827',
            marginBottom: '16px',
            transition: 'opacity 0.6s ease',
          }}
        >
          {isManual && <>Your team spends hours on work that should take seconds.</>}
          {isMapping && <>We map every manual step and find what can be automated.</>}
          {isTransforming && <>Manual tasks are replaced with reliable automation.</>}
          {isStreamlined && <>Your workflows run faster, cleaner, and without errors.</>}
        </h3>

        <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#6B7280' }}>
          {isManual && 'Emails copied by hand, spreadsheets updated manually, status pings sent one by one — real work buried under repetitive tasks.'}
          {isMapping && 'Our engineers identify every bottleneck, handoff, and repetitive step — then design automations that fit your actual workflow.'}
          {isTransforming && 'Step by step, manual processes become automated flows. No disruption, no guesswork — just structured delivery.'}
          {isStreamlined && 'The same work gets done in a fraction of the time. Your team focuses on what actually matters.'}
        </p>

        {/* Phase dots */}
        <div className="flex gap-2 mt-8">
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              style={{
                width: phase === i ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: phase === i ? '#8B5CF6' : '#D1D5DB',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>

        {/* Time saved counter (phase 3) */}
        {isStreamlined && progress > 0.3 && (
          <div
            style={{
              marginTop: '24px',
              animation: 'ama-fade-in 0.6s ease both',
            }}
          >
            <div
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '12px 16px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <CheckCircleIcon size={20} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>
                ~10 hours/week saved
              </span>
            </div>
          </div>
        )}
      </div>

      {/* SVG background connectors */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        {/* Mapping phase: connection lines appear between tasks */}
        {isMapping && (
          <>
            <path d="M 560 100 C 620 150, 580 200, 640 240" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="300" style={{ animation: `ama-draw 1.5s ease ${0}s both` }} opacity="0.4" />
            <path d="M 640 240 C 680 280, 650 320, 700 360" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="300" style={{ animation: `ama-draw 1.5s ease ${0.3}s both` }} opacity="0.4" />
            <path d="M 700 360 C 660 400, 620 430, 600 470" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="300" style={{ animation: `ama-draw 1.5s ease ${0.6}s both` }} opacity="0.4" />
            <path d="M 560 100 C 700 100, 780 180, 780 280" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" style={{ animation: `ama-draw 2s ease ${0.5}s both` }} opacity="0.25" />
            <path d="M 780 280 C 780 380, 700 440, 600 470" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" style={{ animation: `ama-draw 2s ease ${0.8}s both` }} opacity="0.25" />
          </>
        )}
        {/* Streamlined: clean flow lines */}
        {isStreamlined && (
          <>
            <path d="M 560 110 L 560 200 L 560 300 L 560 400 L 560 490" fill="none" stroke="#22C55E" strokeWidth="2" strokeDasharray="300" style={{ animation: 'ama-draw 1.5s ease both' }} opacity="0.3" />
            <path d="M 560 110 C 700 110, 720 200, 720 250" fill="none" stroke="#22C55E" strokeWidth="1.5" strokeDasharray="300" style={{ animation: 'ama-draw 1.5s ease 0.3s both' }} opacity="0.25" />
            <path d="M 720 250 C 720 350, 700 400, 560 490" fill="none" stroke="#22C55E" strokeWidth="1.5" strokeDasharray="300" style={{ animation: 'ama-draw 1.5s ease 0.6s both' }} opacity="0.25" />
          </>
        )}
      </svg>

      {/* Right side: Task cards area */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] z-10 flex items-center justify-center">
        <div className="relative w-full h-full">

          {/* MANUAL TASK CARDS (Phase 0 & 1) */}
          {(isManual || isMapping) && manualTasks.map((task, idx) => {
            const positions = [
              { x: 15, y: 8 },
              { x: 45, y: 16 },
              { x: 10, y: 32 },
              { x: 42, y: 42 },
              { x: 22, y: 58 },
            ];
            const pos = positions[idx];
            const isHighlighted = isMapping && progress > (idx * 0.15 + 0.1);

            return (
              <div
                key={task.id}
                className="absolute"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  animation: `ama-float ${3 + idx * 0.4}s ease-in-out infinite ${idx * 0.3}s`,
                  transition: 'all 0.6s ease',
                }}
              >
                <div
                  style={{
                    background: 'white',
                    borderRadius: '14px',
                    padding: '12px 16px',
                    minWidth: '210px',
                    boxShadow: isHighlighted
                      ? '0 0 0 2px rgba(139, 92, 246, 0.3), 0 4px 16px rgba(139, 92, 246, 0.1)'
                      : '0 2px 10px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.04)',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="shrink-0">{task.icon}</div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#1F2937' }}>{task.label}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4" stroke="#9CA3AF" strokeWidth="0.8" fill="none" />
                        <path d="M5 3v2.5l1.5 1" stroke="#9CA3AF" strokeWidth="0.8" strokeLinecap="round" />
                      </svg>
                      <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{task.time}</span>
                    </div>
                    <span style={{
                      fontSize: '9px',
                      fontWeight: 700,
                      textTransform: 'uppercase' as const,
                      letterSpacing: '0.06em',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: isHighlighted ? '#EDE9FE' : '#FEF3C7',
                      color: isHighlighted ? '#7C3AED' : '#B45309',
                    }}>
                      {isHighlighted ? 'automatable' : task.issue}
                    </span>
                  </div>
                </div>

                {/* Person dependency indicators (manual phase) */}
                {isManual && idx < 3 && (
                  <div
                    className="absolute -right-3 -top-3"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: ['#6366F1', '#EC4899', '#F59E0B'][idx],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid white',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                  >
                    <PersonIcon color="white" />
                  </div>
                )}
              </div>
            );
          })}

          {/* TRANSFORMATION OVERLAY (Phase 2) */}
          {isTransforming && (
            <>
              {/* Fading out manual tasks */}
              {manualTasks.map((task, idx) => {
                const positions = [
                  { x: 15, y: 8 },
                  { x: 45, y: 16 },
                  { x: 10, y: 32 },
                  { x: 42, y: 42 },
                  { x: 22, y: 58 },
                ];
                const pos = positions[idx];
                const fadePoint = idx * 0.15;
                const taskOpacity = Math.max(0, 1 - (progress - fadePoint) * 3);

                return taskOpacity > 0 ? (
                  <div
                    key={`fade-${task.id}`}
                    className="absolute"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      opacity: taskOpacity,
                      transform: `translateX(${-(1 - taskOpacity) * 20}px)`,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <div
                      style={{
                        background: 'white',
                        borderRadius: '14px',
                        padding: '12px 16px',
                        minWidth: '210px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.04)',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="shrink-0">{task.icon}</div>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#1F2937', opacity: 0.5 }}>{task.label}</span>
                      </div>
                    </div>
                  </div>
                ) : null;
              })}

              {/* Fading in automated tasks */}
              {automatedTasks.map((task, idx) => {
                const yPositions = [10, 28, 46, 64];
                const fadeInPoint = 0.3 + idx * 0.12;
                const taskOpacity = Math.max(0, Math.min(1, (progress - fadeInPoint) * 4));

                return taskOpacity > 0 ? (
                  <div
                    key={`auto-${task.id}`}
                    className="absolute"
                    style={{
                      left: '20%',
                      top: `${yPositions[idx]}%`,
                      opacity: taskOpacity,
                      transform: `translateX(${(1 - taskOpacity) * 20}px)`,
                    }}
                  >
                    <div
                      style={{
                        background: 'white',
                        borderRadius: '14px',
                        padding: '12px 16px',
                        minWidth: '230px',
                        boxShadow: '0 2px 12px rgba(34, 197, 94, 0.08)',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                      }}
                    >
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className="shrink-0">{task.icon}</div>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#1F2937' }}>{task.label}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircleIcon size={12} />
                        <span style={{ fontSize: '11px', color: '#22C55E', fontWeight: 500 }}>{task.benefit}</span>
                      </div>
                    </div>
                  </div>
                ) : null;
              })}

              {/* Central automation engine */}
              {progress > 0.2 && (
                <div
                  className="absolute"
                  style={{
                    right: '8%',
                    top: '35%',
                    animation: 'ama-fade-in 0.6s ease both',
                  }}
                >
                  <div className="relative">
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: 'white',
                        border: '2px solid #8B5CF6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 20px rgba(139, 92, 246, 0.15)',
                      }}
                    >
                      <BotIcon />
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        inset: '-4px',
                        borderRadius: '20px',
                        border: '2px solid rgba(139, 92, 246, 0.3)',
                        animation: 'ama-pulse-ring 2s ease-out infinite',
                      }}
                    />
                  </div>
                </div>
              )}
            </>
          )}

          {/* STREAMLINED CARDS (Phase 3) */}
          {isStreamlined && automatedTasks.map((task, idx) => {
            const yPositions = [10, 28, 46, 64];

            return (
              <div
                key={`stream-${task.id}`}
                className="absolute"
                style={{
                  left: '20%',
                  top: `${yPositions[idx]}%`,
                  animation: `ama-float ${3.5 + idx * 0.3}s ease-in-out infinite ${idx * 0.4}s`,
                }}
              >
                <div
                  style={{
                    background: 'white',
                    borderRadius: '14px',
                    padding: '12px 16px',
                    minWidth: '230px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    border: '1px solid rgba(34, 197, 94, 0.15)',
                    animation: progress > 0.4 ? 'ama-glow-green 3s ease-in-out infinite' : 'none',
                  }}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="shrink-0">{task.icon}</div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#1F2937' }}>{task.label}</span>
                    <div style={{ marginLeft: 'auto', animation: `ama-check-pop 0.4s ease ${idx * 0.15}s both` }}>
                      <CheckCircleIcon size={18} />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span style={{ fontSize: '11px', color: '#22C55E', fontWeight: 500 }}>{task.benefit}</span>
                  </div>
                </div>

                {/* Flow arrow between cards */}
                {idx < automatedTasks.length - 1 && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{ bottom: '-20px' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" opacity="0.3">
                      <path d="M8 2v12m0 0l-3-3m3 3l3-3" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}

          {/* Streamlined: automation hub */}
          {isStreamlined && progress > 0.3 && (
            <div
              className="absolute"
              style={{
                right: '8%',
                top: '35%',
                animation: 'ama-fade-in 0.5s ease both',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'white',
                  border: '2px solid #22C55E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(34, 197, 94, 0.15)',
                }}
              >
                <CheckCircleIcon size={28} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom right status (streamlined phase) */}
      {isStreamlined && progress > 0.6 && (
        <div
          className="absolute z-20"
          style={{
            bottom: '24px',
            right: '24px',
            animation: 'ama-fade-in 0.6s ease both',
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
            <CheckCircleIcon size={20} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>
              Workflows fully automated
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
