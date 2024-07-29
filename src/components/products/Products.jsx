import React from 'react';
import { useProductData } from '../../context/ProductDataContext.jsx';
import ProductCard from './ProductCard.jsx';

export default function Products() {

    // Getting product data from context.
    const { data, loading, error } = useProductData();

    return (
        <>
            <div
                className="flex flex-row flex-wrap items-stretch justify-center gap-10 my-10 lg:gap-20"
            >
                {
                    loading ? (
                        <div>Loading...</div>
                    ) : error && !data ? (
                        <div>{error.message}</div>
                    ) : (
                        data && data.map(item => (
                            <ProductCard key={item['_id']} productDetails={item} />
                        ))
                    )
                }
            </div>
        </>
    );
};
