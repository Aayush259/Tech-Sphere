import { createSlice } from '@reduxjs/toolkit';
import { add, remove, increment, decrement, empty } from '../reducers/cartReducers.js';

const initialState = {
    value: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: add,
        removeItem: remove,
        incrementCount: increment,
        decrementCount: decrement,
        emptyCart: empty
    },
});

export const { addItem, removeItem, incrementCount, decrementCount, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
