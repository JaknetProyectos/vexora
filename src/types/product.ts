export interface Product {
  // campos obligatorios en el cart
  id: string;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  image?: string;
  features: string[];
}