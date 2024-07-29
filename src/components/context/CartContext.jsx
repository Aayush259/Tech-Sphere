import React, { createContext, useContext, useEffect, useState } from 'react';

// Creating context for cart data.
const CartContext = createContext();

// Context provider for cart data.
const CartContextProvider = ({ children }) => {

    // State for cart items.
    const [cartItems, setCartItems] = useState([]);

    // Get cart items from local storage if exists.
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    // Update local storage when cart items updated.
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Function to increment count of item in cart.
    const incrementItemCount = (itemName) => {
        setCartItems(prevCartItems => {
            const updatedItems = prevCartItems.map(item => {
                if (item.name === itemName) {
                    return { ...item, count: item['count'] + 1 };
                }

                return item;
            });

            return updatedItems;
        });
    };

    // Function to decrement count of item in cart.
    const decrementItemCount = (itemName) => {
        setCartItems(prevCartItems => {
            const updatedItems = prevCartItems.map(item => {
                if ((item.name === itemName) && (item['count'] > 0)) {
                    return { ...item, count: item['count'] - 1 };
                }

                return item;
            }).filter(item => item['count'] > 0);

            return updatedItems;
        });
    };

    // Function to add item to cart.
    const addItemsToCart = (item) => {
        setCartItems(prevCartItems => {

            const itemIndex = prevCartItems.findIndex(cartItem => cartItem['name'] === item['name']);

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
    const removeItemFromCart = (itemName) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item['name'] !== itemName));
    };

    // Function to check whether an item is in cart or not.
    const isItemInCart = (itemName) => {
        return cartItems.some(item => item['name'] === itemName);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemsToCart, removeItemFromCart, incrementItemCount, decrementItemCount, isItemInCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart data in any component.
const useCartData = () => useContext(CartContext);

export { useCartData, CartContextProvider }
