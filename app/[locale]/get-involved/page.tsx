import { Metadata } from 'next';
import GetInvolvedContent from '@/components/GetInvolvedContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Get Involved | HOPE COMMUNITY GOSPER International Ministry',
    description:
      'Get involved at HOPE COMMUNITY GOSPER International Ministry through volunteering, becoming a member, joining prayer groups, or getting baptized.',
  };
}

export default async function GetInvolvedPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <GetInvolvedContent locale={locale} />;
}
