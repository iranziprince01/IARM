import { Metadata } from 'next';
import PrivacyContent from '@/components/PrivacyContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title:
      'Privacy Policy | HOPE COMMUNITY GOSPER International Ministry',
    description:
      'Privacy Policy for HOPE COMMUNITY GOSPER International Ministry. Learn how we collect, use, and protect your personal information.',
    openGraph: {
      title:
        'Privacy Policy | HOPE COMMUNITY GOSPER International Ministry',
      description:
        'Privacy Policy for HOPE COMMUNITY GOSPER International Ministry.',
      type: 'website',
    },
  };
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}

