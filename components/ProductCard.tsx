import { CartContext } from "@/contexts/CartProvider";
import { Product } from "@/data";
import { useContext } from "react";
import Button from "./Button";
import Link from "next/link";

export default function ProductCardUI({ product }: { product: Product }) {
  const { cartProducts, handleAddToCart, removeFromCart } =
    useContext(CartContext);

  return (
    <div
      key={product.id}
      className="w-62.5 h-100 border border-black transform hover:scale-105 delay-200"
    >
      <Link href={"/products/" + product.id}>
        <img src={product.image} className="w-50 h-50" />
        <div className="border-t border-t-black">{product.title}</div>
        <div>{product.category}</div>
        <div>${product.price}</div>
        <div>Rating: {product.rating.rate}</div>
      </Link>
      <Button
        label={
          cartProducts.includes(product) ? "Remove from cart" : "Add to Cart"
        }
        onClick={() =>
          cartProducts.includes(product)
            ? removeFromCart(product)
            : handleAddToCart(product)
        }
      />
    </div>
  );
}
