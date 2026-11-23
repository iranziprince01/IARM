import { Metadata } from 'next';
import VolunteerContent from '@/components/VolunteerContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Volunteer | Get Involved | HOPE COMMUNITY GOSPER International Ministry',
    description: 'Volunteer opportunities at HOPE COMMUNITY GOSPER International Ministry. Serve in various ministries and make a difference.',
  };
}

export default function VolunteerPage() {
  return <VolunteerContent />;
}

