import { useContext } from "react";
import { CartContext } from "@/contexts/CartProvider";

export default function CartWidget() {
  const { cartProducts } = useContext(CartContext);

  return <div>Items in cart: {cartProducts.length}</div>;
}
