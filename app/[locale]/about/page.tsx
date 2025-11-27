import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const canonicalUrl = locale === 'en' ? 'https://iarce.org/about' : `https://iarce.org/${locale}/about`;
  
  return {
    metadataBase: new URL('https://iarce.org'),
    title: 'About Us | International Anglican Revival Church of Edmonton',
    description:
      'Learn about International Anglican Revival Church of Edmonton - a vibrant Christian community in Edmonton, Alberta, dedicated to spiritual growth, compassion, and service. Meet our leadership, discover our mission and vision, and learn about our core values.',
    keywords: [
      'About Anglican church Edmonton',
      'Church leadership Edmonton',
      'Christian community Edmonton',
      'Church mission vision',
      'Anglican church Canada',
      'Edmonton church history',
    ],
    openGraph: {
      title: 'About Us | International Anglican Revival Church of Edmonton',
      description:
        'Learn about International Anglican Revival Church of Edmonton - a vibrant Christian community in Edmonton dedicated to spiritual growth, compassion, and service.',
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_CA' : locale,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <AboutContent />;
}

