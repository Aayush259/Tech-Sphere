import { configureStore } from '@reduxjs/toolkit';
import product from '../features/productSlice.js';
import cart from '../features/cartSlice.js';
import wishlist from '../features/wishlistSlice.js';

const store = configureStore({
    reducer: {
        product,
        cart,
        wishlist,
    },
});

export default store;
