import { getCart } from '@/api/cart';
import { getItemsByIds } from '@/api/items';
import { CartItemDisplay } from '@/app/cart/components/CartItemDisplay';
import { CartPageItem } from '@/types/types';

export default async function CartPage() {
  const cartPageItems = await getCartPageData();

  const totalPrice = cartPageItems.reduce(
    (total, cartPageItem) => total + cartPageItem.totalPrice,
    0
  );

  return (
    <>
      <h1 className="text-5xl text-center font-bold mb-8">Cart (Total: ${totalPrice})</h1>
      {cartPageItems.map((cartPageItem) => (
        <CartItemDisplay key={cartPageItem.id} item={cartPageItem} />
      ))}
    </>
  );
}

async function getCartPageData(): Promise<CartPageItem[]> {
  const cartData = await getCart();
  const itemsInCart = await getItemsByIds(cartData.items.map((item) => item.id));

  return itemsInCart.map((storeItem) => {
    const matchingQuantity =
      cartData.items.find((cartItem) => cartItem.id === storeItem.id)?.quantity ?? 0;
    return {
      ...storeItem,
      quantity: matchingQuantity,
      totalPrice: matchingQuantity * storeItem.price,
    };
  });
}
