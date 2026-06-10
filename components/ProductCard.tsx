import { Product } from "@/data";
import { Dispatch, SetStateAction } from "react";

export default function ProductCardUI({
  product,
  cartProducts,
  setCartProducts,
}: {
  product: Product;
  cartProducts: Product[];
  setCartProducts: Dispatch<SetStateAction<Product[]>>;
}) {
  function handleAddToCart() {
    console.log("Adding to cart....");
    // Access the current product
    // Add the current product to cartProducts state
    setCartProducts(
      // Create a new array
      [
        // We copy everything from cartProducts
        ...cartProducts,
        // We add(append) our new product to it
        product,
      ],
    );
    // setCartProducts([product]);
  }

  function removeFromCart() {
    console.log("Removing from cart");
    console.log(cartProducts.filter((p) => product.id !== p.id))
    setCartProducts(cartProducts.filter((p) => product.id !== p.id));
  }

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
        onClick={
          cartProducts.includes(product) ? removeFromCart : handleAddToCart
        }
      >
        {cartProducts.includes(product) ? "Remove from cart" : "Add to Cart"}
      </button>
    </div>
  );
}
