import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "../hooks/useToast";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
const showToast = useToast();
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");

    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (product) => {
   showToast(`${product.name} added to cart!`);
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (id) => {
   showToast("Item removed from cart");
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  const increaseQuantity = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
