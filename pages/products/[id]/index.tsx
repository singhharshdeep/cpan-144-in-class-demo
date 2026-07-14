import { products } from "@/data";
import { useRouter } from "next/router";

export default function ProductDetailsPage() {
  const router = useRouter();

  console.log(useRouter());

  const productId = router.query.id;

  const foundProduct = products.find(
    (product) => product.id === Number(productId),
  );
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
