import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-logo">TechStore</h2>

          <p className="footer-description">
            Modern full-stack e-commerce platform built with React,
            Node.js, Express, and MySQL.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a to="/">Home</a></li>
            <li><a to="/products">Products</a></li>
            <li><a to="/deals">Deals</a></li>
            <li><a to="/cart">Cart</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: techstore@gmail.com</p>
          <p>Delhi, India</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="https://github.com/Mridulhasija" target="_blank"  rel="noopener noreferrer" ><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mridul-hasija-290996329/" target="_blank"  rel="noopener noreferrer" ><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TechStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
