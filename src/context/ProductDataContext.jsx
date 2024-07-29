import React, { createContext, useContext } from 'react';

// Creating context for product data.
const ProductData = createContext([]);

// Product data context provider.
const ProductDataProvider = ({ values, children }) => {

    return (
        <ProductData.Provider value={values}>
            {children}
        </ProductData.Provider>
    );
};

// Custom hook to use product data context in other components.
const useProductData = () => useContext(ProductData);

export { useProductData, ProductDataProvider };
