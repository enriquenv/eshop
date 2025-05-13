import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
  setCart(cart => {
    let found = false;
    const updatedCart = cart.map(item => {
      if (item.id === product.id) {
        found = true;
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          imageUrl: item.imageUrl,
          size: item.size,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    if (found) {
      return updatedCart;
    } else {
      return cart.concat([{
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        size: product.size,
        quantity: 1,
      }]);
    }
  });
};

  const removeFromCart = (id) => {
    setCart(cart => cart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);