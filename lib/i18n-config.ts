export const locales = ['nl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'nl';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
