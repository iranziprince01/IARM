import { Metadata } from 'next';
import GetInvolvedContent from '@/components/GetInvolvedContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Get Involved | International Anglican Revival Church of Edmonton',
    description:
      'Get involved at International Anglican Revival Church of Edmonton through volunteering, becoming a member, joining prayer groups, or getting baptized.',
  };
}

export default async function GetInvolvedPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <GetInvolvedContent locale={locale} />;
}
