import { Metadata } from 'next';
import TermsContent from '@/components/TermsContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title:
      'Terms & Conditions | HOPE COMMUNITY GOSPER International Ministry',
    description:
      'Terms and Conditions for HOPE COMMUNITY GOSPER International Ministry. Read our terms of use and service agreement.',
    openGraph: {
      title:
        'Terms & Conditions | HOPE COMMUNITY GOSPER International Ministry',
      description:
        'Terms and Conditions for HOPE COMMUNITY GOSPER International Ministry.',
      type: 'website',
    },
  };
}

export default function TermsPage() {
  return <TermsContent />;
}

