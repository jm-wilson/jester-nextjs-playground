import { getItemsByCategory } from '@/api/items';
import { storeItemCategories, StoreItemCategorySlug } from '@/types/types';
import { StoreItemGrid } from './StoreItemGrid';

type Props = {
  category: StoreItemCategorySlug;
};

export const StorePage = async ({ category }: Props) => {
  const categoryItems = await getItemsByCategory(category);

  return (
    <>
      <h1 className="text-5xl text-center font-bold mb-8">{storeItemCategories[category]}</h1>
      <StoreItemGrid items={categoryItems} />
    </>
  );
};
