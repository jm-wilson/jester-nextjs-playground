import { StoreItem } from '@/types/types';
import Image from 'next/image';

type Props = {
  item: StoreItem;
};

export const StoreItemTile = ({ item }: Props) => {
  return (
    <>
      <Image src={`/product-images/${item.id}.jpg`} alt={item.title} width={200} height={200} />
      <div className="flex justify-between p-2">
        <div>{item.title}</div>
        <div>${item.price}</div>
      </div>
    </>
  );
};
