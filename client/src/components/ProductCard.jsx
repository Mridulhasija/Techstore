function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-img">
        <span>{product.emoji}</span>

        <span className="discount-tag">
          -{product.discount}%
        </span>
      </div>

      <div className="product-body">
        <div className="product-brand">
          {product.brand}
        </div>

        <div className="product-name">
          {product.name}
        </div>

        <div className="product-footer">
          <div>
            <span className="old-price">
              ₹{product.oldPrice.toLocaleString()}
            </span>

            <span className="price">
              ₹{product.price.toLocaleString()}
            </span>
          </div>

          <button
            className="add-btn"
            onClick={addToCart}
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
