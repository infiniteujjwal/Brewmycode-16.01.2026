import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`
      bg-surface 
      rounded-xl 
      shadow-recessed 
      p-8 md:p-12 
      ${hoverEffect ? 'transition-all duration-500 hover:scale-[0.99] hover:shadow-recessed-hover' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};