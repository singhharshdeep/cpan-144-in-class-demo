import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import CartProvider from "@/contexts/CartProvider";
import StyleProvider from "@/contexts/StyleProvider";

export default function Home() {
  return (
    <StyleProvider>
      <CartProvider>
        <div>
          {/* Header section */}
          <Header />

          {/* Main Section */}
          <Main />

          {/* Footer section */}
          {/* <Footer /> */}
        </div>
      </CartProvider>
    </StyleProvider>
  );
}
