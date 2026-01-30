'use client';

import React from 'react';
import { Compass, Briefcase, Users, Award } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { AnimateOnScroll } from './AnimateOnScroll';

export default function WhySection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Compass,
      title: t.why.features.future.title,
      description: t.why.features.future.description,
    },
    {
      icon: Briefcase,
      title: t.why.features.businesscase.title,
      description: t.why.features.businesscase.description,
    },
    {
      icon: Users,
      title: t.why.features.community.title,
      description: t.why.features.community.description,
    },
    {
      icon: Award,
      title: t.why.features.recognition.title,
      description: t.why.features.recognition.description,
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            {t.why.title}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            {t.why.subtitle}
          </p>
        </AnimateOnScroll>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1} className="card h-full">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="p-3 w-12 h-12 rounded-lg bg-primary/5 text-primary mb-4 flex items-center justify-center">
                  <feature.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="tracking-tight text-xl font-bold text-foreground">
                  {feature.title}
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
