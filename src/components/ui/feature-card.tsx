import { ReactNode } from 'react';
import { colorVariants, type ColorVariant } from '../../utils/design-tokens';
import { cn } from './utils';
import { IconBox } from './icon-box';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: ColorVariant;
  className?: string;
}

/**
 * FeatureCard - Card with icon, title, and description
 * Used for skills, features, and highlights throughout the site
 */
export function FeatureCard({ 
  icon, 
  title, 
  description, 
  variant = 'blue',
  className 
}: FeatureCardProps) {
  const colors = colorVariants[variant];
  
  return (
    <div 
      className={cn(
        'bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow',
        className
      )}
    >
      <IconBox icon={icon} variant={variant} className="mb-4" />
      <h3 className="text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

interface HighlightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: ColorVariant;
  className?: string;
}

/**
 * HighlightCard - Gradient card with border
 * Used for AboutMe section highlights
 */
export function HighlightCard({ 
  icon, 
  title, 
  description, 
  variant = 'blue',
  className 
}: HighlightCardProps) {
  const colors = colorVariants[variant];
  
  return (
    <div 
      className={cn(
        'rounded-2xl p-6 bg-gradient-to-br border dark:ring-1 dark:ring-white/10',
        colors.gradient,
        colors.border,
        className
      )}
    >
      <div className="flex items-start gap-4">
        <IconBox icon={icon} variant={variant} size="md" />
        <div>
          <h3 className="text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
