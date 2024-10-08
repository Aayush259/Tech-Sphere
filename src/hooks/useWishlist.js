import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useExtract from './useExtract.js';
import { addItem, removeItem } from '../app/features/wishlistSlice.js';

const useWishlist = (item) => {

    // Getting all wishlist items from store.
    const wishlistItems = useSelector(state => state.wishlist.value);
    const dispatch = useDispatch();

    // Extracting id from item.
    const { id } = useExtract(item);

    // Function to add item in wishlist.
    const addItemInWishlist = useCallback(() => {
        dispatch(addItem(item));
    }, [item, dispatch]);

    // Function to remove item from wishlist.
    const removeItemFromWishlist = useCallback(() => {
        dispatch(removeItem(id));
    }, [id, dispatch]);

    // Function to check whether the item is present in wishlist.
    const isItemInWishlist = useMemo(() => {
        return wishlistItems.some(item => item.id === id);
    }, [wishlistItems, id]);

    // Function to handle wishlist actions.
    const handleWishlistAction = () => {
        if (isItemInWishlist) {
            removeItemFromWishlist();
        } else {
            addItemInWishlist();
        };
    };

    return {
        handleWishlistAction,
        isItemInWishlist
    };
};

export default useWishlist;
