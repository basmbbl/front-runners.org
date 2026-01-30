'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Locale, getTranslations, defaultLocale } from '@/lib/i18n';
import nl from '@/locales/nl.json';

type Translations = typeof nl;

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  initialLocale?: Locale;
}

export function LanguageProvider({ children, initialLocale = defaultLocale }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [translations, setTranslations] = useState<Translations>(getTranslations(initialLocale));

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setTranslations(getTranslations(newLocale));
    
    // Store preference in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale);
    }
    
    // Update html lang attribute
    document.documentElement.lang = newLocale;
  }, []);

  // Check for stored preference on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLocale = localStorage.getItem('preferred-locale') as Locale | null;
      if (storedLocale && (storedLocale === 'nl' || storedLocale === 'en')) {
        setLocale(storedLocale);
      }
    }
  }, [setLocale]);

  return (
    <LanguageContext.Provider value={{ locale, t: translations, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
