import { useState, useEffect } from "react";
import { useSearchParams }     from "react-router-dom";
import ProductCard             from "../components/ProductCard";
import Navbar                  from "../components/Navbar";
import Footer                  from "../components/Footer";
import { getProducts }         from "../api/api";
import localProducts           from "../data/products";
import { useToast }            from "../hooks/useToast";

const CATEGORIES = ["all","laptops","phones","audio","gaming","tablets","wearables"];
const SORTS = [
  { label: "Relevance",   value: "default" },
  { label: "Price: Low",  value: "price_asc" },
  { label: "Price: High", value: "price_desc" },
  { label: "Rating",      value: "rating" },
  { label: "Discount",    value: "discount" },
];

function ProductsPage({ cartCount, addToCart, onAuthClick }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initCat = searchParams.get("cat") || "all";

  const [products,   setProducts]   = useState(localProducts);
  const [activeCat,  setActiveCat]  = useState(initCat);
  const [sort,       setSort]       = useState("default");
  const [search,     setSearch]     = useState("");
  const showToast = useToast();

  useEffect(() => {
    getProducts()
      .then(({ data }) => { if (data?.length) setProducts(data); })
      .catch(() => {});
  }, []);

  const filtered = products
    .filter((p) => activeCat === "all" || p.category === activeCat)
    .filter((p) => search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "price_asc")  return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      if (sort === "rating")     return b.rating - a.rating;
      if (sort === "discount")   return b.discount - a.discount;
      return 0;
    });

  const selectCat = (cat) => {
    setActiveCat(cat);
    setSearchParams(cat === "all" ? {} : { cat });
  };

  return (
    <>
      <Navbar cartCount={cartCount} onAuthClick={onAuthClick} />

      <div className="products-page">
        <div className="products-page-header">
          <h2 className="section-title">All Products</h2>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {/* Search */}
            <div className="search-bar">
              <span className="search-icon">⌕</span>
              <input
                type="text"
                placeholder="Search…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Sort */}
            <select
              className="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category pills */}
        <div className="cat-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cat-pill${activeCat === cat ? " active" : ""}`}
              onClick={() => selectCat(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p style={{ fontSize: 12, color: "#505070", marginBottom: 16 }}>
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length === 0 ? (
          <div style={{ color: "#505070", padding: "40px 0", textAlign: "center" }}>
            No products found.
          </div>
        ) : (
          <div className="products-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ProductsPage;
