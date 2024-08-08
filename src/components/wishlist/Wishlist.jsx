import React from 'react';
import { useWishlistItems } from '../../hooks/useStoreItems.js';
import ProductCard from '../products/ProductCard.jsx';

export default function Wishlist() {

    // Getting wishlist items.
    const wishlistItems = useWishlistItems();

    return (
        <div
            className="flex flex-row flex-wrap items-stretch justify-center gap-10 my-10 lg:gap-20"
        >
            {
                wishlistItems.length > 0 ? (
                    wishlistItems.map(item => (
                        <ProductCard key={item['id']} productDetails={item} />
                    ))
                ) : (
                    <div
                        className="text-xl md:text-2xl font-semibold my-20 text-center text-indigo-900"
                    >
                        Nothing in wishlist.
                    </div>
                )
            }
        </div>
    );
};
