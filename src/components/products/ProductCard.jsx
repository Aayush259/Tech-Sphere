import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export default function ProductCard({ productDetails }) {

    // Getting product name, price and image.
    const productName = productDetails['name'];
    const productPrice = productDetails['price'] || 10000;
    const productImage = productDetails['image'];

    return (
        <div className="relative w-64 max-w-[80vw] p-4 pt-10 rounded-2xl shadow-product-card-shadow overflow-hidden duration-300">

            <button className="absolute top-3 right-3 hover:opacity-70">
                <FontAwesomeIcon
                icon="fa-solid fa-heart"
                className={`text-slate-400 h-6`}
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
                        &#8377; {productPrice}
                    </p>
                </div>

                <button
                    className="bg-indigo-900 p-2 my-3 w-full block text-center text-white font-semibold rounded-3xl hover:bg-white hover:text-indigo-900 border-2 border-indigo-900 duration-200"
                >
                    Add To Cart
                </button>

                <Link
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
        price: PropTypes.number,
        image: PropTypes.string.isRequired
    }).isRequired,
};
