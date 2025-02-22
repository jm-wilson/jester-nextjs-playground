import { CartData } from '@/types/types';
import { loadDataFromJson } from '../loadDataFromJson';
import { writeFile } from 'fs/promises';

const CART_FILE_PATH = './data/cart.json';

export async function getCartFromFile(): Promise<CartData> {
  console.log('Reading cart from file');
  return loadDataFromJson<CartData>(CART_FILE_PATH);
}

export async function saveCartToFile(cartData: CartData) {
  console.log('Saving cart to file');
  await writeFile(CART_FILE_PATH, JSON.stringify(cartData, null, 2), { encoding: 'utf8' });
}
