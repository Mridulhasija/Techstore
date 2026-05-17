import API from "../api/api";

function ProductCard({ product }) {
  const addToCart = async () => {
    try {
      await API.post("/api/cart/add", {
        userId: 1,
        productId: product.id,
        quantity: 1,
      });

      alert("Added to cart");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={addToCart}>Add +</button>
    </div>
  );
}

export default ProductCard;
