import { useMemo } from 'react';
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
    const addItemInWishlist = () => {
        dispatch(addItem(item));
    };

    // Function to remove item from wishlist.
    const removeItemFromWishlist = () => {
        dispatch(removeItem(id));
    };

    // Function to check whether the item is present in wishlist.
    const isItemInWishlist = useMemo(() => {
        return wishlistItems.some(item => item.id === id);
    }, [wishlistItems, id]);

    return {
        addItemInWishlist,
        removeItemFromWishlist,
        isItemInWishlist
    };
};

export default useWishlist;
