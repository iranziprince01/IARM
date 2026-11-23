import { Metadata } from 'next';
import EventsResourcesContent from '@/components/EventsResourcesContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Events and Resources | HOPE COMMUNITY GOSPER International Ministry',
    description:
      'Stay connected with upcoming events, activities, and helpful resources at HOPE COMMUNITY GOSPER International Ministry.',
  };
}

export default function EventsResourcesPage() {
  return <EventsResourcesContent />;
}

