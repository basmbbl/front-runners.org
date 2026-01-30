import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { locales, type Locale, isValidLocale } from '@/lib/i18n-config';
import { LanguageProvider } from '@/components/LanguageProvider';
import { getTranslations } from '@/lib/i18n';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b2c75',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const t = getTranslations(locale);
  const isNL = locale === 'nl';

  const title = isNL
    ? 'Front Runners - Samen leren. Samen groeien.'
    : 'Front Runners - Learn Together. Grow Together.';

  const description = isNL
    ? 'Front Runners helpt organisaties om – op een lerende, verbonden en praktijkgerichte manier – structureel te groeien naar beter werkgeverschap. AI-gedreven leerplatform voor HR-professionals.'
    : 'Front Runners helps organizations structurally grow towards better employership through learning, connection, and practice. AI-powered learning platform for HR professionals.';

  return {
    metadataBase: new URL('https://front-runners.org'),
    title: {
      default: title,
      template: '%s | Front Runners',
    },
    description,
    keywords: isNL
      ? ['HR', 'werkgeverschap', 'leren', 'ontwikkeling', 'community', 'businesscase', 'HR-ontwikkeling', 'AI', 'leerplatform', 'masterclasses', 'peer-learning', 'Amsterdam']
      : ['HR', 'employership', 'learning', 'development', 'community', 'business case', 'HR development', 'AI', 'learning platform', 'masterclasses', 'peer-learning', 'Amsterdam'],
    authors: [{ name: 'Front Runners', url: 'https://front-runners.org' }],
    creator: 'Front Runners',
    publisher: 'Front Runners',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: isNL ? 'nl_NL' : 'en_US',
      alternateLocale: isNL ? 'en_US' : 'nl_NL',
      url: `https://front-runners.org/${locale}`,
      siteName: 'Front Runners',
      title,
      description,
      images: [
        {
          url: '/assets/hero-image.png',
          width: 1200,
          height: 630,
          alt: 'Front Runners - HR Development Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/hero-image.png'],
    },
    alternates: {
      canonical: `https://front-runners.org/${locale}`,
      languages: {
        'nl': 'https://front-runners.org/nl',
        'en': 'https://front-runners.org/en',
        'x-default': 'https://front-runners.org/nl',
      },
    },
    category: 'business',
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Front Runners',
  description: 'Front Runners helpt organisaties om structureel te groeien naar beter werkgeverschap.',
  url: 'https://front-runners.org',
  logo: 'https://front-runners.org/favicon.svg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Oudezijds Voorburgwal 282',
    addressLocality: 'Amsterdam',
    postalCode: '1012 GL',
    addressCountry: 'NL',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+31-20-210-1978',
    email: 'hello@front-runners.org',
    contactType: 'customer service',
    availableLanguage: ['Dutch', 'English'],
  },
  sameAs: [
    'https://linkedin.com/company/front-runners',
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" hrefLang="nl" href="https://front-runners.org/nl" />
        <link rel="alternate" hrefLang="en" href="https://front-runners.org/en" />
        <link rel="alternate" hrefLang="x-default" href="https://front-runners.org/nl" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider initialLocale={locale}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
