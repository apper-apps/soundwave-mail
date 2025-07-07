import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const Button = forwardRef(({ 
  className, 
  variant = 'default', 
  size = 'md', 
  children, 
  disabled,
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-accent',
    ghost: 'bg-transparent border border-white/20 text-white hover:bg-white/10',
    glass: 'glass-button text-white hover:bg-white/20',
    outline: 'border-2 border-gradient-to-r from-primary to-secondary text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary',
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
    xl: 'h-14 px-8 text-xl',
  };

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium',
        'transition-all duration-200 hover:scale-105 active:scale-95',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        'shadow-glow',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;