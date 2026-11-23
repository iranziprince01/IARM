import { Metadata } from 'next';
import BecomeMemberContent from '@/components/BecomeMemberContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Become a Member | Get Involved | HOPE COMMUNITY GOSPER International Ministry',
    description: 'Join our church family and become an official member of HOPE COMMUNITY GOSPER International Ministry.',
  };
}

export default function BecomeMemberPage() {
  return <BecomeMemberContent />;
}

