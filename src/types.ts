
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
  url?: string;
  brandLogo?: string;
}

export interface Partner {
  name: string;
  logo: string;
}
