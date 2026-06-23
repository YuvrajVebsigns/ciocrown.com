import WinnerDetailClient from './WinnerDetailClient';

type WinnerPageProps = {
  params: {
    slug?: string | string[];
  };
};

export default function WinnerDetailPage({ params }: WinnerPageProps) {
  const slug = Array.isArray(params?.slug) ? (params.slug[0] ?? '') : (params?.slug ?? '');

  return <WinnerDetailClient slug={slug} />;
}
