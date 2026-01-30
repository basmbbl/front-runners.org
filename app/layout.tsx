import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { detectLocale } from '@/lib/i18n';
import { LanguageProvider } from '@/components/LanguageProvider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b2c75',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://front-runners.org'),
  title: {
    default: 'Front Runners - Samen leren. Samen groeien.',
    template: '%s | Front Runners',
  },
  description: 'Front Runners helpt organisaties om – op een lerende, verbonden en praktijkgerichte manier – structureel te groeien naar beter werkgeverschap. AI-gedreven leerplatform voor HR-professionals.',
  keywords: [
    'HR',
    'werkgeverschap',
    'leren',
    'ontwikkeling',
    'community',
    'businesscase',
    'HR-ontwikkeling',
    'AI',
    'leerplatform',
    'masterclasses',
    'peer-learning',
    'Amsterdam',
  ],
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
    locale: 'nl_NL',
    alternateLocale: 'en_US',
    url: 'https://front-runners.org',
    siteName: 'Front Runners',
    title: 'Front Runners - Samen leren. Samen groeien.',
    description: 'Front Runners helpt organisaties structureel te groeien naar beter werkgeverschap. AI-gedreven leerplatform voor HR-professionals.',
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
    title: 'Front Runners - Samen leren. Samen groeien.',
    description: 'AI-gedreven leerplatform voor HR-professionals. Groei naar beter werkgeverschap.',
    images: ['/assets/hero-image.png'],
  },
  alternates: {
    canonical: 'https://front-runners.org',
    languages: {
      'nl-NL': 'https://front-runners.org',
      'en-US': 'https://front-runners.org',
    },
  },
  category: 'business',
};

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');
  const detectedLocale = detectLocale(acceptLanguage);

  return (
    <html lang={detectedLocale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider initialLocale={detectedLocale}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
