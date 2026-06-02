import { Product, products } from "@/data";
import { ChangeEvent, useState } from "react";

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
        <div
          key={product.id}
          style={{
            width: 250,
            height: 350,
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
        </div>
      ))}
    </div>
  );
}

export default function Main() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value;

    const searchResults = products.filter((product) =>
      product.title.includes(searchValue),
    );

    setFilteredProducts(searchResults);
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

      <Products filteredProducts={filteredProducts} />
    </main>
  );
}
