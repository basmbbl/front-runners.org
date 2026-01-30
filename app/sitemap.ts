import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://front-runners.org';

  // Generate entries for each locale
  const localeEntries = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: {
      languages: {
        nl: `${baseUrl}/nl`,
        en: `${baseUrl}/en`,
      },
    },
  }));

  return localeEntries;
}
