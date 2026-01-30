'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-white" style={{ letterSpacing: '-0.04em' }}>
              Front<span className="text-secondary">Runners</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Program Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-white">{t.footer.program}</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              <li>
                <a href="#program" className="hover:text-white transition-colors">
                  {t.footer.links.businesscase}
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-white transition-colors">
                  {t.footer.links.colleges}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.footer.links.community}
                </a>
              </li>
              <li>
                <a href="#recognition" className="hover:text-white transition-colors">
                  {t.footer.links.recognition}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-white">{t.footer.contact}</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              <li>
                <a
                  href="mailto:hello@front-runners.org"
                  className="hover:text-white transition-colors"
                >
                  hello@front-runners.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+31202101978"
                  className="hover:text-white transition-colors"
                >
                  020 210 1978
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-white">Adres</h4>
            <address className="not-italic text-sm text-primary-foreground/70 space-y-1">
              <p>Oudezijds Voorburgwal 282</p>
              <p>1012 GL Amsterdam</p>
              <p>Nederland</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
