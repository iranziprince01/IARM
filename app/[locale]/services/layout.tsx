import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const canonicalUrl = locale === 'en' ? 'https://www.iarmministries.org/services' : `https://www.iarmministries.org/${locale}/services`;
  
  return {
    metadataBase: new URL('https://www.iarmministries.org'),
    title: 'Services | HOPE COMMUNITY GOSPER International Ministry',
    description:
      'Join us for worship services, prayer meetings, and Bible study at HOPE COMMUNITY GOSPER International Ministry. Sunday services at 10:00 AM, Wednesday and Thursday evening services.',
    keywords: [
      'Church services Edmonton',
      'Worship services Edmonton',
      'Sunday service Edmonton',
      'Prayer meeting Edmonton',
      'Bible study Edmonton',
      'Church service times',
      'Anglican services Edmonton',
    ],
    openGraph: {
      title: 'Services | HOPE COMMUNITY GOSPER International Ministry',
      description:
        'Join us for worship services, prayer meetings, and Bible study. Sunday services at 10:00 AM.',
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_CA' : locale,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
