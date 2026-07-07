import { CartContext } from "@/contexts/CartProvider";
import { useContext } from "react";
import ProductCardUI from "./ProductCard";

export default function CartProducts() {
  const { cartProducts } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <div
        style={{
          display: "flex",
        }}
      >
        {cartProducts.map((product) => (
          // Product card
          <ProductCardUI key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}