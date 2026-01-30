import nl from '@/locales/nl.json';
import en from '@/locales/en.json';
import { type Locale, defaultLocale } from './i18n-config';

export type { Locale } from './i18n-config';
export { defaultLocale, locales, isValidLocale } from './i18n-config';

export const translations: Record<Locale, typeof nl> = {
  nl,
  en,
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
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
