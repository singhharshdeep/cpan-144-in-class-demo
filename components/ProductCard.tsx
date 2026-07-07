import { CartContext } from "@/contexts/CartProvider";
import { Product } from "@/data";
import { useContext } from "react";

export default function ProductCardUI({ product }: { product: Product }) {
  const { cartProducts, handleAddToCart, removeFromCart } =
    useContext(CartContext);

  return (
    <div
      key={product.id}
      style={{
        width: 250,
        height: 400,
        border: "1px solid black",
      }}
    >
      <img
        src={product.image}
        style={{
          width: 250,
          height: 250,
        }}
      />
      <div
        style={{
          borderTop: "1px solid black",
        }}
      >
        {product.title}
      </div>
      <div>{product.category}</div>
      <div>${product.price}</div>
      <div>Rating: {product.rating.rate}</div>
      <button
        onClick={() =>
          cartProducts.includes(product)
            ? removeFromCart(product)
            : handleAddToCart(product)
        }
      >
        {cartProducts.includes(product) ? "Remove from cart" : "Add to Cart"}
      </button>
    </div>
  );
}
