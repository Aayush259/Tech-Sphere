import { createSlice } from '@reduxjs/toolkit';
import { add, remove, increment, decrement } from '../reducers/cartReducers';

const initialState = {
    value: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: add,
        removeItem: remove,
        incrementCount: increment,
        decrementCount: decrement,
    },
});

export const { addItem, removeItem, incrementCount, decrementCount } = cartSlice.actions;

export default cartSlice.reducer;
