import { StoreItem } from '@/types/types';
import { loadDataFromJson } from '../loadDataFromJson';

const ITEM_FILE_PATH = './data/items.json';

export const getItemsFromFile = async () => {
  console.log('Reading items from file');
  return loadDataFromJson<StoreItem[]>(ITEM_FILE_PATH);
};
