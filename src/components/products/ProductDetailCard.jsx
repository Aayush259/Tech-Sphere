import React from 'react';
import PropTypes from 'prop-types';

export default function ProductDetailCard({ productDetail }) {

    // Extracting product details.
    const productName = productDetail['name'];
    const productDesc = productDetail['description'];
    const productPrice = productDetail['price'] || 10000;
    const productImg = productDetail['image'];

    return (
        <div
            className="flex flex-col lg:flex-row max-w-[1200px] mx-auto lg:gap-4 p-4"
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
                className="px-4 text-indigo-900"
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
                        {productPrice}
                    </p>
                    <p className="text-lg font-normal text-indigo-900 my-3">
                        {productDesc}
                    </p>
                </div>

                <div className="flex flex-row flex-wrap w-full items-center justify-center gap-4 text-lg mt-5 pb-4 border-b border-indigo-900">

                    <button
                        className="flex-grow bg-indigo-900 text-white hover:bg-white hover:text-indigo-900 py-3 px-1 border-2 rounded-3xl duration-200 border-indigo-900 uppercase"
                    >
                        Add to Cart
                    </button>

                    <button
                        className="flex-grow bg-white text-indigo-900 hover:bg-indigo-900 hover:text-white duration-200 py-3 px-1 border-2 rounded-3xl border-indigo-900 uppercase"
                    >
                        Add to Wishlist
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
        price: PropTypes.number,
        image: PropTypes.string.isRequired,
    }).isRequired,
}
