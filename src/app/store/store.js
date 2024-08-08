import { configureStore } from '@reduxjs/toolkit';
import product from '../features/productSlice.js';
import cart from '../features/cartSlice.js';

const store = configureStore({
    reducer: {
        product,
        cart,
    },
});

export default store;
