import React from "react";
const CartPage = () => {
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const total = cart.reduce(
(sum, item) => sum + item.price * item.quantity,
0
);
return (
<div className="cart-page">
<h1>Your Cart</h1>
{cart.length === 0 ? (
<p>Your cart is empty</p>
) : (
<div>
{cart.map((item) => (
<div key={item.id} className="cart-item">
<h3>{item.name}</h3>
<p>₹{item.price}</p>
<p>Qty: {item.quantity}</p>
</div>
))}
<h2>Total: ₹{total}</h2>
</div>
)}
</div>
);
};
export default CartPage;
