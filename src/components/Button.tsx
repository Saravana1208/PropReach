import React, { forwardRef } from 'react';
import { cn } from '../utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      primary: 'bg-brand text-[#1C1917] hover:bg-brand/90 hover:shadow-[0_0_15px_rgba(196,247,36,0.3)] font-semibold',
      secondary: 'bg-primary text-background hover:bg-primary/90',
      outline: 'border border-border/50 bg-transparent hover:border-brand/50 hover:bg-brand/10 text-primary',
      ghost: 'bg-transparent hover:bg-border/50 text-primary',
    };
    
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    };

    const finalClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (props.asChild && React.isValidElement(children)) {
      // We extract asChild from props to avoid passing it to the DOM
      const { asChild, ...restProps } = props;
      return React.cloneElement(children as React.ReactElement, {
        ref,
        className: cn(finalClassName, (children.props as any).className),
        ...restProps
      } as any);
    }

    // Also remove asChild before spreading
    const { asChild, ...restProps } = props;

    return (
      <button
        ref={ref}
        className={finalClassName}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
