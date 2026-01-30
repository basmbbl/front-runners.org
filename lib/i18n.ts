import nl from '@/locales/nl.json';
import en from '@/locales/en.json';

export type Locale = 'nl' | 'en';

export const locales: Record<Locale, typeof nl> = {
  nl,
  en,
};

export const defaultLocale: Locale = 'nl';

export function getTranslations(locale: Locale) {
  return locales[locale] || locales[defaultLocale];
}

export function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  
  const languages = acceptLanguage.split(',').map(lang => {
    const [code, q = '1'] = lang.trim().split(';q=');
    return { code: code.split('-')[0].toLowerCase(), q: parseFloat(q) };
  });
  
  languages.sort((a, b) => b.q - a.q);
  
  for (const { code } of languages) {
    if (code === 'en') return 'en';
    if (code === 'nl') return 'nl';
  }
  
  return defaultLocale;
}

export function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((acc, part) => acc?.[part], obj) || path;
}
