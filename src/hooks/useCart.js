import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem, decrementCount, incrementCount, removeItem } from '../app/features/cartSlice.js';
import useExtract from './useExtract.js';

const useCart = (item) => {

    // Getting all cart items from store.
    const cartItems = useSelector(state => state.cart.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Getting item id.
    const { id } = useExtract(item);

    // Function to add item in cart.
    const addItemInCart = useCallback(() => {
        dispatch(addItem(item));
    }, [item, dispatch]);

    // Function to remove item from cart.
    const removeItemFromCart = useCallback(() => {
        dispatch(removeItem(id));
    }, [id, dispatch]);

    // Function to increment item count.
    const incrementItemCount = useCallback(() => {
        dispatch(incrementCount(id));
    }, [id, dispatch]);

    // Function to decrement item count.
    const decrementItemCount = useCallback(() => {
        dispatch(decrementCount(id));
    }, [id, dispatch]);

    // Function to check whether the item is present in cart.
    const isItemInCart = useMemo(() => {
        return cartItems.some(item => item.id === id);
    }, [cartItems, id]);

    // Function to handle cart action.
    const handleCartAction = () => {
        if (isItemInCart) {
            navigate('/Tech-Sphere/cart');
        } else {
            addItemInCart();
        };
    };

    return {
        addItemInCart,
        removeItemFromCart,
        incrementItemCount,
        decrementItemCount,
        isItemInCart,
        handleCartAction
    };
};

export default useCart;
