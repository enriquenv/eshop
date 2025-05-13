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

          if (item.quantity < product.quantity) {
            return {
              id: item.id,
              name: item.name,
              price: item.price,
              imageUrl: item.imageUrl,
              size: item.size,
              quantity: item.quantity + 1,
              available: product.quantity,
            };
          }

          return item;
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
          available: product.quantity,
        }]);
      }
    });
  };

  const increment = (id) => {
    setCart(cart => cart.map(item => {
      if (item.id === id && item.quantity < item.available) {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          imageUrl: item.imageUrl,
          size: item.size,
          quantity: item.quantity + 1,
          available: item.available,
        };
      }
      return item;
    }));
  };

  const decrement = (id) => {
    setCart(cart => cart.map(item => {
      if (item.id === id && item.quantity > 0) {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          imageUrl: item.imageUrl,
          size: item.size,
          quantity: item.quantity - 1,
          available: item.available,
        };
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(cart => cart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);