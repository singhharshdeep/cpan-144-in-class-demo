import { Product } from "@/data";
import { createContext, useState } from "react";

export const CartContext = createContext<{
  cartProducts: Product[];
  setCartProducts: (product: Product[]) => void;
}>({
  cartProducts: [],
  setCartProducts: (_: Product[]) => {},
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  return (
    <CartContext.Provider
      value={{
        cartProducts: cartProducts,
        setCartProducts: setCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
