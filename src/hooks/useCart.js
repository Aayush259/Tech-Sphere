import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrementCount, incrementCount, removeItem } from '../app/features/cartSlice.js';
import useExtract from './useExtract.js';

const useCart = (item) => {

    // Getting all cart items from state.
    const cartItems = useSelector(state => state.cart.value);
    const dispatch = useDispatch();

    // Getting item id.
    const { id } = useExtract(item);

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
        addItemInCart,
        removeItemFromCart,
        incrementItemCount,
        decrementItemCount,
        isItemInCart
    };
};

export default useCart;
