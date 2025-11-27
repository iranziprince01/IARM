import { Metadata } from 'next';
import BecomeMemberContent from '@/components/BecomeMemberContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Become a Member | Get Involved | International Anglican Revival Church of Edmonton',
    description: 'Join our church family and become an official member of International Anglican Revival Church of Edmonton.',
  };
}

export default function BecomeMemberPage() {
  return <BecomeMemberContent />;
}

