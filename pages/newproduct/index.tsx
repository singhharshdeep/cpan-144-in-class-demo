import { useState } from "react";
import axios from "axios";

export default function NewProductPage() {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();
    const product = { title: productTitle, price: Number(productPrice) };
    await axios.post("https://fakestoreapi.com/products", product);
    alert("Product created");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          onChange={(event) => setProductTitle(event.target.value)}
        />
      </div>

      <div>
        <label>Price</label>
        <input
          type="text"
          onChange={(event) => setProductPrice(event.target.value)}
        />
      </div>

      <button type="submit">Add Product</button>
    </form>
  );
}
