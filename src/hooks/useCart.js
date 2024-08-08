import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrementCount, incrementCount, removeItem } from '../app/features/cartSlice.js';

const useCart = (item) => {

    // Getting all cart items from state.
    const cartItems = useSelector(state => state.cart.value);
    const dispatch = useDispatch();

    // Extracting item details.
    const id = item['id'];
    const name = item['name'];
    const price = parseInt(item['price'].replace(/[₹,]/g, ''));
    const image = item['image'];
    const description = item['description'];

    // Object of product details.
    const product = {
        id, name, price, image, description,
    }

    // Function to add item in cart.
    const addItemInCart = () => {
        dispatch(addItem(item));
    };

    // Function to remove item from cart.
    const removeItemFromCart = () => {
        dispatch(removeItem(id));
    };

    // Function to increment item count.
    const incrementItemCount = () => {
        dispatch(incrementCount(id));
    };

    // Function to decrement item count.
    const decrementItemCount = () => {
        dispatch(decrementCount(id));
    };

    // Function to check whether the item is present in cart.
    const isItemInCart = useMemo(() => {
        return cartItems.some(item => item.id === id);
    }, [cartItems, id]);

    return {
        product,
        addItemInCart,
        removeItemFromCart,
        incrementItemCount,
        decrementItemCount,
        isItemInCart
    };
};

export default useCart;
