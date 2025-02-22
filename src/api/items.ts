'use server';

import { getItemsFromFile } from '@/lib/data/items';
import { StoreItem } from '@/types/types';
import { unstable_cache } from 'next/cache';

const getItems = unstable_cache(getItemsFromFile, ['items']);

export const getItemsByCategory = async (category: StoreItem['category']): Promise<StoreItem[]> => {
  const items = await getItems();

  return items.filter((item) => item.category === category) ?? [];
};

export const getItemsByIds = async (ids: string[]): Promise<StoreItem[]> => {
  const items = await getItems();

  return items.filter((item) => ids.includes(item.id)) ?? [];
};
