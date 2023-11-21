import React, { createContext, useContext, useState, useEffect } from 'react';

// Créez le contexte
const CartContext = createContext();

// Créez le fournisseur de contexte
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart;
  });

  const addToCart = (product, isStaged = true) => {
    setCartItems(prevCartItems => {
      const existingProduct = prevCartItems.find((item) => item.id === product.id);
  
      if (existingProduct) {
        // Le produit existe déjà dans le panier, mettez à jour la quantité
        const updatedCart = prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
  
        if (isStaged) {
          console.log(updatedCart);
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

  const deleteFromCart = (productId) => {
    setCartItems(prevCartItems => {
      const updatedCart = prevCartItems.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const decrementFromCart = (productId) => {
    setCartItems(prevCartItems => {
      const existingProduct = prevCartItems.find((item) => item.id === productId);

      if (existingProduct) {
        // Le produit existe déjà dans le panier, mettez à jour la quantité
        const updatedCart = prevCartItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      }
    }) 
  };

  const incrementFromCart = (productId) => {
    setCartItems(prevCartItems => {
      const existingProduct = prevCartItems.find((item) => item.id === productId);

      if (existingProduct) {
        // Le produit existe déjà dans le panier, mettez à jour la quantité
        const updatedCart = prevCartItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      }
    }) 
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart, decrementFromCart, incrementFromCart }}>
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
