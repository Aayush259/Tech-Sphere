import React from 'react';
import ProductCard from '../products/ProductCard.jsx';
import { useProductData } from '../context/ProductDataContext.jsx';
import { Link } from 'react-router-dom';

export default function HomeProducts() {

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
                        data && data.slice(3, 6).map(item => (
                            <ProductCard key={item['_id']} productDetails={item} />
                        ))
                    )
                }
            </div>

            <Link
            className="block m-12 text-center text-white bg-indigo-900 p-3 rounded-3xl font-semibold hover:text-indigo-900 hover:bg-white border-2 border-indigo-900 duration-200"
            >
            View More
            </Link>
        </>
    );
};
