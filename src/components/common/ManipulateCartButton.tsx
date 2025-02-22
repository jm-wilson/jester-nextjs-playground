'use client';

import { addToCart, removeFromCart } from '@/api/cart';
import { HTMLAttributes, PropsWithChildren } from 'react';

type Props = HTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    storeItemId: string;
    cartAction: 'add' | 'remove';
  }>;

export const ManipulateCartButton = ({ children, storeItemId, cartAction, ...props }: Props) => {
  const handleClick =
    cartAction === 'add' ? () => addToCart(storeItemId) : () => removeFromCart(storeItemId);

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
};
