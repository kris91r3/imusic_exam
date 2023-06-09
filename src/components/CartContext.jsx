/*  import { createContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
  const [isInCart, setIsInCart] = useState(false);

  function addToCart() {
    setIsInCart(true);
  }

  return (
    <CartContext.Provider value={{ isInCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider }; */

// eslint-disable-next-line no-unused-vars
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
  const [isInCart, setIsInCart] = useState(false);

  function addToCart() {
    console.log("addToCart blev kaldt");
    setIsInCart(true);
  }

  function emptyCart() {
    setIsInCart(false);
  }

  const cartContextValue = {
    isInCart,
    addToCart,
    emptyCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
