import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ProductDetails.css";
const ProductDetailsPage = () => {
const { id } = useParams();
const { addToCart } = useCart();
const product = products.find(
(p) => p.id === Number(id)
);
const relatedProducts = products.filter(
(p) =>
p.category === product.category &&
p.id !== product.id
);
if (!product) {
return <h2>Product Not Found</h2>;
}
return (
<>
<Navbar />
<div className="product-detail-page">
<div className="product-detail-card">
<div className="detail-emoji-box">
{product.emoji}
</div>
<div className="detail-content">
<p className="detail-brand">
{product.brand}
</p>
<h1>{product.name}</h1>
<div className="detail-rating">
  ⭐{product.rating}
</div>
<div className="detail-price-row">
<span className="detail-price">
₹ {product.price}
</span>
<span className="detail-old-price">
₹ {product.oldPrice}
</span>
</div>
<button
className="detail-cart-btn"
onClick={() => addToCart(product)}
>
Add To Cart
</button>
</div>
</div>
<div className="related-section">
<h2>Similar Products</h2>
<div className="related-grid">
{
relatedProducts.map((item) => (
<div className="related-card" key={item.id}>
<div className="related-emoji">
{item.emoji}
</div>
<h3>{item.name}</h3>
<p>₹{item.price}</p>
</div>
))
}
</div>
</div>
</div>
<Footer />
</>
);
};
export default ProductDetailsPage;
