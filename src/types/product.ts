export interface Product {
  id?: number;
  productName: string;
  descriptionShort: string;
  descriptionLong?: string;
  photo: string;
  photos?: string[];
  price: number;
  category?: string;
  rating?: number;
  reviews?: number;
}