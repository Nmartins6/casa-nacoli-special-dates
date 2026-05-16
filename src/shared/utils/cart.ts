import type { CartBasketItem, CartProductItem } from "@shared/types/campaign";

export type CartState = {
  products: CartProductItem[];
  basketItems: CartBasketItem[];
  customerName: string;
  notes: string;
};

export const emptyCartState: CartState = {
  products: [],
  basketItems: [],
  customerName: "",
  notes: "",
};

export const CART_STORAGE_KEY = "casa-nacoli-valentines-2026-cart";

export function getCartCount(state: CartState) {
  return [...state.products, ...state.basketItems].reduce(
    (total, item) => total + item.quantity,
    0,
  );
}
