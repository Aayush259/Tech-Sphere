import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import useCart from '../../hooks/useCart.js';
import useExtract from '../../hooks/useExtract.js';
import useWishlist from '../../hooks/useWishlist.js';

export default function ProductCard({ productDetails }) {

    // Getting functions to manage cart.
    const { isItemInCart, handleCartAction } = useCart(productDetails);

    // Getting functions to manage wishlist.
    const { handleWishlistAction, isItemInWishlist } = useWishlist(productDetails);

    // Extracting product details.
    const {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
    } = useExtract(productDetails);

    return (
        <div className="relative w-64 max-w-[80vw] p-4 pt-10 rounded-2xl shadow-product-card-shadow overflow-hidden duration-300">

            <button
                className="absolute top-3 right-3 hover:opacity-70"
                onClick={handleWishlistAction}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    className={`${isItemInWishlist ? "text-red-500" : "text-slate-400"} h-6`}
                />
            </button>

            <img
                src={productImage}
                alt={productName}
                className="block m-auto h-60 max-w-full"
            />

            <div
                className="my-4 tracking-wider"
            >
                <div
                    className="px-3"
                >
                    <p
                        className="font-bold text-xl text-indigo-900 text-ellipsis overflow-hidden text-nowrap whitespace-nowrap"
                    >
                        {productName}
                    </p>

                    <p
                        className="my-2 text-lg font-bold text-indigo-900"
                    >
                        &#8377; {productPrice.toLocaleString()}
                    </p>
                </div>

                <button
                    className="bg-indigo-900 p-2 my-3 w-full block text-center text-white font-semibold rounded-3xl hover:bg-white hover:text-indigo-900 border-2 border-indigo-900 duration-200"
                    onClick={handleCartAction}
                >
                    {
                        isItemInCart ? 'Go to Cart' : 'Add To Cart'
                    }
                </button>

                <Link
                    to={`/Tech-Sphere/products/${productId}`}
                    className="bg-indigo-900 p-2 my-3 block text-center text-white font-semibold rounded-3xl hover:bg-white hover:text-indigo-900 border-2 border-indigo-900 duration-200"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    productDetails: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
};
