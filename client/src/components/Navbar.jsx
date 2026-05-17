function Navbar({ cartCount }) {
  return (
    <nav>
      <div className="logo">
        tech<span>store</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <div className="nav-right">
        <div className="search-bar">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search laptops, phones..."
          />
        </div>

        <button className="cart-btn">
          🛒 Cart
          <span className="cart-badge">{cartCount}</span>
        </button>

        <button className="btn-login">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
