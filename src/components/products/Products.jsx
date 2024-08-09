import React, { lazy, Suspense, useCallback, useState } from 'react';
import { useProducts } from '../../hooks/useStoreItems.js';
import StatusCode from '../../app/utlis/StatusCode.js';
import Loader from '../loader/Loader.jsx';
import Search from './Search.jsx';
const ProductCard = lazy(() => import('./ProductCard.jsx'));
const Error = lazy(() => import('../error/Error.jsx'));

export default function Products() {

    // Getting products from store.
    const { products, status } = useProducts();

    // Products to display on screen.
    const [productsToDisplay, setProductsToDisplay] = useState([...products]);

    // Function to display products which are searched by user.
    const search = useCallback((name) => {
        // If the name is empty, or there is no name, then display all products, else show searched products.
        if (!name) {
            setProductsToDisplay(products);
        } else {
            const searchedProducts = products.filter(product => product['name'].toLowerCase().startsWith(name.toLowerCase()));
            setProductsToDisplay(searchedProducts);
        }
    }, [products, setProductsToDisplay]);

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
                <>
                    <Search search={search} />
                    <div
                        className="flex flex-row flex-wrap items-stretch justify-center gap-10 mt-5 mb-10 lg:gap-20"
                    >
                        <Suspense fallback={<Loader />}>
                            {
                                productsToDisplay.length > 0 ? (
                                    productsToDisplay.map(product => (
                                        <ProductCard key={product['id']} productDetails={product} />
                                    ))
                                ) : (
                                    <p
                                        className="text-2xl font-semibold text-indigo-900"
                                    >
                                        No products found
                                    </p>
                                )
                            }
                        </Suspense>
                    </div>
                </>
            );
    };
};
