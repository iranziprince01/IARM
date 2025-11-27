import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import MinistriesPreview from '@/components/MinistriesPreview';
import ServiceTimes from '@/components/ServiceTimes';
import CallToAction from '@/components/CallToAction';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  const canonicalUrl = locale === 'en' ? 'https://iarce.org' : `https://iarce.org/${locale}`;
  const ogImage = 'https://iarce.org/og-image.jpg';

  return {
    metadataBase: new URL('https://iarce.org'),
    title: {
      default: 'International Anglican Revival Church of Edmonton | IARCE',
      template: '%s | International Anglican Revival Church of Edmonton',
    },
    description:
      'A vibrant Christian community in Edmonton, Alberta, dedicated to spiritual growth, compassion, and service. Multilingual worship services in English and Kinyarwanda. Join us for Sunday worship, community outreach, and refugee support programs.',
    keywords: [
      'Anglican church Edmonton',
      'International Anglican Revival Church',
      'Pentecostal Anglican church',
      'Multilingual church Edmonton',
      'African churches in Edmonton',
      'Refugee support ministry Canada',
      'Edmonton Christian community',
      'Worship services Edmonton',
      'Church in Edmonton Alberta',
      'Anglican church Canada',
      'Christian church Edmonton',
      'Edmonton worship',
      'Church services Edmonton',
      'Community church Edmonton',
      'Multicultural church Edmonton',
      'Kinyarwanda church Edmonton',
      'Rwandan church Canada',
      'East African church Edmonton',
    ],
    authors: [{ name: 'International Anglican Revival Church of Edmonton' }],
    creator: 'International Anglican Revival Church of Edmonton',
    publisher: 'International Anglican Revival Church of Edmonton',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: 'International Anglican Revival Church of Edmonton',
      description:
        'A vibrant Christian community in Edmonton dedicated to spiritual growth, compassion, and service. Multilingual worship services in English and Kinyarwanda.',
      url: canonicalUrl,
      siteName: 'International Anglican Revival Church of Edmonton',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'International Anglican Revival Church of Edmonton',
        },
      ],
      locale: locale === 'en' ? 'en_CA' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'International Anglican Revival Church of Edmonton',
      description:
        'A vibrant Christian community in Edmonton dedicated to spiritual growth, compassion, and service.',
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-CA': 'https://iarce.org',
        'en': 'https://iarce.org/en',
        'rw': 'https://iarce.org/rw',
      },
    },
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
    verification: {
      // Add Google Search Console verification when available
      // google: 'your-google-verification-code',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <MinistriesPreview />
      <ServiceTimes />
      <CallToAction />
    </>
  );
}

