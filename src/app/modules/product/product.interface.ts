export type TProduct = {
  name: string;
  price: number;
  quantity: number;
  size: 'small' | 'medium' | 'large';
  branch:string;
  material:string
  types: string;
  brand: string;
  color: string;
  condition: 'new' | 'used';
};
