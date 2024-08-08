import React from 'react';
import { useProducts } from '../../hooks/useStoreItems.js';
import ProductCard from './ProductCard.jsx';
import StatusCode from '../../app/utlis/StatusCode.js';

export default function Products() {

    // Getting products from store.
    const { products, status } = useProducts();

    switch (status) {
        case StatusCode.LOADING:
            return <div>Loading...</div>;

        case StatusCode.ERROR:
            return <div>Error...</div>;

        default:
            return (
                <div
                    className="flex flex-row flex-wrap items-stretch justify-center gap-10 my-10 lg:gap-20"
                >
                    {
                        products.map(product => (
                            <ProductCard key={product['id']} productDetails={product} />
                        ))
                    }
                </div>
            );
    };
};
