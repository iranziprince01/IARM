import { Metadata } from 'next';
import FoundationContent from '@/components/FoundationContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/foundation' : `https://www.iarmministries.org/${locale}/foundation`;
  
  return {
    metadataBase: new URL('https://www.iarmministries.org'),
    title:
      'Shelter of Refugee Seniors International Ministries (SRSIM) | HOPE COMMUNITY GOSPER International Ministry',
    description:
      'Learn about Shelter of Refugee Seniors International Ministries (SRSIM) - serving vulnerable refugees, seniors, and displaced families with compassion and dignity in Edmonton, Alberta.',
    keywords: [
      'Refugee support Edmonton',
      'Refugee ministry Canada',
      'Senior support Edmonton',
      'Refugee assistance Edmonton',
      'SRSIM',
      'Refugee services Edmonton',
      'Displaced families support',
    ],
    openGraph: {
      title:
        'Shelter of Refugee Seniors International Ministries (SRSIM) | HOPE COMMUNITY GOSPER International Ministry',
      description:
        'Serving vulnerable refugees, seniors, and displaced families with compassion and dignity.',
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_CA' : locale,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function FoundationPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/foundation' : `https://www.iarmministries.org/${locale}/foundation`;
  
  return (
    <>
      <FoundationContent />
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
                name: 'Foundation',
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />
    </>
  );
}

