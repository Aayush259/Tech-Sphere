import React, { lazy, Suspense } from 'react';
import { useProducts } from '../../hooks/useStoreItems.js';
import StatusCode from '../../app/utlis/StatusCode.js';
import Loader from '../loader/Loader.jsx';
const ProductCard = lazy(() => import('./ProductCard.jsx'));
const Error = lazy(() => import('../error/Error.jsx'));

export default function Products() {

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
                <div
                    className="flex flex-row flex-wrap items-stretch justify-center gap-10 my-10 lg:gap-20"
                >
                    <Suspense fallback={<Loader />}>
                        {
                            products.map(product => (
                                <ProductCard key={product['id']} productDetails={product} />
                            ))
                        }
                    </Suspense>
                </div>
            );
    };
};
