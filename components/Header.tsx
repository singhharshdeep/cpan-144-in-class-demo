import { useContext } from "react";
import CartWidget from "./CartWidget";
import { StyleContext } from "@/contexts/StyleProvider";

export default function Header() {
  const { isDarkModeEnabled } = useContext(StyleContext);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: 15,
        borderBottom: "1px solid black",
        backgroundColor: isDarkModeEnabled ? "black" : "white",
      }}
    >
      <h2>ProductCatalog</h2>
      <CartWidget />
      <div>
        <button>Login</button>
      </div>
    </header>
  );
}
