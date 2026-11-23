import { Metadata } from 'next';
import GetBaptizedContent from '@/components/GetBaptizedContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Get Baptized | Get Involved | HOPE COMMUNITY GOSPER International Ministry',
    description: 'Take the next step in your faith journey through baptism at HOPE COMMUNITY GOSPER International Ministry.',
  };
}

export default function GetBaptizedPage() {
  return <GetBaptizedContent />;
}

