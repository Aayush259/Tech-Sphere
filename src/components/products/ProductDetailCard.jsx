import React from 'react';
import PropTypes from 'prop-types';
import useCart from '../../hooks/useCart.js';
import useExtract from '../../hooks/useExtract.js';
import useWishlist from '../../hooks/useWishlist.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProductDetailCard({ productDetail }) {

    // Getting functions to manage cart.
    const { isItemInCart, handleCartAction } = useCart(productDetail);

    // Getting functions to manage wishlist.
    const { handleWishlistAction, isItemInWishlist } = useWishlist(productDetail);

    // Extracting product details.
    const {
        name: productName,
        description: productDesc,
        price: productPrice,
        image: productImg
    } = useExtract(productDetail);

    return (
        <div
            className="flex flex-col lg:flex-row flex-grow max-w-[1200px] mx-auto lg:gap-8 p-4"
        >
            <div
                className="mx-auto my-5 shadow-product-card-shadow w-fit p-10 rounded-xl overflow-hidden shrink-0 flex items-center justify-center"
            >
                <img
                    src={productImg}
                    alt={productName}
                    className="block m-auto max-h-60"
                />
            </div>

            <div
                className="px-4 text-indigo-900 flex-grow"
            >
                <h2
                    className="text-2xl lg:text-3xl font-semibold mt-8"
                >
                    {productDetail['name']}
                </h2>

                <div className="text-xl font-semibold my-3 text-green-500">
                    <p>
                        <span>Price: </span>
                        &#8377;
                        {productPrice.toLocaleString()}
                    </p>
                    <p className="text-lg font-normal text-indigo-900 my-3">
                        {productDesc}
                    </p>
                </div>

                <div className="flex flex-row flex-wrap w-full items-center justify-center gap-4 text-lg mt-5 pb-4 border-b border-indigo-900">

                    <button
                        className="flex-grow bg-indigo-900 text-white hover:bg-white hover:text-indigo-900 py-3 px-2 border-2 rounded-3xl duration-200 border-indigo-900 uppercase flex flex-row items-center justify-center gap-2"
                        onClick={handleCartAction}
                    >
                        {
                            isItemInCart ? (
                                <>
                                    View in cart
                                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                                </>
                            ) : (
                                <>
                                    Add to cart
                                    <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
                                </>
                            )
                        }
                    </button>

                    <button
                        className="flex-grow flex flex-row items-center justify-center gap-2 bg-white text-indigo-900 hover:bg-indigo-900 hover:text-white duration-200 py-3 px-1 border-2 rounded-3xl border-indigo-900 uppercase"
                        onClick={handleWishlistAction}
                    >
                        {
                            isItemInWishlist ? (
                                <>
                                    Remove from wishlist
                                    <FontAwesomeIcon className="text-red-600" icon="fa-solid fa-heart" />
                                </>
                            ) : (
                                <>
                                    Add to wishlist
                                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                                </>
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

ProductDetailCard.propTypes = {
    productDetail: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};
