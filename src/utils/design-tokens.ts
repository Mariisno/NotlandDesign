/**
 * Design Tokens for NotlandDesign
 * Centralized design system constants for consistent styling
 */

// Icon Sizes
export const iconSizes = {
  xs: 'size-3',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-8',
  '2xl': 'size-10',
  '3xl': 'size-12',
} as const;

// Spacing System
export const spacing = {
  tight: 'gap-2',
  snug: 'gap-4',
  normal: 'gap-6',
  relaxed: 'gap-8',
  loose: 'gap-12',
} as const;

// Border Radius
export const radius = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  full: 'rounded-full',
} as const;

// Color Variants for IconBox and Badges
export const colorVariants = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/50',
    bgDark: 'bg-blue-100 dark:bg-blue-900/40',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-100 dark:border-blue-800',
    gradient: 'from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-950/50',
    bgDark: 'bg-purple-100 dark:bg-purple-900/40',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-100 dark:border-purple-800',
    gradient: 'from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50',
  },
  pink: {
    bg: 'bg-pink-50 dark:bg-pink-950/50',
    bgDark: 'bg-pink-100 dark:bg-pink-900/40',
    text: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-100 dark:border-pink-800',
    gradient: 'from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-950/50',
    bgDark: 'bg-green-100 dark:bg-green-900/40',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-100 dark:border-green-800',
    gradient: 'from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-950/50',
    bgDark: 'bg-amber-100 dark:bg-amber-900/40',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-100 dark:border-amber-800',
    gradient: 'from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/50',
    bgDark: 'bg-indigo-100 dark:bg-indigo-900/40',
    text: 'text-indigo-600 dark:text-indigo-400',
    border: 'border-indigo-100 dark:border-indigo-800',
    gradient: 'from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50',
  },
  slate: {
    bg: 'bg-slate-50 dark:bg-slate-900/50',
    bgDark: 'bg-slate-100 dark:bg-slate-800/40',
    text: 'text-slate-600 dark:text-slate-400',
    border: 'border-slate-200 dark:border-slate-700',
    gradient: 'from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-950/50',
  },
} as const;

export type ColorVariant = keyof typeof colorVariants;
export type IconSize = keyof typeof iconSizes;
export type Spacing = keyof typeof spacing;
export type Radius = keyof typeof radius;
