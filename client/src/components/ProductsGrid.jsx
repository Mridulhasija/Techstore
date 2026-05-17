import { useEffect, useState } from "react";
import API from "../api/api";

function ProductsGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id}>
          {product.name}
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;
