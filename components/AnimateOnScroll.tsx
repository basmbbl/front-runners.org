'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in' | 'scale-in';
  delay?: number;
  threshold?: number;
}

export function AnimateOnScroll({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold });

  const animationClasses = {
    'fade-in-up': 'translate-y-8 opacity-0',
    'fade-in': 'opacity-0',
    'scale-in': 'scale-95 opacity-0',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${isInView ? '' : animationClasses[animation]}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
