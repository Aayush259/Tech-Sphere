import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/navbar/Nav.jsx';
import useFetch from './hooks/useFetch.js';
import { ProductDataProvider } from './context/ProductDataContext.jsx';
import { CartContextProvider } from './context/CartContext.jsx';
import useScrollToTop from './hooks/useScrollToTop.js';

export default function App() {

  // Scroll top top when route is changed.
  useScrollToTop();

  const { data, loading, error } = useFetch('https://api-backend-s5jz.onrender.com/prod');

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);

  return (
    <>
      <Nav />
      <ProductDataProvider values={{ data, loading, error }}>
        <CartContextProvider>
          <Outlet />
        </CartContextProvider>
      </ProductDataProvider>
    </>
  );
};
