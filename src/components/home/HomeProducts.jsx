import React from 'react';
import { useProducts } from '../../hooks/useStoreItems.js';
import StatusCode from '../../app/utlis/StatusCode.js';
import ProductCard from '../products/ProductCard.jsx';
import Loader from '../loader/Loader.jsx';

export default function HomeProducts() {

    // Getting products from store.
    const { products, status } = useProducts();

    switch (status) {
        case StatusCode.LOADING:
            return <Loader />;

        case StatusCode.ERROR:
            return <div>Error...</div>;

        default:
            return (
                products.slice(3, 6).map(product => (
                    <ProductCard key={product.id} productDetails={product} />
                ))
            );
    };
};
