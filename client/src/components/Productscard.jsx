import API from "../api/api";

function ProductCard({ product }) {

  const addToCart = async () => {
    await API.post("/cart/add", {
      userId: 1,
      productId: product.id
    });
    alert("Added to cart");
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