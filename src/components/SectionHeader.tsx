import React from 'react';
import { cn } from '../utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeader({ title, subtitle, align = 'left', className }: SectionHeaderProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align];

  return (
    <div className={cn('mb-12 md:mb-16 max-w-3xl', alignClass, className)}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary mb-4 md:mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-secondary text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
