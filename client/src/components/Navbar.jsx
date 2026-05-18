import { Link } from "react-router-dom";
import { useAuth }  from "../context/AuthContext";
import { useToast } from "../hooks/useToast";

function Navbar({ cartCount, onAuthClick }) {
  const { user, logout } = useAuth();
  const showToast = useToast();

  const handleLogout = () => {
    logout();
    showToast("Signed out successfully");
  };

  return (
    <nav>
      <Link to="/" className="logo" style={{ textDecoration: "none" }}>
        tech<span>store</span>
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/deals">Deals</Link></li>
        <li><a href="#">About</a></li>
      </ul>

      <div className="nav-right">
        <div className="search-bar">
          <span className="search-icon">⌕</span>
          <input type="text" placeholder="Search laptops, phones..." />
        </div>

        <button className="cart-btn" onClick={() => showToast("Cart opened!")}>
          🛒 Cart
          <span className="cart-badge">{cartCount}</span>
        </button>

        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 13, color: "#a8a2ff" }}>Hi, {user.name.split(" ")[0]}</span>
            <button className="btn-login" onClick={handleLogout}>Sign Out</button>
          </div>
        ) : (
          <button className="btn-login" onClick={onAuthClick}>Sign In</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
