import { Metadata } from 'next';
import DonateContent from '@/components/DonateContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Donate | International Anglican Revival Church of Edmonton',
    description:
      'Support the ministry of International Anglican Revival Church of Edmonton through your generous giving. Every contribution makes a difference.',
  };
}

export default function DonatePage() {
  return <DonateContent />;
}

