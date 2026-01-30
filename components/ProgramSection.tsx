'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { AnimateOnScroll } from './AnimateOnScroll';

export default function ProgramSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t.program.steps.online.title,
      description: t.program.steps.online.description,
    },
    {
      number: '02',
      title: t.program.steps.offline.title,
      description: t.program.steps.offline.description,
    },
    {
      number: '03',
      title: t.program.steps.events.title,
      description: t.program.steps.events.description,
    },
  ];

  const levels = [
    {
      name: t.recognition.levels.bronze.name,
      score: t.recognition.levels.bronze.score,
      colorClass: 'level-bronze',
      active: false,
    },
    {
      name: t.recognition.levels.silver.name,
      score: t.recognition.levels.silver.score,
      colorClass: 'level-silver',
      active: false,
    },
    {
      name: t.recognition.levels.gold.name,
      score: t.recognition.levels.gold.score,
      colorClass: 'level-gold',
      active: false,
    },
    {
      name: t.recognition.levels.platinum.name,
      score: t.recognition.levels.platinum.score,
      colorClass: 'level-platinum',
      active: true,
    },
  ];

  return (
    <section id="program" className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column - Program Steps */}
          <div className="space-y-8">
            <AnimateOnScroll>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                {t.program.title}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <p className="text-muted-foreground text-lg">
                {t.program.subtitle}
              </p>
            </AnimateOnScroll>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <AnimateOnScroll key={index} delay={0.2 + index * 0.1} className="flex gap-4">
                  <div className="flex-none w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold font-mono">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Right Column - Recognition Levels */}
          <AnimateOnScroll animation="scale-in" delay={0.2}>
            <div id="recognition" className="bg-muted/30 rounded-2xl p-8 border border-border relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>

              <h3 className="text-2xl font-bold mb-6 text-primary">
                {t.recognition.title}
              </h3>
              <p className="text-muted-foreground mb-8">
                {t.recognition.subtitle}
              </p>

              <div className="space-y-4 font-mono text-sm">
                {levels.map((level, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg border shadow-sm ${
                      level.active
                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                        : 'bg-background border-border'
                    }`}
                  >
                    <span className={`font-bold flex items-center gap-2 ${level.colorClass}`}>
                      {level.active && <Check className="w-4 h-4" aria-hidden="true" />}
                      {level.name}
                    </span>
                    <span className={level.active ? 'opacity-90' : 'text-muted-foreground'}>
                      {level.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
