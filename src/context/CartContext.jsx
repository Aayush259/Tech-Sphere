import React, { createContext, useContext, useEffect, useState } from 'react';

// Creating context for cart data.
const CartContext = createContext();

// Context provider for cart data.
const CartContextProvider = ({ children }) => {

    // State for cart items.
    const [cartItems, setCartItems] = useState(
        localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    );

    // Update local storage when cart items updated.
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Function to increment count of item in cart.
    const incrementItemCount = (productId) => {
        setCartItems(prevCartItems => {
            const updatedItems = prevCartItems.map(item => {
                if (item['_id'] === productId) {
                    return { ...item, count: item['count'] + 1 };
                }

                return item;
            });

            return updatedItems;
        });
    };

    // Function to decrement count of item in cart.
    const decrementItemCount = (productId) => {
        setCartItems(prevCartItems => {
            const updatedItems = prevCartItems.map(item => {
                if ((item['_id'] === productId) && (item['count'] > 0)) {
                    return { ...item, count: item['count'] - 1 };
                }

                return item;
            }).filter(item => item['count'] > 0);

            return updatedItems;
        });
    };

    // Function to add item to cart.
    const addItemToCart = (item) => {
        setCartItems(prevCartItems => {

            const itemIndex = prevCartItems.findIndex(cartItem => cartItem['_id'] === item['_id']);

            if (itemIndex !== -1) {
                // Item already in cart, increment its count
                const updatedItems = [...prevCartItems];
                updatedItems[itemIndex]['count'] += 1;
                return updatedItems;
            } else {
                // Item not in cart, add it with count 1.
                return [...prevCartItems, { ...item, count: 1 }];
            }
        });
    };

    // Function to remove item from cart.
    const removeItemFromCart = (productId) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item['_id'] !== productId));
    };

    // Function to check whether an item is in cart or not.
    const isItemInCart = (productId) => {
        return cartItems.some(item => item['_id'] === productId);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, incrementItemCount, decrementItemCount, isItemInCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart data in any component.
const useCartData = () => useContext(CartContext);

export { useCartData, CartContextProvider };
