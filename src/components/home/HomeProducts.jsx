import React, { lazy, Suspense } from 'react';
import { useProducts } from '../../hooks/useStoreItems.js';
import StatusCode from '../../app/utlis/StatusCode.js';
import Loader from '../loader/Loader.jsx';
const ProductCard = lazy(() => import('../products/ProductCard.jsx'));
const Error = lazy(() => import('../error/Error.jsx'));

export default function HomeProducts() {

    // Getting products from store.
    const { products, status } = useProducts();

    switch (status) {
        case StatusCode.LOADING:
            return <Loader />;

        case StatusCode.ERROR:
            return (
                <Suspense fallback={<Loader />}>
                    <Error />
                </Suspense>
            );

        default:
            return (
                <Suspense fallback={<Loader />}>
                    {
                        products.slice(3, 6).map(product => (
                            <ProductCard key={product.id} productDetails={product} />
                        ))
                    }
                </Suspense>
            );
    };
};
