import { Metadata } from 'next';
import ServicesSermonsContent from '@/components/ServicesSermonsContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Services and Sermons | International Anglican Revival Church of Edmonton',
    description:
      'Join us for worship services, prayer meetings, Bible study, and access our latest sermons and messages at International Anglican Revival Church of Edmonton.',
  };
}

export default function ServicesSermonsPage() {
  return <ServicesSermonsContent />;
}

