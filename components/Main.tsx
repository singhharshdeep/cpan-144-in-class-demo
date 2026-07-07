import { useContext } from "react";
import ProductCardUI from "./ProductCard";
import { CartContext } from "@/contexts/CartProvider";

function Products() {
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
        <ProductCardUI key={product.id} product={product} />
      ))}
    </div>
  );
}

function CartProducts() {
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
