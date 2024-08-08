import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/navbar/Nav.jsx';
import useScrollToTop from './hooks/useScrollToTop.js';
import { useDispatch } from 'react-redux';
import { getProducts } from './app/features/productSlice.js';

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
      <Outlet />
    </>
  );
};
