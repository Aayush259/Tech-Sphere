import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useStoreItems.js';
import StatusCode from '../../app/utlis/StatusCode.js';
import ProductDetailCard from './ProductDetailCard.jsx';
import Loader from '../loader/Loader.jsx';
import Error from '../error/Error.jsx';

export default function ProductDetail() {

    // Getting products from store.
    const { products, status } = useProducts();

    // State for the product whose detail has to be shown.
    const [productDetail, setProductDetail] = useState(null);

    // Getting Product name from URL.
    const { productId } = useParams();

    // Function to get product detail and update it to state.
    const addProductDetail = useCallback(() => {
        // Getting index of required product from products state.
        const requiredProductIndex = products.findIndex(product => product.id === productId);

        // If product is not found, then return.
        if (requiredProductIndex === -1) return;

        // Update product detail.
        setProductDetail(products[requiredProductIndex]);

    }, [products, productId, setProductDetail]);

    useEffect(() => {
        addProductDetail();
    }, [products, status, addProductDetail]);

    switch (status) {
        case StatusCode.ERROR:
            return <Error />;
        default:
            return (
                <div className="min-h-[80vh] flex items-center justify-center">
                    {
                        productDetail ? <ProductDetailCard productDetail={productDetail} /> : <Loader />
                    }
                </div>
            );
    };
};
