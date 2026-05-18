import { useToast } from "../hooks/useToast";

function Navbar({ cartCount }) {
  const showToast = useToast();

  return (
    <nav>
      <div className="logo">tech<span>store</span></div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Deals</a></li>
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

        <button className="btn-login" onClick={() => showToast("Login modal would open here")}>
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
