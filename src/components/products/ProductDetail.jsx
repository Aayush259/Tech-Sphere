import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductData } from '../context/ProductDataContext.jsx';
import ProductDetailCard from './ProductDetailCard.jsx';

export default function ProductDetail() {

    // Getting product data from context.
    const { data, loading, error } = useProductData();

    const [productDetail, setProductDetail] = useState([]);

    // Getting Product name.
    const { productName } = useParams();

    useEffect(() => {
        if (data) {
            setProductDetail(...data.filter(item => item['name'] === productName));
        }
    }, [data, loading, error]);


    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            {
                loading ? (
                    <div>Loading...</div>
                ) : error && !data ? (
                    <div>{error.message}</div>
                ) : data && productDetail ? (
                    <ProductDetailCard productDetail={productDetail} />
                ) : (
                    <div>Item Not Found</div>
                )
            }
        </div >
    );
};
