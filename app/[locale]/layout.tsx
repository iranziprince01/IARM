import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
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

  const baseUrl = 'https://www.iarmministries.org';
  const siteUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;

  // Enhanced Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'HOPE COMMUNITY GOSPER International Ministry',
    alternateName: 'HCGIM',
    legalName: 'HOPE COMMUNITY GOSPER International Ministry',
    url: baseUrl,
    logo: `${baseUrl}/logos/Logo.png`,
    image: `${baseUrl}/logos/Logo.png`,
    description: 'A vibrant Christian community in Edmonton, Alberta, dedicated to spiritual growth, compassion, and service. Multilingual worship services in English and Kinyarwanda.',
    foundingDate: '2010',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Edmonton',
        addressRegion: 'AB',
        addressCountry: 'CA',
      },
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-587-778-6406',
        contactType: 'Main Office',
        areaServed: 'CA',
        availableLanguage: ['English', 'Kinyarwanda'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+1-825-461-7431',
        contactType: 'Secondary',
        areaServed: 'CA',
        availableLanguage: ['English', 'Kinyarwanda'],
      },
    ],
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
    email: 'info@iarmministries.org',
    telephone: ['+1-587-778-6406', '+1-825-461-7431'],
    sameAs: [
      'https://www.instagram.com/iarministries/',
      'https://www.youtube.com/@InternationalAnglicanRevivalMi',
      'https://wa.me/15877786406',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Edmonton',
        '@id': 'https://www.wikidata.org/wiki/Q2096',
      },
      {
        '@type': 'State',
        name: 'Alberta',
        '@id': 'https://www.wikidata.org/wiki/Q1951',
      },
      {
        '@type': 'Country',
        name: 'Canada',
        '@id': 'https://www.wikidata.org/wiki/Q16',
      },
    ],
  };

  // PlaceOfWorship Schema
  const placeOfWorshipSchema = {
    '@context': 'https://schema.org',
    '@type': 'PlaceOfWorship',
    '@id': `${siteUrl}/#place`,
    name: 'HOPE COMMUNITY GOSPER International Ministry',
    alternateName: 'HCGIM',
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
    email: 'info@iarmministries.org',
    url: siteUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday'],
        opens: '18:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Thursday'],
        opens: '18:00',
        closes: '20:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Edmonton',
      '@id': 'https://www.wikidata.org/wiki/Q2096',
    },
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,
    name: 'HOPE COMMUNITY GOSPER International Ministry',
    image: `${baseUrl}/logos/Logo.png`,
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
    url: siteUrl,
    telephone: '+1-587-778-6406',
    priceRange: 'Free',
    openingHours: [
      'Su 10:00-13:00',
      'We 18:00-20:00',
      'Th 18:00-20:00',
    ],
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Enhanced Structured Data */}
        <Script
          id="schema-org-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-org-place"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(placeOfWorshipSchema) }}
        />
        <Script
          id="schema-org-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Hreflang tags for language alternates */}
        {locales.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc === 'en' ? 'en-CA' : loc}
            href={loc === 'en' ? baseUrl : `${baseUrl}/${loc}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
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
          <PageTransition>
            <main id="main-content" className="min-h-screen">{children}</main>
          </PageTransition>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
