import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useCart } from "../context/CartContext";

import "./CartPage.css";

const CartPage = () => {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  // Total Price Calculation
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart-page">

        <div className="cart-header">
          <h1>Your Shopping Cart</h1>

          <p>
            {cartItems.length} item
            {cartItems.length !== 1 && "s"} in cart
          </p>
        </div>

        {
          cartItems.length === 0 ? (

            <div className="empty-cart-container">

              <div className="empty-cart-icon">
                🛒
              </div>

              <h2>Your Cart is Empty</h2>

              <p>
                Looks like you haven't added
                anything yet.
              </p>

            </div>

          ) : (

            <div className="cart-layout">

              {/* Cart Items */}
              <div className="cart-items-section">

                {
                  cartItems.map((item) => (

                    <div
                      className="cart-item"
                      key={item.id}
                    >

                     <div className="cart-product-emoji">
                  {item.emoji}
                 </div>


                      {/* Product Details */}
                      <div className="cart-details">

                        <h2>{item.name}</h2>

                        <p className="cart-category">
                          {item.category}
                        </p>

                        <p className="cart-price">
                          ₹{item.price}
                        </p>

                        {/* Quantity Controls */}
                        <div className="quantity-controls">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                          >
                            -
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                          >
                            +
                          </button>

                        </div>

                        {/* Subtotal */}
                        <p className="subtotal">
                          Subtotal:
                          <strong>
                            ₹
                            {item.price *
                              item.quantity}
                          </strong>
                        </p>

                        {/* Remove Button */}
                        <button
                          className="remove-btn"
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                        >
                          Remove Item
                        </button>

                      </div>
                    </div>
                  ))
                }
              </div>

              {/* Cart Summary */}
              <div className="cart-summary">

                <h2>Order Summary</h2>

                <div className="summary-row">
                  <span>Total Items</span>

                  <span>
                    {cartItems.reduce(
                      (total, item) =>
                        total + item.quantity,
                      0
                    )}
                  </span>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>

                  <span>Free</span>
                </div>

                <div className="summary-total">
                  <span>Total</span>

                  <span>₹{totalPrice}</span>
                </div>

                <button className="checkout-btn">
                  Proceed to Checkout
                </button>

              </div>
            </div>
          )
        }
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
