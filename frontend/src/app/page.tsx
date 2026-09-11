import { Metadata } from 'next';
import HomeModule from '@/modules/home/HomeModule';
import { getSEOMetadata } from '@/shared/lib/seo';
import { API_BASE } from '@/shared/services/config';

export const metadata: Metadata = getSEOMetadata({
  title: "BizDial - Rank Your Business & Find Top Rated",
  description: "India's #1 verified local business ranking directory. Discover top-ranked businesses, verified customer ratings, and honest reviews. List and rank your business.",
  canonicalUrl: "/",
});

export default async function Page() {
  let initialData = null;
  try {
    const res = await fetch(`${API_BASE}/homepage`, { 
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
      initialData = await res.json();
    }
  } catch (err) {
    console.error('Failed to fetch home data for SSR', err);
  }

  return <HomeModule initialData={initialData} />;
}
