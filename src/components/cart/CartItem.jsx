import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartData } from '../../context/CartContext.jsx';

export default function CartItem({ productDetails }) {

    // Getting product count increment and decrement functions from context.
    const { incrementItemCount, decrementItemCount, removeItemFromCart } = useCartData();

    // Extracting product details.
    const productId = productDetails['_id'];
    const productName = productDetails['name'];
    const productPrice = productDetails['price'] || 9999;
    const productImg = productDetails['image'];
    const productCount = productDetails['count'];

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
                        onClick={() => decrementItemCount(productId)}
                    >
                        <FontAwesomeIcon
                            icon="fa-solid fa-minus"
                            className="text-white bg-indigo-900 rounded-full h-4 w-4 p-[1.5px]"
                        />
                    </button>

                    <p className="font-semibold">{productCount}</p>

                    <button
                        className="hover:opacity-75 duration-200"
                        onClick={() => incrementItemCount(productId)}
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
                        onClick={() => removeItemFromCart(productId)}
                    >
                        Remove from cart
                    </button>

                    <button
                        className="flex-grow py-1 px-2 border border-indigo-900 uppercase duration-200 bg-white hover:bg-indigo-900 text-indigo-900 hover:text-white rounded-xl min-w-fit"
                    >
                        Add to wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    productDetails: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number,
        image: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
    }).isRequired,
};
