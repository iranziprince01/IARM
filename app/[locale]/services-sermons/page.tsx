import { Metadata } from 'next';
import ServicesSermonsContent from '@/components/ServicesSermonsContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/services-sermons' : `https://www.iarmministries.org/${locale}/services-sermons`;
  
  return {
    metadataBase: new URL('https://www.iarmministries.org'),
    title: 'Services and Sermons | HOPE COMMUNITY GOSPER International Ministry',
    description:
      'Join us for worship services, prayer meetings, Bible study, and access our latest sermons and messages at HOPE COMMUNITY GOSPER International Ministry.',
    keywords: [
      'Church services Edmonton',
      'Sermons Edmonton',
      'Worship services Edmonton',
      'Bible study Edmonton',
      'Prayer meetings Edmonton',
      'Church messages',
    ],
    openGraph: {
      title: 'Services and Sermons | HOPE COMMUNITY GOSPER International Ministry',
      description:
        'Join us for worship services, prayer meetings, Bible study, and access our latest sermons and messages.',
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_CA' : locale,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function ServicesSermonsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/services-sermons' : `https://www.iarmministries.org/${locale}/services-sermons`;
  
  return (
    <>
      <ServicesSermonsContent />
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
                name: 'Services and Sermons',
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />
    </>
  );
}

