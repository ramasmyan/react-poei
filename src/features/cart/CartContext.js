import React, { createContext, useContext, useState, useEffect } from 'react';

// Créez le contexte
const CartContext = createContext();

// Créez le fournisseur de contexte
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, isStaged = true) => {
    setCartItems(prevCartItems => {
      const existingProduct = prevCartItems.find((item) => item.id === product.id);
  
      if (existingProduct) {
        // Le produit existe déjà dans le panier, mettez à jour la quantité
        const updatedCart = prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
  
        if (isStaged) {
          localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
  
        return updatedCart;
      } else {
        // Le produit n'existe pas dans le panier, ajoutez-le
        const newCart = [...prevCartItems, { ...product, quantity: 1 }];
  
        if (isStaged) {
          localStorage.setItem('cart', JSON.stringify(newCart));
        }
  
        return newCart;
      }
    });
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Créez un hook personnalisé pour utiliser le contexte
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
