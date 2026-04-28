import API from "../api/api";
fetch(`${API}/api/cart/add`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    userId: 1,
    productId: id,
    quantity: 1
  })
});

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
