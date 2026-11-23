import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/about' : `https://www.iarmministries.org/${locale}/about`;
  
  return {
    metadataBase: new URL('https://www.iarmministries.org'),
    title: 'About Us | HOPE COMMUNITY GOSPER International Ministry',
    description:
      'Learn about HOPE COMMUNITY GOSPER International Ministry - a vibrant Christian community in Edmonton, Alberta, dedicated to spiritual growth, compassion, and service. Meet our leadership, discover our mission and vision, and learn about our core values.',
    keywords: [
      'About Anglican church Edmonton',
      'Church leadership Edmonton',
      'Christian community Edmonton',
      'Church mission vision',
      'Anglican church Canada',
      'Edmonton church history',
    ],
    openGraph: {
      title: 'About Us | HOPE COMMUNITY GOSPER International Ministry',
      description:
        'Learn about HOPE COMMUNITY GOSPER International Ministry - a vibrant Christian community in Edmonton dedicated to spiritual growth, compassion, and service.',
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
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/about' : `https://www.iarmministries.org/${locale}/about`;
  
  return (
    <>
      <AboutContent />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: locale === 'en' ? 'https://www.iarmministries.org' : `https://www.iarmministries.org/${locale}`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'About Us',
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />
      {/* AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Us',
            description: 'Learn about HOPE COMMUNITY GOSPER International Ministry - a vibrant Christian community in Edmonton, Alberta.',
            url: canonicalUrl,
            mainEntity: {
              '@type': 'Organization',
              name: 'HOPE COMMUNITY GOSPER International Ministry',
            },
          }),
        }}
      />
    </>
  );
}

