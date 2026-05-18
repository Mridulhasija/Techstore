import { useState } from "react";
import { useToast } from "../hooks/useToast";

function Stars({ rating }) {
  const full  = Math.floor(rating);
  const empty = 5 - full;
  return (
    <span className="stars">
      {"★".repeat(full)}{"☆".repeat(empty)}
    </span>
  );
}

function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);
  const showToast = useToast();

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product.id);
    setAdded(true);
    showToast("Item added to cart!");
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card" onClick={() => showToast(`Opening ${product.name}...`)}>
      <div className="product-img">
        <span>{product.emoji}</span>
        <span className="discount-tag">-{product.discount}%</span>
        <div className="product-wishlist">♡</div>
      </div>

      <div className="product-body">
        <div className="product-brand">{product.brand}</div>
        <div className="product-name">{product.name}</div>

        <div className="product-rating">
          <Stars rating={product.rating} />
          <span className="review-count">
            {product.rating} ({product.reviews.toLocaleString()})
          </span>
        </div>

        <div className="product-footer">
          <div>
            <span className="old-price">₹{product.oldPrice.toLocaleString()}</span>
            <span className="price">₹{product.price.toLocaleString()}</span>
          </div>
          <button
            className={`add-btn${added ? " added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓ Added" : "Add +"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
