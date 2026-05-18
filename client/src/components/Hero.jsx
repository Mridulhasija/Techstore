import { useToast } from "../hooks/useToast";

const heroProducts = [
  { icon: "💻", iconClass: "picon-a", name: "MacBook Pro M3", badge: "New", price: "₹1,89,900", oldPrice: "₹2,19,900", rating: "★★★★★", ratingText: "4.9 (2.1k reviews)", span: true },
  { icon: "📱", iconClass: "picon-b", name: "iPhone 16 Pro",   price: "₹1,19,900", rating: "★★★★★", ratingText: "4.8" },
  { icon: "🎧", iconClass: "picon-c", name: "Sony WH-1000XM5", price: "₹29,990",   rating: "★★★★☆", ratingText: "4.7" },
  { icon: "⌚", iconClass: "picon-d", name: "Apple Watch S9",  price: "₹41,900",   rating: "★★★★★", ratingText: "4.9" },
];

function Hero({ onAddToCart }) {
  const showToast = useToast();

  return (
    <section className="hero">
      <div>
        <div className="hero-tag">New arrivals just dropped</div>

        <h1>Next-gen <span className="accent">tech</span> at your fingertips</h1>

        <p className="hero-sub">
          Shop the latest laptops, smartphones, audio gear and accessories — curated for performance-driven people.
        </p>

        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => showToast("Browsing all products!")}>
            Shop Now ↗
          </button>
          <button className="btn-outline" onClick={() => showToast("Loading deals page...")}>
            View Deals
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">12K+</div>
            <div className="stat-label">Products</div>
          </div>
          <div className="stat">
            <div className="stat-num">98K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat">
            <div className="stat-num">4.9★</div>
            <div className="stat-label">Avg Rating</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        {heroProducts.map((p, i) => (
          <div
            key={i}
            className={`product-mini${p.span ? " product-mini--span" : ""}`}
            onClick={() => onAddToCart()}
          >
            <div className={`product-icon ${p.iconClass}`}>{p.icon}</div>
            <div>
              <div className="product-mini-name">
                {p.name}
                {p.badge && <span className="badge">{p.badge}</span>}
              </div>
              <div>
                <span className="product-mini-price">{p.price}</span>
                {p.oldPrice && <span className="product-mini-old">{p.oldPrice}</span>}
              </div>
              <div className="rating">
                <span>{p.rating}</span> {p.ratingText}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
