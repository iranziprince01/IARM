import { Metadata } from 'next';
import MinistriesContent from '@/components/MinistriesContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/ministries' : `https://www.iarmministries.org/${locale}/ministries`;
  
  return {
    metadataBase: new URL('https://www.iarmministries.org'),
    title: 'Our Ministries | HOPE COMMUNITY GOSPER International Ministry',
    description:
      'Explore our ministries at HOPE COMMUNITY GOSPER International Ministry including Worship & Music, Youth, Children, Women, Men, and Missions & Outreach programs. Join us in serving our community.',
    keywords: [
      'Church ministries Edmonton',
      'Youth ministry Edmonton',
      'Children ministry Edmonton',
      'Worship ministry Edmonton',
      'Missions Edmonton',
      'Church programs Edmonton',
      'Ministry opportunities Edmonton',
    ],
    openGraph: {
      title: 'Our Ministries | HOPE COMMUNITY GOSPER International Ministry',
      description:
        'Explore our ministries including Worship & Music, Youth, Children, Women, Men, and Missions & Outreach programs.',
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_CA' : locale,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function MinistriesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/ministries' : `https://www.iarmministries.org/${locale}/ministries`;
  
  return (
    <>
      <MinistriesContent />
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
                name: 'Ministries',
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />
    </>
  );
}

