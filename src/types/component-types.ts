import type { HTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';

// Re-export React types for convenience
export type { ReactNode };

// Base component props that most components will extend
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// Base HTML element props
export interface BaseHTMLProps extends HTMLAttributes<HTMLElement>, BaseComponentProps {}

// Base button props
export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseComponentProps {}

// Helper type for components with variants
export type WithVariantProps<T> = T & BaseComponentProps;
