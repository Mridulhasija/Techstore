import { useEffect, useState } from "react";
import API from "../api/api";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

function ProductGrid() {
  const [products, setProducts] = useState([]);

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductsGrid;
