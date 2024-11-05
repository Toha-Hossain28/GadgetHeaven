import { createContext, useState } from "react";
import toast from "react-hot-toast";

// Create the context
export const ItemsContext = createContext();

// Create a provider component
export function ItemsProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    if (!cartItems.includes(itemId)) {
      setCartItems((prevItems) => [...prevItems, itemId]);
      toast.success("Item Added to your cart");
    }
  };

  // Function to add an item to the wishlist
  const addToWishlist = (itemId) => {
    if (!wishlistItems.includes(itemId)) {
      setWishlistItems((prevItems) => [...prevItems, itemId]);
      toast.success("Item Added to your wishlist");
    } else {
      toast.error("Item exist in wishlist");
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((id) => id !== itemId));
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (itemId) => {
    setWishlistItems((prevItems) => prevItems.filter((id) => id !== itemId));
  };

  return (
    <ItemsContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
