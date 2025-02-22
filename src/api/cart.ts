'use server';

import { getCartFromFile, saveCartToFile } from '@/lib/data/cart';
import { CartData } from '@/types/types';
import { revalidateTag, unstable_cache } from 'next/cache';

const CART_TAG = 'cart';

export const getCart = unstable_cache(async () => getCartFromFile(), [], { tags: [CART_TAG] });

async function saveAndRevalidateCart(cart: CartData) {
  await saveCartToFile(cart);
  await revalidateTag(CART_TAG);
}

export const addToCart = async (storeItemId: string) => {
  const cart = await getCart();

  const itemInCart = cart.items.find((cartItem) => cartItem.id === storeItemId);

  if (itemInCart) {
    console.log(`Increasing ${storeItemId} quantity in cart by 1`);
    itemInCart.quantity++;
  } else {
    console.log(`Adding first ${storeItemId} to cart`);
    cart.items.push({ id: storeItemId, quantity: 1 });
  }

  await saveAndRevalidateCart(cart);
};

export const removeFromCart = async (storeItemId: string) => {
  const cart = await getCart();

  const itemIndex = cart.items.findIndex((cartItem) => cartItem.id === storeItemId);

  if (itemIndex === -1) {
    throw `Could not find item with id '${storeItemId}' in cart to remove`;
  }

  if (cart.items[itemIndex].quantity > 1) {
    console.log(`Decreasing '${storeItemId}' quantity in cart by 1`);
    cart.items[itemIndex].quantity--;
  } else {
    console.log(`Removing last '${storeItemId}' from cart`);
    cart.items.splice(itemIndex, 1);
  }

  await saveAndRevalidateCart(cart);
};
