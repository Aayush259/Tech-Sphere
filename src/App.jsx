import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/navbar/Nav.jsx';

export default function App() {

  return (
    <>
      <Nav />
        <Outlet />
    </>
  );
};
