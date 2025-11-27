import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import './globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PlaceOfWorship',
    '@id': `https://iarce.org/${locale === 'en' ? '' : locale + '/'}`,
    name: 'International Anglican Revival Church of Edmonton',
    alternateName: 'IARCE',
    description: 'A vibrant Christian community in Edmonton dedicated to spiritual growth, compassion, and service. Multilingual worship services in English and Kinyarwanda.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6110 Fulton Road',
      addressLocality: 'Edmonton',
      addressRegion: 'AB',
      postalCode: 'T6A 3T3',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.5461,
      longitude: -113.4938,
    },
    telephone: ['+1-587-778-6406', '+1-825-461-7431'],
    email: 'info@iarce.org',
    url: `https://iarce.org/${locale === 'en' ? '' : locale + '/'}`,
    sameAs: [
      'https://facebook.com/iarce',
      'https://instagram.com/iarce',
      'https://youtube.com/iarce',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '13:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Edmonton',
      '@id': 'https://www.wikidata.org/wiki/Q2096',
    },
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
