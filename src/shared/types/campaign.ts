export type Price = number | "sob consulta";

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: Price;
  image: string;
  imageAlt: string;
  options?: string[];
  colorConsulta?: boolean;
  featured?: boolean;
};

export type BasketItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  suggestedQuantity?: number;
};

export type Campaign = {
  id: string;
  name: string;
  season: string;
  year: number;
  concept: string;
  whatsappNumber: string;
  instagramUrl: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    image: string;
  };
};

export type CartProductItem = {
  id: string;
  name: string;
  quantity: number;
  option?: string;
};

export type CartBasketItem = {
  id: string;
  name: string;
  quantity: number;
  note?: string;
  personalizedLabel?: boolean;
};
