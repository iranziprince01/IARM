import { Metadata } from 'next';
import VolunteerContent from '@/components/VolunteerContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Volunteer | Get Involved | International Anglican Revival Church of Edmonton',
    description: 'Volunteer opportunities at International Anglican Revival Church of Edmonton. Serve in various ministries and make a difference.',
  };
}

export default function VolunteerPage() {
  return <VolunteerContent />;
}

