import { Metadata } from 'next';
import SermonsContent from '@/components/SermonsContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Sermons & Messages | International Anglican Revival Church of Edmonton',
    description:
      'Watch and listen to sermons and messages. Stay connected with our weekly teachings and spiritual guidance.',
  };
}

export default function SermonsPage() {
  return <SermonsContent />;
}

