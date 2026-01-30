'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface HeroProps {
  onOpenBrochure: () => void;
}

export default function Hero({ onOpenBrochure }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 animate-fade-in-up">
                <div className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                  <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                  {t.hero.badge}
                </div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                  <Sparkles className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                  AI-Powered Platform
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-bold sm:text-5xl xl:text-7xl/none text-primary animate-fade-in-up animation-delay-100">
                {t.hero.title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-[600px] text-foreground/70 md:text-xl font-medium leading-relaxed animate-fade-in-up animation-delay-200">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 md:flex-row animate-fade-in-up animation-delay-300">
              <a
                href="#program"
                className="btn-secondary h-12 px-8 text-base w-full md:w-auto"
              >
                {t.hero.viewProgram}
              </a>
              <button
                onClick={onOpenBrochure}
                className="btn-primary h-12 px-8 text-base w-full md:w-auto group"
              >
                {t.hero.downloadBrochure}
                <ArrowRight className="ml-2 h-4 w-4 animate-bounce-right group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-2 text-sm text-foreground/60 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-secondary" aria-hidden="true" />
                <span className="font-medium">{t.hero.aiPowered}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" aria-hidden="true" />
                <span>{t.hero.targetAudience}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" aria-hidden="true" />
                <span>{t.hero.noAudits}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:ml-auto animate-scale-in animation-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 w-full max-w-2xl mx-auto border border-border">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
              <Image
                src="/assets/hero-image.png"
                alt="Front Runners Team"
                width={672}
                height={504}
                className="object-cover w-full h-auto"
                priority
                unoptimized
              />
            </div>
            {/* Decorative blurred circles */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
