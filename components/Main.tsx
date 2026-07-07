import { useContext } from "react";
import { CartContext } from "@/contexts/CartProvider";
import CartProducts from "./CartProducts";
import Products from "./Products";

export default function Main() {
  const { handleChange, handlePriceSort, handleRatingSort } =
    useContext(CartContext);

  return (
    <main
      style={{
        margin: 15,
      }}
    >
      {/* Search bar */}
      <input
        style={{
          marginBottom: 15,
          height: 50,
          width: 500,
        }}
        type="text"
        placeholder="Search products"
        onChange={handleChange}
      />
      <button onClick={handlePriceSort}>Sort: Price Low to high</button>
      <button onClick={handleRatingSort}>Sort: Rating high to low</button>

      <Products />
      <CartProducts />
    </main>
  );
}
