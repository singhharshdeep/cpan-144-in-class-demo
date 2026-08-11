import { useContext } from "react";
import CartWidget from "./CartWidget";
import { StyleContext } from "@/contexts/StyleProvider";
import Link from "next/link";

export default function Header() {
  const { isDarkModeEnabled } = useContext(StyleContext);

  return (
    <header
      className={`flex justify-between m-3.75 border-b-2 border-b-black`}
    >
      <Link href="/">Demo Application</Link>
      <CartWidget />
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/login">Login</Link>
    </header>
  );
}
