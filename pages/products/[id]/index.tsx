import { products } from "@/data";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProductDetailsPage() {
  const router = useRouter();
  const [tabTitle, setTabTitle] = useState("title");

  const productId = router.query.id;

  const foundProduct = products.find(
    (product) => product.id === Number(productId),
  );

  useEffect(() => {
    console.log("Changing tab title");
    if (foundProduct) {
      if (tabTitle === "title") {
        document.title = foundProduct.title;
      } else {
        document.title = foundProduct.category;
      }
    }
  }, [tabTitle, foundProduct]);

  return foundProduct ? (
    <div>
      <h2>Product Details page</h2>
      <div>Product ID: {router.query.id}</div>
      <img
        src={foundProduct?.image}
        style={{
          width: 250,
          height: 250,
        }}
      />
      <div>{foundProduct?.title}</div>
      <div>{foundProduct?.description}</div>
      <div>${foundProduct?.price}</div>
      <div>${foundProduct?.rating.rate}</div>
      <button
        onClick={() => {
          if (tabTitle === "title") setTabTitle("category");
          else setTabTitle("title");
        }}
      >
        Toggle Title
      </button>
    </div>
  ) : (
    <div>
      <h2>Product not found</h2>
      <button onClick={() => router.back()}>Go back</button>
      <button onClick={() => router.reload()}>Reload</button>
      <button onClick={() => router.replace("/contact")}>Contact Us</button>
    </div>
  );
}
