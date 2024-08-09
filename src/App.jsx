import React, { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useScrollToTop from './hooks/useScrollToTop.js';
import { useDispatch } from 'react-redux';
import { getProducts } from './app/features/productSlice.js';
import Nav from './components/navbar/Nav.jsx';
import Loader from './components/loader/Loader.jsx';

export default function App() {

  // Scroll top top when route is changed.
  useScrollToTop();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
