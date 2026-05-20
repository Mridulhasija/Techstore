import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import "./ProductCard.css";

const ProductCard = ({ product }) => {

  const { addToCart } = useCart();

  return (
    <div className="product-card">

      {/* Product Image */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {product.discount && (
          <span className="discount-badge">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="product-info">

        <h3 className="product-title">
          {product.name}
        </h3>

        <p className="product-category">
          {product.category}
        </p>

        <div className="product-price-section">

          <span className="product-price">
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span className="old-price">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="product-rating">
          ⭐ {product.rating || 4.5}
        </div>

        {/* Buttons */}
        <div className="product-buttons">

          <button
            className="add-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>

          <Link to={`/products/${product.id}`}>
            <button className="view-btn">
              View
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
