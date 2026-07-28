export interface Equipment {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: string;
  imageAlt: string;
  description: string;
  specifications: {
    key: string;
    value: string;
  }[];
  inStock: boolean;
  deliveryTime: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  equipment?: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  equipment: string;
  message: string;
}
