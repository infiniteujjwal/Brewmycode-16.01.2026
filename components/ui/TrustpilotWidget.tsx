import React, { useEffect, useRef } from 'react';

// Business Unit ID for brewmycode.com on Trustpilot
const BUSINESS_UNIT_ID = '6989eae8fbe9ca0a47285a9f';
const PROFILE_URL = 'https://www.trustpilot.com/review/brewmycode.com';

// Template IDs (Trustpilot free plan)
// Slider  — shows individual review cards in a carousel
const TEMPLATE_SLIDER = '54ad5defc6454f065c28af8';
// Mini    — compact star rating + review count badge
const TEMPLATE_MINI = '53aa8807dec7e10d38f59f32';

interface TrustpilotWidgetProps {
  template?: 'slider' | 'mini';
  theme?: 'light' | 'dark';
  height?: string;
}

export const TrustpilotWidget: React.FC<TrustpilotWidgetProps> = ({
  template = 'slider',
  theme = 'light',
  height,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const templateId = template === 'mini' ? TEMPLATE_MINI : TEMPLATE_SLIDER;
  const defaultHeight = template === 'mini' ? '24px' : '240px';

  useEffect(() => {
    // Trustpilot bootstrap may load async — retry until available
    const init = () => {
      if (ref.current && (window as any).Trustpilot) {
        (window as any).Trustpilot.loadFromElement(ref.current, true);
      }
    };
    // Try immediately, then poll briefly in case script hasn't loaded yet
    init();
    const timer = setTimeout(init, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id={templateId}
      data-businessunit-id={BUSINESS_UNIT_ID}
      data-style-height={height ?? defaultHeight}
      data-style-width="100%"
      data-theme={theme}
      data-stars="1,2,3,4,5"
    >
      {/* Fallback link required by Trustpilot policy */}
      <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
        Read our reviews on Trustpilot
      </a>
    </div>
  );
};
