
export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Brand {
  name: string;
  tagline: string;
  description?: string;
}

export interface Partner {
  name: string;
  logo: string;
}
