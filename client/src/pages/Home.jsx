import { useState, useEffect } from "react";
import Navbar      from "../components/Navbar";
import Hero        from "../components/Hero";
import Categories  from "../components/Categories";
import PromoBanner from "../components/PromoBanner";
import ProductsGrid from "../components/ProductsGrid";
import Footer      from "../components/Footer";
import localProducts from "../data/products";
import { getProducts, getByCategory } from "../api/api";

function Home() {
  const [cartCount, setCartCount]           = useState(3);
  const [filteredProducts, setFilteredProducts] = useState(localProducts);
  const [apiLoaded, setApiLoaded]           = useState(false);
  const [allProducts, setAllProducts]       = useState(localProducts);

 
  useEffect(() => {
    getProducts()
      .then(({ data }) => {
        if (Array.isArray(data) && data.length > 0) {
          setAllProducts(data);
          setFilteredProducts(data);
          setApiLoaded(true);
        }
      })
      .catch(() => {
        
      });
  }, []);

  const addToCart = (productId) => {
    setCartCount((prev) => prev + 1);
  };

  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(allProducts);
      return;
    }

    if (apiLoaded) {
      getByCategory(category)
        .then(({ data }) => {
          setFilteredProducts(Array.isArray(data) && data.length ? data : allProducts);
        })
        .catch(() => {
          const local = allProducts.filter((p) => p.category === category);
          setFilteredProducts(local.length ? local : allProducts);
        });
    } else {
      const local = allProducts.filter(
        (p) => p.category === category || p.category === category.replace(/s$/, "")
      );
      setFilteredProducts(local.length ? local : allProducts);
    }
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Hero onAddToCart={addToCart} />

      <Categories filterProducts={filterProducts} />

      <PromoBanner />

      <ProductsGrid products={filteredProducts} addToCart={addToCart} />

      <Footer />
    </>
  );
}

export default Home;
