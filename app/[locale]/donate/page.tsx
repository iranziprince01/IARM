import { Metadata } from 'next';
import DonateContent from '@/components/DonateContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/donate' : `https://www.iarmministries.org/${locale}/donate`;
  
  return {
    metadataBase: new URL('https://www.iarmministries.org'),
    title: 'Donate | HOPE COMMUNITY GOSPER International Ministry',
    description:
      'Support the ministry of HOPE COMMUNITY GOSPER International Ministry through your generous giving. Every contribution makes a difference in our community outreach, refugee support, and spiritual growth programs.',
    keywords: [
      'Donate to church Edmonton',
      'Church donations Edmonton',
      'Support ministry Edmonton',
      'Church giving Edmonton',
      'Online donations church',
      'Tithe church Edmonton',
      'Church offering Edmonton',
    ],
    openGraph: {
      title: 'Donate | HOPE COMMUNITY GOSPER International Ministry',
      description:
        'Support the ministry of HOPE COMMUNITY GOSPER International Ministry through your generous giving. Every contribution makes a difference.',
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_CA' : locale,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function DonatePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/donate' : `https://www.iarmministries.org/${locale}/donate`;
  
  return (
    <>
      <DonateContent />
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
                name: 'Donate',
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />
    </>
  );
}

