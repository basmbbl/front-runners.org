'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import { AnimateOnScroll } from './AnimateOnScroll';

interface CTASectionProps {
  onOpenBrochure: () => void;
}

export default function CTASection({ onOpenBrochure }: CTASectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-primary mb-6">
            {t.cta.title}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t.cta.subtitle}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <button
            onClick={onOpenBrochure}
            className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            {t.cta.button}
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
