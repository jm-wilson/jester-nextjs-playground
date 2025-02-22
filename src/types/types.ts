/** Keys are routes/slugs, values are titles */
export const storeItemCategories = {
  appliances: 'Appliances',
  clothing: 'Clothing',
  'sporting-goods': 'Sporting Goods',
} as const;
export type StoreItemCategorySlug = keyof typeof storeItemCategories;
export const storeItemCategorySlugs = Object.keys(storeItemCategories) as StoreItemCategorySlug[];

export type StoreItem = {
  id: string;
  title: string;
  price: number;
  category: StoreItemCategorySlug;
};

export type CartItem = {
  id: string;
  quantity: number;
};

export type CartData = {
  items: CartItem[];
};

export type CartPageItem = StoreItem &
  Pick<CartItem, 'quantity'> & {
    totalPrice: number;
  };
