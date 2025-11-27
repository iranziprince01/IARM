import { Metadata } from 'next';
import FoundationContent from '@/components/FoundationContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title:
      'Shelter of Refugee Seniors International Ministries | International Anglican Revival Church of Edmonton',
    description:
      'Learn about Shelter of Refugee Seniors International Ministries (SRSIM) - serving vulnerable refugees, seniors, and displaced families with compassion and dignity.',
    openGraph: {
      title:
        'Shelter of Refugee Seniors International Ministries | International Anglican Revival Church of Edmonton',
      description:
        'Serving vulnerable refugees, seniors, and displaced families with compassion and dignity.',
      type: 'website',
    },
  };
}

export default function FoundationPage() {
  return <FoundationContent />;
}

