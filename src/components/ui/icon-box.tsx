import { ReactNode } from 'react';
import { colorVariants, type ColorVariant } from '../../utils/design-tokens';
import { cn } from './utils';

interface IconBoxProps {
  icon: ReactNode;
  variant?: ColorVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'size-10 p-2',
  md: 'size-12 p-3',
  lg: 'size-14 p-3',
};

/**
 * IconBox - Reusable colored box for icons
 * Used throughout the site for consistent icon presentation
 */
export function IconBox({ 
  icon, 
  variant = 'blue', 
  size = 'md',
  className 
}: IconBoxProps) {
  const colors = colorVariants[variant];
  
  return (
    <div 
      className={cn(
        'inline-flex items-center justify-center rounded-xl shrink-0',
        colors.bgDark,
        colors.text,
        sizeClasses[size],
        className
      )}
    >
      {icon}
    </div>
  );
}
