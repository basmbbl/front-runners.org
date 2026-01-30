'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { Locale } from '@/lib/i18n';
import LoginModal from './LoginModal';

interface HeaderProps {
  onOpenBrochure: () => void;
}

export default function Header({ onOpenBrochure }: HeaderProps) {
  const { locale, setLocale, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
    setShowLangMenu(false);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? 'border-border/40 bg-background/80 backdrop-blur-md'
            : 'border-transparent bg-background/80 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="font-heading text-2xl font-bold tracking-tighter">
              <span className="text-primary">Front</span>
              <span className="text-secondary">Runners</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#program"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.program}
            </a>
            <a
              href="#recognition"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.community}
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Switcher - Desktop */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                <Globe size={16} />
                <span className="uppercase">{locale}</span>
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-1 bg-background rounded-lg shadow-lg border border-border py-1 min-w-[100px]">
                  <button
                    onClick={() => toggleLanguage('nl')}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-muted ${
                      locale === 'nl' ? 'text-primary font-medium' : 'text-foreground'
                    }`}
                  >
                    Nederlands
                  </button>
                  <button
                    onClick={() => toggleLanguage('en')}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-muted ${
                      locale === 'en' ? 'text-primary font-medium' : 'text-foreground'
                    }`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowLoginModal(true)}
              className="hidden md:block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav.login}
            </button>
            <button onClick={onOpenBrochure} className="hidden sm:flex btn-primary">
              {t.nav.join}
            </button>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-1">
              <button
                onClick={() => toggleLanguage(locale === 'nl' ? 'en' : 'nl')}
                className="flex items-center gap-1 p-2 text-muted-foreground hover:text-foreground"
              >
                <Globe size={20} />
                <span className="text-xs font-medium uppercase">{locale}</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-muted-foreground hover:text-foreground"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#about"
                className="block py-2 text-foreground font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a
                href="#program"
                className="block py-2 text-foreground font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.program}
              </a>
              <a
                href="#recognition"
                className="block py-2 text-foreground font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.community}
              </a>
              <div className="pt-3 border-t border-border space-y-3">
                <button
                  onClick={() => {
                    setShowLoginModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full py-2 text-left text-foreground font-medium hover:text-primary"
                >
                  {t.nav.login}
                </button>
                <button
                  onClick={() => {
                    onOpenBrochure();
                    setIsMenuOpen(false);
                  }}
                  className="btn-primary w-full"
                >
                  {t.nav.join}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} onOpenBrochure={onOpenBrochure} />
    </>
  );
}
