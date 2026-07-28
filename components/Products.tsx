import { CartContext } from "@/contexts/CartProvider";
import { useContext } from "react";
import ProductCardUI, {
  ProductCategory,
  ProductImage,
  ProductPrice,
  ProductRating,
  ProductTitle,
} from "./ProductCard";
import Button from "./Button";

export default function Products() {
  const { filteredProducts, cartProducts, removeFromCart, handleAddToCart } =
    useContext(CartContext);

  return filteredProducts.length === 0 ? (
    <div>No results found</div>
  ) : (
    <div className="flex gap-2">
      {filteredProducts.map((product) => (
        // Product card
        <ProductCardUI
          actionButton={
            <Button
              label={
                cartProducts.includes(product)
                  ? "Remove from cart"
                  : "Add to Cart"
              }
              onClick={() =>
                cartProducts.includes(product)
                  ? removeFromCart(product)
                  : handleAddToCart(product)
              }
            />
          }
          key={product.id}
          product={product}
        >
          <ProductImage imageUrl={product.image} />
          <ProductTitle title={product.title} />
          <ProductCategory category={product.category} />
          <ProductPrice price={product.price.toString()} />
          <ProductRating rating={product.rating.rate.toString()} />
        </ProductCardUI>
      ))}
    </div>
  );
}
