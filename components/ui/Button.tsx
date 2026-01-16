import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyle = "px-8 py-4 rounded-lg font-semibold tracking-tight transition-all duration-300 disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary text-primary-fg hover:opacity-90 hover:shadow-lg",
    outline: "border border-primary text-text hover:bg-primary hover:text-primary-fg",
    ghost: "text-text hover:bg-primary/5"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};