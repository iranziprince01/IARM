import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import LeadershipContent from '@/components/LeadershipContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/leadership' : `https://www.iarmministries.org/${locale}/leadership`;
  
  return {
    metadataBase: new URL('https://www.iarmministries.org'),
    title: 'Leadership & Administration | HOPE COMMUNITY GOSPER International Ministry',
    description:
      'Meet the leadership team of HOPE COMMUNITY GOSPER International Ministry. Learn about our Senior Pastor, pastors, and other church leaders who guide and serve our community.',
    keywords: [
      'Church leadership Edmonton',
      'Pastor Edmonton',
      'Church administration Edmonton',
      'Senior Pastor Edmonton',
      'Church leaders Edmonton',
      'Anglican church leadership',
    ],
    openGraph: {
      title: 'Leadership & Administration | HOPE COMMUNITY GOSPER International Ministry',
      description:
        'Meet the leadership team of HOPE COMMUNITY GOSPER International Ministry. Learn about our Senior Pastor, pastors, and other church leaders.',
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_CA' : locale,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function LeadershipPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/leadership' : `https://www.iarmministries.org/${locale}/leadership`;
  
  return (
    <>
      <LeadershipContent />
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
                name: 'Leadership',
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />
    </>
  );
}

