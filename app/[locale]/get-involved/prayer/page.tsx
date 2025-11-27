import { Metadata } from 'next';
import PrayerContent from '@/components/PrayerContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Prayer | Get Involved | International Anglican Revival Church of Edmonton',
    description: 'Join our prayer groups and intercessory prayer ministry at International Anglican Revival Church of Edmonton.',
  };
}

export default function PrayerPage() {
  return <PrayerContent />;
}

