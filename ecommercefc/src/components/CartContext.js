// CartContext.js
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCartItem = (product) => {
    setCartList((prevCartList) => [...prevCartList, product]);
  };

  const deleteCartItem = (productId) => {
    setCartList((prevCartList) =>
      prevCartList.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        deleteCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
