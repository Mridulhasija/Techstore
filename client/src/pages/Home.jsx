import { useState, useEffect } from "react";
import Navbar        from "../components/Navbar";
import Hero          from "../components/Hero";
import Categories    from "../components/Categories";
import PromoBanner   from "../components/PromoBanner";
import ProductsGrid  from "../components/ProductsGrid";
import Footer        from "../components/Footer";
import localProducts from "../data/products";
import { getProducts, addToCartAPI } from "../api/api";
import { useAuth }   from "../context/AuthContext";

function Home() {
  const [filteredProducts, setFilteredProducts] = useState(localProducts);
  const [allProducts,      setAllProducts]      = useState(localProducts);
  const [apiLoaded,        setApiLoaded]        = useState(false);
  const { user } = useAuth();

  // Load products from live API; fall back to local data silently
  useEffect(() => {
    getProducts()
      .then(({ data }) => {
        if (Array.isArray(data) && data.length > 0) {
          setAllProducts(data);
          setFilteredProducts(data);
          setApiLoaded(true);
        }
      })
      .catch(() => {});
  }, []);

  // Fix 3: Wire cart to backend when user is logged in
  const addToCart = async (productId) => {
    setCartCount((prev) => prev + 1);

    if (user) {
      try {
        await addToCartAPI(productId, 1);
      } catch {
        // backend offline — local counter still updated
      }
    }
  };

  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(allProducts);
      return;
    }
    const local = allProducts.filter(
      (p) => p.category === category || p.category === category.replace(/s$/, "")
    );
    setFilteredProducts(local.length ? local : allProducts);
  };

  return (
    <>
      <Navbar cartCount={cartCount} onAuthClick={onAuthClick} />
      <Hero onAddToCart={addToCart} />
      <Categories filterProducts={filterProducts} />
      <PromoBanner />
      <ProductsGrid products={filteredProducts} addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default Home;
