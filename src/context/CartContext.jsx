import { useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      Swal.fire({
        title: "Already in Cart!",
        text: "This product is already in your cart!",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Okey!",
      });
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
      Swal.fire({
        title: "Added to Cart",
        text: "This product is added to your cart!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
        showCancelButton: true,
      });
    }
  };

  const cartCount = cartItems.length;

  return <CartContext.Provider value={{ cartCount, addToCart }}>{children}</CartContext.Provider>;
};
