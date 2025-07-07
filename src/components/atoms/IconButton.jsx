import { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import ApperIcon from '@/components/ApperIcon';

const IconButton = forwardRef(({ 
  className, 
  variant = 'default', 
  size = 'md', 
  icon,
  disabled,
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-accent',
    ghost: 'bg-transparent border border-white/20 text-white hover:bg-white/10',
    glass: 'glass-button text-white hover:bg-white/20',
    accent: 'bg-gradient-to-r from-accent to-secondary text-white hover:from-secondary hover:to-primary',
  };

  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-14 h-14 text-xl',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
  };

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-full',
        'transition-all duration-200 hover:scale-105 active:scale-95',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        'shadow-glow',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <ApperIcon name={icon} size={iconSizes[size]} />
    </button>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;