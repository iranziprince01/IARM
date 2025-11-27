import { Metadata } from 'next';
import EventsResourcesContent from '@/components/EventsResourcesContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Events and Resources | International Anglican Revival Church of Edmonton',
    description:
      'Stay connected with upcoming events, activities, and helpful resources at International Anglican Revival Church of Edmonton.',
  };
}

export default function EventsResourcesPage() {
  return <EventsResourcesContent />;
}

