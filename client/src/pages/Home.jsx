import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import PromoBanner from "../components/PromoBanner";
import ProductsGrid from "../components/ProductsGrid";
import Footer from "../components/Footer";

import localProducts from "../data/products";
import { getProducts } from "../api/api";

function Home() {

  const [filteredProducts, setFilteredProducts] =
    useState(localProducts);

  const [allProducts, setAllProducts] =
    useState(localProducts);

  useEffect(() => {

    getProducts()
      .then(({ data }) => {

        if (Array.isArray(data) && data.length > 0) {

          setAllProducts(data);
          setFilteredProducts(data);

        }

      })
      .catch(() => {});

  }, []);

  const filterProducts = (category) => {

    if (category === "all") {

      setFilteredProducts(allProducts);
      return;

    }

    const filtered = allProducts.filter(
      (p) =>
        p.category === category ||
        p.category === category.replace(/s$/, "")
    );

    setFilteredProducts(
      filtered.length ? filtered : allProducts
    );

  };

  return (
    <>

      <Navbar />

      <Hero />

      <Categories
        filterProducts={filterProducts}
      />

      <PromoBanner />

      <ProductsGrid
        products={filteredProducts}
      />

      <Footer />

    </>
  );
}

export default Home;
