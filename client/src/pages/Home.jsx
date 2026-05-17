import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductsGrid from "../components/ProductsGrid";
import PromoBanner from "../components/PromoBanner";
import Footer from "../components/Footer";
import products from "../data/products";

function Home() {
  const [cartCount, setCartCount] = useState(3);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(
      (p) => p.category === category
    );

    setFilteredProducts(filtered);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Hero />

      <Categories filterProducts={filterProducts} />

      <PromoBanner />

      <ProductsGrid
        products={filteredProducts}
        addToCart={addToCart}
      />

      <Footer />
    </>
  );
}

export default Home;
