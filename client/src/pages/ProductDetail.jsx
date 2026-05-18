import { useState, useEffect } from "react";
import { useParams, Link }     from "react-router-dom";
import { getProductById }      from "../api/api";
import { useToast }            from "../hooks/useToast";
import { useAuth }             from "../context/AuthContext";
import { addToCartAPI }        from "../api/api";
import localProducts           from "../data/products";

function Stars({ rating }) {
  const full  = Math.floor(rating);
  const empty = 5 - full;
  return <span className="stars">{"★".repeat(full)}{"☆".repeat(empty)}</span>;
}

function ProductDetail({ addToCartLocal }) {
  const { id }    = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added,   setAdded]   = useState(false);
  const showToast = useToast();
  const { user }  = useAuth();

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then(({ data }) => setProduct(data))
      .catch(() => {
        // Fallback to local data
        const found = localProducts.find((p) => p.id === parseInt(id));
        if (found) setProduct(found);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleAdd = async () => {
    setAdded(true);
    addToCartLocal(product.id);

    if (user) {
      try {
        await addToCartAPI(product.id, 1);
      } catch {
        // silently ignore if backend offline
      }
    }

    showToast("Item added to cart!");
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return (
    <div className="detail-loading">
      <div className="detail-spinner" />
      Loading product…
    </div>
  );

  if (!product) return (
    <div className="detail-loading">
      Product not found. <Link to="/products" className="see-all">← Back to products</Link>
    </div>
  );

  const savings = product.oldPrice - product.price;

  return (
    <div className="detail-page">
      <div className="detail-breadcrumb">
        <Link to="/">Home</Link> › <Link to="/products">Products</Link> › {product.name}
      </div>

      <div className="detail-grid">
        {/* Left – Image */}
        <div className="detail-img-box">
          <span className="detail-img-emoji">{product.emoji || "📦"}</span>
          <span className="discount-tag">-{product.discount}%</span>
        </div>

        {/* Right – Info */}
        <div className="detail-info">
          <div className="product-brand">{product.brand}</div>
          <h2 className="detail-name">{product.name}</h2>

          <div className="product-rating" style={{ marginBottom: 16 }}>
            <Stars rating={product.rating} />
            <span className="review-count">
              {product.rating} ({product.reviews?.toLocaleString() || "—"} reviews)
            </span>
          </div>

          <div className="detail-price-row">
            <span className="detail-price">₹{product.price?.toLocaleString()}</span>
            <span className="old-price" style={{ fontSize: 16 }}>
              ₹{product.oldPrice?.toLocaleString()}
            </span>
            <span className="badge" style={{ fontSize: 12, padding: "4px 10px" }}>
              Save ₹{savings?.toLocaleString()}
            </span>
          </div>

          <div className="detail-specs">
            <div className="spec-row"><span>Brand</span><span>{product.brand}</span></div>
            <div className="spec-row"><span>Category</span><span style={{ textTransform: "capitalize" }}>{product.category}</span></div>
            <div className="spec-row"><span>Availability</span><span style={{ color: "#10b981" }}>In Stock</span></div>
            <div className="spec-row"><span>Discount</span><span>{product.discount}% off</span></div>
          </div>

          <div className="detail-actions">
            <button
              className={`btn-primary${added ? " added" : ""}`}
              style={{ flex: 1 }}
              onClick={handleAdd}
            >
              {added ? "✓ Added to Cart" : "Add to Cart"}
            </button>
            <button className="btn-outline" style={{ flex: 1 }}>
              ♡ Wishlist
            </button>
          </div>

          {!user && (
            <p style={{ fontSize: 12, color: "#606078", marginTop: 12 }}>
              Sign in to save your cart across devices.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
