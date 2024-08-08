import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import StatusCode from '../utlis/StatusCode.js';

const initialState = {
    value: [],
    status: StatusCode.IDLE,
};

// Fetch products data from API.
export const getProducts = createAsyncThunk('product/get', async () => {
    const data = await fetch('https://api-backend-s5jz.onrender.com/prod');
    const response = await data.json();
    return response;
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.status = StatusCode.LOADING;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            const products = [...action.payload];
            products.forEach(product => {
                const priceString = product.price.replace(/[₹,]/g, '');
                product.price = parseInt(priceString);
            });
            state.value = products;
            state.status = StatusCode.IDLE;
        })
        .addCase(getProducts.rejected, (state) => {
            state.status = StatusCode.ERROR;
        })
    },
});

export default productSlice.reducer;
