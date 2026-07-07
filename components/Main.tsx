import { Product, products } from "@/data";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import ProductCardUI from "./ProductCard";
import { CartContext } from "@/contexts/CartProvider";

function Products({ filteredProducts }: { filteredProducts: Product[] }) {
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

  console.log("Cart Products");
  console.log(cartProducts);
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
  const [filteredProducts, setFilteredProducts] = useState(products);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value;

    const searchResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setFilteredProducts(searchResults);
  }

  function handlePriceSort() {
    const sortedProducts = filteredProducts.toSorted(
      (a, b) => a.price - b.price,
    );
    setFilteredProducts(sortedProducts);
  }

  function handleRatingSort() {
    const sortedProducts = filteredProducts.toSorted(
      (a, b) => b.rating.rate - a.rating.rate,
    );
    setFilteredProducts(sortedProducts);
  }

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

      <Products filteredProducts={filteredProducts} />
      <CartProducts />
    </main>
  );
}
