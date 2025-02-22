import { getCart } from '@/api/cart';
import { ActiveLink } from '../common/ActiveLink';

export const Cart = async () => {
  const cartData = await getCart();
  const itemCount = cartData.items.reduce((totalQuantity, item) => {
    return totalQuantity + item.quantity;
  }, 0);

  return (
    <ActiveLink className="underline" href="/cart">
      Cart ({itemCount} items)
    </ActiveLink>
  );
};
