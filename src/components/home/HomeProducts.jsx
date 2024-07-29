import React from 'react';
import ProductCard from '../products/ProductCard.jsx';
import { useProductData } from '../context/ProductDataContext.jsx';

export default function HomeProducts() {

    // Getting product data from context.
    const { data, loading, error } = useProductData();

    return (
        <div
            className="flex flex-row flex-wrap items-stretch justify-center gap-10 my-10 lg:gap-20"
        >
            {
                loading ? (
                    <div>Loading...</div>
                ) : error && !data ? (
                    <div>{error.message}</div>
                ) : (
                    data && data.slice(3, 6).map(item => (
                        <ProductCard key={item['_id']} productDetails={item} />
                    ))
                )
            }
        </div>
    );
};
