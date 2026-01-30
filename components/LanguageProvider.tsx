'use client';

import React, { createContext, useContext, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { type Locale, defaultLocale, isValidLocale } from '@/lib/i18n-config';
import { getTranslations } from '@/lib/i18n';
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
  initialLocale?: string;
}

export function LanguageProvider({ children, initialLocale = defaultLocale }: LanguageProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Validate and use the locale
  const locale: Locale = isValidLocale(initialLocale) ? initialLocale : defaultLocale;
  const translations = getTranslations(locale);

  const setLocale = useCallback((newLocale: Locale) => {
    // Get the current path without the locale prefix
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace the locale segment
    const newPath = segments.join('/');

    // Navigate to the new locale path
    router.push(newPath);
  }, [pathname, router]);

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
