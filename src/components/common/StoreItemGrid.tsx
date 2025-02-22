import { StoreItem } from '@/types/types';
import { StoreItemTile } from './StoreItemTile';
import { ManipulateCartButton } from './ManipulateCartButton';

type Props = {
  items: StoreItem[];
};

export const StoreItemGrid = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-4 justify-items-center">
      {items.map((item) => (
        <ManipulateCartButton
          key={item.id}
          cartAction="add"
          storeItemId={item.id}
          className="rounded-md overflow-hidden bg-slate-900 cursor-pointer hover:-translate-y-0.5 hover:shadow-sm"
        >
          <StoreItemTile item={item} />
        </ManipulateCartButton>
      ))}
    </div>
  );
};
