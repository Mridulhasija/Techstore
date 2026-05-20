import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {

  const { addToCart } = useCart();

  return (

    <div className="product-card">

      {/* Discount Badge */}
      <div className="discount-badge">
        {product.discount}% OFF
      </div>

      {/* Product Emoji */}
      <div className="product-image-container">

        <div className="product-emoji">
          {product.emoji}
        </div>

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

          <span className="old-price">
            ₹{product.oldPrice}
          </span>

        </div>

        <div className="product-rating">
          ⭐ {product.rating}
        </div>

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
