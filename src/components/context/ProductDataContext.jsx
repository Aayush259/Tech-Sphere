import React, { createContext, useContext } from 'react';

const ProductData = createContext([]);

const ProductDataProvider = ({ values, children }) => {

    return (
        <ProductData.Provider value={values}>
            {children}
        </ProductData.Provider>
    );
};

const useProductData = () => useContext(ProductData);

export { useProductData, ProductDataProvider };
