import { Metadata } from 'next';
import TermsContent from '@/components/TermsContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title:
      'Terms & Conditions | International Anglican Revival Church of Edmonton',
    description:
      'Terms and Conditions for International Anglican Revival Church of Edmonton. Read our terms of use and service agreement.',
    openGraph: {
      title:
        'Terms & Conditions | International Anglican Revival Church of Edmonton',
      description:
        'Terms and Conditions for International Anglican Revival Church of Edmonton.',
      type: 'website',
    },
  };
}

export default function TermsPage() {
  return <TermsContent />;
}

