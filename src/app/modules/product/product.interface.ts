export type TProduct = {
  name: string;
  price: number;
  quantity: number;
  types: string;
  brand: string;
  size: 'small' | 'medium' | 'large';
  color: string;
  condition: 'new' | 'used';
};
