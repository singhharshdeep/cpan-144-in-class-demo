import { Product, products } from "@/data";
import { ChangeEvent, createContext, useState } from "react";

interface ICartContext {
  cartProducts: Product[];
  filteredProducts: Product[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePriceSort: () => void;
  handleRatingSort: () => void;
  handleAddToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

export const CartContext = createContext<ICartContext>({
  cartProducts: [],
  filteredProducts: [],
  handleChange: () => {},
  handlePriceSort: () => {},
  handleRatingSort: () => {},
  handleAddToCart: () => {},
  removeFromCart: () => {},
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
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

  function handleAddToCart(product: Product) {
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

  function removeFromCart(product: Product) {
    console.log("Removing from cart");
    console.log(cartProducts.filter((p) => product.id !== p.id));
    setCartProducts(cartProducts.filter((p) => product.id !== p.id));
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts: cartProducts,
        filteredProducts,
        handleChange,
        handlePriceSort,
        handleRatingSort,
        handleAddToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
