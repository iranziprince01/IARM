import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import LeadershipContent from '@/components/LeadershipContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Leadership & Administration | International Anglican Revival Church of Edmonton',
    description:
      'Meet the leadership team of International Anglican Revival Church of Edmonton. Learn about our Senior Pastor, pastors, and other church leaders who guide and serve our community.',
    openGraph: {
      title: 'Leadership & Administration | International Anglican Revival Church of Edmonton',
      description:
        'Meet the leadership team of International Anglican Revival Church of Edmonton. Learn about our Senior Pastor, pastors, and other church leaders.',
      type: 'website',
    },
  };
}

export default async function LeadershipPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <LeadershipContent />;
}

