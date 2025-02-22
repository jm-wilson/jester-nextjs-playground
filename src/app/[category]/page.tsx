import { StorePage } from '@/components/common/StorePage';
import { StoreItemCategorySlug, storeItemCategorySlugs } from '@/types/types';
// import { notFound } from 'next/navigation';

type Params = {
  category: StoreItemCategorySlug;
};
type Props = {
  params: Promise<Params>;
};

// This ensures a static route is generated for each category, but other
// strings can still hit this dynamic route despite not being returned here
export async function generateStaticParams(): Promise<Params[]> {
  return storeItemCategorySlugs.map((category) => ({ category }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
//   // This prevents store pages from being rendered for arbitrary
//   // slugs that match the route but aren't valid categories
//   // (You could also move the route to something more explicit, like /category/[category])
//   if (!storeItemCategorySlugs.includes(category)) {
//     notFound();
//   }

  return <StorePage category={category} />;
}
