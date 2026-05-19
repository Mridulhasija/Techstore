import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import Login from "./Login";
import Register from "./Register";
import "./Navbar.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          TechStore
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="nav-auth">
          {user ? (
            <>
              <span className="user-name">
                Hi, {user.name}
              </span>

              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => setShowLogin(true)}>
                Login
              </button>

              <button
                className="register-btn"
                onClick={() => setShowRegister(true)}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
export default Navbar;
