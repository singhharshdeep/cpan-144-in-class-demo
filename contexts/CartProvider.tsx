import { Product, products } from "@/data";
import { ChangeEvent, createContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // useEffect(() => {
  //   console.log("Calling API");
  //   axios
  //     .get(API_URL)
  //     .then((response) => {
  //       setFilteredProducts(response.data);
  //     })
  //     .catch((error) => {
  //
  //     });
  // }, []);

  async function fetchProductsFromApi() {
    try {
      setIsLoading(true);
      const response = await axios.get(API_URL);
      setFilteredProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Inside the catch block");
      console.log(error);
      setIsLoading(false);
      setApiError(error.message);
    }
  }

  useEffect(() => {
    fetchProductsFromApi();
  }, []);

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
        isLoading,
        apiError,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
