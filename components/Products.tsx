import { CartContext } from "@/contexts/CartProvider";
import { useContext } from "react";
import ProductCardUI from "./ProductCard";
import Link from "next/link";

export default function Products() {
  const { filteredProducts } = useContext(CartContext);

  return filteredProducts.length === 0 ? (
    <div>No results found</div>
  ) : (
    <div
      style={{
        display: "flex",
        gap: 15,
      }}
    >
      {filteredProducts.map((product) => (
        // Product card
        <Link href={"/products/" + product.id}>
          <ProductCardUI key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
}
