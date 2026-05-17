import ProductCard from "./ProductCard";

function ProductsGrid({ products, addToCart }) {
  return (
    <section className="section">
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
