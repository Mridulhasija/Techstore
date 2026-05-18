import { useToast } from "../hooks/useToast";
import ProductCard from "./ProductCard";

function ProductsGrid({ products, addToCart }) {
  const showToast = useToast();

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="section-header">
        <div className="section-title">Featured Products</div>
        <a
          className="see-all"
          onClick={() => showToast("Loading full product listing...")}
        >
          View All →
        </a>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsGrid;
