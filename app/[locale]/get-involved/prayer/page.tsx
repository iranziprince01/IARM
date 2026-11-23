import { Metadata } from 'next';
import PrayerContent from '@/components/PrayerContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Prayer Request | Get Involved | HOPE COMMUNITY GOSPER International Ministry',
    description: 'Join our prayer groups and intercessory prayer ministry at HOPE COMMUNITY GOSPER International Ministry.',
  };
}

export default function PrayerPage() {
  return <PrayerContent />;
}

