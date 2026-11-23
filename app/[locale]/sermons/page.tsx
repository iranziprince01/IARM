import { Metadata } from 'next';
import SermonsContent from '@/components/SermonsContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/sermons' : `https://www.iarmministries.org/${locale}/sermons`;
  
  return {
    metadataBase: new URL('https://www.iarmministries.org'),
    title: 'Sermons & Messages | HOPE COMMUNITY GOSPER International Ministry',
    description:
      'Watch and listen to sermons and messages from HOPE COMMUNITY GOSPER International Ministry. Stay connected with our weekly teachings and spiritual guidance.',
    keywords: [
      'Church sermons Edmonton',
      'Sermons online',
      'Bible teaching Edmonton',
      'Church messages Edmonton',
      'Spiritual guidance Edmonton',
      'Christian sermons',
      'Anglican sermons',
    ],
    openGraph: {
      title: 'Sermons & Messages | HOPE COMMUNITY GOSPER International Ministry',
      description:
        'Watch and listen to sermons and messages. Stay connected with our weekly teachings and spiritual guidance.',
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_CA' : locale,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function SermonsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/sermons' : `https://www.iarmministries.org/${locale}/sermons`;
  
  return (
    <>
      <SermonsContent />
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
                name: 'Sermons',
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />
    </>
  );
}

