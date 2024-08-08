import { createSlice } from '@reduxjs/toolkit';
import { add, remove } from '../reducers/wishlistReducers';

const initialState = {
    value: JSON.parse(localStorage.getItem('wishlistItems')) || [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addItem: add,
        removeItem: remove,
    },
});

export const { addItem, removeItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
