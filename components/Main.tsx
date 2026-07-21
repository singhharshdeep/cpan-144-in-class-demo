import { useContext } from "react";
import { CartContext } from "@/contexts/CartProvider";
import CartProducts from "./CartProducts";
import Products from "./Products";
import Button from "./Button";
import Input from "./Input";

export default function Main() {
  const { handleChange, handlePriceSort, handleRatingSort } =
    useContext(CartContext);

  return (
    <main className="m-4">
      {/* Search bar */}
      <div className="flex gap-x-2 mb-4">
        <Input placeholder="Search products" onChange={handleChange} />
        <Button onClick={handlePriceSort} label="Sort: Price Low to high" />
        <Button onClick={handleRatingSort} label="Sort: Rating high to low" />
      </div>
      <Products />
      <CartProducts />
    </main>
  );
}
