import { configureStore } from '@reduxjs/toolkit';
import product from '../features/productSlice.js';
import cart from '../features/cartSlice.js';
import wishlist from '../features/wishlistSlice.js';
import { cartLocalStorageMiddleware, wishlistLocalStorageMiddleware } from '../middlewares/locarStorageMiddleware.js';

const store = configureStore({
    reducer: {
        product,
        cart,
        wishlist,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([cartLocalStorageMiddleware(), wishlistLocalStorageMiddleware()]),
});

export default store;
