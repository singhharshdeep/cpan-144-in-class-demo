import { CartContext } from "@/contexts/CartProvider";
import { Product } from "@/data";
import { ReactNode, useContext } from "react";
import Button from "./Button";
import Link from "next/link";

export function ProductImage({ imageUrl }: { imageUrl: string }) {
  return <img src={imageUrl} className="w-50 h-50" />;
}

export function ProductTitle({ title }: { title: string }) {
  return <div className="border-t border-t-black">{title}</div>;
}

export function ProductCategory({ category }: { category: string }) {
  return <div>{category}</div>;
}

export function ProductPrice({ price }: { price: string }) {
  return <div>${price}</div>;
}

export function ProductRating({ rating }: { rating: string }) {
  return <div>Rating: {rating}</div>;
}

export default function ProductCardUI({
  product,
  children,
  actionButton,
}: {
  product: Product;
  children: ReactNode;
  actionButton: ReactNode;
}) {
  return (
    <div
      key={product.id}
      className="w-62.5 h-100 border border-black transform hover:scale-105 delay-200"
    >
      <Link href={"/products/" + product.id}>{children}</Link>
      {actionButton}
    </div>
  );
}
