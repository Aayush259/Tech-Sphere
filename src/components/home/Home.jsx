import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader.jsx';
const Carousel = lazy(() => import('./Carousel.jsx'));
const HomeProducts = lazy(() => import('./HomeProducts.jsx'));

export default function Home() {

    return (
        <div>
            <Suspense fallback={<Loader />}>
                <Carousel />
            </Suspense>

            <h2
                className="uppercase text-2xl md:text-3xl font-bold text-center my-10"
            >
                Products
            </h2>

            <div
                className="flex flex-row flex-wrap items-stretch justify-center gap-10 my-10 lg:gap-20"
            >
                <Suspense fallback={<Loader />}>
                    <HomeProducts />
                </Suspense>
            </div>

            <Link
                to={'products'}
                className="block m-12 text-center text-white bg-indigo-900 p-3 rounded-3xl font-semibold hover:text-indigo-900 hover:bg-white border-2 border-indigo-900 duration-200"
            >
                View More
            </Link>
        </div>
    );
};
