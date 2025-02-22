import { ManipulateCartButton } from '@/components/common/ManipulateCartButton';
import { CartPageItem, storeItemCategories } from '@/types/types';

type Props = {
  item: CartPageItem;
};

export const CartItemDisplay = ({ item }: Props) => {
  return (
    <div className="grid grid-cols-[10fr_1fr_1fr] border-b-2 p-2">
      <div>
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="opacity-80 italic font-thin text-sm">
          {storeItemCategories[item.category]}
        </div>
      </div>
      <div className="flex gap-4 items-center justify-items-end">
        <ManipulateCartButton
          className="p-2 bg-slate-600 rounded-xl"
          cartAction="remove"
          storeItemId={item.id}
        >
          &minus;
        </ManipulateCartButton>
        <ManipulateCartButton
          className="p-2 bg-slate-600 rounded-xl"
          cartAction="add"
          storeItemId={item.id}
        >
          +
        </ManipulateCartButton>
      </div>
      <div className="justify-items-end">
        <div className="text-3xl font-bold">${item.totalPrice}</div>
        <div className="opacity-80 font-thin text-xs italic">
          {item.quantity}x ${item.price}
        </div>
      </div>
    </div>
  );
};
