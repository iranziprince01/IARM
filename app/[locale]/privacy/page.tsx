import { Metadata } from 'next';
import PrivacyContent from '@/components/PrivacyContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title:
      'Privacy Policy | International Anglican Revival Church of Edmonton',
    description:
      'Privacy Policy for International Anglican Revival Church of Edmonton. Learn how we collect, use, and protect your personal information.',
    openGraph: {
      title:
        'Privacy Policy | International Anglican Revival Church of Edmonton',
      description:
        'Privacy Policy for International Anglican Revival Church of Edmonton.',
      type: 'website',
    },
  };
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}

