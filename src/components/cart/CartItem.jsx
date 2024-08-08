import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useCart from '../../hooks/useCart.js';
import useExtract from '../../hooks/useExtract.js';
import useWishlist from '../../hooks/useWishlist.js';

export default function CartItem({ productDetails }) {

    // Getting functions to manage cart.
    const { incrementItemCount, decrementItemCount, removeItemFromCart } = useCart(productDetails);

    // Getting functions to manage wishlist.
    const { addItemInWishlist, removeItemFromWishlist, isItemInWishlist } = useWishlist(productDetails);

    // Extracting product details.
    const {
        name: productName,
        price: productPrice,
        image: productImg
    } = useExtract(productDetails);

    // Product count in cart.
    const productCount = productDetails['count'];

    // Function to handle wishlist actions.
    const handleWishlistAction = () => {
        if (isItemInWishlist) {
            removeItemFromWishlist();
        } else {
            addItemInWishlist();
        }
    };

    return (
        <div
            className="shadow-product-card-shadow overflow-hidden max-w-[90vw] m-auto rounded-2xl flex flex-row items-center justify-center gap-4 py-4 px-3 flex-grow my-8"
        >
            <img
                src={productImg}
                alt={productName}
                className="w-24 md:w-32 max-h-full"
            />

            <div
                className="flex-grow text-sm md:text-xl text-indigo-900"
            >
                <p className="font-semibold">
                    {productName}
                </p>

                <p className="font-semibold text-green-500">
                    &#8377; {(productPrice * productCount).toLocaleString()}
                </p>

                <div
                    className="flex flex-row gap-2 items-center my-2"
                >
                    <button
                        className="hover:opacity-75 duration-200"
                        onClick={decrementItemCount}
                    >
                        <FontAwesomeIcon
                            icon="fa-solid fa-minus"
                            className="text-white bg-indigo-900 rounded-full h-4 w-4 p-[1.5px]"
                        />
                    </button>

                    <p className="font-semibold">{productCount}</p>

                    <button
                        className="hover:opacity-75 duration-200"
                        onClick={incrementItemCount}
                    >
                        <FontAwesomeIcon
                            icon="fa-solid fa-plus"
                            className="text-white bg-indigo-900 rounded-full h-4 w-4 p-[1.5px]"
                        />
                    </button>
                </div>

                <div
                    className="my-1 flex flex-row flex-wrap items-center justify-center gap-2"
                >
                    <button
                        className="flex-grow py-1 px-2 border border-indigo-900 uppercase duration-200 bg-indigo-900 hover:bg-white text-white hover:text-indigo-900 rounded-xl min-w-fit"
                        onClick={removeItemFromCart}
                    >
                        Remove from cart
                    </button>

                    <button
                        className="flex-grow py-1 px-2 border border-indigo-900 uppercase duration-200 bg-white hover:bg-indigo-900 text-indigo-900 hover:text-white rounded-xl min-w-fit"
                        onClick={handleWishlistAction}
                    >
                        {
                            isItemInWishlist ? 'Remove from wishlist' : 'Add to wishlist'
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    productDetails: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
    }).isRequired,
};
