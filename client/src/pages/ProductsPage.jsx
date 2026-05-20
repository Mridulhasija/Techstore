import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "../data/products";
import "./ProductsPage.css";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (p) =>
            p.category === selectedCategory
        );

  return (

    <>

      <Navbar />

      <div className="products-page">

        {/* Heading */}

        <div className="products-header">

          <h1>All Products</h1>

          <p>
            Explore premium gadgets and
            electronics
          </p>

        </div>

        {/* Category Filters */}

        <div className="category-filters">

          <button
            onClick={() =>
              setSelectedCategory("all")
            }
            className={
              selectedCategory === "all"
                ? "active"
                : ""
            }
          >
            All
          </button>

          <button
            onClick={() =>
              setSelectedCategory("phones")
            }
            className={
              selectedCategory === "phones"
                ? "active"
                : ""
            }
          >
            Phones
          </button>

          <button
            onClick={() =>
              setSelectedCategory("audio")
            }
            className={
              selectedCategory === "audio"
                ? "active"
                : ""
            }
          >
            Audio
          </button>

          <button
            onClick={() =>
              setSelectedCategory("laptops")
            }
            className={
              selectedCategory === "laptops"
                ? "active"
                : ""
            }
          >
            Laptops
          </button>

        </div>

        {/* Products Grid */}

        <div className="products-grid">

          {filteredProducts.map((p) => (

            <ProductCard
              key={p.id}
              product={p}
            />

          ))}

        </div>

      </div>

      <Footer />

    </>

  );
}

export default ProductsPage;
