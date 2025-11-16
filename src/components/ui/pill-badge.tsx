import { ReactNode } from 'react';
import { colorVariants, type ColorVariant } from '../../utils/design-tokens';
import { cn } from './utils';

interface PillBadgeProps {
  children: ReactNode;
  variant?: ColorVariant;
  icon?: ReactNode;
  className?: string;
}

/**
 * PillBadge - Rounded pill-style badge
 * Used for tags, technologies, and highlights throughout the site
 */
export function PillBadge({ 
  children, 
  variant = 'blue', 
  icon,
  className 
}: PillBadgeProps) {
  const colors = colorVariants[variant];
  
  return (
    <span 
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors',
        colors.bgDark,
        colors.text,
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

interface InfoBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

/**
 * InfoBadge - Gradient badge for section headers
 * Used for "My Projects", "Fun Fact", etc.
 */
export function InfoBadge({ children, icon, className }: InfoBadgeProps) {
  return (
    <div 
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-950/50 text-blue-900 dark:text-blue-400 rounded-full font-semibold dark:ring-1 dark:ring-blue-400/20',
        className
      )}
    >
      {icon && <span className="size-4">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
