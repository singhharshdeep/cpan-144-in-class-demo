import { CartContext } from "@/contexts/CartProvider";
import { useContext } from "react";
import ProductCardUI, {
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./ProductCard";
import Button from "./Button";

export default function CartProducts() {
  const { cartProducts, removeFromCart, handleAddToCart } =
    useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <div className="flex">
        {cartProducts.map((product) => (
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
            <ProductPrice price={product.price.toString()} />
          </ProductCardUI>
        ))}
      </div>
    </div>
  );
}
