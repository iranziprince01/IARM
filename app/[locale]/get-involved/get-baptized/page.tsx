import { Metadata } from 'next';
import GetBaptizedContent from '@/components/GetBaptizedContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Get Baptized | Get Involved | International Anglican Revival Church of Edmonton',
    description: 'Take the next step in your faith journey through baptism at International Anglican Revival Church of Edmonton.',
  };
}

export default function GetBaptizedPage() {
  return <GetBaptizedContent />;
}

