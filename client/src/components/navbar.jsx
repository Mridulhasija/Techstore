import { useState } from "react";

function Navbar() {
  const [cart, setCart] = useState(0);

  return (
    <nav className="nav">
      <div className="logo">tech<span>store</span></div>

      <div>
        <input placeholder="Search..." />
      </div>

      <button>🛒 {cart}</button>
      <button>Sign In</button>
    </nav>
  );
}

export default Navbar;