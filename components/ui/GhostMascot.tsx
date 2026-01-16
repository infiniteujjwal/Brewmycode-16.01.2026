import React from 'react';

interface GhostMascotProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const GhostMascot: React.FC<GhostMascotProps> = ({ size = 'md', className = '' }) => {
  // Using the provided ghost icon URL
  const GHOST_ICON_URL = "https://cdn-icons-png.flaticon.com/512/4712/4712109.png";

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={GHOST_ICON_URL}
        alt="Silent Intelligence Mascot"
        className={`${sizeClasses[size]} object-contain animate-float drop-shadow-xl`}
      />
      {/* Shadow for grounding the float animation */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-black/10 dark:bg-white/10 rounded-[100%] blur-sm animate-[pulse_3s_ease-in-out_infinite]"></div>
    </div>
  );
};